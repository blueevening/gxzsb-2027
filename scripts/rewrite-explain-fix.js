/* T2 修正：analysis 段名包含匹配；四科 hint 全量重写；薄 steps 重建 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');
const SUBJS = ['高等数学', '英语', '电工电子技术基础', '计算机网络基础'];
const TPL_STEPS = /逐行分析代码执行过程|跟踪变量值的变化|和正确答案对比，哪里算错|遮住答案自己再算一遍|从初值开始，按循环\/指针规则|先写出关键变量初值|按语句顺序模拟：for 从 i=0|寄快递类比|逐个排除错误选项|找时间状语\/固定搭配\/从句标志|套规则：for\/since→完成时|画出已知量（U、I、R）|选公式：欧姆 U=IR|按时态\/语态\/搭配规则排除|用「电路定理」相关公式|对照四个选项的结构差异/;

function sections(an) {
  const out = [];
  const re = /【([^】]+)】([\s\S]*?)(?=【[^】]+】|$)/g;
  let m;
  while ((m = re.exec(an))) out.push({ name: m[1].trim(), body: m[2].trim() });
  return out;
}
function findSection(an, keys) {
  const list = sections(an);
  for (const k of keys) {
    const hit = list.find((s) => s.name.indexOf(k) >= 0 || k.indexOf(s.name) >= 0);
    if (hit && hit.body) return hit.body;
  }
  return '';
}
function extractNumbered(seg) {
  if (!seg) return [];
  let parts = seg.split(/[①②③④⑤⑥⑦⑧⑨⑩]/).map((s) => s.trim()).filter(Boolean);
  if (parts.length <= 1) {
    parts = seg.split(/[\n。]+/).map((s) => s.trim()).filter((s) => s.length > 6);
  }
  return parts.slice(0, 6);
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
    findSection(an, ['执行步骤/代码推演', '步骤/计算过程', '步骤', '推演', '计算步骤', '执行过程', '怎么判断', '知识点']);
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
  const focus = (findSection(an, ['审题', '知识点', '语法点/词汇']) || '').replace(/\s+/g, ' ').slice(0, 46);
  return '【结论】' + ans + (kp ? ' 【考点】' + kp : '') + ' 【一句话】' + focus + (focus ? '。' : '') + ' 先审题再对照选项排除。';
}

const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));

let nSteps = 0, nHint = 0;
for (const q of questions) {
  if (!SUBJS.includes(q.subject)) continue;
  const st = q.steps || [];
  const thin = st.length <= 2 && st.some((x) => String(x).indexOf('秒懂考点') >= 0) && st.some((x) => String(x).indexOf('答案') >= 0);
  if (st.length === 0 || TPL_STEPS.test(String(st.join('|'))) || thin) {
    q.steps = rebuildSteps(q);
    nSteps++;
  }
  // hint 全量重写
  q.hint = rebuildHint(q);
  nHint++;
}
console.log('steps 重建:', nSteps, '| hint 重写:', nHint);
for (const id of ['n01', 'exam25-net-s01', 'ne1', 'm24', 'e01', 'nn4503', 'e17']) {
  const q = questions.find((x) => x.id === id);
  if (!q) continue;
  console.log('\n[' + id + ']', String(q.stem).slice(0, 34));
  console.log(' steps:', JSON.stringify(q.steps).slice(0, 230));
  console.log(' hint:', String(q.hint).slice(0, 110));
}
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('\nwrote');
