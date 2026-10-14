/* gxzsb boot v355 — 首屏加载管理器
   解决：11 个 defer 脚本串行阻塞首屏渲染（任一挂起即永久卡「加载中…」）
   方案：先渲染静态登录页壳（复用 styles.css 的 login-* 样式，不依赖任何数据脚本），
         数据脚本在后台按序加载（30s 超时 / 失败重试 1 次 / 失败给出重试入口），
         全部就绪后再动态注入 app.js 完成真实初始化，app.js 内部逻辑零改动。
   非必要脚本（supabase 登录组件）失败仅降级登录，不阻塞主流程。 */
(function () {
  "use strict";

  var V = "355";          // 与 index.html 的版本号保持一致
  var TIMEOUT = 30000;    // 单个脚本加载超时（毫秒），30s 避免慢网误杀
  var MAX_RETRY = 1;      // 失败自动重试次数

  var SCRIPTS = [
    { src: "vendor/supabase.min.js", required: false, label: "登录组件" },
    { src: "sb-config.js",           required: true,  label: "配置" },
    { src: "all-bank.js",            required: true,  label: "题库" },
    { src: "all-learn.js",           required: true,  label: "考点精讲" },
    { src: "learn-book-2027.js",     required: true,  label: "学习手册" },
    { src: "formula-book.js",        required: true,  label: "公式书" },
    { src: "wordbook.js",            required: true,  label: "单词书" },
    { src: "kp-detail.js",           required: true,  label: "考点详解" },
    { src: "syllabus.js",            required: true,  label: "考纲" },
    { src: "syllabus-sample.js",     required: true,  label: "样卷" },
    { src: "exam-plans-v2.js",       required: true,  label: "考纲卷" }
  ];

  function $(id) { return document.getElementById(id); }

  /* ---------- 提示条 ---------- */
  function toast(msg) {
    var t = $("bootToast");
    if (t) { t.textContent = msg; t.style.display = "block"; }
  }
  function toastDone() {
    var t = $("bootToast");
    if (t) t.style.display = "none";
  }
  function toastFail(failedLabels) {
    var t = $("bootToast");
    if (!t) return;
    t.style.background = "#B91C1C";
    t.innerHTML = "部分数据加载失败：" + failedLabels.join("、") +
      " <button id=\"bootRetry\" type=\"button\" style=\"margin-left:10px;padding:4px 14px;border:1px solid #fff;border-radius:6px;background:transparent;color:#fff;cursor:pointer;\">重新加载</button>";
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

  /* 渲染静态登录页壳：不依赖任何数据脚本，立即替换「加载中…」占位 */
  function shell() {
    var app = $("app");
    if (!app) return;
    app.innerHTML =
      '<div class="login-wrap">' +
        '<div class="login-hero">' +
          '<div class="logo">⚡</div>' +
          '<div class="name">广西专升本练习</div>' +
          '<div class="sub">登录后云端同步学习进度</div>' +
        '</div>' +
        '<div class="login-tabs" role="tablist">' +
          '<button type="button" class="is-on" role="tab" aria-selected="true">登录</button>' +
          '<button type="button" role="tab" aria-selected="false">注册</button>' +
        '</div>' +
        '<div class="card" style="padding:24px">' +
          '<div class="login-field"><label for="bootEmail">邮箱</label><input id="bootEmail" type="email" placeholder="your@email.com" disabled /></div>' +
          '<div class="login-field"><label for="bootPwd">密码</label><input id="bootPwd" type="password" placeholder="至少6位" disabled /></div>' +
          '<button type="button" class="login-submit" disabled>登录</button>' +
          '<div class="login-msg"></div>' +
          '<button type="button" class="login-forgot" disabled>忘记密码？</button>' +
        '</div>' +
        '<button type="button" class="login-guest" disabled>先逛逛，稍后登录</button>' +
      '</div>' +
      '<div id="bootToast" style="display:none;position:fixed;top:0;left:0;right:0;z-index:9999;' +
        'background:rgba(17,24,39,.88);color:#fff;font-size:13px;padding:9px 14px;text-align:center;">正在加载题库数据…</div>';
    document.addEventListener("click", blockClick, true);
    toast("正在加载题库数据…");
  }

  /* 加载单个脚本，超时或错误即 reject */
  function loadScript(src, timeout) {
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
        await loadScript(script.src + "?v=" + V, TIMEOUT);
        toast("正在加载题库数据 " + Math.min(index + 1, total) + " / " + total + "…");
        return null;
      } catch (e) {
        if (attempt < MAX_RETRY) {
          toast(script.label + "加载失败，正在重试…");
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
    /* 全部就绪 → 注入 app.js 完成初始化（app.js 读取 window.STUDY_DATA 时数据已可用） */
    unblockClick();
    toastDone();
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
