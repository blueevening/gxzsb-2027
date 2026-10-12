/* Select 300 quality questions per major subject from all-bank.js
 * → out-ee-300.js (window.KEEP_EE)
 * → out-c-300.js  (window.KEEP_C)
 * → out-net-300.js (window.KEEP_NET)
 *
 * Quota (soft, ≈): single|choice 111 · judge 56 · fill 111 · calc|apply 22
 * Shortfalls overflow into single|choice (quality-first 补位).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

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

const ALL = extractData(fs.readFileSync(path.join(ROOT, 'all-bank.js'), 'utf8')).questions || [];
console.log('all-bank questions:', ALL.length);

const MAJORS = ['电工电子技术基础', 'C语言程序设计', '计算机网络基础'];
const norm = (t) => String(t || '')
  .replace(/[\s\u3000]+/g, '')
  .replace(/[（）【】\[\]()，。．.、;；:：!！?？"'“”‘’·—\-~～*×÷√^]/g, '')
  .toLowerCase();

function groupOf(q) {
  const t = String(q.type || '').toLowerCase();
  if (t === 'single' || t === 'choice') return 'SC';
  if (t === 'judge') return 'J';
  if (t === 'fill' || t === 'blank') return 'F';
  if (t === 'calc' || t === 'apply') return 'CA';
  return t;
}

function hasStemAnswer(q) {
  return q && q.stem && String(q.stem).trim() !== '' && q.answer != null && String(q.answer).trim() !== '';
}

function isValidOptions(q) {
  const g = groupOf(q);
  if (g !== 'SC' && g !== 'J') return true;
  const opts = q.options;
  if (!Array.isArray(opts)) return false;
  const nonEmpty = opts.filter(o => o != null && String(o).trim() !== '');
  if (g === 'J') return nonEmpty.length >= 2;
  return nonEmpty.length >= 3;
}

function answerInOptions(q) {
  const g = groupOf(q);
  if (g !== 'SC' && g !== 'J') return true;
  const opts = (q.options || []).map(o => norm(o));
  const ansRaw = String(q.answer).trim();
  if (/^[A-D]$/i.test(ansRaw)) {
    const idx = ansRaw.toUpperCase().charCodeAt(0) - 65;
    return idx >= 0 && idx < (q.options || []).length;
  }
  if (Array.isArray(q.answer)) return q.answer.every(a => opts.includes(norm(a)));
  return opts.includes(norm(ansRaw));
}

// ---- 2027 syllabus OOS (超纲) filters ----
function isOutOfSyllabus(q) {
  const kp = String(q.knowledgePoint || '');
  const stem = String(q.stem || '');
  const text = kp + ' ' + stem;
  const sub = q.subject;

  if (sub === 'C语言程序设计') {
    // 位运算 / 动态内存 / typedef / volatile / extern / goto 不在 2027 十章大纲
    if (/位运算|动态内存|malloc|calloc|realloc|free\s*\(/.test(text)) return true;
    if (/\btypedef\b|volatile|\bextern\b|goto/.test(text)) return true;
    if (/条件编译|#ifdef|#ifndef/.test(text)) return true;
  }
  if (sub === '电工电子技术基础') {
    // 三相 / 场效应管 / 555 / ADC·DAC / 振荡器 / 功率放大(OCL OTL) 超出大纲十点
    if (/三相|场效应|555|ADC|DAC|多谐振荡|正弦波振荡|振荡条件|振荡电路/.test(text)) return true;
    if (/OCL|OTL|互补对称|功率放大/.test(text)) return true;
    if (/施密特/.test(text)) return true;
  }
  if (sub === '计算机网络基础') {
    if (/防火墙/.test(text)) return true;
  }
  return false;
}

// Chapter must be one of the 2027 syllabus ranges
function chapterOk(q) {
  const ch = String(q.chapter || '');
  const sub = q.subject;
  if (sub === '电工电子技术基础') return /^ch-ee-(?:[1-9]|10)$/.test(ch);
  if (sub === 'C语言程序设计') return /^ch-c-(?:[1-9]|10)$/.test(ch);
  if (sub === '计算机网络基础') return /^ch-net-[1-6]$/.test(ch);
  return false;
}

function isGarbled(q) {
  const s = String(q.stem || '') + String(q.typeLabel || '');
  return /乱码|�/.test(s) || /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(s);
}

// Quality ranking: higher is better. Prefer easy, complete fields, good source.
function qualityScore(q) {
  let s = 0;
  const d = Number(q.difficulty || 1);
  s += d === 1 ? 30 : d === 2 ? 18 : 4; // deprioritize 偏难(d3)
  if (q.analysis && String(q.analysis).length > 20) s += 6;
  if (Array.isArray(q.steps) && q.steps.length > 0) s += 4;
  if (q.hint) s += 2;
  if (Array.isArray(q.accept) && q.accept.length) s += 3;
  const src = String(q.source || '');
  if (/highfreq|school|真题|2025|2026|2027/.test(src)) s += 5;
  else if (/batch/.test(src)) s += 1;
  // prefer shorter, cleaner stems slightly (less error-prone)
  const len = String(q.stem || '').length;
  if (len > 0 && len < 120) s += 2;
  return s;
}

// ---- build quality pool per subject ----
const stats = {
  total: 0, notMajor: 0, badStemAnswer: 0, badOptions: 0, answerMismatch: 0,
  oos: 0, badChapter: 0, garbled: 0, flagged: 0, duplicate: 0, tooHard: 0, kept: 0
};
const pools = { '电工电子技术基础': [], 'C语言程序设计': [], '计算机网络基础': [] };

// Dedup: keep highest-quality of each normalized stem (and near-prefix)
const stemBest = new Map(); // normStem -> q

function nearKey(stem) {
  const n = norm(stem);
  return n.length > 40 ? n.slice(0, 40) : n;
}

const nearBest = new Map(); // nearKey -> q

for (const q of ALL) {
  stats.total++;
  const sub = q.subject;
  if (!MAJORS.includes(sub)) { stats.notMajor++; continue; }
  if (q.broken || q.examExclude) { stats.flagged++; continue; }
  if (!hasStemAnswer(q)) { stats.badStemAnswer++; continue; }
  if (!isValidOptions(q)) { stats.badOptions++; continue; }
  if (!answerInOptions(q)) { stats.answerMismatch++; continue; }
  if (!chapterOk(q)) { stats.badChapter++; continue; }
  if (isOutOfSyllabus(q)) { stats.oos++; continue; }
  if (isGarbled(q)) { stats.garbled++; continue; }
  // 偏难：difficulty 3（冲刺）整档剔除
  if (Number(q.difficulty || 1) >= 3) { stats.tooHard++; continue; }

  const n = norm(q.stem);
  const nk = nearKey(q.stem);
  const existing = stemBest.get(n) || nearBest.get(nk);
  if (existing) {
    stats.duplicate++;
    // keep the higher-quality one
    if (qualityScore(q) > qualityScore(existing)) {
      stemBest.delete(norm(existing.stem));
      nearBest.delete(nearKey(existing.stem));
      const arr = pools[existing.subject];
      const idx = arr.indexOf(existing);
      if (idx >= 0) arr.splice(idx, 1);
      stemBest.set(n, q);
      nearBest.set(nk, q);
      pools[sub].push(q);
    }
    continue;
  }
  stemBest.set(n, q);
  nearBest.set(nk, q);
  pools[sub].push(q);
  stats.kept++;
}

console.log('filter stats', stats);
for (const sub of MAJORS) {
  const p = pools[sub];
  const by = {};
  for (const q of p) by[groupOf(q)] = (by[groupOf(q)] || 0) + 1;
  console.log(sub, 'pool', p.length, by);
}

// ---- selection ----
const QUOTA = { SC: 111, J: 56, F: 111, CA: 22 };
const TARGET = 300;

function sortQuality(arr) {
  return arr.slice().sort((a, b) => {
    const dq = qualityScore(b) - qualityScore(a);
    if (dq !== 0) return dq;
    // then difficulty asc (easy first) already in score; stable by id
    return String(a.id).localeCompare(String(b.id));
  });
}

function chapterCounts(list) {
  const m = {};
  for (const q of list) m[q.chapter] = (m[q.chapter] || 0) + 1;
  return m;
}

/**
 * Stratified pick: allocate by chapter share (with a small-chapter floor),
 * then fill each chapter by quality score.
 */
function pickStratified(pool, n) {
  if (pool.length <= n) return sortQuality(pool);
  const sorted = sortQuality(pool);
  const poolCh = chapterCounts(pool);
  const total = pool.length;
  const chapters = Object.keys(poolCh);
  const used = new Set();
  const picked = [];

  // proportional allocation, min 1 per chapter when n allows
  const alloc = {};
  let assigned = 0;
  for (const ch of chapters) {
    const share = Math.floor((poolCh[ch] / total) * n);
    alloc[ch] = Math.max(n >= chapters.length ? 1 : 0, Math.min(share, poolCh[ch]));
    assigned += alloc[ch];
  }
  // distribute remainder to largest chapters with remaining capacity
  let remain = n - assigned;
  const bySize = chapters.slice().sort((a, b) => poolCh[b] - poolCh[a]);
  let guard = 0;
  while (remain > 0 && guard++ < 1000) {
    let progress = false;
    for (const ch of bySize) {
      if (remain <= 0) break;
      if (alloc[ch] < poolCh[ch]) { alloc[ch]++; remain--; progress = true; }
    }
    if (!progress) break;
  }

  for (const ch of chapters) {
    const need = alloc[ch];
    let got = 0;
    for (const q of sorted) {
      if (got >= need) break;
      if (q.chapter !== ch || used.has(q.id)) continue;
      picked.push(q);
      used.add(q.id);
      got++;
    }
  }

  // if short (some chapter pools smaller than alloc), top up globally by quality
  while (picked.length < n) {
    const q = sorted.find(x => !used.has(x.id));
    if (!q) break;
    picked.push(q);
    used.add(q.id);
  }
  return picked;
}

function select300(pool) {
  const buckets = { SC: [], J: [], F: [], CA: [] };
  for (const q of pool) {
    const g = groupOf(q);
    if (buckets[g]) buckets[g].push(q);
    else buckets.SC.push(q); // unexpected type → treat as SC
  }

  const chosen = [];
  const takenIds = new Set();
  const take = (q) => {
    if (takenIds.has(q.id)) return false;
    takenIds.add(q.id);
    chosen.push(q);
    return true;
  };

  // Pass 1: fill each type up to quota (soft)
  const perType = { SC: 0, J: 0, F: 0, CA: 0 };
  for (const g of ['F', 'J', 'CA', 'SC']) {
    // take F first (scarcest), then J, CA, SC
    const need = QUOTA[g];
    const picked = pickStratified(buckets[g], need);
    for (const q of picked) {
      if (take(q)) perType[g]++;
    }
  }

  // Pass 2: overflow remaining slots — prefer SC surplus, then J, then CA, then F
  let remain = TARGET - chosen.length;
  if (remain > 0) {
    for (const g of ['SC', 'J', 'CA', 'F']) {
      if (remain <= 0) break;
      const leftovers = buckets[g].filter(q => !takenIds.has(q.id));
      const extra = pickStratified(leftovers, remain);
      for (const q of extra) {
        if (remain <= 0) break;
        if (take(q)) { perType[g]++; remain--; }
      }
    }
  }

  // Pass 3: if still short (pool exhausted), relax nothing — report
  return { chosen, perType, short: TARGET - chosen.length };
}

// Order output like the exam paper: SC → J → F → CA, then by chapter
const GROUP_ORDER = { SC: 0, J: 1, F: 2, CA: 3 };
function examOrder(list) {
  return list.slice().sort((a, b) => {
    const g = (GROUP_ORDER[groupOf(a)] ?? 9) - (GROUP_ORDER[groupOf(b)] ?? 9);
    if (g !== 0) return g;
    const ch = String(a.chapter).localeCompare(String(b.chapter));
    if (ch !== 0) return ch;
    return String(a.id).localeCompare(String(b.id));
  });
}

const outputs = {};
const report = [];

for (const sub of MAJORS) {
  const r = select300(pools[sub]);
  outputs[sub] = examOrder(r.chosen);
  const byType = {};
  const byGroup = {};
  const byChap = {};
  const byDiff = {};
  for (const q of r.chosen) {
    byType[q.type] = (byType[q.type] || 0) + 1;
    byGroup[groupOf(q)] = (byGroup[groupOf(q)] || 0) + 1;
    byChap[q.chapter] = (byChap[q.chapter] || 0) + 1;
    byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1;
  }
  report.push({
    subject: sub,
    count: r.chosen.length,
    short: r.short,
    perTypeQuotaFilled: r.perType,
    byGroup, byType, byChap, byDiff
  });
  console.log('\n===', sub, 'selected', r.chosen.length, 'short', r.short);
  console.log('  quota filled', r.perType);
  console.log('  byGroup', byGroup);
  console.log('  byType', byType);
  console.log('  byChap', byChap);
  console.log('  byDiff', byDiff);
}

// ---- id uniqueness across three outputs ----
const allIds = [];
for (const sub of MAJORS) for (const q of outputs[sub]) allIds.push(q.id);
const idSet = new Set(allIds);
console.log('\nid total', allIds.length, 'unique', idSet.size);
if (idSet.size !== allIds.length) {
  console.error('ID COLLISION DETECTED');
  const seen = new Set();
  for (const id of allIds) {
    if (seen.has(id)) console.error('dup id', id);
    seen.add(id);
  }
}

// ---- write output files ----
function writeKeep(filename, globalName, questions) {
  const body = questions.map(q => JSON.stringify(q)).join(',\n');
  const text = `/* auto-selected 300 questions — ${globalName} */\nwindow.${globalName} = [\n${body}\n];\n`;
  fs.writeFileSync(path.join(ROOT, filename), text, 'utf8');
  console.log('wrote', filename, questions.length, 'bytes', text.length);
}

writeKeep('out-ee-300.js', 'KEEP_EE', outputs['电工电子技术基础']);
writeKeep('out-c-300.js', 'KEEP_C', outputs['C语言程序设计']);
writeKeep('out-net-300.js', 'KEEP_NET', outputs['计算机网络基础']);

// count report file
const lines = [];
lines.push('# bank-300 精选计数报告');
lines.push('');
lines.push('来源：all-bank.js major 题 ' + pools['电工电子技术基础'].length + '+' + pools['C语言程序设计'].length + '+' + pools['计算机网络基础'].length + '（质检后）');
lines.push('');
for (const r of report) {
  lines.push('## ' + r.subject);
  lines.push('- 合计：' + r.count + (r.short ? '（缺 ' + r.short + '）' : ''));
  lines.push('- 配额实得：single|choice ' + (r.byGroup.SC || 0) + ' / judge ' + (r.byGroup.J || 0) + ' / fill ' + (r.byGroup.F || 0) + ' / calc|apply ' + (r.byGroup.CA || 0));
  lines.push('- 目标配额：SC 111 · J 56 · F 111 · CA 22（fill 不足按优质补位进 SC）');
  lines.push('- 题型细分：' + JSON.stringify(r.byType));
  lines.push('- 章节：' + JSON.stringify(r.byChap));
  lines.push('- 难度：' + JSON.stringify(r.byDiff));
  lines.push('');
}
lines.push('## 质检剔除（全库 major）');
lines.push(JSON.stringify(stats));
fs.writeFileSync(path.join(ROOT, 'scripts', 'count-report-300.md'), lines.join('\n'), 'utf8');
console.log('wrote scripts/count-report-300.md');
console.log('\nDONE');
