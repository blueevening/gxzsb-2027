#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""扫描 gxzsb 数据文件中的下划线填空标记与小错误"""
import re, json, collections, sys

FILES = ["all-bank.js", "all-learn.js", "learn-book-2027.js", "formula-book.js",
         "wordbook.js", "kp-detail.js", "syllabus.js", "syllabus-sample.js", "exam-plans-v2.js"]

def load_text(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

stats = collections.Counter()
samples = collections.defaultdict(list)

UND = re.compile(r'[＿_]{2,}')  # 2 个以上下划线（全角或半角）

for f in FILES:
    txt = load_text(f)
    for m in UND.finditer(txt):
        s = m.group(0)
        n_full = s.count('＿')
        n_half = s.count('_')
        # 判断是否为“填空标记”：组前后是空格/标点/引号/行首行尾
        pre = txt[max(0, m.start()-3):m.start()]
        post = txt[m.end():m.end()+3]
        ctx_pre_char = pre[-1:] if pre else ''
        ctx_post_char = post[:1] if post else ''
        # 填空型：前面是 空格/标点/引号/开头 或 后面是 空格/标点/引号/结尾
        pre_punc = " \"'（(，,。.：:；;？?！!、"
        post_punc = " \"'）)，,。.：:；;？?！!、"
        fillish = (not ctx_pre_char or ctx_pre_char in pre_punc or
                   not ctx_post_char or ctx_post_char in post_punc)
        if fillish and n_half >= 2 and n_full == 0:
            stats['half_fill'] += 1
            if len(samples['half_fill']) < 25:
                samples['half_fill'].append((f, txt[max(0,m.start()-45):m.end()+25]))
        elif fillish and n_full >= 2 and n_half == 0:
            stats['full_fill'] += 1
        elif fillish and n_full and n_half:
            stats['mixed_fill'] += 1
            if len(samples['mixed_fill']) < 15:
                samples['mixed_fill'].append((f, txt[max(0,m.start()-45):m.end()+25]))
        else:
            stats['subscript_other'] += 1

print("=== 统计 ===")
for k, v in stats.items():
    print(f"{k}: {v}")

print("\n=== 半角填空样例（前25条）===")
for f, ctx in samples['half_fill'][:25]:
    print(f"[{f}] ...{ctx}...")

print("\n=== 混合下划线样例（前15条）===")
for f, ctx in samples['mixed_fill'][:15]:
    print(f"[{f}] ...{ctx}...")
