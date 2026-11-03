import re

# 在所有题库文件里找这道题
files = ['net-bank.js', 'c-bank.js', 'ee-bank.js', 'math-bank.js', 'all-bank.js']
for fname in files:
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
        # 找包含"广播地址"且包含"192"的题
        questions = re.findall(r'\{[^{}]*广播地址[^{}]*\}', content)
        for q in questions:
            if '192' in q:
                stem = re.search(r'"stem":\s*"([^"]*)"', q)
                print(f"文件: {fname}")
                print(f"题干: {stem.group(1) if stem else '?'}")
                print()
    except FileNotFoundError:
        pass
