/* 新增题库 - 2026考纲版 - C语言程序设计 第一批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 程序设计和C语言 =====
  {
    id: "nc1001", module: "major", subject: "C语言程序设计", chapter: "ch-c-1",
    knowledgePoint: "C程序结构", type: "single", typeLabel: "单选",
    stem: "一个C语言程序的基本组成单位是（　）",
    options: ["程序行", "函数", "语句", "字符"],
    answer: "函数",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["C语言", "程序结构"],
    analysis: "【题干】C语言程序的基本组成单位是？\n【考点】C程序结构\n【详细解答】\n1. C程序是由函数组成的。\n2. 一个C程序有且只有一个main函数（主函数）。\n3. 程序从main函数开始执行。\n4. 除了main函数，还可以有其他自定义函数。\n【选项逐个说】\nA. 程序行 → 错误。\nB. 函数 → 正确。\nC. 语句 → 错误。\nD. 字符 → 错误。\n【答案】函数\n【易错】C程序=函数的集合，main是入口。"
  },
  {
    id: "nc1002", module: "major", subject: "C语言程序设计", chapter: "ch-c-1",
    knowledgePoint: "main函数", type: "single", typeLabel: "单选",
    stem: "C语言程序的执行入口是（　）",
    options: ["main函数", "include命令", "第一个自定义函数", "头文件"],
    answer: "main函数",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["C语言", "main函数"],
    analysis: "【题干】C程序的执行入口是？\n【考点】main函数\n【详细解答】\n1. C程序从main函数开始执行。\n2. main函数可以在程序的任何位置，但执行总是从它开始。\n3. 一个程序只能有一个main函数。\n【选项逐个说】\nA. main函数 → 正确。\nB. include命令 → 错误：那是预处理命令。\nC. 第一个自定义函数 → 错误。\nD. 头文件 → 错误。\n【答案】main函数\n【易错】不管main写在哪，都是从它开始执行。"
  },

  // ===== 第2章 数据表现形式及运算 =====
  {
    id: "nc2001", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "数据类型", type: "single", typeLabel: "单选",
    stem: "以下哪个不是C语言的基本数据类型？（　）",
    options: ["int", "float", "struct", "char"],
    answer: "struct",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据类型", "基本类型"],
    analysis: "【题干】哪个不是C语言基本数据类型？\n【考点】基本数据类型\n【详细解答】\n1. C语言基本类型：整型(int)、字符型(char)、实型(float/double)。\n2. struct是构造类型（自定义类型），不是基本类型。\n3. 还有枚举类型(enum)、数组等。\n【选项逐个说】\nA. int → 错误：基本整型。\nB. float → 错误：基本实型。\nC. struct → 正确：构造类型。\nD. char → 错误：基本字符型。\n【答案】struct\n【易错】基本类型只有int/char/float/double，struct是构造的。"
  },
  {
    id: "nc2002", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "常量变量", type: "single", typeLabel: "单选",
    stem: "以下符号中，正确的C语言标识符是（　）",
    options: ["abc", "3abc", "abc-1", "a b"],
    answer: "abc",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["标识符", "命名规则"],
    analysis: "【题干】正确的C语言标识符是？\n【考点】标识符命名规则\n【详细解答】\n1. 标识符只能由字母、数字、下划线组成。\n2. 第一个字符必须是字母或下划线。\n3. 不能是关键字。\n4. 区分大小写。\n【选项逐个说】\nA. abc → 正确。\nB. 3abc → 错误：数字开头。\nC. abc-1 → 错误：有减号。\nD. a b → 错误：有空格。\n【答案】abc\n【易错】标识符不能数字开头，不能有特殊符号。"
  },
  {
    id: "nc2003", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "数据类型转换", type: "single", typeLabel: "单选",
    stem: "表达式 5/2 在C语言的值是（　）",
    options: ["2.5", "2", "3", "2.0"],
    answer: "2",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["类型转换", "整数除法"],
    analysis: "【题干】5/2在C语言的值是？\n【考点】整数除法\n【详细解答】\n1. 两个整数相除，结果还是整数（舍去小数部分）。\n2. 5和2都是int，所以5/2 = 2（不是2.5）。\n3. 如果要得到小数，至少要有一个是浮点数：5.0/2 = 2.5。\n【选项逐个说】\nA. 2.5 → 错误：整数除法舍去小数。\nB. 2 → 正确。\nC. 3 → 错误：不是四舍五入。\nD. 2.0 → 错误：结果是int不是float。\n【答案】2\n【易错】整数相除得整数，截断小数不是四舍五入。"
  },

  // ===== 第3章 顺序程序设计 =====
  {
    id: "nc3001", module: "major", subject: "C语言程序设计", chapter: "ch-c-3",
    knowledgePoint: "运算符", type: "single", typeLabel: "单选",
    stem: "已知 int a=10; 则表达式 a++ 的值是（　）",
    options: ["10", "11", "9", "12"],
    answer: "10",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["运算符", "自增"],
    analysis: "【题干】a=10，a++的值是？\n【考点】自增运算符\n【详细解答】\n1. a++ 是后置自增：先使用a的值，再自增。\n2. 表达式a++的值是10（原来的值）。\n3. 执行完后，a变成11。\n4. ++a 是前置自增：先自增，再使用。\n【选项逐个说】\nA. 10 → 正确：后置先取值后加。\nB. 11 → 错误：那是++a的值。\nC. 9 → 错误。\nD. 12 → 错误。\n【答案】10\n【易错】a++表达式的值是旧值，++a表达式的值是新值。"
  },
  {
    id: "nc3002", module: "major", subject: "C语言程序设计", chapter: "ch-c-3",
    knowledgePoint: "输入输出", type: "single", typeLabel: "单选",
    stem: "C语言中，输出整型变量的格式化字符是（　）",
    options: ["%d", "%f", "%c", "%s"],
    answer: "%d",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["输入输出", "printf"],
    analysis: "【题干】输出整型的格式化字符是？\n【考点】printf格式符\n【详细解答】\n1. %d：输出整型int。\n2. %f：输出浮点型float/double。\n3. %c：输出字符型char。\n4. %s：输出字符串。\n【选项逐个说】\nA. %d → 正确。\nB. %f → 错误：浮点。\nC. %c → 错误：字符。\nD. %s → 错误：字符串。\n【答案】%d\n【易错】int用%d，float用%f，char用%c。"
  },

  // ===== 第4章 选择结构 =====
  {
    id: "nc4001", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "if语句", type: "single", typeLabel: "单选",
    stem: "C语言中，if后面的条件表达式必须用什么括起来？（　）",
    options: ["圆括号()", "方括号[]", "花括号{}", "尖括号<>"],
    answer: "圆括号()",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["选择结构", "if语句"],
    analysis: "【题干】if后面的条件用什么括？\n【考点】if语法\n【详细解答】\n1. if (表达式) 语句;  ——条件必须用圆括号括起来。\n2. 多条语句要用花括号组成复合语句。\n3. 花括号是包语句的，不是包条件的。\n【选项逐个说】\nA. 圆括号() → 正确。\nB. 方括号[] → 错误：那是数组下标。\nC. 花括号{} → 错误：那是复合语句。\nD. 尖括号<> → 错误。\n【答案】圆括号()\n【易错】if( )括号不能省。"
  },
  {
    id: "nc4002", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "switch语句", type: "single", typeLabel: "单选",
    stem: "switch语句中，case后面必须是（　）",
    options: ["常量表达式", "变量", "任意表达式", "浮点表达式"],
    answer: "常量表达式",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["选择结构", "switch"],
    analysis: "【题干】switch的case后面必须是什么？\n【考点】switch语法\n【详细解答】\n1. case后面必须是整型常量表达式。\n2. 不能是变量，不能是浮点数。\n3. 每个case的值必须互不相同。\n4. 没有break就会穿透到下一个case。\n【选项逐个说】\nA. 常量表达式 → 正确。\nB. 变量 → 错误。\nC. 任意表达式 → 错误。\nD. 浮点表达式 → 错误。\n【答案】常量表达式\n【易错】case必须是整型常量。"
  },
  {
    id: "nc4003", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "逻辑运算", type: "single", typeLabel: "单选",
    stem: "表达式 (5>3) && (2<1) 的值是（　）",
    options: ["1", "0", "非0", "语法错误"],
    answer: "0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["逻辑运算", "&&"],
    analysis: "【题干】(5>3) && (2<1) 的值？\n【考点】逻辑与运算\n【详细解答】\n1. && 是逻辑与：两边都为真，结果才为真。\n2. 5>3 为真（值为1）。\n3. 2<1 为假（值为0）。\n4. 真 && 假 = 假，值为0。\n【选项逐个说】\nA. 1 → 错误：两边都真才是1。\nB. 0 → 正确：有一边假就是0。\nC. 非0 → 错误。\nD. 语法错误 → 错误。\n【答案】0\n【易错】&&两边都真才真，||有一边真就真。"
  },

  // ===== 第5章 循环结构 =====
  {
    id: "nc5001", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "for循环", type: "single", typeLabel: "单选",
    stem: "for(i=0;i<10;i++) 循环体执行多少次？（　）",
    options: ["9次", "10次", "11次", "无限次"],
    answer: "10次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "for"],
    analysis: "【题干】for(i=0;i<10;i++)执行几次？\n【考点】for循环执行次数\n【详细解答】\n1. i从0开始，到i<10结束。\n2. i = 0,1,2,...,9  ——共10个值。\n3. 当i=10时，条件i<10不成立，循环结束。\n4. 所以循环体执行10次。\n【选项逐个说】\nA. 9次 → 错误：容易数错。\nB. 10次 → 正确。\nC. 11次 → 错误。\nD. 无限次 → 错误。\n【答案】10次\n【易错】从0到n-1，共n次。"
  },
  {
    id: "nc5002", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "break与continue", type: "single", typeLabel: "单选",
    stem: "在循环中，break语句的作用是（　）",
    options: ["跳出本次循环，继续下次", "跳出整个循环", "结束程序", "跳过条件判断"],
    answer: "跳出整个循环",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "break"],
    analysis: "【题干】break语句的作用是？\n【考点】break与continue\n【详细解答】\n1. break：跳出整个循环，不再执行后面的循环。\n2. continue：只跳出本次循环，继续下一次循环。\n3. break还可以用在switch中，跳出switch。\n【选项逐个说】\nA. 跳出本次循环 → 错误：那是continue。\nB. 跳出整个循环 → 正确。\nC. 结束程序 → 错误：那是exit()。\nD. 跳过条件判断 → 错误。\n【答案】跳出整个循环\n【易错】break彻底退出，continue只跳一次。"
  },
  {
    id: "nc5003", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "while与do-while", type: "judge", typeLabel: "判断",
    stem: "do-while循环至少执行一次。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "do-while"],
    analysis: "【题干】do-while循环至少执行一次。\n【考点】while vs do-while\n【详细解答】\n1. while循环：先判断条件，条件满足才执行循环体。\n2. do-while循环：先执行一次循环体，再判断条件。\n3. 所以do-while至少执行一次。\n【答案】正确\n【易错】do-while先执行后判断，至少跑一次。"
  },

  // ===== 第6章 数组 =====
  {
    id: "nc6001", module: "major", subject: "C语言程序设计", chapter: "ch-c-6",
    knowledgePoint: "一维数组", type: "single", typeLabel: "单选",
    stem: "定义 int a[5]; 则数组a的合法下标是（　）",
    options: ["1~5", "0~4", "1~4", "0~5"],
    answer: "0~4",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数组", "下标"],
    analysis: "【题干】int a[5]; 合法下标范围？\n【考点】数组下标\n【详细解答】\n1. C语言数组下标从0开始。\n2. int a[5] 有5个元素：a[0], a[1], a[2], a[3], a[4]。\n3. 最大下标是n-1，不是n。\n4. 越界访问a[5]是未定义行为。\n【选项逐个说】\nA. 1~5 → 错误：从0开始。\nB. 0~4 → 正确。\nC. 1~4 → 错误。\nD. 0~5 → 错误：a[5]越界了。\n【答案】0~4\n【易错】下标从0开始，最大到n-1。"
  },
  {
    id: "nc6002", module: "major", subject: "C语言程序设计", chapter: "ch-c-6",
    knowledgePoint: "二维数组", type: "single", typeLabel: "单选",
    stem: "定义 int a[3][4]; 该数组共有多少个元素？（　）",
    options: ["7", "12", "34", "20"],
    answer: "12",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数组", "二维数组"],
    analysis: "【题干】int a[3][4]; 有多少元素？\n【考点】二维数组\n【详细解答】\n1. 二维数组行数×列数 = 元素总数。\n2. 3行×4列 = 12个元素。\n3. 顺序：a[0][0], a[0][1], ..., a[2][3]。\n【选项逐个说】\nA. 7 → 错误：加起来了。\nB. 12 → 正确。\nC. 34 → 错误。\nD. 20 → 错误。\n【答案】12\n【易错】行数乘列数。"
  },

  // ===== 第7章 函数 =====
  {
    id: "nc7001", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "函数定义", type: "single", typeLabel: "单选",
    "stem": "C语言中，函数的返回值类型由什么决定？（　）",
    options: ["return语句中的值", "函数定义时的类型", "调用时的参数", "随机决定"],
    answer: "函数定义时的类型",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["函数", "返回值"],
    analysis: "【题干】函数返回值类型由什么决定？\n【考点】函数返回值\n【详细解答】\n1. 函数返回值类型由函数定义时指定的类型决定。\n2. 例：int func() { ... } ——返回int类型。\n3. 如果return返回的值类型不匹配，会自动转换为函数定义的类型。\n4. void类型函数没有返回值。\n【选项逐个说】\nA. return语句中的值 → 错误：类型不匹配会转换。\nB. 函数定义时的类型 → 正确。\nC. 调用时的参数 → 错误。\nD. 随机决定 → 错误。\n【答案】函数定义时的类型\n【易错】以函数定义的类型为准。"
  },
  {
    id: "nc7002", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "参数传递", type: "single", typeLabel: "单选",
    "stem": "C语言中，函数参数的传递方式是（　）",
    options: ["值传递", "地址传递", "引用传递", "双向传递"],
    answer: "值传递",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["函数", "参数传递"],
    analysis: "【题干】C语言函数参数的传递方式是？\n【考点】参数传递\n【详细解答】\n1. C语言只有值传递。\n2. 传递变量：把变量的值复制一份给形参，形参变了不影响实参。\n3. 传递地址：把地址值复制一份，通过指针可以修改实参内容。\n4. 本质还是值传递——传递的是地址的值。\n【选项逐个说】\nA. 值传递 → 正确。\nB. 地址传递 → 错误：本质还是值传递。\nC. 引用传递 → 错误：那是C++的。\nD. 双向传递 → 错误。\n【答案】值传递\n【易错】C语言只有值传递，没有引用传递。"
  },
  {
    id: "nc7003", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "局部全局变量", type: "judge", typeLabel: "判断",
    "stem": "局部变量在函数内部定义，只在函数内有效。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["函数", "变量作用域"],
    analysis: "【题干】局部变量在函数内部定义，只在函数内有效。\n【考点】局部变量与全局变量\n【详细解答】\n1. 局部变量：在函数/复合语句内部定义，只在该范围内有效。\n2. 全局变量：在函数外部定义，整个程序都有效。\n3. 局部变量和全局变量同名时，局部优先。\n【答案】正确\n【易错】局部变量出了函数就销毁了。"
  },

  // ===== 第8章 指针 =====
  {
    id: "nc8001", module: "major", subject: "C语言程序设计", chapter: "ch-c-8",
    knowledgePoint: "指针基础", type: "single", typeLabel: "单选",
    stem: "int a = 10; int *p = &a; 则 *p 的值是（　）",
    options: ["a的地址", "10", "p的地址", "不确定"],
    answer: "10",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["指针", "基础"],
    analysis: "【题干】int a=10; int *p=&a; *p的值是？\n【考点】指针基础\n【详细解答】\n1. int *p = &a; ——p是指针，存的是a的地址。\n2. *p ——解引用，取p指向的内存中的值。\n3. p指向a，所以 *p = a = 10。\n4. 区分：p是地址，*p是地址里的值，&a是a的地址。\n【选项逐个说】\nA. a的地址 → 错误：那是p的值。\nB. 10 → 正确。\nC. p的地址 → 错误。\nD. 不确定 → 错误。\n【答案】10\n【易错】p是地址，*p是地址里的值。"
  },
  {
    id: "nc8002", module: "major", subject: "C语言程序设计", chapter: "ch-c-8",
    knowledgePoint: "指针与数组", type: "single", typeLabel: "单选",
    stem: "int a[10]; 则下列表示与a[5]等价的是（　）",
    options: ["*(a+5)", "a+5", "*(a+4)", "&a[5]"],
    answer: "*(a+5)",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["指针", "数组"],
    analysis: "【题干】与a[5]等价的是？\n【考点】指针与数组的关系\n【详细解答】\n1. 数组名a是数组首元素的地址。\n2. a[5] 等价于 *(a+5)。\n3. a+5 是第5个元素的地址，不是值。\n4. &a[5] 也是地址。\n【选项逐个说】\nA. *(a+5) → 正确。\nB. a+5 → 错误：这是地址。\nC. *(a+4) → 错误：那是a[4]。\nD. &a[5] → 错误：这也是地址。\n【答案】*(a+5)\n【易错】a[i] 等价于 *(a+i)。"
  },

  // ===== 第9章 建立数据类型 =====
  {
    id: "nc9001", module: "major", subject: "C语言程序设计", chapter: "ch-c-9",
    knowledgePoint: "结构体", type: "single", typeLabel: "单选",
    stem: "结构体的作用是（　）",
    options: ["将不同类型数据组合在一起", "节省内存", "提高运算速度", "方便输入输出"],
    answer: "将不同类型数据组合在一起",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["结构体", "作用"],
    analysis: "【题干】结构体的作用是？\n【考点】结构体\n【详细解答】\n1. 结构体是一种构造类型，可以把不同类型的数据组合在一起。\n2. 例：学生（学号int、姓名char[]、成绩float）。\n3. 数组是相同类型数据的集合，结构体是不同类型的集合。\n【选项逐个说】\nA. 将不同类型数据组合在一起 → 正确。\nB. 节省内存 → 错误。\nC. 提高运算速度 → 错误。\nD. 方便输入输出 → 错误。\n【答案】将不同类型数据组合在一起\n【易错】数组同类型，结构体不同类型。"
  },

  // ===== 第10章 文件 =====
  {
    id: "nc10001", module: "major", subject: "C语言程序设计", chapter: "ch-c-10",
    knowledgePoint: "文件操作", type: "single", typeLabel: "单选",
    stem: "C语言中，打开文件的函数是（　）",
    options: ["fopen()", "fclose()", "fread()", "fwrite()"],
    answer: "fopen()",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["文件", "打开关闭"],
    analysis: "【题干】打开文件的函数是？\n【考点】文件基本操作\n【详细解答】\n1. fopen()：打开文件。\n2. fclose()：关闭文件。\n3. fread()：读文件。\n4. fwrite()：写文件。\n5. 打开后必须关闭，否则会丢失数据。\n【选项逐个说】\nA. fopen() → 正确。\nB. fclose() → 错误：关闭。\nC. fread() → 错误：读。\nD. fwrite() → 错误：写。\n【答案】fopen()\n【易错】打开fopen，关闭fclose。"
  }
]);
