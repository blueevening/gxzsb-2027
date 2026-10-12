/* 新增题库 - 2026考纲版 - C语言程序设计 第六批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 概述 =====
  { id: "nc1501", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "C程序编译", type: "single", typeLabel: "单选",
    stem: "C语言源文件后缀是（　）", options: [".c", ".obj", ".exe", ".cpp"], answer: ".c",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "文件后缀"],
    analysis: "【题干】C源文件后缀？\n【考点】C文件\n【详细解答】\n1. .c：C源代码。\n2. .obj：编译目标文件。\n3. .exe：可执行文件。\n【选项逐个说】\nA. .c → 正确。\nB. .obj → 错误：编译后。\nC. .exe → 错误：连接后。\nD. .cpp → 错误：C++。\n【答案】.c\n【易错】C源代码.c。"
  },
  { id: "nc1502", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "注释", type: "single", typeLabel: "单选",
    stem: "C语言单行注释符号是（　）", options: ["//", "/* */", "--", "#"], answer: "//",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "注释"],
    analysis: "【题干】单行注释？\n【考点】注释\n【详细解答】\n1. //：单行注释。\n2. /* */：多行注释。\n【选项逐个说】\nA. // → 正确。\nB. /* */ → 错误：多行。\nC. -- → 错误。\nD. # → 错误。\n【答案】//\n【易错】//单行，/* */多行。"
  },

  // ===== 数据类型 =====
  { id: "nc2501", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "浮点型常量", type: "single", typeLabel: "单选",
    stem: "以下哪个是正确的浮点型常量？（　）", options: ["3.14", "3", "'a'", "\"hello\""], answer: "3.14",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "常量"],
    analysis: "【题干】哪个是浮点常量？\n【考点】常量类型\n【详细解答】\n1. 3.14是浮点数。\n2. 3是整数。\n3. 'a'是字符。\n4. \"hello\"是字符串。\n【选项逐个说】\nA. 3.14 → 正确。\nB. 3 → 错误：整数。\nC. 'a' → 错误：字符。\nD. \"hello\" → 错误：字符串。\n【答案】3.14\n【易错】有小数点是浮点。"
  },
  { id: "nc2502", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "强制类型转换", type: "single", typeLabel: "单选",
    stem: "(int)3.14 的值是（　）", options: ["3", "4", "3.1", "3.14"], answer: "3",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "类型转换"],
    analysis: "【题干】(int)3.14=？\n【考点】强制类型转换\n【详细解答】\n1. (int)强制把浮点数转整数，直接截断小数部分。\n2. 不是四舍五入，是截断。\n【选项逐个说】\nA. 3 → 正确：截断。\nB. 4 → 错误：那是四舍五入。\nC. 3.1 → 错误。\nD. 3.14 → 错误。\n【答案】3\n【易错】强转截断不四舍五入。"
  },

  // ===== 顺序结构 =====
  { id: "nc3501", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", "knowledgePoint": "printf输出格式", type: "single", typeLabel: "单选",
    stem: "printf(\"%5d\", 123); 输出是（　）", options: ["右对齐占5位", "左对齐占5位", "右对齐占3位", "左对齐占3位"], answer: "右对齐占5位",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["顺序结构", "printf格式"],
    analysis: "【题干】%5d输出123？\n【考点】printf宽度\n【详细解答】\n1. %5d：占5个字符宽度，右对齐。\n2. 123是3位，前面补2个空格。\n【选项逐个说】\nA. 右对齐占5位 → 正确。\nB. 左对齐占5位 → 错误：那是%-5d。\nC. 右对齐占3位 → 错误。\nD. 左对齐占3位 → 错误。\n【答案】右对齐占5位\n【易错】%md右对齐占m位。"
  },

  // ===== 选择结构 =====
  { id: "nc4501", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", "knowledgePoint": "if嵌套", type: "single", typeLabel: "单选",
    stem: "if(a>0) if(b>0) x=1; else x=2; else与哪个if配对？（　）", options: ["最近的if(b>0)", "最外面的if(a>0)", "都不", "语法错误"], answer: "最近的if(b>0)",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["选择结构", "if配对"],
    analysis: "【题干】else和哪个if配对？\n【考点】悬挂else\n【详细解答】\n1. else永远和最近的未配对if结合。\n2. 这里和if(b>0)配对。\n【选项逐个说】\nA. 最近的if(b>0) → 正确。\nB. 最外面的if(a>0) → 错误。\nC. 都不 → 错误。\nD. 语法错误 → 错误。\n【答案】最近的if(b>0)\n【易错】else就近配对。"
  },

  // ===== 循环结构 =====
  { id: "nc5501", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "for省略", type: "single", typeLabel: "单选",
    stem: "for(;;) 是什么意思？（　）", options: ["死循环", "不循环", "循环一次", "语法错误"], answer: "死循环",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "for"],
    analysis: "【题干】for(;;)？\n【考点】for循环\n【详细解答】\n1. for三个表达式都省略，条件永远为真。\n2. 就是死循环，用break退出。\n【选项逐个说】\nA. 死循环 → 正确。\nB. 不循环 → 错误。\nC. 循环一次 → 错误。\nD. 语法错误 → 错误。\n【答案】死循环\n【易错】for(;;)是无限循环。"
  },
  { id: "nc5502", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "累加求和", type: "single", typeLabel: "单选",
    stem: "1+2+...+100的和是（　）", options: ["5050", "5000", "1000", "10100"], answer: "5050",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "累加"],
    analysis: "【题干】1加到100和？\n【考点】累加求和\n【详细解答】\n1. 等差数列求和：(1+100)×100/2 = 5050。\n【选项逐个说】\nA. 5050 → 正确。\nB. 5000 → 错误。\nC. 1000 → 错误。\nD. 10100 → 错误。\n【答案】5050\n【易错】高斯求和。"
  },

  // ===== 数组 =====
  { id: "nc6501", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", "knowledgePoint": "数组初始化", type: "single", typeLabel: "单选",
    stem: "int a[5] = {1,2}; 数组a[4]的值是（　）", options: ["0", "2", "不确定", "5"], answer: "0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数组", "初始化"],
    analysis: "【题干】int a[5]={1,2}; a[4]=？\n【考点】数组初始化\n【详细解答】\n1. 只给前两个元素初值，后面自动补0。\n2. a[0]=1,a[1]=2,a[2]=a[3]=a[4]=0。\n【选项逐个说】\nA. 0 → 正确。\nB. 2 → 错误。\nC. 不确定 → 错误：全局/静态数组才自动0，局部数组部分初始化也是0。\nD. 5 → 错误。\n【答案】0\n【易错】初始化时剩余元素补0。"
  },

  // ===== 函数 =====
  { id: "nc7501", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "函数定义", type: "single", typeLabel: "单选",
    stem: "C语言函数体用什么括起来？（　）", options: ["{}", "()", "[]", "\"\""], answer: "{}",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "定义"],
    analysis: "【题干】函数体用什么括？\n【考点】函数定义\n【详细解答】\n1. 函数体用花括号{}括起来。\n2. 函数参数用圆括号()。\n【选项逐个说】\nA. {} → 正确。\nB. () → 错误：参数。\nC. [] → 错误：数组。\nD. \"\" → 错误：字符串。\n【答案】{}\n【易错】函数体花括号。"
  },
  { id: "nc7502", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", "knowledgePoint": "函数递归例子", type: "single", typeLabel: "单选",
    stem: "递归计算n!，当n=0时返回1，f(4)等于（　）", options: ["24", "12", "4", "1"], answer: "24",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["函数", "递归"],
    analysis: "【题干】f(4)=？\n【考点】递归\n【详细解答】\n1. f(n)=n×f(n-1)。\n2. f(4)=4×f(3)=4×3×f(2)=4×3×2×f(1)=4×3×2×1×f(0)=24。\n【选项逐个说】\nA. 24 → 正确。\nB. 12 → 错误。\nC. 4 → 错误。\nD. 1 → 错误：那是f(0)。\n【答案】24\n【易错】4! = 24。"
  },

  // ===== 指针 =====
  { id: "nc8501", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "指针与函数", type: "single", typeLabel: "单选",
    stem: "想在函数中修改实参的值，应该传（　）", options: ["实参地址", "实参值", "实参名字", "不传"], answer: "实参地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["指针", "函数"],
    analysis: "【题干】函数里改实参要传？\n【考点】指针作函数参数\n【详细解答】\n1. C语言只有值传递。\n2. 想改实参就把实参地址传进去，函数里用指针间接修改。\n【选项逐个说】\nA. 实参地址 → 正确。\nB. 实参值 → 错误：改不了。\nC. 实参名字 → 错误。\nD. 不传 → 错误。\n【答案】实参地址\n【易错】传地址才能改外面。"
  },

  // ===== 结构体 =====
  { id: "nc9501", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", "knowledgePoint": "结构体定义", type: "single", typeLabel: "单选",
    stem: "定义结构体用什么关键字？（　）", options: ["struct", "union", "enum", "typedef"], answer: "struct",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["结构体", "定义"],
    analysis: "【题干】定义结构体关键字？\n【考点】结构体定义\n【详细解答】\n1. struct：定义结构体。\n2. union：共用体。\n3. enum：枚举。\n【选项逐个说】\nA. struct → 正确。\nB. union → 错误。\nC. enum → 错误。\nD. typedef → 错误：起别名。\n【答案】struct\n【易错】struct结构体。"
  },

  // ===== 文件 =====
  { id: "nc10501", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", "knowledgePoint": "文件位置指针", type: "single", typeLabel: "单选",
    stem: "fseek(fp, 10L, 0); 中0表示（　）", options: ["文件开头", "当前位置", "文件末尾", "不确定"], answer: "文件开头",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["文件", "fseek"],
    analysis: "【题干】fseek第三个参数0？\n【考点】文件定位\n【详细解答】\n1. SEEK_SET=0：从文件开头。\n2. SEEK_CUR=1：从当前位置。\n3. SEEK_END=2：从文件末尾。\n【选项逐个说】\nA. 文件开头 → 正确。\nB. 当前位置 → 错误：那是1。\nC. 文件末尾 → 错误：那是2。\nD. 不确定 → 错误。\n【答案】文件开头\n【易错】0开头，1当前，2末尾。"
  },

  // ===== 判断题 =====
  { id: "nc1503", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "main函数位置", type: "judge", typeLabel: "判断",
    stem: "main函数必须在程序最前面。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "main"],
    analysis: "【题干】main必须在最前面？\n【考点】main函数\n【详细解答】\n1. main函数位置任意。\n2. 程序从main开始执行，但不一定要放最前面。\n【答案】错误\n【易错】main位置随便。"
  },
  { id: "nc2503", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "运算符结合性", type: "judge", typeLabel: "判断",
    stem: "赋值运算符是右结合的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运算符", "结合性"],
    analysis: "【题干】赋值右结合？\n【考点】结合性\n【详细解答】\n1. 赋值=是右结合。\n2. a=b=5 等价于 a=(b=5)。\n【答案】正确\n【易错】赋值从右往左。"
  },
  { id: "nc5503", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", "knowledgePoint": "goto语句", type: "judge", typeLabel: "判断",
    stem: "C语言可以用goto语句随意跳转。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "goto"],
    analysis: "【题干】C可以用goto？\n【考点】goto语句\n【详细解答】\n1. C语言有goto语句，可以跳。\n2. 但不推荐，破坏程序结构。\n【答案】正确\n【易错】goto能用但不好。"
  },
  { id: "nc6502", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", "knowledgePoint": "字符数组", type: "judge", typeLabel: "判断",
    stem: "字符数组可以用字符串常量直接初始化。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数组", "字符数组"],
    analysis: "【题干】字符数组能用字符串初始化？\n【考点】字符数组\n【详细解答】\n1. char s[] = \"hello\"; 是合法的。\n2. 自动加结束符\\0。\n【答案】正确\n【易错】字符串直接初始化。"
  },
  { id: "nc8502", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", "knowledgePoint": "指针空类型", type: "judge", typeLabel: "判断",
    stem: "void指针可以指向任意类型数据。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["指针", "void指针"],
    analysis: "【题干】void指针能指向任意类型？\n【考点】void指针\n【详细解答】\n1. void*是通用指针，可以指向任意类型。\n2. 使用前要强制类型转换。\n【答案】正确\n【易错】void万能指针。"
  },
  { id: "nc9502", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", "knowledgePoint": "共用体", type: "judge", typeLabel: "判断",
    stem: "共用体所有成员共享同一段内存。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["结构体", "共用体"],
    analysis: "【题干】共用体成员共享内存？\n【考点】union\n【详细解答】\n1. 共用体union：所有成员从同一地址开始存放。\n2. 共用体长度等于最长成员长度。\n【答案】正确\n【易错】union共享内存。"
  }
]);
