/* T2 四科解析三件套去模板：计网等 steps + 全科 hint，从各题 analysis 提取重写 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

const SUBJS = ['高等数学', '英语', '电工电子技术基础', '计算机网络基础'];
const TPL_STEPS = /逐行分析代码执行过程|跟踪变量值的变化|和正确答案对比，哪里算错|遮住答案自己再算一遍|从初值开始，按循环\/指针规则|先写出关键变量初值|按语句顺序模拟：for 从 i=0|寄快递类比|逐个排除错误选项|找时间状语\/固定搭配\/从句标志|套规则：for\/since→完成时|画出已知量（U、I、R）|选公式：欧姆 U=IR|按循环\/指针规则|按时态\/语态\/搭配规则排除|用「电路定理」相关公式|对照四个选项的结构差异/;
const TPL_HINT = /按循环\/指针规则逐步跟踪变量|用规则排除错误时态\/语态\/搭配|按「电路定理」相关公式|按时态\/语态\/搭配规则排除|从初值开始，按循环|按循环\/指针规则/;

function extractSection(an, names) {
  for (const n of names) {
    const m = an.match(new RegExp('【' + n.replace(/[/\\^$*+?.()|[\]{}]/g, '\\$&') + '】([\\s\\S]*?)(?=\\n?【|$)'));
    if (m && m[1].trim()) return m[1].trim();
  }
  return '';
}
function extractNumbered(seg) {
  if (!seg) return [];
  const parts = seg.split(/[①②③④⑤⑥⑦⑧⑨⑩]/).map((s) => s.trim()).filter(Boolean);
  if (parts.length <= 1) {
    return seg.split(/[\n。]+/).map((s) => s.trim()).filter((s) => s.length > 6).slice(0, 6);
  }
  return parts;
}
function shortAnswer(q) {
  let a = Array.isArray(q.answer) ? q.answer.join('/') : String(q.answer == null ? '' : q.answer);
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
    extractSection(an, ['怎么判断']) ||
    extractSection(an, ['知识点']);
  const parts = extractNumbered(seg);
  const steps = ['【秒懂考点】' + kp + '：答案 ' + ans];
  for (const p of parts) {
    if (steps.length >= 5) break;
    const line = p.replace(/\s+/g, ' ').replace(/^【.*?】/, '').trim();
    if (!line || line === ans) continue;
    steps.push('【' + '一二三四五'[steps.length - 1] + '】' + (line.length > 100 ? line.slice(0, 100) + '…' : line));
  }
  steps.push('【答案】' + ans);
  return steps.slice(0, 7);
}
function rebuildHint(q) {
  const an = String(q.analysis || '');
  const ans = shortAnswer(q);
  const kp = String(q.knowledgePoint || '');
  const focus = (extractSection(an, ['审题']) || extractSection(an, ['知识点'])).replace(/\s+/g, ' ').slice(0, 46);
  return '【结论】' + ans + (kp ? ' 【考点】' + kp : '') + ' 【一句话】' + focus + (focus ? '。' : '') + ' 先审题再对照选项排除。';
}

const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));

let nSteps = 0, nHint = 0;
const perSub = {};
for (const q of questions) {
  if (!SUBJS.includes(q.subject)) continue;
  perSub[q.subject] = perSub[q.subject] || { s: 0, h: 0 };
  const st = String((q.steps || []).join('|'));
  if ((q.steps || []).length === 0 || TPL_STEPS.test(st)) {
    q.steps = rebuildSteps(q);
    nSteps++;
    perSub[q.subject].s++;
  }
  const hint = String(q.hint || '');
  if (hint.trim() === '' || TPL_HINT.test(hint)) {
    q.hint = rebuildHint(q);
    nHint++;
    perSub[q.subject].h++;
  }
}
console.log('重写 steps:', nSteps, '| hint:', nHint);
console.log('分科:', JSON.stringify(perSub));
// 抽样
const picks = questions.filter((q) => ['n01', 'exam25-net-s01', 'ne1', 'e17', 'nee1001', 'm24', 'e01'].includes(q.id));
for (const q of picks) {
  console.log('\n[' + q.id + ']', String(q.stem).slice(0, 36));
  console.log(' steps:', JSON.stringify(q.steps).slice(0, 200));
  console.log(' hint:', String(q.hint).slice(0, 100));
}
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('\nwrote');
