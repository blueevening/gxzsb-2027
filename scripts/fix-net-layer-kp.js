/* 计网裸层名 KP 二次归位：ch-net-1 中题干明显属层章的题按关键词归位 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');
const BARE = new Set(['传输层', '应用层', '物理层', '数据链路', '网络层', '综合']);
function byStem(q) {
  const t = String(q.stem || '');
  if (/HTTP|HTTPS|DNS|DHCP|FTP|邮件|WWW|URL|网页|浏览器|Telnet|SMTP|POP/.test(t)) return 'ch-net-6';
  if (/TCP|UDP|端口|握手|传输层|滑动窗口|拥塞/.test(t)) return 'ch-net-5';
  if (/IP地址|子网|路由|ARP|ICMP|NAT|掩码|IPv6|网络层/.test(t)) return 'ch-net-4';
  if (/交换机|VLAN|MAC|以太网|帧|CSMA|PPP|链路层|数据链路/.test(t)) return 'ch-net-3';
  if (/物理层|双绞线|光纤|信道|带宽|曼彻斯特|多路复用|传输介质|比特/.test(t)) return 'ch-net-2';
  return null;
}
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));
let n = 0;
const dist = {};
for (const q of questions) {
  if (q.subject !== '计算机网络基础') continue;
  if (q.chapter === 'ch-net-1' && BARE.has(String(q.knowledgePoint || ''))) {
    const nc = byStem(q);
    if (nc) { q.chapter = nc; n++; }
  }
  dist[q.chapter] = (dist[q.chapter] || 0) + 1;
}
console.log('二次归位:', n, '→ 分布', dist);
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
