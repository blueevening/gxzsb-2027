/* 新增题库 - 2026考纲版 - C语言程序设计 第七批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 概述 =====
  { id: "nc1601", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "C程序结构", type: "single", typeLabel: "单选",
    stem: "C程序从哪里开始执行？（　）", options: ["main函数", "第一个函数", "第一个语句", "头文件"], answer: "main函数",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "main"],
    analysis: "【题干】C程序从哪开始？\n【考点】main函数\n【详细解答】\n1. 程序从main函数第一条语句开始执行。\n【选项逐个说】\nA. main函数 → 正确。\nB. 第一个函数 → 错误。\nC. 第一个语句 → 错误。\nD. 头文件 → 错误。\n【答案】main函数\n【易错】main是入口。"
  },
  { id: "nc1602", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "预处理命令", type: "single", typeLabel: "单选",
    stem: "#include <stdio.h> 中<>表示（　）", options: ["标准库目录找", "当前目录找", "随便找", "不找"], answer: "标准库目录找",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "include"],
    analysis: "【题干】<>表示？\n【考点】include\n【详细解答】\n1. <>：直接去系统标准目录找头文件。\n2. \"\"：先在当前目录找，找不到再去系统目录。\n【选项逐个说】\nA. 标准库目录找 → 正确。\nB. 当前目录找 → 错误：那是\"\"。\nC. 随便找 → 错误。\nD. 不找 → 错误。\n【答案】标准库目录找\n【易错】<>系统，\"\"当前。"
  },

  // ===== 数据类型 =====
  { id: "nc2601", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "unsigned", type: "single", typeLabel: "单选",
    stem: "unsigned int类型表示（　）", options: ["无符号整数", "有符号整数", "短整数", "长整数"], answer: "无符号整数",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "unsigned"],
    analysis: "【题干】unsigned int是？\n【考点】数据类型\n【详细解答】\n1. unsigned：无符号数，只能≥0。\n2. signed：有符号数，正负都可以。\n【选项逐个说】\nA. 无符号整数 → 正确。\nB. 有符号整数 → 错误：那是signed。\nC. 短整数 → 错误：那是short。\nD. 长整数 → 错误：那是long。\n【答案】无符号整数\n【易错】unsigned没负数。"
  },

  // ===== 顺序结构 =====
  { id: "nc3601", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", "knowledgePoint": "scanf格式", type: "single", typeLabel: "单选",
    stem: "scanf(\"%d%f\", &a, &b); 输入时两个数用什么分隔？（　）", options: ["空格", "逗号", "分号", "回车都行（空格/Tab/回车）"], answer: "回车都行（空格/Tab/回车）",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["顺序结构", "scanf"],
    analysis: "【题干】scanf输入分隔符？\n【考点】scanf\n【详细解答】\n1. %d%f这种格式，输入时用空格、Tab、回车都能分隔。\n2. 如果格式串里有逗号，输入时也要输逗号。\n【选项逐个说】\nA. 空格 → 不全面。\nB. 逗号 → 错误：格式串没逗号就不用。\nC. 分号 → 错误。\nD. 回车都行（空格/Tab/回车） → 正确。\n【答案】回车都行（空格/Tab/回车）\n【易错】空白符都能分隔。"
  },

  // ===== 选择结构 =====
  { id: "nc4601", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", "knowledgePoint": "switch case", type: "single", typeLabel: "单选",
    stem: "switch中case后面必须是什么？（　）", options: ["常量表达式", "变量", "任意表达式", "函数"], answer: "常量表达式",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "switch"],
    analysis: "【题干】case后面必须是？\n【考点】switch\n【详细解答】\n1. case后面必须是整型/字符型常量表达式。\n2. 不能是变量。\n【选项逐个说】\nA. 常量表达式 → 正确。\nB. 变量 → 错误。\nC. 任意表达式 → 错误。\nD. 函数 → 错误。\n【答案】常量表达式\n【易错】case后必须是常量。"
  },

  // ===== 循环结构 =====
  { id: "nc5601", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "while循环条件", type: "single", typeLabel: "单选",
    stem: "while(!x) 等价于（　）", options: ["while(x==0)", "while(x!=0)", "while(x>0)", "while(x<0)"], answer: "while(x==0)",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["循环", "逻辑运算"],
    analysis: "【题干】while(!x)等价于？\n【考点】逻辑非\n【详细解答】\n1. !x就是x为假，也就是x==0。\n【选项逐个说】\nA. while(x==0) → 正确。\nB. while(x!=0) → 错误。\nC. while(x>0) → 错误。\nD. while(x<0) → 错误。\n【答案】while(x==0)\n【易错】!x就是x为0。"
  },

  // ===== 数组 =====
  { id: "nc6601", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", "knowledgePoint": "字符串结束符", type: "single", typeLabel: "单选",
    stem: "字符串\"abc\"在内存占几个字节？（　）", options: ["3", "4", "5", "6"], answer: "4",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数组", "字符串"],
    analysis: "【题干】\"abc\"占几个字节？\n【考点】字符串长度\n【详细解答】\n1. a,b,c三个字符+结束符\\0=4字节。\n【选项逐个说】\nA. 3 → 错误：没算结束符。\nB. 4 → 正确。\nC. 5 → 错误。\nD. 6 → 错误。\n【答案】4\n【易错】字符串自动加\\0。"
  },

  // ===== 函数 =====
  { id: "nc7601", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "函数声明", type: "single", typeLabel: "单选",
    stem: "函数声明放在哪个位置？（　）", options: ["调用之前", "调用之后", "任意位置", "函数里面"], answer: "调用之前",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "声明"],
    analysis: "【题干】函数声明放哪？\n【考点】函数声明\n【详细解答】\n1. 函数要先声明（或定义）再调用。\n2. 一般放文件开头。\n【选项逐个说】\nA. 调用之前 → 正确。\nB. 调用之后 → 错误。\nC. 任意位置 → 错误。\nD. 函数里面 → 错误。\n【答案】调用之前\n【易错】先声明后调用。"
  },

  // ===== 指针 =====
  { id: "nc8601", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "指针占几个字节", type: "single", typeLabel: "单选",
    stem: "32位系统中指针变量占几个字节？（　）", options: ["2", "4", "8", "不确定"], answer: "4",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "大小"],
    analysis: "【题干】32位系统指针几字节？\n【考点】指针大小\n【详细解答】\n1. 32位系统地址32位=4字节。\n2. 64位系统地址64位=8字节。\n【选项逐个说】\nA. 2 → 错误。\nB. 4 → 正确：32位。\nC. 8 → 错误：那是64位。\nD. 不确定 → 错误。\n【答案】4\n【易错】32位4字节，64位8字节。"
  },

  // ===== 结构体 =====
  { id: "nc9601", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", "knowledgePoint": "结构体大小", type: "single", typeLabel: "单选",
    stem: "结构体struct S { char a; int b; } 一般占几个字节？（　）", options: ["5", "8", "6", "7"], answer: "8",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["结构体", "内存对齐"],
    analysis: "【题干】结构体大小？\n【考点】结构体内存对齐\n【详细解答】\n1. char占1字节，然后填充3字节对齐。\n2. int占4字节。\n3. 总共1+3+4=8字节。\n【选项逐个说】\nA. 5 → 错误：没算对齐。\nB. 8 → 正确：对齐后。\nC. 6 → 错误。\nD. 7 → 错误。\n【答案】8\n【易错】结构体内存对齐。"
  },

  // ===== 文件 =====
  { id: "nc10601", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", "knowledgePoint": "feof", type: "single", typeLabel: "单选",
    stem: "feof(fp)函数作用是（　）", options: ["判断是否到文件尾", "读文件", "写文件", "关文件"], answer: "判断是否到文件尾",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "feof"],
    analysis: "【题干】feof作用？\n【考点】文件操作\n【详细解答】\n1. feof：检测文件位置指针是否到了文件末尾。\n【选项逐个说】\nA. 判断是否到文件尾 → 正确。\nB. 读文件 → 错误。\nC. 写文件 → 错误。\nD. 关文件 → 错误。\n【答案】判断是否到文件尾\n【易错】feof判文件尾。"
  },

  // ===== 判断题 =====
  { id: "nc1603", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "C语言特点", type: "judge", typeLabel: "判断",
    stem: "C语言可以直接操作硬件。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "特点"],
    analysis: "【题干】C能直接操作硬件？\n【考点】C语言特点\n【详细解答】\n1. C语言是中级语言，可以直接访问物理地址，操作硬件。\n【答案】正确\n【易错】C能操作硬件。"
  },
  { id: "nc2602", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "运算符优先级", type: "judge", typeLabel: "判断",
    stem: "括号可以改变运算顺序。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运算符", "优先级"],
    analysis: "【题干】括号能改顺序？\n【考点】运算符优先级\n【详细解答】\n1. 括号优先级最高，先算括号里的。\n【答案】正确\n【易错】括号最优先。"
  },
  { id: "nc5602", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "循环次数", type: "judge", typeLabel: "判断",
    stem: "do-while循环至少执行一次。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "do-while"],
    analysis: "【题干】do-while至少一次？\n【考点】三种循环\n【详细解答】\n1. do-while先执行后判断，至少一次。\n【答案】正确\n【易错】do-while至少一次。"
  },
  { id: "nc7602", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "函数返回", type: "judge", typeLabel: "判断",
    stem: "函数可以没有return语句。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "返回值"],
    analysis: "【题干】函数可以没return？\n【考点】函数返回\n【详细解答】\n1. void类型函数可以没有return。\n2. 有返回值类型的必须return。\n【答案】正确\n【易错】void函数不用return。"
  },
  { id: "nc8602", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "指针运算", type: "judge", typeLabel: "判断",
    stem: "两个指针可以相加。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["指针", "运算"],
    analysis: "【题干】两个指针能相加？\n【考点】指针运算\n【详细解答】\n1. 指针可以相减（差是元素个数）。\n2. 指针相加没意义，不允许。\n【答案】错误\n【易错】指针能减不能加。"
  }
]);
