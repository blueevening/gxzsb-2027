import re
from collections import Counter

files = {
    'math-bank.js': '高数',
    'ee-bank.js': '电工电子',
    'c-bank.js': 'C语言',
    'net-bank.js': '计算机网络',
}

for fname, label in files.items():
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
        types = re.findall(r'"typeLabel":\s*"([^"]+)"', content)
        total = len(types)
        print(f"\n=== {label}（{total}题）===")
        for t, c in Counter(types).most_common(10):
            print(f'  {c:4d}  {t}')
    except FileNotFoundError:
        print(f"\n=== {label}：文件不存在 ===")
