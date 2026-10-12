/* 简易 smoke：校验题库 API、每日抽题稳定性、顺序语义（不依赖浏览器） */
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
["app.js", "all-bank.js", "all-learn.js", "wordbook.js", "exam-plans-v2.js", "sb-config.js"].forEach((f) => {
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
ok(Array.isArray(D.questions) && D.questions.length > 2000, "questions 非空 (" + (D.questions || []).length + ")");
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
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
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

console.log(failed ? "\nSMOKE FAILED: " + failed : "\nSMOKE PASSED");
process.exit(failed ? 1 : 0);
