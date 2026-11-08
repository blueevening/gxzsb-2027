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
  "english-extra.js", "wordbook.js", "formula-book.js",
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
if (Q.length >= 2000) pass("主题库 " + Q.length + " 题（≥2000）");
else err("主题库题目过少：实际 " + Q.length + "（应≥2000）");

const bySubj = {};
Q.forEach((q) => { bySubj[q.subject] = (bySubj[q.subject] || 0) + 1; });
SUBJECTS.forEach((s) => {
  const n = bySubj[s] || 0;
  if (n >= 300) pass(s + " " + n + " 题（≥300）");
  else err(s + " 题目过少：实际 " + n + "（应≥300）");
});

// 大纲二级章节
const validChapters = {};
(D.chapters || []).forEach((top) => {
  (top.children || []).forEach((ch) => { validChapters[ch.id] = { subject: top.subject, title: ch.title }; });
});

console.log("[3] 逐题校验（字段 / 答案可作答 / 章节归属 / 重复 id）");
const idSeen = {};
let chapterBad = 0;
// 子题组专用虚拟章节（阅读/阅读填空大题），不在大纲 chapters 中，属正常设计
const GROUP_VIRTUAL_CHAPTERS = { "ch-en-reading": 1, "ch-en-fill": 1 };
// 子题组大题：reading 用 subQuestions，fill 大题用 blanks；顶层无 answer 是结构设计
function groupSubs(q) {
  if (q.type === "reading") return q.subQuestions || [];
  if (q.type === "fill" && (q.subQuestions || q.blanks)) return q.subQuestions || q.blanks || [];
  return [];
}
function isGroupQuestion(q) {
  return q.type === "reading" || (q.type === "fill" && (q.subQuestions || q.blanks || []).length > 0);
}
Q.forEach((q) => {
  const loc = q.id || "(无id)";
  const isGroup = isGroupQuestion(q);
  // 组题顶层无 answer，只校验 id/subject/type/stem；其余题加验 answer
  const required = isGroup ? ["id", "subject", "type", "stem"] : ["id", "subject", "type", "stem", "answer"];
  required.forEach((k) => {
    if (q[k] == null || q[k] === "") err(loc + " 缺少必填字段 " + k);
  });
  if (idSeen[q.id]) err("重复题目 id: " + q.id);
  idSeen[q.id] = 1;

  if (SUBJECTS.indexOf(q.subject) === -1) err(loc + " subject 非法: " + q.subject);
  if (![1, 2, 3].includes(q.difficulty)) err(loc + " difficulty 非 1/2/3: " + q.difficulty);
  if (!q.analysis || !String(q.analysis).trim()) warn(loc + " 无解析");

  if (isGroup) {
    // 子题组：逐子题校验答案/选项/证据/上下文
    const subs = groupSubs(q);
    if (!subs.length) {
      err(loc + " 子题组为空");
    }
    subs.forEach((s, si) => {
      const slog = loc + "#" + (si + 1);
      if (s.answer == null || s.answer === "") err(slog + " 子题缺少 answer");
      if (!s.evidence || !String(s.evidence).trim()) err(slog + " 子题缺少 evidence");
      if (q.type === "fill" && (!s.context || !String(s.context).trim())) err(slog + " 填空子题缺少 context");
      if (Array.isArray(s.options) && s.options.length && s.options.indexOf(s.answer) === -1) {
        err(slog + " 子题答案不在选项中");
      }
    });
  } else if (CHOICE_TYPES.includes(q.type)) {
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

  // 组题虚拟章节放行；其余章节必须在大纲中
  if (q.chapter && !validChapters[q.chapter] && !GROUP_VIRTUAL_CHAPTERS[q.chapter]) {
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

function finish() {
  console.log("\n" + (errors ? "LINT FAILED：" + errors + " 个错误" : "LINT PASSED") + (warnings ? "，" + warnings + " 个警告" : ""));
  process.exit(errors ? 1 : 0);
}
finish();
