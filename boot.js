/* gxzsb boot v356 — 首屏加载管理器
   解决：11 个 defer 脚本串行阻塞首屏渲染（任一挂起即永久卡「加载中…」）
   方案：首屏即渲染与 App 同风格的品牌加载页（logo + 站点名 + 主题色进度条，
         骨架内联在 index.html，第一帧即可见），数据脚本后台按序加载
         （30s 超时 / 失败重试 1 次 / 失败给出重试入口），加载期间隐藏
         topbar/tabbar/side-nav 等空壳导航避免割裂，全部就绪后注入 app.js
         完成真实初始化，app.js 内部逻辑零改动。
   非必要脚本（supabase 登录组件）失败仅降级登录，不阻塞主流程。 */
(function () {
  "use strict";

  var V = "356";          // 与 index.html 的版本号保持一致
  var TIMEOUT = 30000;    // 单个脚本加载超时（毫秒），30s 避免慢网误杀
  var MAX_RETRY = 1;      // 失败自动重试次数

  var SCRIPTS = [
    { src: "vendor/supabase.min.js", required: false, label: "登录组件", verify: "" },
    { src: "sb-config.js",           required: true,  label: "配置",     verify: "SB_CONFIG" },
    { src: "all-bank.js",            required: true,  label: "题库",     verify: "STUDY_DATA" },
    { src: "all-learn.js",           required: true,  label: "考点精讲", verify: "STUDY_DATA" },
    { src: "learn-book-2027.js",     required: true,  label: "学习手册", verify: "STUDY_DATA" },
    { src: "formula-book.js",        required: true,  label: "公式书",   verify: "STUDY_DATA" },
    { src: "wordbook.js",            required: true,  label: "单词书",   verify: "WORDS" },
    { src: "kp-detail.js",           required: true,  label: "考点详解", verify: "KP_DETAIL" },
    { src: "syllabus.js",            required: true,  label: "考纲",     verify: "SYLLABUS" },
    { src: "syllabus-sample.js",     required: true,  label: "样卷",     verify: "STUDY_DATA" },
    { src: "exam-plans-v2.js",       required: true,  label: "考纲卷",   verify: "STUDY_DATA" }
  ];

  function $(id) { return document.getElementById(id); }

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

  /* 数据加载完成前，拦截页面内所有业务点击，仅提示原因 */
  function blockClick(e) {
    if (e.target && e.target.closest && e.target.closest("[data-act],[data-nav]")) {
      e.preventDefault();
      e.stopPropagation();
      toast("题库数据加载中，请稍候…");
    }
  }
  function unblockClick() {
    document.removeEventListener("click", blockClick, true);
  }

  /* 品牌加载页：骨架已内联在 index.html（首帧可见），这里兜底注入并接管进度 */
  function shell() {
    document.body.classList.add("boot-loading");
    var app = $("app");
    if (app && !app.querySelector(".boot")) {
      app.innerHTML =
        '<div class="boot">' +
          '<div class="boot-logo">⚡</div>' +
          '<div class="boot-name">广西专升本练习</div>' +
          '<div class="boot-sub" id="bootSub">正在加载题库数据…</div>' +
          '<div class="boot-track"><div class="boot-bar" id="bootBar"></div></div>' +
          '<div class="boot-count" id="bootCount">0 / ' + SCRIPTS.length + '</div>' +
        '</div>';
    }
    setProgress(0, SCRIPTS.length);
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
        setProgress(index + 1, total);
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

  async function boot() {
    shell();
    var total = SCRIPTS.length;
    var failed = [];
    for (var i = 0; i < SCRIPTS.length; i++) {
      var s = SCRIPTS[i];
      var fail = await loadWithRetry(s, i, total);
      if (fail && s.required) failed.push(s.label);
      // 非必要脚本（supabase）失败：继续主流程，仅登录功能降级
    }
    if (failed.length) {
      toastFail(failed);
      return;
    }
    /* 全部就绪 → 恢复导航壳，注入 app.js 完成初始化（数据已可用） */
    unblockClick();
    document.body.classList.remove("boot-loading");
    var appJs = document.createElement("script");
    appJs.src = "app.js?v=" + V;
    appJs.onerror = function () {
      toastFail(["主程序 app.js"]);
    };
    document.head.appendChild(appJs);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
