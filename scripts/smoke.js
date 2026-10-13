/* 基线 smoke + T1–T8 缺陷修复回归（不依赖浏览器） */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let failed = 0;
function ok(cond, msg) {
  if (cond) console.log("  OK  " + msg);
  else {
    console.log("  FAIL " + msg);
    failed++;
  }
}

console.log("[1] 语法检查");
["app.js", "all-bank.js", "all-learn.js", "learn-book-2027.js", "formula-book.js", "wordbook.js", "exam-plans-v2.js", "sb-config.js", "syllabus.js"].forEach((f) => {
  try {
    new vm.Script(fs.readFileSync(path.join(root, f), "utf8"), { filename: f });
    ok(true, f + " 可解析");
  } catch (e) {
    ok(false, f + " 解析失败: " + e.message);
  }
});

console.log("[2] 公开 API window.STUDY_DATA");
const ctx = { window: {}, console: { log() {}, warn() {}, error() {} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "all-bank.js"), "utf8"), ctx, { timeout: 60000 });
const D = ctx.window.STUDY_DATA;
ok(!!D, "STUDY_DATA 存在");
ok(Array.isArray(D.questions) && D.questions.length === 1500, "questions 精选1500 (" + (D.questions || []).length + ")");
{
  const by = {};
  (D.questions || []).forEach((q) => { by[q.subject] = (by[q.subject] || 0) + 1; });
  ok(Object.keys(by).length === 5 && Object.values(by).every((n) => n === 300), "每科300题 " + JSON.stringify(by));
}
ok(!!D.chapters && D.chapters.length >= 5, "chapters 存在");
ok(!!D.subjects, "subjects 存在");
ok(!!D.EXAM_PLANS, "EXAM_PLANS 存在");

const ids = (D.questions || []).map((q) => q.id);
ok(new Set(ids).size === ids.length, "题目 id 无重复");

console.log("[3] 每日 30 题种子稳定");
function seededPick(idArr, seedStr, n) {
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
  const arr = idArr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (rnd() * (i + 1)) | 0;
    const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr.slice(0, n);
}
const a = seededPick(ids, "gxzsb-daily-2026-10-12", 30);
const b = seededPick(ids, "gxzsb-daily-2026-10-12", 30);
const c = seededPick(ids, "gxzsb-daily-2026-10-13", 30);
ok(a.length === 30, "每日抽 30 题");
ok(a.join(",") === b.join(","), "同日种子结果稳定");
ok(a.join(",") !== c.join(","), "跨日种子结果不同");

console.log("[4] 顺序练习语义（ordered 不 shuffle）");
function orderedSlice(pool, limit) {
  const p = pool.slice().sort((x, y) => (x._ord || 0) - (y._ord || 0));
  return limit ? p.slice(0, limit) : p;
}
const sample = D.questions.slice(0, 50).map((q, i) => ({ id: q.id, _ord: i }));
const s1 = orderedSlice(sample, 20).map((q) => q.id);
const s2 = orderedSlice(sample, 20).map((q) => q.id);
ok(s1.join(",") === s2.join(","), "ordered 取前 N 稳定");
ok(s1[0] === sample[0].id, "ordered 从题库原顺序开始");

console.log("[5] index.html 引用文件均存在");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const refs = [...html.matchAll(/src="([^"]+\.js[^"]*)"/g)].map((m) => m[1].split("?")[0]);
refs.forEach((r) => {
  if (/^https?:/.test(r)) return;
  ok(fs.existsSync(path.join(root, r)), "引用存在: " + r);
});

/* ========== T1–T8 回归 ========== */
const appSrc = fs.readFileSync(path.join(root, "app.js"), "utf8");

console.log("[6] T1 路由规范化");
ok(/location\.hash\s*=\s*"#\/practice"/.test(appSrc), "恢复会话使用 #/practice");
ok(!/location\.hash\s*=\s*"#practice"/.test(appSrc), "不再写 #practice（缺斜杠）");
const hashAssigns = [...appSrc.matchAll(/location\.hash\s*=\s*"([^"]+)"/g)].map((m) => m[1]);
const badHash = hashAssigns.filter((h) => /^#[^/]/.test(h));
ok(badHash.length === 0, "全库 location.hash 字面量均以 #/ 开头 (" + hashAssigns.join(", ") + ")");

// 抽取纯函数
const mBegin = appSrc.indexOf("/* __QA_PURE_BEGIN__");
const mEnd = appSrc.indexOf("/* __QA_PURE_END__");
ok(mBegin >= 0 && mEnd > mBegin, "找到 QA 纯函数标记");
const pureSrc = appSrc.slice(mBegin, mEnd);
const pureCtx = { console };
vm.createContext(pureCtx);
vm.runInContext(pureSrc + "\n;this.__QA = { localDayKey, normalizeHashPath, normalizeFilters, normAns, extractSmartPoints, smartGrade };", pureCtx, { timeout: 5000 });
const QA = pureCtx.__QA;
ok(!!QA && typeof QA.normalizeHashPath === "function", "纯函数可抽取");

ok(QA.normalizeHashPath("#practice") === "practice", "#practice → practice");
ok(QA.normalizeHashPath("#/practice") === "practice", "#/practice → practice");
ok(QA.normalizeHashPath("#//practice") === "practice", "#//practice → practice");
ok(QA.normalizeHashPath("") === "home", "空 hash → home");
ok(QA.normalizeHashPath("#/subject/math") === "subject/math", "#/subject/math → subject/math");
ok(appSrc.includes("normalizeHashPath") && /parseHash\s*\(\)\s*\{[\s\S]*?normalizeHashPath/.test(appSrc), "parseHash 使用 normalizeHashPath");

console.log("[7] T2 存储兼容 filters / JSON 损坏");
const emptyF = QA.normalizeFilters(null);
ok(Array.isArray(emptyF.diff) && Array.isArray(emptyF.kind), "normalizeFilters(null) 全数组");
const partial = QA.normalizeFilters({ diff: ["基础"] });
ok(Array.isArray(partial.kind) && partial.kind.length === 0, "缺 kind 补 []");
ok(Array.isArray(partial.type) && Array.isArray(partial.status), "缺 type/status 补 []");
const bad = QA.normalizeFilters({ diff: "oops", kind: 1 });
ok(Array.isArray(bad.diff) && bad.diff.length === 0, "非数组字段回落 []");
ok(appSrc.includes("normalizeFilters(load("), "filters 读入走 normalizeFilters");
ok(/const load = \(k, fb\)[\s\S]{0,220}catch/.test(appSrc), "load 捕获 JSON 异常返回默认值");

console.log("[8] T3 模拟考倒计时 / 交卷 / end 持久化");
ok(/formatMMSS/.test(appSrc) && /examTimer/.test(appSrc), "存在 mm:ss 倒计时 UI");
ok(/submitExam/.test(appSrc) && /data-act="submit-exam"/.test(appSrc), "存在交卷按钮与 submitExam");
ok(/未作答题目将按错误计分/.test(appSrc), "交卷确认文案：未答按错");
ok(/lastSeenAt/.test(appSrc) && /Math\.max\(Date\.now\(\),\s*Number\(s\.lastSeenAt\)/.test(appSrc), "系统时间回拨用 lastSeenAt 保护");
ok(/end:\s*opts\.minutes/.test(appSrc), "startSession 按 minutes 写 end");
ok(/end:\s*d\.end\s*\|\|\s*null/.test(appSrc), "restoreSession 恢复 end");
ok(/examTimerId/.test(appSrc) && /setInterval\(tickExamTimer/.test(appSrc), "倒计时 interval 存在");

console.log("[9] T4 smartGrade 主观题智能评分");
ok(typeof QA.smartGrade === "function", "smartGrade 存在");
const qTranslate = {
  type: "translate",
  answer: "我们有必要掌握一门外语。",
  accept: ["我们掌握一门外语是必要的"],
  sample: "参考译文：我们有必要掌握一门外语。",
  scorePoints: ["It is necessary for sb to do 结构译对", "master 译为掌握", "语序通顺"],
};
const gEmpty = QA.smartGrade(qTranslate, "");
ok(gEmpty === 0, "空作答 0 分");
const gFull = QA.smartGrade(qTranslate, "我们有必要掌握一门外语。It is necessary for sb to do, master 掌握，语序通顺");
ok(gFull > 0.5, "覆盖要点得分>0.5 (got " + gFull + ")");
const gWeak = QA.smartGrade(qTranslate, "hello");
ok(gWeak < 0.3, "无关作答低分 (got " + gWeak + ")");
const g01 = QA.smartGrade(qTranslate, "我们有必要掌握一门外语。");
ok(g01 >= 0 && g01 <= 1, "得分落在 0–1");
ok(!/record\(q,\s*true\)/.test(appSrc.match(/translate[\s\S]{0,200}record[\s\S]{0,40}/) ? appSrc.match(/translate[\s\S]{0,200}record[\s\S]{0,40}/)[0] : ""), "translate/write 不再恒 record(true)");
ok(/smartGrade\(q/.test(appSrc), "submitQ 调用 smartGrade");
ok(/self-ok/.test(appSrc) && /self-bad/.test(appSrc), "自评按钮 我答对了/需加强");
ok(/智能评分/.test(appSrc) && /参考答案/.test(appSrc), "UI 显示智能评分与参考答案");

console.log("[10] T5 作答防抖 / 键盘 saveSession / 单反馈 / 未答入分母");
ok(/lockAction/.test(appSrc), "选项/提交防抖 lockAction");
ok(/act === "pick"[\s\S]{0,120}lockAction/.test(appSrc), "pick 走防抖");
const keydownBlock = appSrc.slice(appSrc.indexOf('document.addEventListener("keydown"'));
ok(/s\.sel = opt;\s*saveSession\(\);/.test(keydownBlock), "键盘选选项后 saveSession");
ok(/ArrowRight[\s\S]{0,40}saveSession/.test(keydownBlock), "键盘切题后 saveSession");
// 反馈条：类型分支内不再内嵌 feedback，统一由 done 块输出一次
const typeBranch = appSrc.slice(appSrc.indexOf('q.type === "translate"'), appSrc.indexOf("const ok = !!s.results[q.id]"));
ok(!/class="feedback/.test(typeBranch), "题型分支不再内嵌 feedback（单条反馈）");
ok(/正确 \/ 总题/.test(appSrc) && /含未答/.test(appSrc), "报告未答计入总分与错题");

console.log("[11] T6 本地日界 localDayKey");
ok(typeof QA.localDayKey === "function", "localDayKey 存在");
const dk = QA.localDayKey(new Date(2026, 0, 5, 0, 30, 0));
ok(dk === "2026-01-05", "本地 0 点仍属当日 (got " + dk + ")");
const dk2 = QA.localDayKey(new Date(2026, 11, 31, 23, 59, 0));
ok(dk2 === "2026-12-31", "本地月末 (got " + dk2 + ")");
ok(!/toISOString\(\)\.slice\(0,\s*10\)/.test(appSrc.match(/function touchStreak[\s\S]{0,400}/)[0]), "touchStreak 不用 UTC toISOString 分日");
ok(!/toDateString\(\)/.test(appSrc.match(/function todayDoneCount[\s\S]{0,600}/)[0]), "todayDoneCount 不用 toDateString 混日界");
ok(/function dayKey\(d\)\s*\{\s*return localDayKey\(d\);/.test(appSrc), "dayKey 别名到 localDayKey");

console.log("[12] T7 账号：注册反馈 / 无密码 / 忘记密码 / 闲置 / 锁定");
ok(/withTimeout/.test(appSrc), "存在 withTimeout");
ok(/注册超时（15s）/.test(appSrc), "注册 15s 超时提示");
ok(/注册成功/.test(appSrc), "注册成功提示");
ok(/注册失败/.test(appSrc), "注册失败提示");
ok(/scrubPasswords/.test(appSrc), "存在密码清扫 scrubPasswords");
ok(/resetPasswordForEmail/.test(appSrc), "忘记密码走 resetPasswordForEmail");
ok(/联系管理员/.test(appSrc), "无邮箱服务提示联系管理员/游客");
ok(/IDLE_LOGOUT_MS/.test(appSrc) && /2 \* 60 \* 60 \* 1000/.test(appSrc), "闲置 2h 自动登出");
ok(/loginLocked/.test(appSrc) && /noteLoginFail/.test(appSrc), "登录失败锁定计数");
ok(/Date\.now\(\) \+ 60000/.test(appSrc), "锁定 60s");
ok(/l\.fails >= 5/.test(appSrc), "失败 5 次触发锁定");
// 静态确认：localStorage 写入不含 password 字段字面量
const savePwd = appSrc.match(/localStorage\.setItem\([^)]*password[^)]*\)/gi);
ok(!savePwd || savePwd.length === 0, "无 localStorage.setItem 存 password");

console.log("[13] T8 云同步失败入队 + 轻提示");
ok(/enqueueSync/.test(appSrc), "存在 enqueueSync");
const pushBlock = appSrc.slice(appSrc.indexOf("async function pushProgress"), appSrc.indexOf("function scheduleSync"));
ok(/if \(error\)/.test(pushBlock) && /enqueueSync/.test(pushBlock), "error 分支也入队");
ok(/catch \(e\)/.test(pushBlock) && /enqueueSync/.test(pushBlock), "网络 catch 也入队");
ok(/toastLite/.test(pushBlock), "push 失败有轻提示 toast");

/* ========== T9–T12 回归 ========== */
const pureSrcFull = appSrc.slice(mBegin, mEnd);
vm.runInContext(
  pureSrcFull + "\n;this.__QA2 = { isImportKey, filterImportKeys, collectExportData, guessWrongReason, fileExtOf, smartGrade };",
  pureCtx,
  { timeout: 5000 }
);
const QA2 = pureCtx.__QA2;

console.log("[14] T9 导出/导入白名单");
ok(typeof QA2.isImportKey === "function" && typeof QA2.filterImportKeys === "function", "导入白名单纯函数存在");
ok(QA2.isImportKey("gxzsb.w3") === true, "gxzsb.w3 允许");
ok(QA2.isImportKey("gxzsb.wb.prog") === true, "gxzsb.wb.prog 允许");
ok(QA2.isImportKey("gxzsb.filters") === true, "filters 允许");
ok(QA2.isImportKey("evil.key") === false, "非 gxzsb.* 拒绝");
ok(QA2.isImportKey("password") === false, "password 拒绝");
const imported = QA2.filterImportKeys({
  "gxzsb.a3": [1],
  "gxzsb.session": { i: 1 },
  "gxzsb.wb.goal": 20,
  "gxzsb.daily30": { a: 1 },
  "gxzsb.resetAt": 123,
  notAllowed: "x",
  password: "p",
});
ok(Object.keys(imported).length === 5, "仅保留 5 个白名单 key (got " + Object.keys(imported).length + ")");
ok(!("notAllowed" in imported) && !("password" in imported), "非法 key 被忽略");
const fakeStorage = {
  length: 4,
  _k: ["gxzsb.wb.prog", "gxzsb.filters", "gxzsb.session", "evil"],
  key(i) { return this._k[i]; },
  getItem(k) {
    if (k === "gxzsb.wb.prog") return JSON.stringify({ v0001: 1 });
    if (k === "gxzsb.filters") return JSON.stringify({ diff: [] });
    if (k === "gxzsb.session") return JSON.stringify({ i: 2 });
    return null;
  },
};
const exported = QA2.collectExportData(fakeStorage);
ok(!!exported["gxzsb.wb.prog"] && !!exported["gxzsb.filters"], "导出含 wb 与 filters");
ok("gxzsb.session" in exported && "gxzsb.daily30" in exported && "gxzsb.dailySession" in exported, "导出含 session/daily30/dailySession 槽位");
ok("gxzsb.resetAt" in exported, "导出含 resetAt 槽位");
ok(!("evil" in exported), "导出不含非法 key");
ok(/collectExportData/.test(appSrc) && /filterImportKeys/.test(appSrc), "export/import 使用纯函数");
ok(/坏 JSON|不是合法 JSON|JSON 对象/.test(appSrc), "坏 JSON 有提示");
ok(/isImportKey/.test(appSrc) && /collectExportData/.test(appSrc), "导出扫描 gxzsb.*（含 wb）");
ok(QA2.collectExportData(fakeStorage)["gxzsb.wb.prog"] && QA2.isImportKey("gxzsb.wb.goal"), "gxzsb.wb.* 可导出/可导入");

console.log("[15] T10 错因 / 公式 / 下载工具");
ok(typeof QA2.guessWrongReason === "function", "guessWrongReason 存在");
ok(QA2.guessWrongReason({ type: "calc", stem: "计算下列积分" }) === "formula" || QA2.guessWrongReason({ type: "calc", stem: "计算下列积分" }) === "calc", "计算题给出错因启发");
ok(QA2.guessWrongReason({ stem: "阅读材料".padEnd(70, "。"), type: "single" }) === "read", "长题干 → read");
ok(QA2.guessWrongReason({ stem: "概念题", type: "judge" }) === "concept", "默认 concept");
ok(/reason/.test(appSrc) && /setWrongReason|set-reason/.test(appSrc), "错题记录写 reason，可改");
ok(/by-reason/.test(appSrc), "按错因补练入口存在");
ok(/按错因补练/.test(appSrc), "按错因补练文案存在");
ok(/startsWith\("\\\\frac\{"|startsWith\("frac\{"/.test(appSrc) || (appSrc.includes('\\\\frac{') && appSrc.includes('frac{')), "公式兼容 frac{ 与 \\\\frac{");
ok(/renderMath\(/.test(appSrc), "存在 renderMath");
const searchBlock = appSrc.slice(appSrc.indexOf("function viewSearch"), appSrc.indexOf("function formulaFilter"));
ok(/renderMath\(/.test(searchBlock), "搜索列表用 renderMath");
// 公式上标 ^ / 下标 _（^{...} 组内可含分式）
ok(/"math-sup"/.test(appSrc) && /"math-sub"/.test(appSrc), "公式引擎支持上标 ^ 与下标 _");
ok(/\^\{[\s\S]{0,40}?mathHtml\(inner\)|mathHtml\(inner\)/.test(appSrc), "上/下标组内递归解析（可含分式）");
const mathCssSrc = fs.readFileSync(path.join(root, "styles.css"), "utf8");
ok(/sup\.math-sup, sub\.math-sub/.test(mathCssSrc), "上/下标样式存在");
const mathFbSrc = fs.readFileSync(path.join(root, "formula-book.js"), "utf8");
ok(!/frac\{\^/.test(mathFbSrc), "公式数据无坏写法 frac{^{...}");
ok(!/\^[\s\S]{0,6}?\}\)\{/.test(mathFbSrc), "公式数据无 )}{ 残字符");
ok(typeof QA2.fileExtOf === "function" && QA2.fileExtOf("a.bin") === "bin" && QA2.fileExtOf("x.PDF") === "pdf", "fileExtOf 解析扩展名");

console.log("[16] T11 UI P2 弹窗 / 窄屏 / 滚动 / 主题备份");
ok(/qa-modal-mask/.test(appSrc) && /openModal/.test(appSrc), "自定义弹窗存在");
ok(/e\.target === mask/.test(appSrc), "点遮罩关闭弹窗");
ok(/MutationObserver/.test(appSrc) && /data-theme/.test(appSrc.slice(appSrc.indexOf("function openModal"))), "弹窗主题跟随 data-theme");
ok(/q-nav-row/.test(appSrc), "窄屏 q-actions 导航行结构");
const cssSrc = fs.readFileSync(path.join(root, "styles.css"), "utf8");
ok(/q-nav-row/.test(cssSrc), "CSS 含 q-nav-row");
ok(/flex-direction: column/.test(cssSrc) && /\.q-actions/.test(cssSrc), "q-actions 纵向：提交独占行");
ok(/max-height: 42vh/.test(cssSrc) && /overflow-y: auto/.test(cssSrc), "长题干可滚动");
ok(/\.explain-body \{ max-height/.test(cssSrc), "解析可滚动");
ok(/themeBak|gxzsb\.themeBak/.test(appSrc), "主题备份 key");
ok(/loadThemeSafe/.test(appSrc) && /saveThemeSafe/.test(appSrc), "主题读写加固");

console.log("[17] T12 死代码 / 免责 / 交互增强");
ok(!/var showNav =/.test(appSrc), "showNav 死变量已清");
ok(!/function parse\(str\)/.test(appSrc), "renderMath 死分支 parse 已清");
ok(!/fracToHtml/.test(appSrc), "renderMath 死分支 fracToHtml 已清");
const wbSrc = fs.readFileSync(path.join(root, "wordbook.js"), "utf8");
const genCount = (wbSrc.match(/function genMeaningQuiz/g) || []).length;
ok(genCount === 1, "wordbook genMeaningQuiz 仅一处定义 (got " + genCount + ")");
ok(/游客|未登录/.test(appSrc) && /已登录/.test(appSrc), "免责声明区分游客/已登录");
ok(/一键复制解析|copy-exp/.test(appSrc), "解析一键复制");
ok(/clear-wrong/.test(appSrc) && /清空错题/.test(appSrc), "错题清空入口");
ok(/confirmModal\(/.test(appSrc), "清空/退出用确认弹窗");
ok(/show-shortcuts|答题快捷键/.test(appSrc), "答题快捷键说明");
ok(/exit-exam/.test(appSrc) && /退出模拟考|退出考试/.test(appSrc), "模拟考退出二次确认");
const typeless = (appSrc.match(/<button(?![^>]*type=)[^>]*>/g) || []).length;
ok(typeless === 0, "无 typeless button (got " + typeless + ")");

/* ========== T3/T4 学习一刻 2027 ========== */
console.log("[18] T3 学习一刻数据按 2027 大纲重建");
const learnCtx = { window: {}, console: { log() {}, warn() {}, error() {} } };
vm.createContext(learnCtx);
vm.runInContext(fs.readFileSync(path.join(root, "all-learn.js"), "utf8"), learnCtx, { timeout: 10000 });
vm.runInContext(fs.readFileSync(path.join(root, "learn-book-2027.js"), "utf8"), learnCtx, { timeout: 10000 });
const LB = learnCtx.window.STUDY_DATA.LEARN_BOOK;
ok(!!LB, "LEARN_BOOK 存在");
const needSubjs = ["高等数学", "英语", "电工电子技术基础", "C语言程序设计", "计算机网络基础"];
needSubjs.forEach((s) => ok(!!LB[s] && LB[s].length >= 3, s + " 有章节 (" + ((LB[s] || []).length) + ")"));
const reqFields = ["id", "name", "outline", "plain", "steps", "example", "answer", "warn", "examTip", "relatedFormula", "level", "minutes"];
let fieldMiss = 0, shortSteps = 0, idSet = new Set(), idDup = 0, totalPts = 0;
needSubjs.forEach((s) => {
  const chs = LB[s] || [];
  let n = 0;
  chs.forEach((ch) => {
    ok(!!ch.chapter, s + " 章节名: " + (ch.chapter || "(空)"));
    (ch.points || []).forEach((p) => {
      n++;
      totalPts++;
      reqFields.forEach((k) => {
        if (p[k] == null || p[k] === "") fieldMiss++;
      });
      if (!Array.isArray(p.steps) || p.steps.length < 3) shortSteps++;
      if (idSet.has(p.id)) idDup++;
      idSet.add(p.id);
    });
  });
  ok(n >= 20, s + " 知识点 ≥20 (got " + n + ")");
});
ok(fieldMiss === 0, "知识点必填字段齐全 (miss " + fieldMiss + ")");
ok(shortSteps === 0, "steps 均 ≥3 (short " + shortSteps + ")");
ok(idDup === 0, "知识点 id 无重复");
ok(totalPts >= 100, "总知识点 ≥100 (got " + totalPts + ")");

console.log("[19] T4 学习一刻列表+详情 UI");
ok(/function viewLearn\(/.test(appSrc), "viewLearn 存在");
ok(/function viewLearnDetail\(/.test(appSrc), "viewLearnDetail 存在");
ok(/p\.plain/.test(appSrc) && /p\.steps/.test(appSrc) && /p\.examTip/.test(appSrc), "详情渲染 plain/steps/examTip");
ok(/p\.outline/.test(appSrc), "列表/详情渲染 outline 考纲标签");
ok(/ch\.chapter/.test(appSrc), "列表按大纲章节分组");
ok(/isEnLang \? escKeep/.test(appSrc), "英语不用 frac（escKeep）");
ok(/mathHtml\(/.test(appSrc), "数理用 mathHtml/frac");
ok(/learn-book-2027\.js/.test(fs.readFileSync(path.join(root, "index.html"), "utf8")), "index.html 引用 learn-book-2027.js");

console.log("[20] QA 移动端回归：主按钮 / 未答计数 / 非法科目 / 窄屏");
ok(/\.btn-accent\s*\{[^}]*background/.test(cssSrc), "CSS 定义 .btn-accent 背景（今日30题/交卷按钮可见）");
ok(/s\.unansweredAtSubmit\s*=\s*unfilled/.test(appSrc), "交卷时记录未答数");
ok(/s\.unansweredAtSubmit\s*===?\s*"number"\s*\?\s*s\.unansweredAtSubmit/.test(appSrc), "报告页读取交卷未答数");
ok(/if\s*\(!SUBJ\[name\]\)/.test(appSrc) && /未找到/.test(appSrc), "非法科目路由友好兜底");
ok(/@media\s*\(max-width:\s*360px\)/.test(cssSrc) && /\.ring\s*\{[^}]*width:\s*80px/.test(cssSrc), "320px 窄屏 hero 缩小避免折行");
ok(/safe-area-inset-top/.test(cssSrc), "移动端顶部刘海安全区");
ok(/font-size:\s*16px/.test(cssSrc) && /避免 iOS Safari 聚焦时自动放大/.test(cssSrc), "移动端输入框 16px 防 iOS 聚焦放大");

console.log("[21] 移除真题库：入口/路由/页面/事件已清除，题库保留");
ok(!/viewSchool|data-act="school"|school-practice|start-exam-paper|route === "school"|真题库/.test(appSrc), "app.js 已无真题库功能");
ok(/\.quick-3\.quick-2\s*\{[^}]*repeat\(2,\s*1fr\)/.test(cssSrc), "资料组两列网格");
ok(/quick-3 quick-2/.test(appSrc), "首页资料组改为两列");
// 题库本身不受影响：题目总数与五科分布不变
(function () {
  const qs = D.questions || [];
  ok(qs.length === 1500, "题库仍为 1500 题 (got " + qs.length + ")");
  ["高等数学","英语","电工电子技术基础","C语言程序设计","计算机网络基础"].forEach(function (name) {
    const c = qs.filter(function (q) { return q.subject === name; }).length;
    ok(c === 300, name + " 仍为 300 题 (got " + c + ")");
  });
})();

console.log(failed ? "\nSMOKE FAILED: " + failed : "\nSMOKE PASSED");
process.exit(failed ? 1 : 0);
