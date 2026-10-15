/* gxzsb boot v358 — 登录优先加载管理器
   体验：打开即见登录界面（表单可输入），题库数据在登录后/浏览时后台静默加载。
   流程：
     ① 渲染首帧：未登录 → 登录壳（可输入，提交前轻提示"正在初始化登录组件"）；
                  已登录 → 品牌加载页（logo + 进度条）。
     ② PHASE1 加载登录最小依赖 supabase + sb-config → 注入 app.js，登录页立即可操作。
     ③ PHASE2 后台静默加载 9 个数据脚本 → 全部就绪后置 GXZSB_DATA_READY=true
               并派发 gxzsb:data-ready，app.js 据此重建题库快照并重渲染。
   失败：必选脚本失败给出重试卡片；supabase 失败仅降级登录，不阻塞主流程。 */
(function () {
  "use strict";

  var V = "414";          // 与 index.html 的版本号保持一致
  var TIMEOUT = 30000;    // 单个脚本加载超时（毫秒），30s 避免慢网误杀
  var MAX_RETRY = 1;      // 失败自动重试次数

  /* 登录所需最小依赖（先加载，注入 app.js 后登录页立即可操作） */
  var AUTH_SCRIPTS = [
    { src: "vendor/supabase.min.js", required: false, label: "登录组件", verify: "" },
    { src: "sb-config.js",           required: true,  label: "配置",     verify: "SB_CONFIG" }
  ];
  /* 题库等大数据脚本：登录后后台静默加载 */
  var DATA_SCRIPTS = [
    { src: "all-bank.js",        required: true, label: "题库",     verify: "STUDY_DATA" },
    { src: "all-learn.js",       required: true, label: "考点精讲", verify: "STUDY_DATA" },
    { src: "learn-book-2027.js", required: true, label: "学习手册", verify: "STUDY_DATA" },
    { src: "formula-book.js",    required: true, label: "公式书",   verify: "STUDY_DATA" },
    { src: "wordbook.js",        required: true, label: "单词书",   verify: "WORDS" },
    { src: "kp-detail.js",       required: true, label: "考点详解", verify: "KP_DETAIL" },
    { src: "syllabus.js",        required: true, label: "考纲",     verify: "SYLLABUS" },
    { src: "syllabus-sample.js", required: true, label: "样卷",     verify: "STUDY_DATA" },
    { src: "exam-plans-v2.js",   required: true, label: "考纲卷",   verify: "STUDY_DATA" }
  ];

  function $(id) { return document.getElementById(id); }

  /* 登录态：supabase 把 session 持久化为 localStorage 的 "sb-*-auth-token" */
  function isLoggedIn() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("sb-") === 0 && k.indexOf("-auth-token") > 0) {
          var raw = localStorage.getItem(k);
          if (raw && raw !== "null") return true;
        }
      }
    } catch (e) {}
    return false;
  }

  /* ---------- 加载页进度 ---------- */
  function setProgress(done, total) {
    var pct = total ? Math.round(done / total * 100) : 0;
    var bar = $("bootBar");
    if (bar) bar.style.width = pct + "%";
    var count = $("bootCount");
    if (count) count.textContent = Math.min(done, total) + " / " + total;
    var sub = $("bootSub");
    if (sub) sub.textContent = "正在加载题库数据…";
  }

  /* ---------- 浮层提示 ---------- */
  var toastTimer = null;
  function toastEl() {
    var t = $("bootToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "bootToast";
      document.body.appendChild(t);
    }
    return t;
  }
  /* 轻提示：短暂显示后自动消失 */
  function toast(msg, ms) {
    var t = toastEl();
    if (toastTimer) clearTimeout(toastTimer);
    t.className = "boot-toast";
    t.textContent = msg;
    t.classList.remove("is-hide");
    toastTimer = setTimeout(function () { t.classList.add("is-hide"); }, ms || 1600);
  }
  /* 失败提示：常驻，带重新加载入口 */
  function toastFail(failedLabels) {
    var t = toastEl();
    if (toastTimer) clearTimeout(toastTimer);
    t.className = "boot-toast is-error";
    t.innerHTML = "部分数据加载失败：" + failedLabels.join("、") +
      ' <button id="bootRetry" type="button" class="boot-retry">重新加载</button>';
    var btn = $("bootRetry");
    if (btn) btn.addEventListener("click", function () { location.reload(); });
  }
  /* 加载成功：立即隐藏所有浮层提示，避免残留 */
  function toastDone() {
    if (toastTimer) clearTimeout(toastTimer);
    var t = $("bootToast");
    if (t) t.classList.add("is-hide");
  }

  /* 登录壳阶段：拦截登录/注册/先逛逛等点击，提示初始化中（PHASE1 秒级完成） */
  function blockClick(e) {
    if (e.target && e.target.closest && e.target.closest("[data-act],[data-nav]")) {
      e.preventDefault();
      e.stopPropagation();
      toast("正在初始化登录组件，请稍候…");
    }
  }
  function unblockClick() {
    document.removeEventListener("click", blockClick, true);
  }

  /* 登录壳：与 app.js viewLogin 同视觉（可输入），app.js 注入后无缝接管 */
  function loginShellHtml() {
    return '<div class="login-wrap">' +
      '<div class="login-hero">' +
        '<div class="logo">⚡</div>' +
        '<div class="name">广西专升本练习</div>' +
        '<div class="sub">登录后云端同步学习进度</div>' +
      '</div>' +
      '<div class="login-tabs" role="tablist">' +
        '<button type="button" class="is-on" role="tab" aria-selected="true" data-act="boot-login">登录</button>' +
        '<button type="button" role="tab" aria-selected="false" data-act="boot-register">注册</button>' +
      '</div>' +
      '<div class="card" style="padding:24px">' +
        '<div class="login-field"><label for="bootLoginEmail">邮箱</label>' +
        '<input id="bootLoginEmail" type="email" placeholder="your@email.com" autocomplete="email" /></div>' +
        '<div class="login-field"><label for="bootLoginPwd">密码</label>' +
        '<input id="bootLoginPwd" type="password" placeholder="至少6位" autocomplete="current-password" /></div>' +
        '<button type="button" class="login-submit" data-act="boot-submit">登录</button>' +
        '<div class="login-msg" id="bootLoginMsg"></div>' +
        '<button type="button" class="login-forgot" data-act="boot-forgot">忘记密码？</button>' +
      '</div>' +
      '<button type="button" class="login-guest" data-act="boot-guest">先逛逛，稍后登录</button>' +
    '</div>';
  }

  /* 首帧：有登录态→极简小转圈（静默加载）；无登录态→登录壳 */
  function shell() {
    document.body.classList.add("boot-loading");
    var app = $("app");
    if (app) {
      if (isLoggedIn()) {
        app.innerHTML = '<div class="boot" style="padding-top:40vh;text-align:center;opacity:.5">⟳</div>';
      } else {
        app.innerHTML = loginShellHtml();
      }
    }
    document.addEventListener("click", blockClick, true);
  }

  /* 加载单个脚本：下载成功后校验其定义的全局键，防「假成功」（如 SW 兜底返回 HTML） */
  function loadScript(src, timeout, verify) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      var done = false;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        s.onload = s.onerror = null;
        try { document.head.removeChild(s); } catch (e) {}
        reject(new Error("timeout:" + src));
      }, timeout);
      s.onload = function () {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (verify && !(typeof window !== "undefined" && window[verify])) {
          try { document.head.removeChild(s); } catch (e) {}
          reject(new Error("verify:" + src + " (missing " + verify + ")"));
          return;
        }
        resolve();
      };
      s.onerror = function () {
        if (done) return;
        done = true;
        clearTimeout(timer);
        try { document.head.removeChild(s); } catch (e) {}
        reject(new Error("error:" + src));
      };
      document.head.appendChild(s);
    });
  }

  /* 单脚本加载：带超时与重试，返回失败标签（null 表示成功） */
  async function loadWithRetry(script, index, total) {
    for (var attempt = 0; attempt <= MAX_RETRY; attempt++) {
      try {
        await loadScript(script.src + "?v=" + V, TIMEOUT, script.verify);
        return null;
      } catch (e) {
        if (attempt < MAX_RETRY) {
          toast(script.label + "加载失败，正在重试…", 2600);
          await new Promise(function (r) { setTimeout(r, 500); });
        } else {
          return script.label;
        }
      }
    }
    return script.label;
  }

  function injectAppJs() {
    var appJs = document.createElement("script");
    appJs.src = "app.js?v=" + V;
    appJs.onerror = function () { toastFail(["主程序 app.js"]); };
    document.head.appendChild(appJs);
  }

  async function boot() {
    shell();

    /* PHASE1：登录最小依赖就绪 → 注入 app.js（登录页立即可操作） */
    var authFailed = [];
    for (var i = 0; i < AUTH_SCRIPTS.length; i++) {
      var af = await loadWithRetry(AUTH_SCRIPTS[i], i, AUTH_SCRIPTS.length);
      if (af && AUTH_SCRIPTS[i].required) authFailed.push(af);
      // 非必要（supabase）失败：继续，登录功能由 app.js 降级处理
    }
    if (authFailed.length) { toastFail(authFailed); return; }
    unblockClick();
    toastDone();
    document.body.classList.remove("boot-loading");
    injectAppJs();

    /* PHASE2：小文件先并行，大文件(all-bank.js)最后加载，避免连接排队超时 */
    var doneCount = 0;
    var total = DATA_SCRIPTS.length;
    var failed = [];
    // 大文件单独排最后，其余并行
    var big = DATA_SCRIPTS.filter(function(s){ return s.src === "all-bank.js"; });
    var small = DATA_SCRIPTS.filter(function(s){ return s.src !== "all-bank.js"; });
    var smallPromises = small.map(function(script) {
      return loadWithRetry(script, 0, total).then(function(f) {
        doneCount++;
        setProgress(doneCount, total);
        if (f && script.required) failed.push(f);
      });
    });
    await Promise.all(smallPromises);
    // 大文件单独加载
    for (var bi = 0; bi < big.length; bi++) {
      var bf = await loadWithRetry(big[bi], 0, total);
      doneCount++;
      setProgress(doneCount, total);
      if (bf && big[bi].required) failed.push(bf);
    }
    if (failed.length) { toastFail(failed); return; }
    /* 就绪：通知 app.js 重建题库快照并重渲染（监听在 window 上，须在 window 派发） */
    window.GXZSB_DATA_READY = true;
    toastDone();
    try { window.dispatchEvent(new CustomEvent("gxzsb:data-ready")); } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
