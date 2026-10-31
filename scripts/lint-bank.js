/* 题库 lint：不依赖浏览器，直接静态校验题库数据的可加载性与可作答性。
 * 拦截三类事故：
 *  1) 文件语法错误（浏览器会静默整文件丢弃，导致整科题目消失）
 *  2) 题目永远答不对（选择题答案不在选项里 / 判断题答案非法 / 选项重复）
 *  3) 题目在 UI 里找不到（chapter 未在大纲声明、重复 id、必填字段缺失）
 * 用法：node scripts/lint-bank.js   有错退出码 1
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let errors = 0;
let warnings = 0;
function err(msg) { console.log("  ERROR " + msg); errors++; }
function warn(msg) { console.log("  WARN  " + msg); warnings++; }
function pass(msg) { console.log("  OK    " + msg); }

const SUBJECTS = ["高等数学", "英语", "电工电子技术基础", "C语言程序设计", "计算机网络基础"];
const MAIN_BANK = ["all-bank.js", "math-bank.js", "english-bank.js", "ee-bank.js", "c-bank.js", "net-bank.js"];
const CHOICE_TYPES = ["single", "choice"];

// 运行时会被加载的根目录脚本（out-* 为旧生成物，不参与）
const RUNTIME_JS = [
  "app.js", "boot.js", "sb-config.js",
  "all-bank.js", "math-bank.js", "english-bank.js", "ee-bank.js", "c-bank.js", "net-bank.js",
  "mock-bank.js", "english-extra.js", "wordbook.js", "formula-book.js",
  "all-learn.js", "learn-book-2027.js", "exam-plans-v2.js", "kp-detail.js", "syllabus.js",
].filter((f) => fs.existsSync(path.join(root, f)));

function loadWindow(files) {
  const ctx = { window: {}, console: { log() {}, warn() {}, error() {} } };
  vm.createContext(ctx);
  files.forEach((f) => {
    vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f, timeout: 60000 });
  });
  return ctx.window;
}

console.log("[1] 运行时 JS 语法检查（整文件语法错误会让整科题目静默丢失）");
RUNTIME_JS.forEach((f) => {
  try {
    new vm.Script(fs.readFileSync(path.join(root, f), "utf8"), { filename: f });
    pass(f + " 可解析");
  } catch (e) {
    err(f + " 解析失败: " + e.message.split("\n")[0]);
  }
});

console.log("[2] 主题库结构（五科合并到 window.STUDY_DATA）");
let win;
try {
  win = loadWindow(MAIN_BANK);
} catch (e) {
  err("主题库加载失败，后续校验中止: " + e.message);
  finish();
  return;
}
const D = win.STUDY_DATA;
const Q = (D && D.questions) || [];
if (!D) err("window.STUDY_DATA 不存在");
if (Q.length === 1500) pass("主题库 1500 题 (" + Q.length + ")");
else err("主题库应为 1500 题，实际 " + Q.length);

const bySubj = {};
Q.forEach((q) => { bySubj[q.subject] = (bySubj[q.subject] || 0) + 1; });
SUBJECTS.forEach((s) => {
  const n = bySubj[s] || 0;
  if (n === 300) pass(s + " 300 题");
  else err(s + " 应为 300 题，实际 " + n);
});

// 大纲二级章节
const validChapters = {};
(D.chapters || []).forEach((top) => {
  (top.children || []).forEach((ch) => { validChapters[ch.id] = { subject: top.subject, title: ch.title }; });
});

console.log("[3] 逐题校验（字段 / 答案可作答 / 章节归属 / 重复 id）");
const idSeen = {};
let chapterBad = 0;
Q.forEach((q) => {
  const loc = q.id || "(无id)";
  ["id", "subject", "type", "stem", "answer"].forEach((k) => {
    if (q[k] == null || q[k] === "") err(loc + " 缺少必填字段 " + k);
  });
  if (idSeen[q.id]) err("重复题目 id: " + q.id);
  idSeen[q.id] = 1;

  if (SUBJECTS.indexOf(q.subject) === -1) err(loc + " subject 非法: " + q.subject);
  if (![1, 2, 3].includes(q.difficulty)) err(loc + " difficulty 非 1/2/3: " + q.difficulty);
  if (!q.analysis || !String(q.analysis).trim()) warn(loc + " 无解析");

  if (CHOICE_TYPES.includes(q.type)) {
    if (!Array.isArray(q.options) || q.options.length < 2) {
      err(loc + " 选择题 options 缺失或不足 2 项");
    } else {
      // 判分逻辑是 opt === q.answer，答案必须严格命中某个选项，否则永远答不对
      if (q.options.indexOf(q.answer) === -1) {
        err(loc + " 答案不在选项中，该题无法答对：answer=" + JSON.stringify(q.answer) + " options=" + JSON.stringify(q.options).slice(0, 80));
      }
      if (new Set(q.options.map(String)).size !== q.options.length) {
        err(loc + " 选项存在重复: " + JSON.stringify(q.options));
      }
    }
  } else if (q.type === "judge") {
    if (["正确", "错误"].indexOf(q.answer) === -1) err(loc + " 判断题答案非法: " + JSON.stringify(q.answer));
  } else {
    if (!q.answer || !String(q.answer).trim()) err(loc + " 非选择题答案为空");
  }

  if (q.chapter && !validChapters[q.chapter]) {
    err(loc + " [" + q.subject + "] chapter=" + q.chapter + " 未在大纲声明（按章节练习无法触达）");
    chapterBad++;
  }
});
if (chapterBad === 0) pass("所有题目 chapter 均在大纲中");
pass("题目 id 唯一 (" + Object.keys(idSeen).length + ")");

// 每个大纲章节至少有题（防止配置了空章节）
const chapterCount = {};
Q.forEach((q) => { chapterCount[q.chapter] = (chapterCount[q.chapter] || 0) + 1; });
const emptyChapters = Object.keys(validChapters).filter((id) => !chapterCount[id]);
if (emptyChapters.length === 0) pass("所有大纲章节均有题 (" + Object.keys(validChapters).length + " 个)");
else warn("大纲章节无题: " + emptyChapters.join(", "));

console.log("[4] 模拟题库 mock-bank（独立约定：选择题答案为字母 A/B/C/D）");
let M;
try {
  M = loadWindow(["mock-bank.js"]).MOCK_BANK;
} catch (e) {
  err("mock-bank.js 加载失败: " + e.message);
  finish();
  return;
}
if (M) {
  const mq = M.questions || [];
  if (mq.length === (M.meta && M.meta.totalQuestions)) {
    pass("mock 题数 " + mq.length + " 与 meta 声明一致");
  } else {
    err("mock 实际 " + mq.length + " 题，meta 声明 " + (M.meta && M.meta.totalQuestions));
  }
  const validTags = [];
  Object.values(M.meta.categories || {}).forEach((o) => Object.keys(o).forEach((k) => validTags.push(k)));
  const mSeen = {};
  mq.forEach((q) => {
    const loc = q.id || "(无id)";
    ["id", "tag", "type", "stem", "answer"].forEach((k) => {
      if (q[k] == null || q[k] === "") err("mock " + loc + " 缺字段 " + k);
    });
    if (mSeen[q.id]) err("mock 重复 id: " + q.id);
    mSeen[q.id] = 1;
    if (validTags.indexOf(q.tag) === -1) err("mock " + loc + " 未声明标签: " + q.tag);
    if (CHOICE_TYPES.includes(q.type)) {
      if (!Array.isArray(q.options) || q.options.length < 2) {
        err("mock " + loc + " options 异常");
      } else {
        const a = String(q.answer == null ? "" : q.answer).trim();
        if (/^[A-Z]+$/.test(a)) {
          if (a.charCodeAt(0) - 65 >= q.options.length) err("mock " + loc + " 字母答案 " + a + " 超出选项数");
        } else if (q.options.indexOf(q.answer) === -1) {
          err("mock " + loc + " 内容答案不在选项: " + JSON.stringify(q.answer));
        }
      }
    } else if (q.type === "judge") {
      if (["正确", "错误", "A", "B"].indexOf(String(q.answer)) === -1) err("mock " + loc + " judge 答案非法: " + q.answer);
    }
  });
  pass("mock 标签/答案/id 校验完成 (" + mq.length + " 题)");
}

function finish() {
  console.log("\n" + (errors ? "LINT FAILED：" + errors + " 个错误" : "LINT PASSED") + (warnings ? "，" + warnings + " 个警告" : ""));
  process.exit(errors ? 1 : 0);
}
finish();
