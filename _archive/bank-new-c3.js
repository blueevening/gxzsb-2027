/* 新增题库 - 2026考纲版 - C语言程序设计 第三批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第2章 数据类型 - 再补充 =====
  {
    id: "nc2201", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "转义字符", type: "single", typeLabel: "单选",
    stem: "转义字符'\\n'的含义是（　）",
    options: ["换行", "回车", "制表符", "退格"],
    answer: "换行",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据类型", "转义字符"],
    analysis: "【题干】'\\n'是什么意思？\n【考点】常用转义字符\n【详细解答】\n1. \\n：换行符。\n2. \\t：制表符（Tab）。\n3. \\b：退格。\n4. \\\\：反斜杠本身。\n【选项逐个说】\nA. 换行 → 正确。\nB. 回车 → 错误。\nC. 制表符 → 错误：那是\\t。\nD. 退格 → 错误：那是\\b。\n【答案】换行\n【易错】\\n换行，\\t制表。"
  },
  {
    id: "nc2202", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "算术运算", type: "single", typeLabel: "单选",
    stem: "表达式 7 % 3 的值是（　）",
    options: ["2", "3", "1", "2.33"],
    answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["运算符", "取余"],
    analysis: "【题干】7%3的值？\n【考点】取余运算符\n【详细解答】\n1. % 是取余（求模）运算符。\n2. 7除以3商2余1。\n3. 所以7%3 = 1。\n4. 取余运算只适用于整数。\n【选项逐个说】\nA. 2 → 错误：那是商。\nB. 3 → 错误。\nC. 1 → 正确：余数。\nD. 2.33 → 错误：%不能用于浮点数。\n【答案】1\n【易错】%是取余不是除。"
  },

  // ===== 第4章 选择结构 - 再补充 =====
  {
    id: "nc4201", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "if-else配对", type: "single", typeLabel: "单选",
    stem: "C语言中，else总是与（　）配对",
    options: ["最远的if", "最近的未配对if", "第一个if", "任意if"],
    answer: "最近的未配对if",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["选择结构", "if-else"],
    analysis: "【题干】else与谁配对？\n【考点】if-else配对规则\n【详细解答】\n1. C语言规定：else与它前面最近的未配对if结合。\n2. 这就是\"悬挂else\"问题。\n3. 建议用花括号明确层次。\n【选项逐个说】\nA. 最远的if → 错误。\nB. 最近的未配对if → 正确。\nC. 第一个if → 错误。\nD. 任意if → 错误。\n【答案】最近的未配对if\n【易错】else就近匹配。"
  },
  {
    id: "nc4202", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "逻辑与短路", type: "single", typeLabel: "单选",
    stem: "表达式 (a=0) && (b=1) 执行后，b的值是（　）",
    options: ["0", "1", "不确定", "语法错误"],
    answer: "0",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["逻辑运算", "短路"],
    analysis: "【题干】(a=0)&&(b=1)后b的值？\n【考点】逻辑与短路\n【详细解答】\n1. && 短路：左边为假时，右边不计算。\n2. (a=0) 赋值为0，值为假。\n3. 右边 (b=1) 不执行，b保持原值。\n4. 如果b初始是0，那还是0。\n【选项逐个说】\nA. 0 → 正确：右边没执行。\nB. 1 → 错误：短路了没赋值。\nC. 不确定 → 错误。\nD. 语法错误 → 错误。\n【答案】0\n【易错】&&左假则右不执行。"
  },

  // ===== 第5章 循环结构 - 再补充 =====
  {
    id: "nc5201", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "嵌套循环", type: "single", typeLabel: "单选",
    stem: "双层循环，外层i从1到3，内层j从1到2，循环体总共执行几次？（　）",
    options: ["5", "6", "7", "8"],
    answer: "6",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "嵌套"],
    analysis: "【题干】外层3次，内层2次，总共几次？\n【考点】嵌套循环次数\n【详细解答】\n1. 外层执行3次，每次内层执行2次。\n2. 总次数 = 外层次数 × 内层次数 = 3 × 2 = 6。\n【选项逐个说】\nA. 5 → 错误。\nB. 6 → 正确。\nC. 7 → 错误。\nD. 8 → 错误。\n【答案】6\n【易错】嵌套循环总次数相乘。"
  },
  {
    id: "nc5202", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "while循环", type: "single", typeLabel: "单选",
    stem: "int i=0; while(i<10) i++; 循环结束后i的值是（　）",
    options: ["9", "10", "11", "不确定"],
    answer: "10",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "while"],
    analysis: "【题干】i=0; while(i<10) i++; 最后i=？\n【考点】while循环执行\n【详细解答】\n1. i从0开始，每次加1。\n2. 当i=10时，条件i<10不成立，循环结束。\n3. 所以循环结束后i=10。\n【选项逐个说】\nA. 9 → 错误：最后一次循环前是9。\nB. 10 → 正确。\nC. 11 → 错误。\nD. 不确定 → 错误。\n【答案】10\n【易错】i=10时退出循环。"
  },

  // ===== 第6章 数组 - 再补充 =====
  {
    id: "nc6201", module: "major", subject: "C语言程序设计", chapter: "ch-c-6",
    knowledgePoint: "二维数组", type: "single", typeLabel: "单选",
    stem: "int a[3][4]; 数组a共有多少个元素？（　）",
    options: ["7", "12", "34", "20"],
    answer: "12",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数组", "二维"],
    analysis: "【题干】int a[3][4]; 多少元素？\n【考点】二维数组\n【详细解答】\n1. 二维数组元素总数 = 行数 × 列数。\n2. 3行 × 4列 = 12个元素。\n【选项逐个说】\nA. 7 → 错误：加起来了。\nB. 12 → 正确。\nC. 34 → 错误。\nD. 20 → 错误。\n【答案】12\n【易错】行数乘列数。"
  },

  // ===== 第7章 函数 - 再补充 =====
  {
    id: "nc7201", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "局部变量", type: "single", typeLabel: "单选",
    stem: "局部变量的作用域是（　）",
    options: ["整个程序", "定义它的函数/复合语句内", "当前文件", "所有函数"],
    answer: "定义它的函数/复合语句内",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["函数", "变量作用域"],
    analysis: "【题干】局部变量的作用域？\n【考点】局部与全局变量\n【详细解答】\n1. 局部变量：在函数/复合语句内部定义，只在该范围内有效。\n2. 全局变量：在函数外部定义，整个程序都有效。\n3. 局部变量出了作用域就销毁了。\n【选项逐个说】\nA. 整个程序 → 错误：那是全局。\nB. 定义它的函数/复合语句内 → 正确。\nC. 当前文件 → 错误。\nD. 所有函数 → 错误。\n【答案】定义它的函数/复合语句内\n【易错】局部变量只在自己的函数里有效。"
  },
  {
    id: "nc7202", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "函数返回值", type: "single", typeLabel: "单选",
    stem: "函数返回值是通过什么语句返回的？（　）",
    options: ["return", "break", "continue", "exit"],
    answer: "return",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["函数", "返回值"],
    analysis: "【题干】函数返回值用什么语句？\n【考点】return语句\n【详细解答】\n1. return语句：从函数返回，同时返回一个值。\n2. break：跳出循环或switch。\n3. continue：跳过本次循环。\n4. exit：结束整个程序。\n【选项逐个说】\nA. return → 正确。\nB. break → 错误：跳出循环。\nC. continue → 错误：跳过本次。\nD. exit → 错误：结束程序。\n【答案】return\n【易错】return返回函数值。"
  },

  // ===== 第8章 指针 - 再补充 =====
  {
    id: "nc8201", module: "major", subject: "C语言程序设计", chapter: "ch-c-8",
    knowledgePoint: "指针定义", type: "single", typeLabel: "单选",
    stem: "int *p; 这里的*表示（　）",
    options: ["指针声明符", "乘号", "解引用", "注释"],
    answer: "指针声明符",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["指针", "定义"],
    analysis: "【题干】int *p; 里的*是什么？\n【考点】指针定义\n【详细解答】\n1. int *p; ——这里的*是指针声明符，表示p是一个指向int的指针。\n2. *p ——这里的*是解引用运算符，取指针指向的值。\n3. 同一个符号，在定义里和在表达式里意思不同。\n【选项逐个说】\nA. 指针声明符 → 正确：在定义里。\nB. 乘号 → 错误。\nC. 解引用 → 错误：那是在表达式里。\nD. 注释 → 错误。\n【答案】指针声明符\n【易错】定义时的*是声明指针，使用时的*是解引用。"
  },

  // ===== 第9章 结构体 - 再补充 =====
  {
    id: "nc9201", module: "major", subject: "C语言程序设计", chapter: "ch-c-9",
    knowledgePoint: "结构体指针", type: "single", typeLabel: "单选",
    stem: "结构体指针访问成员用什么运算符？（　）",
    options: [".", "->", "::", "&"],
    answer: "->",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["结构体", "指针"],
    analysis: "【题干】结构体指针访问成员用？\n【考点】结构体成员访问\n【详细解答】\n1. 结构体变量用 . 访问成员。\n2. 结构体指针用 -> 访问成员。\n3. 例：struct Student *p; p->age 等价于 (*p).age。\n【选项逐个说】\nA. . → 错误：那是变量用的。\nB. -> → 正确：指针用箭头。\nC. :: → 错误。\nD. & → 错误：取地址。\n【答案】->\n【易错】变量点，指针箭头。"
  },

  // ===== 第10章 文件 - 再补充 =====
  {
    id: "nc10201", module: "major", subject: "C语言程序设计", chapter: "ch-c-10",
    knowledgePoint: "文件指针", type: "single", typeLabel: "单选",
    stem: "C语言中，文件指针的类型是（　）",
    options: ["FILE", "file", "int", "struct"],
    answer: "FILE",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["文件", "文件指针"],
    analysis: "【题干】文件指针类型是？\n【考点】文件操作\n【详细解答】\n1. 文件指针类型是FILE（大写）。\n2. FILE是在stdio.h中定义的结构体类型。\n3. 例：FILE *fp; fp = fopen(\"a.txt\", \"r\");\n【选项逐个说】\nA. FILE → 正确：大写。\nB. file → 错误：小写不对。\nC. int → 错误。\nD. struct → 错误。\n【答案】FILE\n【易错】FILE是大写，是结构体类型。"
  }
]);
