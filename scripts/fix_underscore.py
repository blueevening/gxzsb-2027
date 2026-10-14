#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""统一 gxzsb 数据文件中的填空下划线为 6 个半角下划线。
只处理「填空型」连续下划线（前后非字母数字），严格保护：
  - 公式下标：x_1、a_n、|_{x=2}（单下划线或后跟字母/数字/{）
  - 已有 6 个下划线的填空保持不动
"""
import re, sys

FILES = ["all-bank.js", "all-learn.js", "learn-book-2027.js",
         "formula-book.js", "syllabus-sample.js"]

# 前后都不是字母数字下划线、且至少 2 个连续下划线 → 填空型
PAT = re.compile(r'(?<![A-Za-z0-9_])_{2,}(?![A-Za-z0-9_])')

def fix(path):
    with open(path, "r", encoding="utf-8") as f:
        txt = f.read()
    changed = {"n": 0, "samples": []}

    def repl(m):
        s = m.group(0)
        if len(s) == 6:
            return s
        changed["n"] += 1
        if len(changed["samples"]) < 8:
            changed["samples"].append(f"{len(s)}个 -> 6个 | ...{txt[max(0,m.start()-30):m.end()+18]}...")
        return "_" * 6

    new = PAT.sub(repl, txt)
    if new != txt:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new)
    return changed

for f in FILES:
    c = fix(f)
    print(f"== {f}: 替换 {c['n']} 处 ==")
    for s in c["samples"]:
        print("   ", s)
