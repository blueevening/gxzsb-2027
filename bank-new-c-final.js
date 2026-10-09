/* 新增题库 - 2026考纲版 - C语言程序设计 补到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  { id: "nc1604", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "C语言应用", type: "single", typeLabel: "单选",
    stem: "C语言不适合做以下哪种？（　）", options: ["网页前端", "操作系统", "嵌入式", "驱动程序"], answer: "网页前端",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "应用"],
    analysis: "【题干】C不适合做什么？\n【考点】C语言应用\n【详细解答】\n1. C适合系统软件、嵌入式、驱动。\n2. 网页前端用HTML/JS。\n【选项逐个说】\nA. 网页前端 → 正确：不适合。\nB. 操作系统 → 错误：适合。\nC. 嵌入式 → 错误：适合。\nD. 驱动程序 → 错误：适合。\n【答案】网页前端\n【易错】C写系统不写网页。"
  },
  { id: "nc2603", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "自增前置", type: "single", typeLabel: "单选",
    stem: "int a=5; b=++a; 后b的值是（　）", options: ["5", "6", "4", "不确定"], answer: "6",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运算符", "++"],
    analysis: "【题干】a=5; b=++a; b=？\n【考点】前置++\n【详细解答】\n1. ++a先加1再赋值。\n2. a先变成6，再把6赋给b。\n【选项逐个说】\nA. 5 → 错误：那是后置++a。\nB. 6 → 正确。\nC. 4 → 错误。\nD. 不确定 → 错误。\n【答案】6\n【易错】前置先加后用。"
  },
  { id: "nc3602", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", "knowledgePoint": "printf浮点", type: "single", typeLabel: "单选",
    stem: "printf(\"%.2f\", 3.14159); 输出是（　）", options: ["3.14", "3.1416", "3.1", "3.14159"], answer: "3.14",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "printf"],
    analysis: "【题干】%.2f输出3.14159？\n【考点】printf精度\n【详细解答】\n1. %.2f保留两位小数。\n2. 四舍五入，输出3.14。\n【选项逐个说】\nA. 3.14 → 正确。\nB. 3.1416 → 错误：那是%.4f。\nC. 3.1 → 错误：那是%.1f。\nD. 3.14159 → 错误。\n【答案】3.14\n【易错】%.nf保留n位小数。"
  },
  { id: "nc4602", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", "knowledgePoint": "if条件", type: "single", typeLabel: "单选",
    stem: "if(a=5) 这个条件（　）", options: ["恒为真", "恒为假", "取决于a", "语法错误"], answer: "恒为真",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["选择结构", "if"],
    analysis: "【题干】if(a=5)条件？\n【考点】=和==\n【详细解答】\n1. 这里是赋值=，不是比较==。\n2. a被赋值5，值为5，非0即真。\n【选项逐个说】\nA. 恒为真 → 正确。\nB. 恒为假 → 错误。\nC. 取决于a → 错误。\nD. 语法错误 → 错误。\n【答案】恒为真\n【易错】=赋值==比较，别写错。"
  },
  { id: "nc5603", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "while循环", type: "single", typeLabel: "单选",
    stem: "int i=1; while(i<=10) i++; 后i=？", options: ["10", "11", "9", "不确定"], answer: "11",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "while"],
    analysis: "【题干】i=1; while(i<=10) i++; 后i=？\n【考点】while循环\n【详细解答】\n1. i从1加到10，最后一次循环i=10时i<=10成立，i变成11。\n2. i=11时i<=10不成立退出。\n【选项逐个说】\nA. 10 → 错误。\nB. 11 → 正确。\nC. 9 → 错误。\nD. 不确定 → 错误。\n【答案】11\n【易错】i=11退出循环。"
  },
  { id: "nc6602", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", "knowledgePoint": "二维数组行下标", type: "single", typeLabel: "单选",
    stem: "int a[3][4]; 合法的数组元素是（　）", options: ["a[0][0]", "a[3][4]", "a[0][4]", "a[3][0]"], answer: "a[0][0]",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数组", "二维"],
    analysis: "【题干】int a[3][4]; 合法元素？\n【考点】二维数组下标\n【详细解答】\n1. 行下标0~2，列下标0~3。\n2. a[0][0]合法。\n【选项逐个说】\nA. a[0][0] → 正确。\nB. a[3][4] → 错误：越界。\nC. a[0][4] → 错误：列越界。\nD. a[3][0] → 错误：行越界。\n【答案】a[0][0]\n【易错】下标从0开始。"
  },
  { id: "nc7603", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "局部变量默认值", type: "single", typeLabel: "单选",
    stem: "函数内局部变量默认初始值是（　）", options: ["0", "随机值", "1", "空"], answer: "随机值",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["函数", "局部变量"],
    analysis: "【题干】局部变量默认值？\n【考点】变量初始化\n【详细解答】\n1. 局部auto变量不初始化就是随机值。\n2. 全局变量和static局部变量默认0。\n【选项逐个说】\nA. 0 → 错误：那是全局/静态。\nB. 随机值 → 正确。\nC. 1 → 错误。\nD. 空 → 错误。\n【答案】随机值\n【易错】局部变量不初始化是垃圾值。"
  },
  { id: "nc8603", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "指针与数组", type: "single", typeLabel: "单选",
    stem: "int a[5]; 数组名a等价于（　）", options: ["&a[0]", "a[0]", "&a", "*a"], answer: "&a[0]",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "数组"],
    analysis: "【题干】数组名a等价于？\n【考点】数组名\n【详细解答】\n1. a等价于&a[0]，即首元素地址。\n【选项逐个说】\nA. &a[0] → 正确。\nB. a[0] → 错误：那是首元素值。\nC. &a → 错误：那是整个数组地址。\nD. *a → 错误。\n【答案】&a[0]\n【易错】数组名是首元素地址。"
  },
  { id: "nc9602", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", "knowledgePoint": "结构体变量初始化", type: "single", typeLabel: "单选",
    stem: "结构体变量初始化用什么括号？（　）", options: ["{}", "()", "[]", "\"\""], answer: "{}",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["结构体", "初始化"],
    analysis: "【题干】结构体初始化用？\n【考点】结构体初始化\n【详细解答】\n1. 结构体初始化用花括号{}。\n【选项逐个说】\nA. {} → 正确。\nB. () → 错误。\nC. [] → 错误：数组。\nD. \"\" → 错误。\n【答案】{}\n【易错】结构体初始化用花括号。"
  },
  { id: "nc10602", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", "knowledgePoint": "文件打开失败", type: "single", typeLabel: "单选",
    stem: "fopen打开失败返回（　）", options: ["NULL", "0", "1", "-1"], answer: "NULL",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "fopen"],
    analysis: "【题干】fopen失败返回？\n【考点】文件打开\n【详细解答】\n1. fopen成功返回文件指针。\n2. 失败返回NULL。\n【选项逐个说】\nA. NULL → 正确。\nB. 0 → 错误。\nC. 1 → 错误。\nD. -1 → 错误。\n【答案】NULL\n【易错】打开失败返回空指针。"
  },

  // 判断题
  { id: "nc2604", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "自增后置", type: "judge", typeLabel: "判断",
    stem: "a++是先使用a的值再自增1。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运算符", "++"],
    analysis: "【题干】a++先使用后加？\n【考点】后置++\n【详细解答】\n1. a++先用后加。\n【答案】正确\n【易错】后置先用后加。"
  },
  { id: "nc3603", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", "knowledgePoint": "语句结束", type: "judge", typeLabel: "判断",
    stem: "C语言每条语句最后必须有分号。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "分号"],
    analysis: "【题干】每条语句要分号？\n【考点】C语言语法\n【详细解答】\n1. C语言语句以分号结束。\n【答案】正确\n【易错】分号不能少。"
  },
  { id: "nc4603", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", "knowledgePoint": "条件真假", type: "judge", typeLabel: "判断",
    stem: "C语言中非0就是真。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "真假"],
    analysis: "【题干】非0就是真？\n【考点】逻辑真假\n【详细解答】\n1. C语言0为假，非0为真。\n【答案】正确\n【易错】非0即真。"
  },
  { id: "nc6603", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", "knowledgePoint": "字符串比较", type: "judge", typeLabel: "判断",
    stem: "字符串比较可以直接用==运算符。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数组", "字符串"],
    analysis: "【题干】字符串能用==比较？\n【考点】字符串比较\n【详细解答】\n1. 字符串比较要用strcmp函数。\n2. 直接==比较的是地址。\n【答案】错误\n【易错】字符串比较用strcmp。"
  },
  { id: "nc7604", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "函数递归条件", type: "judge", typeLabel: "判断",
    stem: "递归必须有终止条件。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "递归"],
    analysis: "【题干】递归要有终止条件？\n【考点】递归\n【详细解答】\n1. 没有终止条件就死递归，栈溢出。\n【答案】正确\n【易错】递归要有出口。"
  },
  { id: "nc8604", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "空指针", type: "judge", typeLabel: "判断",
    stem: "使用空指针会导致程序崩溃。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "NULL"],
    analysis: "【题干】用空指针会崩？\n【考点】空指针\n【详细解答】\n1. 解引用空指针是未定义行为，程序崩溃。\n【答案】正确\n【易错】NULL不能随便解引用。"
  },
  { id: "nc10603", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", "knowledgePoint": "文本文件", type: "judge", typeLabel: "判断",
    stem: "C语言文件分文本文件和二进制文件。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "分类"],
    analysis: "【题干】文件分文本和二进制？\n【考点】文件分类\n【详细解答】\n1. 文件分文本文件和二进制文件。\n【答案】正确\n【易错】文本和二进制两种。"
  }
]);
