/* Select 300 math + 300 English from all-bank.js → out-math-300.js / out-en-300.js */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'all-bank.js'), 'utf8');

function extractData(s) {
  const key = 'Object.assign(window.STUDY_DATA||{},';
  const i = s.indexOf(key);
  if (i < 0) throw new Error('cannot find Object.assign start');
  const start = i + key.length;
  let depth = 0, inStr = false, esc = false;
  for (let p = start; p < s.length; p++) {
    const c = s[p];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return JSON.parse(s.slice(start, p + 1));
    }
  }
  throw new Error('unbalanced braces');
}

const DATA = extractData(src);
const ALL = DATA.questions || [];
console.log('total questions:', ALL.length);

// ---------- normalize helpers ----------
const norm = (t) => String(t == null ? '' : t)
  .replace(/[\s\u3000]+/g, '')
  .replace(/[（）【】\[\]()，。．、;；:：!！?？"'“”‘’·—\-~～*×÷√^]/g, '')
  .toLowerCase();

const textOf = (q) => [
  q.stem, q.knowledgePoint, q.chapter,
  Array.isArray(q.options) ? q.options.join(' ') : '',
  Array.isArray(q.tags) ? q.tags.join(' ') : '',
  q.typeLabel
].join(' ');

function optionsArray(q) {
  return Array.isArray(q.options) ? q.options : null;
}

function hasStemAnswer(q) {
  return q && q.stem && String(q.stem).trim() !== '' && q.answer != null && String(q.answer).trim() !== '';
}

function isFillStyle(q) {
  const t = String(q.type || '');
  const lab = String(q.typeLabel || '');
  const s = String(q.stem || '');
  if (t === 'blank' || t === 'fill' || lab === '阅读填空' || lab === '填空') return true;
  const opts = optionsArray(q);
  const noOpts = !opts || opts.length === 0;
  return noOpts && /_+|______/.test(s) && t !== 'translate' && t !== 'write' && t !== 'judge';
}

function optionsOk(q) {
  const t = String(q.type || '');
  // fill-style / subjective types don't need options
  if (isFillStyle(q)) return true;
  if (t === 'translate' || t === 'write') return true;
  if (t === 'calc' || t === 'apply') return true;
  // MCQ / judge need valid options
  const opts = optionsArray(q);
  if (!opts) return false;
  const nonEmpty = opts.filter(o => o != null && String(o).trim() !== '');
  if (t === 'judge') return nonEmpty.length >= 2;
  if (t === 'single' || t === 'choice') {
    if (nonEmpty.length < 3) return false;
    return true;
  }
  return nonEmpty.length >= 2;
}

function answerMatchesOptions(q) {
  const t = String(q.type || '');
  if (t === 'translate' || t === 'write' || t === 'calc' || t === 'apply') return true;
  if (isFillStyle(q)) return true;
  const opts = optionsArray(q);
  if (!opts) return false;
  const labels = opts.map(o => norm(o));
  const ansRaw = String(q.answer).trim();
  // letter answer
  if (/^[A-Da-d]$/.test(ansRaw)) {
    const idx = ansRaw.toUpperCase().charCodeAt(0) - 65;
    return idx >= 0 && idx < opts.length;
  }
  if (Array.isArray(q.answer)) {
    return q.answer.every(a => labels.includes(norm(a)) || /^[A-D]$/.test(String(a).trim().toUpperCase()));
  }
  const ans = norm(ansRaw);
  if (labels.includes(ans)) return true;
  if (Array.isArray(q.accept) && q.accept.map(norm).some(a => labels.includes(a))) return true;
  // sometimes answer is the option letter stored differently
  return false;
}

function notTooHard(q) {
  const d = Number(q.difficulty || 1);
  return d >= 1 && d <= 3;
}

// Out-of-syllabus (2027 专升本高数 / 高职英语)
function inSyllabus(q, subject) {
  const text = textOf(q);
  if (subject === '高等数学') {
    // beyond 专升本高数大纲
    const bad = /二重积分|三重积分|曲线积分|曲面积分|级数|傅里叶|拉普拉斯|偏导|梯度|方向导数|矩阵|行列式|概率论|数理统计|复变|向量代数|空间解析|泰勒展开|幂级数|罗尔定理|拉格朗日中值|柯西中值|曲率|渐近线|反常积分|瑕积分|无穷限积分|多元函数|重积分|格林公式|高斯公式|斯托克斯|差分方程|复数/;
    return !bad.test(text);
  }
  if (subject === '英语') {
    const bad = /雅思|托福|GRE|专八|专四|文学鉴赏|莎士比亚|诗歌鉴赏|文言文/;
    return !bad.test(text);
  }
  return true;
}

function isGarbled(q) {
  const lab = String(q.typeLabel || '');
  if (lab.includes('乱码')) return true;
  const s = String(q.stem || '');
  // broken latex-ish fragments that lost backslashes / braces
  if (/frac\{\d+\}/.test(s) && !/\\frac/.test(s)) return true;
  // replacement char
  if (s.includes('\uFFFD')) return true;
  return false;
}

// ---------- bucket mapping ----------
function mathBucket(q) {
  const t = String(q.type || '');
  const lab = String(q.typeLabel || '');
  if (t === 'judge') return null; // not in quota
  if (t === 'apply' || lab === '应用') return 'apply';
  if (t === 'calc' || lab === '计算' || lab === '解答') return 'calc';
  if (t === 'fill' || t === 'blank' || lab === '填空') return 'fill';
  if (t === 'single' || t === 'choice') return 'single';
  return null;
}

function enBucket(q) {
  const t = String(q.type || '');
  const lab = String(q.typeLabel || '');
  const s = String(q.stem || '');
  // judge not in English paper quota
  if (t === 'judge') return null;
  // translate: type/label, or write-type whose STEM is a translation task
  // (do NOT use knowledgePoint "翻译与写作" — that labels the whole chapter)
  if (t === 'translate') return 'translate';
  if (lab === '翻译') return 'translate';
  if (t === 'write' && /翻译[:：]|英译汉|汉译英|译成/.test(s)) return 'translate';
  if (t === 'write') return 'write';
  // fill / blank
  if (t === 'blank' || t === 'fill' || lab === '阅读填空' || lab === '填空') return 'fill';
  if (isFillStyle(q)) return 'fill';
  // remaining single / choice keep original type (single=词汇语法, choice=阅读卷面题型)
  if (t === 'single') return 'single';
  if (t === 'choice') return 'choice';
  return null;
}

// ---------- QA pass ----------
const qa = {
  badStemAnswer: 0, badOptions: 0, answerMismatch: 0,
  tooHard: 0, outOfSyllabus: 0, garbled: 0, duplicate: 0, noBucket: 0
};

function stemKey(q) {
  return norm(q.stem).slice(0, 100);
}
function softKey(q) {
  // same point + same type + similar stem head
  return (q.knowledgePoint || '') + '|' + q.type + '|' + norm(q.stem).slice(0, 36);
}

const seenExact = new Set();
const seenSoft = new Set();

function passesQA(q, subject) {
  if (!hasStemAnswer(q)) { qa.badStemAnswer++; return false; }
  if (!optionsOk(q)) { qa.badOptions++; return false; }
  if (!answerMatchesOptions(q)) { qa.answerMismatch++; return false; }
  if (isGarbled(q)) { qa.garbled++; return false; }
  if (!notTooHard(q)) { qa.tooHard++; return false; }
  if (!inSyllabus(q, subject)) { qa.outOfSyllabus++; return false; }
  const ek = stemKey(q);
  if (seenExact.has(ek)) { qa.duplicate++; return false; }
  const sk = softKey(q);
  if (seenSoft.has(sk)) { qa.duplicate++; return false; }
  seenExact.add(ek);
  seenSoft.add(sk);
  return true;
}

// difficulty preference: easier first, then source richness, then original order
function scoreQuestion(q) {
  const d = Number(q.difficulty || 1);
  const hasSteps = q.steps && q.steps.length ? 1 : 0;
  const hasAnalysis = q.analysis ? 1 : 0;
  const hasHint = q.hint ? 1 : 0;
  // lower is better
  return d * 10 - (hasSteps + hasAnalysis + hasHint);
}

function uniqueById(arr) {
  const seen = new Set();
  const out = [];
  for (const q of arr) {
    let id = String(q.id);
    if (seen.has(id)) {
      let n = 2;
      while (seen.has(id + '_' + n)) n++;
      id = id + '_' + n;
      q = Object.assign({}, q, { id });
    }
    seen.add(id);
    out.push(q);
  }
  return out;
}

// ---------- process math ----------
const mathPools = { single: [], fill: [], calc: [], apply: [] };
const enPools = { single: [], choice: [], fill: [], translate: [], write: [] };

for (const q of ALL) {
  const sub = q.subject;
  if (sub === '高等数学') {
    const b = mathBucket(q);
    if (!b) { qa.noBucket++; continue; }
    if (!passesQA(q, sub)) continue;
    mathPools[b].push(q);
  } else if (sub === '英语') {
    const b = enBucket(q);
    if (!b) { qa.noBucket++; continue; }
    if (!passesQA(q, sub)) continue;
    enPools[b].push(q);
  }
}

console.log('QA:', qa);
console.log('math pools:', Object.fromEntries(Object.entries(mathPools).map(([k, v]) => [k, v.length])));
console.log('en pools:', Object.fromEntries(Object.entries(enPools).map(([k, v]) => [k, v.length])));

// sort pools by quality score
for (const k of Object.keys(mathPools)) mathPools[k].sort((a, b) => scoreQuestion(a) - scoreQuestion(b));
for (const k of Object.keys(enPools)) enPools[k].sort((a, b) => scoreQuestion(a) - scoreQuestion(b));

function take(pool, n) {
  return pool.slice(0, Math.min(n, pool.length));
}

// Math quotas: single|choice 130 · fill|blank 52 · calc 91 · apply 27
const mathNeed = { single: 130, fill: 52, calc: 91, apply: 27 };
const mathSel = {};
let mathTotal = 0;
for (const k of Object.keys(mathNeed)) {
  mathSel[k] = take(mathPools[k], mathNeed[k]);
  mathTotal += mathSel[k].length;
  console.log('math', k, 'selected', mathSel[k].length, '/', mathNeed[k], 'available', mathPools[k].length);
}
// pad math if short (should not happen)
if (mathTotal < 300) {
  const order = ['single', 'fill', 'calc', 'apply'];
  for (const k of order) {
    const rest = mathPools[k].slice(mathSel[k].length);
    const need = 300 - mathTotal;
    if (need <= 0) break;
    const add = take(rest, need);
    mathSel[k] = mathSel[k].concat(add);
    mathTotal += add.length;
    console.log('math pad', k, '+', add.length);
  }
}
// if over 300, trim from largest
if (mathTotal > 300) {
  const order = ['single', 'fill', 'calc', 'apply'].sort((a, b) => mathSel[b].length - mathSel[a].length);
  for (const k of order) {
    const over = mathTotal - 300;
    if (over <= 0) break;
    const cut = Math.min(over, Math.max(0, mathSel[k].length - (mathNeed[k] - 2)));
    if (cut > 0) {
      mathSel[k] = mathSel[k].slice(0, mathSel[k].length - cut);
      mathTotal -= cut;
      console.log('math trim', k, '-', cut);
    }
  }
}

// English quotas: single 102 · choice 127 · fill 25 · translate 41 · write 5
const enNeed = { single: 102, choice: 127, fill: 25, translate: 41, write: 5 };
const enSel = {};
let enTotal = 0;
for (const k of Object.keys(enNeed)) {
  enSel[k] = take(enPools[k], enNeed[k]);
  enTotal += enSel[k].length;
  console.log('en', k, 'selected', enSel[k].length, '/', enNeed[k], 'available', enPools[k].length);
}
// pad English shortfalls from surplus (prefer single then choice) to reach 300
if (enTotal < 300) {
  const surplusOrder = ['single', 'choice', 'write', 'fill', 'translate'];
  for (const k of surplusOrder) {
    const rest = enPools[k].slice(enSel[k].length);
    const need = 300 - enTotal;
    if (need <= 0) break;
    const add = take(rest, need);
    enSel[k] = enSel[k].concat(add);
    enTotal += add.length;
    console.log('en pad', k, '+', add.length);
  }
}
if (enTotal > 300) {
  // trim excess padding but keep at least available-in-bucket or need-2
  for (const k of ['single', 'choice']) {
    const over = enTotal - 300;
    if (over <= 0) break;
    const keepMin = Math.min(enSel[k].length, Math.max(enNeed[k] - 2, 0));
    const cut = Math.min(over, enSel[k].length - keepMin);
    if (cut > 0) {
      enSel[k] = enSel[k].slice(0, enSel[k].length - cut);
      enTotal -= cut;
      console.log('en trim', k, '-', cut);
    }
  }
}

const mathOut = uniqueById([].concat(mathSel.single, mathSel.fill, mathSel.calc, mathSel.apply));
const enOut = uniqueById([].concat(enSel.single, enSel.choice, enSel.fill, enSel.translate, enSel.write));

console.log('MATH OUT', mathOut.length);
console.log('EN OUT', enOut.length);

function countBy(arr, fn) {
  const m = {};
  for (const q of arr) {
    const k = fn(q);
    m[k] = (m[k] || 0) + 1;
  }
  return m;
}
console.log('math out by type', countBy(mathOut, q => q.type));
console.log('math out by bucket', countBy(mathOut, q => mathBucket(q)));
console.log('en out by type', countBy(enOut, q => q.type));
console.log('en out by bucket', countBy(enOut, q => enBucket(q)));
console.log('en out by typeLabel', countBy(enOut, q => q.typeLabel));

// id uniqueness check
const idSet = new Set();
let dup = 0;
for (const q of mathOut.concat(enOut)) {
  if (idSet.has(q.id)) dup++;
  idSet.add(q.id);
}
console.log('duplicate ids across outputs:', dup);

// ---------- write outputs ----------
function writeOut(file, globalName, arr) {
  const body = 'window.' + globalName + ' = ' + JSON.stringify(arr, null, 0) + ';\n';
  fs.writeFileSync(path.join(ROOT, file), body, 'utf8');
  console.log('wrote', file, 'bytes', body.length);
}
writeOut('out-math-300.js', 'KEEP_MATH', mathOut);
writeOut('out-en-300.js', 'KEEP_EN', enOut);

// final report
function bucketCounts(sel, need, name) {
  const lines = [];
  for (const k of Object.keys(need)) {
    lines.push('  ' + k + ': ' + sel[k].length + ' / target ' + need[k] + ' (pool ' + (name === 'math' ? mathPools[k].length : enPools[k].length) + ')');
  }
  return lines.join('\n');
}
console.log('\n==== MATH QUOTA ====');
console.log(bucketCounts(mathSel, mathNeed, 'math'));
console.log('total', mathOut.length);
console.log('\n==== EN QUOTA ====');
console.log(bucketCounts(enSel, enNeed, 'en'));
console.log('total', enOut.length);
