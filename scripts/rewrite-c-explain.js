/* 重写 C 语言题库的 steps / pitfalls / hint：
 * 从每道题自己的 analysis 里提取针对性内容，替换批量模板骨架
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

const TPL_STEPS = /逐行分析代码执行过程|跟踪变量值的变化|和正确答案对比，哪里算错|遮住答案自己再算一遍|从初值开始，按循环\/指针规则|先写出关键变量初值|按语句顺序模拟：for 从 i=0/;
const TPL_PIT = /在脑子里一行一行跑代码|注意审题与公式适用条件|改一下题里的数字/;

function extractSection(an, names) {
  for (const n of names) {
    const m = an.match(new RegExp('【' + n + '】([\\s\\S]*?)(?=\\n?【|$)'));
    if (m && m[1].trim()) return m[1].trim();
  }
  return '';
}

function extractNumbered(seg) {
  if (!seg) return [];
  const parts = seg.split(/[①②③④⑤⑥⑦⑧⑨⑩]/).map((s) => s.trim()).filter(Boolean);
  // 无编号则按句号/换行拆
  if (parts.length <= 1) {
    return seg.split(/[\n。]+/).map((s) => s.trim()).filter((s) => s.length > 6).slice(0, 6);
  }
  return parts;
}

function extractYicuo(an) {
  const seg = extractSection(an, ['易错']);
  if (!seg) return [];
  return seg
    .split(/[；;。]/)
    .map((s) => s.replace(/^\d+[.、)）]\s*/, '').trim())
    .filter((s) => s.length >= 4)
    .slice(0, 3);
}

function shortAnswer(q) {
  let a = String(q.answer == null ? '' : q.answer);
  if (Array.isArray(q.answer)) a = q.answer.join('/');
  a = a.replace(/\s+/g, ' ').trim();
  return a.length > 24 ? a.slice(0, 24) + '…' : a;
}

function rebuildSteps(q) {
  const an = String(q.analysis || '');
  const kp = String(q.knowledgePoint || '本题考点');
  const ans = shortAnswer(q);
  const seg =
    extractSection(an, ['执行步骤/代码推演']) ||
    extractSection(an, ['推演']) ||
    extractSection(an, ['计算步骤']) ||
    extractSection(an, ['执行过程']) ||
    extractSection(an, ['步骤']) ||
    extractSection(an, ['知识点']);
  const parts = extractNumbered(seg);
  const steps = [];
  // 首条：秒懂考点（用答案或知识点）
  steps.push('【秒懂考点】' + kp + '：答案 ' + ans);
  for (const p of parts) {
    if (steps.length >= 5) break;
    const line = p.replace(/\s+/g, ' ').replace(/^【.*?】/, '').trim();
    if (!line || line === ans) continue;
    // 跳过与答案重复的孤立项
    steps.push('【' + '一二三四五'[steps.length - 1] + '】' + (line.length > 100 ? line.slice(0, 100) + '…' : line));
  }
  steps.push('【答案】' + ans);
  return steps.slice(0, 7);
}

function rebuildPitfalls(q) {
  const an = String(q.analysis || '');
  const ys = extractYicuo(an);
  if (ys.length) return ys;
  // fallback：原 pitfalls 若不是模板则保留
  const old = (q.pitfalls || []).map((s) => String(s).trim()).filter((s) => s && !TPL_PIT.test(s));
  return old.length ? old.slice(0, 3) : ['看清题干问的是定义、取值还是字节数/执行结果'];
}

function rebuildHint(q) {
  const an = String(q.analysis || '');
  const ans = shortAnswer(q);
  const kp = String(q.knowledgePoint || '');
  const shen = extractSection(an, ['审题']);
  const zsd = extractSection(an, ['知识点']);
  const focus = (shen || zsd).replace(/\s+/g, ' ').slice(0, 46);
  return '【结论】' + ans + (kp ? ' 【考点】' + kp : '') + ' 【一句话】' + focus + (focus ? '。' : '') + ' 先审题再对照选项排除。';
}

// ---- 文本手术 ----
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
if (qIdx < 0) throw new Error('questions line not found');
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));

const CQ = questions.filter((q) => q.subject === 'C语言程序设计');
let nSteps = 0, nPit = 0, nHint = 0;
const samples = [];
for (const q of CQ) {
  const st = String((q.steps || []).join('|'));
  if ((q.steps || []).length === 0 || TPL_STEPS.test(st)) {
    q.steps = rebuildSteps(q);
    nSteps++;
  }
  const pit = String((q.pitfalls || []).join('|'));
  if ((q.pitfalls || []).length === 0 || TPL_PIT.test(pit) || ((q.pitfalls || []).length === 1 && String(q.answer).trim() === pit)) {
    q.pitfalls = rebuildPitfalls(q);
    nPit++;
  }
  const hint = String(q.hint || '');
  if (hint.trim() === '' || /按循环\/指针规则逐步跟踪变量/.test(hint)) {
    q.hint = rebuildHint(q);
    nHint++;
  }
  if (samples.length < 6 && (nSteps + nPit + nHint) > 0 && ['cn1', 'cn10', 'nc1001', 'cr1', 'exam-c-2026-01', 'cx01'].includes(q.id)) {
    samples.push(q);
  }
}

console.log('重写 steps:', nSteps, '| pitfalls:', nPit, '| hint:', nHint);
console.log('\n===== 抽样 =====');
for (const q of samples) {
  console.log('\n[' + q.id + ']', String(q.stem).slice(0, 40));
  console.log(' steps:', JSON.stringify(q.steps, null, 0));
  console.log(' pitfalls:', JSON.stringify(q.pitfalls));
  console.log(' hint:', q.hint);
}

lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('\nwrote all-bank.js');
