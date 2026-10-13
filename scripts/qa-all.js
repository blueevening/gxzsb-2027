/* T3 全量 QA：pitfalls 错配修复 + 答案-解析一致性扫描 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

const TPL_PIT = /在脑子里一行一行跑代码|注意审题与公式适用条件|改一下题里的数字/;
const PAIRS = [
  [/整除|截断小数|四舍五入/, /除|\/|%|取模|商/],
  [/时态|搭配|语态/, /时态|搭配|英语|介词|语态/],
  [/指针|解引用/, /指针|\*|&/],
  [/循环|边界/, /循环|for|while|下标|数组/],
  [/值传递|形参/, /函数|参数|形参|实参|传/],
  [/字节/, /字节|sizeof|char|int|存储/],
  [/子网|掩码|255\./, /子网|掩码|IP|地址|\/\d+/],
  [/戴维南|叠加/, /戴维南|叠加|等效|定理/],
  [/积分/, /积分|∫|原函数/],
  [/求导|导数/, /导数|求导|′|微分/],
];

function extractYicuo(an) {
  const m = String(an).match(/【易错】([\s\S]*?)(?=\n?【|$)/);
  if (!m) return [];
  return m[1].split(/[；;。]/).map((s) => s.replace(/^[①②③\d]+[.、)）]\s*/, '').trim()).filter((s) => s.length >= 4).slice(0, 3);
}
function normAns(s) {
  return String(s == null ? '' : s).replace(/\s+/g, '').replace(/^[A-Da-d][.、．]\s*/g, '').replace(/[（(].*?[)）]/g, '').toLowerCase().trim();
}

const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));

// 1) pitfalls：模板或启发式错配 → 从【易错】重提
let pitFixed = 0;
for (const q of questions) {
  const pit = (q.pitfalls || []).join(' ');
  const ctx = String(q.stem) + String(q.knowledgePoint) + String(q.analysis).slice(0, 150);
  let bad = (q.pitfalls || []).length === 0 || TPL_PIT.test(pit);
  if (!bad) {
    for (const [pitRe, ctxRe] of PAIRS) {
      if (pitRe.test(pit) && !ctxRe.test(ctx)) { bad = true; break; }
    }
  }
  if (!bad) continue;
  const ys = extractYicuo(q.analysis);
  q.pitfalls = ys.length ? ys : ['看清题目问的是定义、取值还是计算/判断结果'];
  pitFixed++;
}
console.log('pitfalls 修复:', pitFixed);

// 2) 答案-解析一致性：解析【答案】与 q.answer 比对
const mismatches = [];
const fixedAns = [];
for (const q of questions) {
  const an = String(q.analysis || '');
  const m = an.match(/【答案】([\s\S]*?)(?=【|$)/);
  if (!m) continue;
  let rawA = m[1].split(/\n/)[0].trim();
  // 取答案段第一个句子
  rawA = rawA.split(/[。；;]/)[0].trim();
  const qa = normAns(q.answer);
  const aa = normAns(rawA);
  if (!qa || !aa) continue;
  // 解析答案含 q.answer，或互相包含，或 q.answer 是字母且解析含选项文字 → 视为一致
  let ok = qa === aa || aa.indexOf(qa) >= 0 || qa.indexOf(aa) >= 0;
  if (!ok && /^[A-D]$/.test(String(q.answer).trim()) && Array.isArray(q.options)) {
    const idx = String(q.answer).trim().toUpperCase().charCodeAt(0) - 65;
    const opt = normAns(q.options[idx]);
    if (opt && (aa.indexOf(opt) >= 0 || opt.indexOf(aa) >= 0)) ok = true;
  }
  // 解析答案形如 "A. xxx" 而 q.answer 是选项文字
  if (!ok && Array.isArray(q.options)) {
    const hitOpt = q.options.some((o) => { const n = normAns(o); return n && n === aa; });
    if (hitOpt && (qa === '' || q.options.some((o) => normAns(o) === qa))) ok = true;
  }
  if (!ok) mismatches.push({ id: q.id, sub: q.subject, qAns: String(q.answer).slice(0, 40), anAns: rawA.slice(0, 50), stem: String(q.stem).slice(0, 40) });
}
console.log('答案-解析疑似不一致:', mismatches.length);
mismatches.slice(0, 40).forEach((x) => console.log(' ', JSON.stringify(x)));

lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('wrote');
