/* 按科目拆分 all-bank.js 的 questions 数组 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "all-bank.js");
const content = fs.readFileSync(src, "utf8");

// Find questions assignment line and extract the array
const lines = content.split("\n");
let questionsLine = "";
let metaLine = "";
for (const line of lines) {
  if (line.startsWith("window.STUDY_DATA.questions")) {
    questionsLine = line;
  } else if (line.startsWith("window.STUDY_DATA.meta")) {
    metaLine = line;
  }
}

if (!questionsLine) {
  console.error("Cannot find questions line");
  process.exit(1);
}

// Extract: window.STUDY_DATA.questions = [...];
const eqIdx = questionsLine.indexOf("=");
let jsonStr = questionsLine.slice(eqIdx + 1).trim();
// Remove trailing semicolon
if (jsonStr.endsWith(";")) jsonStr = jsonStr.slice(0, -1);

console.log("Parsing questions JSON...");
const questions = JSON.parse(jsonStr);
console.log(`Total questions: ${questions.length}`);

// Group by subject
const bySubject = {};
questions.forEach((q) => {
  const subj = q.subject || "unknown";
  if (!bySubject[subj]) bySubject[subj] = [];
  bySubject[subj].push(q);
});

console.log("\nBy subject:");
Object.keys(bySubject).forEach((k) => {
  console.log(`  ${k}: ${bySubject[k].length} questions`);
});

// Write per-subject files
const subjectFiles = {
  "高等数学": "bank-math.js",
  "英语": "bank-en.js",
  "电工电子技术基础": "bank-ee.js",
  "C语言程序设计": "bank-c.js",
  "计算机网络基础": "bank-net.js",
};

Object.keys(bySubject).forEach((subj) => {
  const fname = subjectFiles[subj] || `bank-${subj}.js`;
  const fpath = path.join(root, fname);
  const data = JSON.stringify(bySubject[subj]);
  const header = `/* gxzsb ${subj}题库 · ${bySubject[subj].length}题 */\nwindow.STUDY_DATA = window.STUDY_DATA || {};\nwindow.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat(`;
  const footer = `);\n`;
  fs.writeFileSync(fpath, header + data + footer, "utf8");
  const sizeKB = (fs.statSync(fpath).size / 1024).toFixed(1);
  console.log(`  Written: ${fname} (${sizeKB} KB)`);
});

// Write a slim all-bank.js that only has meta + initialization
const metaMatch = content.match(/window\.STUDY_DATA\.meta\s*=\s*(\{[\s\S]*?\});/);
const meta = metaMatch ? metaMatch[1] : "{}";
const slimContent = `/* gxzsb 题库入口 · 仅 meta，题目按科目分片加载 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.meta = ${meta};
window.STUDY_DATA.questions = window.STUDY_DATA.questions || [];
`;
fs.writeFileSync(path.join(root, "all-bank-slim.js"), slimContent, "utf8");
console.log(`\nWritten: all-bank-slim.js (meta only)`);
console.log("\nDone! Now update index.html to load per-subject files instead of all-bank.js");
