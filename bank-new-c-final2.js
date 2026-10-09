/* C语言补10道到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  { id: "nc1605", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "编译", type: "single", typeLabel: "单选",
    stem: "C程序编译后生成什么文件？（　）", options: [".obj目标文件", ".exe可执行文件", ".c源文件", ".h头文件"], answer: ".obj目标文件",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "编译"],
    analysis: "【题干】编译后生成？\n【考点】编译连接\n【详细解答】\n1. 编译：.c→.obj。\n2. 连接：.obj→.exe。\n【选项逐个说】\nA. .obj目标文件 → 正确。\nB. .exe可执行文件 → 错误：那是连接后。\nC. .c源文件 → 错误：那是源文件。\nD. .h头文件 → 错误。\n【答案】.obj目标文件\n【易错】编译出obj，连接出exe。"
  },
  { id: "nc2605", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "字符常量", type: "single", typeLabel: "单选",
    stem: "'\\101'是什么字符？（　）", options: ["A", "a", "101", "错误"], answer: "A",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据类型", "转义字符"],
    analysis: "【题干】'\\101'是？\n【考点】转义字符\n【详细解答】\n1. \\后面跟八进制数。\n2. 101八进制=65十进制='A'。\n【选项逐个说】\nA. A → 正确。\nB. a → 错误。\nC. 101 → 错误。\nD. 错误 → 错误。\n【答案】A\n【易错】\\ddd是八进制ASCII。"
  },
  { id: "nc3604", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", "knowledgePoint": "putchar", type: "single", typeLabel: "单选",
    stem: "putchar('A'); 输出是（　）", options: ["A", "65", "a", "错误"], answer: "A",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "putchar"],
    analysis: "【题干】putchar('A')输出？\n【考点】字符输出\n【详细解答】\n1. putchar输出字符本身。\n【选项逐个说】\nA. A → 正确。\nB. 65 → 错误：那是printf(\"%d\",'A')。\nC. a → 错误。\nD. 错误 → 错误。\n【答案】A\n【易错】putchar输出字符。"
  },
  { id: "nc4604", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", "knowledgePoint": "switch穿透", type: "single", typeLabel: "单选",
    stem: "switch没有break会怎样？（　）", options: ["继续执行后面case", "跳出switch", "语法错误", "结束程序"], answer: "继续执行后面case",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "switch"],
    analysis: "【题干】没break会怎样？\n【考点】switch穿透\n【详细解答】\n1. 没有break就从匹配case一直往下执行，直到遇到break或switch结束。\n【选项逐个说】\nA. 继续执行后面case → 正确。\nB. 跳出switch → 错误：那是有break。\nC. 语法错误 → 错误。\nD. 结束程序 → 错误。\n【答案】继续执行后面case\n【易错】switch会穿透。"
  },
  { id: "nc5604", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "嵌套循环", type: "single", typeLabel: "单选",
    stem: "外层循环执行m次，内层执行n次，内层循环体执行（　）次", options: ["m+n", "m*n", "m-n", "m/n"], answer: "m*n",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "嵌套"],
    analysis: "【题干】嵌套循环执行次数？\n【考点】嵌套循环\n【详细解答】\n1. 外层每次内层都跑n次。\n2. 总共m*n次。\n【选项逐个说】\nA. m+n → 错误。\nB. m*n → 正确。\nC. m-n → 错误。\nD. m/n → 错误。\n【答案】m*n\n【易错】嵌套循环次数相乘。"
  },
  { id: "nc6604", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", "knowledgePoint": "字符串长度", type: "single", typeLabel: "单选",
    stem: "strlen(\"ab\\tc\\n\") 长度是（　）", options: ["5", "6", "7", "4"], answer: "5",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数组", "字符串函数"],
    analysis: "【题干】strlen(\"ab\\tc\\n\")=？\n【考点】strlen\n【详细解答】\n1. a,b,\\t,c,\\n 共5个字符。\n2. \\t和\\n都是一个转义字符。\n【选项逐个说】\nA. 5 → 正确。\nB. 6 → 错误。\nC. 7 → 错误。\nD. 4 → 错误。\n【答案】5\n【易错】转义字符算一个。"
  },
  { id: "nc7605", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "函数递归终止", type: "single", typeLabel: "单选",
    stem: "递归函数必须有（　）", options: ["终止条件", "返回值", "参数", "循环"], answer: "终止条件",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "递归"],
    analysis: "【题干】递归必须有？\n【考点】递归\n【详细解答】\n1. 递归要有终止条件，否则无限递归栈溢出。\n【选项逐个说】\nA. 终止条件 → 正确。\nB. 返回值 → 错误。\nC. 参数 → 错误。\nD. 循环 → 错误。\n【答案】终止条件\n【易错】递归要有出口。"
  },
  { id: "nc8605", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "指针与函数参数", type: "single", typeLabel: "单选",
    stem: "swap函数要交换两个变量值，参数应该传（　）", options: ["两个变量地址", "两个变量值", "两个变量名", "不传参数"], answer: "两个变量地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["指针", "函数参数"],
    analysis: "【题干】swap传什么？\n【考点】指针作参数\n【详细解答】\n1. C语言值传递，传值改不了外面。\n2. 传地址进去，函数里用指针间接修改。\n【选项逐个说】\nA. 两个变量地址 → 正确。\nB. 两个变量值 → 错误：改不了。\nC. 两个变量名 → 错误。\nD. 不传参数 → 错误。\n【答案】两个变量地址\n【易错】swap要传地址。"
  },
  { id: "nc9603", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", "knowledgePoint": "结构体指针", type: "single", typeLabel: "单选",
    stem: "结构体指针p访问成员用（　）", options: ["p->成员", "p.成员", "*p.成员", "&p.成员"], answer: "p->成员",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["结构体", "指针"],
    analysis: "【题干】结构体指针访问成员？\n【考点】结构体访问\n【详细解答】\n1. 结构体变量用.，结构体指针用->。\n【选项逐个说】\nA. p->成员 → 正确。\nB. p.成员 → 错误：那是变量。\nC. *p.成员 → 错误。\nD. &p.成员 → 错误。\n【答案】p->成员\n【易错】指针箭头。"
  },
  { id: "nc10604", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", "knowledgePoint": "fgets", type: "single", typeLabel: "单选",
    stem: "fgets函数用来（　）", options: ["读一行字符串", "读一个字符", "写一行", "写一个字符"], answer: "读一行字符串",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "fgets"],
    analysis: "【题干】fgets作用？\n【考点】文件读写\n【详细解答】\n1. fgets：从文件读一行字符串。\n【选项逐个说】\nA. 读一行字符串 → 正确。\nB. 读一个字符 → 错误：那是fgetc。\nC. 写一行 → 错误。\nD. 写一个字符 → 错误。\n【答案】读一行字符串\n【易错】fgets读一行。"
  }
]);
