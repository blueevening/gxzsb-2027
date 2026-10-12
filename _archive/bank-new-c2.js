/* 新增题库 - 2026考纲版 - C语言程序设计 第二批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第2章 数据类型 - 补充 =====
  {
    id: "nc2101", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "整型数据", type: "single", typeLabel: "单选",
    stem: "C语言中，int类型变量在内存中占几个字节？（　）",
    options: ["1个", "2个", "4个", "8个"],
    answer: "4个",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据类型", "int"],
    analysis: "【题干】int占几个字节？\n【考点】基本类型长度\n【详细解答】\n1. char：1字节。\n2. int：4字节（32位系统）。\n3. float：4字节。\n4. double：8字节。\n5. 注意：不同系统可能不同，但一般int是4字节。\n【选项逐个说】\nA. 1个 → 错误：那是char。\nB. 2个 → 错误：那是short。\nC. 4个 → 正确。\nD. 8个 → 错误：那是long long/double。\n【答案】4个\n【易错】char1，int4，float4，double8。"
  },
  {
    id: "nc2102", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "字符型数据", type: "single", typeLabel: "单选",
    stem: "已知 char c = 'A'; 则 printf(\"%d\", c); 输出是（　）",
    options: ["A", "65", "97", "错误"],
    answer: "65",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据类型", "字符"],
    analysis: "【题干】char c='A'; printf(\"%d\", c); 输出？\n【考点】字符与ASCII码\n【详细解答】\n1. 字符在内存中存的是ASCII码值。\n2. 'A'的ASCII码是65。\n3. 'a'的ASCII码是97。\n4. 用%d输出字符，输出的是ASCII码值。\n【选项逐个说】\nA. A → 错误：那是%c输出。\nB. 65 → 正确：A的ASCII码。\nC. 97 → 错误：那是a的。\nD. 错误 → 错误。\n【答案】65\n【易错】大写字母ASCII码比小写小32。"
  },
  {
    id: "nc2103", module: "major", subject: "C语言程序设计", chapter: "ch-c-2",
    knowledgePoint: "运算符优先级", type: "single", typeLabel: "单选",
    stem: "表达式 10 / 3 * 3 的值是（　）",
    options: ["9", "10", "9.99", "3"],
    answer: "9",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["运算符", "优先级"],
    analysis: "【题干】10/3*3的值？\n【考点】运算符结合性\n【详细解答】\n1. /和*优先级相同，左结合。\n2. 先算10/3 = 3（整数除法）。\n3. 再算3*3 = 9。\n4. 不是先算3*3=9再10/9=1。\n【选项逐个说】\nA. 9 → 正确。\nB. 10 → 错误。\nC. 9.99 → 错误：整数除法。\nD. 3 → 错误。\n【答案】9\n【易错】左结合，从左往右算。"
  },

  // ===== 第3章 顺序结构 - 补充 =====
  {
    id: "nc3101", module: "major", subject: "C语言程序设计", chapter: "ch-c-3",
    knowledgePoint: "自增运算符", type: "single", typeLabel: "单选",
    stem: "已知 int a=5; int b = ++a; 则b的值是（　）",
    options: ["5", "6", "7", "4"],
    answer: "6",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["运算符", "++"],
    analysis: "【题干】a=5; b=++a; b=？\n【考点】前置自增\n【详细解答】\n1. ++a 是前置自增：先自增，再使用。\n2. a先变成6，再赋值给b。\n3. 所以b=6，a=6。\n4. 如果是a++：b=5，a=6。\n【选项逐个说】\nA. 5 → 错误：那是a++。\nB. 6 → 正确。\nC. 7 → 错误。\nD. 4 → 错误。\n【答案】6\n【易错】++a先加后用，a++先用后加。"
  },
  {
    id: "nc3102", module: "major", subject: "C语言程序设计", chapter: "ch-c-3",
    knowledgePoint: "scanf输入", type: "single", typeLabel: "单选",
    stem: "scanf函数中，输入整型变量应该用什么格式符？（　）",
    options: ["%d", "%f", "%c", "%s"],
    answer: "%d",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["输入输出", "scanf"],
    analysis: "【题干】scanf输入整型用什么？\n【考点】scanf格式符\n【详细解答】\n1. %d：输入整型。\n2. %f：输入浮点型。\n3. %c：输入字符。\n4. %s：输入字符串。\n5. scanf中变量前面要加&取地址。\n【选项逐个说】\nA. %d → 正确。\nB. %f → 错误：浮点。\nC. %c → 错误：字符。\nD. %s → 错误：字符串。\n【答案】%d\n【易错】printf和scanf格式符一样，但scanf要加&。"
  },

  // ===== 第4章 选择结构 - 补充 =====
  {
    id: "nc4101", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "三目运算符", type: "single", typeLabel: "单选",
    stem: "表达式 a>b ? a : b 的功能是（　）",
    options: ["求最大值", "求最小值", "判断a是否大于b", "交换a和b"],
    answer: "求最大值",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["选择结构", "三目运算"],
    analysis: "【题干】a>b?a:b的功能？\n【考点】三目运算符\n【详细解答】\n1. 三目运算符：条件 ? 真时的值 : 假时的值。\n2. a>b为真，结果是a。\n3. a>b为假，结果是b。\n4. 即返回较大值，也就是最大值。\n【选项逐个说】\nA. 求最大值 → 正确。\nB. 求最小值 → 错误：那是a<b?a:b。\nC. 判断a是否大于b → 错误：返回的是值。\nD. 交换a和b → 错误。\n【答案】求最大值\n【易错】三目运算符返回值，不是语句。"
  },
  {
    id: "nc4102", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "逻辑或运算", type: "single", typeLabel: "单选",
    stem: "表达式 (3>2) || (5<1) 的值是（　）",
    options: ["1", "0", "非0", "语法错误"],
    answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["逻辑运算", "||"],
    analysis: "【题干】(3>2) || (5<1) 的值？\n【考点】逻辑或运算\n【详细解答】\n1. || 是逻辑或：只要有一边为真，结果就为真。\n2. 3>2 为真（值为1）。\n3. 只要有一边真，整个表达式就为真。\n4. 所以结果是1。\n【选项逐个说】\nA. 1 → 正确。\nB. 0 → 错误：两边都假才是0。\nC. 非0 → 错误：逻辑表达式结果是0或1。\nD. 语法错误 → 错误。\n【答案】1\n【易错】||有真就真，&&全真才真。"
  },
  {
    id: "nc4103", module: "major", subject: "C语言程序设计", chapter: "ch-c-4",
    knowledgePoint: "switch穿透", type: "judge", typeLabel: "判断",
    stem: "switch语句中，case后面不写break会发生穿透。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["选择结构", "switch"],
    analysis: "【题干】switch中case不写break会穿透。\n【考点】switch语句\n【详细解答】\n1. switch匹配到case后，从该位置开始顺序执行。\n2. 遇到break才跳出switch。\n3. 没有break就\"穿透\"到下一个case。\n4. 这是常见的bug来源。\n【答案】正确\n【易错】case后面别忘了break！"
  },

  // ===== 第5章 循环结构 - 补充 =====
  {
    id: "nc5101", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "while循环", type: "single", typeLabel: "单选",
    stem: "while循环是（　）",
    options: ["先判断后执行", "先执行后判断", "至少执行一次", "循环次数固定"],
    answer: "先判断后执行",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "while"],
    analysis: "【题干】while循环的特点？\n【考点】三种循环对比\n【详细解答】\n1. while：先判断条件，条件满足才执行循环体。\n2. do-while：先执行一次，再判断条件。\n3. for：循环次数明确。\n【选项逐个说】\nA. 先判断后执行 → 正确。\nB. 先执行后判断 → 错误：那是do-while。\nC. 至少执行一次 → 错误：那是do-while。\nD. 循环次数固定 → 错误：那是for。\n【答案】先判断后执行\n【易错】while先判断，do-while先执行。"
  },
  {
    id: "nc5102", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "continue", type: "single", typeLabel: "单选",
    stem: "continue语句的作用是（　）",
    options: ["跳出整个循环", "跳出本次循环，继续下一次", "结束程序", "跳出switch"],
    answer: "跳出本次循环，继续下一次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["循环", "continue"],
    analysis: "【题干】continue的作用？\n【考点】break与continue\n【详细解答】\n1. break：彻底跳出整个循环。\n2. continue：只跳过本次循环剩下的语句，直接进入下一次循环。\n3. continue只在循环中用。\n【选项逐个说】\nA. 跳出整个循环 → 错误：那是break。\nB. 跳出本次循环，继续下一次 → 正确。\nC. 结束程序 → 错误。\nD. 跳出switch → 错误：那是break。\n【答案】跳出本次循环，继续下一次\n【易错】break彻底退出，continue只跳一次。"
  },
  {
    id: "nc5103", module: "major", subject: "C语言程序设计", chapter: "ch-c-5",
    knowledgePoint: "累加求和", type: "single", typeLabel: "单选",
    stem: "用for循环求1+2+...+100，循环变量i从1到100，累加变量sum初始为0，循环体应该写（　）",
    options: ["sum += i;", "i += sum;", "sum = i;", "sum += 1;"],
    answer: "sum += i;",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["循环", "累加"],
    analysis: "【题干】1加到100，循环体怎么写？\n【考点】累加算法\n【详细解答】\n1. 累加算法：sum = 0; for(i=1;i<=100;i++) sum += i;\n2. 每次把i加到sum上。\n3. 循环结束后sum就是总和。\n【选项逐个说】\nA. sum += i; → 正确。\nB. i += sum; → 错误。\nC. sum = i; → 错误：最后sum=100。\nD. sum += 1; → 错误：那是统计次数。\n【答案】sum += i;\n【易错】累加就是sum = sum + i。"
  },

  // ===== 第6章 数组 - 补充 =====
  {
    id: "nc6101", module: "major", subject: "C语言程序设计", chapter: "ch-c-6",
    knowledgePoint: "字符数组", type: "single", typeLabel: "单选",
    stem: "字符串\"hello\"在内存中占几个字节？（　）",
    options: ["5", "6", "7", "4"],
    answer: "6",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数组", "字符串"],
    analysis: "【题干】\"hello\"占几个字节？\n【考点】字符串存储\n【详细解答】\n1. 字符串末尾有一个结束符'\\0'。\n2. \"hello\"有5个字符，加上结束符共6个字节。\n3. 定义时要写 char s[6] = \"hello\"; 或 char s[] = \"hello\";\n【选项逐个说】\nA. 5 → 错误：忘了结束符。\nB. 6 → 正确：5个字符+1个'\\0'。\nC. 7 → 错误。\nD. 4 → 错误。\n【答案】6\n【易错】字符串末尾自动加'\\0'。"
  },
  {
    id: "nc6102", module: "major", subject: "C语言程序设计", chapter: "ch-c-6",
    knowledgePoint: "数组初始化", type: "single", typeLabel: "单选",
    stem: "int a[5] = {1,2,3}; 则a[4]的值是（　）",
    options: ["3", "0", "不确定", "语法错误"],
    answer: "0",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数组", "初始化"],
    analysis: "【题干】int a[5]={1,2,3}; a[4]=？\n【考点】数组初始化\n【详细解答】\n1. 初始化时给的初值少于元素个数，后面的自动补0。\n2. a[0]=1, a[1]=2, a[2]=3, a[3]=0, a[4]=0。\n3. 如果完全不初始化，数组里是随机值。\n【选项逐个说】\nA. 3 → 错误。\nB. 0 → 正确：自动补0。\nC. 不确定 → 错误：初始化过就有确定值。\nD. 语法错误 → 错误。\n【答案】0\n【易错】部分初始化，后面自动补0。"
  },

  // ===== 第7章 函数 - 补充 =====
  {
    id: "nc7101", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "函数调用", type: "single", typeLabel: "单选",
    "stem": "C语言中，函数调用时实参与形参的传递方式是（　）",
    options: ["值传递", "地址传递", "引用传递", "双向传递"],
    answer: "值传递",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["函数", "参数传递"],
    analysis: "【题干】函数参数传递方式？\n【考点】参数传递\n【详细解答】\n1. C语言只有值传递。\n2. 传递变量：复制一份值给形参，形参变了不影响实参。\n3. 传递地址：把地址值复制一份，通过指针可以修改实参。\n4. 本质还是值传递。\n【选项逐个说】\nA. 值传递 → 正确。\nB. 地址传递 → 错误：本质还是值。\nC. 引用传递 → 错误：那是C++。\nD. 双向传递 → 错误。\n【答案】值传递\n【易错】C语言只有值传递。"
  },
  {
    id: "nc7102", module: "major", subject: "C语言程序设计", chapter: "ch-c-7",
    knowledgePoint: "递归", type: "judge", typeLabel: "判断",
    "stem": "递归函数必须有终止条件。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["函数", "递归"],
    analysis: "【题干】递归函数必须有终止条件。\n【考点】递归调用\n【详细解答】\n1. 递归：函数自己调用自己。\n2. 必须有终止条件，否则会无限递归，栈溢出。\n3. 例：求阶乘 fact(n) = n*fact(n-1)，终止条件 fact(1)=1。\n【答案】正确\n【易错】没有终止条件的递归会死循环。"
  },

  // ===== 第8章 指针 - 补充 =====
  {
    id: "nc8101", module: "major", subject: "C语言程序设计", chapter: "ch-c-8",
    knowledgePoint: "指针运算", type: "single", typeLabel: "单选",
    "stem": "int a[10]; int *p = a; 则p+5指向（　）",
    options: ["a[5]的地址", "a[5]的值", "a+5的地址", "不确定"],
    answer: "a[5]的地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["指针", "指针运算"],
    analysis: "【题干】p=a; p+5指向？\n【考点】指针与数组\n【详细解答】\n1. p指向数组首元素a[0]。\n2. p+5 向后移动5个int元素。\n3. 指向a[5]的地址。\n4. *(p+5) 才是a[5]的值。\n【选项逐个说】\nA. a[5]的地址 → 正确。\nB. a[5]的值 → 错误：那是*(p+5)。\nC. a+5的地址 → 错误：a就是首地址。\nD. 不确定 → 错误。\n【答案】a[5]的地址\n【易错】p+5是地址，*(p+5)是值。"
  },
  {
    id: "nc8102", module: "major", subject: "C语言程序设计", chapter: "ch-c-8",
    knowledgePoint: "字符串指针", type: "single", typeLabel: "单选",
    stem: "char *s = \"hello\"; 则s[1]等于（　）",
    options: ["'h'", "'e'", "'l'", "不确定"],
    answer: "'e'",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["指针", "字符串"],
    analysis: "【题干】char *s=\"hello\"; s[1]=？\n【考点】字符串指针\n【详细解答】\n1. s指向字符串\"hello\"的首地址。\n2. s[0] = 'h'，s[1] = 'e'，s[2] = 'l'...\n3. 指针可以像数组一样用下标访问。\n【选项逐个说】\nA. 'h' → 错误：那是s[0]。\nB. 'e' → 正确。\nC. 'l' → 错误：那是s[2]。\nD. 不确定 → 错误。\n【答案】'e'\n【易错】下标从0开始。"
  },

  // ===== 第9章 结构体 - 补充 =====
  {
    id: "nc9101", module: "major", subject: "C语言程序设计", chapter: "ch-c-9",
    knowledgePoint: "结构体引用", type: "single", typeLabel: "单选",
    stem: "结构体变量访问成员用什么符号？（　）",
    options: [".", "->", "::", "->*"],
    answer: ".",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["结构体", "成员访问"],
    analysis: "【题干】结构体变量访问成员用？\n【考点】结构体成员访问\n【详细解答】\n1. 结构体变量用 . 访问成员：student.name。\n2. 结构体指针用 -> 访问成员：p->name。\n3. 例：struct Student s; s.age = 18; struct Student *p=&s; p->age = 18;\n【选项逐个说】\nA. . → 正确：变量用点。\nB. -> → 错误：指针用箭头。\nC. :: → 错误：那是C++的。\nD. ->* → 错误。\n【答案】.\n【易错】变量点，指针箭头。"
  },

  // ===== 第10章 文件 - 补充 =====
  {
    id: "nc10101", module: "major", subject: "C语言程序设计", chapter: "ch-c-10",
    knowledgePoint: "文件打开模式", type: "single", typeLabel: "单选",
    stem: "以只读方式打开文件，应该用什么模式？（　）",
    options: ["\"r\"", "\"w\"", "\"a\"", "\"rb\""],
    answer: "\"r\"",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["文件", "打开模式"],
    analysis: "【题干】只读打开文件用什么模式？\n【考点】文件打开模式\n【详细解答】\n1. \"r\"：只读，文件必须存在。\n2. \"w\"：只写，文件不存在就创建，存在就覆盖。\n3. \"a\"：追加，写在文件末尾。\n4. \"rb\"：二进制只读。\n【选项逐个说】\nA. \"r\" → 正确：只读。\nB. \"w\" → 错误：只写。\nC. \"a\" → 错误：追加。\nD. \"rb\" → 错误：二进制读。\n【答案】\"r\"\n【易错】r读，w写，a追加。"
  }
]);
