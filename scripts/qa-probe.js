const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const major = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'major-questions.json'), 'utf8'));

// 1. id uniqueness in bank
const ids = major.map(q => q.id);
const idSet = new Set(ids);
console.log('ids', ids.length, 'unique', idSet.size);

// 2. answer-in-options check for choice types
function groupOf(q) {
  if (q.type === 'single' || q.type === 'choice') return 'SC';
  if (q.type === 'judge') return 'J';
  if (q.type === 'fill' || q.type === 'blank') return 'F';
  if (q.type === 'calc' || q.type === 'apply') return 'CA';
  return q.type;
}

let ansNotInOpts = 0;
let emptyOpts = 0;
let emptyAns = 0;
let emptyStem = 0;
for (const q of major) {
  const g = groupOf(q);
  if (!String(q.stem || '').trim()) emptyStem++;
  if (q.answer == null || String(q.answer).trim() === '') emptyAns++;
  if (g === 'SC' || g === 'J') {
    if (!Array.isArray(q.options) || q.options.length < 2) emptyOpts++;
    else if (!q.options.includes(q.answer)) {
      ansNotInOpts++;
      if (ansNotInOpts <= 15) console.log('ANS_NOT_IN_OPTS', q.id, q.subject, q.type, 'ans=', q.answer, 'opts=', q.options);
    }
  }
}
console.log({ emptyStem, emptyAns, emptyOpts, ansNotInOpts });

// 3. exact + near dups
function norm(s) {
  return String(s).replace(/\s+/g, '').replace(/[，。；：、（）()[\]【】"'']/g, '').toLowerCase();
}
const byNorm = {};
for (const q of major) {
  const n = norm(q.stem);
  (byNorm[n] = byNorm[n] || []).push(q);
}
const dups = Object.entries(byNorm).filter(([, arr]) => arr.length > 1);
console.log('exact-norm stem dups groups', dups.length);
let dupQs = 0;
for (const [n, arr] of dups) {
  dupQs += arr.length;
  console.log(arr.map(q => q.id + '|' + q.type + '|' + q.subject.slice(0, 4)).join(','), '=>', n.slice(0, 60));
}
console.log('dup questions total', dupQs);

// 4. candidate out-of-syllabus KPs
const suspect = /(位运算|动态内存|malloc|free\(|goto|volatile|typedef|extern|static|递归|预处理|宏|文件指针|函数指针|共用体|枚举|结构体)/;
const kpCount = {};
for (const q of major) {
  if (suspect.test(q.knowledgePoint || '') || suspect.test(q.stem || '')) {
    const k = q.subject + '|' + q.knowledgePoint;
    kpCount[k] = (kpCount[k] || 0) + 1;
  }
}
console.log('\nSuspect KP counts:');
for (const [k, v] of Object.entries(kpCount).sort()) console.log(k, v);

// 5. per subject available after soft quality
const outKp = {
  'C语言程序设计': [/位运算/, /动态内存/, /^goto/, /volatile/, /typedef/, /extern/, /条件编译/],
};
function isLikelyOOS(q) {
  const kp = q.knowledgePoint || '';
  const stem = q.stem || '';
  if (q.subject === 'C语言程序设计') {
    if (/位运算/.test(kp) || /[&|^~]<<|>>/.test(stem) && /位/.test(stem)) return true;
    if (/动态内存|malloc|calloc|realloc|free\(/.test(kp + stem)) return true;
    if (/volatile|typedef|extern|条件编译|#ifdef|#ifndef|#if /.test(kp + stem)) return true;
    if (/goto/.test(kp)) return true;
  }
  return false;
}
const oos = major.filter(isLikelyOOS);
console.log('\nLikely OOS', oos.length);
for (const q of oos) console.log(q.id, q.type, q.knowledgePoint, String(q.stem).slice(0, 50));

// 6. group capacity after dropping d3, oos, dups(keep first)
const seen = new Set();
function keepFirst(q) {
  const n = norm(q.stem);
  if (seen.has(n)) return false;
  seen.add(n);
  return true;
}
const cap = {};
for (const q of major) {
  if (isLikelyOOS(q)) continue;
  if (q.broken || q.examExclude) continue;
  if (!keepFirst(q)) continue;
  const k = q.subject + '|' + groupOf(q) + '|d' + q.difficulty;
  cap[k] = (cap[k] || 0) + 1;
}
console.log('\nCapacity after oos/dup filter:');
for (const [k, v] of Object.entries(cap).sort()) console.log(k, v);

// without dropping d3
const capAll = {};
seen.clear();
for (const q of major) {
  if (isLikelyOOS(q)) continue;
  if (q.broken || q.examExclude) continue;
  if (!keepFirst(q)) continue;
  const k = q.subject + '|' + groupOf(q);
  capAll[k] = (capAll[k] || 0) + 1;
}
console.log('\nCapacity by group (keep all difficulties):');
for (const [k, v] of Object.entries(capAll).sort()) console.log(k, v);
