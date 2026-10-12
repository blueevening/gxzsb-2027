/* 新增题库 - 2026考纲版 - C语言程序设计 第四批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 C语言概述 =====
  { id: "nc1301", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "C语言特点", type: "single", typeLabel: "单选",
    stem: "C语言是一种（　）语言", options: ["高级", "低级", "汇编", "机器"], answer: "高级",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "特点"],
    analysis: "【题干】C语言是什么级别的？\n【考点】C语言特点\n【详细解答】\n1. C语言是中级语言（介于高级和低级之间）。\n2. 既高级（面向用户）又低级（能直接操作硬件）。\n3. 一般归类为高级语言。\n【选项逐个说】\nA. 高级 → 正确。\nB. 低级 → 错误：那是汇编。\nC. 汇编 → 错误。\nD. 机器 → 错误。\n【答案】高级\n【易错】C语言是高级语言。"
  },
  { id: "nc1302", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "程序开发步骤", type: "single", typeLabel: "单选",
    stem: "C语言程序开发正确步骤是（　）", options: ["编辑→编译→连接→运行", "编译→编辑→连接→运行", "编辑→连接→编译→运行", "编辑→运行→编译→连接"], answer: "编辑→编译→连接→运行",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "开发步骤"],
    analysis: "【题干】C程序开发步骤？\n【考点】C程序开发流程\n【详细解答】\n1. 编辑：写源代码.c文件。\n2. 编译：把.c编译成目标文件.obj。\n3. 连接：把目标文件+库连起来成.exe。\n4. 运行。\n【选项逐个说】\nA. 编辑→编译→连接→运行 → 正确。\nB. 编译→编辑→连接→运行 → 错误。\nC. 编辑→连接→编译→运行 → 错误。\nD. 编辑→运行→编译→连接 → 错误。\n【答案】编辑→编译→连接→运行\n【易错】先编译后连接。"
  },
  { id: "nc1303", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "main函数", type: "single", typeLabel: "单选",
    stem: "C语言程序的执行入口是（　）", options: ["main函数", "include", "scanf", "printf"], answer: "main函数",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "main函数"],
    analysis: "【题干】程序入口是？\n【考点】main函数\n【详细解答】\n1. C程序从main函数开始执行。\n2. 一个程序有且只有一个main函数。\n【选项逐个说】\nA. main函数 → 正确。\nB. include → 错误：预处理命令。\nC. scanf → 错误：输入函数。\nD. printf → 错误：输出函数。\n【答案】main函数\n【易错】main是入口。"
  },

  // ===== 第2章 数据类型 =====
  { id: "nc2301", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "int类型", type: "single", typeLabel: "单选",
    stem: "C语言中int类型占几个字节？（　）", options: ["2", "4", "8", "1"], answer: "4",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "int"],
    analysis: "【题干】int占几个字节？\n【考点】基本数据类型长度\n【详细解答】\n1. 一般32位/64位系统：int占4字节。\n2. char占1字节，short占2字节，long占4或8字节。\n【选项逐个说】\nA. 2 → 错误：那是short。\nB. 4 → 正确。\nC. 8 → 错误。\nD. 1 → 错误：那是char。\n【答案】4\n【易错】int一般4字节。"
  },
  { id: "nc2302", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "float double", type: "single", typeLabel: "单选",
    stem: "C语言中double类型占几个字节？（　）", options: ["2", "4", "8", "16"], answer: "8",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "浮点"],
    analysis: "【题干】double占几个字节？\n【考点】浮点类型长度\n【详细解答】\n1. float：4字节，单精度。\n2. double：8字节，双精度。\n【选项逐个说】\nA. 2 → 错误。\nB. 4 → 错误：那是float。\nC. 8 → 正确。\nD. 16 → 错误。\n【答案】8\n【易错】float 4，double 8。"
  },
  { id: "nc2303", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "char类型", type: "single", typeLabel: "单选",
    stem: "char类型数据在内存中存放的是（　）", options: ["字符本身", "ASCII码", "二进制图片", "汉字"], answer: "ASCII码",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "char"],
    analysis: "【题干】char在内存存的是？\n【考点】字符存储\n【详细解答】\n1. char类型存的是字符的ASCII码值。\n2. 例：'A'存的是65。\n3. char和int可以互相赋值。\n【选项逐个说】\nA. 字符本身 → 错误。\nB. ASCII码 → 正确。\nC. 二进制图片 → 错误。\nD. 汉字 → 错误。\n【答案】ASCII码\n【易错】char存ASCII码。"
  },
  { id: "nc2304", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "常量", type: "single", typeLabel: "单选",
    stem: "以下哪个是正确的字符常量？（　）", options: ["'a'", "\"a\"", "a", "'abc'"], answer: "'a'",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "常量"],
    analysis: "【题干】正确的字符常量？\n【考点】字符常量与字符串\n【详细解答】\n1. 字符常量：单引号括起来单个字符。\n2. 字符串常量：双引号括起来。\n3. 'a'是字符常量。\n4. \"a\"是字符串常量（含结束符）。\n【选项逐个说】\nA. 'a' → 正确：单引号单字符。\nB. \"a\" → 错误：那是字符串。\nC. a → 错误：那是标识符。\nD. 'abc' → 错误：单引号只能一个字符。\n【答案】'a'\n【易错】字符单引号，字符串双引号。"
  },
  { id: "nc2305", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "标识符", type: "single", typeLabel: "单选",
    stem: "以下哪个是合法的标识符？（　）", options: ["_abc", "1abc", "abc-1", "int"], answer: "_abc",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "标识符"],
    analysis: "【题干】合法标识符？\n【考点】命名规则\n【详细解答】\n1. 标识符规则：字母、数字、下划线组成，开头不能是数字，不能是关键字。\n2. _abc合法。\n3. 1abc开头是数字，不合法。\n4. abc-1有减号，不合法。\n5. int是关键字，不合法。\n【选项逐个说】\nA. _abc → 正确。\nB. 1abc → 错误：开头数字。\nC. abc-1 → 错误：有减号。\nD. int → 错误：关键字。\n【答案】_abc\n【易错】开头不能数字，不能有特殊符号。"
  },

  // ===== 第3章 顺序结构 =====
  { id: "nc3301", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "printf格式符", type: "single", typeLabel: "单选",
    stem: "printf输出整数用什么格式符？（　）", options: ["%d", "%f", "%c", "%s"], answer: "%d",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "printf"],
    analysis: "【题干】输出整数用？\n【考点】printf格式符\n【详细解答】\n1. %d：输出整数。\n2. %f：输出浮点数。\n3. %c：输出字符。\n4. %s：输出字符串。\n【选项逐个说】\nA. %d → 正确。\nB. %f → 错误：浮点。\nC. %c → 错误：字符。\nD. %s → 错误：字符串。\n【答案】%d\n【易错】%d整，%f浮，%c字，%s串。"
  },
  { id: "nc3302", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "scanf输入", type: "single", typeLabel: "单选",
    stem: "scanf(\"%d\", &a); 中&的作用是（　）", options: ["取地址", "乘号", "引用", "注释"], answer: "取地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "scanf"],
    analysis: "【题干】scanf里&的作用？\n【考点】scanf\n【详细解答】\n1. scanf需要变量的地址，才能把输入值存进去。\n2. &a就是取变量a的地址。\n【选项逐个说】\nA. 取地址 → 正确。\nB. 乘号 → 错误。\nC. 引用 → 错误。\nD. 注释 → 错误。\n【答案】取地址\n【易错】scanf要加&。"
  },
  { id: "nc3303", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "赋值语句", type: "single", typeLabel: "单选",
    stem: "int a = 5; a = a + 3; 后a的值是（　）", options: ["5", "8", "3", "53"], answer: "8",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["顺序结构", "赋值"],
    analysis: "【题干】a=5; a=a+3; 后a=？\n【考点】赋值运算\n【详细解答】\n1. 先算右边a+3=5+3=8。\n2. 把8赋给左边a。\n3. 结果a=8。\n【选项逐个说】\nA. 5 → 错误。\nB. 8 → 正确。\nC. 3 → 错误。\nD. 53 → 错误。\n【答案】8\n【易错】赋值是先算右边。"
  },

  // ===== 第4章 选择结构 =====
  { id: "nc4301", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "if语句", type: "single", typeLabel: "单选",
    stem: "if(a>b) printf(\"%d\", a); 以下说法正确的是（　）", options: ["a>b时输出a", "a<b时输出a", "总是输出a", "不输出"], answer: "a>b时输出a",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "if"],
    analysis: "【题干】if(a>b)输出a？\n【考点】if语句\n【详细解答】\n1. 条件a>b成立时，才执行printf。\n2. 条件不成立就不执行。\n【选项逐个说】\nA. a>b时输出a → 正确。\nB. a<b时输出a → 错误。\nC. 总是输出a → 错误。\nD. 不输出 → 错误。\n【答案】a>b时输出a\n【易错】条件成立才执行。"
  },
  { id: "nc4302", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "三目运算符", type: "single", typeLabel: "单选",
    stem: "表达式 a>b ? a : b 的功能是（　）", options: ["求最大值", "求最小值", "求和", "求差"], answer: "求最大值",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "三目"],
    analysis: "【题干】a>b?a:b功能？\n【考点】条件运算符\n【详细解答】\n1. 条件?值1:值2。\n2. 条件成立取值1，不成立取值2。\n3. a>b?a:b就是取a和b中大的那个。\n【选项逐个说】\nA. 求最大值 → 正确。\nB. 求最小值 → 错误：那是a<b?a:b。\nC. 求和 → 错误。\nD. 求差 → 错误。\n【答案】求最大值\n【易错】三目运算符=简化if-else。"
  },
  { id: "nc4303", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "switch语句", type: "single", typeLabel: "单选",
    stem: "switch语句中break的作用是（　）", options: ["跳出switch", "继续下一个case", "结束程序", "暂停"], answer: "跳出switch",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["选择结构", "switch"],
    analysis: "【题干】break在switch里作用？\n【考点】switch\n【详细解答】\n1. break：跳出switch语句。\n2. 没有break就会继续执行后面case。\n【选项逐个说】\nA. 跳出switch → 正确。\nB. 继续下一个case → 错误：那是没有break。\nC. 结束程序 → 错误。\nD. 暂停 → 错误。\n【答案】跳出switch\n【易错】break跳出switch。"
  },

  // ===== 第5章 循环结构 =====
  { id: "nc5301", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "for循环", type: "single", typeLabel: "单选",
    stem: "for(i=0;i<5;i++) 循环体执行几次？（　）", options: ["4", "5", "6", "不确定"], answer: "5",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "for"],
    analysis: "【题干】for(i=0;i<5;i++)几次？\n【考点】for循环次数\n【详细解答】\n1. i=0,1,2,3,4时条件成立。\n2. i=5时i<5不成立，退出。\n3. 共5次。\n【选项逐个说】\nA. 4 → 错误。\nB. 5 → 正确。\nC. 6 → 错误。\nD. 不确定 → 错误。\n【答案】5\n【易错】从0到4共5次。"
  },
  { id: "nc5302", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "do-while", type: "single", typeLabel: "单选",
    stem: "do-while循环至少执行几次？（　）", options: ["0次", "1次", "2次", "不确定"], answer: "1次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "do-while"],
    analysis: "【题干】do-while至少执行几次？\n【考点】三种循环区别\n【详细解答】\n1. do-while：先执行循环体，再判断条件。\n2. 所以至少执行1次。\n3. while和for：先判断后执行，可能0次。\n【选项逐个说】\nA. 0次 → 错误：那是while。\nB. 1次 → 正确。\nC. 2次 → 错误。\nD. 不确定 → 错误。\n【答案】1次\n【易错】do-while至少一次。"
  },
  { id: "nc5303", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "break", type: "single", typeLabel: "单选",
    stem: "循环中break语句的作用是（　）", options: ["跳出整个循环", "跳过本次循环", "继续循环", "结束程序"], answer: "跳出整个循环",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "break"],
    analysis: "【题干】break作用？\n【考点】break与continue\n【详细解答】\n1. break：跳出整个循环。\n2. continue：跳过本次，继续下一次。\n【选项逐个说】\nA. 跳出整个循环 → 正确。\nB. 跳过本次循环 → 错误：那是continue。\nC. 继续循环 → 错误。\nD. 结束程序 → 错误。\n【答案】跳出整个循环\n【易错】break跳出，continue跳过本次。"
  },
  { id: "nc5304", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "continue", type: "single", typeLabel: "单选",
    stem: "循环中continue语句的作用是（　）", options: ["跳出整个循环", "跳过本次循环，继续下一次", "结束程序", "暂停"], answer: "跳过本次循环，继续下一次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "continue"],
    analysis: "【题干】continue作用？\n【考点】break与continue\n【详细解答】\n1. continue：跳过本次循环剩下的语句，直接开始下一次。\n2. break是彻底跳出。\n【选项逐个说】\nA. 跳出整个循环 → 错误：那是break。\nB. 跳过本次循环，继续下一次 → 正确。\nC. 结束程序 → 错误。\nD. 暂停 → 错误。\n【答案】跳过本次循环，继续下一次\n【易错】continue不跳出循环。"
  },

  // ===== 第6章 数组 =====
  { id: "nc6301", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", knowledgePoint: "一维数组定义", type: "single", typeLabel: "单选",
    stem: "int a[5]; 数组下标的合法范围是（　）", options: ["1~5", "0~4", "1~4", "0~5"], answer: "0~4",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数组", "下标"],
    analysis: "【题干】int a[5]; 下标范围？\n【考点】数组下标\n【详细解答】\n1. C语言数组下标从0开始。\n2. int a[5]有a[0],a[1],a[2],a[3],a[4]共5个元素。\n3. 最大下标是4，不是5。\n【选项逐个说】\nA. 1~5 → 错误。\nB. 0~4 → 正确。\nC. 1~4 → 错误。\nD. 0~5 → 错误：a[5]越界了。\n【答案】0~4\n【易错】数组从0开始。"
  },
  { id: "nc6302", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", knowledgePoint: "字符串", type: "single", typeLabel: "单选",
    stem: "C语言字符串以什么作为结束标志？（　）", options: ["'\\0'", "'\\n'", "空格", "回车"], answer: "'\\0'",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数组", "字符串"],
    analysis: "【题干】字符串结束标志？\n【考点】字符串\n【详细解答】\n1. C语言字符串以'\\0'作为结束标志。\n2. \"abc\"在内存中是'a','b','c','\\0'共4个字符。\n【选项逐个说】\nA. '\\0' → 正确。\nB. '\\n' → 错误：换行。\nC. 空格 → 错误。\nD. 回车 → 错误。\n【答案】'\\0'\n【易错】字符串结束符\\0。"
  },
  { id: "nc6303", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", knowledgePoint: "字符数组长度", type: "single", typeLabel: "单选",
    stem: "char s[] = \"hello\"; 数组s的长度是（　）", options: ["5", "6", "4", "7"], answer: "6",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数组", "字符串"],
    analysis: "【题干】\"hello\"数组长度？\n【考点】字符串长度\n【详细解答】\n1. \"hello\"有h,e,l,l,o 5个字符。\n2. 加上结束符\\0，共6个字节。\n【选项逐个说】\nA. 5 → 错误：那是字符串长度strlen。\nB. 6 → 正确：数组长度含结束符。\nC. 4 → 错误。\nD. 7 → 错误。\n【答案】6\n【易错】strlen是5，sizeof是6。"
  },

  // ===== 第7章 函数 =====
  { id: "nc7301", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", knowledgePoint: "函数定义", type: "single", typeLabel: "单选",
    stem: "函数定义时，函数名后面的括号里是（　）", options: ["参数列表", "返回值", "函数体", "注释"], answer: "参数列表",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "定义"],
    analysis: "【题干】函数名后括号里是？\n【考点】函数定义\n【详细解答】\n1. 函数定义：返回值类型 函数名(参数列表) { 函数体 }。\n2. 括号里是形式参数列表。\n【选项逐个说】\nA. 参数列表 → 正确。\nB. 返回值 → 错误：在前面。\nC. 函数体 → 错误：在花括号里。\nD. 注释 → 错误。\n【答案】参数列表\n【易错】括号里是形参。"
  },
  { id: "nc7302", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", knowledgePoint: "值传递", type: "single", typeLabel: "单选",
    stem: "C语言函数参数传递方式是（　）", options: ["值传递", "地址传递", "引用传递", "双向传递"], answer: "值传递",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["函数", "参数传递"],
    analysis: "【题干】C语言参数传递方式？\n【考点】值传递\n【详细解答】\n1. C语言只有值传递。\n2. 传递的是实参的值的副本。\n3. 函数内改变形参不影响实参。\n4. 想改实参就传地址（指针）。\n【选项逐个说】\nA. 值传递 → 正确。\nB. 地址传递 → 错误：那是传指针的值。\nC. 引用传递 → 错误：那是C++。\nD. 双向传递 → 错误。\n【答案】值传递\n【易错】C语言只有值传递。"
  },
  { id: "nc7303", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", knowledgePoint: "函数递归", type: "single", typeLabel: "单选",
    stem: "函数递归是指（　）", options: ["函数调用自己", "函数调用其他函数", "嵌套定义", "多个函数"], answer: "函数调用自己",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "递归"],
    analysis: "【题干】递归是指？\n【考点】函数递归\n【详细解答】\n1. 递归：函数直接或间接调用自己。\n2. 递归要有终止条件，否则死循环。\n【选项逐个说】\nA. 函数调用自己 → 正确。\nB. 函数调用其他函数 → 错误。\nC. 嵌套定义 → 错误：C不能嵌套定义。\nD. 多个函数 → 错误。\n【答案】函数调用自己\n【易错】递归=自己调自己。"
  },

  // ===== 第8章 指针 =====
  { id: "nc8301", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", knowledgePoint: "指针概念", type: "single", typeLabel: "单选",
    stem: "指针变量存放的是（　）", options: ["数据值", "内存地址", "变量名", "函数名"], answer: "内存地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "概念"],
    analysis: "【题干】指针变量存的是？\n【考点】指针概念\n【详细解答】\n1. 指针变量专门用来存内存地址。\n2. 通过地址可以找到对应内存里的数据。\n【选项逐个说】\nA. 数据值 → 错误：那是普通变量。\nB. 内存地址 → 正确。\nC. 变量名 → 错误。\nD. 函数名 → 错误。\n【答案】内存地址\n【易错】指针存地址。"
  },
  { id: "nc8302", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", knowledgePoint: "&和*", type: "single", typeLabel: "单选",
    stem: "int a=5; int *p=&a; *p的值是（　）", options: ["5", "a的地址", "不确定", "语法错误"], answer: "5",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "解引用"],
    analysis: "【题干】int a=5; *p=&a; *p=？\n【考点】指针基本操作\n【详细解答】\n1. p存的是a的地址。\n2. *p是取p指向地址里的值，也就是a的值5。\n【选项逐个说】\nA. 5 → 正确。\nB. a的地址 → 错误：那是p。\nC. 不确定 → 错误。\nD. 语法错误 → 错误。\n【答案】5\n【易错】*p就是p指向的值。"
  },
  { id: "nc8303", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", knowledgePoint: "数组与指针", type: "single", typeLabel: "单选",
    stem: "数组名a是（　）", options: ["数组首元素地址", "数组第一个元素", "数组长度", "数组类型"], answer: "数组首元素地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["指针", "数组"],
    analysis: "【题干】数组名a是？\n【考点】数组名\n【详细解答】\n1. 数组名代表数组首元素的地址。\n2. a 和 &a[0] 等价。\n3. 数组名是常量，不能++。\n【选项逐个说】\nA. 数组首元素地址 → 正确。\nB. 数组第一个元素 → 错误。\nC. 数组长度 → 错误。\nD. 数组类型 → 错误。\n【答案】数组首元素地址\n【易错】数组名是首地址。"
  },

  // ===== 第9章 结构体 =====
  { id: "nc9301", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", knowledgePoint: "结构体概念", type: "single", typeLabel: "单选",
    stem: "结构体类型用于（　）", options: ["把不同类型数据组合在一起", "存整数", "存字符串", "存数组"], answer: "把不同类型数据组合在一起",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["结构体", "概念"],
    analysis: "【题干】结构体作用？\n【考点】结构体\n【详细解答】\n1. 结构体：可以把不同类型的数据组合成一个整体。\n2. 例：学生：学号(字符串)+姓名(字符串)+年龄(整数)+成绩(浮点)。\n【选项逐个说】\nA. 把不同类型数据组合在一起 → 正确。\nB. 存整数 → 错误。\nC. 存字符串 → 错误。\nD. 存数组 → 错误。\n【答案】把不同类型数据组合在一起\n【易错】结构体组合不同类型。"
  },
  { id: "nc9302", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", knowledgePoint: "结构体成员访问", type: "single", typeLabel: "单选",
    stem: "结构体变量访问成员用什么符号？（　）", options: [".", "->", "::", "&"], answer: ".",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["结构体", "成员访问"],
    analysis: "【题干】结构体变量访问成员？\n【考点】结构体访问\n【详细解答】\n1. 结构体变量用 . 访问。\n2. 结构体指针用 -> 访问。\n【选项逐个说】\nA. . → 正确：变量用点。\nB. -> → 错误：指针用箭头。\nC. :: → 错误。\nD. & → 错误。\n【答案】.\n【易错】变量点，指针箭头。"
  },

  // ===== 第10章 文件 =====
  { id: "nc10301", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", knowledgePoint: "文件打开方式", type: "single", typeLabel: "单选",
    stem: "fopen(\"a.txt\", \"r\"); 中\"r\"表示（　）", options: ["只读打开", "只写打开", "追加", "读写"], answer: "只读打开",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "打开方式"],
    analysis: "【题干】fopen(\"r\")表示？\n【考点】文件打开模式\n【详细解答】\n1. r：只读打开，文件必须存在。\n2. w：只写打开，文件不存在就创建，存在就清空。\n3. a：追加写。\n【选项逐个说】\nA. 只读打开 → 正确。\nB. 只写打开 → 错误：那是w。\nC. 追加 → 错误：那是a。\nD. 读写 → 错误。\n【答案】只读打开\n【易错】r读，w写，a追加。"
  },
  { id: "nc10302", module: "major", subject: "C语言程序设计", chapter: "ch-c-10", knowledgePoint: "文件关闭", type: "single", typeLabel: "单选",
    stem: "文件使用完后应该调用什么函数关闭？（　）", options: ["fclose", "fopen", "fread", "fwrite"], answer: "fclose",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["文件", "关闭"],
    analysis: "【题干】关闭文件用？\n【考点】文件操作\n【详细解答】\n1. fopen打开文件。\n2. fclose关闭文件。\n3. 用完一定要关闭，否则数据可能丢。\n【选项逐个说】\nA. fclose → 正确。\nB. fopen → 错误：打开。\nC. fread → 错误：读。\nD. fwrite → 错误：写。\n【答案】fclose\n【易错】开fopen关fclose。"
  },

  // ===== 判断题 =====
  { id: "nc1304", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "C程序大小写", type: "judge", typeLabel: "判断",
    stem: "C语言区分大小写。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["概述", "大小写"],
    analysis: "【题干】C语言区分大小写？\n【考点】C语言大小写\n【详细解答】\n1. C语言严格区分大小写。\n2. Main和main是不同的。\n3. 习惯上变量和函数小写，宏大写。\n【答案】正确\n【易错】C语言大小写敏感。"
  },
  { id: "nc2306", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "自增运算符", type: "judge", typeLabel: "判断",
    stem: "++a是先使用a的值再自增1。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运算符", "自增"],
    analysis: "【题干】++a是先使用再加？\n【考点】前置后置++\n【详细解答】\n1. ++a：先自增1，再使用a的值。\n2. a++：先使用a的值，再自增1。\n【答案】错误\n【易错】前置先加后用，后置先用后加。"
  },
  { id: "nc5305", module: "major", subject: "C语言程序设计", chapter: "ch-c-5", knowledgePoint: "嵌套循环", type: "judge", typeLabel: "判断",
    stem: "循环可以嵌套。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["循环", "嵌套"],
    analysis: "【题干】循环可以嵌套？\n【考点】循环嵌套\n【详细解答】\n1. C语言允许循环嵌套。\n2. for里面可以放while，while里面可以放for。\n【答案】正确\n【易错】循环可以多层嵌套。"
  },
  { id: "nc6304", module: "major", subject: "C语言程序设计", chapter: "ch-c-6", knowledgePoint: "数组初始化", type: "judge", typeLabel: "判断",
    stem: "int a[5] = {1,2,3}; 数组后两个元素值是0。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数组", "初始化"],
    analysis: "【题干】部分初始化后其他元素是0？\n【考点】数组初始化\n【详细解答】\n1. 数组初始化时，提供初值的元素赋对应值。\n2. 没提供初值的元素自动初始化为0。\n【答案】正确\n【易错】数组不完整初始化时，剩余元素为0。"
  },
  { id: "nc7304", module: "major", subject: "C语言程序设计", chapter: "ch-c-7", knowledgePoint: "函数声明", type: "judge", typeLabel: "判断",
    stem: "函数必须先声明后使用。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["函数", "声明"],
    analysis: "【题干】函数先声明后使用？\n【考点】函数声明\n【详细解答】\n1. 要调用函数，必须先声明（或先定义）。\n2. 否则编译器不知道这个函数存在。\n【答案】正确\n【易错】先声明后调用。"
  },
  { id: "nc8304", module: "major", subject: "C语言程序设计", chapter: "ch-c-8", knowledgePoint: "空指针", type: "judge", typeLabel: "判断",
    stem: "空指针NULL表示不指向任何内存。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["指针", "NULL"],
    analysis: "【题干】空指针NULL？\n【考点】空指针\n【详细解答】\n1. NULL是空指针，不指向任何有效内存。\n2. 使用空指针会报错。\n【答案】正确\n【易错】NULL是0地址。"
  },
  { id: "nc9303", module: "major", subject: "C语言程序设计", chapter: "ch-c-9", knowledgePoint: "typedef", type: "judge", typeLabel: "判断",
    stem: "typedef用于给已有类型起别名。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["结构体", "typedef"],
    analysis: "【题干】typedef是起别名？\n【考点】typedef\n【详细解答】\n1. typedef作用：给已有类型定义新名字。\n2. 例：typedef int INTEGER; 之后INTEGER就是int。\n【答案】正确\n【易错】typedef是类型别名。"
  }
]);
