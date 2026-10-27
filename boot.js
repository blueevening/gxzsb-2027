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

  var V = "2.4.1";          // 与 index.html 的版本号保持一致
  try { window.V = V; } catch (e) {}
  var TIMEOUT = 30000;    // 单个脚本加载超时（毫秒），30s 避免慢网误杀
  var MAX_RETRY = 1;      // 失败自动重试次数

  /* 登录所需最小依赖（先加载，注入 app.js 后登录页立即可操作） */
  var AUTH_SCRIPTS = [
    { src: "vendor/supabase.min.js", required: false, label: "登录组件", verify: "" },
    { src: "sb-config.js",           required: true,  label: "配置",     verify: "SB_CONFIG" }
  ];
  /* 题库等大数据脚本：登录后后台静默加载 */
  var DATA_SCRIPTS = [
    { src: "all-bank.js",        required: true, label: "题库概览", verify: "STUDY_DATA" },
    { src: "all-learn.js",       required: true, label: "考点精讲", verify: "STUDY_DATA" },
    { src: "learn-book-2027.js", required: true, label: "学习手册", verify: "STUDY_DATA" },
    { src: "formula-book.js",    required: true, label: "公式书",   verify: "STUDY_DATA" },
    { src: "wordbook.js",        required: true, label: "单词书",   verify: "WORDS" },
    { src: "kp-detail.js",       required: true, label: "考点详解", verify: "KP_DETAIL" },
    { src: "syllabus.js",        required: true, label: "考纲",     verify: "SYLLABUS" },
    { src: "syllabus-sample.js", required: true, label: "样卷",     verify: "STUDY_DATA" },
    { src: "exam-plans-v2.js",   required: true, label: "考纲卷",   verify: "STUDY_DATA" }
  ];

  /* 科目题库按需加载：点进哪个科目才下载哪个科目的题目 */
  var SUBJECT_BANK_MAP = {
    "高等数学": "math-bank.js",
    "英语": "english-bank.js",
    "电工电子技术基础": "ee-bank.js",
    "C语言程序设计": "c-bank.js",
    "计算机网络基础": "net-bank.js"
  };
  var _loadedSubjectBanks = {};   // 已加载完成的科目
  var _loadingSubjectBanks = {};  // 下载中的科目 -> promise（in-flight 去重，避免同一科并发重复下载）
  function _loadSubjectBankCore(subject, _retryNo) {
    if (_loadedSubjectBanks[subject]) return Promise.resolve();
    if (!_retryNo && _loadingSubjectBanks[subject]) return _loadingSubjectBanks[subject];
    var p = new Promise(function (resolve, reject) {
      var src = SUBJECT_BANK_MAP[subject];
      if (!src) { resolve(); return; }
      var before = (window.STUDY_DATA && window.STUDY_DATA.questions) ? window.STUDY_DATA.questions.length : 0;
      var s = document.createElement("script");
      // 重试时加时间戳，绕过 Service Worker/HTTP 缓存
      s.src = src + "?v=" + V + (_retryNo ? "&t=" + Date.now() : "");
      s.onload = function () {
        // 校验：题库文件必须真实注入了该科目题目（语法错误/被 SW 兜底成 HTML 时长度不会增加）
        var qs = (window.STUDY_DATA && window.STUDY_DATA.questions) ? window.STUDY_DATA.questions : [];
        if (qs.length > before) {
          _loadedSubjectBanks[subject] = true;
          delete _loadingSubjectBanks[subject];
          resolve();
        } else if (!_retryNo) {
          s.parentNode && s.parentNode.removeChild(s);
          delete _loadingSubjectBanks[subject];
          _loadSubjectBankCore(subject, 1).then(resolve, reject);
        } else {
          delete _loadingSubjectBanks[subject];
          reject(new Error("题库内容校验失败: " + subject));
        }
      };
      s.onerror = function () {
        if (!_retryNo) {
          s.parentNode && s.parentNode.removeChild(s);
          delete _loadingSubjectBanks[subject];
          _loadSubjectBankCore(subject, 1).then(resolve, reject);
        } else {
          delete _loadingSubjectBanks[subject];
          reject(new Error("加载失败: " + subject));
        }
      };
      document.head.appendChild(s);
    });
    if (!_retryNo) _loadingSubjectBanks[subject] = p;
    return p;
  }

  /* 后台串行、空闲预加载：一次只下一个科目，弱网下不与前台抢占带宽；
     用户进入某科时 loadSubjectBank 会把该科移出队列、立即插队，并暂停后台剩余下载。 */
  var _foregroundLoading = 0;
  var _prefetchQueue = [];
  function _idle(cb) {
    if (window.requestIdleCallback) window.requestIdleCallback(cb, { timeout: 1000 });
    else setTimeout(cb, 200);
  }
  function _prefetchNext() {
    if (!_prefetchQueue.length) { return; }
    if (_foregroundLoading > 0) { _idle(_prefetchNext); return; } // 前台下载中，后台让出带宽
    var subj = _prefetchQueue.shift();
    if (_loadedSubjectBanks[subj] || _loadingSubjectBanks[subj]) { _idle(_prefetchNext); return; }
    _loadSubjectBankCore(subj).then(function () {
      try { window.dispatchEvent(new CustomEvent("gxzsb:data-ready")); } catch (e) {}
    }).catch(function () {}).then(function () { _idle(_prefetchNext); });
  }
  function _startSubjectPrefetch() {
    if (!_prefetchQueue.length) _prefetchQueue = Object.keys(SUBJECT_BANK_MAP);
    _idle(_prefetchNext);
  }

  /* 前台主动加载（用户点科目）：插队 + 独占带宽；先确保 all-bank(base) 就绪，再加载该科，绝不重复下载 */
  window.loadSubjectBank = function (subject, _retryNo) {
    if (_retryNo) return _loadSubjectBankCore(subject, 1);
    if (_loadedSubjectBanks[subject]) return Promise.resolve();
    var qi = _prefetchQueue.indexOf(subject);
    if (qi >= 0) _prefetchQueue.splice(qi, 1);
    _foregroundLoading++;
    var done = function () { _foregroundLoading = Math.max(0, _foregroundLoading - 1); };
    var base = window.gxzsbEnsureBase ? window.gxzsbEnsureBase() : Promise.resolve();
    return base.then(function () {
      return _loadSubjectBankCore(subject);
    }).then(function (v) { done(); return v; }, function (e) { done(); throw e; });
  };
  window.isSubjectBankLoaded = function (subject) {
    return !!_loadedSubjectBanks[subject];
  };

  /* 模拟题试卷题库按需加载：点哪个专项只下哪个文件，966KB→最大733KB */
  var _mockLoadedTags = {};
  window.MOCK_FILE_MAP = { "math": "math-mock.js", "en": "en-mock.js", "engr": "engr-mock.js", "c": "c-mock.js", "": "mock-bank.js" };
  window.loadMockBank = function(tag) {
    tag = tag || "";
    var fn = window.MOCK_FILE_MAP[tag] || "mock-bank.js";
    if (_mockLoadedTags[fn]) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = fn + "?v=" + V;
      s.onload = function () {
        if (window.MOCK_BANK) { _mockLoadedTags[fn] = true; resolve(); }
        else { reject(new Error("模拟题库校验失败")); }
      };
      s.onerror = function () { reject(new Error("模拟题库加载失败:" + fn)); };
      document.head.appendChild(s);
    });
  };
  window.isMockBankLoaded = function () { return Object.keys(_mockLoadedTags).length > 0; };

  /* 英语拓展学习（english-extra.js）按需加载：短文/阅读/短语/写作/语法 */
  var _extraLoaded = false;
  window.loadEnglishExtra = function () {
    return new Promise(function (resolve, reject) {
      if (_extraLoaded) { resolve(); return; }
      var s = document.createElement("script");
      s.src = "english-extra.js?v=" + V;
      s.onload = function () {
        if (window.EN_EXTRA) { _extraLoaded = true; resolve(); }
        else { reject(new Error("拓展数据校验失败")); }
      };
      s.onerror = function () { reject(new Error("拓展数据加载失败")); };
      document.head.appendChild(s);
    });
  };
  window.isEnglishExtraLoaded = function () { return _extraLoaded; };

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

  /* 登录壳阶段：拦截登录/注册等需 supabase 的点击，提示初始化中；
     但「开始刷题」(游客) 与「展开登录表单」纯前端可用，不阻塞 */
  function blockClick(e) {
    var actEl = e.target && e.target.closest ? e.target.closest("[data-act]") : null;
    if (!actEl) return;
    var act = actEl.getAttribute("data-act");
    // 展开/折叠登录表单：纯 DOM 操作，立即生效
    if (act === "boot-show-login") {
      e.preventDefault();
      e.stopPropagation();
      var f = $("bootLoginForm");
      var link = $("bootShowLogin");
      if (f) {
        f.hidden = !f.hidden;
        if (link) link.textContent = f.hidden ? "登录同步进度 →" : "收起登录";
      }
      return;
    }
    // 开始刷题（游客）：立即可用，不依赖 supabase
    if (act === "boot-guest") {
      e.preventDefault();
      e.stopPropagation();
      try { localStorage.setItem("gxzsb.guest", "1"); } catch (e2) {}
      var app = $("app");
      if (app) app.innerHTML = '<div class="boot" style="padding-top:40vh;text-align:center;opacity:.5">⟳</div>';
      return;
    }
    // 其余需 supabase 的操作：短暂提示
    e.preventDefault();
    e.stopPropagation();
    toast("正在初始化登录组件，请稍候…");
  }
  function unblockClick() {
    document.removeEventListener("click", blockClick, true);
  }

  /* 游客标志：曾选择「开始刷题」的用户，刷新后直接进首页，不再被登录壳拦截 */
  function isGuestFlag() {
    try { return localStorage.getItem("gxzsb.guest") === "1"; } catch (e) { return false; }
  }

  /* 首屏落地壳：大「开始刷题」按钮为核心 CTA，登录表单默认折叠（点「登录同步」才展开） */
  function loginShellHtml() {
    return '<div class="landing-wrap">' +
      '<div class="landing-hero">' +
        '<div class="logo">⚡</div>' +
        '<div class="name">广西专升本练习</div>' +
        '<div class="sub">2027 备考 · 数学 / 英语 / 电工 / C语言 / 网络</div>' +
      '</div>' +
      '<button type="button" class="landing-cta" data-act="boot-guest">' +
        '<span class="landing-cta-main">开始刷题</span>' +
        '<span class="landing-cta-sub">无需登录 · 进度自动保存到本机</span>' +
      '</button>' +
      '<button type="button" class="landing-login-link" data-act="boot-show-login" id="bootShowLogin">登录同步进度 →</button>' +
      '<div class="landing-login-form" id="bootLoginForm" hidden>' +
        '<div class="login-tabs" role="tablist">' +
          '<button type="button" class="is-on" role="tab" aria-selected="true" data-act="boot-login">登录</button>' +
          '<button type="button" role="tab" aria-selected="false" data-act="boot-register">注册</button>' +
        '</div>' +
        '<div class="card" style="padding:20px">' +
          '<div class="login-field"><label for="bootLoginEmail">邮箱</label>' +
          '<input id="bootLoginEmail" type="email" placeholder="your@email.com" autocomplete="email" /></div>' +
          '<div class="login-field"><label for="bootLoginPwd">密码</label>' +
          '<input id="bootLoginPwd" type="password" placeholder="至少6位" autocomplete="current-password" /></div>' +
          '<button type="button" class="login-submit" data-act="boot-submit">登录</button>' +
          '<div class="login-msg" id="bootLoginMsg"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* 首帧：有登录态或游客标志→极简小转圈（静默加载）；新用户→落地壳（大刷题按钮） */
  function shell() {
    document.body.classList.add("boot-loading");
    var app = $("app");
    if (app) {
      if (isLoggedIn() || isGuestFlag()) {
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
  }

  /* PHASE2（数据）延迟到进入主界面后再启动：未登录不下载数据，弱网下登录认证请求优先、
     不被题库文件抢占带宽。app.js 渲染主界面时调用 gxzsbEnsureData；点科目时 loadSubjectBank 也会确保。 */
  var _dataPromise = null;
  var _basePromise = null;
  function startData() {
    if (_dataPromise) return _dataPromise;
    var allScript = DATA_SCRIPTS.filter(function (s) { return s.src === "all-bank.js"; })[0];
    /* 第一步：all-bank 最先（做题基础：初始化 STUDY_DATA、meta/chapters），小而关键 */
    _basePromise = (async function () {
      var af = await loadWithRetry(allScript, 0, 1);
      if (af) throw new Error(af);
    })();
    _dataPromise = (async function () {
      try {
        await _basePromise;
        window.GXZSB_BASE_READY = true;
        try { window.dispatchEvent(new CustomEvent("gxzsb:base-ready")); } catch (e) {}
        /* base 就绪即可做题：串行空闲预加载五科（前台点科目插队、后台让位） */
        setTimeout(_startSubjectPrefetch, 300);
        /* 功能脚本（单词/公式/学习手册等）并行加载，不阻塞做题；失败仅提示不阻断 */
        var small = DATA_SCRIPTS.filter(function (s) { return s.src !== "all-bank.js"; });
        var failed = [];
        var doneCount = 0;
        var total = small.length;
        await Promise.all(small.map(function (script) {
          return loadWithRetry(script, 0, total).then(function (f) {
            doneCount++;
            setProgress(doneCount, total);
            if (f && script.required) failed.push(f);
          });
        }));
        window.GXZSB_DATA_READY = true;
        toastDone();
        try { window.dispatchEvent(new CustomEvent("gxzsb:data-ready")); } catch (e) {}
        if (failed.length) toastFail(failed);
      } catch (e) {
        _dataPromise = null;   // all-bank 失败：允许下次（点科目/重渲染）重试
        _basePromise = null;
        toastFail([String((e && e.message) || e)]);
        throw e;
      }
    })();
    return _dataPromise;
  }
  window.gxzsbEnsureData = function () { return startData(); };
  window.gxzsbEnsureBase = function () { return (_basePromise || startData()); };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
