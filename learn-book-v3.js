/* 学习一刻 2027大纲版 - C语言+计网 深度内容 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.LEARN_BOOK = window.STUDY_DATA.LEARN_BOOK || {};

// ============ C语言程序设计 ============
window.STUDY_DATA.LEARN_BOOK["C语言程序设计"] = [
  {
    chapter: "第1章 程序设计和C语言",
    points: [
      {
        id: "c-kp-101", name: "C程序结构与main函数", level: "基础", minutes: 8, kp: "程序结构",
        content: "【一、C程序基本结构】\n#include <stdio.h>   // 编译预处理命令\nint main()             // 主函数，程序入口\n{\n    printf(\"Hello\\n\");  // 输出语句\n    return 0;          // 返回值\n}\n\n【二、关键规则】\n1. 程序从main()开始执行，到main()结束\n2. C语言区分大小写，main不能写成Main\n3. 每条语句以分号;结尾\n4. 大括号{}必须配对\n5. 注释：//单行注释  或 /* 多行注释 */\n\n【三、C程序特点】\n- 函数是基本单位\n- 一个程序有且仅有一个main函数\n- 函数可以调用其他函数，但不能嵌套定义\n\n【例题】\n下面哪个是正确的C程序入口？\nA. start()  B. main()  C. begin()  D. program()\n答案：B\n\n【易错点】\n1. main后面必须有括号()\n2. 语句末尾不能漏分号"
      },
      {
        id: "c-kp-102", name: "运行C程序的步骤", level: "基础", minutes: 5, kp: "编译运行",
        content: "【四个步骤】\n1. 编辑：写代码，保存为.c文件\n2. 编译：.c → .obj（目标文件）\n   作用：检查语法错误\n3. 连接：.obj → .exe（可执行文件）\n   作用：连接库函数\n4. 运行：执行.exe文件\n\n【错误类型】\n- 编译错误：语法错误（如漏分号）\n- 连接错误：函数未定义\n- 逻辑错误：语法对但结果不对\n\n【例题】\nC语言程序编译阶段的作用是？\nA. 运行程序  B. 检查语法错误\nC. 连接库函数  D. 输出结果\n答案：B\n\n【易错点】\n编译查语法，连接查函数定义，运行查逻辑"
      }
    ]
  },
  {
    chapter: "第2章 数据类型与运算",
    points: [
      {
        id: "c-kp-201", name: "基本数据类型", level: "基础", minutes: 10, kp: "数据类型",
        content: "【一、常用数据类型占字节数】\nchar     1字节   字符型\nshort    2字节   短整型\nint      4字节   整型\nfloat    4字节   单精度浮点\ndouble   8字节   双精度浮点\n\n【二、常量】\n- 整型常量：10, 012(八进制，以0开头), 0xA(十六进制，以0x开头)\n- 浮点常量：3.14, 3.14e2 (=314)\n- 字符常量：'a', '\\n'(换行), '\\t'(制表)\n- 字符串常量：\"hello\"（末尾自动加'\\0'）\n\n【三、变量】\n先定义后使用\nint a = 10;\nfloat b = 3.14;\n\n【例题】\n以下哪个是非法的字符常量？\nA. 'a'  B. '\\n'  C. \"a\"  D. '\\0'\n答案：C（双引号是字符串，不是字符）\n\n【易错点】\n1. 字符用单引号，字符串用双引号\n2. 字符串末尾有隐藏的'\\0'结束标志"
      },
      {
        id: "c-kp-202", name: "运算符与表达式", level: "强化", minutes: 10, kp: "运算符",
        content: "【一、算术运算符】\n+ 加  - 减  * 乘  / 除  % 取余\n注意：\n- 5/2 = 2（整数除法截断小数）\n- 5.0/2 = 2.5\n- %只能用于整数\n\n【二、自增自减】\na++：先用a的值，再a加1\n++a：先a加1，再用a的值\n\na=5; b=a++;  // b=5, a=6\na=5; b=++a;  // b=6, a=6\n\n【三、赋值运算符】\na += 5;  等价于  a = a + 5;\na *= 2+3; 等价于  a = a * (2+3);\n\n【四、关系与逻辑】\n> < >= <= == !=\n&& 与  || 或  ! 非\n真=1，假=0\n\n【例题】\nint a=5; printf(\"%d\", a++); 输出？\n答案：5\na=5; printf(\"%d\", ++a); 输出？\n答案：6\n\n【易错点】\n1. =是赋值，==是比较，别搞混\n2. 整数除法5/2=2不是2.5"
      },
      {
        id: "c-kp-203", name: "类型转换", level: "强化", minutes: 8, kp: "类型转换",
        content: "【一、自动转换（隐式）】\n低类型向高类型转换：\nchar → short → int → long → float → double\n\nint a=3; double b=2.0;\na/b → 先把a转成double，结果2.5\n\n【二、强制转换】\n(类型)表达式\n例：(int)3.9 = 3（截断，不是四舍五入）\n(double)1/2 = 0.5\n\n【例题】\n(int)3.14 的结果是？\n答案：3\n(double)5/2 的结果是？\n答案：2.5\n\n【易错点】\n1. 强制转换是截断小数，不是四舍五入\n2. (int)(3.9) 不是(int)3.9=4"
      }
    ]
  },
  {
    chapter: "第3章 顺序程序设计",
    points: [
      {
        id: "c-kp-301", name: "printf与scanf", level: "基础", minutes: 10, kp: "输入输出",
        content: "【一、printf格式符】\n%d    整型\n%f    浮点型（float/double）\n%c    单个字符\n%s    字符串\n%.2f  保留两位小数\n%5d   宽度5，右对齐\n\n【二、scanf】\nscanf(\"%d\", &x);\n注意：变量前必须加&！\nscanf(\"%lf\", &x);  // double用%lf\n\n【三、常用格式】\nprintf(\"%d\", a);       // 输出整数\nprintf(\"%.2f\", b);     // 输出两位小数\nscanf(\"%d%f\", &a, &b); // 输入两个数\n\n【例题】\nint x; scanf(\"%d\", x); 有什么错？\n答案：x前面漏了&，应该是&x\n\n【易错点】\n1. scanf变量前必须加&\n2. printf中double用%f，scanf中double用%lf"
      }
    ]
  },
  {
    chapter: "第4章 选择结构",
    points: [
      {
        id: "c-kp-401", name: "if语句", level: "基础", minutes: 8, kp: "if语句",
        content: "【三种形式】\n1. 单分支：\n   if(条件) 语句;\n\n2. 双分支：\n   if(条件) 语句1;\n   else 语句2;\n\n3. 多分支：\n   if(条件1) 语句1;\n   else if(条件2) 语句2;\n   else 语句3;\n\n【else配对规则】\nelse总是与最近的未配对if配对！\n\n【三目运算符】\nmax = (a>b) ? a : b;\n等价于if(a>b) max=a; else max=b;\n\n【例题】\nint a=3, b=5;\nprintf(\"%d\", a>b?a:b);\n输出？答案：5\n\n【易错点】\n1. 条件表达式必须用括号\n2. else与最近的if配对"
      },
      {
        id: "c-kp-402", name: "switch语句", level: "强化", minutes: 8, kp: "switch",
        content: "【语法】\nswitch(表达式){\n    case 常量1: 语句1; break;\n    case 常量2: 语句2; break;\n    default: 语句;\n}\n\n【要点】\n1. 表达式必须是整型或字符型，不能是float\n2. case后必须是常量，不能是变量\n3. break跳出switch，没有break会穿透！\n4. default可以放在任意位置\n\n【例题】\nswitch(2){\n    case 1: printf(\"A\");\n    case 2: printf(\"B\");\n    case 3: printf(\"C\");\n    default: printf(\"D\");\n}\n输出？答案：BCD（没有break穿透了）\n\n【易错点】\n漏写break是最常见错误！"
      }
    ]
  },
  {
    chapter: "第5章 循环结构",
    points: [
      {
        id: "c-kp-501", name: "三种循环", level: "基础", minutes: 10, kp: "循环",
        content: "【一、while循环】\nwhile(条件){\n    循环体;\n}\n先判断后执行，可能一次都不执行。\n\n【二、do-while循环】\ndo{\n    循环体;\n}while(条件);  // 末尾有分号！\n先执行后判断，至少执行一次。\n\n【三、for循环】\nfor(初始化; 条件; 增量){\n    循环体;\n}\n\n【次数计算】\nfor(i=0; i<n; i++) → 执行n次\nfor(i=1; i<=n; i++) → 执行n次\nfor(i=0; i<n; i+=2) → 执行n/2次\n\n【例题】\n求1+2+3+...+100：\nint s=0, i;\nfor(i=1; i<=100; i++) s += i;\n结果s=5050\n\n【易错点】\n1. do-while末尾必须有分号\n2. for循环三个表达式用分号隔开"
      },
      {
        id: "c-kp-502", name: "break与continue", level: "强化", minutes: 8, kp: "break continue",
        content: "【break】\n跳出整个循环（最近一层循环）\n后面的循环不再执行。\n\n【continue】\n跳过本次循环剩余语句，直接进入下一次循环判断。\n\n【嵌套循环】\nbreak只跳出内层循环，外层继续。\n\n【例题】\nfor(i=1; i<=5; i++){\n    if(i==3) break;\n    printf(\"%d\", i);\n}\n输出？答案：12\n\nfor(i=1; i<=5; i++){\n    if(i==3) continue;\n    printf(\"%d\", i);\n}\n输出？答案：1245\n\n【易错点】\n1. break是彻底跳出，continue是跳过本次\n2. 都只影响最近一层循环"
      }
    ]
  },
  {
    chapter: "第6章 数组",
    points: [
      {
        id: "c-kp-601", name: "一维数组", level: "基础", minutes: 10, kp: "数组",
        content: "【定义】\nint a[5];  // 5个元素：a[0]~a[4]\n下标从0开始！\n最大下标=长度-1\n\n【初始化】\nint a[5] = {1,2,3,4,5};  // 全部初始化\nint a[5] = {1,2};        // 前2个赋值，其余为0\nint a[] = {1,2,3};       // 自动确定长度为3\n\n【例题】\nint a[5] = {1,2,3};\nprintf(\"%d\", a[4]);\n输出？答案：0（未赋值的自动为0）\n\n【易错点】\n1. 下标越界C语言不报错，但很危险\n2. 数组名a是首地址，是常量不能赋值"
      },
      {
        id: "c-kp-602", name: "二维数组与字符串", level: "强化", minutes: 10, kp: "二维数组",
        content: "【二维数组】\nint a[2][3];  // 2行3列，共6个元素\nint a[][3] = {1,2,3,4,5,6};  // 自动算2行\n\n【字符数组】\nchar s[] = \"hello\";  // 长度6（含'\\0'）\nstrlen(s) = 5  // 不包含'\\0'\n\n【字符串函数】\nstrcpy(s1, s2)   复制\nstrcat(s1, s2)   连接\nstrcmp(s1, s2)   比较（相等返回0）\nstrlen(s)        求长度（不含'\\0'）\n\n【例题】\nchar s[] = \"abc\";\nstrlen(s) = ?  答案：3\nsizeof(s) = ?  答案：4（含'\\0'）\n\n【易错点】\nstrlen不计算'\\0'，sizeof计算"
      }
    ]
  },
  {
    chapter: "第7章 函数",
    points: [
      {
        id: "c-kp-701", name: "函数定义与调用", level: "基础", minutes: 10, kp: "函数",
        content: "【定义】\n返回值类型 函数名(参数列表){\n    函数体;\n    return 返回值;\n}\n\n【要点】\n1. 程序从main开始，main调用其他函数\n2. 函数不能嵌套定义\n3. 值传递：形参改变不影响实参\n4. 数组作参数传首地址，函数中可改数组内容\n\n【例题】\nint add(int a, int b){\n    return a+b;\n}\n调用：add(3, 5) → 返回8\n\n【递归】\n函数自己调用自己\n必须有递归出口（终止条件）\n例：阶乘 int f(int n){ if(n==1) return 1; return n*f(n-1); }\n\n【易错点】\n1. 值传递形参是副本，不影响实参\n2. 递归必须有出口"
      },
      {
        id: "c-kp-702", name: "变量作用域", level: "强化", minutes: 8, kp: "作用域",
        content: "【局部变量】\n函数内定义，只在函数内有效。\n不同函数可以有同名变量。\n\n【全局变量】\n函数外定义，整个文件都能用。\n\n【同名规则】\n局部变量优先，屏蔽全局变量。\n\n【static静态变量】\n只初始化一次，函数调用后值保留。\n下一次调用时用上一次的值。\n\n【例题】\nvoid f(){\n    static int i=0;\n    i++;\n    printf(\"%d\", i);\n}\nf(); f(); f();\n输出？答案：123（static只初始化一次）\n\n【易错点】\n普通变量每次调用都重新初始化，static不会"
      }
    ]
  },
  {
    chapter: "第8章 指针",
    points: [
      {
        id: "c-kp-801", name: "指针基础", level: "强化", minutes: 10, kp: "指针",
        content: "【概念】\n指针变量存的是地址。\nint a = 10;\nint *p = &a;  // p存a的地址\n\n【两个运算符】\n& 取地址：&a 得到a的地址\n* 解引用：*p 得到地址里的值\n\n*p = 20;  // 等价于 a = 20\n\n【指针与数组】\nint a[5];\nint *p = a;  // p指向a[0]\np[2]    等价 a[2]\n*(p+2)  等价 a[2]\np++     移动到下一个元素\n\n【例题】\nint a[5] = {10,20,30,40,50};\nint *p = a;\nprintf(\"%d\", *(p+2));\n输出？答案：30\n\n【易错点】\n1. int *p=&a; 中的*是类型说明，不是解引用\n2. p++移动一个元素，不是移动1字节"
      }
    ]
  },
  {
    chapter: "第9章 构造数据类型",
    points: [
      {
        id: "c-kp-901", name: "结构体与共用体", level: "强化", minutes: 10, kp: "结构体",
        content: "【结构体】\nstruct Student{\n    int id;\n    char name[20];\n    float score;\n};\n\nstruct Student s;\ns.id = 1;          // 变量用.访问\ns.score = 90.5;\n\nstruct Student *p = &s;\np->id = 1;         // 指针用->访问\np->score = 90.5;\n\n【共用体union】\n所有成员共享同一段内存。\n长度=最长成员的长度。\n同一时刻只有一个成员有效。\n\n【枚举enum】\nenum {A, B, C};  // A=0, B=1, C=2\n\n【typedef】\n给类型起别名，不创建新类型。\ntypedef int INTEGER;\nINTEGER a;  // 等价 int a;\n\n【例题】\nstruct Student s; s.score=90;\nstruct Student *p=&s; p->score=95;\n问s.score是多少？答案：95\n\n【易错点】\n1. 结构体变量用.，指针用->\n2. 共用体所有成员共享内存"
      }
    ]
  },
  {
    chapter: "第10章 文件",
    points: [
      {
        id: "c-kp-1001", name: "文件操作", level: "强化", minutes: 10, kp: "文件",
        content: "【文件指针】\nFILE *fp;\n\n【打开文件】\nfp = fopen(\"文件名\", \"打开方式\");\n打开失败返回NULL。\n\n【打开方式】\nr   只读（文件必须存在）\nw   写入（覆盖原有内容）\na   追加（在末尾写）\nr+  读写\n\n【关闭文件】\nfclose(fp);\n\n【读写函数】\nfgetc(fp)    读一个字符\nfputc(c, fp) 写一个字符\nfgets(s, n, fp)  读字符串\nfprintf(fp, ...) 格式化写\nfscanf(fp, ...)  格式化读\n\n【判断文件结束】\nfeof(fp) 为真表示到文件尾\n\n【例题】\nFILE *fp = fopen(\"a.txt\", \"r\");\nif(fp == NULL) printf(\"打开失败\");\n\n【易错点】\n1. 打开后一定要检查是否为NULL\n2. 用完一定要fclose"
      }
    ]
  }
];

// ============ 计算机网络基础 ============
window.STUDY_DATA.LEARN_BOOK["计算机网络基础"] = [
  {
    chapter: "第1章 网络概述",
    points: [
      {
        id: "net-kp-101", name: "OSI与TCP/IP模型", level: "基础", minutes: 10, kp: "体系结构",
        content: "【OSI七层模型】（从下到上）\n1. 物理层：比特流传输\n2. 数据链路层：帧，MAC地址\n3. 网络层：分组，IP地址，路由\n4. 传输层：端到端，TCP/UDP\n5. 会话层：建立管理会话\n6. 表示层：数据格式、加密\n7. 应用层：用户接口\n\n【TCP/IP四层模型】\n网络接口层 ↔ 物理层+数据链路层\n网际层     ↔ 网络层\n传输层     ↔ 传输层\n应用层     ↔ 会话+表示+应用\n\n【各层PDU（协议数据单元）】\n物理层：比特(bit)\n数据链路层：帧(frame)\n网络层：分组/数据报(packet)\n传输层：段(segment)\n\n【设备对应层】\n中继器/集线器：物理层\n交换机：数据链路层\n路由器：网络层\n\n【例题】\n路由器工作在OSI哪一层？\n答案：网络层（第3层）\n\n【记忆口诀】物链路网传会表应"
      },
      {
        id: "net-kp-102", name: "交换方式对比", level: "强化", minutes: 8, kp: "交换方式",
        content: "【一、电路交换】\n三个阶段：建立连接 → 通话 → 释放连接\n特点：\n- 通话前独占一条物理线路\n- 时延小，实时性好\n- 线路利用率低\n- 适合电话网\n\n【二、分组交换】\n存储转发：\n把报文分成若干分组，每个分组独立路由\n特点：\n- 线路共享，利用率高\n- 有存储转发时延\n- 灵活，某个分组走不同路由\n- 适合互联网\n\n【对比】\n电路交换：像打电话，先占线再聊\n分组交换：像寄快递，分包投递\n\n【例题】\n互联网采用的交换方式是？\n答案：分组交换（存储转发）\n\n【易错点】\n电路交换建立连接慢但传输快，分组交换有延迟但线路利用率高"
      }
    ]
  },
  {
    chapter: "第2章 物理层",
    points: [
      {
        id: "net-kp-201", name: "传输介质与复用技术", level: "基础", minutes: 8, kp: "物理层",
        content: "【一、有线传输介质】\n1. 双绞线：\n   最常用，传输距离100米\n   分为屏蔽(STP)和非屏蔽(UTP)\n2. 同轴电缆：\n   抗干扰比双绞线好\n3. 光纤：\n   抗干扰最强，传输距离最远\n   带宽最大，用于主干网\n\n【二、多路复用技术】\nFDM 频分复用：不同频率分不同用户\nTDM 时分复用：不同时间片分不同用户\nWDM 波分复用：光的频分\nCDM 码分复用\n\n【三、编码】\n曼彻斯特编码：\n每个比特中间有跳变\n中间跳变既作时钟又作数据\n以太网用这种编码\n\n【例题】\n抗干扰能力最强的传输介质是？\n答案：光纤\n\n【易错点】\n光纤传输距离最远，双绞线100米限制"
      }
    ]
  },
  {
    chapter: "第3章 数据链路层",
    points: [
      {
        id: "net-kp-301", name: "CSMA/CD与以太网", level: "强化", minutes: 10, kp: "CSMA/CD",
        content: "【CSMA/CD】\n载波监听多点接入/碰撞检测\n工作流程：\n1. 先听后发：发送前先监听信道\n2. 边听边发：发送时继续检测冲突\n3. 冲突停发：发现冲突立即停止\n4. 随机重发：随机等待后重传\n\n冲突后采用二进制指数退避算法。\n\n【以太网帧格式】\n最小帧长：64字节\n最大帧长：1518字节\nMTU（最大传输单元）= 1500字节\n\n【MAC地址】\n48位（6字节），固化在网卡上\n全球唯一\n前3字节是厂商编号，后3字节是序列号\n\n【例题】\n以太网最小帧长是多少？\n答案：64字节\n\n【易错点】\nCSMA/CD用于有线以太网，无线用CSMA/CA"
      },
      {
        id: "net-kp-302", name: "ARP与VLAN", level: "强化", minutes: 10, kp: "ARP VLAN",
        content: "【ARP协议】\n作用：IP地址 → MAC地址转换\n工作过程：\n1. 主机广播ARP请求：\"谁是192.168.1.1？\"\n2. 目标主机单播ARP应答：\"我就是，我的MAC是xx\"\n3. 发送方缓存到ARP表\n\n【VLAN虚拟局域网】\n作用：\n- 逻辑隔离广播域\n- 提高安全性\n- 减少广播风暴\n\n标准：IEEE 802.1Q\nVLAN标签占4字节\n\n端口类型：\nAccess端口：只属于一个VLAN，接终端\nTrunk端口：传多个VLAN数据，接交换机\n\n【VLAN间通信】\n必须通过路由器或三层交换机\n\n【例题】\nVLAN标准是？答案：802.1Q\nVLAN标签占几个字节？答案：4字节\n\n【易错点】\nVLAN隔离的是广播域不是冲突域"
      }
    ]
  },
  {
    chapter: "第4章 网络层",
    points: [
      {
        id: "net-kp-401", name: "IP地址与子网划分", level: "强化", minutes: 12, kp: "IP地址",
        content: "【IPv4地址】\n32位，分4段，每段8位（0-255）\n如：192.168.1.1\n\n【分类】\nA类：1~126，掩码255.0.0.0\nB类：128~191，掩码255.255.0.0\nC类：192~223，掩码255.255.255.0\nD类：224~239，组播\n\n【私有地址（不用于公网）】\n10.0.0.0~10.255.255.255\n172.16.0.0~172.31.255.255\n192.168.0.0~192.168.255.255\n\n【特殊地址】\n127.0.0.1  回环地址（测本机）\n255.255.255.255  广播地址\n0.0.0.0  默认路由\n\n【子网划分】\n借主机位当网络位\n/24 = 255.255.255.0 = C类默认掩码\n/26 = 255.255.255.192\n块大小=256-192=64，可用主机=62\n\n【例题】\n192.168.1.100/26 属于哪个子网？\n块大小64，子网是0,64,128,192\n100在64~127之间，子网是192.168.1.64\n\n【易错点】\n1. 网络地址和广播地址不能分配给主机\n2. 可用主机数=2^主机位-2"
      },
      {
        id: "net-kp-402", name: "路由协议与故障排查", level: "强化", minutes: 10, kp: "路由",
        content: "【路由协议】\nRIP：距离矢量协议，跳数为度量，最大15跳\nOSPF：链路状态协议，Dijkstra最短路径算法\n\n【ICMP协议】\nping命令用ICMP回显请求和应答\ntraceroute用TTL超时跟踪路由\n\n【故障排查步骤】\n1. ping 127.0.0.1 → 测本机TCP/IP协议栈\n2. ping 网关IP → 测内网连通\n3. ping 公网IP（如8.8.8.8）→ 测外网连通\n4. ping 域名（如www.baidu.com）→ 测DNS\n\n【常见故障】\n- 能上QQ不能开网页 → DNS故障\n- DHCP获取不到IP → 得到169.254.x.x\n- ping不通网关 → 内网问题\n\n【例题】\nping命令使用哪个协议？\n答案：ICMP\n\n【易错点】\n169.254.x.x是DHCP失败的自动地址"
      }
    ]
  },
  {
    chapter: "第5章 传输层",
    points: [
      {
        id: "net-kp-501", name: "TCP与UDP对比", level: "强化", minutes: 10, kp: "传输层",
        content: "【TCP传输控制协议】\n- 面向连接（三次握手）\n- 可靠传输\n- 字节流方式\n- 首部20字节\n- 有流量控制和拥塞控制\n- 四次挥手释放连接\n\n【UDP用户数据报协议】\n- 无连接\n- 不保证可靠\n- 报文方式\n- 首部8字节\n- 开销小，速度快\n- 适合实时应用（视频/语音/DNS）\n\n【端口号】\n0~65535\n熟知端口0~1023\n\n常用端口：\n80    HTTP\n443   HTTPS\n21    FTP控制\n22    SSH\n25    SMTP发邮件\n53    DNS\n110   POP3收邮件\n\n【例题】\nHTTP默认端口？答案：80\nDNS默认端口？答案：53\n\n【易错点】\n1. TCP可靠但慢，UDP快但不可靠\n2. HTTP是80，HTTPS是443"
      }
    ]
  },
  {
    chapter: "第6章 应用层",
    points: [
      {
        id: "net-kp-601", name: "常用应用层协议", level: "基础", minutes: 8, kp: "应用层",
        content: "【DNS域名系统】\n作用：域名 → IP地址\n端口：53\n查询方式：递归查询和迭代查询\n\n【HTTP超文本传输协议】\n端口：80\n无状态协议\n用于网页浏览\n\n【HTTPS】\nHTTP + SSL/TLS加密\n端口：443\n\n【FTP文件传输协议】\n控制连接：21端口\n数据连接：20端口\n\n【电子邮件】\nSMTP：发送邮件，25端口\nPOP3：接收邮件，110端口\nIMAP：接收邮件，143端口\n\n【DHCP动态主机配置协议】\n自动分配IP地址\n四步：Discover → Offer → Request → ACK\n\n【例题】\n域名系统使用的端口号是？\n答案：53\n\n【易错点】\nSMTP是发邮件，POP3是收邮件"
      }
    ]
  }
];

console.log("C语言计网深度内容加载完成！");
