/* gxzsb boot v355 — 首屏加载管理器
   解决：11 个 defer 脚本串行阻塞首屏渲染（任一挂起即永久卡「加载中…」）
   方案：界面壳先渲染 + 数据脚本按序加载（15s 超时 / 失败重试 1 次 / 失败提示重试按钮），
         全部就绪后再动态注入 app.js 完成初始化，app.js 内部逻辑零改动。
   非必要脚本（supabase 登录组件）失败仅降级登录，不阻塞主流程。 */
(function () {
  "use strict";

  var V = "355";          // 与 index.html 的版本号保持一致
  var TIMEOUT = 15000;    // 单个脚本加载超时（毫秒）
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

  /* 渲染加载壳：不依赖任何数据脚本，立即替换「加载中…」占位 */
  function shell() {
    var app = $("app");
    if (!app) return;
    app.innerHTML =
      '<div class="boot" style="text-align:center;padding:48px 16px;">' +
        '<div class="boot-logo" style="width:56px;height:56px;margin:0 auto 16px;border-radius:16px;' +
          'background:var(--accent,#3B82F6);color:#fff;font-size:28px;display:flex;align-items:center;justify-content:center;">✓</div>' +
        '<div id="bootMsg" style="font-size:15px;color:#646A73;">正在加载题库数据…</div>' +
        '<div style="width:200px;height:4px;margin:14px auto 0;background:#E5E7EB;border-radius:2px;overflow:hidden;">' +
          '<div id="bootBar" style="height:100%;width:0%;background:var(--accent,#3B82F6);transition:width .3s;"></div>' +
        '</div>' +
        '<div id="bootDetail" style="font-size:12px;color:#9CA3AF;margin-top:10px;"></div>' +
      '</div>';
  }

  function progress(done, total, label) {
    var msg = $("bootMsg"), bar = $("bootBar"), det = $("bootDetail");
    if (msg && label) msg.textContent = label;
    if (bar) bar.style.width = Math.max(4, Math.round(done / total * 100)) + "%";
    if (det) det.textContent = done + " / " + total;
  }

  /* 数据加载失败降级页：给出明确原因与重试入口，不再无限转圈 */
  function failUI(failedLabels) {
    var app = $("app");
    if (!app) return;
    app.innerHTML =
      '<div class="boot" style="text-align:center;padding:48px 16px;">' +
        '<div class="boot-logo" style="width:56px;height:56px;margin:0 auto 16px;border-radius:16px;' +
          'background:#F59E0B;color:#fff;font-size:28px;display:flex;align-items:center;justify-content:center;">!</div>' +
        '<div style="font-size:16px;font-weight:600;">题库数据加载失败</div>' +
        '<div style="font-size:13px;color:#6B7280;margin:10px auto 0;max-width:340px;">' +
          '以下资源未能加载：' + failedLabels.join("、") + '。请检查网络后重试，或稍后再访问。</div>' +
        '<button id="bootRetry" type="button" class="btn btn-primary" ' +
          'style="margin-top:20px;padding:10px 30px;border:0;border-radius:8px;background:var(--accent,#3B82F6);' +
          'color:#fff;font-size:15px;cursor:pointer;">重新加载</button>' +
      '</div>';
    var btn = $("bootRetry");
    if (btn) btn.addEventListener("click", function () { location.reload(); });
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
    progress(index, total, "正在加载" + script.label + "…");
    for (var attempt = 0; attempt <= MAX_RETRY; attempt++) {
      try {
        await loadScript(script.src + "?v=" + V, TIMEOUT);
        progress(index + 1, total, "正在加载" + script.label + "…");
        return null;
      } catch (e) {
        if (attempt < MAX_RETRY) {
          progress(index, total, script.label + "加载失败，正在重试…");
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
      failUI(failed);
      return;
    }
    /* 全部就绪 → 注入 app.js 完成初始化（app.js 读取 window.STUDY_DATA 时数据已可用） */
    var appJs = document.createElement("script");
    appJs.src = "app.js?v=" + V;
    appJs.onerror = function () {
      failUI(["主程序 app.js"]);
    };
    document.head.appendChild(appJs);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
