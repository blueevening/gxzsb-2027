/* 新增题库 - 2026考纲版 - C语言程序设计 第五批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 运算符 =====
  { id: "nc2401", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "运算符优先级", type: "single", typeLabel: "单选",
    stem: "表达式 3 + 2 * 5 的值是（　）", options: ["25", "13", "10", "15"], answer: "13",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运算符", "优先级"],
    analysis: "【题干】3+2*5=？\n【考点】运算符优先级\n【详细解答】\n1. 先乘除后加减。\n2. 2*5=10，3+10=13。\n【选项逐个说】\nA. 25 → 错误：从左到右算错了。\nB. 13 → 正确。\nC. 10 → 错误。\nD. 15 → 错误。\n【答案】13\n【易错】先乘后加。"
  },
  { id: "nc2402", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "赋值运算", type: "single", typeLabel: "单选",
    stem: "int a=10; a += 5; 后a的值是（　）", options: ["10", "15", "5", "50"], answer: "15",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运算符", "复合赋值"],
    analysis: "【题干】a=10; a+=5; 后a=？\n【考点】复合赋值\n【详细解答】\n1. a += 5 等价于 a = a + 5。\n2. a = 10+5 = 15。\n【选项逐个说】\nA. 10 → 错误。\nB. 15 → 正确。\nC. 5 → 错误。\nD. 50 → 错误。\n【答案】15\n【易错】a+=n就是a=a+n。"
  },
  { id: "nc2403", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "逗号运算符", type: "single", typeLabel: "单选",
    stem: "表达式 (a=3, a*4, a+5) 的值是（　）", options: ["3", "12", "8", "15"], answer: "8",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运算符", "逗号"],
    analysis: "【题干】逗号表达式值？\n【考点】逗号运算符\n【详细解答】\n1. 逗号表达式从左到右算，最后一个表达式的值是整个表达式的值。\n2. a=3，a*4=12（不赋值），a+5=8。\n3. 最后值是8。\n【选项逐个说】\nA. 3 → 错误。\nB. 12 → 错误。\nC. 8 → 正确。\nD. 15 → 错误。\n【答案】8\n【易错】逗号表达式取最后一个值。"
  },

  // ===== 顺序结构 =====
  { id: "nc3401", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "getchar/putchar", type: "single", typeLabel: "单选",
    stem: "putchar函数的作用是（　）", options: ["输出一个字符", "输出一个整数", "输出一个字符串", "输入一个字符"], answer: "输出一个字符",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "字符IO"],
    analysis: "【题干】putchar作用？\n【考点】字符输入输出\n【详细解答】\n1. putchar(c)：输出一个字符。\n2. getchar()：输入一个字符。\n【选项逐个说】\nA. 输出一个字符 → 正确。\nB. 输出一个整数 → 错误。\nC. 输出一个字符串 → 错误。\nD. 输入一个字符 → 错误：那是getchar。\n【答案】输出一个字符\n【易错】put输出，get输入。"
  },

  // ===== 选择结构 =====
  { id: "nc4401", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "switch表达式类型", type: "single", typeLabel: "单选",
    stem: "switch后的表达式不能是什么类型？（　）", options: ["int", "char", "float", "enum"], answer: "float",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["选择结构", "switch"],
    analysis: "【题干】switch表达式不能是？\n【考点】switch\n【详细解答】\n1. switch表达式必须是整型或字符型。\n2. 不能是浮点型（float/double）。\n【选项逐个说】\nA. int → 错误：可以。\nB. char → 错误：可以。\nC. float → 正确：不可以。\nD. enum → 错误：可以。\n【答案】float\n【易错】switch不能用浮点数。"
  },

  // ===== 循环结构 =====
  { id: "nc5401", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "break跳出几层", type: "single", typeLabel: "单选",
    stem: "嵌套循环中break语句跳出（　）", options: ["最内层循环", "所有循环", "外层循环", "程序"], answer: "最内层循环",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["循环", "break"],
    analysis: "【题干】嵌套循环break跳出几层？\n【考点】break\n【详细解答】\n1. break只能跳出它所在的那一层循环。\n2. 外层循环还在继续。\n【选项逐个说】\nA. 最内层循环 → 正确。\nB. 所有循环 → 错误。\nC. 外层循环 → 错误。\nD. 程序 → 错误。\n【答案】最内层循环\n【易错】break只跳一层。"
  },
  { id: "nc5402", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "while条件", type: "single", typeLabel: "单选",
    stem: "while循环条件为（　）时继续循环", options: ["真", "假", "0", "非零"], answer: "真",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "while"],
    analysis: "【题干】while什么时候继续？\n【考点】while循环\n【详细解答】\n1. while(条件)：条件为真（非0）就继续循环。\n2. 条件为假（0）就退出。\n【选项逐个说】\nA. 真 → 正确。\nB. 假 → 错误：退出。\nC. 0 → 错误：那是假。\nD. 非零 → 正确：和真一样。\n【答案】真\n【易错】条件为真才循环。"
  },

  // ===== 数组 =====
  { id: "nc6401", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", knowledgePoint: "字符串处理函数", type: "single", typeLabel: "单选",
    stem: "strlen(\"abc\\0def\") 的返回值是（　）", options: ["3", "7", "8", "6"], answer: "3",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数组", "字符串函数"],
    analysis: "【题干】strlen(\"abc\\0def\")=？\n【考点】strlen函数\n【详细解答】\n1. strlen遇到\\0就停止。\n2. \"abc\\0def\"第一个\\0在第4个位置。\n3. 所以长度是3。\n【选项逐个说】\nA. 3 → 正确。\nB. 7 → 错误。\nC. 8 → 错误。\nD. 6 → 错误。\n【答案】3\n【易错】strlen到\\0结束。"
  },

  // ===== 函数 =====
  { id: "nc7401", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", knowledgePoint: "局部静态变量", type: "single", typeLabel: "单选",
    stem: "函数内static局部变量，以下说法正确的是（　）", options: ["每次调用都重新初始化", "只初始化一次，值保留到下次调用", "作用域是整个程序", "和全局变量一样"], answer: "只初始化一次，值保留到下次调用",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["函数", "静态变量"],
    analysis: "【题干】static局部变量特点？\n【考点】存储类别\n【详细解答】\n1. static局部变量：只在编译时初始化一次。\n2. 函数调用结束后变量不销毁，值保留。\n3. 作用域还是局部的，其他函数不能用。\n【选项逐个说】\nA. 每次调用都重新初始化 → 错误：那是auto。\nB. 只初始化一次，值保留到下次调用 → 正确。\nC. 作用域是整个程序 → 错误。\nD. 和全局变量一样 → 错误。\n【答案】只初始化一次，值保留到下次调用\n【易错】static局部变量值保留。"
  },

  // ===== 指针 =====
  { id: "nc8401", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", knowledgePoint: "指针运算", type: "single", typeLabel: "单选",
    stem: "int *p; p++; 后p的值增加了（　）", options: ["1字节", "2字节", "4字节", "不确定"], answer: "4字节",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["指针", "指针运算"],
    analysis: "【题干】int *p; p++; 加了多少？\n【考点】指针加减\n【详细解答】\n1. p++不是加1字节，而是加一个int的长度。\n2. int占4字节，所以p++加4字节。\n【选项逐个说】\nA. 1字节 → 错误。\nB. 2字节 → 错误。\nC. 4字节 → 正确：int长度。\nD. 不确定 → 错误。\n【答案】4字节\n【易错】指针加减是按类型长度走的。"
  },

  // ===== 结构体 =====
  { id: "nc9401", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", knowledgePoint: "结构体大小", type: "single", typeLabel: "单选",
    stem: "结构体成员可以是不同数据类型。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["结构体", "特点"],
    analysis: "【题干】结构体成员可以不同类型？\n【考点】结构体\n【详细解答】\n1. 结构体就是把不同类型数据组合在一起。\n2. 数组只能同类型。\n【答案】正确\n【易错】结构体能混类型。"
  },

  // ===== 文件 =====
  { id: "nc10401", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", knowledgePoint: "fgetc", type: "single", typeLabel: "单选",
    stem: "fgetc(fp)函数作用是（　）", options: ["从文件读一个字符", "向文件写一个字符", "读一个整数", "写一个字符串"], answer: "从文件读一个字符",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "字符读写"],
    analysis: "【题干】fgetc作用？\n【考点】文件读写函数\n【详细解答】\n1. fgetc：从文件读一个字符。\n2. fputc：向文件写一个字符。\n【选项逐个说】\nA. 从文件读一个字符 → 正确。\nB. 向文件写一个字符 → 错误：那是fputc。\nC. 读一个整数 → 错误。\nD. 写一个字符串 → 错误。\n【答案】从文件读一个字符\n【易错】fgetc读字符。"
  },

  // ===== 判断题 =====
  { id: "nc2404", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "自增", type: "judge", typeLabel: "判断",
    stem: "a++是先自增1再使用a的值。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运算符", "自增"],
    analysis: "【题干】a++是先加后用？\n【考点】++a vs a++\n【详细解答】\n1. ++a：先加后用。\n2. a++：先用后加。\n【答案】错误\n【易错】后置先用后加。"
  },
  { id: "nc4402", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "条件表达式", type: "judge", typeLabel: "判断",
    stem: "条件运算符?:是三目运算符。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "三目"],
    analysis: "【题干】?:是三目运算符？\n【考点】条件运算符\n【详细解答】\n1. ?:需要三个操作数，是C语言唯一三目运算符。\n【答案】正确\n【易错】三目就是问号冒号。"
  },
  { id: "nc6402", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", knowledgePoint: "数组名", type: "judge", typeLabel: "判断",
    stem: "数组名是指针常量，不能自增自减。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数组", "数组名"],
    analysis: "【题干】数组名是常量不能++？\n【考点】数组名\n【详细解答】\n1. 数组名代表首地址，是常量。\n2. 不能a++这样操作。\n【答案】正确\n【易错】数组名是常量。"
  },
  { id: "nc7402", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", knowledgePoint: "函数返回值", type: "judge", typeLabel: "判断",
    stem: "void类型函数没有返回值。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "返回值"],
    analysis: "【题干】void函数无返回值？\n【考点】函数返回类型\n【详细解答】\n1. void表示函数不返回任何值。\n【答案】正确\n【易错】void无返回。"
  },
  { id: "nc8402", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", knowledgePoint: "指针与数组", type: "judge", typeLabel: "判断",
    stem: "指针可以指向数组元素。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "数组"],
    analysis: "【题干】指针能指向数组元素？\n【考点】指针与数组\n【详细解答】\n1. 指针常用来操作数组元素。\n2. int *p = &a[0];\n【答案】正确\n【易错】指针操作数组很常见。"
  },
  { id: "nc10402", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", knowledgePoint: "文件指针", type: "judge", typeLabel: "判断",
    stem: "使用完文件后必须fclose关闭。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "关闭"],
    analysis: "【题干】用完文件要fclose？\n【考点】文件操作\n【详细解答】\n1. 打开文件后用完必须关闭，否则数据可能丢失。\n【答案】正确\n【易错】开了就要关。"
  }
]);
