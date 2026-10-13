/* 修复 pitfalls 错配：凡 pitfalls 与题干明显无关的题，从 analysis【易错】重提 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

function extractYicuo(an) {
  const m = String(an).match(/【易错】([\s\S]*?)(?=\n?【|$)/);
  if (!m) return [];
  return m[1].split(/[；;。]/).map((s) => s.replace(/^\d+[.、)）]\s*/, '').trim()).filter((s) => s.length >= 4).slice(0, 3);
}

const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));

const pairs = [
  [/整除|截断小数|四舍五入/, /除|\/|%|取模|商/],
  [/时态|搭配|语态/, /时态|搭配|英语|介词/],
  [/指针|解引用/, /指针|\*|&/],
  [/循环|边界/, /循环|for|while|下标|数组/],
  [/值传递|形参/, /函数|参数|形参|实参|传/],
];

let fixed = 0;
for (const q of questions) {
  if (q.subject !== 'C语言程序设计') continue;
  const pit = (q.pitfalls || []).join(' ');
  const ctx = String(q.stem) + String(q.knowledgePoint) + String(q.analysis).slice(0, 150);
  let bad = false;
  for (const [pitRe, ctxRe] of pairs) {
    if (pitRe.test(pit) && !ctxRe.test(ctx)) { bad = true; break; }
  }
  if (!bad) continue;
  const ys = extractYicuo(q.analysis);
  if (ys.length) { q.pitfalls = ys; fixed++; }
  else {
    // fallback：清空模板错配，给一条中性提醒
    q.pitfalls = ['看清题目问的是定义、取值还是执行结果'];
    fixed++;
  }
  console.log('fix', q.id, '→', JSON.stringify(q.pitfalls).slice(0, 80));
}
console.log('fixed', fixed);

lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('wrote');
