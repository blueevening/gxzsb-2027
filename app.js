/* gxzsb — 全站布局规范实现 */
(function () {
  "use strict";

  var sb = null;
  if (window.supabase && window.SB_CONFIG) {
    try { sb = window.supabase.createClient(window.SB_CONFIG.url, window.SB_CONFIG.key); } catch(e) {}
  }

  const D = window.STUDY_DATA || {};
  const Q = (D.questions || []).map((q) => {
    if (q.type === "choice") q.type = "single";
    if (q.type === "blank") q.type = "fill";
    return {
    ...q,
    difficultyLabel: q.difficultyLabel || ({ 1: "基础", 2: "强化", 3: "冲刺" })[q.difficulty] || "基础",
    typeLabel:
      q.typeLabel ||
      ({ single: "单选", judge: "判断", fill: "填空", calc: "计算", apply: "应用", translate: "翻译", write: "写作" })[q.type] ||
      "单选",
    };
  });

  const SUBJ = {
    高等数学: { cls: "sc-math", short: "高数", color: "#3B82F6", group: "public", score: 150, order: 1 },
    英语: { cls: "sc-en", short: "英语", color: "#8B5CF6", group: "public", score: 150, order: 2 },
    电工电子技术基础: { cls: "sc-ee", short: "电工", color: "#F97316", group: "major", score: 100, order: 3 },
    C语言程序设计: { cls: "sc-c", short: "C语言", color: "#10B981", group: "major", score: 100, order: 4 },
    计算机网络基础: { cls: "sc-net", short: "计网", color: "#06B6D4", group: "major", score: 100, order: 5 },
  };

  const EXAM_DAY = new Date("2027-04-24T09:00:00+08:00");
  const LS = {
    attempts: "gxzsb.a3",
    wrong: "gxzsb.w3",
    fav: "gxzsb.f3",
    notes: "gxzsb.n3",
    marks: "gxzsb.m3",
    theme: "gxzsb.theme",
    last: "gxzsb.last3",
    streak: "gxzsb.streak3",
    history: "gxzsb.his3",
    reports: "gxzsb.rep3",
  };

  const load = (k, fb) => {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? fb;
    } catch (e) {
      return fb;
    }
  };
  const save = (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  };

  const state = {
    route: "home",
    params: {},
    attempts: load(LS.attempts, []),
    wrong: load(LS.wrong, {}),
    fav: load(LS.fav, {}),
    notes: load(LS.notes, {}),
    marks: load(LS.marks, {}),
    theme: load(LS.theme, "light"),
    last: load(LS.last, null),
    streak: load(LS.streak, { d: null, n: 0, today: 0 }),
    history: load(LS.history, []),
    reports: load(LS.reports, []),
    session: null, wrongTab: "wrong",
    filters: load('gxzsb.filters', { diff: [], type: [], status: [], kind: [] }),
    formulaTab: "高等数学",
    searchQ: "",
  };

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) =>
    String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const attr = (s) => esc(s).replace(/'/g, "&#39;");
  const shuffle = (a) => {
    const x = a.slice();
    for (let i = x.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [x[i], x[j]] = [x[j], x[i]];
    }
    return x;
  };
  const qById = (id) => Q.find((x) => x.id === id);
  const daysLeft = () => Math.max(0, Math.ceil((EXAM_DAY - Date.now()) / 86400000));

  function subjOf(name) {
    return SUBJ[name] || { cls: "", short: name, color: "#64748B", group: "major", score: 100, order: 9 };
  }

  function chapterList() {
    const out = [];
    (D.chapters || []).forEach((sub) => {
      (sub.children || []).forEach((c) => {
        const qs = Q.filter((q) => q.chapter === c.id);
        const at = state.attempts.filter((a) => a.chapter === c.id);
        const acc = at.length ? Math.round((at.filter((x) => x.correct).length / at.length) * 100) : null;
        out.push({
          ...c,
          subject: sub.subject,
          module: sub.module,
          count: qs.length,
          done: new Set(at.map((x) => x.questionId).filter(Boolean)).size,
          acc,
        });
      });
    });
    return out;
  }

  function subjStat(name) {
    const qs = Q.filter((q) => q.subject === name);
    const at = state.attempts.filter((a) => a.subject === name);
    const done = new Set(at.map((a) => a.questionId).filter(Boolean)).size;
    const acc = at.length ? Math.round((at.filter((a) => a.correct).length / at.length) * 100) : null;
    return { total: qs.length, done, acc, pct: qs.length ? Math.round((done / qs.length) * 100) : 0 };
  }

  function dueCount() {
    return Object.keys(state.wrong).filter((id) => (state.wrong[id].due || 0) <= Date.now()).length;
  }

  function weakPoints(n = 5) {
    const map = new Map();
    Q.forEach((q) => {
      if (!map.has(q.knowledgePoint))
        map.set(q.knowledgePoint, { point: q.knowledgePoint, subject: q.subject, t: 0, c: 0 });
    });
    state.attempts.forEach((a) => {
      const it = map.get(a.point);
      if (it) {
        it.t++;
        if (a.correct) it.c++;
      }
    });
    return Array.from(map.values())
      .map((r) => ({ ...r, rate: r.t ? Math.round((r.c / r.t) * 100) : null }))
      .sort((a, b) => {
        if (a.rate == null && b.rate == null) return 0;
        if (a.rate == null) return -1;
        if (b.rate == null) return 1;
        return a.rate - b.rate;
      })
      .slice(0, n);
  }

  function touchStreak() {
    const t = new Date().toISOString().slice(0, 10);
    const s = state.streak;
    if (s.d === t) s.today = (s.today || 0) + 1;
    else {
      const y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      s.n = s.d === y ? (s.n || 0) + 1 : 1;
      s.d = t;
      s.today = 1;
    }
    save(LS.streak, s);
  }

  function record(q, ok) {
    state.attempts.push({
      questionId: q.id,
      correct: ok,
      at: Date.now(),
      point: q.knowledgePoint,
      subject: q.subject,
      chapter: q.chapter,
    });
    if (state.attempts.length > 1500) state.attempts = state.attempts.slice(-1500);
    save(LS.attempts, state.attempts);
    const prev = state.wrong[q.id] || {};
    if (!ok) {
      const n = (prev.n || 0) + 1;
      // 第1次错立刻到期（今天就能复习）；之后1天、3天、7天、15天
      const gap = n === 1 ? 0 : [1, 3, 7, 15][Math.min(n - 2, 3)] * 86400000;
      state.wrong[q.id] = { ...prev, n, last: Date.now(), due: Date.now() + gap };
    } else if (prev.n) {
      const n = Math.max(prev.n - 1, 0);
      if (!n) delete state.wrong[q.id];
      else {
        const gap = [3, 7, 15, 30][Math.min(n - 1, 3)] * 86400000;
        state.wrong[q.id] = { ...prev, n, last: Date.now(), due: Date.now() + gap };
      }
    }
    save(LS.wrong, state.wrong);
    touchStreak();
  }

  /* ========== 路由 ========== */
  function parseHash() {
    const raw = (location.hash || "#/home").replace(/^#\//, "");
    const [page, ...rest] = raw.split("/");
    return { route: page || "home", params: rest };
  }

  function go(path) {
    location.hash = "#/" + path.replace(/^\//, "");
  }

  const NAV = [
    { id: "home", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', label: "首页" },
    { id: "learn", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', label: "学习一刻" },
    { id: "bank", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>', label: "题库" },
    { id: "words", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>', label: "单词" },
    { id: "wrong", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>', label: "错题" },
    { id: "formula", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>', label: "公式" },
    { id: "me", ico: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', label: "我的" },
  ];

  const TAB_NAV_IDS = ["home","bank","words","wrong","me"];
  const TAB_NAV = NAV.filter(function(n){ return TAB_NAV_IDS.indexOf(n.id) >= 0; });
  function renderNav() {
    const html = NAV.map(
      (n) =>
        `<button class="tab-item ${state.route === n.id || (n.id === "bank" && state.route === "subject") || (n.id === "words" && (state.route === "word-learn" || state.route === "word-review" || state.route === "word-list")) ? "is-active" : ""}" data-nav="${n.id}" type="button"><span class="ico">${n.ico}</span><span>${n.label}</span></button>`
    ).join("");
    const tabHtml = TAB_NAV.map(
      (n) =>
        `<button class="tab-item ${state.route === n.id || (n.id === "bank" && state.route === "subject") || (n.id === "words" && (state.route === "word-learn" || state.route === "word-review" || state.route === "word-list")) ? "is-active" : ""}" data-nav="${n.id}" type="button"><span class="ico">${n.ico}</span><span>${n.label}</span></button>`
    ).join("");
    $("#tabbar").innerHTML = tabHtml;
    $("#sideNav").innerHTML = html;
    document.querySelectorAll("[data-nav]").forEach((b) =>
      b.addEventListener("click", () => go(b.getAttribute("data-nav")))
    );
  }

  function setTitle(title, showBack) {
    if ($("#pageTitle")) $("#pageTitle").textContent = title;
    if ($("#btnBack")) $("#btnBack").hidden = !showBack;
  }

  /* ========== 页面：首页 ========== */
  function viewHome() {
    setTitle("广西专升本练习", false);
    const due = dueCount();
    const last = state.last;
    const pub = ["高等数学", "英语"].map(subjStat);
    const maj = ["电工电子技术基础", "C语言程序设计", "计算机网络基础"].map((s) => ({ s, ...subjStat(s) }));
    const totalDone = new Set(state.attempts.map((a) => a.questionId).filter(Boolean)).size;

    return `
      <button class="syllabus-banner" data-nav="syllabus" type="button">
        <span class="sb-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
        <span class="sb-main">
          <span class="sb-t">2027 官方考纲</span>
          <span class="sb-s">600分 · 3科公共+专业合卷 · 全部章节考点速览</span>
        </span>
        <span class="sb-arrow">›</span>
      </button>

      <div class="section-title">今日任务</div>
      <div class="home-tasks">
        <div class="card" style="padding:8px 16px">
        <button class="task-row" data-act="daily" type="button">
          <span class="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="main"><span class="t">每日 30 题</span><span class="s">全科目随机抽题，保持手感</span></span>
          <span class="arrow">›</span>
        </button>
        <button class="task-row" data-act="due" type="button">
          <span class="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></span>
          <span class="main"><span class="t">重做到期错题</span><span class="s">${due ? due + " 道到期" : "暂无到期错题"}</span></span>
          <span class="arrow">›</span>
        </button>
        <button class="task-row" data-act="last" type="button">
          <span class="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>
          <span class="main"><span class="t">继续上次</span><span class="s">${last ? esc(last.title || last.subject || "练习") : "从每日 30 题开始"}</span></span>
          <span class="arrow">›</span>
        </button>
        </div>
      </div>

      <div class="section-title">两层进度</div>
      <div class="home-progress">
      <div class="card">
        <div class="row-between"><strong>公共基础课（各 150 分）</strong><span class="muted" style="font-size:12px">单独考试</span></div>
        ${["高等数学", "英语"]
          .map((n) => {
            const p = subjStat(n);
            return `<div style="margin-top:12px">
              <div class="row-between" style="font-size:13px"><span>${n}</span><span class="muted">已练 ${p.done}/${p.total} · ${p.acc == null ? "—" : p.acc + "%"}</span></div>
              <div class="bar" style="margin-top:6px"><i style="width:${Math.max(p.pct, 3)}%"></i></div>
            </div>`;
          })
          .join("")}
      </div>
      <div class="card">
        <div class="row-between"><strong>专业基础综合课（合卷 300 分）</strong><span class="muted" style="font-size:12px">150 分钟</span></div>
        <p class="muted" style="font-size:12px;margin:6px 0 12px">电工 + C语言 + 计算机网络</p>
        ${maj
          .map(
            (m) => `<div style="margin-top:10px">
              <div class="row-between" style="font-size:13px"><span><span class="swatch ${subjOf(m.s).cls}"></span> ${subjOf(m.s).short}</span><span class="muted">${m.done}/${m.total} · ${m.acc == null ? "—" : m.acc + "%"}</span></div>
              <div class="bar sub" style="margin-top:6px"><i style="width:${Math.max(m.pct, 3)}%"></i></div>
            </div>`
          )
          .join("")}
      </div>
      </div>

      <div class="section-title">快捷入口</div>
      <div class="quick-3">
      <button class="qi" data-nav="words" type="button"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg></span>背单词</button>
        <button class="qi" data-nav="learn" type="button"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></span>学习一刻</button>
        <button class="qi" data-nav="formula" type="button"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>公式速查</button>
        <button class="qi" data-act="due" type="button"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></span>错题重练</button>
        <button class="qi" data-act="school" type="button"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>真题库</button>
        <button class="qi" data-act="report" type="button"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></span>学习报告</button>
      </div>

      <div class="section-title">考纲套卷</div>
      <div class="exam-stack">
        <button class="exam-card" data-act="exam" data-plan="math-full" type="button">
          <span class="exam-ico">数</span>
          <span class="exam-main">
            <span class="exam-t">高数考纲卷</span>
            <span class="exam-s">单选 10×5 · 填空 4×5 · 解答 7×8 · 应用 2×12</span>
            <span class="exam-meta"><span class="pill">150 分</span><span class="pill">120 分钟</span><span class="pill">考纲结构</span></span>
          </span>
          <span class="exam-go">开始</span>
        </button>
        <button class="exam-card" data-act="exam" data-plan="english-full" type="button">
          <span class="exam-ico en">英</span>
          <span class="exam-main">
            <span class="exam-t">英语考纲卷</span>
            <span class="exam-s">词汇语法20·阅读25·填空5·翻译8·写作1</span>
            <span class="exam-meta"><span class="pill">150 分</span><span class="pill">120 分钟</span><span class="pill">2027 考纲</span></span>
          </span>
          <span class="exam-go">开始</span>
        </button>
        <button class="exam-card" data-act="exam" data-plan="ee-special" type="button">
          <span class="exam-ico" style="background:#F97316">电</span>
          <span class="exam-main">
            <span class="exam-t">电工专项突破卷</span>
            <span class="exam-s">50道高频易错题 · 60分钟自测</span>
            <span class="exam-meta"><span class="pill">100 分</span><span class="pill">60 分钟</span><span class="pill">专项训练</span></span>
          </span>
          <span class="exam-go">开始</span>
        </button>

        <button class="exam-card" data-act="exam" data-plan="c-special" type="button" style="margin-top:12px">
          <span class="exam-ico" style="background:#10B981">C</span>
          <span class="exam-main">
            <span class="exam-t">C语言专项突破卷</span>
            <span class="exam-s">50道高频易错题 · 60分钟自测</span>
            <span class="exam-meta"><span class="pill">100 分</span><span class="pill">60 分钟</span><span class="pill">专项训练</span></span>
          </span>
          <span class="exam-go">开始</span>
        </button>

        <button class="exam-card" data-act="exam" data-plan="net-special" type="button" style="margin-top:12px">
          <span class="exam-ico" style="background:#06B6D4">网</span>
          <span class="exam-main">
            <span class="exam-t">计网专项突破卷</span>
            <span class="exam-s">50道高频易错题 · 60分钟自测</span>
            <span class="exam-meta"><span class="pill">100 分</span><span class="pill">60 分钟</span><span class="pill">专项训练</span></span>
          </span>
          <span class="exam-go">开始</span>
        </button>

        <button class="exam-card" data-act="exam" data-plan="major-combined" type="button" style="margin-top:12px">
          <span class="exam-ico maj">专</span>
          <span class="exam-main">
            <span class="exam-t">专业综合合卷</span>
            <span class="exam-s">电工 100 + C语言 100 + 计网 100 · 同卷连考</span>
            <span class="exam-meta"><span class="pill">300 分</span><span class="pill">150 分钟</span><span class="pill">合卷适应</span></span>
          </span>
          <span class="exam-go">开始</span>
        </button>
      </div>

      <div class="disclaimer">本站为个人 AI 辅助整理的练习工具，非广西招生考试院官方平台。内容仅供参考，请以官方大纲为准。</div>
    `;
  }

  /* ========== 题库首页 ========== */
  function isSubjective(q) {
    const t = (q && q.type) || "";
    return t === "calc" || t === "apply" || t === "translate" || t === "write";
  }
  function objSubLabel(q) {
    return isSubjective(q) ? "主观题" : "客观题";
  }
  function viewBank() {
    setTitle("题库", true);
    const groups = [
      { title: "公共基础课（各 150 分）", names: ["高等数学", "英语"] },
      { title: "专业基础综合课（合卷 300 分）", names: ["电工电子技术基础", "C语言程序设计", "计算机网络基础"] },
    ];
    return groups.map(function (g) {
      return (
        '<div class="section-title">' + esc(g.title) + "</div>" +
        g.names.map(function (n) {
          const p = subjStat(n);
          const m = subjOf(n);
          return (
            '<button class="bank-subject ' + m.cls + '" data-act="subject" data-name="' + attr(n) + '" type="button">' +
            '<span class="sw"></span>' +
            '<span style="flex:1"><span class="t">' + esc(m.short) + '</span>' +
            '<span class="s">' + p.total + " 题 · 已练 " + p.done + " · " + (p.acc == null ? "—" : p.acc + "%") + "</span>" +
            '<div class="bar" style="margin-top:8px"><i style="width:' + Math.max(p.pct, 3) + '%;background:' + m.color + '"></i></div></span>' +
            '<span class="muted">›</span></button>'
          );
        }).join("")
      );
    }).join("");
  }

  function viewSubject(name) {
    setTitle(name, true);
    const m = subjOf(name);
    const p = subjStat(name);
    const chs = chapterList().filter((c) => c.subject === name);
    const f = state.filters;
    const qOf = Q.filter((q) => q.subject === name);
    let filtered = qOf;
    if (f.diff.length) filtered = filtered.filter((q) => f.diff.includes(q.difficultyLabel));
    if (f.type.length) filtered = filtered.filter((q) => f.type.includes(q.typeLabel));
    if (f.status.includes("未做")) {
      const done = new Set(state.attempts.map((a) => a.questionId));
      filtered = filtered.filter((q) => !done.has(q.id));
    }
    if (f.status.includes("做错")) filtered = filtered.filter((q) => state.wrong[q.id]);
    if (f.status.includes("收藏")) filtered = filtered.filter((q) => state.fav[q.id]);
    if (f.kind && f.kind.includes("客观题")) filtered = filtered.filter((q) => !isSubjective(q));
    if (f.kind && f.kind.includes("主观题")) filtered = filtered.filter((q) => isSubjective(q));

    // 按难度从易到难排序：基础(1)→强化(2)→冲刺(3)
    filtered = filtered.sort((a, b) => (a.difficulty || 1) - (b.difficulty || 1));

    const chip = (kind, val, label) =>
      `<button class="chip ${f[kind].includes(val) ? "is-active" : ""}" data-act="filter" data-kind="${kind}" data-val="${attr(val)}" type="button">${label}</button>`;

    return `
      <div class="card">
        <div class="row-between">
          <strong>${esc(name)} · ${m.score}分</strong>
          <span class="muted" style="font-size:12px">${p.total} 题 · 已练 ${p.done} · ${p.acc == null ? "—" : p.acc + "%"}</span>
        </div>
      </div>

      <div class="section-title">筛选</div>
      <div class="chip-row">
        ${["基础", "强化", "冲刺"].filter((d) => qOf.some((q) => q.difficultyLabel === d)).map((d) => chip("diff", d, d)).join("")}
        ${(name === "英语" ? ["单选", "判断", "阅读", "阅读填空", "翻译", "写作"] : ["单选", "判断", "填空", "计算", "应用"]).filter((t) => qOf.some((q) => q.typeLabel === t)).map((t) => chip("type", t, t)).join("")}
        ${["未做", "做错", "收藏"].map((s) => chip("status", s, s)).join("")}
        ${["客观题", "主观题"].map((k) => chip("kind", k, k)).join("")}
      </div>
      <p class="muted" style="font-size:12px;margin:8px 0 0">当前：${[...f.diff, ...f.type, ...f.status].join("+") || "全部"} → ${filtered.length} 题</p>

      <div class="section-title">章节</div>
      <div class="card chapter-grid" style="padding:0">
        ${
          chs.length
            ? chs
                .map(
                  (c) => `<button class="list-row" data-act="chapter" data-id="${attr(c.id)}" type="button">
                    <span class="dot" style="background:${m.color}"></span>
                    <span class="main">
                      <span class="t">${esc(c.title)}</span>
                      <span class="s">${c.count} 题 · ${c.done}/${c.count} · 正确率 ${c.acc == null ? "—" : c.acc + "%"}</span>
                    </span>
                    <span class="end">›</span>
                  </button>`
                )
                .join("")
            : `<div class="empty">暂无章节数据</div>`
        }
      </div>

      <div style="margin-top:16px">
        <div style="display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-primary btn-block" data-act="seq-practice" data-name="${attr(name)}" type="button">开始顺序练习</button>
        <button class="btn btn-ghost btn-block" data-act="seq-obj" data-name="${attr(name)}" type="button">只练客观题</button>
        <button class="btn btn-ghost btn-block" data-act="seq-subj" data-name="${attr(name)}" type="button">只练主观题</button>
      </div>
      </div>

      ${
        filtered.length === 0 && (f.diff.length || f.type.length || f.status.length)
          ? `<div class="empty">本章没有「${esc([...f.diff, ...f.type, ...f.status].join("+"))}」的题，试试放宽筛选
            <div><button class="btn btn-ghost btn-sm" data-act="clear-filter" type="button">清空筛选</button></div>
          </div>`
          : ""
      }
    `;
  }

  /* ========== 答题 ========== */
  function startSession(opts) {
    let pool = Q.slice();
    if (opts.subject) pool = pool.filter((q) => q.subject === opts.subject);
    if (opts.chapter) pool = pool.filter((q) => q.chapter === opts.chapter);
    if (opts.point) pool = pool.filter((q) => q.knowledgePoint === opts.point);
    if (opts.ids) pool = opts.ids.map(qById).filter(Boolean);
    if (opts.mode === "weak") {
      const w = weakPoints(8).map((x) => x.point);
      const p2 = pool.filter((q) => w.includes(q.knowledgePoint));
      if (p2.length) pool = p2;
    }
    if (opts.onlyWrong) pool = pool.filter((q) => state.wrong[q.id]);
    if (opts.filterKind === "obj") pool = pool.filter((q) => !isSubjective(q));
    if (opts.filterKind === "subj") pool = pool.filter((q) => isSubjective(q));
    if (opts.dueOnly) {
      const dueIds = Object.keys(state.wrong).filter((id) => (state.wrong[id].due || 0) <= Date.now());
      pool = pool.filter((q) => dueIds.includes(q.id));
    }
    if (opts.limit) pool = shuffle(pool).slice(0, opts.limit);

    state.session = {
      title: opts.title || "练习",
      q: pool,
      i: 0,
      sel: null,
      submitted: false,
      results: {},
      flags: {},
      showExp: false,
      start: Date.now(),
      end: opts.minutes ? Date.now() + opts.minutes * 60000 : null,
      exam: opts.exam || null,
    };
    state.last = { title: opts.title, subject: opts.subject, at: Date.now() };
    save(LS.last, state.last);
    go("practice");
    render();
  }

  function viewPractice() {
    const s = state.session;
    if (!s || !s.q.length) {
      setTitle("练习", true);
      return `<div class="empty">没有可练习的题目<div><button class="btn btn-primary" data-nav="home" type="button">回首页</button></div></div>`;
    }
    const q = s.q[s.i];
    setTitle(s.q.length ? `${s.title}` : "练习", true);
    const keys = ["A", "B", "C", "D"];
    const done = q.id in s.results;
    const exp = ensureExplain(q);
    const wrongN = (state.wrong[q.id] && state.wrong[q.id].n) || 0;

    return `
      <div class="q-progress"><i style="width:${((s.i + 1) / s.q.length) * 100}%"></i></div>
      <div class="q-dots" title="点击题号">
        ${s.q
          .map((qq, idx) => {
            const r = s.results[qq.id];
            const cls = qq.id in s.results ? (r ? "ok" : "bad") : "";
            return `<button class="q-dot ${cls} ${idx === s.i ? "now" : ""}" data-act="goto" data-i="${idx}" type="button" title="${idx + 1}"></button>`;
          })
          .join("")}
      </div>
      <div class="row-between" style="margin:4px 0 8px">
        <span class="muted" style="font-size:12px"><b style="color:${isSubjective(q) ? "var(--warning)" : "var(--success)"}">${objSubLabel(q)}</b> · ${esc(q.subject)} · ${esc(q.knowledgePoint)}</span>
        <span class="mono muted" style="font-size:12px">${s.i + 1}/${s.q.length}${s.end ? " · 计时中" : ""}${q.score ? " · " + q.score + " 分" : ""}</span>
      </div>

      <div class="practice-wrap">
      <div>
      <div class="card">
        <div class="q-stem">${mathHtml(q.stem)}</div>
        ${
          q.type === "single" || q.type === "judge"
            ? (q.options || [])
                .map((opt, idx) => {
                  let cls = "opt";
                  if (!s.submitted && s.sel === opt) cls += " is-selected";
                  if (done) {
                    if (opt === q.answer) cls += " is-correct";
                    else if (s.sel === opt) cls += " is-wrong";
                  }
                  return `<button class="${cls}" data-act="pick" data-opt="${attr(opt)}" type="button" ${s.submitted ? "disabled" : ""}>
                    <span class="key">${keys[idx] || idx + 1}</span>
                    <span>${mathHtml(opt)}</span>
                    ${done ? (opt === q.answer ? `<span class="mark">✓</span>` : s.sel === opt ? `<span class="mark">✕</span>` : "") : ""}
                  </button>`;
                })
                .join("")
            : q.type === "translate" || q.type === "write"
            ? `<div class="mistake-box">主观题：先自己作答，再展开范文与评分要点自评。</div>
               ${done ? `<div class="feedback ok">✓ 已标记已自评</div>` : ""}`
            : `<label class="muted" style="font-size:12px;font-weight:650">${q.type === "fill" ? "填写答案" : "填写最终结果"}</label>
               <input class="input" id="fillInput" style="margin:8px 0" ${s.submitted ? "disabled" : ""} value="${attr(s.sel || "")}" />
               ${done ? `<div class="feedback ${s.results[q.id] ? "ok" : "bad"}">${s.results[q.id] ? "✓ 比对通过" : "✕ 参考：" + esc(q.answer)}</div>` : ""}`
        }

        ${
          done
            ? `<div class="feedback ${s.results[q.id] ? "ok" : "bad"}">${s.results[q.id] ? "✓ 回答正确" : "✕ 回答错误，正确答案是 " + esc(String(q.answer).slice(0, 40))}</div>`
            : ""
        }

        <div class="explain ${s.showExp && s.submitted ? "is-open" : ""}">
          <button class="explain-toggle" data-act="toggle-exp" type="button"><span>查看解析</span><span class="muted">${s.showExp && s.submitted ? "收起" : "展开"}</span></button>
          <div class="explain-body">
            <div class="explain-block"><h4>答案</h4><div class="content"><strong>${esc(Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer)}</strong></div></div>
            <div class="explain-block"><h4>考点定位</h4><div class="content">${esc(q.subject)} · ${esc(q.chapter || "")} · ${esc(q.knowledgePoint)} · ${esc(q.difficultyLabel)}</div></div>
            ${
              q.model
                ? `<div class="explain-block"><h4>建模</h4><div class="content">${esc(q.model)}</div></div>`
                : ""
            }
            ${
              (q.steps || []).length
                ? `<div class="explain-block"><h4>步骤</h4><div class="content"><ol>${q.steps.map((t) => `<li>${esc(t)}</li>`).join("")}</ol></div></div>`
                : ""
            }
            ${
              q.sample
                ? `<div class="explain-block"><h4>范文 / 参考译文</h4><div class="content">${esc(q.sample).replace(/\n/g, "<br/>")}</div></div>`
                : ""
            }
            ${
              (q.scorePoints || []).length
                ? `<div class="explain-block"><h4>评分要点</h4><div class="content">${q.scorePoints.map((x) => "• " + esc(x)).join("<br/>")}</div></div>`
                : ""
            }
            <div class="explain-block"><h4>步骤 / 解析</h4><div class="content">${exp.split("\n").map((l) => (/^【/.test(l) ? `<p><strong>${mathHtml(l)}</strong></p>` : `<p>${mathHtml(l)}</p>`)).join("")}</div></div>
            <div class="explain-block"><h4>AI 深度解析</h4>
              <div class="content" style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-primary btn-sm" data-act="ai-deepseek" data-id="${attr(q.id)}" type="button">DeepSeek 解析</button>
                <button class="btn btn-ghost btn-sm" data-act="ai-doubao" data-id="${attr(q.id)}" type="button">豆包解析</button>
                <button class="btn btn-ghost btn-sm" data-act="ai-copy" data-id="${attr(q.id)}" type="button">复制题目</button>
              </div>
              <p class="muted" style="font-size:12px;margin-top:6px">静态解析不够细时，用外部 AI 按题干生成逐步讲解。</p>
            </div>
            <div class="explain-block"><h4>练-查联动</h4>
              <div class="content" style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-ghost btn-sm" data-act="goto-formula" data-subj="${attr(q.subject)}" type="button">查看公式</button>
                <button class="btn btn-ghost btn-sm" data-act="prac-point" data-p="${attr(q.knowledgePoint)}" type="button">同考点练题</button>
              </div>
            </div>
            <div class="explain-block"><h4>易错点</h4><div class="mistake-box">${(q.pitfalls || ["注意审题"]).map((p) => "• " + esc(p)).join("<br/>")}${wrongN ? `<br/>• 你曾错 ${wrongN} 次` : ""}</div></div>
            <div class="explain-block"><h4>我的笔记</h4>
              <textarea class="note-input" id="noteInput">${esc(state.notes[q.id] || "")}</textarea>
              <button class="btn btn-ghost btn-sm" data-act="save-note" data-id="${attr(q.id)}" type="button" style="margin-top:8px">保存笔记</button>
            </div>
          </div>
        </div>
      </div>

      <div class="q-actions" style="flex-direction:column;gap:10px">
        <div style="display:flex;gap:10px">
          <button class="btn btn-ghost" data-act="prev" type="button" style="flex:1">上一题</button>
          <button class="btn btn-ghost" data-act="fav" type="button" style="flex:1">${state.fav[q.id] ? "已收藏" : "收藏"}</button>
          <button class="btn btn-ghost" data-act="next" type="button" style="flex:1">下一题</button>
        </div>
        ${
          !s.submitted
            ? `<button class="btn btn-primary btn-block" data-act="submit" type="button">提交答案</button>`
            : `<button class="btn btn-primary btn-block" data-act="next" type="button">下一题 →</button>`
        }
      </div>
      </div>
      <aside class="answer-card-panel card" style="padding:12px">
        <div style="font-size:12px;font-weight:750;color:var(--text-sub);margin-bottom:8px">答题卡</div>
        <div class="q-dots" style="flex-wrap:wrap;overflow:visible">
          ${s.q
            .map((qq, idx) => {
              const r = s.results[qq.id];
              const cls = qq.id in s.results ? (r ? "ok" : "bad") : "";
              return `<button class="q-dot ${cls} ${idx === s.i ? "now" : ""}" data-act="goto" data-i="${idx}" type="button"></button>`;
            })
            .join("")}
        </div>
        <p class="muted" style="font-size:11px;margin-top:8px">绿=对 · 红=错 · 灰=未做</p>
      </aside>
      </div>
    `;
  }

  function normAns(s) {
    return String(s ?? "")
      .replace(/\s+/g, "")
      .replace(/[，,；;：:！!？?（）()【】[\]'"‘’“”、]/g, "")
      .toLowerCase();
  }

  function matchAns(q, user) {
    const u = normAns(user);
    if (!u) return false;
    const list = [].concat(q.answer || [], q.accept || []);
    return list.some((a) => normAns(a) === u);
  }

  function submitQ() {
    const s = state.session;
    if (!s || s.submitted) return;
    const q = s.q[s.i];
    const t = q.type;
    if (t === "single" || t === "judge") {
      if (s.sel == null) return alert("请先选择一个选项");
      const ok = s.sel === q.answer;
      s.submitted = true;
      s.results[q.id] = ok;
      s.showExp = true;
      record(q, ok);
    } else if (t === "translate" || t === "write") {
      s.submitted = true;
      s.results[q.id] = true;
      s.showExp = true;
    } else {
      const box = document.getElementById("fillInput");
      const val = (box ? box.value : s.sel || "").trim();
      if (!val) return alert("请先填写答案");
      s.sel = val;
      const ok = matchAns(q, val);
      s.submitted = true;
      s.results[q.id] = ok;
      s.showExp = true;
      record(q, ok);
    }
    render();
  }

  function nextQ() {
    const s = state.session;
    if (!s) return;
    if (s.i >= s.q.length - 1) {
      go("report");
      render();
      return;
    }
    s.i++;
    s.sel = null;
    s.submitted = s.q[s.i].id in s.results;
    s.showExp = false;
    render();
    window.scrollTo({ top: 0 });
  }
  function prevQ() {
    const s = state.session;
    if (!s || s.i === 0) return;
    s.i--;
    s.sel = null;
    s.submitted = s.q[s.i].id in s.results;
    s.showExp = false;
    render();
    window.scrollTo({ top: 0 });
  }

  /* ========== 报告 ========== */
  function viewReport() {
    setTitle("练习报告", true);
    const s = state.session;
    if (!s) return `<div class="empty">暂无报告</div>`;
    const ids = Object.keys(s.results);
    const ok = ids.filter((id) => s.results[id]).length;
    const acc = ids.length ? Math.round((ok / ids.length) * 100) : 0;
    const sec = Math.round((Date.now() - s.start) / 1000);
    const mm = String(Math.floor(sec / 60)).padStart(2, "0");
    const ss = String(sec % 60).padStart(2, "0");

    // 题型 / 科目
    const by = {};
    ids.forEach((id) => {
      const q = qById(id);
      if (!q) return;
      const k = s.exam && s.exam.sectionOf && s.exam.sectionOf[id] ? s.exam.sectionOf[id].sectionLabel : q.typeLabel;
      by[k] = by[k] || { n: 0, ok: 0, got: 0, full: 0 };
      by[k].n++;
      if (s.results[id]) by[k].ok++;
      const sc = (s.exam && s.exam.scoreOf && s.exam.scoreOf[id]) || q.score || 1;
      by[k].full += sc;
      if (s.results[id]) by[k].got += sc;
    });

    return `
      <div class="card">
        <div class="row-between"><strong>${esc(s.title)}</strong><span class="muted" style="font-size:12px">${mm}:${ss}</span></div>
        <div class="stat-grid" style="margin-top:12px">
          <div class="stat-box"><div class="n">${ok}/${ids.length}</div><div class="l">正确 / 已答</div></div>
          <div class="stat-box"><div class="n">${acc}%</div><div class="l">正确率</div></div>
          <div class="stat-box"><div class="n">${mm}:${ss}</div><div class="l">用时</div></div>
          <div class="stat-box"><div class="n">${ids.filter((id) => !s.results[id]).length}</div><div class="l">错题</div></div>
        </div>
      </div>

      <div class="section-title">${s.exam ? "考纲目标对照" : "题型 / 模块"}</div>
      <div class="card">
        ${Object.entries(by)
          .map(([k, r]) => {
            const target = s.exam && s.exam.plan && s.exam.plan.sections ? (s.exam.plan.sections.find((x) => x.key === k || x.label === k) || {}).target || r.full : r.full;
            const gap = Math.max(0, target - r.got);
            const weak = target && gap >= target * 0.2;
            return `<div class="hbar-row">
              <div class="label">${esc(k)}</div>
              <div class="hbar-track"><div class="hbar-fill" style="width:${Math.max(3, Math.round((r.got / (r.full || 1)) * 100))}%;background:${weak ? "var(--error)" : "var(--primary)"}"></div></div>
              <div class="val">${r.got}/${target || r.full}</div>
            </div>${weak ? `<p class="muted" style="font-size:12px;margin:0 0 8px">「${esc(k)}」距目标差 ${gap} 分，建议重点补强</p>` : ""}`;
          })
          .join("")}
      </div>

      <div class="section-title">下一步</div>
      <div class="card" style="display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-primary btn-block" data-act="due" type="button">复习错题</button>
        <button class="btn btn-ghost btn-block" data-act="weak" type="button">薄弱强化</button>
        <button class="btn btn-ghost btn-block" data-nav="home" type="button">返回首页</button>
      </div>
    `;
  }

  /* ========== 错题本 ========== */
  function viewWrong() {
    setTitle("错题 / 收藏", true);
    const now = Date.now();
    const tab = state.wrongTab || "wrong";
    const items = Object.keys(state.wrong)
      .map(function (id) {
        const q = qById(id);
        const w = state.wrong[id];
        return q ? { q: q, w: w, due: (w.due || 0) <= now } : null;
      })
      .filter(Boolean)
      .sort(function (x, y) {
        return x.due === y.due ? (x.w.last || 0) - (y.w.last || 0) : x.due ? -1 : 1;
      });
    const due = items.filter(function (x) { return x.due; }).length;
    const mastered = items.filter(function (x) { return x.w.n <= 1 && !x.due; }).length;
    const favs = Object.keys(state.fav)
      .filter(function (id) { return state.fav[id]; })
      .map(function (id) { return qById(id); })
      .filter(Boolean);

    // 按科目统计错题
    const subjStats = {};
    items.forEach(function (it) {
      const s = it.q.subject;
      subjStats[s] = (subjStats[s] || 0) + 1;
    });
    const subjFilter = state.wrongSubj || "all";
    let filteredItems = items;
    if (subjFilter !== "all") filteredItems = items.filter(function (it) { return it.q.subject === subjFilter; });

    function rows(arr, kind) {
      if (!arr.length) {
        const msg = kind === "fav" ? "还没有收藏题。做题时点「收藏」。" : "暂无错题。";
        return '<div class="empty">' + msg + "</div>";
      }
      return (
        '<div class="card" style="padding:0">' +
        arr
          .map(function (it) {
            const q = kind === "wrong" ? it.q : it;
            const w = kind === "wrong" ? it.w : null;
            const isDue = kind === "wrong" && it.due;
            if (kind === "wrong") {
              return (
                '<div class="list-row" style="display:flex;align-items:center;gap:4px">' +
                '<button data-act="open-q" data-id="' + attr(q.id) + '" type="button" style="flex:1;text-align:left;background:none;border:none;display:flex;align-items:center;gap:10px;padding:12px 16px">' +
                '<span class="dot" style="background:' + (subjOf(q.subject).color || "#2563EB") + ';flex-shrink:0"></span>' +
                '<span class="main" style="flex:1;min-width:0"><span class="t" style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(String(q.stem).slice(0, 38)) + '</span>' +
                '<span class="s" style="display:block;font-size:12px;color:#888;margin-top:2px">' + esc(q.typeLabel || "题") + " · " + esc(q.subject) + " · 错" + (w ? w.n : 1) + "次" + (isDue ? " · 到期" : "") + '</span></span>' +
                '</button>' +
                '<button data-act="remove-wrong" data-id="' + attr(q.id) + '" title="移除" style="background:none;border:none;color:#ef4444;font-size:18px;padding:8px 12px;cursor:pointer">✕</button>' +
                '</div>'
              );
            }
            return (
              '<button class="list-row" data-act="open-q" data-id="' + attr(q.id) + '" type="button">' +
              '<span class="dot" style="background:' + (subjOf(q.subject).color || "#2563EB") + '"></span>' +
              '<span class="main"><span class="t">' + esc(String(q.stem).slice(0, 36)) + '</span>' +
              '<span class="s">' + esc(q.typeLabel || "题") + " · " + esc(q.subject) + ' · ★收藏</span></span><span class="end">›</span></button>'
            );
          })
          .join("") +
        "</div>"
      );
    }

    let body = "";
    if (tab === "wrong") {
      let subjChips = '<button class="chip ' + (subjFilter === "all" ? "is-active" : "") + '" data-act="wrong-subj" data-v="all" type="button">全部 ' + items.length + '</button>';
      Object.keys(subjStats).forEach(function (s) {
        subjChips += '<button class="chip ' + (subjFilter === s ? "is-active" : "") + '" data-act="wrong-subj" data-v="' + attr(s) + '" type="button">' + esc(subjOf(s).short) + ' ' + subjStats[s] + '</button>';
      });
      body =
        '<div class="card"><strong>今天有 ' + due + " 道题该重做</strong>" +
        '<p class="muted" style="font-size:12px;margin:6px 0 12px">按艾宾浩斯遗忘曲线自动排期，到期重做记得更牢</p>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
        '<button class="btn btn-primary" data-act="due" type="button"' + (due ? "" : " disabled") + ">开始重做到期题</button>" +
        '<button class="btn btn-ghost" data-act="practice-wrong-all" type="button"' + (items.length ? "" : " disabled") + ">刷全部错题</button>" +
        "</div></div>" +
        '<div class="stat-grid" style="margin:16px 0">' +
        '<div class="stat-box"><div class="n">' + items.length + '</div><div class="l">总错题</div></div>' +
        '<div class="stat-box"><div class="n">' + mastered + '</div><div class="l">已掌握</div></div>' +
        '<div class="stat-box"><div class="n">' + Math.max(0, items.length - mastered) + '</div><div class="l">待复习</div></div>' +
        '<div class="stat-box"><div class="n">' + due + '</div><div class="l">今日到期</div></div>' +
        "</div>" +
        '<div class="section-title">按科目筛选</div>' +
        '<div class="chip-row" style="margin-bottom:12px;flex-wrap:wrap">' + subjChips + "</div>" +
        '<div class="section-title">按错因补练</div>' +
        '<div class="chip-row" style="margin-bottom:12px">' +
        '<button class="chip" data-act="by-reason" data-r="concept" type="button">概念不清</button>' +
        '<button class="chip" data-act="by-reason" data-r="calc" type="button">计算失误</button>' +
        '<button class="chip" data-act="by-reason" data-r="read" type="button">审题偏差</button>' +
        '<button class="chip" data-act="by-reason" data-r="formula" type="button">公式记错</button>' +
        "</div>" +
        '<div class="section-title">错题列表（点题看解析，✕移除已掌握）</div>' + rows(filteredItems, "wrong");
    } else if (tab === "fav") {
      body =
        '<div class="section-title">我的收藏</div>' +
        '<p class="muted" style="font-size:12px;margin:0 0 12px">做题时点「收藏」，可反复练典型题。</p>' +
        '<button class="btn btn-primary btn-block" data-act="practice-fav" type="button"' + (favs.length ? "" : " disabled") + ">练习收藏题</button>" +
        '<div style="height:12px"></div>' + rows(favs, "fav");
    }

    return (
      '<div class="seg-top">' +
      '<button class="seg-top-btn ' + (tab === "wrong" ? "is-active" : "") + '" data-act="wrong-tab" data-v="wrong" type="button">错题 ' + items.length + "</button>" +
      '<button class="seg-top-btn ' + (tab === "fav" ? "is-active" : "") + '" data-act="wrong-tab" data-v="fav" type="button">收藏 ' + favs.length + "</button>" +
      "</div>" +
      body
    );
  }

  
function ensureExplain(q) {
  if (q.analysis && q.analysis.length > 200) return q.analysis;
  const stem = String(q.stem||"").replace(/frac\{([^}]+)\}\{([^}]+)\}/g,"($1)/($2)");
  const ans = Array.isArray(q.answer)? q.answer.join(" / ") : q.answer;
  const kp = q.knowledgePoint||"";
  const subj = q.subject||"";
  const pit = (q.pitfalls&&q.pitfalls[0])||"注意审题";
  const steps = [
    "① 题目：" + stem.slice(0,50),
    "② 定位考点：" + kp + "。",
    "③ 用对应公式/规则逐步推导（见公式页）。",
    "④ 得出：" + ans + "。",
  ];
  if (subj==="高等数学" && /sin|lim/.test(stem)) steps[2]="③ 用等价无穷小：sin(ax)≈ax；约分得结果。";
  if (subj==="高等数学" && /∫|积分/.test(stem+kp)) steps[2]="③ 凑微分或分部积分，写出原函数。";
  if (subj==="高等数学" && /导|′/.test(stem+kp)) steps[2]="③ 乘积/商/链式法则求导。";
  if (subj==="电工电子技术基础") steps[2]="③ 代入欧姆/运放/KCL 公式计算，注意单位。";
  if (subj==="C语言程序设计") steps[2]="③ 逐步跟踪变量与循环边界。";
  if (subj==="计算机网络基础") steps[2]="③ 按掩码/端口/层次规则判断。";
  if (subj==="英语") steps[2]="③ 按时态/语态/搭配规则排除。";
  let why = "";
  if ((q.type==="single"||q.type==="judge") && q.options) {
    const others = q.options.filter(function(o){ return String(o)!==String(ans); }).slice(0,3);
    why = "\n【其他选项】\n" + others.map(function(o,i){ return "• "+["A","B","C","D"][i]+"「"+String(o).slice(0,24)+"」：与答案不符，注意"+(subj==="英语"?"时态/搭配":"公式或符号")+"。"; }).join("\n");
  }
  q.analysis = "【结论】"+ans+"\n【考点】"+kp+"\n【步骤】\n"+steps.join("\n")+why+"\n【易错】"+pit;
  return q.analysis;
}

  function viewLearn() {
    setTitle("学习一刻", true);
    const book = (window.STUDY_DATA && window.STUDY_DATA.LEARN_BOOK) || {};
    const subjects = Object.keys(book);
    const cur = state.learnSubj && book[state.learnSubj] ? state.learnSubj : subjects[0];
    const chapters = book[cur] || [];
    const total = chapters.reduce(function (n, ch) { return n + (ch.points || []).length; }, 0);
    return (
      '<div class="learn-hero"><h2>学习一刻</h2><p>分科讲解：高数讲步骤，英语讲规则，电工讲定律，C 讲执行，计网讲过程。学完直接去练。</p></div>' +
      '<div class="chip-row" style="margin-bottom:16px">' +
      subjects.map(function (t) {
        return '<button class="chip ' + (t === cur ? "is-active" : "") + '" data-act="learn-subj" data-v="' + attr(t) + '" type="button">' + esc(subjOf(t).short || t) + "</button>";
      }).join("") +
      "</div>" +
      chapters.map(function (ch, ci) {
        return (
          '<div class="section-title">' + esc(ch.chapter) + "</div>" +
          ch.points.map(function (p, pi) {
            return (
              '<button class="kp-card" data-act="learn-open" data-id="' + attr(p.id) + '" type="button">' +
              '<span class="num" style="width:32px;height:32px;border-radius:10px;display:grid;place-items:center;font-weight:800;background:' +
              (subjOf(cur).color || "#2563EB") + ';color:#fff">' + (ci + 1) + "." + (pi + 1) + "</span>" +
              '<span style="flex:1;min-width:0"><span class="t" style="display:block;font-weight:700;font-size:15px">' + esc(p.name) + '</span>' +
              '<span class="s" style="font-size:12px;color:var(--text-sub)">' + esc(p.level) + " · " + p.minutes + " 分钟 · " + esc(p.kp || "") + "</span></span>" +
              '<span class="kp-badge ' + (p.level === "冲刺" ? "hard" : p.level === "强化" ? "mid" : "") + '">' + esc(p.level) + "</span>" +
              "</button>"
            );
          }).join("")
        );
      }).join("") +
      '<p class="muted" style="font-size:12px;margin-top:16px;text-align:center">共 ' + total + " 个知识点</p>"
    );
  }

  function viewLearnDetail(id) {
    const book = (window.STUDY_DATA && window.STUDY_DATA.LEARN_BOOK) || {};
    let pt = null;
    Object.keys(book).forEach(function (subj) {
      (book[subj] || []).forEach(function (ch) {
        (ch.points || []).forEach(function (p) {
          if (p.id === id) pt = { p: p, subj: subj, chapter: ch.chapter };
        });
      });
    });
    if (!pt) return '<div class="card"><div class="empty">未找到知识点</div></div>';
    const p = pt.p;
    setTitle(p.name, true);
    const fmt = function (s) {
      return String(s).replace(/frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)");
    };
    return (
      '<div class="card">' +
      '<div class="row-between"><strong>' + esc(p.name) +
      '</strong><span class="chip">' + esc(p.level) + " · " + p.minutes + " 分钟</span></div>" +
      '<p class="muted" style="margin-top:8px">' + esc(pt.subj) + " · " + esc(pt.chapter) + "</p></div>" +
      (p.content
        ? '<div class="card kp-content"><div style="line-height:1.9;font-size:15px;color:var(--text)">' + esc(p.content).split("\n").map(function(line){
            if(!line.trim()) return "<br/>";
            if(line.indexOf("【")===0 && line.indexOf("】")>0) return '<div style="font-size:16px;font-weight:700;color:var(--primary);margin:16px 0 6px;padding-left:10px;border-left:3px solid var(--primary)">'+line+'</div>';
            if(line.indexOf("例：")===0 || line.indexOf("例题：")===0) return '<div style="background:rgba(59,130,246,0.08);padding:10px 14px;border-radius:8px;margin:8px 0;font-family:var(--mono);font-size:14px">'+line+'</div>';
            if(line.indexOf("【易错")>=0 || line.indexOf("易错点")>=0) return '<div style="background:rgba(220,38,38,0.08);padding:10px 14px;border-radius:8px;margin:8px 0;color:#DC2626">'+line+'</div>';
            if(line.indexOf("答案")>=0 || line.indexOf("解：")===0) return '<div style="color:#16A34A;font-weight:600;margin:4px 0">'+line+'</div>';
            return line;
          }).join("<br/>") + '</div></div>'
        : '') +
      (p.define
        ? '<div class="card"><h3 style="font-size:13px;color:var(--text-sub);margin-bottom:6px">一句话</h3><p>' +
          esc(p.define) + "</p></div>"
        : '') +
      (p.why
        ? '<div class="card"><h3 style="font-size:13px;color:var(--text-sub);margin-bottom:6px">为什么考</h3><p>' +
          esc(p.why) + "</p></div>"
        : '') +
      ((p.core && p.core.length) || (p.steps && p.steps.length)
        ? '<div class="card"><h3 style="font-size:13px;color:var(--text-sub);margin-bottom:8px">核心内容</h3>' +
          (p.core || [])
            .map(function (c) {
              return (
                '<div class="f-row"><span class="f-tag">' + esc(c.k) +
                '</span><span class="f-txt">' + fmt(c.v) + "</span></div>"
              );
            })
            .join("") +
          '<ol style="margin:12px 0 0 1.2em;font-size:14px;line-height:1.7">' +
          (p.steps || []).map(function (st) { return "<li>" + esc(st) + "</li>"; }).join("") +
          "</ol></div>"
        : '') +
      (p.example
        ? '<div class="card"><h3 style="font-size:13px;color:var(--text-sub);margin-bottom:8px">典型例题</h3>' +
          '<div style="font-size:15px;font-weight:600;line-height:1.7;margin-bottom:8px">' + fmt(p.example.stem) + "</div>" +
          '<div class="mistake-box">' + esc(p.example.analysis) + "</div></div>"
        : '') +
      ((p.mistakes && p.mistakes.length)
        ? '<div class="card"><h3 style="font-size:13px;color:var(--text-sub);margin-bottom:8px">常见错误</h3>' +
          '<div class="mistake-box">' +
          p.mistakes.map(function (m) { return "• " + esc(m); }).join("<br/>") +
          "</div></div>"
        : '') +
      '<div style="display:flex;flex-direction:column;gap:8px;margin:16px 0 8px">' +
      '<button class="btn btn-primary btn-block" data-act="learn-practice" data-p="' + attr(p.kp || p.name) + '" data-subj="' + attr(pt.subj) + '" type="button">去练习该考点</button>' +
      '<button class="btn btn-ghost btn-block" data-act="goto-formula" data-subj="' + attr(pt.subj) + '" type="button">查看公式</button>' +
      '<button class="btn btn-ghost btn-block" data-act="learn-mark" data-id="' + attr(p.id) + '" type="button">标记已学</button>' +
      '<button class="btn btn-ghost btn-block" data-act="learn-back-list" type="button">返回知识列表</button>' +
      "</div>"
    );
  }


    function viewFormula() {
    setTitle("公式速查", true);
    const book = window.STUDY_DATA.FORMULA_BOOK || {};
    const PUB = ["高等数学", "英语"];
    const MAJ = ["电工电子技术基础", "C语言程序设计", "计算机网络基础"];
    const g = state.formulaGroup === "major" ? "major" : "public";
    const list = g === "public" ? PUB : MAJ;
    const cur = list.indexOf(state.formulaTab) >= 0 ? state.formulaTab : list[0];
    const groups = book[cur] || [];
    const sc = subjOf(cur);
    return `
      <div class="seg-top">
        <button class="seg-top-btn ${g === "public" ? "is-active" : ""}" data-act="fgroup" data-v="public" type="button">公共课</button>
        <button class="seg-top-btn ${g === "major" ? "is-active" : ""}" data-act="fgroup" data-v="major" type="button">专业课</button>
      </div>
      <p class="muted" style="font-size:12px;margin:8px 0 12px">
        ${g === "public" ? "公共基础课 · 高等数学 + 英语 · 各 150 分" : "专业基础综合课 · 电工 + C语言 + 计网 · 合卷 300 分"}
      </p>

      <div class="chip-row" style="margin-bottom:12px">
        ${list
          .map(
            (t) =>
              `<button class="chip ${t === cur ? "is-active" : ""}" data-act="ftab" data-v="${attr(t)}" type="button" style="${t === cur ? "background:" + subjOf(t).color + ";border-color:" + subjOf(t).color : ""}">${subjOf(t).short || t}</button>`
          )
          .join("")}
      </div>

      <input class="input" id="fq" placeholder="搜索公式 / 例题 / 易错…" style="margin-bottom:12px" />

      <div class="subject-banner ${sc.cls}">
        <span class="swatch"></span>
        <strong>${esc(cur)}</strong>
        <span class="muted">${groups.reduce((a, x) => a + x.items.length, 0)} 条公式</span>
      </div>

      <div id="fList">
        ${groups
          .map(
            (grp) => `<div class="formula-group">
              <div class="formula-group-title">
                <span class="line" style="background:${sc.color}"></span>
                ${esc(grp.key)}
                <span class="muted">（${grp.items.length}）</span>
              </div>
              ${grp.items
                .map(
                  (it) => `<div class="f-card f-item" style="border-left:3px solid ${sc.color}">
                    <div class="f-head">
                      <span class="f-name">${esc(it.name)}</span>
                      <span class="chip chip-soft" style="background:${sc.color}18;color:${sc.color};border:0">${sc.short}</span>
                    </div>
                    <div class="f-body">${renderMathLine(it.formula)}</div>
                    <div class="f-row"><span class="f-tag">怎么用</span><span class="f-txt">${mathHtml(it.use)}</span></div>
                    <div class="f-row"><span class="f-tag ex">例题</span><span class="f-txt">${mathHtml(it.example)}</span></div>
                    <div class="f-row"><span class="f-tag bad">易错</span><span class="f-txt">${mathHtml(it.wrong)}</span></div>
                    <div class="f-actions">
                      <button class="btn btn-ghost btn-sm" data-act="prac-point" data-p="${attr(it.name)}" type="button">练相关题</button>
                      <button class="btn btn-ghost btn-sm" data-act="copy" data-t="${attr(it.formula)}" type="button">复制公式</button>
                    </div>
                  </div>`
                )
                .join("")}
            </div>`
          )
          .join("")}
      </div>
      <div class="empty hidden" id="fEmpty">没有匹配的公式</div>
    `;
  }

    function viewSchool() {
    setTitle("真题库", true);
    const assets = (D.schoolAssets && D.schoolAssets.assets) || [];
    // 按年份和科目分组统计题目
    const exams = [
      { year: "2025年", title: "2025年 高等数学 完整卷", subj: "高等数学", tag: "完整真题", color: "#3b82f6" },
      { year: "2025年", title: "2025年 大学英语 完整卷", subj: "英语", tag: "完整真题", color: "#8b5cf6" },
      { year: "2025年", title: "2025年 电工电子技术基础 真题卷", subj: "电工电子技术基础", tag: "真题精选", color: "#f97316" },
      { year: "2025年", title: "2025年 C语言程序设计 真题卷", subj: "C语言程序设计", tag: "真题精选", color: "#10b981" },
      { year: "2025年", title: "2025年 计算机网络基础 真题卷", subj: "计算机网络基础", tag: "真题精选", color: "#06b6d4" },
      { year: "2026年", title: "2026年 全真模拟卷（五科合卷）", subj: "全部", tag: "模拟预测", color: "#ef4444" }
    ];
    return `
      <div class="section-title">真题试卷</div>
      <div class="card" style="padding:0">
        ${exams.map((e, i) => `
          <div class="list-row" data-act="start-exam-paper" data-idx="${i}" style="cursor:pointer">
            <span class="dot" style="background:${e.color}"></span>
            <span class="main">
              <span class="t">${e.title}</span>
              <span class="s">${e.year} · ${e.tag}</span>
            </span>
            <span class="end">开始 ›</span>
          </div>
        `).join("")}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-ghost btn-block" data-act="school-practice" type="button">随机刷全部真题（85题）</button>
      </div>

      <div class="section-title" style="margin-top:20px">资料下载</div>
      <div class="card" style="padding:0">
        ${assets
          .map(
            (a) => `<div class="list-row" style="cursor:default">
              <span class="dot"></span>
              <span class="main"><span class="t">${esc(a.name)}</span><span class="s">${esc(a.kind)} · PDF</span></span>
              <a class="btn btn-ghost btn-sm" href="${encodeURIComponent(a.file)}" download="${attr(a.name)}.pdf">下载</a>
            </div>`
          )
          .join("")}
      </div>
      <div class="section-title">原包目录</div>
      <div class="card" style="padding:0">
        ${((D.schoolAssets && D.schoolAssets.catalog) || [])
          .map(
            (c) => `<div class="list-row" style="cursor:default">
              <span class="main"><span class="t">${esc(c.folder)}</span><span class="s">${esc(c.desc)}</span></span>
            </div>`
          )
          .join("")}
      </div>
      <div class="disclaimer" style="margin-top:12px">根据官方考纲整理的高度仿真真题，仅供参考。</div>
    `;
  }

  function viewExamInfo() {
    setTitle("考试结构", true);
    return `
      <div class="card">
        <strong>公共基础课</strong>
        <p class="muted" style="font-size:13px;margin-top:8px">高等数学：150 分，单独考试<br/>英语：150 分，单独考试</p>
      </div>
      <div class="card">
        <strong>专业基础综合课</strong>
        <p class="muted" style="font-size:13px;margin-top:8px">合卷 300 分 / 150 分钟<br/>电工电子约 100 · C语言约 100 · 计算机网络约 100</p>
      </div>
      <div class="card">
        <strong>考试时间</strong>
        <p class="muted" style="font-size:13px;margin-top:8px">2027 年 4 月 24–25 日</p>
      </div>
      <div class="disclaimer">公共课和专业课分开复习更高效。</div>
    `;
  }

  function viewLogin() {
    setTitle("登录", false);
    var mode = state.loginMode || "login";
    return `
      <div style="max-width:400px;margin:60px auto;padding:0 20px">
        <div style="text-align:center;margin-bottom:32px">
          <div style="font-size:40px;margin-bottom:8px">⚡</div>
          <div style="font-size:22px;font-weight:bold">广西专升本练习</div>
          <div style="color:#64748b;font-size:14px;margin-top:4px">登录后云端同步学习进度</div>
        </div>
        <div style="display:flex;background:#f1f5f9;border-radius:10px;padding:4px;margin-bottom:20px">
          <button data-act="switch-login" data-mode="login" type="button" style="flex:1;padding:10px;border:none;border-radius:8px;font-size:15px;font-weight:${mode==='login'?'bold':'normal'};background:${mode==='login'?'white':'transparent'};color:${mode==='login'?'#1e293b':'#64748b'};cursor:pointer">登录</button>
          <button data-act="switch-login" data-mode="register" type="button" style="flex:1;padding:10px;border:none;border-radius:8px;font-size:15px;font-weight:${mode==='register'?'bold':'normal'};background:${mode==='register'?'white':'transparent'};color:${mode==='register'?'#1e293b':'#64748b'};cursor:pointer">注册</button>
        </div>
        <div class="card" style="padding:24px">
          <div style="margin-bottom:16px">
            <label style="font-size:13px;color:#64748b;display:block;margin-bottom:6px">邮箱</label>
            <input id="loginEmail" type="email" placeholder="your@email.com" style="width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font-size:15px;box-sizing:border-box" />
          </div>
          <div style="margin-bottom:20px">
            <label style="font-size:13px;color:#64748b;display:block;margin-bottom:6px">密码</label>
            <input id="loginPwd" type="password" placeholder="至少6位" style="width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font-size:15px;box-sizing:border-box" />
          </div>
          <button data-act="${mode==='login'?'do-login':'do-register'}" type="button" style="width:100%;padding:14px;background:#2D5BFF;color:white;border:none;border-radius:8px;font-size:16px;font-weight:bold;cursor:pointer">${mode==='login'?'登录':'注册'}</button>
          <div id="loginMsg" style="text-align:center;margin-top:12px;font-size:13px;color:#64748b"></div>
        </div>
        <div style="text-align:center;margin-top:20px">
          <button data-act="guest" type="button" style="color:#64748b;font-size:13px;background:none;border:none;cursor:pointer">先逛逛，稍后登录</button>
        </div>
      </div>
    `;
  }

  function viewMe() {
    setTitle("我的", false);
    const total = state.attempts.length;
    const ok = state.attempts.filter((a) => a.correct).length;
    const acc = total ? Math.round((ok / total) * 100) : 0;
    var wbS = window.WORDS ? window.WORDS.getStats() : { mastered: 0, reviewing: 0, learning: 0, total: 3000 };
    const favN = Object.keys(state.fav || {}).filter((k) => state.fav[k]).length;
    const today = new Date().toDateString();
    const todayDone = state.attempts.filter((a) => new Date(a.at || Date.now()).toDateString() === today).length;
    const nick = load("gxzsb.nick", "专升本备考人");

    return `
      <div class="card" style="text-align:center;padding:24px 16px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:white;margin-bottom:16px">
        <div style="width:64px;height:64px;border-radius:50%;background:white;color:#6366f1;font-size:28px;font-weight:bold;display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px">${nick[0] || "学"}</div>
        <div style="font-size:18px;font-weight:bold">${esc(nick)}</div>
        <div style="font-size:13px;opacity:0.9;margin-top:4px">今天已练 ${todayDone} 题 · 连续打卡 ${state.streak.n || 0} 天</div>
      </div>
      <div class="stat-grid" style="margin-bottom:16px">
        <div class="stat-box"><div class="n">${total}</div><div class="l">累计做题</div></div>
        <div class="stat-box"><div class="n">${acc}%</div><div class="l">正确率</div></div>
        <div class="stat-box"><div class="n">${Object.keys(state.wrong).length}</div><div class="l">错题数</div></div>
        <div class="stat-box"><div class="n">${favN}</div><div class="l">收藏数</div></div>
      </div>

      <div class="section-title">学习数据</div>
      <div class="card" style="padding:0;margin-bottom:16px">
        <button class="list-row" data-nav="words" type="button"><span class="main"><span class="t">背单词进度</span><span class="s">已掌握 ${wbS.mastered}/${wbS.total} · 复习中 ${wbS.reviewing}</span></span><span class="end">›</span></button>
        <button class="list-row" data-nav="wrong" type="button"><span class="main"><span class="t">我的错题本</span><span class="s">${Object.keys(state.wrong).length} 道待复习</span></span><span class="end">›</span></button>
      </div>

      <div class="section-title">账号与数据</div>
      <div class="card" style="padding:0;margin-bottom:16px">
        <button class="list-row" data-act="set-nick" type="button"><span class="main"><span class="t">修改昵称</span><span class="s">当前：${esc(nick)}</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="export-all" type="button"><span class="main"><span class="t">导出全部数据备份</span><span class="s">下载JSON文件，换设备可导入</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="import" type="button"><span class="main"><span class="t">导入数据备份</span><span class="s">从JSON文件恢复学习记录</span></span><span class="end">›</span></button>
      </div>

      <div class="section-title">工具与设置</div>
      <div class="card" style="padding:0;margin-bottom:16px">
        <button class="list-row" data-act="exam-info" type="button"><span class="main"><span class="t">考试结构说明</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="school" type="button"><span class="main"><span class="t">真题库/资料</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="theme" type="button"><span class="main"><span class="t">切换深色/浅色模式</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="clear" type="button"><span class="main"><span class="t" style="color:var(--error)">清除本机全部数据</span></span><span class="end">›</span></button>
      </div>

      <div class="disclaimer">
        本站为个人 AI 辅助整理的广西专升本备考工具，非广西招生考试院官方平台。所有题目与内容仅供参考，请以官方发布的考试大纲为准。本站所有数据仅保存在你本机浏览器中，不上传任何服务器。
        <br/><br/><a href="https://www.gxeea.cn/zsb/tzgg.htm" target="_blank" rel="noopener" style="color:#6366f1">官方信息：广西招生考试院专升本公告 ›</a>
        <br/><br/>版本 v3.0 · 3000核心词 · 五科1500+题
      </div>
    `;
  }

  function viewSearch() {
    setTitle("搜索", true);
    const k = state.searchQ.trim().toLowerCase();
    const hits = k
      ? Q.filter((q) =>
          [q.stem, q.subject, q.knowledgePoint, q.chapter, q.answer].join(" ").toLowerCase().includes(k)
        ).slice(0, 30)
      : [];
    return `
      <input class="input" id="searchInput" placeholder="搜考点 / 题干 / 科目…" value="${attr(state.searchQ)}" />
      ${
        !k
          ? `<div class="empty">输入关键词开始搜索，例如「极限」「子网」「运放」</div>`
          : hits.length
          ? hits
              .map(
                (q) => `<button class="list-row" data-act="open-q" data-id="${attr(q.id)}" type="button">
                  <span class="dot" style="background:${subjOf(q.subject).color}"></span>
                  <span class="main">
                    <span class="t">${esc(q.stem).slice(0, 40)}</span>
                    <span class="s">${subjOf(q.subject).short} · ${esc(q.chapter || "")} · ${esc(q.difficultyLabel)}</span>
                  </span>
                  <span class="end">›</span>
                </button>`
              )
              .join("")
          : `<div class="empty">没有找到相关题目，试试其他关键词</div>`
      }
    `;
  }

  /* ========== render ========== */
function formulaFilter() {
    var el = document.getElementById("fq");
    if (!el) return;
    el.oninput = function () {
      var v = (el.value || "").toLowerCase();
      var items = document.querySelectorAll(".f-item");
      var n = 0;
      items.forEach(function (it) {
        var ok = !v || it.textContent.toLowerCase().indexOf(v) >= 0;
        it.style.display = ok ? "" : "none";
        if (ok) n++;
      });
      var em = document.getElementById("fEmpty");
      if (em) em.classList.toggle("hidden", n > 0);
    };
  }


  function buildAiPrompt(q) {
    const ans = Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer;
    return [
      "请作为专升本辅导老师，详细解析这道题（中文）：",
      "【科目】" + (q.subject || ""),
      "【考点】" + (q.knowledgePoint || ""),
      "【题干】" + (q.stem || "").replace(/frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)"),
      "【参考答案】" + String(ans).replace(/frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)"),
      "",
      "要求：1) 先说考什么；2) 给出完整推导/计算步骤；3) 说明其他选项为什么错；4) 给出 1 道同类型变式；5) 标出易错点。",
    ].join("\n");
  }
  function escKeep(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  /** \frac{a}{b} → 上下分式；纯文本 a/b 尽量识别 */
  function renderMath(expr) {
    if (expr == null) return "";
    let t = String(expr);
    // 递归解析 rac{...}{...}
    function parse(str) {
      const idx = str.indexOf("\\frac");
      if (idx < 0) return escKeep(str).replace(/\n/g, "<br/>");
      let before = str.slice(0, idx);
      let rest = str.slice(idx + 5); // after \\frac  — wait
      return "";
    }
    // 简化实现：单遍替换 rac{x}{y}
    function fracToHtml(src) {
      let out = "";
      let i = 0;
      while (i < src.length) {
        if (src.startsWith("\\frac{", i) || src.startsWith("\\frac{", i)) {
          // not used
        }
        if (src[i] === "\\" && src.slice(i, i + 6) === "\\frac{") {
          i += 6;
          // parse numerator braces
          let depth = 1, num = "";
          while (i < src.length && depth > 0) {
            if (src[i] === "{") depth++;
            else if (src[i] === "}") {
              depth--;
              if (depth === 0) { i++; break; }
            }
            if (depth > 0) num += src[i];
            i++;
          }
          if (src[i] === "{") {
            i++;
            depth = 1;
            let den = "";
            while (i < src.length && depth > 0) {
              if (src[i] === "{") depth++;
              else if (src[i] === "}") {
                depth--;
                if (depth === 0) { i++; break; }
              }
              if (depth > 0) den += src[i];
              i++;
            }
            out += '<span class="frac"><span class="num">' + fracToHtml(num) + '</span><span class="den">' + fracToHtml(den) + "</span></span>";
          }
          continue;
        }
        out += src[i];
        i++;
      }
      return out;
    }
    // 实际传入用单反斜杠写在 JS 字符串里是 \\frac → 文件里是 \frac → 运行时是 \frac
    // 直接匹配字符序列 backslash frac
    const re = /\\frac\{([^{}]*)\}\{([^{}]*)\}/g;
    // 上面太绕：用字符串替换循环
    let html = String(expr);
    // 匹配 \frac{a}{b} 在 JS 源里是 \\frac —— 运行时字符串若来自 JSON 是 \\frac 或 \frac
    for (let n = 0; n < 8; n++) {
      const m = html.match(/\frac\{([^{}]*)\}\{([^{}]*)\}/);
      if (!m) break;
      const rep =
        '<span class="frac"><span class="num">' +
        escKeep(m[1]) +
        '</span><span class="den">' +
        escKeep(m[2]) +
        "</span></span>";
      html = html.replace(m[0], rep);
    }
    // 简单斜杠分式：数字/数字 或 变量式/变量式（无空格）
    html = html.replace(/(^|[^\w])([A-Za-z0-9^²³⁺⁻()]+)\/([A-Za-z0-9^²³⁺⁻()]+)/g, function (mm, p, a, b) {
      return p + '<span class="frac"><span class="num">' + a + '</span><span class="den">' + b + "</span></span>";
    });
    html = escKeep(html);
    // 上一步会把标签转义，改为分段
    return html;
  }
  function mathHtml(expr) {
    const raw = String(expr == null ? "" : expr);
    let out = "";
    let i = 0;
    while (i < raw.length) {
      if (raw.startsWith("frac{", i)) {
        i += 5;
        let depth = 1, num = "";
        while (i < raw.length && depth) {
          const ch = raw[i];
          if (ch === "{") depth++;
          else if (ch === "}") { depth--; if (!depth) { i++; break; } }
          if (depth) num += ch;
          i++;
        }
        if (raw[i] === "{") {
          i++;
          depth = 1;
          let den = "";
          while (i < raw.length && depth) {
            const ch = raw[i];
            if (ch === "{") depth++;
            else if (ch === "}") { depth--; if (!depth) { i++; break; } }
            if (depth) den += ch;
            i++;
          }
          out += '<span class="frac"><span class="num">' + mathHtml(num) + '</span><span class="den">' + mathHtml(den) + "</span></span>";
          continue;
        }
      }
      out += escKeep(raw[i]);
      i++;
    }
    return out;
  }
  function renderMathLine(expr) {
    return '<div class="mathline">' + mathHtml(expr) + "</div>";
  }

  /* ========== 页面：背单词 ========== */
  function viewWords() {
    setTitle("英语核心词汇", false);
    var S = window.WORDS.getStats();
    var goal = window.WORDS.getDailyGoal();
    var dueReview = window.WORDS.getDueReview();
    var pct = Math.round((S.mastered / S.total) * 100);
    return `
      <div class="wb-hero">
        <div class="wb-hero-title">英语核心词汇 ${S.total}</div>
        <div class="wb-hero-sub">艾宾浩斯遗忘曲线 · 科学复习</div>
        <div class="wb-stats-row">
          <div class="wb-stat"><div class="wb-stat-num">${S.mastered}</div><div class="wb-stat-label">已掌握</div></div>
          <div class="wb-stat"><div class="wb-stat-num">${S.reviewing}</div><div class="wb-stat-label">复习中</div></div>
          <div class="wb-stat"><div class="wb-stat-num">${S.learning}</div><div class="wb-stat-label">学习中</div></div>
          <div class="wb-stat"><div class="wb-stat-num">${S.unlearned}</div><div class="wb-stat-label">未学</div></div>
        </div>
        <div class="wb-progress-bar"><div class="wb-progress-fill" style="width:${pct}%"></div></div>
        <div class="wb-progress-text">已掌握 ${pct}% · 今日学 ${S.today.learned||0} 复习 ${S.today.reviewed||0}</div>
      </div>

      <div class="section-title">学习模式</div>
      <div class="wb-mode-grid">
        <button class="wb-mode-card" data-act="wb-start-quiz" data-mode="meaning" type="button">
          <div class="wb-mode-ico">📖</div>
          <div class="wb-mode-name">看词选义</div>
          <div class="wb-mode-desc">看英文选中文</div>
        </button>
        <button class="wb-mode-card" data-act="wb-start-quiz" data-mode="word" type="button">
          <div class="wb-mode-ico">🔤</div>
          <div class="wb-mode-name">看义选词</div>
          <div class="wb-mode-desc">看中文选英文</div>
        </button>
        <button class="wb-mode-card" data-act="wb-start-quiz" data-mode="spell" type="button">
          <div class="wb-mode-ico">✍️</div>
          <div class="wb-mode-name">拼写练习</div>
          <div class="wb-mode-desc">看释义拼单词</div>
        </button>
        <button class="wb-mode-card" data-act="wb-start-quiz" data-mode="mixed" type="button">
          <div class="wb-mode-ico">🎯</div>
          <div class="wb-mode-name">混合挑战</div>
          <div class="wb-mode-desc">三种题型随机</div>
        </button>
      </div>

      <div class="section-title">快速入口</div>
      <div class="wb-actions">
        ${dueReview.length > 0 ? `
          <button class="btn btn-wb-review btn-block" data-nav="word-review" type="button">
            复习 ${dueReview.length} 个到期词
          </button>
        ` : ""}
        <button class="btn btn-primary btn-block" data-act="wb-start-new" type="button">
          卡片学习 · 今日新词 ${goal} 个
        </button>
        <button class="btn btn-ghost btn-block" data-nav="word-list" type="button">
          浏览全部词汇 A-Z
        </button>
      </div>

      <div class="wb-goal-setting">
        <span>每日新词目标：</span>
        ${[10,20,30,50].map(function(n){
          return `<button class="chip ${n===goal?'is-active':''}" data-act="wb-set-goal" data-v="${n}" type="button">${n}</button>`;
        }).join("")}
      </div>
    `;
  }

  function viewWordLearn() {
    setTitle("学习新词", true);
    var goal = window.WORDS.getDailyGoal();
    var newWords = window.WORDS.getNewWords(goal);
    if (!state.wbLearn) {
      state.wbLearn = { list: newWords, i: 0, flipped: false };
    }
    var L = state.wbLearn;
    if (L.i >= L.list.length) {
      state.wbLearn = null;
      return `
        <div class="wb-done">
          <div class="wb-done-icon">🎉</div>
          <div class="wb-done-title">今日新词学完啦！</div>
          <div class="wb-done-sub">共学习 ${L.list.length} 个单词</div>
          <button class="btn btn-primary btn-block" data-nav="words" type="button">返回单词本</button>
        </div>`;
    }
    var w = L.list[L.i];
    var prog = Math.round((L.i / L.list.length) * 100);
    return `
      <div class="wb-card-wrap">
        <div class="wb-progress-text">${L.i+1} / ${L.list.length} · ${prog}%</div>
        <div class="wb-progress-bar"><div class="wb-progress-fill" style="width:${prog}%"></div></div>
        <div class="wb-card ${L.flipped?'flipped':''}" data-act="wb-flip">
          <div class="wb-card-front">
            <div class="wb-word">${esc(w.w)}</div>
            <div class="wb-phonetic">/${esc(w.ph)}/</div>
            <button class="wb-speak-btn" data-act="wb-speak" data-word="${esc(w.w)}" type="button" onclick="event.stopPropagation()">🔊 发音</button>
            <div class="wb-hint">点击卡片查看释义</div>
          </div>
          <div class="wb-card-back">
            <div class="wb-word">${esc(w.w)}</div>
            <div class="wb-phonetic">/${esc(w.ph)}/</div>
            <button class="wb-speak-btn" data-act="wb-speak" data-word="${esc(w.w)}" type="button" onclick="event.stopPropagation()">🔊 发音</button>
            <div class="wb-pos">${esc(w.pos)}</div>
            <div class="wb-meaning">${esc(w.m)}</div>
          </div>
        </div>
        <div class="wb-mark-btns">
          <button class="btn btn-wb-forget" data-act="wb-mark" data-v="0" type="button">不认识</button>
          <button class="btn btn-wb-know" data-act="wb-mark" data-v="1" type="button">认识</button>
        </div>
      </div>
    `;
  }

  function viewWordReview() {
    setTitle("复习单词", true);
    var due = window.WORDS.getDueReview();
    if (!state.wbReview) {
      state.wbReview = { list: due, i: 0, flipped: false };
    }
    var R = state.wbReview;
    if (R.i >= R.list.length) {
      state.wbReview = null;
      return `
        <div class="wb-done">
          <div class="wb-done-icon">✅</div>
          <div class="wb-done-title">复习完成！</div>
          <div class="wb-done-sub">共复习 ${R.list.length} 个单词</div>
          <button class="btn btn-primary btn-block" data-nav="words" type="button">返回单词本</button>
        </div>`;
    }
    var w = R.list[R.i];
    var prog = Math.round((R.i / R.list.length) * 100);
    return `
      <div class="wb-card-wrap">
        <div class="wb-progress-text">${R.i+1} / ${R.list.length} · ${prog}%</div>
        <div class="wb-progress-bar"><div class="wb-progress-fill" style="width:${prog}%"></div></div>
        <div class="wb-card ${R.flipped?'flipped':''}" data-act="wb-flip-review">
          <div class="wb-card-front">
            <div class="wb-word">${esc(w.w)}</div>
            <div class="wb-phonetic">/${esc(w.ph)}/</div>
            <div class="wb-hint">点击卡片查看释义</div>
          </div>
          <div class="wb-card-back">
            <div class="wb-word">${esc(w.w)}</div>
            <div class="wb-phonetic">/${esc(w.ph)}/</div>
            <div class="wb-pos">${esc(w.pos)}</div>
            <div class="wb-meaning">${esc(w.m)}</div>
          </div>
        </div>
        <div class="wb-mark-btns">
          <button class="btn btn-wb-forget" data-act="wb-mark-review" data-v="0" type="button">不认识</button>
          <button class="btn btn-wb-know" data-act="wb-mark-review" data-v="1" type="button">认识</button>
        </div>
      </div>
    `;
  }

  function viewWordQuiz() {
    setTitle("单词测验", true);
    var Q = state.wbQuiz;
    if (!Q || Q.i >= Q.list.length) {
      if (Q) {
        var correct = Q.correct || 0;
        var total = Q.list.length;
        var pct = total ? Math.round(correct / total * 100) : 0;
        state.wbQuiz = null;
        return `
          <div class="wb-done">
            <div class="wb-done-icon">${pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '💪'}</div>
            <div class="wb-done-title">练习完成！</div>
            <div class="wb-done-sub">答对 ${correct}/${total} 题 · 正确率 ${pct}%</div>
            <button class="btn btn-primary btn-block" data-nav="words" type="button">返回单词本</button>
          </div>`;
      }
      return '<div class="empty">没有题目<button class="btn btn-primary" data-nav="words" type="button">返回</button></div>';
    }
    var q = Q.list[Q.i];
    var prog = Math.round((Q.i / Q.list.length) * 100);
    var modeLabel = {meaning: '看词选义', word: '看义选词', spell: '拼写练习'}[q.type] || '练习';
    
    if (q.type === 'spell') {
      return `
        <div class="wb-quiz-wrap">
          <div class="wb-progress-text">${Q.i+1} / ${Q.list.length} · ${modeLabel} · 正确率 ${Q.correct||0}/${Q.i}</div>
          <div class="wb-progress-bar"><div class="wb-progress-fill" style="width:${prog}%"></div></div>
          <div class="wb-quiz-card">
            <div class="wb-quiz-label">请根据释义拼写单词</div>
            <div class="wb-quiz-meaning">${esc(q.question)}</div>
            <div class="wb-quiz-phonetic">/${esc(q.phonetic)}/</div>
            <div class="wb-quiz-hint">提示：${esc(q.hint)}</div>
            <input type="text" class="wb-spell-input" id="wbSpellInput" placeholder="输入单词..." autocomplete="off" />
            ${Q.showAnswer ? `
              <div class="wb-quiz-result ${Q.lastCorrect ? 'correct' : 'wrong'}">
                ${Q.lastCorrect ? '✅ 正确！' : '❌ 正确答案：' + esc(q.answer)}
              </div>
            ` : ''}
          </div>
          <div class="wb-quiz-btns">
            ${!Q.showAnswer ? `
              <button class="btn btn-primary btn-block" data-act="wb-spell-submit" type="button">提交</button>
            ` : `
              <button class="btn btn-primary btn-block" data-act="wb-quiz-next" type="button">下一题</button>
            `}
          </div>
        </div>
      `;
    }
    
    // 选择题
    return `
      <div class="wb-quiz-wrap">
        <div class="wb-progress-text">${Q.i+1} / ${Q.list.length} · ${modeLabel} · 正确率 ${Q.correct||0}/${Q.i}</div>
        <div class="wb-progress-bar"><div class="wb-progress-fill" style="width:${prog}%"></div></div>
        <div class="wb-quiz-card">
          <div class="wb-quiz-label">${q.type === 'meaning' ? '这个单词是什么意思？' : '这个释义对应哪个单词？'}</div>
          <div class="wb-quiz-question">${esc(q.question)}</div>
          ${q.type === 'meaning' ? `<div class="wb-quiz-phonetic">/${esc(q.phonetic)}/</div>` : ''}
          <div class="wb-quiz-options">
            ${q.options.map(function(opt, idx) {
              var cls = '';
              if (Q.showAnswer) {
                if (opt === q.answer) cls = 'correct';
                else if (opt === Q.selected) cls = 'wrong';
              }
              return `<button class="wb-quiz-opt ${cls}" data-act="wb-quiz-answer" data-v="${esc(opt)}" type="button" ${Q.showAnswer ? 'disabled' : ''}>
                <span class="wb-opt-letter">${String.fromCharCode(65+idx)}</span>
                <span class="wb-opt-text">${esc(opt)}</span>
              </button>`;
            }).join('')}
          </div>
          ${Q.showAnswer ? `
            <div class="wb-quiz-answer-detail">
              <strong>${esc(q.word.w)}</strong> /${esc(q.word.ph)}/ ${esc(q.word.pos)} — ${esc(q.word.m)}
            </div>
          ` : ''}
        </div>
        ${Q.showAnswer ? `
          <div class="wb-quiz-btns">
            <button class="btn btn-primary btn-block" data-act="wb-quiz-next" type="button">下一题</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  function viewKpDetail(kpName) {
    setTitle("考点精讲", true);
    const details = window.KP_DETAIL || {};
    const d = details[kpName];
    if (!d) {
      return `<div class="empty">没有找到「${esc(kpName)}」的精讲内容</div>`;
    }
    return `
      <div class="kp-detail">
        <div class="kp-title">${esc(d.title)}</div>
        <div class="kp-section">
          <div class="kp-section-title">📐 核心公式 / 概念</div>
          <div class="kp-formula">${esc(d.formula).replace(/\n/g, '<br>')}</div>
        </div>
        <div class="kp-section">
          <div class="kp-section-title">📝 解题方法</div>
          <div class="kp-method">${esc(d.method).replace(/\n/g, '<br>')}</div>
        </div>
        <div class="kp-section">
          <div class="kp-section-title">💡 典型例题</div>
          <div class="kp-example">${esc(d.example).replace(/\n/g, '<br>')}</div>
        </div>
        <button class="btn btn-primary btn-block" data-nav="bank" type="button">去刷这个考点的题</button>
      </div>
    `;
  }

  function viewWordList(letter) {
    setTitle("词汇浏览", true);
    var all = window.WORDS.WORDS;
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var q = state.wbSearch || "";
    var list;
    if (q) {
      list = window.WORDS.searchWords(q);
    } else if (letter && letter !== "all") {
      list = all.filter(function(w){ return w.letter === letter.toUpperCase(); });
    } else {
      list = all.slice(0, 100);
    }
    return `
      <div class="wb-list">
        <div class="wb-search-box">
          <input type="text" id="wbSearchInput" placeholder="搜索单词或释义..." value="${esc(q)}" />
        </div>
        <div class="wb-letter-chips">
          <button class="chip ${!letter||letter==='all'?'is-active':''}" data-nav="word-list/all" type="button">全部</button>
          ${letters.map(function(l){
            var cnt = all.filter(function(w){return w.letter===l;}).length;
            if (cnt === 0) return "";
            return `<button class="chip ${letter===l?'is-active':''}" data-nav="word-list/${l}" type="button">${l}</button>`;
          }).join("")}
        </div>
        <div class="wb-count">${list.length} 个词</div>
        <div class="wb-word-list">
          ${list.map(function(w){
            return `<div class="wb-word-item">
              <span class="wb-w">${esc(w.w)}</span>
              <span class="wb-ph">/${esc(w.ph)}/</span>
              <span class="wb-ps">${esc(w.pos)}</span>
              <span class="wb-mean">${esc(w.m)}</span>
            </div>`;
          }).join("")}
        </div>
      </div>
    `;
  }

  /* ========== 2027 官方考纲 ========== */
  function viewSyllabus(subjId) {
    const S = window.SYLLABUS;
    if (!S) return '<div class="empty">考纲数据加载中<button class="btn btn-primary" data-nav="home">回首页</button></div>';
    const subs = S.subjects;
    if (!subjId) subjId = subs[0].id;
    const cur = subs.find(function(x){return x.id===subjId}) || subs[0];
    const chips = subs.map(function(x){
      return `<button class="chip ${x.id===subjId?'is-active':''}" data-nav="syllabus/${x.id}" type="button">${x.name}</button>`;
    }).join("");
    let html = `
      <div class="page-head"><h2 class="page-title">2027 官方考纲</h2><p class="muted">${S.meta.year} · 来源广西招生考试院</p></div>
      <div style="overflow-x:auto;padding-bottom:6px">${chips}</div>
      <div class="card" style="margin-top:12px">
        <div class="row-between"><b style="font-size:17px">${cur.name}</b><span class="pill" style="background:${cur.color}22;color:${cur.color}">${cur.score} 分</span></div>
        <p class="muted" style="margin:6px 0 0">${cur.time} 分钟 · 闭卷笔试</p>
      </div>`;
    if (cur.structure && cur.structure.length) {
      html += `<div class="section-title">题型结构</div>
      <div class="card" style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
      <tr style="text-align:left"><th style="padding:6px 4px;border-bottom:1px solid var(--border)">题型</th><th style="padding:6px 4px;border-bottom:1px solid var(--border)">题量</th><th style="padding:6px 4px;border-bottom:1px solid var(--border)">分值</th><th style="padding:6px 4px;border-bottom:1px solid var(--border)">小计</th></tr>
      ${cur.structure.map(function(r){
        return `<tr><td style="padding:6px 4px;border-bottom:1px solid var(--border)">${r[0]}</td><td style="padding:6px 4px;border-bottom:1px solid var(--border)">${r[1]}</td><td style="padding:6px 4px;border-bottom:1px solid var(--border)">${r[2]}</td><td style="padding:6px 4px;border-bottom:1px solid var(--border)"><b>${r[3]}</b></td></tr>`;
      }).join("")}
      </table></div>`;
    }
    (cur.chapters||[]).forEach(function(ch){
      html += `<div class="section-title">${ch.title}</div>`;
      ch.points.forEach(function(p){
        html += `<div class="card" style="margin-bottom:10px">
          <div style="font-weight:600;color:${cur.color}">${p[0]}</div>
          <p style="margin:6px 0 0;font-size:13.5px;line-height:1.7;color:var(--text-2)">${p[1]}</p>
        </div>`;
      });
    });
    if (subjId === "ee" || subjId === "c" || subjId === "net") {
      const mc = S.majorCombined;
      html += `<div class="section-title">专业合卷题型（三门共用）</div>
      <div class="card" style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
      <tr style="text-align:left"><th style="padding:6px 4px;border-bottom:1px solid var(--border)">题型</th><th style="padding:6px 4px;border-bottom:1px solid var(--border)">题量</th><th style="padding:6px 4px;border-bottom:1px solid var(--border)">每题</th><th style="padding:6px 4px;border-bottom:1px solid var(--border)">小计</th></tr>
      ${mc.structure.map(function(r){return `<tr><td style="padding:6px 4px;border-bottom:1px solid var(--border)">${r[0]}</td><td style="padding:6px 4px;border-bottom:1px solid var(--border)">${r[1]}</td><td style="padding:6px 4px;border-bottom:1px solid var(--border)">${r[2]}</td><td style="padding:6px 4px;border-bottom:1px solid var(--border)"><b>${r[3]}</b></td></tr>`}).join("")}
      </table>
      <p class="muted" style="margin:8px 0 0;font-size:12px">${mc.note}</p></div>`;
    }
    html += `<div class="disclaimer">本页依据 2027 年版官方考纲整理，仅供复习参考，请以广西招生考试院正式文件为准。</div>`;
    return html;
  }

  function render() {
    const { route, params } = parseHash();
    state.route = route;
    const app = $("#app");
    if (sb && !state.user && route !== "login") {
      app.innerHTML = viewLogin();
      bindEvents();
      return;
    }
    if (route === "login") { app.innerHTML = viewLogin(); bindEvents(); return; }
    if (route === "bank") app.innerHTML = viewBank();
    else if (route === "subject") app.innerHTML = viewSubject(params[0] ? decodeURIComponent(params[0]) : "高等数学");
    else if (route === "practice") app.innerHTML = viewPractice();
    else if (route === "report") app.innerHTML = viewReport();
    else if (route === "wrong") app.innerHTML = viewWrong();
    else if (route === "formula") app.innerHTML = viewFormula();
    else if (route === "learn") app.innerHTML = viewLearn();
    else if (route === "learn-point") app.innerHTML = viewLearnDetail(params[0] || "");
    else if (route === "school") app.innerHTML = viewSchool();
    else if (route === "syllabus") app.innerHTML = viewSyllabus(params[0] ? decodeURIComponent(params[0]) : "");
    else if (route === "exam-info") app.innerHTML = viewExamInfo();
    else if (route === "me") app.innerHTML = viewMe();
    else if (route === "search") app.innerHTML = viewSearch();
    else if (route === "words") app.innerHTML = viewWords();
    else if (route === "word-learn") app.innerHTML = viewWordLearn();
    else if (route === "word-review") app.innerHTML = viewWordReview();
    else if (route === "word-list") app.innerHTML = viewWordList(params[0] || "");
    else if (route === "word-quiz") app.innerHTML = viewWordQuiz();
    else if (route === "kp-detail") app.innerHTML = viewKpDetail(params[0] || "");
    else {
      state.route = "home";
      app.innerHTML = viewHome();
    }
    renderNav();
    if (state.route === "formula") formulaFilter();
    if (route === "search") {
      const el = document.getElementById("searchInput");
      if (el) {
        el.focus();
        const n = el.value.length;
        el.setSelectionRange(n, n);
        el.oninput = () => {
          state.searchQ = el.value;
          render();
        };
      }
    }
    if (route === "word-list") {
      var wel = document.getElementById("wbSearchInput");
      if (wel) {
        wel.focus();
        wel.oninput = function() {
          state.wbSearch = wel.value;
          render();
        };
      }
    }
    if (route === "word-quiz") {
      var spellInp = document.getElementById("wbSpellInput");
      if (spellInp && !state.wbQuiz.showAnswer) {
        spellInp.focus();
        spellInp.onkeydown = function(e) {
          if (e.key === "Enter") {
            e.preventDefault();
            var btn = document.querySelector('[data-act="wb-spell-submit"]');
            if (btn) btn.click();
          }
        };
      }
    }
  }

  /* ========== events ========== */
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act],[data-nav]");
    if (!t) return;
    const nav = t.getAttribute("data-nav");
    const act = t.getAttribute("data-act");
    if (!act && nav) return go(nav);

    if (act === "learn-open") {
      go("learn-point/" + t.getAttribute("data-id"));
      render();
    } else if (act === "learn-subj") {
      state.learnSubj = t.getAttribute("data-v");
      render();
    } else if (act === "learn-back-list") {
      go("learn");
      render();
    } else if (act === "learn-back-bank" || act === "go-learn") {
      go(act === "go-learn" ? "learn" : "bank");
      render();
    } else if (act === "learn-practice") {
      const pts = t.getAttribute("data-p");
      const subj = t.getAttribute("data-subj") || "";
      // 先按知识点精确找（限定当前科目）
      let pool = Q.filter(function(q){ return q.knowledgePoint === pts && (!subj || q.subject === subj); });
      // 再模糊找
      if (!pool.length) pool = Q.filter(function(q){ return (q.knowledgePoint||"").indexOf(pts) >= 0 && (!subj || q.subject === subj); });
      if (!pool.length) pool = Q.filter(function(q){ return (q.stem||"").indexOf(pts) >= 0 && (!subj || q.subject === subj); });
      // 还找不到就直接用当前科目
      if (!pool.length && subj) {
        pool = Q.filter(function(q){ return q.subject === subj; });
      }
      if (pool.length) startSession({ ids: shuffle(pool).slice(0,20).map(function(q){return q.id;}), title: "考点专练 · " + pts });
      else alert("暂无练习题");
    } else if (act === "learn-mark") {
      t.textContent = "已学 \u2713";
    } else if (act === "daily") {
      const allIds = Q.map((q) => q.id);
      const shuffled = shuffle(allIds).slice(0, 10);
      startSession({ ids: shuffled, limit: 30, title: "每日 30 题（随机）" });
    }
    else if (act === "due") startSession({ dueOnly: true, onlyWrong: true, limit: 15, title: "到期错题" });
    else if (act === "practice-wrong-all") {
      const ids = Object.keys(state.wrong).filter(function (id) { return qById(id); });
      if (!ids.length) { alert("暂无错题"); return; }
      const shuffled = shuffle(ids);
      startSession({ ids: shuffled, limit: ids.length, title: "全部错题重刷" });
    }
    else if (act === "practice-fav") {
      const ids = Object.keys(state.fav).filter(function (id) { return state.fav[id] && qById(id); });
      if (!ids.length) { alert("暂无收藏题"); return; }
      const shuffled = shuffle(ids);
      startSession({ ids: shuffled, limit: ids.length, title: "收藏题练习" });
    }
    else if (act === "last") {
      const last = state.last;
      if (last && last.subject && SUBJ[last.subject]) startSession({ subject: last.subject, limit: 12, title: "继续 " + last.subject });
      else startSession({ limit: 12, title: "综合练习" });
    } else if (act === "weak") startSession({ mode: "weak", limit: 12, title: "薄弱强化" });
    else if (act === "subject") go("subject/" + encodeURIComponent(t.getAttribute("data-name")));
    else if (act === "chapter") startSession({ chapter: t.getAttribute("data-id"), limit: 15, title: "章节练习" });
    else if (act === "seq-practice") startSession({ subject: t.getAttribute("data-name"), limit: 20, title: "顺序练习" });
    else if (act === "seq-obj") {
      const name = t.getAttribute("data-name");
      startSession({ subject: name, limit: 20, title: name + " · 客观题", filterKind: "obj" });
    } else if (act === "seq-subj") {
      const name = t.getAttribute("data-name");
      startSession({ subject: name, limit: 15, title: name + " · 主观题", filterKind: "subj" });
    }
    else if (act === "filter") {
      const kind = t.getAttribute("data-kind");
      const val = t.getAttribute("data-val");
      const arr = state.filters[kind];
      const i = arr.indexOf(val);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(val);
      render();
    } else if (act === "clear-filter") {
      state.filters = { diff: [], type: [], status: [], kind: [] };
      render();
    } else if (act === "pick") {
      const s = state.session;
      if (!s || s.submitted) return;
      s.sel = t.getAttribute("data-opt");
      render();
    } else if (act === "submit") submitQ();
    else if (act === "next") nextQ();
    else if (act === "prev") prevQ();
    else if (act === "goto") {
      const s = state.session;
      s.i = +t.getAttribute("data-i");
      s.sel = null;
      s.submitted = s.q[s.i].id in s.results;
      s.showExp = false;
      render();
    } else if (act === "toggle-exp") {
      const s = state.session;
      if (!s.submitted) return alert("提交后可查看解析");
      s.showExp = !s.showExp;
      render();
    } else if (act === "fav") {
      const s = state.session;
      const q = s.q[s.i];
      state.fav[q.id] = !state.fav[q.id];
      save(LS.fav, state.fav);
      render();
    }  else if (act === "save-note") {
      const id = t.getAttribute("data-id");
      const box = document.getElementById("noteInput");
      state.notes[id] = box ? box.value : "";
      save(LS.notes, state.notes);
      t.textContent = "已保存";
    } else if (act === "open-q") startSession({ ids: [t.getAttribute("data-id")], title: "题目精练", limit: 1 });
    else if (act === "exam") {
      const planId = t.getAttribute("data-plan");
      const plan = (D.EXAM_PLANS || {})[planId];
      if (!plan) return;
      // 组卷 - 按大纲章节比例抽题
      const items = [];
      const used = new Set();
      const pool = Q.filter((q) => !q.examExclude);

      // 按章节均匀分配：每类题型的题目从各章节均匀抽
      const pickBalanced = (filterFn, n) => {
        const candidates = pool.filter(filterFn);
        // 按chapter分组
        const byCh = {};
        candidates.forEach((q) => {
          const c = q.chapter || "other";
          if (!byCh[c]) byCh[c] = [];
          byCh[c].push(q);
        });
        Object.values(byCh).forEach((arr) => shuffle(arr));
        const chapters = Object.keys(byCh);
        const picked = [];
        let idx = 0;
        while (picked.length < n && chapters.length) {
          const ch = chapters[idx % chapters.length];
          const arr = byCh[ch];
          while (arr.length && used.has(arr[0].id)) arr.shift();
          if (arr.length) {
            const q = arr.shift();
            picked.push(q);
            used.add(q.id);
          } else {
            chapters.splice(chapters.indexOf(ch), 1);
          }
          idx++;
        }
        return picked;
      };

      if (plan.bySubject) {
        plan.sections.forEach((sec) => {
          sec.mix.forEach((m) => {
            pickBalanced((q) => q.subject === sec.subject && q.type === m.type, m.n).forEach((q) => {
              items.push({ id: q.id, score: m.each, sectionKey: sec.key, sectionLabel: sec.label });
            });
          });
        });
      } else {
        plan.sections.forEach((sec) => {
          pickBalanced((q) => q.type === sec.type && q.subject === plan.subject, sec.n).forEach((q) => {
            items.push({ id: q.id, score: sec.each, sectionKey: sec.key, sectionLabel: sec.label });
          });
        });
      }
      if (!items.length) return alert("题量不足");
      startSession({
        ids: items.map((x) => x.id),
        title: plan.title,
        minutes: plan.minutes,
        exam: {
          plan,
          scoreOf: Object.fromEntries(items.map((x) => [x.id, x.score])),
          sectionOf: Object.fromEntries(items.map((x) => [x.id, x])),
        },
      });
    } else if (act === "by-reason") {
      const r = t.getAttribute("data-r");
      const ids = Object.keys(state.wrong).filter((id) => state.wrong[id].reason === r);
      if (ids.length) startSession({ ids, limit: 10, title: "按错因补练" });
      else startSession({ mode: "weak", limit: 8, title: "错因补练" });
    } else if (act === "wrong-tab") {
      state.wrongTab = t.getAttribute("data-v");
      render();
    } else if (act === "wrong-subj") {
      state.wrongSubj = t.getAttribute("data-v");
      render();
    } else if (act === "remove-wrong") {
      const id = t.getAttribute("data-id");
      if (confirm("确定把这道题移出错题本？")) {
        delete state.wrong[id];
        save(LS.wrong, state.wrong);
        render();
      }
    } else if (act === "export") {
      const blob = new Blob([JSON.stringify(state.wrong, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "gxzsb-wrong.json";
      a.click();
    } else if (act === "switch-login") {
      state.loginMode = t.getAttribute("data-mode");
      render();
    } else if (act === "do-login") {
      var em = document.getElementById("loginEmail").value.trim();
      var pw = document.getElementById("loginPwd").value;
      var msg = document.getElementById("loginMsg");
      if (!em || !pw) { msg.textContent = "请输入邮箱和密码"; return; }
      msg.textContent = "登录中...";
      sb.auth.signInWithPassword({ email: em, password: pw }).then(function(r) {
        if (r.error) { msg.textContent = r.error.message; return; }
        state.user = r.data.user;
        go("home"); render();
      });
    } else if (act === "do-register") {
      var em2 = document.getElementById("loginEmail").value.trim();
      var pw2 = document.getElementById("loginPwd").value;
      var msg2 = document.getElementById("loginMsg");
      if (!em2 || !pw2) { msg2.textContent = "请输入邮箱和密码"; return; }
      if (pw2.length < 6) { msg2.textContent = "密码至少6位"; return; }
      msg2.textContent = "注册中...";
      sb.auth.signUp({ email: em2, password: pw2 }).then(function(r) {
        if (r.error) { msg2.textContent = r.error.message; return; }
        sb.auth.signInWithPassword({ email: em2, password: pw2 }).then(function(r2) {
          if (r2.error) { msg2.textContent = "注册成功！请去邮箱验证后登录"; return; }
          state.user = r2.data.user;
          go("home"); render();
        });
      });
    } else if (act === "guest") {
      state.user = { isGuest: true };
      go("home"); render();
    } else if (act === "set-nick") {
      const cur = load("gxzsb.nick", "专升本备考人");
      const n = prompt("输入昵称：", cur);
      if (n && n.trim()) { save("gxzsb.nick", n.trim()); render(); }
    } else if (act === "export-all") {
      const data = {};
      Object.values(LS).forEach((k) => { data[k] = load(k, null); });
      data["gxzsb.nick"] = load("gxzsb.nick", null);
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "gxzsb-backup-" + new Date().toISOString().slice(0,10) + ".json";
      a.click();
    } else if (act === "import") {
      const inp = document.createElement("input");
      inp.type = "file"; inp.accept = ".json";
      inp.onchange = function() {
        const f = inp.files[0]; if (!f) return;
        const r = new FileReader();
        r.onload = function() {
          try {
            const data = JSON.parse(r.result);
            Object.keys(data).forEach((k) => { if (data[k] != null) save(k, data[k]); });
            alert("导入成功！页面将刷新"); location.reload();
          } catch(e) { alert("文件格式错误"); }
        };
        r.readAsText(f);
      };
      inp.click();
    } else if (act === "theme") {
      state.theme = state.theme === "dark" ? "light" : "dark";
      save(LS.theme, state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
    } else if (act === "clear") {
      if (!confirm("清除本机全部学习数据？")) return;
      Object.values(LS).forEach((k) => localStorage.removeItem(k));
      location.reload();
    } else if (act === "school") go("school");
    else if (act === "start-exam-paper") {
      const idx = parseInt(t.getAttribute("data-idx"));
      const papers = [
        { subj: "高等数学", title: "2025高数真题卷" },
        { subj: "英语", title: "2025英语真题卷" },
        { subj: "电工电子技术基础", title: "2025电工真题卷" },
        { subj: "C语言程序设计", title: "2025C语言真题卷" },
        { subj: "计算机网络基础", title: "2025计网真题卷" },
        { subj: "全部", title: "2026全真模拟卷" }
      ];
      const p = papers[idx];
      let ids;
      if (p.subj === "全部") {
        ids = Q.filter((q) => q.source === "school" && q.tags && q.tags.includes("2026真题")).map(q => q.id);
      } else {
        ids = Q.filter((q) => q.source === "school" && q.subject === p.subj && q.tags && q.tags.some(t => t.includes("2025"))).map(q => q.id);
      }
      if (ids.length === 0) { alert("这套卷题目还在整理中~"); return; }
      startSession({ ids, limit: ids.length, title: p.title });
    }
    else if (act === "report") go("report");
    else if (act === "exam-info") go("exam-info");
    else if (act === "school-practice") {
      const ids = Q.filter((q) => q.source === "school").map((q) => q.id);
      startSession({ ids, limit: 20, title: "学校题库" });
    } else if (act === "ai-deepseek" || act === "ai-doubao" || act === "ai-copy") {
      const qq = qById(t.getAttribute("data-id")) || (state.session && state.session.q[state.session.i]);
      if (!qq) return;
      const prompt = buildAiPrompt(qq);
      if (act === "ai-copy" || true) {
        if (navigator.clipboard) navigator.clipboard.writeText(prompt);
      }
      if (act === "ai-deepseek") {
        window.open("https://chat.deepseek.com/", "_blank", "noopener");
        alert("题目已复制。打开 DeepSeek 后按 Ctrl+V 发送，即可生成详细解析。");
      } else if (act === "ai-doubao") {
        window.open("https://www.doubao.com/chat/", "_blank", "noopener");
        alert("题目已复制。打开豆包后按 Ctrl+V 发送，即可生成详细解析。");
      } else {
        alert("题目与解析提示词已复制到剪贴板");
      }
    } else if (act === "goto-formula") {
      state.formulaTab = t.getAttribute("data-subj") || "高等数学";
      go("formula");
      render();
    } else if (act === "prac-point") {
      startSession({ point: t.getAttribute("data-p"), limit: 10, title: "考点专练" });
    } else if (act === "fgroup") {
      state.formulaGroup = t.getAttribute("data-v") || "public";
      state.formulaTab = state.formulaGroup === "major" ? "电工电子技术基础" : "高等数学";
      render();
    } else if (act === "ftab") {
      state.formulaTab = t.getAttribute("data-v");
      render();
    } else if (act === "wb-start-new") {
      state.wbLearn = null;
      go("word-learn");
      render();
    } else if (act === "wb-set-goal") {
      window.WORDS.setDailyGoal(parseInt(t.getAttribute("data-v")));
      render();
    } else if (act === "wb-flip") {
      if (state.wbLearn) { state.wbLearn.flipped = !state.wbLearn.flipped; render(); }
    } else if (act === "wb-flip-review") {
      if (state.wbReview) { state.wbReview.flipped = !state.wbReview.flipped; render(); }
    } else if (act === "wb-mark") {
      if (!state.wbLearn) return;
      var w = state.wbLearn.list[state.wbLearn.i];
      var know = t.getAttribute("data-v") === "1";
      window.WORDS.markWord(w.id, know);
      state.wbLearn.i++;
      state.wbLearn.flipped = false;
      render();
    } else if (act === "wb-mark-review") {
      if (!state.wbReview) return;
      var w2 = state.wbReview.list[state.wbReview.i];
      var know2 = t.getAttribute("data-v") === "1";
      window.WORDS.markWord(w2.id, know2);
      state.wbReview.i++;
      state.wbReview.flipped = false;
      render();
    } else if (act === "wb-speak") {
      var word = t.getAttribute("data-word");
      if (window.speechSynthesis) {
        var utter = new SpeechSynthesisUtterance(word);
        utter.lang = "en-US";
        utter.rate = 0.9;
        window.speechSynthesis.speak(utter);
      }
    } else if (act === "wb-start-quiz") {
      var mode = t.getAttribute("data-mode");
      var goal3 = window.WORDS.getDailyGoal();
      var newWords3 = window.WORDS.getNewWords(goal3);
      var due3 = window.WORDS.getDueReview();
      var pool3 = newWords3.concat(due3.slice(0, 10));
      if (pool3.length === 0) pool3 = window.WORDS.WORDS.slice(0, 20);
      var quizzes3;
      if (mode === 'meaning') quizzes3 = pool3.map(function(w){ return window.WORDS.genMeaningQuiz(w); });
      else if (mode === 'word') quizzes3 = pool3.map(function(w){ return window.WORDS.genWordQuiz(w); });
      else if (mode === 'spell') quizzes3 = pool3.map(function(w){ return window.WORDS.genSpellQuiz(w); });
      else quizzes3 = window.WORDS.genMixedQuiz(pool3);
      state.wbQuiz = { list: quizzes3, i: 0, correct: 0, showAnswer: false, selected: null, lastCorrect: false };
      go("word-quiz");
      render();
    } else if (act === "wb-quiz-answer") {
      if (!state.wbQuiz || state.wbQuiz.showAnswer) return;
      var sel = t.getAttribute("data-v");
      var curQ = state.wbQuiz.list[state.wbQuiz.i];
      state.wbQuiz.selected = sel;
      state.wbQuiz.showAnswer = true;
      if (sel === curQ.answer) {
        state.wbQuiz.correct++;
        state.wbQuiz.lastCorrect = true;
        window.WORDS.markWord(curQ.word.id, true);
      } else {
        state.wbQuiz.lastCorrect = false;
        window.WORDS.markWord(curQ.word.id, false);
      }
      render();
    } else if (act === "wb-spell-submit") {
      if (!state.wbQuiz) return;
      var inp = document.getElementById("wbSpellInput");
      var val = inp ? inp.value.trim().toLowerCase() : "";
      var curQ2 = state.wbQuiz.list[state.wbQuiz.i];
      state.wbQuiz.showAnswer = true;
      if (val === curQ2.answer.toLowerCase()) {
        state.wbQuiz.correct++;
        state.wbQuiz.lastCorrect = true;
        window.WORDS.markWord(curQ2.word.id, true);
      } else {
        state.wbQuiz.lastCorrect = false;
        window.WORDS.markWord(curQ2.word.id, false);
      }
      render();
    } else if (act === "wb-quiz-next") {
      if (!state.wbQuiz) return;
      state.wbQuiz.i++;
      state.wbQuiz.showAnswer = false;
      state.wbQuiz.selected = null;
      render();
    } else if (act === "copy") {
      const txt = t.getAttribute("data-t");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(txt);
        t.textContent = "已复制";
        setTimeout(() => (t.textContent = "复制"), 1000);
      }
    }
  });

  // 顶部按钮安全绑定（元素不存在时跳过，防止白屏）
  if ($("#btnBack")) {
    $("#btnBack").addEventListener("click", () => {
      if (history.length > 1) history.back();
      else go("home");
    });
  }
  if ($("#btnSearch")) $("#btnSearch").addEventListener("click", () => go("search"));
  if ($("#btnTheme")) {
    $("#btnTheme").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      save(LS.theme, state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    const s = state.session;
    if (state.route !== "practice" || !s) return;
    const map = { a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
    const q = s.q[s.i];
    if (e.key >= "1" && e.key <= "4" && !s.submitted) {
      const opt = (q.options || [])[+e.key - 1];
      if (opt) {
        s.sel = opt;
        render();
      }
    } else if (map[e.key] != null && !s.submitted) {
      const opt = (q.options || [])[map[e.key]];
      if (opt) {
        s.sel = opt;
        render();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (!s.submitted) submitQ();
      else nextQ();
    } else if (e.key === "ArrowRight") nextQ();
    else if (e.key === "ArrowLeft") prevQ();
  });

  window.addEventListener("hashchange", render);
  document.documentElement.setAttribute("data-theme", state.theme);
  render();
})();
