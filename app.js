/* gxzsb — 全站布局规范实现 */
(function () {
  "use strict";

  var sb = null;
  if (window.supabase && window.SB_CONFIG) {
    try {
      sb = window.supabase.createClient(window.SB_CONFIG.url, window.SB_CONFIG.key);
    } catch(e) {}
  }

  /* 题库快照：app.js 先于数据就绪注入（登录页不依赖数据），
     数据后台静默加载完成后由 gxzsb:data-ready 重建 */
  let D = window.STUDY_DATA || {};
  function buildQ(dd) {
    return ((dd && dd.questions) || []).map((q, qi) => {
      if (q.type === "choice") q.type = "single";
      if (q.type === "blank") q.type = "fill";
      return {
      ...q,
      _ord: qi,
      difficultyLabel: q.difficultyLabel || ({ 1: "基础", 2: "强化", 3: "冲刺" })[q.difficulty] || "基础",
      typeLabel:
        q.typeLabel ||
        ({ single: "单选", judge: "判断", fill: "填空", calc: "计算", apply: "应用", translate: "翻译", write: "写作" })[q.type] ||
        "单选",
      };
    });
  }
  let Q = buildQ(D);
  let Q_BY_ID = new Map(Q.map((q) => [q.id, q]));

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
      const raw = localStorage.getItem(k);
      if (raw == null) return fb;
      const v = JSON.parse(raw);
      if (v === null || v === undefined) return fb;
      return v;
    } catch (e) {
      return fb;
    }
  };
  const save = (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  };

  /* __QA_PURE_BEGIN__ — 纯函数，供 scripts/smoke.js 抽取单测 */
  function localDayKey(d) {
    const dt = d || new Date();
    return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  }
  function normalizeHashPath(hash) {
    let raw = String(hash == null ? "" : hash);
    if (raw.charAt(0) === "#") raw = raw.slice(1);
    raw = raw.replace(/^\/+/, "");
    return raw || "home";
  }
  function normalizeFilters(f) {
    const fb = { diff: [], type: [], status: [], kind: [] };
    if (!f || typeof f !== "object" || Array.isArray(f)) return fb;
    return {
      diff: Array.isArray(f.diff) ? f.diff.slice() : [],
      type: Array.isArray(f.type) ? f.type.slice() : [],
      status: Array.isArray(f.status) ? f.status.slice() : [],
      kind: Array.isArray(f.kind) ? f.kind.slice() : [],
    };
  }
  function normAns(s) {
    return String(s ?? "")
      .replace(/\s+/g, "")
      .replace(/[，,；;：:！!？?（）()【】[\]'"‘’“”、·．|]/g, "")
      .toLowerCase()
      // 全角字符 → 半角
      .replace(/[\uFF01-\uFF5E]/g, function (ch) { return String.fromCharCode(ch.charCodeAt(0) - 0xfee0); })
      // frac{a}{b} → a/b（处理嵌套，循环 2 次）
      .replace(/frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, "$1/$2")
      .replace(/frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, "$1/$2")
      // 删除 ^ 与花括号残留（x^2 → x2；e^{x} → ex）
      .replace(/[\^{}]/g, "")
      // Unicode 数学符号 → 键盘可输入的 ASCII 等价
      .replace(/[\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079]/g, function (ch) {
        return { "\u2070": "0", "\u00b9": "1", "\u00b2": "2", "\u00b3": "3", "\u2074": "4", "\u2075": "5", "\u2076": "6", "\u2077": "7", "\u2078": "8", "\u2079": "9" }[ch];
      })
      .replace(/[\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089]/g, function (ch) {
        return { "\u2080": "0", "\u2081": "1", "\u2082": "2", "\u2083": "3", "\u2084": "4", "\u2085": "5", "\u2086": "6", "\u2087": "7", "\u2088": "8", "\u2089": "9" }[ch];
      })
      .replace(/[\u02e3\u02b2\u02b0\u02b7]/g, function (ch) {
        return { "\u02e3": "x", "\u02b2": "r", "\u02b0": "h", "\u02b7": "w" }[ch];
      })
      .replace(/\u2212/g, "-")
      .replace(/\u00d7/g, "x")
      .replace(/\u00f7/g, "/")
      .replace(/\u2264/g, "<=")
      .replace(/\u2265/g, ">=")
      .replace(/\u2260/g, "!=")
      .replace(/\u221a/g, "v")
      .replace(/\u03c0/g, "pi")
      .replace(/\u221e/g, "inf")
      .replace(/\u222a/g, "u")
      .replace(/\u2229/g, "n")
      .replace(/\u2208/g, "in")
      .replace(/[\u2192\u2190\u21d2]/g, "->")
      .replace(/[\u222b\u2211\u2215]/g, "");
  }
  function extractSmartPoints(q) {
    const pts = [];
    const push = (s) => {
      String(s || "")
        .split(/[，,；;、\n\r|/]+/)
        .map((x) => String(x).replace(/^\s*[•\-–—*\d.、（）()【】\[\]]+\s*/, "").trim())
        .filter((x) => x && x.length >= 1 && x.length <= 48)
        .forEach((x) => pts.push(x));
    };
    if (q && q.answer) push(Array.isArray(q.answer) ? q.answer.join("，") : q.answer);
    (q && q.accept ? q.accept : []).forEach(push);
    (q && q.scorePoints ? q.scorePoints : []).forEach(push);
    const skipHead = /^(秒懂考点|保姆口诀|第[一二三四五六七八九十]+步|结论|考点|一步步怎么算|认清敌人|回忆武器|举一反三|选项逐个分析|避坑|答案|题目|范文|译文|评分要点)/;
    const fromBrackets = (txt) => {
      const br = String(txt || "").match(/【([^】]+)】/g) || [];
      br.forEach((b) => {
        const t = b.replace(/^【|】$/g, "").trim();
        if (!t || skipHead.test(t)) return;
        if (t.length >= 2 && t.length <= 40) pts.push(t);
      });
    };
    fromBrackets(q && q.sample);
    fromBrackets(q && q.hint);
    fromBrackets(q && q.analysis);
    fromBrackets(q && q.explain);
    return Array.from(new Set(pts)).slice(0, 16);
  }
  function smartGrade(q, userText) {
    const u = normAns(userText);
    if (!u) return 0;
    const points = extractSmartPoints(q);
    if (!points.length) return 0;
    const userRaw = String(userText || "").toLowerCase();
    let hit = 0;
    points.forEach((p) => {
      const pn = normAns(p);
      if (!pn) return;
      if (u.indexOf(pn) >= 0 || userRaw.indexOf(String(p).toLowerCase()) >= 0) hit++;
      else if (pn.length >= 4 && u.indexOf(pn.slice(0, Math.ceil(pn.length * 0.7))) >= 0) hit++;
    });
    return Math.max(0, Math.min(1, hit / points.length));
  }
  /* T9–T12 纯函数 */
  function isImportKey(k) {
    return typeof k === "string" && /^gxzsb\./.test(k);
  }
  function filterImportKeys(obj) {
    const out = {};
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) return out;
    Object.keys(obj).forEach(function (k) {
      if (isImportKey(k) && obj[k] != null) out[k] = obj[k];
    });
    return out;
  }
  function collectExportData(storage) {
    const out = {};
    if (!storage) return out;
    try {
      for (let i = 0; i < storage.length; i++) {
        const k = storage.key(i);
        if (!k || !isImportKey(k)) continue;
        try {
          const v = JSON.parse(storage.getItem(k));
          out[k] = v === undefined ? null : v;
        } catch (e) {
          out[k] = null;
        }
      }
    } catch (e) {}
    ["gxzsb.filters", "gxzsb.session", "gxzsb.dailySession", "gxzsb.daily30", "gxzsb.resetAt"].forEach(function (k) {
      if (!(k in out)) out[k] = null;
    });
    return out;
  }
  function guessWrongReason(q) {
    if (!q || typeof q !== "object") return "concept";
    const type = String(q.type || "");
    const stem = String(q.stem || "");
    const ans = Array.isArray(q.answer) ? q.answer.join(" ") : String(q.answer || "");
    const all = stem + " " + ans + " " + String(q.analysis || "") + " " + String(q.hint || "");
    if (/frac\{|\\frac\{|\blim\b|∫|∑|√|求导|积分|导数|公式/.test(all) || type === "calc") return "formula";
    if (type === "fill" || type === "apply" || /计算|求解|解方程|证明|化简/.test(stem)) return "calc";
    if (stem.length >= 60 || /阅读|材料|不正确|不符合|except|NOT/i.test(stem)) return "read";
    return "concept";
  }
  function fileExtOf(name) {
    const s = String(name == null ? "" : name);
    const i = s.lastIndexOf(".");
    return i >= 0 && i < s.length - 1 ? s.slice(i + 1).toLowerCase() : "";
  }
  /* __QA_PURE_END__ */

  /* 主题持久化：主 key 异常时读备份 key */
  function loadThemeSafe() {
    try {
      const t = load(LS.theme, null);
      if (t === "dark" || t === "light") return t;
    } catch (e) {}
    try {
      const b = load("gxzsb.themeBak", null);
      if (b === "dark" || b === "light") return b;
    } catch (e) {}
    return "light";
  }
  function saveThemeSafe(t) {
    const v = t === "dark" ? "dark" : "light";
    try {
      save(LS.theme, v);
      save("gxzsb.themeBak", v);
    } catch (e) {
      try { save("gxzsb.themeBak", v); } catch (e2) {}
    }
    return v;
  }
  function applyFontSize() {
    var k = state.fontSize || "md";
    var scale = k === "sm" ? 0.9 : (k === "lg" ? 1.12 : 1.0);
    document.documentElement.style.fontSize = (16 * scale) + "px";
  }

  const state = {
    route: "home",
    params: {},
    authLoading: true,
    attempts: load(LS.attempts, []),
    wrong: load(LS.wrong, {}),
    fav: load(LS.fav, {}),
    notes: load(LS.notes, {}),
    marks: load(LS.marks, {}),
    theme: loadThemeSafe(),
    last: load(LS.last, null),
    streak: load(LS.streak, { d: null, n: 0, today: 0 }),
    history: load(LS.history, []),
    reports: load(LS.reports, []),
    session: null, wrongTab: "wrong",
    practiceMode: load("gxzsb.practiceMode", "test"),
    forgetCurve: load("gxzsb.forgetCurve", "mid"),
    fontSize: load("gxzsb.fontSize", "md"),
    filters: normalizeFilters(load('gxzsb.filters', null)),
    formulaTab: "高等数学",
    searchQ: "",
  };

  /* ========== 云端进度同步 ========== */
  const SYNC_FIELDS = {
    attempts: "gxzsb.a3",
    wrong: "gxzsb.w3",
    fav: "gxzsb.f3",
    notes: "gxzsb.n3",
    marks: "gxzsb.m3",
    last: "gxzsb.last3",
    streak: "gxzsb.streak3",
    history: "gxzsb.his3",
    reports: "gxzsb.rep3",
  };
  let syncTimer = null;
  let syncing = false;           // 正在应用远端数据时，避免回环上传
  let progressChannel = null;

  function activeUser() {
    return (state.user && !state.user.isGuest && sb) ? state.user : null;
  }

  function gatherLocal() {
    const out = { _v: 1 };
    Object.keys(SYNC_FIELDS).forEach((f) => { out[f] = state[f]; });
    out.nick = load("gxzsb.nick", null);
    out.resetAt = load("gxzsb.resetAt", 0) || 0;
    return out;
  }

  function emptyStudyPayload(resetAt, nick) {
    return {
      _v: 1,
      attempts: [],
      wrong: {},
      fav: {},
      marks: {},
      notes: {},
      streak: { d: null, n: 0, today: 0 },
      last: null,
      history: [],
      reports: [],
      nick: nick || null,
      resetAt: resetAt || Date.now(),
    };
  }

  function applyData(data) {
    if (!data || typeof data !== "object") return;
    Object.keys(SYNC_FIELDS).forEach((f) => {
      if (data[f] !== undefined) {
        state[f] = data[f];
        save(SYNC_FIELDS[f], data[f]);
      }
    });
    if (data.nick) save("gxzsb.nick", data.nick);
    if (data.resetAt != null) save("gxzsb.resetAt", data.resetAt || 0);
  }

  function mergeMap(a, b, pick) {
    const out = Object.assign({}, a || {});
    Object.keys(b || {}).forEach((k) => {
      if (out[k] === undefined) out[k] = b[k];
      else out[k] = pick(out[k], b[k]);
    });
    return out;
  }

  // 该侧最新一条学习数据的时间（答题 / 错题 / 最近一次学习）。
  // 用于判断 resetAt 是否仍然代表「当前已清空」：若重置后又产生了更晚的学习记录，
  // 说明那次 resetAt 已被新数据覆盖（旧版本注册时误写的 resetAt 也属此情况），不应再据此清空。
  function latestStudyAt(s) {
    if (!s || typeof s !== "object") return 0;
    let t = 0;
    (s.attempts || []).forEach((r) => { if (r && (r.at || 0) > t) t = r.at || 0; });
    if (s.last && (s.last.at || 0) > t) t = s.last.at || 0;
    Object.keys(s.wrong || {}).forEach((id) => {
      const w = s.wrong[id];
      if (w && (w.last || 0) > t) t = w.last || 0;
    });
    return t;
  }

  function mergeProgress(local, remote) {
    if (!remote || typeof remote !== "object") return local;
    const lR = Number(local && local.resetAt) || 0;
    const rR = Number(remote && remote.resetAt) || 0;
    // resetAt 仅在「该侧重置之后没有再产生任何更晚的学习数据」时才有效。
    const rEff = rR > 0 && latestStudyAt(remote) <= rR;
    const lEff = lR > 0 && latestStudyAt(local) <= lR;
    // 任一侧发生了真正的「重置/清除」：用较新且仍有效的 resetAt 整包覆盖，禁止把旧学习数据合并回来
    if (rEff && rR > lR) {
      return emptyStudyPayload(rR, remote.nick || (local && local.nick) || null);
    }
    if (lEff && lR > rR) {
      return emptyStudyPayload(lR, (local && local.nick) || remote.nick || null);
    }
    const out = Object.assign({}, local);

    // attempts：保留每次作答，按 (questionId, at) 去重，按时间排序，截断 1500
    const am = new Map();
    (local.attempts || []).concat(remote.attempts || []).forEach((r) => {
      if (!r || r.questionId == null) return;
      const key = r.questionId + "#" + r.at;
      const ex = am.get(key);
      if (!ex || (r.at || 0) > (ex.at || 0)) am.set(key, r);
    });
    out.attempts = Array.from(am.values()).sort((x, y) => (x.at || 0) - (y.at || 0)).slice(-1500);

    // wrong：同题取错误次数 n、时间 last、复习到期 due 都较大者
    out.wrong = mergeMap(local.wrong, remote.wrong, (x, y) => ({
      n: Math.max(x.n || 0, y.n || 0),
      last: Math.max(x.last || 0, y.last || 0),
      due: Math.max(x.due || 0, y.due || 0),
    }));

    // fav：任一收藏即为 true
    out.fav = mergeMap(local.fav, remote.fav, (x, y) => !!(x || y));
    // marks：并集
    out.marks = mergeMap(local.marks, remote.marks, (x, y) => (x || y));
    // notes：取非空且较长者
    out.notes = mergeMap(local.notes, remote.notes, (x, y) => {
      const xs = String(x || ""), ys = String(y || "");
      if (!xs) return ys;
      if (!ys) return xs;
      return ys.length > xs.length ? ys : xs;
    });

    // streak：连续天数取大；日期以较新为准
    const ls = local.streak || {}, rs = remote.streak || {};
    out.streak = {
      d: (rs.d && (!ls.d || rs.d >= ls.d)) ? rs.d : ls.d,
      n: Math.max(ls.n || 0, rs.n || 0),
      today: Math.max(ls.today || 0, rs.today || 0),
    };

    // last：取时间较新的
    const ll = local.last, rl = remote.last;
    out.last = (rl && (!ll || (rl.at || 0) > (ll.at || 0))) ? rl : ll;

    // history / reports：按标识去重合并
    const uniqBy = (arr, keyfn) => {
      const m = new Map();
      (arr || []).forEach((x) => { const k = keyfn(x); if (x != null && !m.has(k)) m.set(k, x); });
      return Array.from(m.values());
    };
    out.history = uniqBy((local.history || []).concat(remote.history || []),
      (x) => (x && (x.id || x.date || JSON.stringify(x))));
    out.reports = uniqBy((local.reports || []).concat(remote.reports || []),
      (x) => (x && (x.id || JSON.stringify(x))));

    out.nick = remote.nick || local.nick || null;
    out.theme = local.theme;   // 主题为设备本地偏好，不参与同步
    // 仅保留仍然有效的 resetAt；已被新数据覆盖的污染标记（如旧版本注册时写入）归零，避免继续随同步扩散
    out.resetAt = Math.max(lEff ? lR : 0, rEff ? rR : 0);
    return out;
  }

  function enqueueSync(payload) {
    try {
      save("gxzsb.syncQueue", { at: Date.now(), data: payload || gatherLocal() });
    } catch (e2) {}
  }

  // 云同步状态（仅用于"我的"页展示，不频繁 render）
  var syncUI = { status: "idle", at: 0 };
  function setSyncStatus(st) {
    syncUI.status = st;
    syncUI.at = Date.now();
    if (state.route === "me") render();
  }

  async function pushProgress(data, attempt) {
    const u = activeUser();
    if (!u) return;
    const n = attempt || 0;
    const payload = data || gatherLocal();
    setSyncStatus("syncing");
    try {
      const { error } = await sb.from("progress").upsert(
        { user_id: u.id, data: payload, updated_at: new Date().toISOString() },
        { onConflict: "user_id" }
      );
      if (error) {
        console.warn("sync push:", error.message);
        // 服务端返回 error：一律入队 + 轻提示
        enqueueSync(payload);
        setSyncStatus("error");
        toastLite("进度暂存本地，稍后自动同步");
        if (n < 2) setTimeout(() => pushProgress(data, n + 1), 1500 * (n + 1));
      } else {
        setSyncStatus("ok");
      }
    } catch (e) {
      // 离线/网络失败：入队 + 轻提示
      enqueueSync(payload);
      setSyncStatus("error");
      toastLite("网络异常，进度已暂存");
      if (n < 2) setTimeout(() => pushProgress(data, n + 1), 2000 * (n + 1));
    }
  }

  function scheduleSync() {
    if (!activeUser() || syncing) return;
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(() => pushProgress(), 600);
  }

  async function pullAndMerge() {
    const u = activeUser();
    if (!u) return;
    // 先冲掉离线队列
    try {
      const q = load("gxzsb.syncQueue", null);
      if (q && q.data) {
        localStorage.removeItem("gxzsb.syncQueue");
        await pushProgress(q.data);
      }
    } catch (e) {}
    try {
      const { data, error } = await sb.from("progress")
        .select("data,updated_at").eq("user_id", u.id).maybeSingle();
      if (error) return;
      const local = gatherLocal();
      let merged = local;
      if (data && data.data) merged = mergeProgress(local, data.data);
      syncing = true;
      applyData(merged);
      syncing = false;
      render();
      await pushProgress(merged);
    } catch (e) { syncing = false; }
  }

  function subscribeRealtime() {
    const u = activeUser();
    if (!u) return;
    try {
      if (progressChannel) { sb.removeChannel(progressChannel); progressChannel = null; }
      progressChannel = sb.channel("progress-" + u.id)
        .on("postgres_changes",
          { event: "UPDATE", schema: "public", table: "progress", filter: "user_id=eq." + u.id },
          (payload) => {
            if (syncing) return;
            const row = payload.new;
            if (!row || !row.data) return;
            const merged = mergeProgress(gatherLocal(), row.data);
            syncing = true;
            applyData(merged);
            syncing = false;
            render();
          })
        .subscribe();
    } catch (e) {}
  }

  function stopRealtime() {
    try { if (progressChannel) { sb.removeChannel(progressChannel); progressChannel = null; } } catch (e) {}
  }

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
  const qById = (id) => Q_BY_ID.get(id) || Q.find((x) => x.id === id);
  const daysLeft = () => Math.max(0, Math.ceil((EXAM_DAY - Date.now()) / 86400000));

  let actionLockUntil = 0;
  function lockAction(ms) {
    const now = Date.now();
    if (now < actionLockUntil) return false;
    actionLockUntil = now + (ms || 250);
    return true;
  }

  function toastLite(msg, ms) {
    try {
      var el = document.getElementById("qaToast");
      if (!el) {
        el = document.createElement("div");
        el.id = "qaToast";
        el.className = "qa-toast";
        el.setAttribute("role", "status");
        document.body.appendChild(el);
      }
      el.textContent = String(msg || "");
      el.classList.add("is-on");
      clearTimeout(el._t);
      el._t = setTimeout(function () { el.classList.remove("is-on"); }, ms || 2800);
    } catch (e) {}
  }
  /* toast 别名：兼容带时长参数的调用（部分历史代码调用 toast 而非 toastLite） */
  function toast(msg, ms) { toastLite(msg, ms); }
  function fallbackCopy(txt) {
    try {
      const ta = document.createElement("textarea");
      ta.value = String(txt || "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      toastLite("已复制");
    } catch (e) {
      toastLite("复制失败，请手动选择文本");
    }
  }

  /* ===== 轻量弹窗：点遮罩关闭；主题跟随 data-theme ===== */
  function closeModal() {
    const m = document.getElementById("qaModal");
    if (m) {
      if (m._themeObserver) {
        try { m._themeObserver.disconnect(); } catch (e) {}
        m._themeObserver = null;
      }
      if (m.parentNode) m.parentNode.removeChild(m);
    }
    document.documentElement.classList.remove("qa-modal-open");
  }
  function openModal(opts) {
    opts = opts || {};
    closeModal();
    const mask = document.createElement("div");
    mask.id = "qaModal";
    mask.className = "qa-modal-mask";
    mask.setAttribute("data-theme", state.theme);
    mask.addEventListener("click", function (e) {
      if (e.target === mask) closeModal();
    });
    const box = document.createElement("div");
    box.className = "qa-modal-box";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    const title = document.createElement("div");
    title.className = "qa-modal-title";
    title.textContent = String(opts.title || "提示");
    const body = document.createElement("div");
    body.className = "qa-modal-body";
    if (opts.html) body.innerHTML = opts.html;
    else body.textContent = String(opts.body || "");
    const acts = document.createElement("div");
    acts.className = "qa-modal-actions";
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "btn btn-ghost";
    cancel.textContent = opts.cancelText || "取消";
    cancel.addEventListener("click", function () {
      closeModal();
      if (opts.onCancel) opts.onCancel();
    });
    const ok = document.createElement("button");
    ok.type = "button";
    ok.className = "btn btn-primary";
    ok.textContent = opts.okText || "确定";
    ok.addEventListener("click", function () {
      closeModal();
      if (opts.onOk) opts.onOk();
    });
    if (opts.hideCancel) cancel.style.display = "none";
    acts.appendChild(cancel);
    acts.appendChild(ok);
    box.appendChild(title);
    box.appendChild(body);
    box.appendChild(acts);
    mask.appendChild(box);
    document.body.appendChild(mask);
    document.documentElement.classList.add("qa-modal-open");
    // 主题切换时弹窗跟随
    const mo = new MutationObserver(function () {
      mask.setAttribute("data-theme", document.documentElement.getAttribute("data-theme") || "light");
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    mask._themeObserver = mo;
    return mask;
  }
  function confirmModal(title, body, onOk, opts) {
    openModal(Object.assign({ title: title, body: body, onOk: onOk }, opts || {}));
  }

  /* ========== 账号安全：超时 / 失败锁定 / 密码不落盘 / 闲置登出 ========== */
  function withTimeout(promise, ms, onTimeout) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var t = setTimeout(function () {
        if (done) return;
        done = true;
        if (onTimeout) onTimeout();
        reject(new Error("timeout"));
      }, ms || 15000);
      Promise.resolve(promise).then(function (v) {
        if (done) return;
        done = true;
        clearTimeout(t);
        resolve(v);
      }, function (e) {
        if (done) return;
        done = true;
        clearTimeout(t);
        reject(e || new Error("auth error"));
      });
    });
  }
  function getLoginLock() {
    return load("gxzsb.loginLock", { fails: 0, until: 0 }) || { fails: 0, until: 0 };
  }
  function loginLocked() {
    var l = getLoginLock();
    if (l.until && Date.now() < l.until) return Math.ceil((l.until - Date.now()) / 1000);
    return 0;
  }
  function noteLoginFail() {
    var l = getLoginLock();
    l.fails = (l.fails || 0) + 1;
    if (l.fails >= 5) {
      l.until = Date.now() + 60000;
      l.fails = 0;
    }
    save("gxzsb.loginLock", l);
    return l;
  }
  function clearLoginFails() {
    save("gxzsb.loginLock", { fails: 0, until: 0 });
  }
  function scrubPasswords() {
    try {
      var kill = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!k) continue;
        var lk = String(k).toLowerCase();
        if (
          lk.indexOf("password") >= 0 ||
          lk.indexOf("passwd") >= 0 ||
          lk.indexOf("pwd") >= 0 ||
          lk.indexOf("secret") >= 0
        ) {
          // 不误删主题/学习键：仅当键名像密码
          if (lk.indexOf("gxzsb") === 0 || lk.indexOf("user") >= 0 || lk.indexOf("auth") >= 0 || lk.indexOf("login") >= 0 || lk.indexOf("account") >= 0 || lk.indexOf("password") >= 0 || lk.indexOf("passwd") >= 0 || lk.indexOf("pwd") >= 0) {
            kill.push(k);
          }
        }
      }
      // 明确的历史键
      ["gxzsb.password", "gxzsb.pwd", "gxzsb.passwd", "password", "pwd"].forEach(function (k) {
        if (localStorage.getItem(k) != null) kill.push(k);
      });
      Array.from(new Set(kill)).forEach(function (k) {
        try { localStorage.removeItem(k); } catch (e) {}
      });
    } catch (e) {}
  }

  const IDLE_LOGOUT_MS = 2 * 60 * 60 * 1000; // 2h
  let idleTimer = null;
  function resetIdleTimer() {
    if (idleTimer) clearTimeout(idleTimer);
    if (!state.user || state.user.isGuest) return;
    idleTimer = setTimeout(function () {
      if (!state.user || state.user.isGuest) return;
      try { if (sb) sb.auth.signOut(); } catch (e) {}
      state.user = null;
      stopRealtime();
      toastLite("闲置超过 2 小时，已自动退出登录");
      alert("因闲置超过 2 小时，已自动退出登录。学习记录仍保存在本机，请重新登录。");
      go("login");
      render();
    }, IDLE_LOGOUT_MS);
  }

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
    // 预计算各科题目总数，避免每次 filter 遍历全库
    if (!_subjTotalCache) {
      _subjTotalCache = {};
      Q.forEach((q) => { _subjTotalCache[q.subject] = (_subjTotalCache[q.subject] || 0) + 1; });
    }
    let total = _subjTotalCache[name] || 0;
    // 题库还没加载完时，用预估题数显示
    if (!total && D.meta && D.meta.estimatedPerSubject && D.meta.estimatedPerSubject[name]) {
      total = D.meta.estimatedPerSubject[name];
    }
    const at = state.attempts.filter((a) => a.subject === name);
    const done = new Set(at.map((a) => a.questionId).filter(Boolean)).size;
    const acc = at.length ? Math.round((at.filter((a) => a.correct).length / at.length) * 100) : null;
    return { total, done, acc, pct: total ? Math.round((done / total) * 100) : 0 };
  }
  let _subjTotalCache = null;

  // 全库题数：真实题数为准；题库尚未加载完时回退到数据文件声明的预估值；都没有则返回 null（显示"—"）
  function totalQuestions() {
    const realQ = (D.questions || []).length;
    if (realQ > 0) return realQ;
    if (D.meta && D.meta.estimatedQuestions) return D.meta.estimatedQuestions;
    return null;
  }

  function dueCount() {
    return Object.keys(state.wrong).filter((id) => {
      const w = state.wrong[id];
      return !w.mastered && (w.due || 0) <= Date.now();
    }).length;
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
    const t = localDayKey();
    const s = state.streak;
    if (s.d === t) s.today = (s.today || 0) + 1;
    else {
      const y = localDayKey(new Date(Date.now() - 86400000));
      s.n = s.d === y ? (s.n || 0) + 1 : 1;
      s.d = t;
      s.today = 1;
    }
    save(LS.streak, s);
  }

  /* ========== 每日 30 题（按日锁定题组） ========== */
  function dayKey(d) {
    return localDayKey(d);
  }
  function seededPick(ids, seedStr, n) {
    let h = 2166136261;
    for (let i = 0; i < seedStr.length; i++) {
      h ^= seedStr.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    let s = h >>> 0;
    const rnd = () => {
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const arr = ids.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (rnd() * (i + 1)) | 0;
      const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr.slice(0, n);
  }
  function getDaily30() {
    const key = dayKey();
    let d = load("gxzsb.daily30", null);
    if (d && d.date === key && Array.isArray(d.ids) && d.ids.length) return d.ids;
    const ids = seededPick(Q.map((q) => q.id), "gxzsb-daily-" + key, 30);
    d = { date: key, ids };
    save("gxzsb.daily30", d);
    return ids;
  }
  // P2-4：按指定日期取那一天的 30 题（用于补做）
  function getDaily30ByDate(dateKey) {
    return seededPick(Q.map((q) => q.id), "gxzsb-daily-" + dateKey, 30);
  }
  function todayDoneCount() {
    const d = load("gxzsb.daily30", null);
    const key = localDayKey();
    if (!d || d.date !== key || !Array.isArray(d.ids)) return 0;
    const set = new Set(d.ids.map(String));
    const done = new Set();
    state.attempts.forEach((a) => {
      if (!a || a.questionId == null) return;
      if (!set.has(String(a.questionId))) return;
      if (localDayKey(new Date(a.at || 0)) !== key) return;
      done.add(String(a.questionId));
    });
    // 当前每日会话里已作答的也计入（防止 attempts 尚未落库时计数不动）
    if (state.session && state.session.daily && state.session.results) {
      Object.keys(state.session.results).forEach((id) => {
        if (set.has(String(id))) done.add(String(id));
      });
    }
    try {
      const raw = localStorage.getItem("gxzsb.dailySession");
      if (raw) {
        const ds = JSON.parse(raw);
        if (ds && ds.date === key && ds.results) {
          Object.keys(ds.results).forEach((id) => {
            if (set.has(String(id))) done.add(String(id));
          });
        }
      }
    } catch (e) {}
    return Math.min(done.size, 30);
  }

  /* ========== 学习数据重置（只清学习记录） ========== */
  const STUDY_KEYS = [LS.attempts, LS.wrong, LS.fav, LS.notes, LS.marks, LS.last, LS.streak, LS.history, LS.reports,
    "gxzsb.wb.prog", "gxzsb.wb.today", "gxzsb.wb.order"];
  function resetLearningData() {
    STUDY_KEYS.forEach((k) => localStorage.removeItem(k));
    localStorage.removeItem("gxzsb.session");
    localStorage.removeItem("gxzsb.dailySession");
    localStorage.removeItem("gxzsb.daily30");
    const resetAt = Date.now();
    save("gxzsb.resetAt", resetAt);
    state.attempts = [];
    state.wrong = {};
    state.fav = {};
    state.notes = {};
    state.marks = {};
    state.last = null;
    state.streak = { d: null, n: 0, today: 0 };
    state.history = [];
    state.reports = [];
    state.session = null;
    return resetAt;
  }
  function backupThenResetLearning() {
    try {
      const bak = { at: Date.now(), data: {} };
      STUDY_KEYS.forEach((k) => { bak.data[k] = load(k, null); });
      bak.data["gxzsb.daily30"] = load("gxzsb.daily30", null);
      save("gxzsb.bak." + Date.now(), bak);
    } catch (e) {}
    // 注册新账号：仅做「本机隔离」清空，避免串上本机旧账号/游客数据。
    // 注意：这里不能写 resetAt。resetAt 只在用户主动「重置学习数据」时用于跨设备清空；
    // 新账号云端本就为空，若写入 resetAt 会污染云端，之后任何新设备登录都会把云端
    // 正常数据误判为「已重置」而整包清空（换设备进度全丢）。
    STUDY_KEYS.forEach((k) => localStorage.removeItem(k));
    localStorage.removeItem("gxzsb.session");
    localStorage.removeItem("gxzsb.dailySession");
    localStorage.removeItem("gxzsb.daily30");
    localStorage.removeItem("gxzsb.resetAt");
    state.attempts = [];
    state.wrong = {};
    state.fav = {};
    state.notes = {};
    state.marks = {};
    state.last = null;
    state.streak = { d: null, n: 0, today: 0 };
    state.history = [];
    state.reports = [];
    state.session = null;
  }

  /* P1-L1 遗忘曲线三档：单位天。wrong[n]=第 n+1 次错后的间隔；right[n]=答对降级后的间隔 */
  const FORGET_CURVES = {
    fast: { label: "快", wrong: [0, 1, 3, 7], right: [1, 3, 7, 15] },
    mid:  { label: "中", wrong: [0, 1, 2, 4, 7, 15], right: [3, 7, 15, 30] },
    slow: { label: "慢", wrong: [0, 2, 5, 10, 20, 30], right: [5, 10, 20, 30] }
  };
  function getCurve() {
    var k = state.forgetCurve || "mid";
    return FORGET_CURVES[k] || FORGET_CURVES.mid;
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
    const curve = getCurve();
    if (!ok) {
      const n = (prev.n || 0) + 1;
      const gapIdx = Math.min(n - 1, curve.wrong.length - 1);
      const gap = curve.wrong[gapIdx] * 86400000;
      const reason = prev.reason || guessWrongReason(q);
      state.wrong[q.id] = { ...prev, n, last: Date.now(), due: Date.now() + gap, reason, mastered: false };
    } else if (prev.n) {
      const n = Math.max(prev.n - 1, 0);
      if (!n && !prev.mastered) delete state.wrong[q.id];
      else {
        const gapIdx = Math.min(n - 1, curve.right.length - 1);
        const gap = curve.right[gapIdx] * 86400000;
        state.wrong[q.id] = { ...prev, n, last: Date.now(), due: prev.mastered ? Number.MAX_SAFE_INTEGER : Date.now() + gap, mastered: !!prev.mastered };
      }
    }
    save(LS.wrong, state.wrong);
    // P2-4：补做历史题不计连续打卡
    if (!(state.session && state.session.reviewMode)) touchStreak();
    scheduleSync();
  }
  function setWrongReason(qid, reason) {
    if (!qid || !reason) return;
    const w = state.wrong[qid];
    if (!w) return;
    w.reason = reason;
    save(LS.wrong, state.wrong);
    scheduleSync();
  }

  /* ========== 路由 ========== */
  function parseHash() {
    const raw = normalizeHashPath(location.hash || "#/home");
    const parts = raw.split("/").filter(Boolean).map((p) => p);
    const page = parts[0] || "home";
    return { route: page, params: parts.slice(1) };
  }

  function go(path) {
    location.hash = "#/" + String(path || "home").replace(/^\/+/, "");
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
    // 登录页不显示导航；其余页面一律恢复底部 tab / 侧栏
    const isLoginRoute = state.route === "login" || (!state.user && sb && !state.authLoading);
    if (isLoginRoute) {
      hideNav();
      return;
    }
    showNav();
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
  /* ========== 首页：严格对齐 2027 专升本大纲三卷结构 ========== */
  function viewHome() {
    setTitle("广西专升本练习", false);
    const due = dueCount();
    const last = state.last;
    const plans = D.EXAM_PLANS || {};
    const days = daysLeft();
    const todayDone = todayDoneCount();
    const streakN = (state.streak && state.streak.n) || 0;

    // 全库已练 / 正确率（去重题目）
    const doneIds = new Set(state.attempts.map((a) => a.questionId).filter(Boolean));
    const totalQ = totalQuestions();
    const totalDone = doneIds.size;
    const okN = state.attempts.filter((a) => a.correct).length;
    const acc = state.attempts.length ? Math.round((okN / state.attempts.length) * 100) : null;
    const wrongCount = Object.keys(state.wrong || {}).length;
    const favCount = Object.keys(state.fav || {}).length;

    // 按大纲卷：用分值权重估算「备考完成度」
    function moduleProgress(names) {
      let done = 0, total = 0, right = 0, answered = 0;
      names.forEach(function (n) {
        const p = subjStat(n);
        const w = (SUBJ[n] && SUBJ[n].score) || 100;
        done += p.done * w;
        total += (p.total || 0) * w;
        if (p.acc != null) {
          right += p.acc * (p.done || 0) * w;
          answered += (p.done || 0) * w;
        }
      });
      return {
        pct: total ? Math.min(100, Math.round((done / total) * 100)) : 0,
        acc: answered ? Math.round(right / answered) : null,
        done,
        total
      };
    }

    const mathP = subjStat("高等数学");
    const enP = subjStat("英语");
    const majP = moduleProgress(["电工电子技术基础", "C语言程序设计", "计算机网络基础"]);
    const ready = Math.min(
      100,
      Math.round(
        ((mathP.pct * 150 + enP.pct * 150 + majP.pct * 300) / 600) * 0.7 +
          ((acc || 0) / 100) * 30
      )
    );

    const typePill = (items) =>
      (items || [])
        .map(
          (s) =>
            `<span class="type-pill"><b>${esc(s.label)}</b><i>${esc(s.desc)}</i></span>`
        )
        .join("");
    const SYL_MATH = [
      { label: "\u5355\u9879\u9009\u62e9", desc: "10 \u9898 \u00d7 5 \u5206 = 50 \u5206" },
      { label: "\u586b\u7a7a", desc: "4 \u9898 \u00d7 5 \u5206 = 20 \u5206" },
      { label: "\u89e3\u7b54", desc: "7 \u9898 \u00d7 8 \u5206 = 56 \u5206" },
      { label: "\u5e94\u7528", desc: "2 \u9898 \u00d7 12 \u5206 = 24 \u5206" }
    ];
    const SYL_EN = [
      { label: "\u8bcd\u6c47\u8bed\u6cd5\u5355\u9009", desc: "20 \u9898 = 40 \u5206" },
      { label: "\u9605\u8bfb", desc: "\u5355\u9009 50 + \u586b\u7a7a 10 = 60 \u5206" },
      { label: "\u7ffb\u8bd1", desc: "8+1 \u9898 = 32 \u5206" },
      { label: "\u5199\u4f5c", desc: "1 \u9898 = 18 \u5206" }
    ];
    const SYL_MAJ = [
      { label: "\u5355\u9879\u9009\u62e9", desc: "30 \u9898 = 120 \u5206" },
      { label: "\u5224\u65ad", desc: "15 \u9898 = 45 \u5206" },
      { label: "\u586b\u7a7a", desc: "30 \u9898 = 60 \u5206" },
      { label: "\u5e94\u7528", desc: "6 \u9898 = 75 \u5206" }
    ];
    function outlineCard(opt) {
      return `
        <article class="outline-card">
          <header class="oc-hd">
            <div>
              <div class="oc-title">${esc(opt.title)}</div>
              <div class="oc-sub">${esc(opt.sub)}</div>
            </div>
            <div class="oc-score"><b>${opt.score}</b><span>分</span></div>
          </header>
          <div class="oc-meta">
            <span class="pill">${opt.minutes} 分钟</span>
            <span class="pill">${esc(opt.form)}</span>
            ${opt.extra ? `<span class="pill">${esc(opt.extra)}</span>` : ""}
          </div>
          <div class="oc-types">${opt.typesHtml || ""}</div>
        </article>
      `;
    }

    const SYL_PDF = {
      math: { href: "assets/syllabus/高等数学考试大纲（2027年版）.pdf", name: "高等数学考试大纲（2027年版）.pdf" },
      en: { href: "assets/syllabus/英语考试大纲（2027年版）.pdf", name: "英语考试大纲（2027年版）.pdf" },
      maj: { href: "assets/syllabus/电子与信息大类专业基础综合课考试大纲（2027年版）.pdf", name: "电子与信息大类专业基础综合课考试大纲（2027年版）.pdf" }
    };

    const mathPlan = plans["math-full"];
    const enPlan = plans["english-full"];
    const majPlan = plans["major-combined"];

    return `
      <!-- 考情 Hero -->
      <section class="home-hero">
        <div class="hh-left">
          <div class="hh-tag">2027 广西专升本 · 电子与信息大类</div>
          <div class="hh-pdfs">
            <a href="${attr(SYL_PDF.math.href)}" download="${attr(SYL_PDF.math.name)}" target="_blank" rel="noopener">数学大纲</a>
            <a href="${attr(SYL_PDF.en.href)}" download="${attr(SYL_PDF.en.name)}" target="_blank" rel="noopener">英语大纲</a>
            <a href="${attr(SYL_PDF.maj.href)}" download="${attr(SYL_PDF.maj.name)}" target="_blank" rel="noopener">专业大纲</a>
          </div>
        </div>
        <div class="hh-right">
          <div class="ring" style="--p:${totalQ > 100 ? Math.round(totalDone/totalQ*100) : 0}">
            <div class="ring-in">
              <b>${totalQ > 100 ? Math.round(totalDone/totalQ*100) + "%" : "--"}</b>
              <span>题库进度</span>
            </div>
          </div>
          <div class="hh-stats">
            <div><b>${totalDone}</b><span>累计做题</span></div>
            <div><b>${acc == null ? "—" : acc + "%"}</b><span>正确率</span></div>
            <div><b>${wrongCount}</b><span>错题数</span></div>
            <div><b>${favCount}</b><span>收藏数</span></div>
          </div>
        </div>
      </section>

      <!-- 今日任务 -->
      <section class="home-today">
        <div class="section-title">今日任务 <span class="muted" style="font-weight:400;font-size:12px">锁定 30 题 · 只计这 30 题</span></div>
        <div class="today-card">
          <div class="today-main">
            <div class="today-label">今日已完成</div>
            <div class="today-num">${todayDone}<i>/30</i></div>
            <div class="bar light"><i style="width:${Math.min((todayDone / 30) * 100, 100)}%"></i></div>
          </div>
          <div class="today-side">
            <button class="btn btn-accent btn-block" data-act="daily" type="button">${todayDone > 0 && todayDone < 30 ? "继续今日 30 题" : "开始今日 30 题"}</button>
            <button class="btn btn-ghost btn-block" data-act="due" type="button">到期错题 ${due || 0}</button>
            <button class="btn btn-ghost btn-block" data-act="last" type="button">${last ? "继续上次" : "综合练习"}</button>
          </div>
        </div>
      </section>

      <!-- 快捷入口 -->
      <section>
        <div class="quick-3">
          <button class="qi" data-nav="learn" type="button"><span class="ico">${iconBook()}</span>学习一刻</button>
          <button class="qi" data-nav="formula" type="button"><span class="ico">${iconBook()}</span>公式速查</button>
          <button class="qi" data-nav="words" type="button"><span class="ico">${iconType()}</span>背单词</button>
          <button class="qi" data-nav="mock" type="button"><span class="ico">${iconClock()}</span>模拟考</button>
          <button class="qi" data-act="due" type="button"><span class="ico">${iconClock()}</span>错题重练</button>
          <button class="qi" data-nav="bank" type="button"><span class="ico">${iconBook()}</span>章节 / 顺序</button>
        </div>
      </section>

      <!-- 按大纲：三卷学习进度 -->
      <section>
        <div class="section-title">按大纲备考 <span class="muted" style="font-weight:400;font-size:12px">公共两科各 150 · 专业合卷 300</span></div>
        ${outlineCard({
          title: "高等数学",
          sub: "公共基础课 · 单独考试 · 一元微积分 + 常微分方程",
          score: 150,
          minutes: 120,
          form: "闭卷笔试",
          extra: "考纲 2 大块",
          typesHtml: typePill(SYL_MATH),
          progLabel: "已练 " + mathP.done + " / " + mathP.total + " 题",
          progText: (mathP.acc == null ? "正确率 —" : "正确率 " + mathP.acc + "%"),
          pct: mathP.pct,
          plan: "math-full",
          subjectNav: "bank",
          subjectName: "高等数学",
          barCls: "sub-math",
          pdf: SYL_PDF.math.href,
          pdfName: SYL_PDF.math.name
        })}
        ${outlineCard({
          title: "英语",
          sub: "公共基础课 · 单独考试 · 词汇语法 / 阅读 / 翻译 / 写作",
          score: 150,
          minutes: 120,
          form: "闭卷笔试",
          extra: "考纲 4 部分",
          typesHtml: typePill(SYL_EN),
          progLabel: "已练 " + enP.done + " / " + enP.total + " 题",
          progText: (enP.acc == null ? "正确率 —" : "正确率 " + enP.acc + "%"),
          pct: enP.pct,
          plan: "english-full",
          subjectNav: "bank",
          subjectName: "英语",
          barCls: "sub-en",
          pdf: SYL_PDF.en.href,
          pdfName: SYL_PDF.en.name
        })}
        ${outlineCard({
          title: "专业基础综合课（合卷）",
          sub: "电工电子 100 + C语言 100 + 计算机网络 100 · 同卷连考",
          score: 300,
          minutes: 150,
          form: "合卷 150 分钟",
          extra: "单选/判断/填空/应用",
          typesHtml: typePill(SYL_MAJ),
          progLabel: "三科合计进度（按 100 分权重）",
          progText: majP.acc == null ? "正确率 —" : "正确率 " + majP.acc + "%",
          pct: majP.pct,
          plan: "major-combined",
          subjectNav: "bank",
          barCls: "sub-maj",
          pdf: SYL_PDF.maj.href,
          pdfName: SYL_PDF.maj.name
        })}
      </section>

      <!-- 考纲套卷 -->
      <section>
        <div class="section-title">考纲套卷 <span class="muted" style="font-weight:400;font-size:12px">严格按 2027 题型分值</span></div>
        <div class="exam-stack">
          ${[
            { planId: "math-full", ico: "数", icoCls: "",    title: "高数考纲卷" },
            { planId: "english-full", ico: "英", icoCls: " en", title: "英语考纲卷" },
            { planId: "public-combined", ico: "文", icoCls: " pub", title: "文化合卷" },
            { planId: "major-combined", ico: "专", icoCls: " maj", title: "专业合卷" },
            { planId: "full-combined", ico: "全", icoCls: " full", title: "全真模拟卷" }
          ].map((p) => {
            const his = (state.history || []).filter((h) => h.exam && h.exam.planId === p.planId);
            const last = his[0];
            const d = last ? new Date(last.at) : null;
            const md = d ? (d.getMonth()+1) + "/" + d.getDate() : "";
            return `
            <div class="exam-card">
              <div class="exam-row">
                <span class="exam-ico${p.icoCls}">${p.ico}</span>
                <span class="exam-main">
                  <span class="exam-t">${p.title}</span>
                </span>
                <div class="exam-btns">
                  <button class="btn btn-primary btn-sm" data-act="exam" data-plan="${attr(p.planId)}" type="button">开始</button>
                  <button class="btn btn-ghost btn-sm" data-act="exam-history" data-plan="${attr(p.planId)}" type="button">历史答题</button>
                </div>
              </div>
            </div>`;
          }).join("")}
        </div>
      </section>

      <div class="disclaimer">本站为个人学习工具，非广西招生考试院官方平台。题型与分值以 2027 官方大纲为准。</div>
    `;
  }

  function iconStar() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }
  function iconBook() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>';
  }
  function iconClock() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  }
  function iconChart() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 3 5-7"/></svg>';
  }
  function iconType() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>';
  }
  function iconFile() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
  }

  /* ========== 题库首页 ========== */
  function isSubjective(q) {
    const t = (q && q.type) || "";
    return t === "calc" || t === "apply" || t === "translate" || t === "write";
  }
  function objSubLabel(q) {
    return isSubjective(q) ? "主观题" : "客观题";
  }
  function mockSectionHtml() {
    const cats = [
      { tag: "数学专项", short: "数学专项", icon: "数", color: "#3B82F6", fallback: 99 },
      { tag: "英语专项", short: "英语专项", icon: "英", color: "#8B5CF6", fallback: 400 },
      { tag: "英语语法精编", short: "英语语法精编", icon: "语", color: "#EC4899", fallback: 41 },
      { tag: "C语言精编", short: "C语言精编", icon: "C", color: "#10B981", fallback: 6 }
    ];
    let counts = {};
    try {
      const mb = window.MOCK_BANK;
      if (mb && mb.meta && mb.meta.categories) counts = mb.meta.categories["专项练习"] || {};
    } catch (e) {}
    return (
      '<div class="section-title">模拟题 · 专项练习（独立题库）</div>' +
      cats.map(function (c) {
        const n = counts[c.tag] != null ? counts[c.tag] : c.fallback;
        return (
          '<button class="bank-subject" data-act="mock-practice" data-name="' + attr(c.tag) + '" type="button" style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:12px;margin-bottom:8px;text-align:left;width:100%">' +
          '<div style="width:40px;height:40px;border-radius:10px;background:' + c.color + '20;color:' + c.color + ';display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0">' + c.icon + '</div>' +
          '<div style="flex:1;min-width:0">' +
          '<div style="font-size:15px;font-weight:600">' + c.short + '</div>' +
          '<div style="font-size:12px;color:var(--text-sub);margin-top:2px">' + n + ' 题 · 点击开始顺序练习</div>' +
          '</div>' +
          '<div style="font-size:18px;color:var(--text-sub)">›</div>' +
          '</button>'
        );
      }).join("")
    );
  }

  function viewBank() {
    setTitle("题库", true);
    const doneIds = new Set(state.attempts.map((a) => a.questionId).filter(Boolean));
    const totalQ = totalQuestions();
    const totalDone = doneIds.size;
    const okN = state.attempts.filter((a) => a.correct).length;
    const acc = state.attempts.length ? Math.round((okN / state.attempts.length) * 100) : null;
    const groups = [
      { title: "公共基础课（各 150 分）", names: ["高等数学", "英语"] },
      { title: "专业基础综合课（合卷 300 分）", names: ["电工电子技术基础", "C语言程序设计", "计算机网络基础"] },
    ];
    return (
      '<div class="card" style="display:flex;text-align:center;padding:16px;margin-bottom:16px">' +
      '<div style="flex:1"><div style="font-size:22px;font-weight:700">' + (totalQ == null ? "—" : totalQ) + '</div><div style="font-size:12px;color:var(--text-sub)">总题数</div></div>' +
      '<div style="flex:1;border-left:1px solid var(--border)"><div style="font-size:22px;font-weight:700">' + totalDone + '</div><div style="font-size:12px;color:var(--text-sub)">已练习</div></div>' +
      '<div style="flex:1;border-left:1px solid var(--border)"><div style="font-size:22px;font-weight:700">' + (acc == null ? "—" : acc + "%") + '</div><div style="font-size:12px;color:var(--text-sub)">正确率</div></div>' +
      '</div>' +
      groups.map(function (g) {
        return (
          '<div class="section-title">' + esc(g.title) + "</div>" +
          g.names.map(function (n) {
            const p = subjStat(n);
            const m = subjOf(n);
            return (
              '<button class="bank-subject ' + m.cls + '" data-act="subject" data-name="' + attr(n) + '" type="button" style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:12px;margin-bottom:8px;text-align:left;width:100%">' +
              '<div style="width:40px;height:40px;border-radius:10px;background:' + (m.color || "#2563EB") + '20;color:' + (m.color || "#2563EB") + ';display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0">' + esc(m.short[0]) + '</div>' +
              '<div style="flex:1;min-width:0">' +
              '<div style="font-size:15px;font-weight:600">' + esc(m.short) + '</div>' +
              '<div style="font-size:12px;color:var(--text-sub);margin-top:2px">' + p.total + " 题 · 已练 " + p.done + "</div>" +
              '<div class="bar" style="margin-top:6px;height:4px"><i style="width:' + (p.pct || 0) + '%;background:' + (m.color || "#2563EB") + ';border-radius:2px"></i></div>' +
              '</div>' +
              '<div style="font-size:18px;font-weight:700;color:' + (m.color || "#2563EB") + '">' + (p.pct || 0) + '%</div>' +
              '</button>'
            );
          }).join("")
        );
      }).join("") + mockSectionHtml()
    );
  }

  // 进入科目页时确保该科目题库已加载；加载中/失败通过 state 标志位驱动视图
  function ensureSubjectBank(name) {
    if (!window.loadSubjectBank) return;
    const hasQs = Q.some((q) => q.subject === name);
    if (hasQs || (window.isSubjectBankLoaded && window.isSubjectBankLoaded(name))) return;
    state._bankLoading = state._bankLoading || {};
    state._bankError = state._bankError || {};
    if (state._bankLoading[name] || state._bankError[name]) return;
    state._bankLoading[name] = true;
    render();
    window.loadSubjectBank(name).then(function () {
      state._bankLoading[name] = false;
      state._bankError[name] = false;
      // 走统一的 data-ready 路径重建题库快照后再渲染（Q 快照/科目计数缓存才会刷新）
      try { window.dispatchEvent(new CustomEvent("gxzsb:data-ready")); } catch (e) { render(); }
    }).catch(function () {
      state._bankLoading[name] = false;
      state._bankError[name] = true;
      render();
    });
  }

  function viewSubject(name) {
    if (!SUBJ[name]) {
      setTitle("未找到科目", true);
      return `<div class="empty">未找到「${esc(name)}」相关科目
        <div><button class="btn btn-primary btn-sm" data-nav="bank" type="button">返回题库</button></div>
      </div>`;
    }
    setTitle(name, true);
    const m = subjOf(name);
    const p = subjStat(name);
    const chs = chapterList().filter((c) => c.subject === name);
    const f = state.filters;
    const qOf = Q.filter((q) => q.subject === name);
    const bankLoading = state._bankLoading && state._bankLoading[name];
    const bankError = state._bankError && state._bankError[name];
    // 题库尚未加载完成时，主动触发加载并展示加载/失败状态
    if (!qOf.length && !bankLoading && !bankError && window.loadSubjectBank &&
        !(window.isSubjectBankLoaded && window.isSubjectBankLoaded(name))) {
      ensureSubjectBank(name);
    }
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
      ${
        qOf.length === 0
          ? (bankError
              ? `<div class="card bank-load-err">
                   <div class="bank-load-ico">⚠️</div>
                   <div class="bank-load-txt">「${esc(name)}」题库加载失败</div>
                   <div class="bank-load-sub">请检查网络后重试</div>
                   <button class="btn btn-primary btn-sm" data-act="subject-retry" data-name="${attr(name)}" type="button">重新加载</button>
                 </div>`
              : `<div class="card bank-loading">
                   <div class="bank-loading-bar"><i></i><i></i><i></i></div>
                   <div class="bank-loading-txt">正在加载「${esc(name)}」题库…</div>
                 </div>`)
          : `<div class="card chapter-grid" style="padding:0">
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
      </div>`
      }

      <div style="margin-top:16px">
        ${
          qOf.length === 0
            ? '<div class="muted" style="font-size:12px;text-align:center;padding:8px 0">题库加载完成后即可开始练习</div>'
            : `<div style="display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-primary btn-block" data-act="seq-practice" data-name="${attr(name)}" type="button">开始顺序练习</button>
        <button class="btn btn-ghost btn-block" data-act="seq-obj" data-name="${attr(name)}" type="button">只练客观题</button>
        <button class="btn btn-ghost btn-block" data-act="seq-subj" data-name="${attr(name)}" type="button">只练主观题</button>
      </div>`
        }
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
    let pool = opts.pool ? opts.pool.slice() : Q.slice();
    if (!opts.pool) {
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
      const dueIds = Object.keys(state.wrong).filter((id) => {
        const w = state.wrong[id];
        return !w.mastered && (w.due || 0) <= Date.now();
      });
      pool = pool.filter((q) => dueIds.includes(q.id));
    }
    }
    // ordered：顺序练习按题库录入顺序稳定取前 N；显式 ids 时保持给定顺序，不再打乱
    if (opts.ids) {
      if (opts.limit) pool = pool.slice(0, opts.limit);
    } else if (opts.ordered) {
      pool = pool.slice().sort((a, b) => (a._ord || 0) - (b._ord || 0));
      if (opts.limit) pool = pool.slice(0, opts.limit);
    } else if (opts.limit) {
      pool = shuffle(pool).slice(0, opts.limit);
    }

    state.session = {
      title: opts.title || "练习",
      q: pool,
      i: 0,
      sel: null,
      submitted: false,
      results: opts.results || {},
      scores: {},
      flags: {},
      showExp: false,
      start: Date.now(),
      end: opts.minutes ? Date.now() + opts.minutes * 60000 : null,
      exam: opts.exam || null,
      examSubmitted: false,
      lastSeenAt: Date.now(),
      ordered: !!opts.ordered,
      daily: !!opts.daily,
      reviewMode: !!opts.reviewMode,
    };
    // 若已有预填结果，从第一道未做题开始
    if (state.session.results && Object.keys(state.session.results).length) {
      const doneSet = state.session.results;
      const idx = pool.findIndex(function (q) { return !(q.id in doneSet); });
      state.session.i = idx >= 0 ? idx : 0;
      state.session.submitted = idx < 0;
    }
    state.last = { title: opts.title, subject: opts.subject, at: Date.now() };
    save(LS.last, state.last);
    saveSession();
    go("practice");
    render();
  }

  /* ========== 模拟题试卷题库（mock-bank）========== */
  function buildMockQuestions(tag) {
    const mb = window.MOCK_BANK;
    if (!mb || !mb.questions) return [];
    const list = tag ? mb.questions.filter((q) => q.tag === tag) : mb.questions;
    return list.map((q, qi) => {
      const letter = q.answer || "";
      const ai = letter.charCodeAt(0) - 65;
      const ansText = ai >= 0 && ai < (q.options || []).length ? q.options[ai] : letter;
      return {
        ...q,
        _ord: qi,
        module: "mock",
        subject: q.tag || "模拟题",
        chapter: q.tag || "模拟题",
        knowledgePoint: q.section || q.tag || "模拟题",
        answer: ansText,
        answerLetter: letter,
        difficulty: q.difficulty || 1,
        difficultyLabel: q.difficultyLabel || "基础",
        typeLabel: q.typeLabel || (q.type === "single" ? "单选" : "填空"),
        steps: q.steps || [],
        _mock: true,
      };
    });
  }
  function startMockPractice(tag) {
    window.loadMockBank().then(function () {
      const pool = buildMockQuestions(tag);
      if (!pool.length) { alert("该专项暂无题目"); return; }
      startSession({ pool: pool, ordered: true, title: tag, results: {} });
    }).catch(function () {
      alert("模拟题库加载失败，请检查网络后重试");
    });
  }

  function saveSession() {
    if (!state.session) return;
    try {
      var s = state.session;
      touchSeen();
      var payload = {
        title: s.title, ids: s.q.map(function(q){return q.id;}), i: s.i,
        sel: s.sel, submitted: s.submitted, results: s.results,
        scores: s.scores || null,
        answers: s.answers || null,
        ordered: !!s.ordered, daily: !!s.daily,
        start: s.start || Date.now(),
        end: s.end || null,
        exam: s.exam ? {
          planId: s.exam.planId || null,
          scoreOf: s.exam.scoreOf || null,
          sectionOf: s.exam.sectionOf || null
        } : null,
        examSubmitted: !!s.examSubmitted,
        lastSeenAt: s.lastSeenAt || Date.now(),
        date: localDayKey()
      };
      var raw = JSON.stringify(payload);
      // 每日 30 题单独存放，避免被题库/其它练习覆盖
      if (s.daily) localStorage.setItem("gxzsb.dailySession", raw);
      else localStorage.removeItem("gxzsb.dailySession");
      localStorage.setItem("gxzsb.session", raw);
    } catch(e) {}
  }

  function touchSeen() {
    const s = state.session;
    if (!s) return;
    const now = Date.now();
    s.lastSeenAt = Math.max(Number(s.lastSeenAt) || 0, now);
  }

  // 本地是否存在未完成的答题草稿（题库加载期间用于显示"恢复中"，避免闪空状态）
  function hasUnfinishedSession() {
    try {
      var raw = localStorage.getItem("gxzsb.session") || localStorage.getItem("gxzsb.dailySession");
      if (!raw) return false;
      var d = JSON.parse(raw);
      if (!d || !Array.isArray(d.ids) || !d.ids.length) return false;
      if (d.results && Object.keys(d.results).length >= d.ids.length) return false;
      if (d.end && !d.examSubmitted && Date.now() > Number(d.end) + 24 * 3600 * 1000) return false;
      return true;
    } catch (e) { return false; }
  }

  function restoreSession(onlyDaily) {
    try {
      if (onlyDaily) {
        var rawD = localStorage.getItem("gxzsb.dailySession");
        if (!rawD) return false;
        var dd = JSON.parse(rawD);
        if (!dd || !dd.daily) return false;
        if (dd.date !== localDayKey()) return false;
        if (dd.results && dd.ids && Object.keys(dd.results).length >= dd.ids.length) return false;
        var qsD = dd.ids.map(qById).filter(Boolean);
        if (!qsD.length) return false;
        state.session = {
          title: dd.title, q: qsD, i: Math.min(dd.i || 0, qsD.length - 1),
          sel: dd.sel, submitted: dd.submitted, results: dd.results || {},
          scores: dd.scores || null,
          answers: dd.answers || null,
          flags: {}, showExp: false, start: dd.start || Date.now(), end: dd.end || null, exam: null,
          examSubmitted: !!dd.examSubmitted,
          lastSeenAt: dd.lastSeenAt || Date.now(),
          ordered: !!dd.ordered, daily: true
        };
        return true;
      }
      var raw = localStorage.getItem("gxzsb.session");
      if (!raw) return false;
      var d = JSON.parse(raw);
      if (!d || !Array.isArray(d.ids)) return false;
      // 已做完就不恢复
      if (d.results && Object.keys(d.results).length >= d.ids.length) return false;
      // 草稿过期清理：考试已结束超过 24h，丢弃
      if (d.end && !d.examSubmitted && Date.now() > Number(d.end) + 24 * 3600 * 1000) {
        try { localStorage.removeItem("gxzsb.session"); } catch(e) {}
        return false;
      }
      var qs = d.ids.map(qById).filter(Boolean);
      if (!qs.length) return false;
      var examRestored = null;
      if (d.exam) {
        var plans = (D.EXAM_PLANS || {});
        examRestored = {
          planId: d.exam.planId || null,
          plan: (d.exam.planId && plans[d.exam.planId]) || d.exam.plan || null,
          scoreOf: d.exam.scoreOf || null,
          sectionOf: d.exam.sectionOf || null
        };
      }
      state.session = {
        title: d.title, q: qs, i: Math.min(d.i || 0, qs.length-1),
        sel: d.sel, submitted: d.submitted, results: d.results || {},
        scores: d.scores || null,
        answers: d.answers || null,
        flags: {}, showExp: false, start: d.start || Date.now(),
        end: d.end || null, exam: examRestored,
        examSubmitted: !!d.examSubmitted,
        lastSeenAt: d.lastSeenAt || Date.now(),
        ordered: !!d.ordered, daily: !!d.daily
      };
      return true;
    } catch(e) { return false; }
  }

  /* ========== 模拟考倒计时 / 交卷 ========== */
  let examTimerId = null;
  function stopExamTimer() {
    if (examTimerId) { clearInterval(examTimerId); examTimerId = null; }
  }
  function examRemainMs() {
    const s = state.session;
    if (!s || !s.end) return null;
    // 系统时间回拨：以 max(now, lastSeenAt) 对齐，剩余时间不会被“变多”
    const nowEff = Math.max(Date.now(), Number(s.lastSeenAt) || 0);
    return s.end - nowEff;
  }
  function formatMMSS(ms) {
    const sec = Math.max(0, Math.ceil(ms / 1000));
    return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
  }
  function tickExamTimer() {
    const s = state.session;
    if (!s || !s.end) { stopExamTimer(); return; }
    touchSeen();
    const remain = examRemainMs();
    const el = document.getElementById("examTimer");
    if (remain == null || remain <= 0) {
      stopExamTimer();
      if (s.exam && !s.examSubmitted) {
        submitExam(true);
      } else {
        s.end = null;
        saveSession();
      }
      return;
    }
    if (el) {
      el.textContent = formatMMSS(remain);
      if (remain <= 5 * 60000) el.classList.add("is-warn");
      else el.classList.remove("is-warn");
    }
  }
  function ensureExamTimer() {
    stopExamTimer();
    const s = state.session;
    if (s && s.end && !s.examSubmitted) {
      tickExamTimer();
      if (state.session && state.session.end && !state.session.examSubmitted) {
        examTimerId = setInterval(tickExamTimer, 1000);
      }
    }
  }
  function submitExam(auto) {
    const s = state.session;
    if (!s || !s.exam) return false;
    if (s.examSubmitted) return true;
    // 先算真正未答题数（范文学习类不算）
    let unfilled0 = 0;
    s.q.forEach((q) => {
      if (!(q.id in s.results) && q.type !== "translate" && q.type !== "write") unfilled0++;
    });
    if (!auto && unfilled0 > 0) {
      if (!confirm("还有 " + unfilled0 + " 题未作答，确认交卷？未答题将按错误计分。")) return false;
    }
    let unfilled = 0;
    s.q.forEach((q) => {
      if (!(q.id in s.results)) {
        // 范文学习类（翻译/写作）：未看也算过，不扣分
        if (q.type === "translate" || q.type === "write") {
          s.results[q.id] = true;
        } else {
          s.results[q.id] = false;
          unfilled++;
          record(q, false);
        }
      }
    });
    s.examSubmitted = true;
    s.unansweredAtSubmit = unfilled;
    s.end = null;
    stopExamTimer();
    saveExamHistory(s);
    // 交卷成功：清除草稿，避免下次启动又自动跳回本场
    try {
      localStorage.removeItem("gxzsb.session");
      localStorage.removeItem("gxzsb.dailySession");
    } catch(e) {}
    if (auto) toastLite("考试时间到，已自动交卷" + (unfilled ? "（" + unfilled + " 道未答按错）" : ""));
    go("report");
    render();
    return true;
  }

  function viewPractice() {
    const s = state.session;
    if (!s || !s.q.length) {
      setTitle("练习", true);
      // 题库尚未加载完但本地有未完成的答题草稿：显示恢复中，不闪"没有可练习的题目"
      if (hasUnfinishedSession()) {
        return '<div class="practice-restore"><div class="practice-restore-spin">⟳</div><div class="practice-restore-txt">正在恢复上次答题…</div></div>';
      }
      return `<div class="empty">没有可练习的题目<div><button class="btn btn-primary" data-nav="home" type="button">回首页</button></div></div>`;
    }
    const q = s.q[s.i];
    // 渲染前同步：当前题已答过则强制 submitted，避免恢复 session 后按钮状态错乱
    s.submitted = q.id in s.results;
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
      <div class="row-between" style="margin:4px 0 8px;flex-wrap:wrap;gap:4px">
        <span class="muted" style="font-size:12px"><b style="color:${isSubjective(q) ? "var(--warning)" : "var(--success)"}">${objSubLabel(q)}</b> · ${esc(q.subject)} · ${esc(q.knowledgePoint)}</span>
        <span style="display:inline-flex;gap:4px;align-items:center">
          ${s.exam ? "" : '<button class="chip ' + (state.practiceMode === "practice" ? "is-active" : "") + '" data-act="toggle-mode" type="button" style="font-size:11px;padding:2px 8px">' + (state.practiceMode === "practice" ? "✍ 练习" : "📝 测试") + "</button>"}
          <span class="mono muted" style="font-size:12px">${s.i + 1}/${s.q.length}${s.end ? ' · <span class="exam-timer" id="examTimer">' + formatMMSS(examRemainMs() || 0) + "</span>" : ""}${q.score ? " · " + q.score + " 分" : ""}${(q.type === "translate" || q.type === "write") ? ' · <span style="color:#8b5cf6;font-weight:600">范文学习</span>' : ""}</span>
        </span>
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
            ? (s.exam && !s.examSubmitted
                ? `<div class="mistake-box" style="background:#f0f9ff;border-left:3px solid #6366f1;padding:12px;border-radius:8px;color:#6366f1;font-size:14px">📝 ${q.type === "translate" ? "翻译题" : "写作题"} · 交卷后查看${q.type === "translate" ? "译文" : "范文"}</div>`
                : `<div class="mistake-box" style="background:#eef6ff;border-left:3px solid #3b82f6">${q.type === "translate" ? "✍️ 翻译题 · 直接看译文学习" : "📝 应用文写作 · 直接看范文学习"}</div>
               <div class="ref-answer" style="margin:10px 0 4px"><b>${q.type === "translate" ? "译文：" : "范文："}</b></div>
               <div class="subj-view" style="background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;padding:14px;line-height:1.8;white-space:pre-wrap;font-size:15px">${mathHtml(String(q.sample && String(q.sample).trim() ? q.sample : (Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer || "见下方解析")))}</div>`)
            : (function () {
                // 下划线式填空：size 按参考答案字符数预估，最小 6、最大 20，避免短答案留白/长答案溢出
                var ansLen = String(Array.isArray(q.answer) ? q.answer[0] : (q.answer || "")).replace(/\s+/g, "").length || 6;
                var sz = Math.max(6, Math.min(20, ansLen + 2));
                return `<label class="muted" style="font-size:12px;font-weight:650">${q.type === "fill" ? "填写答案" : "填写最终结果"}</label>
                   <div style="margin-top:4px"><input class="fill-input" id="fillInput" size="${sz}" ${s.submitted ? "disabled" : ""} value="${attr(s.sel || "")}" inputmode="text" autocomplete="off" autocapitalize="off" autocorrect="off" /></div>`;
              })()
        }

        ${
          done
            ? (function () {
                const ok = !!s.results[q.id];
                const isSubj = q.type === "translate" || q.type === "write";
                const inExam = s.exam && !s.examSubmitted;
                // 模拟考模式：范文学习类不显示反馈
                if (isSubj && inExam) return "";
                // 范文学习模式：直接展示译文/范文，无评分无自评
                if (isSubj) {
                  return `<div class="feedback ok">✓ 已学习（范文/译文已在上方展示）</div>`;
                }
                // 模拟考模式：只显示对错条，不显示参考答案/自评/错因
                if (inExam) {
                  return `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "✓ 回答正确" : "✕ 回答错误"}</div>`;
                }
                const sc = s.scores && s.scores[q.id] != null ? s.scores[q.id] : null;
                // 填空若智能评分有值，同样展示，与 S2「部分 fill」对齐
                const showSmart = isSubj || (sc != null && sc > 0);
                let extra = "";
                if (showSmart) {
                  const pct = sc == null ? (ok ? 100 : 0) : Math.round(sc * 100);
                  // 主观题无范文时：给出答案 + 参考步骤（steps）作为“参考要点”
                  let refBody = String(q.sample || "");
                  if (!refBody.trim()) {
                    const ansTxt = String(Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer || "");
                    const stepTxt = (q.steps && q.steps.length)
                      ? " 参考思路：" + q.steps.slice(0, 4).join(" ")
                      : "";
                    refBody = (ansTxt ? "答案：" + ansTxt : "见上方「详细解析」") + stepTxt;
                  }
                  extra =
                    `<div class="smart-grade">智能评分 <b>${pct}%</b></div>` +
                    `<div class="ref-answer"><b>参考答案：</b>${mathHtml(refBody).slice(0, 900)}</div>`;
                } else if (!ok) {
                  extra = `<div class="ref-answer"><b>参考答案：</b>${mathHtml(String(Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer).slice(0, 120))}</div>`;
                }
                const bar = showSmart
                  ? `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "✓ 当前判定为答对" : "✕ 当前判定为需加强"}${sc != null ? " · 智能评分 " + Math.round(sc * 100) + "%" : ""}</div>`
                  : `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "✓ 回答正确" : "✕ 回答错误"}</div>`;
                const selfBtns = showSmart
                  ? `<div class="self-assess">
                      <button class="btn btn-primary btn-sm" data-act="self-ok" type="button">我答对了</button>
                      <button class="btn btn-ghost btn-sm" data-act="self-bad" type="button">需加强</button>
                    </div>`
                  : "";
                let reasonUi = "";
                if (!ok && state.wrong[q.id]) {
                  const curR = state.wrong[q.id].reason || "";
                  const labels = { concept: "概念不清", calc: "计算失误", read: "审题偏差", formula: "公式记错" };
                  reasonUi =
                    '<div class="reason-pick"><span class="muted" style="font-size:12px">错因</span>' +
                    Object.keys(labels).map(function (r) {
                      return '<button class="chip' + (curR === r ? " is-active" : "") + '" data-act="set-reason" data-r="' + r + '" data-id="' + attr(q.id) + '" type="button">' + labels[r] + "</button>";
                    }).join("") +
                    "</div>";
                }
                return bar + extra + selfBtns + reasonUi;
              })()
            : ""
        }

        ${(s.exam && !s.examSubmitted) ? "" : `
        <div class="explain ${s.showExp && s.submitted ? "is-open" : ""}">
          <button class="explain-toggle" data-act="toggle-exp" type="button"><span>查看解析</span><span class="muted">${s.showExp && s.submitted ? "收起" : "展开"}</span></button>
          <div class="explain-body">
            <div class="explain-block" style="border-left:3px solid #22c55e;background:#f0fdf4;padding:12px;border-radius:8px;margin-bottom:12px">
              <h4 style="margin:0 0 6px 0">⚡ 秒懂考点</h4>
              <div class="content" style="font-size:15px">本题考 <strong style="color:#16a34a">${esc(q.knowledgePoint || q.subject)}</strong> · 难度：${esc(q.difficultyLabel)} · 正确答案：<strong style="color:#16a34a;font-size:18px">${mathHtml(Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer)}</strong></div>
            </div>
            <details class="explain-block" style="border-left:3px solid #3b82f6" open>
              <summary style="cursor:pointer;font-weight:bold;padding:8px 0">📖 详细解析（点击展开）</summary>
              <div class="content">
            ${
              (q.steps || []).length
                ? `<ol>${q.steps.map((t) => `<li>${mathHtml(t)}</li>`).join("")}</ol>`
                : exp.split("\n").filter(function(l){return l.trim();}).map(function(l){ return /^【/.test(l) ? `<p><strong>${mathHtml(l)}</strong></p>` : `<p>${mathHtml(l)}</p>`; }).join("")
            }
            ${q.model ? `<p><strong>建模：</strong>${esc(q.model)}</p>` : ""}
            ${q.sample ? `<p><strong>范文/译文：</strong></p><div>${esc(q.sample).replace(/\n/g,"<br/>")}</div>` : ""}
            ${(q.scorePoints||[]).length ? `<p><strong>评分要点：</strong></p>${q.scorePoints.map(function(x){return "• "+esc(x);}).join("<br/>")}` : ""}
              </div>
            </details>
            <details class="explain-block" style="border-left:3px solid #f59e0b">
              <summary style="cursor:pointer;font-weight:bold;padding:8px 0">⚠️ 避坑指南（新手必看）</summary>
              <div class="content">
                ${(q.pitfalls || []).length ? q.pitfalls.map(function(p){return `<p style="color:#92400e">• ${esc(p)}</p>`;}).join("") : '<p style="color:#92400e">• 看清题目问的是什么</p>'}
                ${wrongN ? `<p style="color:#dc2626">• 你曾错这道题 ${wrongN} 次，务必巩固</p>` : ""}
              </div>
            </details>
            <div class="explain-block"><h4>AI 深度解析</h4>
              <div class="content" style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-primary btn-sm" data-act="ai-deepseek" data-id="${attr(q.id)}" type="button">DeepSeek 解析</button>
                <button class="btn btn-ghost btn-sm" data-act="ai-doubao" data-id="${attr(q.id)}" type="button">豆包解析</button>
                <button class="btn btn-ghost btn-sm" data-act="ai-copy" data-id="${attr(q.id)}" type="button">复制题目</button>
                <button class="btn btn-ghost btn-sm" data-act="copy-exp" type="button">一键复制解析</button>
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
        `}
      </div>

      <div class="q-actions">
        <div class="q-nav-row">
          <button class="btn btn-ghost" data-act="prev" type="button">上一题</button>
          <button class="btn btn-ghost" data-act="fav" type="button">${state.fav[q.id] ? "已收藏" : "收藏"}</button>
          <button class="btn btn-ghost" data-act="next" type="button">${s.i >= s.q.length - 1 ? "完成" : "下一题"}</button>
          ${s.submitted ? "" : `<button class="btn btn-primary" data-act="submit" type="button">提交</button>`}
        </div>
        ${
          s.exam && !s.examSubmitted
            ? `<button class="btn btn-accent btn-block" data-act="submit-exam" type="button">交卷并出分</button>`
            : ""
        }
        ${
          s.exam && !s.examSubmitted
            ? `<div style="display:flex;gap:8px;margin-top:8px">
                 <button class="btn btn-ghost btn-sm" data-act="pause-exam" type="button" style="flex:1">⏸ 暂停并保存</button>
                 <button class="btn btn-ghost btn-sm" data-act="exit-exam" type="button" style="flex:1;opacity:.65">放弃本场</button>
               </div>`
            : ""
        }
        <button class="btn btn-ghost btn-block btn-sm shortcut-link" data-act="show-shortcuts" type="button">答题快捷键</button>
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
      // 范文学习模式：无需作答，直接标记已看，不进错题本
      s.submitted = true;
      s.results[q.id] = true;
      s.showExp = true;
    } else {
      const box = document.getElementById("fillInput");
      const val = (box ? box.value : s.sel || "").trim();
      if (!val) return alert("请先填写答案");
      s.sel = val;
      let ok = matchAns(q, val);
      let score = ok ? 1 : 0;
      // 部分主观填空：精确比对失败时用要点覆盖率给分，但仍以比对结果为主
      if (!ok && val.length >= 8) {
        const sg = smartGrade(q, val);
        if (sg > 0) score = sg;
      }
      s.scores = s.scores || {};
      s.scores[q.id] = score;
      s.submitted = true;
      s.results[q.id] = ok;
      s.showExp = true;
      record(q, ok);
    }
    s.answers = s.answers || {};
    if (s.sel != null && q && q.id != null) s.answers[q.id] = s.sel;
    saveSession();
    render();
    // 提交后自动滚到反馈区，方便立刻看对错
    try {
      const fb = document.querySelector(".feedback");
      if (fb) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
    } catch (e) {}
  }

  function nextQ() {
    const s = state.session;
    if (!s) return;
    if (s.i >= s.q.length - 1) {
      // 模拟考最后一步统一走交卷：未答按错并写入历史
      if (s.exam && !s.examSubmitted) {
        submitExam(false);
        return;
      }
      saveExamHistory(s);
      go("report");
      render();
      return;
    }
    s.i++;
    // 保留每题作答文本，回看/刷新不丢
    s.answers = s.answers || {};
    if (s.sel != null && s.q[s.i - 1]) s.answers[s.q[s.i - 1].id] = s.sel;
    s.sel = s.answers[s.q[s.i].id] != null ? s.answers[s.q[s.i].id] : null;
    s.submitted = s.q[s.i].id in s.results;
    s.showExp = false;
    render();
    window.scrollTo({ top: 0 });
  }

  function saveExamHistory(s) {
    if (!s || !s.exam) return;
    try {
      const ids = s.q.map((q) => q.id);
      const answered = ids.filter((id) => id in s.results);
      const ok = answered.filter((id) => s.results[id]).length;
      let got = 0, full = 0;
      ids.forEach((id) => {
        const sc = (s.exam.scoreOf && s.exam.scoreOf[id]) || 1;
        full += sc;
        if (s.results[id]) got += sc;
      });
      const rec = {
        id: "ex-" + Date.now(),
        title: s.title,
        at: Date.now(),
        ok: ok,
        total: ids.length,
        answered: answered.length,
        acc: ids.length ? Math.round((ok / ids.length) * 100) : 0,
        score: got,
        fullScore: full,
        // 快照：供历史记录逐题回看
        ids: ids,
        results: s.results || {},
        scores: s.scores || null,
        answers: s.answers || null,
        exam: s.exam ? {
          planId: s.exam.planId || null,
          scoreOf: s.exam.scoreOf || null,
          sectionOf: s.exam.sectionOf || null
        } : null
      };
      state.history = [rec].concat(state.history || []).slice(0, 50);
      save(LS.history, state.history);
      scheduleSync();
    } catch (e) {}
  }
  function prevQ() {
    const s = state.session;
    if (!s || s.i === 0) return;
    s.answers = s.answers || {};
    if (s.sel != null && s.q[s.i]) s.answers[s.q[s.i].id] = s.sel;
    s.i--;
    s.sel = s.answers[s.q[s.i].id] != null ? s.answers[s.q[s.i].id] : null;
    s.submitted = s.q[s.i].id in s.results;
    s.showExp = false;
    render();
    window.scrollTo({ top: 0 });
  }

  /* ========== 考纲套卷历史记录 ========== */
  function viewExamHistory() {
    setTitle("答题历史", true);
    const planId = state.examHistoryPlan;
    const list = (state.history || []).filter((h) => h.exam && h.exam.planId === planId);
    const PLAN_TITLES = {"math-full":"高数考纲卷","english-full":"英语考纲卷","public-combined":"文化合卷","major-combined":"专业合卷","full-combined":"全真模拟卷","ee-special":"电工专项","c-special":"C语言专项","net-special":"计网专项"};
    const plan = (D.EXAM_PLANS || {})[planId] || {};
    const planTitle = plan.title || PLAN_TITLES[planId] || planId;
    if (!list.length) {
      return `<div class="empty">还没有考过「${esc(planTitle)}」<div><button class="btn btn-primary" data-act="exam" data-plan="${attr(planId)}" type="button">去考一次</button></div></div>`;
    }
    const scoreColor = (score, full) => {
      const pct = full ? score / full : 0;
      if (pct >= 0.8) return "#16a34a";
      if (pct >= 0.6) return "#ea580c";
      return "#dc2626";
    };
    return `
      <div class="section-title">作答记录</div>
      <div class="exam-stack">
        ${list.map((h, idx) => {
          const d = new Date(h.at);
          const md = (d.getMonth()+1) + "/" + d.getDate();
          const hm = String(d.getHours()).padStart(2,"0") + ":" + String(d.getMinutes()).padStart(2,"0");
          const wrongN = h.total - h.ok;
          const scColor = scoreColor(h.score, h.fullScore);
          const badge = h.acc >= 80 ? '<span style="font-size:10px;padding:2px 8px;border-radius:999px;background:#dcfce7;color:#16a34a;font-weight:600">优秀</span>'
                      : h.acc >= 60 ? '<span style="font-size:10px;padding:2px 8px;border-radius:999px;background:#ffedd5;color:#ea580c;font-weight:600">及格</span>'
                      : '<span style="font-size:10px;padding:2px 8px;border-radius:999px;background:#fee2e2;color:#dc2626;font-weight:600">待订正</span>';
          return `<div class="hist-card">
            <div class="hist-top">
              <div class="hist-title">
                <span class="hist-date">${md} ${hm}${idx === 0 ? ' · 最新' : ''}</span>
                ${badge}
              </div>
              <div class="hist-score" style="color:${scColor}">${h.score}<span style="font-size:13px;opacity:0.6">/${h.fullScore}分</span></div>
            </div>
            <div class="hist-meta">${h.ok}/${h.total} 题 · 正确率 ${h.acc}% · 错题 ${wrongN} 道</div>
            <div class="hist-acts">
              <button class="btn btn-ghost btn-sm" data-act="view-history" data-id="${attr(h.id)}" type="button">查看解析</button>
              <button class="btn btn-ghost btn-sm" data-act="exam" data-plan="${attr(planId)}" type="button">重新测试</button>
            </div>
          </div>`;
        }).join("")}
      </div>
    `;
  }

  /* ========== 报告 ========== */
  function viewReport() {
    setTitle("练习报告", true);
    const s = state.session;
    if (!s) return `<div class="empty">暂无报告</div>`;
    const allIds = s.q.map((q) => q.id);
    const answeredIds = allIds.filter((id) => id in s.results);
    const ok = answeredIds.filter((id) => s.results[id]).length;
    // 未答计入总分母与错题
    const total = allIds.length;
    const wrongN = allIds.filter((id) => !(id in s.results) || !s.results[id]).length;
    // 模拟考交卷时会把未答题写入 results=false，故未答数优先取交卷瞬间记录的计数
    const unansN = s.exam && typeof s.unansweredAtSubmit === "number" ? s.unansweredAtSubmit : total - answeredIds.length;
    const acc = total ? Math.round((ok / total) * 100) : 0;
    const sec = Math.round((Date.now() - s.start) / 1000);
    const mm = String(Math.floor(sec / 60)).padStart(2, "0");
    const ss = String(sec % 60).padStart(2, "0");

    // 题型 / 科目
    const by = {};
    allIds.forEach((id) => {
      const q = qById(id);
      if (!q) return;
      const k = s.exam && s.exam.sectionOf && s.exam.sectionOf[id] ? s.exam.sectionOf[id].sectionLabel : q.typeLabel;
      by[k] = by[k] || { n: 0, ok: 0, got: 0, full: 0 };
      by[k].n++;
      const isOk = id in s.results && !!s.results[id];
      if (isOk) by[k].ok++;
      const sc = (s.exam && s.exam.scoreOf && s.exam.scoreOf[id]) || q.score || 1;
      by[k].full += sc;
      if (isOk) by[k].got += sc;
    });

    return `
      <div class="card">
        <div class="row-between"><strong>${esc(s.title)}</strong><span class="muted" style="font-size:12px">${mm}:${ss}</span></div>
        <div class="stat-grid" style="margin-top:12px">
          <div class="stat-box"><div class="n">${ok}/${total}</div><div class="l">正确 / 总题</div></div>
          <div class="stat-box"><div class="n">${acc}%</div><div class="l">正确率</div></div>
          <div class="stat-box"><div class="n">${mm}:${ss}</div><div class="l">用时</div></div>
          <div class="stat-box"><div class="n">${wrongN}</div><div class="l">错题（含未答 ${unansN}）</div></div>
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
        ${s.exam ? '<button class="btn btn-primary btn-block" data-act="review-exam" type="button">逐题回看 / 对答案</button>' : ""}
        <button class="btn btn-ghost btn-block" data-act="due" type="button">复习错题</button>
        <button class="btn btn-ghost btn-block" data-act="weak" type="button">薄弱强化</button>
        <button class="btn btn-ghost btn-block" data-nav="home" type="button">返回首页</button>
      </div>
    `;
  }

  /* ========== 模拟考试 ========== */
  function viewMock() {
    setTitle("模拟考试", true);
    const plans = D.EXAM_PLANS || {};
    const cards = [
      { id: "math-full", label: "高数考纲卷", desc: "单选/填空/计算/应用 · 120 分钟", color: "#3B82F6", icon: "数" },
      { id: "english-full", label: "英语考纲卷", desc: "词汇语法/阅读/翻译/写作 · 120 分钟", color: "#8B5CF6", icon: "英" },
      { id: "public-combined", label: "文化合卷", desc: "数学 + 英语 · 120 分钟", color: "#6366f1", icon: "文" },
      { id: "ee-special", label: "电工专项", desc: "50 道高频易错 · 60 分钟", color: "#F97316", icon: "电" },
      { id: "c-special", label: "C 语言专项", desc: "50 道高频易错 · 60 分钟", color: "#10B981", icon: "C" },
      { id: "net-special", label: "计网专项", desc: "50 道高频易错 · 60 分钟", color: "#06B6D4", icon: "网" },
      { id: "major-combined", label: "专业综合合卷", desc: "电工 + C + 计网 · 150 分钟", color: "#F97316", icon: "专" },
      { id: "full-combined", label: "全真模拟卷", desc: "数学 + 英语 + 专业 · 240 分钟", color: "#7c3aed", icon: "全" },
    ];
    return `
      <div class="section-title">选择试卷</div>
      <div class="exam-stack">
        ${cards.map((c) => `
          <button class="exam-card" data-act="exam" data-plan="${attr(c.id)}" type="button" ${(c.id === "full-combined" || c.id === "public-combined" || plans[c.id]) ? "" : "disabled"}>
            <span class="exam-ico" style="background:${c.color}">${c.icon}</span>
            <span class="exam-main">
              <span class="exam-t">${esc(c.label)}</span>
              <span class="exam-s">${esc(c.desc)}</span>
              <span class="exam-meta"><span class="pill">限时</span><span class="pill">交卷出分</span><span class="pill">可对答案</span></span>
            </span>
            <span class="exam-go">开始</span>
          </button>
        `).join("")}
      </div>
      <div class="disclaimer">模拟卷按考纲结构自动组卷，交卷后可查看得分与解析。</div>
    `;
  }

  /* ========== 数据分析看板 ========== */
  function viewStats() {
    setTitle("数据分析", true);
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      days.push({ key: localDayKey(d), label: (d.getMonth() + 1) + "/" + d.getDate(), date: localDayKey(d) });
    }
    const dayStat = days.map((d) => {
      const at = state.attempts.filter((a) => localDayKey(new Date(a.at || 0)) === d.date);
      const ok = at.filter((a) => a.correct).length;
      return { ...d, n: at.length, ok, acc: at.length ? Math.round((ok / at.length) * 100) : 0 };
    });
    const maxN = Math.max(1, ...dayStat.map((x) => x.n));

    const subjNames = ["高等数学", "英语", "电工电子技术基础", "C语言程序设计", "计算机网络基础"];
    const subjRows = subjNames.map((n) => {
      const p = subjStat(n);
      return { name: n, short: subjOf(n).short, color: subjOf(n).color, ...p };
    });
    const maxDone = Math.max(1, ...subjRows.map((r) => r.done));

    const weak = weakPoints(8).filter((w) => w.t > 0);
    const totalDone = new Set(state.attempts.map((a) => a.questionId).filter(Boolean)).size;
    const totalOk = state.attempts.filter((a) => a.correct).length;
    const totalAcc = state.attempts.length ? Math.round((totalOk / state.attempts.length) * 100) : 0;

    return `
      <div class="stat-grid" style="margin-bottom:16px">
        <div class="stat-box"><div class="n">${totalDone}</div><div class="l">已练题数</div></div>
        <div class="stat-box"><div class="n">${totalAcc}%</div><div class="l">总正确率</div></div>
        <div class="stat-box"><div class="n">${state.attempts.length}</div><div class="l">作答次数</div></div>
        <div class="stat-box"><div class="n">${Object.keys(state.wrong).length}</div><div class="l">错题数</div></div>
      </div>

      <div class="section-title">近 7 日学习量</div>
      <div class="card">
        <div style="display:flex;align-items:flex-end;gap:8px;height:120px;padding:8px 0">
          ${dayStat.map((d) => `
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end">
              <span class="muted" style="font-size:11px">${d.n}</span>
              <div style="width:100%;max-width:36px;height:${Math.max(4, Math.round((d.n / maxN) * 80))}px;background:var(--primary);border-radius:4px 4px 0 0;opacity:${d.n ? 1 : 0.25}"></div>
              <span class="muted" style="font-size:11px">${d.label}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="section-title">正确率趋势（近 7 日）</div>
      <div class="card">
        ${dayStat.every((d) => !d.n) ? `<div class="empty">还没有作答数据</div>` : `
        <svg viewBox="0 0 280 100" width="100%" height="120" role="img" aria-label="正确率趋势">
          <polyline fill="none" stroke="var(--primary)" stroke-width="2"
            points="${dayStat.map((d, i) => (20 + i * 40) + "," + (90 - (d.acc / 100) * 70)).join(" ")}" />
          ${dayStat.map((d, i) => `
            <circle cx="${20 + i * 40}" cy="${90 - (d.acc / 100) * 70}" r="3.5" fill="var(--primary)" />
            <text x="${20 + i * 40}" y="100" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.6">${d.label}</text>
            <text x="${20 + i * 40}" y="${84 - (d.acc / 100) * 70}" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.75">${d.n ? d.acc + "%" : "—"}</text>
          `).join("")}
        </svg>`}
      </div>

      <div class="section-title">科目进度</div>
      <div class="card">
        ${subjRows.map((r) => `
          <div class="hbar-row">
            <div class="label">${esc(r.short)}</div>
            <div class="hbar-track"><div class="hbar-fill" style="width:${Math.max(3, Math.round((r.done / (r.total || 1)) * 100))}%;background:${r.color}"></div></div>
            <div class="val">${r.done}/${r.total}</div>
          </div>
          <div class="muted" style="font-size:11px;margin:-2px 0 8px">正确率 ${r.acc == null ? "—" : r.acc + "%"} · 覆盖 ${Math.max(3, Math.round((r.done / maxDone) * 100))}%</div>
        `).join("")}
      </div>

      <div class="section-title">题型正确率</div>
      <div class="card">
        ${(function() {
          var types = [["single","单选"],["judge","判断"],["fill","填空"],["calc","计算"],["apply","应用"]];
          var rows = types.map(function(t){
            var arr = state.attempts.filter(function(a){ var q = qById(a.questionId); return q && q.type === t[0]; });
            var ok = arr.filter(function(a){ return a.correct; }).length;
            return { name: t[1], n: arr.length, ok: ok, acc: arr.length ? Math.round(ok/arr.length*100) : null };
          });
          if (!rows.some(function(r){ return r.n > 0; })) return '<div class="empty">暂无题型数据</div>';
          return rows.map(function(r){
            return '<div class="hbar-row">' +
              '<div class="label">' + r.name + '</div>' +
              '<div class="hbar-track"><div class="hbar-fill" style="width:' + (r.acc == null ? 0 : Math.max(3, r.acc)) + '%;background:' + (r.acc == null ? 'var(--border)' : (r.acc >= 70 ? 'var(--success)' : 'var(--warning)')) + '"></div></div>' +
              '<div class="val">' + (r.acc == null ? "暂无数据" : r.acc + "% · " + r.n) + '</div>' +
            '</div>';
          }).join("");
        })()}
      </div>

      <div class="section-title">薄弱知识点 TOP</div>
      ${weak.length ? `<div class="card" style="padding:0">
        ${weak.map((w, i) => `
          <button class="list-row" data-act="prac-point" data-p="${attr(w.point)}" type="button">
            <span class="mono" style="width:22px;opacity:0.55">${i + 1}</span>
            <span class="main">
              <span class="t">${esc(w.point || "未命名")}</span>
              <span class="s">${esc(subjOf(w.subject).short)} · 正确率 ${w.rate == null ? "—" : w.rate + "%"} · 已练 ${w.t}</span>
            </span>
            <span class="end">›</span>
          </button>
        `).join("")}
      </div>` : `<div class="empty">做几道题后这里会显示薄弱考点</div>`}

      <div class="section-title">模拟考历史</div>
      ${(state.history || []).length ? `<div class="card" style="padding:0">
        ${(state.history || []).slice(0, 5).map((h) => `
          <button class="list-row" data-act="exam-open" data-id="${attr(h.id)}" type="button">
            <span class="main"><span class="t">${esc(h.title || "模拟考")}</span>
            <span class="s">${new Date(h.at || 0).toLocaleDateString("zh-CN")} · ${h.score != null ? h.score + "/" + h.fullScore : ""} · ${h.acc != null ? h.acc + "%" : ""}${h.ids ? " · 可回看" : ""}</span></span>
            <span class="end">›</span>
          </button>
        `).join("")}
      </div>` : `<div class="empty">暂无模拟考记录</div>`}
    `;
  }

  /* ========== 错题本 ========== */
  function viewWrong() {
    setTitle("错题 / 收藏", true);
    const now = Date.now();
    const tab = state.wrongTab || "wrong";
    const allItems = Object.keys(state.wrong)
      .map(function (id) {
        const q = qById(id);
        const w = state.wrong[id];
        return q ? { q: q, w: w, due: (w.due || 0) <= now && !w.mastered } : null;
      })
      .filter(Boolean)
      .sort(function (x, y) {
        return x.due === y.due ? (x.w.last || 0) - (y.w.last || 0) : x.due ? -1 : 1;
      });
    // 拆成「待复习」和「已掌握」两组
    const items = allItems.filter(function (it) { return !it.w.mastered; });
    const masteredItems = allItems.filter(function (it) { return it.w.mastered; });
    const due = items.filter(function (x) { return x.due; }).length;
    const favs = Object.keys(state.fav)
      .filter(function (id) { return state.fav[id]; })
      .map(function (id) { return qById(id); })
      .filter(Boolean);

    // 按科目统计错题（只统计待复习）
    const subjStats = {};
    items.forEach(function (it) {
      const s = it.q.subject;
      subjStats[s] = (subjStats[s] || 0) + 1;
    });
    const subjFilter = state.wrongSubj || "all";
    const nFilter = state.wrongNFilter || 0; // 0=全部, 2=错≥2, 3=错≥3, 5=错≥5
    let filteredItems = items;
    if (subjFilter !== "all") filteredItems = filteredItems.filter(function (it) { return it.q.subject === subjFilter; });
    if (nFilter) filteredItems = filteredItems.filter(function (it) { return (it.w.n || 1) >= nFilter; });
    // 分页渲染，避免错题很多时一次插入过大 DOM
    const pageSize = state.wrongPageSize || 40;
    const pageNo = state.wrongPage || 1;
    const pageItems = filteredItems.slice(0, pageNo * pageSize);
    const moreWrong = filteredItems.length > pageItems.length;

    function rows(arr, kind) {
      if (!arr.length) {
        const msg = kind === "fav" ? "还没有收藏题。做题时点「收藏」。" : "暂无错题。";
        return (
          '<div class="empty">' +
          esc(msg) +
          '<div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
          '<button class="btn btn-primary btn-sm" data-act="daily" type="button">去做今日 30 题</button>' +
          '<button class="btn btn-ghost btn-sm" data-nav="bank" type="button">去题库</button>' +
          "</div></div>"
        );
      }
      return (
        '<div class="card" style="padding:0">' +
        arr
          .map(function (it) {
            const q = kind === "wrong" ? it.q : it;
            const w = kind === "wrong" ? it.w : null;
            const isDue = kind === "wrong" && it.due;
            if (kind === "wrong") {
              const reasonLabel = { concept: "概念不清", calc: "计算失误", read: "审题偏差", formula: "公式记错" }[w && w.reason] || "";
              const isMastered = !!(w && w.mastered);
              // 右侧两个按钮：✓ 标记掌握 / ↩ 恢复
              const actionBtn = isMastered
                ? '<button data-act="unmaster-wrong" data-id="' + attr(q.id) + '" title="恢复到待复习" type="button" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#16a34a;font-size:18px;padding:8px;cursor:pointer">↩</button>'
                : '<button data-act="master-wrong" data-id="' + attr(q.id) + '" title="标记已掌握" type="button" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#16a34a;font-size:18px;padding:8px;cursor:pointer">✓</button>';
              return (
                '<div class="list-row" style="display:flex;align-items:center;gap:4px;position:relative' + (isMastered ? ';opacity:.55' : '') + '">' +
                '<button data-act="open-q" data-id="' + attr(q.id) + '" type="button" style="flex:1;text-align:left;background:none;border:none;display:flex;align-items:center;gap:10px;padding:12px 16px;padding-right:56px">' +
                '<span class="dot" style="background:' + (subjOf(q.subject).color || "#2563EB") + ';flex-shrink:0"></span>' +
                '<span class="main" style="flex:1;min-width:0"><span class="t" style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + mathHtml(String(q.stem).slice(0, 50)) + '</span>' +
                '<span class="s" style="display:block;font-size:12px;color:#888;margin-top:2px">' + esc(q.typeLabel || "题") + " · " + esc(q.subject) + " · 错" + (w ? w.n : 1) + "次" + (reasonLabel ? " · " + reasonLabel : "") + (isMastered ? " · 已掌握" : (isDue ? " · 到期" : "")) + '</span></span>' +
                '</button>' +
                actionBtn +
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
      // 错误次数筛选
      const nOpts = [[0, "全部次数"], [2, "错≥2"], [3, "错≥3"], [5, "错≥5"]];
      let nChips = nOpts.map(function (o) {
        return '<button class="chip ' + (nFilter === o[0] ? "is-active" : "") + '" data-act="wrong-nfilter" data-v="' + o[0] + '" type="button">' + o[1] + '</button>';
      }).join("");

      // 已掌握折叠区
      let masteredSection = "";
      if (masteredItems.length) {
        const expanded = !!state.wrongMasteredOpen;
        masteredSection =
          '<div class="section-title" style="margin-top:16px">' +
          '<button class="btn btn-ghost btn-sm" data-act="wrong-mastered-toggle" type="button" style="padding:4px 10px;font-size:12px">' +
          (expanded ? "▾ 已掌握（" + masteredItems.length + "）· 点击收起" : "▸ 已掌握（" + masteredItems.length + "）· 点击展开") +
          "</button></div>" +
          (expanded ? rows(masteredItems, "wrong") : "");
      }

      body =
        '<div class="card"><strong>今天有 ' + due + " 道题该重做</strong>" +
        '<p class="muted" style="font-size:12px;margin:6px 0 12px">按艾宾浩斯遗忘曲线自动排期，到期重做记得更牢；点 ✓ 手动标记已掌握</p>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
        '<button class="btn btn-primary" data-act="due" type="button"' + (due ? "" : " disabled") + ">开始重做到期题</button>" +
        '<button class="btn btn-ghost" data-act="practice-wrong-all" type="button"' + (items.length ? "" : " disabled") + ">刷全部待复习错题</button>" +
        "</div></div>" +
        '<div class="stat-grid" style="margin:16px 0">' +
        '<div class="stat-box"><div class="n">' + items.length + '</div><div class="l">待复习</div></div>' +
        '<div class="stat-box"><div class="n">' + masteredItems.length + '</div><div class="l">已掌握</div></div>' +
        '<div class="stat-box"><div class="n">' + due + '</div><div class="l">今日到期</div></div>' +
        '<div class="stat-box"><div class="n">' + allItems.length + '</div><div class="l">总错题</div></div>' +
        "</div>" +
        '<div class="section-title">按科目筛选</div>' +
        '<div class="chip-row" style="margin-bottom:12px;flex-wrap:wrap">' + subjChips + "</div>" +
        '<div class="section-title">遗忘曲线节奏</div>' +
        '<div class="chip-row" style="margin-bottom:12px;flex-wrap:wrap">' +
        ["fast","mid","slow"].map(function(k){
          var c = FORGET_CURVES[k];
          return '<button class="chip' + (state.forgetCurve === k ? " is-active" : "") + '" data-act="curve" data-v="' + k + '" type="button">' + c.label + ' (' + c.wrong.slice(1).join("/") + 'd)</button>';
        }).join("") +
        "</div>" +
        '<div class="section-title">按错误次数筛选</div>' +
        '<div class="chip-row" style="margin-bottom:12px;flex-wrap:wrap">' + nChips + "</div>" +
        '<div class="section-title">按错因补练</div>' +
        '<div class="chip-row" style="margin-bottom:12px">' +
        '<button class="chip" data-act="by-reason" data-r="concept" type="button">概念不清</button>' +
        '<button class="chip" data-act="by-reason" data-r="calc" type="button">计算失误</button>' +
        '<button class="chip" data-act="by-reason" data-r="read" type="button">审题偏差</button>' +
        '<button class="chip" data-act="by-reason" data-r="formula" type="button">公式记错</button>' +
        "</div>" +
        '<div class="section-title">错题列表（点题看解析，✓ 标记掌握）</div>' + rows(pageItems, "wrong") +
        (moreWrong ? '<div style="margin:12px 0"><button class="btn btn-ghost btn-block" data-act="wrong-more" type="button">加载更多（' + filteredItems.length + ' 中已显示 ' + pageItems.length + '）</button></div>' : "") +
        masteredSection +
        (allItems.length ? '<div style="margin:12px 0;display:flex;gap:8px">' +
          '<button class="btn btn-ghost btn-sm" data-act="export-txt" type="button" style="flex:1">导出 TXT</button>' +
          '<button class="btn btn-ghost btn-sm" data-act="export-print" type="button" style="flex:1">打印 / PDF</button>' +
        '</div>' : "") +
        (allItems.length ? '<div style="margin:12px 0"><button class="btn btn-ghost btn-block" data-act="clear-wrong" type="button" style="color:var(--error)">' +
          ((subjFilter !== "all" || nFilter) ? ("清空当前筛选的 " + filteredItems.length + " 道错题") : "清空错题本（全部 " + allItems.length + " 道）") +
          '</button></div>' : "");
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
  // 原始深度解析存在即优先返回（不再用长度阈值丢弃短解析，也避免模板覆盖题库数据）
  if (q.analysis && String(q.analysis).trim().length) return q.analysis;
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
    const sc = subjOf(cur);
    const total = chapters.reduce(function (n, ch) { return n + (ch.points || []).length; }, 0);
    return (
      '<div class="learn-hero"><h2>学习一刻</h2><p>严格按 2027 考纲精讲：高数走步骤，英语讲规则，电工讲定律，C 讲执行，计网讲过程。学完直接去练。</p></div>' +
      '<div class="chip-row" style="margin-bottom:16px">' +
      subjects.map(function (t) {
        return '<button class="chip ' + (t === cur ? "is-active" : "") + '" data-act="learn-subj" data-v="' + attr(t) + '" type="button">' + esc(subjOf(t).short || t) + "</button>";
      }).join("") +
      "</div>" +
      '<div class="subject-banner ' + (sc.cls || "") + '"><span class="swatch"></span><strong>' + esc(cur) + '</strong><span class="muted">' + chapters.length + " 个大纲小节 · " + total + " 个知识点</span></div>" +
      chapters.map(function (ch, ci) {
        return (
          '<div class="formula-group">' +
          '<div class="formula-group-title"><span class="line" style="background:' + (sc.color || "#2563EB") + '"></span>' +
          esc(ch.chapter) + '<span class="muted">（' + (ch.points || []).length + "）</span></div>" +
          (ch.outline ? '<p class="muted" style="font-size:12px;margin:-4px 0 8px;line-height:1.6">' + esc(ch.outline) + "</p>" : "") +
          '<div class="card" style="padding:0;overflow:hidden">' +
          (ch.points || []).map(function (p, pi) {
            return (
              '<button class="kp-card" data-act="learn-open" data-id="' + attr(p.id) + '" type="button">' +
              '<span class="num" style="width:32px;height:32px;border-radius:10px;display:grid;place-items:center;font-weight:800;flex-shrink:0;background:' +
              (sc.color || "#2563EB") + ';color:#fff">' + (ci + 1) + "." + (pi + 1) + "</span>" +
              '<span style="flex:1;min-width:0"><span class="t" style="display:block;font-weight:700;font-size:15px">' + esc(p.name) + "</span>" +
              '<span class="s" style="font-size:12px;color:var(--text-sub);display:block;margin-top:2px">' + esc(p.outline || "") + "</span>" +
              '<span style="font-size:11px;color:var(--text-sub);display:block;margin-top:4px">' + esc(p.level || "") + " · " + (p.minutes || 6) + " 分钟 · " + esc(p.relatedFormula || "") + "</span></span>" +
              '<span class="kp-badge ' + (p.level === "冲刺" ? "hard" : p.level === "强化" ? "mid" : "") + '">' + esc(p.level || "") + "</span>" +
              "</button>"
            );
          }).join("") +
          "</div></div>"
        );
      }).join("") +
      '<p class="muted" style="font-size:12px;margin-top:16px;text-align:center">共 ' + total + " 个知识点 · 按 2027 广西专升本考纲编写</p>"
    );
  }

  function viewLearnDetail(id) {
    const book = (window.STUDY_DATA && window.STUDY_DATA.LEARN_BOOK) || {};
    let allPoints = [];
    Object.keys(book).forEach(function (subj) {
      (book[subj] || []).forEach(function (ch) {
        (ch.points || []).forEach(function (p) {
          allPoints.push({ p: p, subj: subj, chapter: ch.chapter });
        });
      });
    });
    let idx = allPoints.findIndex(function (x) { return x.p.id === id; });
    let pt = idx >= 0 ? allPoints[idx] : null;
    if (!pt) return '<div class="card"><div class="empty">未找到知识点</div></div>';
    const nextPt = idx < allPoints.length - 1 ? allPoints[idx + 1] : null;
    const p = pt.p;
    setTitle(p.name, true);
    const sc = subjOf(pt.subj);
    const isEnLang = pt.subj === "英语";
    const ft = function (s) {
      return isEnLang ? escKeep(String(s == null ? "" : s)) : mathHtml(s);
    };
    return (
      '<div class="card">' +
      '<div class="row-between"><strong style="font-size:17px">' + esc(p.name) +
      '</strong><span class="chip">' + esc(p.level) + " · " + (p.minutes || 6) + " 分钟</span></div>" +
      '<p class="muted" style="margin-top:8px">' + esc(pt.subj) + " · " + esc(pt.chapter) + "</p>" +
      (p.outline
        ? '<div class="f-row" style="margin-top:10px"><span class="f-tag">考纲</span><span class="f-txt">' + esc(p.outline) + "</span></div>"
        : "") +
      "</div>" +
      '<div class="f-card" style="border-left:3px solid ' + (sc.color || "#2563EB") + '">' +
      '<div class="f-head"><span class="f-name">' + esc(p.name) + "</span>" +
      '<span class="chip chip-soft" style="background:' + (sc.color || "#2563EB") + '18;color:' + (sc.color || "#2563EB") + ';border:0">' + esc(sc.short || pt.subj) + "</span></div>" +
      (p.plain ? '<div class="f-row"><span class="f-tag plain">说人话</span><span class="f-txt">' + ft(p.plain) + "</span></div>" : "") +
      (p.steps && p.steps.length
        ? '<ol class="f-steps">' + p.steps.map(function (st) { return "<li>" + ft(st) + "</li>"; }).join("") + "</ol>"
        : "") +
      (p.example ? '<div class="f-row"><span class="f-tag ex">例题</span><span class="f-txt">' + ft(p.example) + "</span></div>" : "") +
      (p.answer ? '<div class="f-row"><span class="f-tag ok">答案</span><span class="f-txt"><b>' + ft(p.answer) + "</b></span></div>" : "") +
      (p.examTip ? '<div class="f-row"><span class="f-tag tip">应试口诀</span><span class="f-txt">' + ft(p.examTip) + "</span></div>" : "") +
      (p.warn ? '<div class="f-row"><span class="f-tag bad">易错</span><span class="f-txt">' + ft(p.warn) + "</span></div>" : "") +
      (p.relatedFormula
        ? '<div class="f-row"><span class="f-tag">相关公式</span><span class="f-txt">' + esc(p.relatedFormula) + "</span></div>"
        : "") +
      '<div class="f-actions">' +
      '<button class="btn btn-ghost btn-sm" data-act="learn-practice" data-p="' + attr(p.kp || p.name) + '" data-subj="' + attr(pt.subj) + '" type="button">练相关题</button>' +
      '<button class="btn btn-ghost btn-sm" data-act="goto-formula" data-subj="' + attr(pt.subj) + '" type="button">查看公式</button>' +
      "</div></div>" +
      '<div style="display:flex;flex-direction:column;gap:8px;margin:16px 0 8px">' +
      '<button class="btn btn-primary btn-block" data-act="learn-practice" data-p="' + attr(p.kp || p.name) + '" data-subj="' + attr(pt.subj) + '" type="button">去练习该考点</button>' +
      (nextPt ? '<a class="btn btn-ghost btn-block" href="#/learn-point/' + attr(nextPt.p.id) + '" type="button">下一个：' + esc(nextPt.p.name) + '</a>' : '') +
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
    const isEnLang = cur === "英语";
    const ft = function (s) { return isEnLang ? escKeep(String(s == null ? "" : s)) : mathHtml(s); };
    // 公式正文：多个公式（；/;分隔）各自独占一行，单个公式居中
    const bodyHtml = function (f) {
      const raw = String(f == null ? "" : f);
      const parts = raw.split(/[；;]/).map(function (s) { return s.trim(); }).filter(Boolean);
      if (parts.length <= 1) return '<div class="f-single">' + ft(raw) + "</div>";
      return parts.map(function (l) { return '<div class="f-line">' + ft(l) + "</div>"; }).join("");
    };
    return `
      <div class="formula-page">
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
                <span class="formula-group-name">${esc(grp.key)}</span>
                <span class="muted">（${grp.items.length}）</span>
              </div>
              ${grp.items
                .map(
                  (it) => `<div class="f-card f-item" style="border-left:3px solid ${sc.color}">
                    <div class="f-head">
                      <span class="f-name">${esc(it.name)}</span>
                      ${it.out || /超纲|选学|语法拓展/.test(it.name || "") ? `<span class="chip chip-out" title="超出 2027 考纲核心范围">${/语法拓展/.test(it.name || "") ? "语法拓展" : "超纲·选学"}</span>` : ""}
                      <span class="chip chip-soft" style="background:${sc.color}18;color:${sc.color};border:0">${sc.short}</span>
                    </div>
                    <div class="f-body">${bodyHtml(it.formula)}</div>
                    ${it.plain ? `<div class="f-row"><span class="f-tag plain">说人话</span><div class="f-txt">${ft(it.plain)}</div></div>` : ""}
                    <div class="f-row"><span class="f-tag">怎么用</span><div class="f-txt">${ft(it.use)}</div></div>
                    ${it.work && it.work.length ? `
                      <div class="f-example">
                        <div class="f-example-h"><span class="f-example-badge">例题详解</span></div>
                        <div class="f-example-q">${ft(it.example)}</div>
                        <ol class="f-example-work">${it.work.map((w) => `<li>${ft(w)}</li>`).join("")}</ol>
                        ${it.answer ? `<div class="f-example-a"><span>答案</span><b>${ft(it.answer)}</b></div>` : ""}
                      </div>` : `
                      ${it.example ? `<div class="f-row"><span class="f-tag ex">例题</span><div class="f-txt">${ft(it.example)}</div></div>` : ""}
                      ${it.steps && it.steps.length ? `<div class="f-row"><span class="f-tag step">步骤</span><div class="f-txt"><ol class="f-steps">${it.steps.map((s) => `<li>${ft(s)}</li>`).join("")}</ol></div></div>` : ""}
                      ${it.answer ? `<div class="f-row"><span class="f-tag ok">答案</span><div class="f-txt"><b>${ft(it.answer)}</b></div></div>` : ""}`}
                    ${it.tip ? `<div class="f-row"><span class="f-tag tip">应试口诀</span><div class="f-txt">${ft(it.tip)}</div></div>` : ""}
                    <div class="f-row"><span class="f-tag bad">易错</span><div class="f-txt">${ft(it.wrong)}</div></div>
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
      </div>
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
      <div class="login-wrap">
        <div class="login-hero">
          <div class="logo">⚡</div>
          <div class="name">广西专升本练习</div>
          <div class="sub">登录后云端同步学习进度</div>
        </div>
        <div class="login-tabs" role="tablist">
          <button type="button" data-act="switch-login" data-mode="login" class="${mode==='login'?'is-on':''}" role="tab" aria-selected="${mode==='login'}">登录</button>
          <button type="button" data-act="switch-login" data-mode="register" class="${mode==='register'?'is-on':''}" role="tab" aria-selected="${mode==='register'}">注册</button>
        </div>
        <div class="card" style="padding:24px">
          <div class="login-field">
            <label for="loginEmail">邮箱</label>
            <input id="loginEmail" type="email" placeholder="your@email.com" autocomplete="email" />
          </div>
          <div class="login-field">
            <label for="loginPwd">密码</label>
            <div class="pwd-wrap">
              <input id="loginPwd" type="password" placeholder="至少6位" autocomplete="${mode==='register'?'new-password':'current-password'}" />
              <button type="button" class="pwd-toggle" data-act="toggle-pwd" data-target="loginPwd" aria-label="显示密码">显示</button>
            </div>
          </div>
          ${mode==='register'?`
          <div class="login-field">
            <label for="loginPwd2">确认密码</label>
            <div class="pwd-wrap">
              <input id="loginPwd2" type="password" placeholder="再输入一次密码" autocomplete="new-password" />
              <button type="button" class="pwd-toggle" data-act="toggle-pwd" data-target="loginPwd2" aria-label="显示密码">显示</button>
            </div>
          </div>`:''}
          <button type="button" class="login-submit" data-act="${mode==='login'?'do-login':'do-register'}">${mode==='login'?'登录':'注册'}</button>
          <div id="loginMsg" class="login-msg"></div>
        </div>
        <button type="button" class="login-guest" data-act="guest">先逛逛，稍后登录</button>
      </div>
    `;
  }

  // 云同步状态卡片（登录用户可见；游客提示数据仅存本机）
  function syncStatusHtml() {
    const isGuest = !activeUser();
    const hasQueue = !!load("gxzsb.syncQueue", null);
    if (isGuest) {
      return '<div class="card sync-card sync-guest" style="margin-bottom:12px"><span class="sync-dot">👤</span>' +
        '<span class="sync-msg">游客模式：进度只保存在本机，登录后可云端同步</span></div>';
    }
    let ico, cls, msg, extra = "";
    if (syncUI.status === "syncing") {
      ico = '<span class="sync-dot sync-spin">⟳</span>'; cls = "sync-syncing"; msg = "正在同步到云端…";
    } else if (syncUI.status === "ok") {
      ico = '<span class="sync-dot">✓</span>'; cls = "sync-ok";
      const t = new Date(syncUI.at);
      const hh = String(t.getHours()).padStart(2, "0"), mm = String(t.getMinutes()).padStart(2, "0");
      msg = "已同步到云端（" + hh + ":" + mm + "）";
    } else if (syncUI.status === "error" || hasQueue) {
      ico = '<span class="sync-dot">⚠</span>'; cls = "sync-err";
      msg = "同步失败，进度已暂存本地";
      extra = '<button class="btn btn-ghost btn-sm" data-act="sync-now" type="button">立即重试</button>';
    } else {
      ico = '<span class="sync-dot">☁️</span>'; cls = "sync-idle"; msg = "登录后学习进度自动云端同步";
    }
    return '<div class="card sync-card ' + cls + '" style="margin-bottom:12px">' + ico +
      '<span class="sync-msg">' + msg + '</span>' + extra + '</div>';
  }

  function viewMe() {
    setTitle("我的", false);
    const total = state.attempts.length;
    const ok = state.attempts.filter((a) => a.correct).length;
    const acc = total ? Math.round((ok / total) * 100) : 0;
    var wbS = window.WORDS ? window.WORDS.getStats() : { mastered: 0, reviewing: 0, learning: 0, total: 3000 };
    const favN = Object.keys(state.fav || {}).filter((k) => state.fav[k]).length;
    const todayDone = todayDoneCount();
    const nick = load("gxzsb.nick", "专升本备考人");

    return `
      <div class="me-page">
      <div class="card" style="text-align:center;padding:20px 16px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:white;margin-bottom:16px">
        <div style="width:52px;height:52px;border-radius:50%;background:white;color:#6366f1;font-size:24px;font-weight:bold;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">${nick[0] || "学"}</div>
        <div style="font-size:16px;font-weight:bold">${esc(nick)}</div>
      </div>

      <div class="section-title">账号与数据</div>
      ${syncStatusHtml()}
      <div class="card" style="padding:0;margin-bottom:16px">
        <button class="list-row" data-act="set-nick" type="button"><span class="main"><span class="t">修改昵称</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="export-all" type="button"><span class="main"><span class="t">导出数据备份</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="import" type="button"><span class="main"><span class="t">导入数据备份</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="reset-study" type="button"><span class="main"><span class="t" style="color:var(--error)">重置学习数据</span></span><span class="end">›</span></button>
      </div>

      <div class="section-title">设置</div>
      <div class="card" style="padding:0;margin-bottom:16px">
        <button class="list-row" data-act="theme" type="button"><span class="main"><span class="t">深色/浅色模式</span></span><span class="end">›</span></button>
        <div class="list-row" style="display:flex;align-items:center;gap:8px;padding:12px 16px">
          <span class="main" style="flex:1"><span class="t">字号大小</span></span>
          <div style="display:flex;gap:4px">
            ${["sm","md","lg"].map(function(k){
              var on = (state.fontSize || "md") === k;
              return '<button class="chip' + (on ? " is-active" : "") + '" data-act="font-size" data-v="' + k + '" type="button">' + ({sm:"小",md:"中",lg:"大"})[k] + "</button>";
            }).join("")}
          </div>
        </div>
        <button class="list-row" data-act="logout" type="button"><span class="main"><span class="t">退出登录</span></span><span class="end">›</span></button>
        <button class="list-row" data-act="clear" type="button"><span class="main"><span class="t" style="color:var(--error)">清除本机数据</span></span><span class="end">›</span></button>
      </div>

      <div class="disclaimer">
        本站为个人整理的广西专升本备考工具，非官方平台，内容仅供参考。
        ${activeUser() ? "已登录，进度同步云端。" : "游客模式，数据仅存本机。"}
        <br/>版本 v3.0 · 五科1500+题
      </div>
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
                    <span class="t">${renderMath(String(q.stem).slice(0, 80))}</span>
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
  /** 兼容 frac{...}{...} 与 \frac{...}{...} → 上下分式；并自动把 a/b 横排分数也变成上下分式 */
  function renderMath(expr) {
    return mathHtml(expr);
  }
  function fracSpan(num, den) {
    return '<span class="frac"><span class="num">' + mathHtml(num) + '</span><span class="den">' + mathHtml(den) + "</span></span>";
  }
  function mathHtml(expr) {
    const raw = String(expr == null ? "" : expr);
    let out = "";
    let i = 0;
    while (i < raw.length) {
      const c0 = raw[i];
      let skip = 0;
      if (raw.startsWith("\\frac{", i)) skip = 6;
      else if (raw.startsWith("frac{", i)) skip = 5;
      if (skip) {
        i += skip;
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
          out += fracSpan(num, den);
          continue;
        }
        out += escKeep(raw.slice(i - skip, i));
        continue;
      }
      // 上标 ^ / 下标 _：支持 ^{...}、_{...} 组（组内可含分式）与单字符 ^x、_n
      if (c0 === "^" || c0 === "_") {
        let j = i + 1;
        while (j < raw.length && /\s/.test(raw[j])) j++;
        let innerHtml = "";
        let consumed = false;
        if (raw[j] === "{") {
          j++;
          let depth = 1;
          let inner = "";
          while (j < raw.length && depth) {
            const ch = raw[j];
            if (ch === "{") depth++;
            else if (ch === "}") { depth--; if (!depth) { j++; break; } }
            if (depth) inner += ch;
            j++;
          }
          innerHtml = mathHtml(inner);
          consumed = true;
        } else if (j < raw.length && /[A-Za-z0-9=.,()\u4e00-\u9fff\u00b2\u00b3\u00b9\u2070-\u209f\u2080-\u2089]/.test(raw[j])) {
          innerHtml = mathHtml(raw[j]);
          j++;
          consumed = true;
        }
        if (consumed) {
          const tag = c0 === "^" ? "sup" : "sub";
          const cls = c0 === "^" ? "math-sup" : "math-sub";
          out += "<" + tag + ' class="' + cls + '">' + innerHtml + "</" + tag + ">";
          i = j;
          continue;
        }
      }
      out += escKeep(raw[i]);
      i++;
    }
    return autoFrac(out);
  }
  function autoFrac(html) {
    let s0 = String(html == null ? "" : html);
    const keep = [];
    s0 = s0.replace(/<span class="frac">[\s\S]*?<\/span><\/span>/g, function (m) {
      keep.push(m);
      return "@@KF" + (keep.length - 1) + "@@";
    });
    function isTok(ch) {
      if (/[A-Za-z0-9^.|]/.test(ch)) return true;
      if (ch) {
        const code = ch.charCodeAt(0);
        if (code > 127) {
          // 全角/CJK标点（逗号、分号、冒号等）作为分隔符，不算公式 token
          if ((code >= 0xff00 && code <= 0xffef) || (code >= 0x3000 && code <= 0x303f)) return false;
          return true;
        }
      }
      return false;
    }
    function rightEnd(s, i) {
      while (i < s.length && /\s/.test(s[i])) i++;
      if (s[i] === "(") {
        let d = 1, j = i + 1;
        while (j < s.length && d) {
          if (s[j] === "(") d++;
          else if (s[j] === ")") d--;
          j++;
        }
        return j;
      }
      let j = i;
      while (j < s.length && isTok(s[j])) {
        if (s[j] === "^" && s[j + 1] === "{") {
          let d = 1, k = j + 2;
          while (k < s.length && d) {
            if (s[k] === "{") d++;
            else if (s[k] === "}") d--;
            k++;
          }
          j = k;
        } else j++;
      }
      return j;
    }
    function leftStart(s, slash) {
      let i = slash - 1;
      while (i >= 0 && /\s/.test(s[i])) i--;
      if (i < 0) return -1;
      if (s[i] === ")") {
        let d = 1, k = i - 1;
        while (k >= 0 && d) {
          if (s[k] === ")") d++;
          else if (s[k] === "(") d--;
          k--;
        }
        return k + 1;
      }
      let j = i;
      while (j >= 0 && isTok(s[j])) {
        if (s[j] === "^") break;
        j--;
      }
      return j + 1;
    }
    for (let pass = 0; pass < 8; pass++) {
      let out = "";
      let last = 0;
      let i = 0;
      let hit = false;
      while (i < s0.length) {
        if (s0[i] === "/") {
          const L = leftStart(s0, i);
          const R = rightEnd(s0, i + 1);
          if (L >= last && L < i && R > i + 1) {
            let A = s0.slice(L, i).trim();
            let B = s0.slice(i + 1, R).trim();
            // 含中文或 □△○● 等占位符时不自动转上下分式（占位符排版会很怪）
            const hasCJK = /[\u3000-\u303f\u4e00-\u9fff\uff00-\uffef\u25a0-\u25ff\u2600-\u27bf]/.test(A + B);
            const pureWords = /^[A-Za-z]+$/.test(A) && /^[A-Za-z]+$/.test(B);
            // 倒数关系：1/csc、1/sec、1/cot 等（数字/纯字母函数名）保持横排更清晰
            const reciprocal = /^[0-9]+$/.test(A) && /^[A-Za-z]+$/.test(B);
            if (hasCJK) { i++; continue; }
            if (/y'/.test(s0.slice(Math.max(0, L - 2), R + 2)) && /y'\(/.test(s0.slice(L, R))) {
              /* fallthrough */
            }
            if (A && B && !pureWords && !reciprocal && A.indexOf("@@") < 0 && B.indexOf("@@") < 0) {
              let pre = "";
              const pm = A.match(/^(lim|LIM)\s+/);
              if (pm) { pre = pm[0]; A = A.slice(pm[0].length).trim(); }
              if (A && B) {
                {
                let L2 = L;
                const before = s0.slice(Math.max(0, L - 12), L);
                const fm = before.match(/(\b(sin|cos|tan|cot|ln|log|exp|arcsin|arccos|arctan)\s+)$/i);
                if (fm) {
                  L2 = L - fm[0].length;
                  A = s0.slice(L2, i).trim();
                }
                out += s0.slice(last, L2) + pre + fracSpan(A, B);
              }
                last = R;
                i = R;
                hit = true;
                continue;
              }
            }
          }
        }
        i++;
      }
      out += s0.slice(last);
      s0 = out;
      if (!hit) break;
    }
    return s0.replace(/@@KF(\d+)@@/g, function (_, i) { return keep[+i]; });
  }
  function renderMathLine(expr) {
    return '<div class="mathline">' + mathHtml(expr) + "</div>";
  }

  /* ========== 页面：背单词 ========== */
  function wbExtraGridHtml() {
    const entries = [
      { key: "essays", ico: "📚", name: "40篇短文记单词", desc: "中英对照·语境记词" },
      { key: "readings", ico: "📖", name: "阅读理解精练", desc: "5篇25题·带解析" },
      { key: "reading-skills", ico: "🎯", name: "阅读解题技巧", desc: "主旨/细节/推理/词义" },
      { key: "phrases", ico: "💬", name: "高频短语300", desc: "日常考纲必备" },
      { key: "writing-sentences", ico: "📝", name: "写作高分句式", desc: "开头·中间·结尾" },
      { key: "writing-transitions", ico: "🔗", name: "万能过渡句", desc: "30组中英对照" },
      { key: "irregular", ico: "⚡", name: "不规则动词", desc: "过去式·过去分词" },
      { key: "grammar", ico: "🧠", name: "语法思维导图", desc: "15大专题速览" },
    ];
    return (
      '<div class="section-title">阅读 · 拓展学习</div>' +
      '<div class="wb-mode-grid">' +
      entries.map((e) =>
        '<button class="wb-mode-card" data-act="extra-go" data-name="' + e.key + '" type="button">' +
        '<div class="wb-mode-ico">' + e.ico + '</div>' +
        '<div class="wb-mode-name">' + e.name + '</div>' +
        '<div class="wb-mode-desc">' + e.desc + '</div>' +
        '</button>'
      ).join("") +
      '</div>'
    );
  }

  function viewWords() {
    setTitle("英语核心词汇", false);
    var S = window.WORDS.getStats();
    var goal = window.WORDS.getDailyGoal();
    var dueReview = window.WORDS.getDueReview();
    var pct = Math.round((S.mastered / S.total) * 100);
    return `
      <div class="wb-hero">
        <div class="wb-hero-title">英语核心词汇 ${S.total}</div>
        <div class="wb-hero-sub">SM-2 间隔重复 · 科学抗遗忘</div>
        <div class="wb-stats-row">
          <div class="wb-stat"><div class="wb-stat-num">${S.mastered}</div><div class="wb-stat-label">已掌握</div></div>
          <div class="wb-stat"><div class="wb-stat-num">${S.reviewing}</div><div class="wb-stat-label">复习中</div></div>
          <div class="wb-stat"><div class="wb-stat-num">${S.learning}</div><div class="wb-stat-label">学习中</div></div>
          <div class="wb-stat"><div class="wb-stat-num">${S.unlearned}</div><div class="wb-stat-label">未学</div></div>
        </div>
        <div class="wb-progress-bar"><div class="wb-progress-fill" style="width:${pct}%"></div></div>
        <div class="wb-progress-text">已掌握 ${pct}% · 今日学 ${S.today.learned||0} 复习 ${S.today.reviewed||0}</div>
      </div>

      <div class="wb-today-card">
        <div class="wb-today-row">
          <span class="wb-today-label">今日任务</span>
          <span class="wb-today-num">${S.today.learned||0}<span>/${goal} 新词</span></span>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn btn-primary btn-block" data-act="wb-start-new" type="button">
            学习新词 · 今日已学 ${S.today.learned||0}/${goal}
          </button>
          <button class="btn btn-wb-review btn-block" data-nav="word-review" type="button">
            复习单词 · ${dueReview.length} 个到期
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
      </div>

      <div class="section-title">练习模式</div>
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

      ${wbExtraGridHtml()}
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
        <div class="wb-mark-btns" style="display:flex;gap:8px">
          <button class="btn btn-wb-forget" data-act="wb-mark" data-v="1" style="flex:1" type="button">不认识</button>
          <button class="btn btn-wb-hard" data-act="wb-mark" data-v="2" style="flex:1" type="button">模糊</button>
          <button class="btn btn-wb-know" data-act="wb-mark" data-v="3" style="flex:1" type="button">认识</button>
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
        <div class="wb-mark-btns" style="display:flex;gap:8px">
          <button class="btn btn-wb-forget" data-act="wb-mark-review" data-v="1" style="flex:1" type="button">不认识</button>
          <button class="btn btn-wb-hard" data-act="wb-mark-review" data-v="2" style="flex:1" type="button">模糊</button>
          <button class="btn btn-wb-know" data-act="wb-mark-review" data-v="3" style="flex:1" type="button">认识</button>
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

  /* ========== 英语拓展学习（english-extra）========== */
  function loadingCard(name) {
    return '<div class="card" style="padding:40px;text-align:center;color:var(--text-sub)">正在加载' + esc(name || "数据") + '…</div>';
  }
  function wrapExtra(title, sub, inner) {
    return (
      '<div class="extra-hero"><div class="extra-hero-title">' + esc(title) + '</div>' +
      (sub ? '<div class="extra-hero-sub">' + esc(sub) + '</div>' : "") + '</div>' + inner
    );
  }
  function viewExtraHome() {
    setTimeout(function () { location.hash = "#/words"; }, 0);
    return "";
  }
  function openExtra(key) {
    if (!window.loadEnglishExtra) { toast("加载器未就绪"); return; }
    if (!window.isEnglishExtraLoaded()) toast("正在加载拓展资料…", 2500);
    window.loadEnglishExtra().then(function () {
      location.hash = "#/extra/" + key;
    }).catch(function () { toast("拓展资料加载失败，请刷新重试"); });
  }
  function viewExtra(key, sub) {
    const E = window.EN_EXTRA;
    if (!E) {
      // 深链接直接进入时自动加载，加载完重渲染
      if (window.loadEnglishExtra) {
        window.loadEnglishExtra().then(function () { render(); })
          .catch(function () { toast("拓展资料加载失败，请刷新重试"); });
      }
      return loadingCard("拓展资料");
    }
    if (key === "essays") return !sub ? viewEssayList() : viewEssay(parseInt(sub, 10));
    if (key === "readings") return !sub ? viewReadingList() : viewReadingDo(sub);
    if (key === "reading-skills") return viewReadingSkills();
    if (key === "phrases") return viewPhrases();
    if (key === "writing-sentences") return viewWritingSentences();
    if (key === "writing-transitions") return viewWritingTransitions();
    if (key === "irregular") return viewIrregular();
    if (key === "grammar") return viewGrammar(sub ? parseInt(sub, 10) : -1);
    return viewExtraHome();
  }

  /* 短文列表 */
  function viewEssayList() {
    setTitle("40篇短文记单词", true);
    const E = window.EN_EXTRA;
    return wrapExtra(
      "40篇短文记单词",
      "40 篇地道短文 · 中英对照 · 在语境中搞定考纲词汇",
      '<div class="card" style="padding:6px">' +
      E.essays.map(function (e) {
        return '<button class="extra-row" data-act="extra-go" data-name="essays/' + e.num + '" type="button">' +
          '<span class="extra-row-badge">' + e.num + '</span>' +
          '<span class="extra-row-main"><span class="extra-row-title">' + esc(e.enTitle) + '</span>' +
          '<span class="extra-row-sub">' + esc(e.cnTitle) + '</span></span>' +
          '<span class="extra-row-arrow">›</span></button>';
      }).join("") +
      '</div>'
    );
  }
  /* 单篇短文 */
  function viewEssay(num) {
    setTitle("短文 " + num, true);
    const E = window.EN_EXTRA;
    const e = E.essays.find(function (x) { return x.num === num; });
    if (!e) return wrapExtra("未找到", '<button class="btn btn-primary btn-block" data-act="extra-go" data-name="essays" type="button">返回列表</button>');
    if (!state.extra) state.extra = {};
    const mode = state.extra.essayMode || "both";
    function paras(t) {
      return String(t).split(/\n{1,}/).map(function (p) {
        p = p.trim();
        return p ? '<p style="margin:0 0 12px;line-height:1.85;font-size:15px">' + esc(p) + '</p>' : "";
      }).join("");
    }
    let body = "";
    if (mode === "en") body = paras(e.enBody);
    else if (mode === "cn") body = paras(e.cnBody);
    else body = paras(e.enBody) + '<div style="border-top:1px dashed var(--border);margin:18px 0"></div>' + paras(e.cnBody);
    const prev = E.essays.find(function (x) { return x.num === num - 1; });
    const next = E.essays.find(function (x) { return x.num === num + 1; });
    return (
      '<div class="essay-head">' +
      '<div class="essay-en-title">' + esc(e.enTitle) + '</div>' +
      '<div class="essay-cn-title">' + esc(e.cnTitle) + '</div>' +
      '<div class="essay-mode-switch">' +
      [["en", "英文"], ["both", "对照"], ["cn", "中文"]].map(function (m) {
        return '<button class="chip ' + (mode === m[0] ? "is-active" : "") + '" data-act="essay-mode" data-v="' + m[0] + '" type="button">' + m[1] + '</button>';
      }).join("") +
      '</div></div>' +
      '<div class="card" style="padding:16px">' + body + '</div>' +
      '<div style="display:flex;gap:8px;margin-top:12px">' +
      (prev ? '<button class="btn btn-ghost" style="flex:1" data-act="extra-go" data-name="essays/' + prev.num + '" type="button">‹ 上一篇</button>' : '<span style="flex:1"></span>') +
      '<button class="btn btn-ghost" data-act="extra-go" data-name="essays" type="button">目录</button>' +
      (next ? '<button class="btn btn-ghost" style="flex:1" data-act="extra-go" data-name="essays/' + next.num + '" type="button">下一篇 ›</button>' : '<span style="flex:1"></span>') +
      '</div>'
    );
  }

  /* 阅读理解列表 */
  function viewReadingList() {
    setTitle("阅读理解精练", true);
    const E = window.EN_EXTRA;
    return wrapExtra(
      "阅读理解精练",
      "5 篇 · 25 道客观题 · 先读文章再答题，逐题配解析",
      E.readings.map(function (r) {
        const first = r.passage.replace(/\s+/g, " ").slice(0, 90);
        return '<button class="extra-row" data-act="extra-go" data-name="readings/' + r.id + '" type="button">' +
          '<span class="extra-row-badge" style="background:#3b82f620;color:#3b82f6">📖</span>' +
          '<span class="extra-row-main"><span class="extra-row-title">' + esc(r.task) + ' · ' + r.questions.length + ' 题</span>' +
          '<span class="extra-row-sub">' + esc(first) + '…</span></span>' +
          '<span class="extra-row-arrow">›</span></button>';
      }).join("")
    );
  }
  /* 阅读理解做题（独立状态机） */
  function viewReadingDo(id) {
    setTitle("阅读理解", true);
    const E = window.EN_EXTRA;
    const r = E.readings.find(function (x) { return x.id === id; });
    if (!r) return wrapExtra("未找到", '<button class="btn btn-primary btn-block" data-act="extra-go" data-name="readings" type="button">返回列表</button>');
    if (!state.reading || state.reading.id !== id) {
      state.reading = { id: id, i: 0, sel: {}, results: {}, submitted: {}, showPassage: true };
    }
    const R = state.reading;
    const q = r.questions[R.i];
    const letter = q.answer;
    const ai = letter.charCodeAt(0) - 65;
    const ansText = q.options[ai];
    const done = !!R.submitted[q.id];
    const curSel = R.sel[q.id];
    return (
      '<div class="reading-passage card" style="padding:0;overflow:hidden;margin-bottom:12px">' +
      '<button class="reading-passage-head" data-act="reading-toggle" type="button">📄 ' + esc(r.task) + ' · 文章（点击' + (R.showPassage ? "收起" : "展开") + '）</button>' +
      (R.showPassage ? '<div style="padding:14px;max-height:260px;overflow-y:auto;line-height:1.8;font-size:14px;white-space:pre-wrap;color:var(--text)">' + esc(r.passage) + '</div>' : "") +
      '</div>' +
      '<div class="card" style="padding:16px">' +
      '<div class="muted" style="font-size:12px;font-weight:700;margin-bottom:8px">第 ' + (R.i + 1) + ' / ' + r.questions.length + ' 题</div>' +
      '<div style="font-size:15px;font-weight:600;line-height:1.6;margin-bottom:14px">' + esc(q.stem) + '</div>' +
      q.options.map(function (opt, idx) {
        let cls = "opt";
        if (!done && curSel === opt) cls += " is-selected";
        if (done) {
          if (opt === ansText) cls += " is-correct";
          else if (curSel === opt) cls += " is-wrong";
        }
        return '<button class="' + cls + '" data-act="reading-pick" data-opt="' + attr(opt) + '" type="button" ' + (done ? "disabled" : "") + '>' +
          '<span class="key">' + "ABCD"[idx] + '</span><span>' + esc(opt) + '</span>' +
          (done ? (opt === ansText ? '<span class="mark">✓</span>' : curSel === opt ? '<span class="mark">✕</span>' : "") : "") +
          '</button>';
      }).join("") +
      (done ? '<div class="reading-result" style="margin-top:12px">' +
        (R.results[q.id] ? '<div style="color:var(--success);font-weight:700;margin-bottom:8px">✓ 回答正确</div>' : '<div style="color:var(--danger);font-weight:700;margin-bottom:8px">✕ 回答错误</div>') +
        '<div style="font-size:13px;color:var(--text-sub);margin-bottom:6px">正确答案：<b style="color:var(--text)">' + letter + '. ' + esc(ansText) + '</b></div>' +
        '<details class="reading-analysis" style="margin-top:8px"><summary style="font-size:13px;font-weight:600;color:var(--text-sub)">查看解析</summary>' +
        '<div style="margin-top:10px;line-height:1.8;font-size:14px;white-space:pre-wrap">' + esc(q.analysis) + '</div></details>' +
        '</div>'
        : '<button class="btn btn-primary btn-block" style="margin-top:14px" data-act="reading-submit" type="button">提交本题</button>') +
      '</div>' +
      '<div style="display:flex;gap:8px;margin-top:12px">' +
      '<button class="btn btn-ghost" style="flex:1" data-act="reading-nav" data-v="prev" ' + (R.i === 0 ? "disabled" : "") + ' type="button">上一题</button>' +
      '<button class="btn btn-ghost" data-act="extra-go" data-name="readings" type="button">篇目</button>' +
      '<button class="btn btn-ghost" style="flex:1" data-act="reading-nav" data-v="next" ' + (R.i === r.questions.length - 1 ? "disabled" : "") + ' type="button">下一题</button>' +
      '</div>'
    );
  }

  /* 阅读技巧 */
  function viewReadingSkills() {
    setTitle("阅读解题技巧", true);
    const E = window.EN_EXTRA;
    // 兼容字符串与对象（{t,d,forms/signal}）
    function rsList(arr) {
      return (arr || []).map(function (o) {
        if (typeof o === "string") return '<div class="rs-item">' + esc(o) + '</div>';
        let h = '<div class="rs-obj"><div class="rs-obj-t">' + esc(o.t || "") + '</div>';
        if (o.d) h += '<div class="rs-obj-d">' + esc(o.d) + '</div>';
        if (o.forms && o.forms.length) h += o.forms.map(function (f) { return '<div class="rs-obj-form">' + esc(f) + '</div>'; }).join("");
        if (o.signal) h += '<div class="rs-obj-sig">信号词：' + esc(o.signal) + '</div>';
        h += '</div>';
        return h;
      }).join("");
    }
    function block(label, arr, color) {
      if (!arr || !arr.length) return "";
      return '<div class="rs-block"><span class="rs-label" style="color:' + color + '">' + label + '</span>' + rsList(arr) + '</div>';
    }
    const cards = E.readingSkills.map(function (s) {
      return '<div class="card" style="padding:16px;margin-bottom:10px">' +
        '<div style="font-size:16px;font-weight:700;margin-bottom:6px">' + esc(s.name) + '</div>' +
        '<div style="font-size:13px;color:var(--text-sub);line-height:1.7;margin-bottom:10px">' + esc(s.key) + '</div>' +
        block("常见命题形式", s.types, "#3b82f6") +
        (s.method ? '<div class="rs-block"><span class="rs-label" style="color:#10b981">解题方法</span>' +
          '<div style="line-height:1.85;font-size:14px;white-space:pre-wrap">' + esc(s.method) + '</div></div>' : "") +
        block("常考位置 / 定位", s.positions, "#8b5cf6") +
        block("易错陷阱", s.traps, "#ef4444") +
        '</div>';
    }).join("");
    return wrapExtra("阅读解题技巧", "四大题型 · 识别命题特征 · 掌握方法与陷阱", cards);
  }

  /* 高频短语 */
  function viewPhrases() {
    setTitle("高频短语", true);
    const E = window.EN_EXTRA;
    return wrapExtra(
      "高频短语 300",
      "日常会话与考纲高频 · 输入关键词可筛选",
      '<div class="search-box" style="margin-bottom:10px">' +
      '<input id="phraseSearch" type="search" placeholder="搜索英文或中文…" autocomplete="off" /></div>' +
      '<div class="card" style="padding:6px" id="phraseList">' +
      E.phrases.map(function (p) {
        return '<div class="phrase-item"><span class="phrase-en">' + esc(p.en) + '</span><span class="phrase-cn">' + esc(p.cn) + '</span></div>';
      }).join("") +
      '</div>'
    );
  }

  /* 写作高分句式 */
  function viewWritingSentences() {
    setTitle("写作高分句式", true);
    const E = window.EN_EXTRA;
    const groups = [
      ["opening", "开头句", "#3b82f6"],
      ["middle", "中间展开句", "#10b981"],
      ["ending", "结尾句", "#f59e0b"],
      ["killers", "加分绝杀句", "#8b5cf6"]
    ];
    const body = groups.map(function (g) {
      const list = E.writing.sentences[g[0]] || [];
      return '<div style="margin-bottom:16px">' +
        '<div class="ws-group-title" style="color:' + g[2] + '">' + g[1] + ' · ' + list.length + ' 句</div>' +
        list.map(function (x) {
          return '<div class="ws-item"><div class="ws-en">' + esc(x.en) + '</div><div class="ws-cn">' + esc(x.cn) + '</div></div>';
        }).join("") + '</div>';
    }).join("");
    return wrapExtra("写作高分句式", "开头 · 中间 · 结尾模板，直接套用", '<div class="card" style="padding:16px">' + body + '</div>');
  }

  /* 万能过渡句 */
  function viewWritingTransitions() {
    setTitle("万能过渡句", true);
    const E = window.EN_EXTRA;
    const body = E.writing.transitions.map(function (t, i) {
      return '<div class="card" style="padding:14px;margin-bottom:10px">' +
        '<div style="font-size:14px;font-weight:700;margin-bottom:8px">' + (i + 1) + '. ' + esc(t.cn) + '</div>' +
        '<div style="margin-bottom:8px">' + t.ex.map(function (x) {
          return '<div class="ws-en" style="margin-bottom:4px">' + esc(x) + '</div>';
        }).join("") + '</div>' +
        (t.ce ? '<div class="ws-cn" style="margin-bottom:4px">例：' + esc(t.ce) + '</div>' : "") +
        (t.ee ? '<div class="ws-en" style="color:var(--text-sub)">' + esc(t.ee) + '</div>' : "") +
        '</div>';
    }).join("");
    return wrapExtra("万能过渡句", "30 组过渡表达 · 中英对照 · 让文章更连贯", body);
  }

  /* 不规则动词 */
  function viewIrregular() {
    setTitle("不规则动词", true);
    const E = window.EN_EXTRA;
    const types = {};
    E.irregular.forEach(function (x) {
      const k = x.type || "ABC";
      (types[k] = types[k] || []).push(x);
    });
    const body = Object.keys(types).map(function (k) {
      return '<div class="irr-group-title">变形类型 ' + esc(k) + ' · ' + types[k].length + ' 个</div>' +
        '<div class="card" style="padding:6px;margin-bottom:14px">' +
        types[k].map(function (x) {
          return '<div class="irr-row">' +
            '<div class="irr-base">' + esc(x.base) + '<div class="irr-cn">' + esc(x.cn) + '</div></div>' +
            '<div class="irr-forms">' +
            '<span>' + esc(x.past) + '</span>' +
            '<span>' + esc(x.pp) + '</span>' +
            (x.ing ? '<span>' + esc(x.ing) + '</span>' : "") +
            '</div></div>';
        }).join("") + '</div>';
    }).join("");
    return wrapExtra("不规则动词 114", "原形 · 过去式 · 过去分词（· 现在分词）", body);
  }

  /* 语法思维导图 */
  function viewGrammar(idx) {
    setTitle("语法思维导图", true);
    const E = window.EN_EXTRA;
    if (idx === -1 || isNaN(idx)) {
      return wrapExtra(
        "语法思维导图",
        "15 大语法专题 · 点进去看知识要点",
        '<div class="card" style="padding:6px">' +
        E.grammar.map(function (g, i) {
          return '<button class="extra-row" data-act="extra-go" data-name="grammar/' + i + '" type="button">' +
            '<span class="extra-row-badge" style="background:#8b5cf620;color:#8b5cf6">🧠</span>' +
            '<span class="extra-row-main"><span class="extra-row-title">' + esc(g.name) + '</span>' +
            '<span class="extra-row-sub">' + g.groups.length + ' 个知识模块</span></span>' +
            '<span class="extra-row-arrow">›</span></button>';
        }).join("") + '</div>'
      );
    }
    const g = E.grammar[idx];
    if (!g) return wrapExtra("未找到", '<button class="btn btn-primary btn-block" data-act="extra-go" data-name="grammar" type="button">返回列表</button>');
    const body = g.groups.map(function (gr) {
      return '<div class="card" style="padding:14px;margin-bottom:10px">' +
        '<div style="font-size:15px;font-weight:700;margin-bottom:10px">' + esc(gr.title) + '</div>' +
        gr.items.map(function (it) { return '<div class="gr-item">' + esc(it) + '</div>'; }).join("") +
        '</div>';
    }).join("");
    return (
      '<div class="extra-hero"><div class="extra-hero-title">' + esc(g.name) + '</div>' +
      '<div class="extra-hero-sub">' + g.groups.length + ' 个知识模块</div></div>' +
      body +
      '<button class="btn btn-ghost btn-block" data-act="extra-go" data-name="grammar" type="button">返回语法列表</button>'
    );
  }

  /* ========== 2027 官方考纲 ========== */
  function viewSyllabus(subjId) {
    const S = window.SYLLABUS;
    if (!S) return '<div class="empty">考纲数据加载中<button class="btn btn-primary" data-nav="home" type="button">回首页</button></div>';
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

  function hideNav() {
    const side = $("#sideNav");
    const tab = $("#tabbar");
    if (side) {
      side.innerHTML = "";
      side.classList.add("is-hidden");
    }
    if (tab) {
      tab.innerHTML = "";
      tab.classList.add("is-hidden");
    }
    const frame = document.querySelector(".app-frame");
    if (frame) frame.classList.add("nav-hidden");
  }

  function showNav() {
    const side = $("#sideNav");
    const tab = $("#tabbar");
    if (side) side.classList.remove("is-hidden");
    if (tab) tab.classList.remove("is-hidden");
    const frame = document.querySelector(".app-frame");
    if (frame) frame.classList.remove("nav-hidden");
  }

  /* 事件由 document 级委托统一绑定；此函数供登录页等调用以保持接口兼容 */
  function bindEvents() {}

  var _lastRouteKey = null;
  function render() {
    const { route, params } = parseHash();
    state.route = route;
    // 进入主界面（已登录或游客）后，才启动题库数据后台加载（幂等）：
    // 未登录停留登录页时不下载数据，弱网下也不与登录认证请求抢占带宽
    if (state.user && window.gxzsbEnsureData) {
      try { window.gxzsbEnsureData(); } catch (e) {}
    }
    // 仅在「路由切换」时回到顶部；同一页面的数据加载/状态刷新保持滚动位置，
    // 避免用户正在浏览时异步加载完成被强制拉回顶部
    var routeKey = route + "|" + params.join("/");
    if (routeKey !== _lastRouteKey) {
      window.scrollTo(0, 0);
      _lastRouteKey = routeKey;
    }
    const app = $("#app");
    // login 为公开页，未登录也可访问
    if (route === "login") {
      app.innerHTML = viewLogin();
      hideNav(); bindEvents(); return;
    }
    // 数据未就绪也直接渲染首页（空数据），后台加载完自动刷新
    // 不再卡住转圈
    if (sb && !state.user) {
      app.innerHTML = viewLogin();
      hideNav();
      bindEvents();
      return;
    }
    if (route === "bank") app.innerHTML = viewBank();
    else if (route === "subject") app.innerHTML = viewSubject(params[0] ? decodeURIComponent(params[0]) : "高等数学");
    else if (route === "practice") app.innerHTML = viewPractice();
    else if (route === "report") app.innerHTML = viewReport();
    else if (route === "exam-history") app.innerHTML = viewExamHistory();
    else if (route === "mock") app.innerHTML = viewMock();
    else if (route === "stats") app.innerHTML = viewStats();
    else if (route === "wrong") app.innerHTML = viewWrong();
    else if (route === "formula") app.innerHTML = viewFormula();
    else if (route === "learn") app.innerHTML = viewLearn();
    else if (route === "learn-point") app.innerHTML = viewLearnDetail(params[0] || "");
    else if (route === "syllabus") app.innerHTML = viewSyllabus(params[0] ? decodeURIComponent(params[0]) : "");
    else if (route === "exam-info") app.innerHTML = viewExamInfo();
    else if (route === "me") app.innerHTML = viewMe();
    else if (route === "search") app.innerHTML = viewSearch();
    else if (route === "words") app.innerHTML = viewWords();
    else if (route === "word-learn") app.innerHTML = viewWordLearn();
    else if (route === "word-review") app.innerHTML = viewWordReview();
    else if (route === "word-list") app.innerHTML = viewWordList(params[0] || "");
    else if (route === "word-quiz") app.innerHTML = viewWordQuiz();
    else if (route === "extra") app.innerHTML = viewExtra(params[0] ? decodeURIComponent(params[0]) : "", params[1] ? decodeURIComponent(params[1]) : "");
    else if (route === "kp-detail") app.innerHTML = viewKpDetail(params[0] || "");
    else {
      state.route = "home";
      app.innerHTML = viewHome();
    }
    renderNav();
    // 防呆：非登录页底部导航被误清空时自动补回
    if (state.route !== "login" && state.user && $("#tabbar") && !$("#tabbar").innerHTML) {
      renderNav();
    }
    if (state.route === "formula") formulaFilter();
    // 倒计时全局生效：离开练习页也继续，到点自动交卷
    ensureExamTimer();
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
    if (route === "practice") {
      var fi = document.getElementById("fillInput");
      if (fi && !fi.disabled) {
        fi.onkeydown = function(e) {
          if (e.key === "Enter") { e.preventDefault(); submitQ(); }
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
    // 短语搜索：实时筛选，不重渲染
    var phraseInp = document.getElementById("phraseSearch");
    if (phraseInp) {
      phraseInp.addEventListener("input", function () {
        var kw = phraseInp.value.trim().toLowerCase();
        var items = document.querySelectorAll("#phraseList .phrase-item");
        items.forEach(function (it) {
          it.style.display = (!kw || it.textContent.toLowerCase().indexOf(kw) >= 0) ? "" : "none";
        });
      });
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
      // 按需加载科目题库：每日30题需要所有科目
      var allSubjects = ["高等数学","英语","电工电子技术基础","C语言程序设计","计算机网络基础"];
      var notLoadedDaily = allSubjects.filter(function(s) { return !window.isSubjectBankLoaded || !window.isSubjectBankLoaded(s); });
      if (notLoadedDaily.length) {
        toast("正在加载题库…", 2000);
        var selfD = t;
        Promise.all(notLoadedDaily.map(function(s) { return window.loadSubjectBank(s); })).then(function() {
          D = window.STUDY_DATA || {};
          Q = buildQ(D);
          render();
          var evt = new Event('click');
          setTimeout(function() { selfD.dispatchEvent(evt); }, 100);
        }).catch(function() { toast("题库加载失败，请刷新重试"); });
        return;
      }
      // 只恢复「每日 30 题」本身，绝不能把题库练习误当成每日任务
      if (restoreSession(true)) { go("practice"); render(); return; }
      const dailyIds = getDaily30();
      // 今天已答过的题保留进度，避免计数卡住 / 重复作答
      const day = localDayKey();
      const pre = {};
      state.attempts.forEach(function (a) {
        if (!a || !a.questionId) return;
        if (localDayKey(new Date(a.at || 0)) !== day) return;
        if (dailyIds.indexOf(a.questionId) === -1) return;
        pre[a.questionId] = !!a.correct;
      });
      startSession({ ids: dailyIds, title: "每日 30 题", ordered: true, daily: true, results: pre });
    }
    else if (act === "review-exam") {
      // 当前模拟考已交卷，直接进入逐题回看（解析已在会话中）
      const s = state.session;
      if (!s || !s.exam) return;
      s.i = 0;
      s.sel = s.answers && s.answers[s.q[0].id] != null ? s.answers[s.q[0].id] : null;
      s.submitted = s.q[0].id in s.results;
      s.showExp = true;
      go("practice");
      render();
      window.scrollTo({ top: 0 });
    }
    else if (act === "exam-open") {
      // 从历史记录恢复整卷回看
      const hid = t.getAttribute("data-id");
      const rec = (state.history || []).find(function (h) { return h.id === hid; });
      if (!rec || !Array.isArray(rec.ids) || !rec.ids.length) { alert("该记录缺少题目快照，无法回看"); return; }
      const qs = rec.ids.map(qById).filter(Boolean);
      if (!qs.length) { alert("题库已更新，该记录中的题目已不存在，无法回看"); return; }
      const examPlan = rec.exam && rec.exam.planId ? (D.EXAM_PLANS || {})[rec.exam.planId] : null;
      stopExamTimer();
      state.session = {
        title: rec.title || "模拟考回看",
        q: qs,
        i: 0,
        sel: rec.answers && rec.answers[qs[0].id] != null ? rec.answers[qs[0].id] : null,
        submitted: qs[0].id in (rec.results || {}),
        results: rec.results || {},
        scores: rec.scores || null,
        answers: rec.answers || null,
        flags: {},
        showExp: true,
        start: rec.at || Date.now(),
        end: null,
        exam: rec.exam ? {
          planId: rec.exam.planId || null,
          plan: examPlan || null,
          scoreOf: rec.exam.scoreOf || null,
          sectionOf: rec.exam.sectionOf || null
        } : null,
        examSubmitted: true,
        lastSeenAt: Date.now(),
        ordered: false,
        daily: false
      };
      saveSession();
      go("practice");
      render();
      window.scrollTo({ top: 0 });
    }
    else if (act === "due") {
      if (!dueCount()) { alert("今天没有到期的错题；到期的题会按遗忘曲线自动出现在这里"); return; }
      startSession({ dueOnly: true, onlyWrong: true, limit: 15, title: "到期错题" });
    }
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
      if (restoreSession()) { go("practice"); render(); return; }
      const last = state.last;
      if (last && last.subject && SUBJ[last.subject]) startSession({ subject: last.subject, limit: 12, title: "继续 " + last.subject });
      else startSession({ limit: 12, title: "综合练习" });
    } else if (act === "weak") {
      if (!state.attempts || !state.attempts.length) { alert("还没有练习记录，先做几道题再来找薄弱考点"); return; }
      startSession({ mode: "weak", limit: 12, title: "薄弱强化" });
    }
    else if (act === "subject") {
      var sn = t.getAttribute("data-name");
      go("subject/" + encodeURIComponent(sn));
      ensureSubjectBank(sn);
    }
    else if (act === "subject-retry") {
      var rn = t.getAttribute("data-name");
      state._bankError = state._bankError || {};
      state._bankLoading = state._bankLoading || {};
      state._bankError[rn] = false;
      state._bankLoading[rn] = false;
      ensureSubjectBank(rn);
    }
    else if (act === "mock-practice") startMockPractice(t.getAttribute("data-name"));
    else if (act === "extra-go") openExtra(t.getAttribute("data-name"));
    else if (act === "essay-mode") {
      state.extra = state.extra || {};
      state.extra.essayMode = t.getAttribute("data-v");
      render();
    }
    else if (act === "reading-toggle") {
      if (state.reading) state.reading.showPassage = !state.reading.showPassage;
      render();
    }
    else if (act === "reading-pick") {
      const R = state.reading;
      const r = window.EN_EXTRA.readings.find((x) => x.id === R.id);
      const q = r.questions[R.i];
      R.sel[q.id] = t.getAttribute("data-opt");
      render();
    }
    else if (act === "reading-submit") {
      const R = state.reading;
      const r = window.EN_EXTRA.readings.find((x) => x.id === R.id);
      const q = r.questions[R.i];
      const ai = q.answer.charCodeAt(0) - 65;
      const ansText = q.options[ai];
      const ok = R.sel[q.id] === ansText;
      R.submitted[q.id] = true;
      R.results[q.id] = ok;
      render();
    }
    else if (act === "reading-nav") {
      const v = t.getAttribute("data-v");
      const R = state.reading;
      const r = window.EN_EXTRA.readings.find((x) => x.id === R.id);
      if (v === "prev" && R.i > 0) R.i--;
      if (v === "next" && R.i < r.questions.length - 1) R.i++;
      render();
    }
    else if (act === "chapter") startSession({ chapter: t.getAttribute("data-id"), limit: 15, title: "章节练习" });
    else if (act === "seq-practice") {
      var subjName = t.getAttribute("data-name");
      if (!window.isSubjectBankLoaded || !window.isSubjectBankLoaded(subjName)) {
        toast("正在加载题库…", 2000);
        var selfS = t;
        window.loadSubjectBank(subjName).then(function() {
          D = window.STUDY_DATA || {};
          Q = buildQ(D);
          render();
          var evt = new Event('click');
          setTimeout(function() { selfS.dispatchEvent(evt); }, 100);
        }).catch(function() { toast("题库加载失败，请刷新重试"); });
        return;
      }
      startSession({ subject: subjName, limit: 20, title: "顺序练习", ordered: true });
    }
    else if (act === "seq-obj") {
      const name = t.getAttribute("data-name");
      startSession({ subject: name, limit: 20, title: name + " · 客观题", filterKind: "obj", ordered: true });
    } else if (act === "seq-subj") {
      const name = t.getAttribute("data-name");
      startSession({ subject: name, limit: 15, title: name + " · 主观题", filterKind: "subj", ordered: true });
    }
    else if (act === "filter") {
      const kind = t.getAttribute("data-kind");
      const val = t.getAttribute("data-val");
      if (!Array.isArray(state.filters[kind])) state.filters = normalizeFilters(state.filters);
      const arr = state.filters[kind];
      const i = arr.indexOf(val);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(val);
      save("gxzsb.filters", state.filters);
      render();
    } else if (act === "clear-filter") {
      state.filters = { diff: [], type: [], status: [], kind: [] };
      save("gxzsb.filters", state.filters);
      render();
    } else if (act === "pick") {
      const s = state.session;
      if (!s || s.submitted) return;
      if (!lockAction(180)) return;
      s.sel = t.getAttribute("data-opt");
      saveSession();
      render();
      // P1-L2 练习模式：选完即判，立即出解析
      if (state.practiceMode === "practice") {
        setTimeout(function () { submitQ(); }, 150);
      }
    } else if (act === "toggle-mode") {
      state.practiceMode = state.practiceMode === "practice" ? "test" : "practice";
      save("gxzsb.practiceMode", state.practiceMode);
      toastLite(state.practiceMode === "practice" ? "练习模式：选完即判" : "测试模式：做完统一判分");
      render();
    } else if (act === "submit") {
      if (!lockAction(350)) return;
      submitQ();
    } else if (act === "submit-exam") {
      if (!lockAction(400)) return;
      submitExam(false);
    } else if (act === "self-ok" || act === "self-bad") {
      const s = state.session;
      if (!s || !s.submitted) return;
      const q = s.q[s.i];
      const ok = act === "self-ok";
      const prev = s.results[q.id];
      s.results[q.id] = ok;
      s.scores = s.scores || {};
      s.scores[q.id] = ok ? 1 : 0;
      // 覆盖对错时才纠正错题本，避免与提交时的暂定记录重复计入
      if (prev !== ok) record(q, ok);
      s.selfAssessed = s.selfAssessed || {};
      s.selfAssessed[q.id] = true;
      saveSession();
      render();
    }
    else if (act === "next") { nextQ(); saveSession(); }
    else if (act === "prev") { prevQ(); saveSession(); }
    else if (act === "goto") {
      const s = state.session;
      s.answers = s.answers || {};
      if (s.sel != null && s.q[s.i]) s.answers[s.q[s.i].id] = s.sel;
      s.i = +t.getAttribute("data-i");
      s.sel = s.answers[s.q[s.i].id] != null ? s.answers[s.q[s.i].id] : null;
      s.submitted = s.q[s.i].id in s.results;
      s.showExp = false;
      saveSession(); render();
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
      scheduleSync();
      render();
    }  else if (act === "save-note") {
      const id = t.getAttribute("data-id");
      const box = document.getElementById("noteInput");
      state.notes[id] = box ? box.value : "";
      save(LS.notes, state.notes);
      scheduleSync();
      t.textContent = "已保存";
    } else if (act === "open-q") startSession({ ids: [t.getAttribute("data-id")], title: "题目精练", limit: 1 });
    else if (act === "exam-history") {
      state.examHistoryPlan = t.getAttribute("data-plan");
      location.hash = "#/exam-history";
    }
    else if (act === "view-history") {
      const hid = t.getAttribute("data-id");
      const h = (state.history || []).find((x) => x.id === hid);
      if (!h) { toast("记录不存在"); return; }
      const qs = h.ids.map(qById).filter(Boolean);
      if (!qs.length) { toast("题目数据已更新，无法回看"); return; }
      state.session = {
        title: (h.title || "历史回看") + "（历史回看）",
        q: qs,
        i: 0, sel: null, submitted: true,
        results: h.results || {}, scores: h.scores || {},
        flags: {}, showExp: false,
        start: h.at, end: null,
        exam: h.exam || null, examSubmitted: true,
        lastSeenAt: Date.now(), ordered: true, daily: false, reviewMode: true,
      };
      go("practice"); render();
    } else if (act === "exam") {
      const planId = t.getAttribute("data-plan");
      let plan = (D.EXAM_PLANS || {})[planId];
      // 全真模拟卷：动态合并数学+英语+专业合卷
      if (!plan && planId === "full-combined") {
        const M = (D.EXAM_PLANS || {})["math-full"];
        const E = (D.EXAM_PLANS || {})["english-full"];
        const MJ = (D.EXAM_PLANS || {})["major-combined"];
        if (M && E && MJ) {
          // 修正专业合卷分值：每科从105分调到100分（判断3→4分，计算15→10分）
          const fixMix = (mix) => mix.map(m => {
            if (m.type === "judge") return { ...m, each: 4 };
            if (m.type === "calc") return { ...m, each: 10 };
            return m;
          });
          plan = {
            id: "full-combined", title: "全真模拟卷", bySubject: true,
            minutes: 240, totalScore: 600,
            sections: [
              { key: "math", label: "高等数学", subject: "高等数学", mix: M.sections.map(s => ({ type: s.type, n: s.n, each: s.each })) },
              { key: "english", label: "英语", subject: "英语", mix: E.sections.map(s => ({ type: s.type, n: s.n, each: s.each })) },
              ...MJ.sections.map(sec => ({ key: sec.key, label: sec.label, subject: sec.subject, mix: fixMix(sec.mix) }))
            ]
          };
        }
      }
      // 文化综合合卷：动态合并数学+英语
      if (!plan && planId === "public-combined") {
        const M = (D.EXAM_PLANS || {})["math-full"];
        const E = (D.EXAM_PLANS || {})["english-full"];
        if (M && E) {
          plan = {
            id: "public-combined", title: "文化合卷", bySubject: true,
            minutes: 120, totalScore: 300,
            sections: [
              { key: "math", label: "高等数学", subject: "高等数学", mix: M.sections.map(s => ({ type: s.type, n: s.n, each: s.each })) },
              { key: "english", label: "英语", subject: "英语", mix: E.sections.map(s => ({ type: s.type, n: s.n, each: s.each })) }
            ]
          };
        }
      }
      if (!plan) { toast("试卷配置加载中，请稍后再试"); return; }

      // 按需加载科目题库：检查这套卷需要哪些科目，先加载再组卷
      var neededSubjects = [];
      (plan.sections || []).forEach(function(sec) {
        if (sec.subject && neededSubjects.indexOf(sec.subject) < 0) neededSubjects.push(sec.subject);
      });
      if (plan.subject && neededSubjects.indexOf(plan.subject) < 0) neededSubjects.push(plan.subject);
      // 检查是否所有需要的科目题库都已加载
      var notLoaded = neededSubjects.filter(function(s) { return !window.isSubjectBankLoaded || !window.isSubjectBankLoaded(s); });
      if (notLoaded.length) {
        toast("正在加载题库…", 2000);
        var self = t;
        Promise.all(notLoaded.map(function(s) { return window.loadSubjectBank(s); })).then(function() {
          // 加载完后重建题库快照，再重新触发组卷
          D = window.STUDY_DATA || {};
          Q = buildQ(D);
          render();
          // 重新执行 exam 动作
          var evt = new Event('click');
          setTimeout(function() { self.dispatchEvent(evt); }, 100);
        }).catch(function() {
          toast("题库加载失败，请刷新重试");
        });
        return;
      }

      // 组卷 - 按大纲章节比例抽题
      const items = [];
      const used = new Set();
      // 排除上次同套卷考过的题，保证每次题目不同（题不够时自动回退）
      const lastExam = (state.history || []).find((h) => h.exam && h.exam.planId === planId);
      if (lastExam && lastExam.ids) lastExam.ids.forEach((id) => used.add(id));
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
        // 题量不够：回退，不再排除上次考题
        if (picked.length < n && lastExam && lastExam.ids) {
          lastExam.ids.forEach((id) => used.delete(id));
          Object.values(byCh).forEach((arr) => shuffle(arr));
          const ch2 = Object.keys(byCh);
          let i2 = 0;
          while (picked.length < n && ch2.length) {
            const ch = ch2[i2 % ch2.length];
            const arr = byCh[ch];
            while (arr.length && used.has(arr[0].id)) arr.shift();
            if (arr.length) {
              const q = arr.shift();
              picked.push(q);
              used.add(q.id);
            } else {
              ch2.splice(ch2.indexOf(ch), 1);
            }
            i2++;
          }
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
          planId: planId,
          plan,
          scoreOf: Object.fromEntries(items.map((x) => [x.id, x.score])),
          sectionOf: Object.fromEntries(items.map((x) => [x.id, x])),
        },
      });
    } else if (act === "by-reason") {
      const r = t.getAttribute("data-r");
      const ids = Object.keys(state.wrong).filter((id) => state.wrong[id].reason === r);
      if (ids.length) startSession({ ids, limit: 10, title: "按错因补练" });
      else { toastLite("暂无该错因的错题"); }
    } else if (act === "set-reason") {
      const id = t.getAttribute("data-id");
      const r = t.getAttribute("data-r");
      setWrongReason(id, r);
      render();
    } else if (act === "clear-wrong") {
      // 按当前筛选（科目/错误次数）清空；无筛选时清空全部
      const subjFilter = state.wrongSubj || "all";
      const nFilter = state.wrongNFilter || 0;
      const ids = Object.keys(state.wrong).filter(function (id) {
        const q = qById(id);
        if (!q) return false;
        if (state.wrong[id].mastered) return false; // 已掌握的不随筛选删除
        if (subjFilter !== "all" && q.subject !== subjFilter) return false;
        if (nFilter && (state.wrong[id].n || 1) < nFilter) return false;
        return true;
      });
      const scoped = subjFilter !== "all" || nFilter;
      if (!ids.length) { toastLite(scoped ? "当前筛选下没有错题" : "错题本是空的"); return; }
      confirmModal(
        scoped ? "清空筛选错题" : "清空错题本",
        (scoped ? "确定清空当前筛选的 " + ids.length + " 道错题？" : "确定清空全部 " + ids.length + " 道错题？") + "此操作不可撤销。",
        function () {
          ids.forEach(function (id) { delete state.wrong[id]; });
          save(LS.wrong, state.wrong);
          scheduleSync();
          toastLite("已清空 " + ids.length + " 道错题");
          render();
        }
      );
    } else if (act === "show-shortcuts") {
      openModal({
        title: "答题快捷键",
        html:
          '<div class="shortcut-list">' +
          "<p>1–4 / A–D：选择选项</p>" +
          "<p>Enter：提交答案 / 下一题</p>" +
          "<p>← →：上一题 / 下一题</p>" +
          "<p>Esc：关闭弹窗</p>" +
          "</div>",
        okText: "知道了",
        hideCancel: true,
      });
    } else if (act === "copy-exp") {
      const s = state.session;
      const q = s && s.q[s.i];
      if (!q) return;
      const exp = ensureExplain(q) || q.analysis || "";
      const txt =
        "【题目】" + String(q.stem || "") + "\n" +
        "【答案】" + String(Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer || "") + "\n" +
        "【解析】\n" + exp;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () {
          toastLite("解析已复制");
        }).catch(function () {
          fallbackCopy(txt);
        });
      } else {
        fallbackCopy(txt);
      }
    } else if (act === "exit-exam") {
      const s = state.session;
      if (!s || !s.exam || s.examSubmitted) { go("mock"); render(); return; }
      confirmModal("放弃本场模拟考", "考试尚未交卷。放弃后本场不计成绩，草稿也会清除。确定放弃？", function () {
        // 与文案一致：放弃本场，不写入考试历史
        s.end = null;
        s.examSubmitted = true;
        s.abandoned = true;
        try { localStorage.removeItem("gxzsb.session"); } catch(e) {}
        go("mock");
        render();
        toastLite("已放弃本场模拟考");
      });
    } else if (act === "pause-exam") {
      const s = state.session;
      if (!s || !s.exam || s.examSubmitted) return;
      // 保存草稿（saveSession 已在每次答题时调用），退出到模拟考列表；下次进入时自动恢复
      saveSession();
      stopExamTimer();
      toastLite("已暂停，进度已保存。下次从模拟考入口继续。");
      go("mock");
      render();
    } else if (act === "wrong-tab") {
      state.wrongTab = t.getAttribute("data-v");
      state.wrongPage = 1;
      render();
    } else if (act === "wrong-more") {
      state.wrongPage = (state.wrongPage || 1) + 1;
      render();
    } else if (act === "wrong-subj") {
      state.wrongSubj = t.getAttribute("data-v");
      state.wrongPage = 1;
      render();
    } else if (act === "remove-wrong") {
      const id = t.getAttribute("data-id");
      if (confirm("确定把这道题移出错题本？")) {
        delete state.wrong[id];
        save(LS.wrong, state.wrong);
        render();
      }
    } else if (act === "master-wrong") {
      const id = t.getAttribute("data-id");
      const w = state.wrong[id];
      if (!w) return;
      w.mastered = true;
      w.due = Number.MAX_SAFE_INTEGER; // 不再进到期队列
      save(LS.wrong, state.wrong);
      scheduleSync();
      toastLite("已标记为掌握，可在下方「已掌握」区恢复");
      render();
    } else if (act === "unmaster-wrong") {
      const id = t.getAttribute("data-id");
      const w = state.wrong[id];
      if (!w) return;
      w.mastered = false;
      w.due = Date.now(); // 恢复后立即到期，下次就能复习
      save(LS.wrong, state.wrong);
      scheduleSync();
      toastLite("已恢复到待复习队列");
      render();
    } else if (act === "wrong-nfilter") {
      state.wrongNFilter = parseInt(t.getAttribute("data-v"), 10) || 0;
      state.wrongPage = 1;
      render();
    } else if (act === "wrong-mastered-toggle") {
      state.wrongMasteredOpen = !state.wrongMasteredOpen;
      render();
    } else if (act === "curve") {
      state.forgetCurve = t.getAttribute("data-v") || "mid";
      save("gxzsb.forgetCurve", state.forgetCurve);
      toastLite("遗忘曲线已切换为「" + (FORGET_CURVES[state.forgetCurve] || {}).label + "」档，未来到期题按新节奏排期");
      render();
    } else if (act === "font-size") {
      state.fontSize = t.getAttribute("data-v") || "md";
      save("gxzsb.fontSize", state.fontSize);
      applyFontSize();
      render();
    } else if (act === "export-txt") {
      // P2-1：导出 TXT（题目+答案+解析），错题本/收藏通用
      var ids = state.wrongTab === "fav"
        ? Object.keys(state.fav).filter(function(id){ return state.fav[id] && qById(id); })
        : Object.keys(state.wrong).filter(function(id){ return qById(id); });
      if (!ids.length) { toastLite("暂无内容可导出"); return; }
      var lines = ["# gxzsb 导出 · " + (state.wrongTab === "fav" ? "收藏题" : "错题本") + " · 共 " + ids.length + " 题", ""];
      ids.forEach(function(id, i){
        var q = qById(id);
        if (!q) return;
        lines.push((i+1) + ". " + String(q.stem || "").replace(/<[^>]+>/g, ""));
        lines.push("   【科目】" + (q.subject || "") + "  【考点】" + (q.knowledgePoint || ""));
        if (q.options && q.options.length) q.options.forEach(function(o, idx){ lines.push("   " + "ABCD"[idx] + ". " + String(o).replace(/<[^>]+>/g, "")); });
        lines.push("   【答案】" + String(Array.isArray(q.answer) ? q.answer.join(" / ") : (q.answer || "")));
        var exp = ensureExplain(q) || q.analysis || "";
        lines.push("   【解析】" + String(exp).replace(/<[^>]+>/g, "").slice(0, 500));
        lines.push("");
      });
      var blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "gxzsb-" + (state.wrongTab === "fav" ? "favs" : "wrong") + ".txt";
      document.body.appendChild(a); a.click(); a.remove();
      toastLite("已导出 TXT");
    } else if (act === "export-print") {
      // 生成完整打印稿（题干+选项+答案+解析），而不是打印截断的列表页
      var pIds = state.wrongTab === "fav"
        ? Object.keys(state.fav).filter(function(id){ return state.fav[id] && qById(id); })
        : Object.keys(state.wrong).filter(function(id){ return qById(id); });
      if (!pIds.length) { toastLite("暂无内容可打印"); return; }
      var pKind = state.wrongTab === "fav" ? "收藏题" : "错题本";
      var ph = '<div class="print-sheet" id="printSheet">' +
        '<h1 style="font-size:16px;margin:0 0 4px">gxzsb ' + esc(pKind) + ' · 共 ' + pIds.length + ' 题</h1>' +
        '<p style="font-size:11px;color:#666;margin:0 0 14px">含题干 · 选项 · 答案 · 解析</p>';
      pIds.forEach(function(id, i){
        var q = qById(id); if (!q) return;
        ph += '<div class="p-item">';
        ph += '<div class="p-stem"><b>' + (i+1) + '.</b> ' + mathHtml(String(q.stem || "")) + '</div>';
        if (q.options && q.options.length) {
          ph += '<div class="p-opts">';
          q.options.forEach(function(o, idx){
            var letter = "ABCD"[idx] || ("#" + (idx+1));
            var isCorrect = String(o) === String(q.answer);
            ph += '<div class="p-opt' + (isCorrect ? " p-correct" : "") + '">' + letter + '. ' + mathHtml(String(o)) + (isCorrect ? '  ✓' : '') + '</div>';
          });
          ph += '</div>';
        }
        ph += '<div class="p-ans"><b>答案：</b>' + esc(String(Array.isArray(q.answer) ? q.answer.join(" / ") : (q.answer || ""))) + '</div>';
        var exp = ensureExplain(q) || q.analysis || "";
        ph += '<div class="p-exp"><b>解析：</b>' + String(exp).replace(/<[^>]+>/g, "") + '</div>';
        ph += '</div>';
      });
      ph += '</div>';
      var oldSheet = document.getElementById("printSheet"); if (oldSheet) oldSheet.remove();
      document.body.insertAdjacentHTML("beforeend", ph);
      setTimeout(function () { window.print(); }, 60);
      window.onafterprint = function () {
        var p = document.getElementById("printSheet"); if (p) p.remove();
      };
    } else if (act === "toggle-pwd") {
      var tp = document.getElementById(t.getAttribute("data-target"));
      if (tp) {
        var show = tp.type === "password";
        tp.type = show ? "text" : "password";
        t.textContent = show ? "隐藏" : "显示";
        t.setAttribute("aria-label", show ? "隐藏密码" : "显示密码");
      }
    } else if (act === "switch-login") {
      state.loginMode = t.getAttribute("data-mode");
      render();
    } else if (act === "do-login") {
      var em = document.getElementById("loginEmail").value.trim();
      var pw = document.getElementById("loginPwd").value;
      var msg = document.getElementById("loginMsg");
      if (!em || !pw) { msg.textContent = "请输入邮箱和密码"; return; }
      if (!sb) { msg.textContent = "登录组件加载失败，请刷新页面重试"; return; }
      var lockSec = loginLocked();
      if (lockSec > 0) { msg.textContent = "失败次数过多，请 " + lockSec + " 秒后再试"; return; }
      msg.textContent = "登录中...";
      withTimeout(sb.auth.signInWithPassword({ email: em, password: pw }), 15000).then(function(r) {
        if (r && r.error) {
          noteLoginFail();
          var left = loginLocked();
          msg.textContent = r.error.message + (left > 0 ? "（已锁定 " + left + "s）" : "");
          return;
        }
        clearLoginFails();
        state.user = r.data.user;
        try { localStorage.removeItem("gxzsb.guest"); } catch (e) {}
        stopRealtime();
        go("home"); render();
        pullAndMerge().then(subscribeRealtime);
      }).catch(function (err) {
        if (err && err.message === "timeout") {
          msg.textContent = "登录超时（15s），请检查网络后重试";
        } else {
          noteLoginFail();
          msg.textContent = "登录失败：" + (err && err.message ? err.message : "网络异常");
        }
      });
    } else if (act === "do-register") {
      var em2 = document.getElementById("loginEmail").value.trim();
      var pw2 = document.getElementById("loginPwd").value;
      var pw2b = document.getElementById("loginPwd2");
      var msg2 = document.getElementById("loginMsg");
      if (!em2 || !pw2) { msg2.textContent = "请输入邮箱和密码"; return; }
      if (!sb) { msg2.textContent = "登录组件加载失败，请刷新页面重试"; return; }
      if (pw2.length < 6) { msg2.textContent = "密码至少6位"; return; }
      if (pw2b && pw2b.value !== pw2) { msg2.textContent = "两次输入的密码不一致"; return; }
      msg2.textContent = "注册中...";
      withTimeout(sb.auth.signUp({ email: em2, password: pw2 }), 15000).then(function(r) {
        if (r && r.error) {
          if (String(r.error.message).indexOf("already") >= 0 || String(r.error.message).indexOf("registered") >= 0) {
            msg2.textContent = "该邮箱已注册，请去登录页登录";
          } else {
            msg2.textContent = "注册失败：" + r.error.message;
          }
          return;
        }
        // 新账号隔离：备份并清空本机旧学习数据，避免串号
        backupThenResetLearning();
        // 注册成功，尝试自动登录
        return withTimeout(sb.auth.signInWithPassword({ email: em2, password: pw2 }), 15000).then(function(r2) {
          if (!r2 || r2.error) {
            msg2.textContent = "注册成功！请去登录页登录";
            return;
          }
          state.user = r2.data.user;
          try { localStorage.removeItem("gxzsb.guest"); } catch (e) {}
          stopRealtime();
          msg2.textContent = "注册成功，正在进入...";
          go("home"); render();
          pullAndMerge().then(subscribeRealtime);
        });
      }).catch(function (err) {
        if (err && err.message === "timeout") {
          msg2.textContent = "注册超时（15s），请检查网络后重试；若已注册成功可直接登录";
        } else {
          msg2.textContent = "注册失败：" + (err && err.message ? err.message : "网络异常") + "，可重试";
        }
      });
    } else if (act === "guest") {
      state.user = { isGuest: true };
      try { localStorage.setItem("gxzsb.guest", "1"); } catch (e) {}
      go("home"); render();
    } else if (act === "sync-now") {
      if (!activeUser()) { toastLite("请先登录"); return; }
      pullAndMerge().then(function () {
        if (syncUI.status !== "ok") setSyncStatus("ok");
        toastLite("已同步");
      });
    } else if (act === "set-nick") {
      const cur = load("gxzsb.nick", "专升本备考人");
      const n = prompt("输入昵称：", cur);
      if (n && n.trim()) { save("gxzsb.nick", n.trim()); render(); }
    } else if (act === "export-all") {
      const data = collectExportData(localStorage);
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "gxzsb-backup-" + localDayKey() + ".json";
      a.click();
      URL.revokeObjectURL(a.href);
    } else if (act === "import") {
      const inp = document.createElement("input");
      inp.type = "file"; inp.accept = ".json,application/json";
      inp.onchange = function() {
        const f = inp.files[0]; if (!f) return;
        const r = new FileReader();
        r.onload = function() {
          let data;
          try {
            data = JSON.parse(r.result);
          } catch(e) {
            alert("备份文件不是合法 JSON，请选择正确的 .json 备份");
            return;
          }
          if (!data || typeof data !== "object" || Array.isArray(data)) {
            alert("备份文件格式错误：应为 JSON 对象");
            return;
          }
          const picked = filterImportKeys(data);
          const ignored = Object.keys(data).filter(function (k) { return !isImportKey(k); });
          if (!Object.keys(picked).length) {
            alert("未找到可导入的 gxzsb.* 数据" + (ignored.length ? "（已忽略非法 key：" + ignored.slice(0, 5).join(", ") + "）" : ""));
            return;
          }
          Object.keys(picked).forEach(function (k) { save(k, picked[k]); });
          alert("导入成功！共恢复 " + Object.keys(picked).length + " 项" + (ignored.length ? "，已忽略非法 key " + ignored.length + " 项" : "") + "。页面将刷新");
          location.reload();
        };
        r.onerror = function() { alert("读取备份文件失败"); };
        r.readAsText(f);
      };
      inp.click();
    } else if (act === "theme") {
      state.theme = saveThemeSafe(state.theme === "dark" ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", state.theme);
    } else if (act === "logout") {
      stopRealtime();
      if (sb) sb.auth.signOut();
      state.user = null;
      try { localStorage.removeItem("gxzsb.guest"); } catch (e) {}
      // 退出登录 ≠ 清数据：保留本机学习记录，仅回登录页并隐藏侧栏/底栏
      hideNav();
      go("login"); render();
    } else if (act === "reset-study") {
      if (!confirm("重置学习记录？（做题/错题/收藏/笔记/打卡将清空，并同步到已登录的其它设备；主题与登录状态保留）")) return;
      const resetAt = resetLearningData();
      if (activeUser()) {
        // 立即推送空学习数据 + resetAt，手机等设备下次拉取会清空而不是合并回旧数据
        pushProgress(emptyStudyPayload(resetAt, load("gxzsb.nick", null)));
      }
      alert("学习记录已重置（已登录设备将自动同步）");
      render();
    } else if (act === "clear") {
      if (!confirm("清除本机全部数据？（含主题、备份与学习记录；登录会话也会结束；若已登录将同步清空云端进度）")) return;
      const u = activeUser();
      try {
        Object.keys(localStorage).forEach((k) => {
          if (k.indexOf("gxzsb") === 0) localStorage.removeItem(k);
        });
      } catch (e) {}
      const clearCloud = u && sb
        ? sb.from("progress").delete().eq("user_id", u.id).then(function () {
            return sb.auth.signOut();
          }).catch(function () { return sb.auth.signOut(); })
        : (sb ? sb.auth.signOut() : Promise.resolve());
      Promise.resolve(clearCloud).finally(function () {
        state.user = null;
        location.reload();
      });
    } else if (act === "report") go("report");
    else if (act === "exam-info") go("exam-info");
    else if (act === "ai-deepseek" || act === "ai-doubao" || act === "ai-copy") {
      const qq = qById(t.getAttribute("data-id")) || (state.session && state.session.q[state.session.i]);
      if (!qq) return;
      const prompt = buildAiPrompt(qq);
      if (act === "ai-copy" || true) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(prompt).then(function () {
            toastLite("题目已复制");
          }).catch(function () {
            fallbackCopy(prompt);
          });
        } else {
          fallbackCopy(prompt);
        }
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
      var q = parseInt(t.getAttribute("data-v"));
      window.WORDS.markWord(w.id, q);
      state.wbLearn.i++;
      state.wbLearn.flipped = false;
      render();
    } else if (act === "wb-mark-review") {
      if (!state.wbReview) return;
      var w2 = state.wbReview.list[state.wbReview.i];
      var q2 = parseInt(t.getAttribute("data-v"));
      window.WORDS.markWord(w2.id, q2);
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
      state.theme = saveThemeSafe(state.theme === "dark" ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", state.theme);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const m = document.getElementById("qaModal");
      if (m) { closeModal(); return; }
    }
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    const s = state.session;
    if (state.route !== "practice" || !s) return;
    const map = { a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
    const q = s.q[s.i];
    if (e.key >= "1" && e.key <= "4" && !s.submitted) {
      const opt = (q.options || [])[+e.key - 1];
      if (opt) {
        s.sel = opt;
        saveSession();
        render();
      }
    } else if (map[e.key] != null && !s.submitted) {
      const opt = (q.options || [])[map[e.key]];
      if (opt) {
        s.sel = opt;
        saveSession();
        render();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (!s.submitted) { submitQ(); }
      else { nextQ(); saveSession(); }
    } else if (e.key === "ArrowRight") { nextQ(); saveSession(); }
    else if (e.key === "ArrowLeft") { prevQ(); saveSession(); }
  });

  /* ===== P1-M1 软键盘适配：visualViewport 监听，聚焦时把当前题目滚动到可视区 ===== */
  (function setupSoftKeyboard() {
    if (!window.visualViewport) return;
    var vv = window.visualViewport;
    var scrollTimer = null;
    function onViewportChange() {
      // 键盘高度 = 视口高度 - 视觉视口高度
      var kbH = window.innerHeight - vv.height;
      document.body.style.setProperty("--keyboard-h", kbH + "px");
      var active = document.activeElement;
      if (active && /input|textarea/i.test(active.tagName)) {
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
          // 把聚焦元素滚动到视口中部（考虑键盘高度）
          active.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 120);
      }
    }
    vv.addEventListener("resize", onViewportChange);
    vv.addEventListener("scroll", onViewportChange);
    // 聚焦时主动触发一次
    document.addEventListener("focusin", function (e) {
      if (/input|textarea/i.test(e.target.tagName)) {
        // 软键盘弹出后把输入框滚到可视区中央，避免被键盘遮挡
        setTimeout(function () {
          onViewportChange();
          try {
            var el = e.target;
            var r = el.getBoundingClientRect();
            if (r.bottom > window.innerHeight - 80 || r.top < 60) {
              el.scrollIntoView({ block: "center", behavior: "smooth" });
            }
          } catch (err) {}
        }, 300); // iOS 键盘弹出时机晚于 focus
      }
    });
  })();

  /* ===== P1-M2 手势：做题页左右滑切题；错题/收藏列表长按快捷菜单 ===== */
  (function setupGestures() {
    var touchStartX = 0, touchStartY = 0, touchStartTime = 0, longPressTimer = null, longFired = false;
    document.addEventListener("touchstart", function (e) {
      if (!e.touches.length) return;
      var t = e.touches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
      touchStartTime = Date.now();
      longFired = false;
      // 长按检测：只在错题/收藏列表行上生效
      var row = e.target.closest(".list-row, [data-act='open-q']");
      if (row && state.route === "wrong") {
        if (longPressTimer) clearTimeout(longPressTimer);
        longPressTimer = setTimeout(function () {
          longFired = true;
          if (navigator.vibrate) navigator.vibrate(10);
          var id = row.getAttribute("data-id");
          if (!id) return;
          var w = state.wrong[id];
          if (!w) return;
          if (w.mastered) {
            confirmModal("恢复错题", "把这道题恢复到待复习队列？", function () {
              w.mastered = false; w.due = Date.now();
              save(LS.wrong, state.wrong); scheduleSync();
              toastLite("已恢复到待复习"); render();
            });
          } else {
            confirmModal("标记已掌握", "把这道题标记为已掌握？将从待复习队列移除。", function () {
              w.mastered = true; w.due = Number.MAX_SAFE_INTEGER;
              save(LS.wrong, state.wrong); scheduleSync();
              toastLite("已标记掌握"); render();
            });
          }
        }, 500);
      }
    }, { passive: true });
    document.addEventListener("touchmove", function (e) {
      // 手指移动超过 10px 就取消长按（认为是滚动）
      if (longPressTimer && e.touches.length) {
        var t = e.touches[0];
        if (Math.abs(t.clientX - touchStartX) > 10 || Math.abs(t.clientY - touchStartY) > 10) {
          clearTimeout(longPressTimer); longPressTimer = null;
        }
      }
    }, { passive: true });
    document.addEventListener("touchend", function (e) {
      if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
      if (longFired) { e.preventDefault(); return; }
      if (!e.changedTouches.length) return;
      var t = e.changedTouches[0];
      var dx = t.clientX - touchStartX;
      var dy = t.clientY - touchStartY;
      var dt = Date.now() - touchStartTime;
      // 左右滑切题：水平 >50px，垂直 <30px，时间 <500ms
      if (state.route !== "practice" || !state.session) return;
      if (Math.abs(dx) < 50 || Math.abs(dy) > 30 || dt > 500) return;
      // 不要在 input 聚焦时切题
      if (document.activeElement && /input|textarea/i.test(document.activeElement.tagName)) return;
      if (dx < 0) { nextQ(); saveSession(); }
      else { prevQ(); saveSession(); }
    });
  })();

  window.addEventListener("hashchange", render);
  // 数据后台静默加载完成：重建题库快照并重新渲染（app.js 先于数据就绪注入）
  window.addEventListener("gxzsb:data-ready", function () {
    D = window.STUDY_DATA || {};
    Q = buildQ(D);
    Q_BY_ID = new Map(Q.map((q) => [q.id, q]));
    _subjTotalCache = null;  // 题库加载完，清空科目总数缓存
    restoreSession();
    render();
    ensureExamTimer();
  });
  document.documentElement.setAttribute("data-theme", state.theme);
  applyFontSize();
  // 密码不落 localStorage（若历史版本写过则清除）
  scrubPasswords();
  // 闲置自动登出：任意交互续期
  ["click", "keydown", "pointerdown", "touchstart"].forEach(function (ev) {
    document.addEventListener(ev, resetIdleTimer, { passive: true });
  });
  resetIdleTimer();
  // 登录/注册表单：在邮箱或密码框按回车，等价于点击提交按钮
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    var el = e.target;
    if (el && el.id && /^login(Email|Pwd|Pwd2)$/.test(el.id)) {
      var btn = document.querySelector(".login-submit");
      if (btn) { e.preventDefault(); btn.click(); }
    }
  });
  // 恢复游客模式：曾选择“先逛逛”的用户，刷新后仍保持游客，不再被弹回登录页
  var _guestFlag = false;
  try { _guestFlag = localStorage.getItem("gxzsb.guest") === "1"; } catch (e) {}
  if (_guestFlag) state.user = { isGuest: true };
  // 恢复Supabase session
  if (sb) {
    sb.auth.getSession().then(function(res) {
      state.authLoading = false;
      if (res.data.session) {
        state.user = res.data.session.user;
        pullAndMerge().then(subscribeRealtime);
      } else if (!_guestFlag) {
        state.user = null;
      }
      render();
      resetIdleTimer();
    });
  } else {
    state.authLoading = false;
  }
  // 恢复上次答题
  var restored = restoreSession();
  if (restored && !location.hash) { location.hash = "#/practice"; }
  render();
  ensureExamTimer();
})();
