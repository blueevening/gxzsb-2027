/* gxzsb 考点精讲库 - 高频考点详细讲解 */
window.KP_DETAIL = {
  "极限与连续": {
    title: "极限与连续",
    formula: "重要极限：lim(x→0) sinx/x = 1；lim(x→∞) (1+1/x)^x = e\n等价无穷小（x→0时）：sinx~x, tanx~x, arcsinx~x, arctanx~x, 1-cosx~x²/2, eˣ-1~x, ln(1+x)~x",
    method: "解题步骤：\n1. 先判断类型：0/0型、∞/∞型、还是其他\n2. 0/0型：用等价无穷小替换或洛必达法则\n3. ∞/∞型：分子分母同除最高次幂\n4. 1^∞型：凑重要极限 lim(1+1/x)^x = e",
    example: "例：lim(x→0) sin3x/x\n解：x→0时 sin3x ~ 3x，所以 lim = 3x/x = 3"
  },
  "导数与微分": {
    title: "导数与微分",
    formula: "基本求导公式：\n(xⁿ)' = nxⁿ⁻¹\n(sinx)' = cosx\n(cosx)' = -sinx\n(eˣ)' = eˣ\n(lnx)' = 1/x\n复合函数求导：f(g(x))' = f'(g(x))·g'(x)\n乘积求导：(uv)' = u'v + uv'\n商求导：(u/v)' = (u'v - uv')/v²",
    method: "解题步骤：\n1. 识别函数类型：基本初等函数、复合函数、乘积、商\n2. 复合函数：从外到内逐层求导\n3. 乘积/商：用对应公式\n4. 注意链式法则不要漏乘内层导数",
    example: "例：求 y = sin(2x+1) 的导数\n解：外层 sin(u)' = cos(u)，内层 u = 2x+1，u' = 2\n所以 y' = cos(2x+1) · 2 = 2cos(2x+1)"
  },
  "不定积分": {
    title: "不定积分",
    formula: "基本积分公式：\n∫xⁿdx = xⁿ⁺¹/(n+1) + C (n≠-1)\n∫1/x dx = ln|x| + C\n∫eˣdx = eˣ + C\n∫sinx dx = -cosx + C\n∫cosx dx = sinx + C\n∫sec²x dx = tanx + C\n分部积分：∫u dv = uv - ∫v du",
    method: "解题步骤：\n1. 识别被积函数类型\n2. 简单函数：直接套基本公式\n3. 复合函数：凑微分法\n4. 多项式×指数/三角：分部积分法，选u=多项式",
    example: "例：∫x eˣ dx\n解：用分部积分，设 u = x，dv = eˣ dx\n则 du = dx，v = eˣ\n∫x eˣ dx = x eˣ - ∫eˣ dx = x eˣ - eˣ + C"
  },
  "IP与子网": {
    title: "IP地址与子网划分",
    formula: "IPv4地址：32位，点分十进制表示\nA类：0.0.0.0 ~ 127.255.255.255\nB类：128.0.0.0 ~ 191.255.255.255\nC类：192.0.0.0 ~ 223.255.255.255\n子网掩码：连续1表示网络位，连续0表示主机位\n可用主机数 = 2^主机位 - 2（减去网络地址和广播地址）",
    method: "解题步骤：\n1. 把子网掩码转成二进制，数1的个数=网络位\n2. 主机位 = 32 - 网络位\n3. 可用主机数 = 2^主机位 - 2\n4. 网络地址 = IP & 掩码（按位与）",
    example: "例：子网掩码255.255.255.240，求可用主机数\n解：240 = 11110000，所以最后4位是主机位\n可用主机数 = 2⁴ - 2 = 14台"
  },
  "运放": {
    title: "运算放大器",
    formula: "理想运放两个重要结论：\n1. 虚短：同相端电压 = 反相端电压 (u+ = u-)\n2. 虚断：两个输入端电流都为0\n反相比例放大：u₀ = -(Rf/R₁) · uᵢ\n同相比例放大：u₀ = (1 + Rf/R₁) · uᵢ\n电压跟随器：u₀ = uᵢ",
    method: "解题步骤：\n1. 先判断是反相输入还是同相输入\n2. 反相：套公式 u₀ = -(Rf/R₁)·uᵢ\n3. 同相：套公式 u₀ = (1+Rf/R₁)·uᵢ\n4. 注意反相输出有负号",
    example: "例：反相比例放大电路，R₁=10kΩ，Rf=100kΩ，输入ui=0.5V，求输出uo\n解：uo = -(Rf/R₁)·ui = -(100/10)·0.5 = -5V"
  },
  "循环与算法": {
    title: "C语言循环结构",
    formula: "for循环：for(初始化; 条件; 更新) { 循环体; }\nwhile循环：while(条件) { 循环体; }\ndo-while循环：do { 循环体; } while(条件);\nbreak：跳出整个循环\ncontinue：跳过本次循环，继续下一次",
    method: "解题步骤：\n1. 先写出循环变量的初值\n2. 跟踪每次循环后变量的变化\n3. 注意边界条件：< 还是 <=，i从0还是从1开始\n4. 循环结束后变量的值就是答案",
    example: "例：int sum=0; for(i=1; i<=10; i++) sum+=i; 求sum\n解：sum = 1+2+3+...+10 = 55"
  }
};

/* 优化解析：为重点题目替换更详细的解析 */
window.UPGRADED_ANALYSIS = {
  /* 高数重点题 */
  "m01": {
    analysis: "【题干】lim(x→0) (sin3x)/x =（ ）\n【考点】重要极限 + 等价无穷小\n【详细解答】\n1. 这是 0/0 型极限：x→0时，sin3x→0，x→0\n2. 利用等价无穷小替换：x→0时，sin(ax) ~ ax\n3. 所以 sin3x ~ 3x\n4. 代入：lim(x→0) 3x / x = 3\n【答案】3\n【易错】容易忘记系数3，错选1。记住：sin(ax) ~ ax，不是sinx~x然后直接等于1。"
  },
  /* 计网重点题 */
  "n06": {
    analysis: "【题干】MAC地址长度为（ ）比特。\n【考点】数据链路层 - MAC地址\n【详细解答】\n1. MAC地址（物理地址）是固化在网卡上的全球唯一地址\n2. 长度为 48 位（6字节），通常表示为12位十六进制数\n3. 对比：IPv4地址是32位，IPv6是128位\n【答案】48\n【易错】不要和IPv4的32位搞混。MAC是48位，IPv4是32位。"
  }
};
// 广西专升本 2027 版官方考纲（电子与信息大类）
// 来源：广西招生考试院 2027 年版考试大纲与说明
window.SYLLABUS = {
  meta: {
    year: "2027 年版",
    totalScore: 600,
    form: "闭卷、笔试",
    note: "公共基础课 2 门各 150 分 + 专业基础综合课合卷 300 分 = 600 分"
  },
  subjects: [
    {
      id: "math", name: "高等数学", color: "#3B82F6", score: 150, time: 120,
      structure: [
        ["单项选择题", "10 题", "每题 5 分", "50 分"],
        ["填空题", "4 题", "每题 5 分", "20 分"],
        ["解答题", "7 题", "每题 8 分", "56 分"],
        ["应用题", "2 题", "每题 12 分", "24 分"]
      ],
      chapters: [
        {
          title: "一、一元函数微积分学",
          points: [
            ["函数、极限与连续", "函数三要素与定义域值域；有界/单调/奇偶/周期性；反函数；复合函数分解；基本初等函数图像；极限概念与四则运算；两个重要极限；无穷小阶的比较与等价代换；连续性与间断点判定；闭区间连续函数性质。"],
            ["一元函数导数与微分", "导数定义与可导连续关系；导数几何意义、切线与法线方程；基本求导公式、四则运算、反函数与复合函数求导；隐函数、对数求导、参数方程求导；高阶导数；微分定义与一阶微分形式不变性。"],
            ["一元函数导数的应用", "罗尔/拉格朗日/柯西中值定理；洛必达法则；单调性判定；极值与最值求法及应用；拐点与曲线凹凸性；函数作图步骤。"],
            ["一元函数积分学", "原函数与不定积分概念；基本积分公式；直接积分、换元、分部积分；定积分概念与几何意义；变上限积分求导与牛顿-莱布尼茨公式；广义积分；定积分简单应用（面积、体积）。"]
          ]
        },
        {
          title: "二、常微分方程",
          points: [
            ["基本概念", "微分方程的阶、解、通解、初始条件与特解。"],
            ["一阶方程", "可分离变量微分方程、一阶线性微分方程求解。"],
            ["高阶方程", "降阶法解高阶方程；二阶线性微分方程解的结构；二阶常系数齐次线性微分方程解法；了解二阶常系数非齐次解法。"]
          ]
        }
      ]
    },
    {
      id: "english", name: "英语", color: "#8B5CF6", score: 150, time: 120,
      structure: [
        ["词汇和语法结构（单选）", "20 题", "每题 2 分", "40 分"],
        ["阅读理解（单选）", "25 题", "每题 2 分", "50 分"],
        ["阅读理解（填空）", "5 题", "每题 2 分", "10 分"],
        ["翻译·英译汉（选择）", "8 题", "每题 3 分", "24 分"],
        ["翻译·汉译英", "1 题", "8 分", "8 分"],
        ["写作（应用文）", "1 题", "18 分", "18 分"]
      ],
      chapters: [
        {
          title: "考查内容",
          points: [
            ["词汇与语法", "掌握高职高专英语课标规定的 3000 个常用单词、500 个常用短语与固定搭配；掌握句子结构、时态、语态等语法规则并正确运用。"],
            ["阅读理解", "理解主旨大意；获取具体细节；根据内容判断或推论；根据上下文推测词义；理解作者观点或写作意图。题材：经济/教育/历史/科技/文学/社会习俗/中外职场文化。"],
            ["翻译", "英译汉：准确识别核心词汇与基础语法、正确理解句意；汉译英：用恰当词汇搭配与正确语法组织句子，译文连贯、符合英语思维。"],
            ["写作", "根据要求撰写不少于 80 词的应用文（通知/信函等），语句通顺、语篇连贯、结构完整、文体规范。"]
          ]
        }
      ]
    },
    {
      id: "ee", name: "电工电子技术基础", color: "#F97316", score: 100, time: "合卷 150 分钟",
      chapters: [
        {
          title: "考查内容",
          points: [
            ["电路基本概念", "电流/电压/电位/电功率定义；理想电压源、电流源特性；万用表测量电阻、电压、电流。"],
            ["直流电路", "戴维南定理与叠加定理；基尔霍夫电压/电流定律（KVL/KCL）；电阻串并联分析。"],
            ["单相正弦交流电路", "正弦交流电三要素；电容/电感伏安关系；容抗感抗概念；正弦波形分析。"],
            ["动态电路", "RC、RL 充放电规律；时间常数概念；换路定律。"],
            ["二极管与直流稳压电源", "半导体与二极管基本知识；二极管测量；二极管简单应用；线性直流稳压电源分析。"],
            ["三极管电路", "三极管基本知识与测量；开关电路、共发射极/共集电极放大电路分析。"],
            ["运算放大器", "运放基本知识；非线性电路（电压比较器）；线性电路（同相/反相/加法/减法/差动放大器）。"],
            ["逻辑代数与门电路", "逻辑代数基本知识；逻辑门电路基本知识。"],
            ["组合逻辑电路", "简单组合逻辑电路分析与设计。"],
            ["时序逻辑电路", "RS、JK、D 触发器基本知识；简单时序逻辑电路分析。"]
          ]
        }
      ]
    },
    {
      id: "c", name: "C 语言程序设计", color: "#10B981", score: 100, time: "合卷 150 分钟",
      chapters: [
        {
          title: "考查内容",
          points: [
            ["程序设计与 C 语言", "计算机程序与语言概述；C 程序结构；运行 C 程序的步骤与方法。"],
            ["数据表现与运算", "常量变量定义；整型/字符型/浮点型数据使用；数据类型转换。"],
            ["顺序程序设计", "运算符与表达式；基本 C 语句；数据输入输出。"],
            ["选择结构", "关系/逻辑运算符与表达式；if 语句；条件运算符；switch 语句。"],
            ["循环结构", "三种循环语句异同与使用；循环嵌套；break 与 continue。"],
            ["数组", "一维/二维数组定义与引用；字符数组。"],
            ["函数", "函数定义调用与声明；嵌套与递归；数组作函数参数；局部/全局变量；编译预处理。"],
            ["指针", "指针变量定义引用；指针引用数组；指针引用字符串；指向函数的指针。"],
            ["构造数据类型", "结构体变量/数组；共用体；枚举类型。"],
            ["文件", "文件定义分类；打开关闭；顺序读写；随机读写。"]
          ]
        }
      ]
    },
    {
      id: "net", name: "计算机网络基础", color: "#06B6D4", score: 100, time: "合卷 150 分钟",
      chapters: [
        {
          title: "考查内容",
          points: [
            ["网络概述", "网络发展/概念/分类/组成；电路交换与存储转发分组交换；协议/层次/接口；OSI 与 TCP/IP 体系结构及各层功能。"],
            ["物理层", "物理层与物理协议基本概念；数据通信基本概念；传输介质；数据编码；多路复用分类与特点。"],
            ["数据链路层", "差错控制；交换机原理；VLAN 原理；ARP 协议；链路层功能服务；CSMA/CD；二层交换机基本配置。"],
            ["网络层", "路由器原理；NAT、ICMP；RIP、OSPF；网络层功能服务；IP 协议、IPv4/IPv6；IP 地址分类、子网掩码与子网划分；ping、traceroute；路由器/三层交换机基本配置。"],
            ["传输层", "传输层功能服务；连接管理；UDP、TCP 协议；TCP 拥塞控制与流量控制。"],
            ["应用层", "DNS 域名系统与服务过程；WWW；FTP；电子邮件；DHCP；常用服务端口。"]
          ]
        }
      ]
    }
  ],
  majorCombined: {
    title: "专业基础综合课（合卷）",
    score: 300, time: 150,
    note: "电工电子技术基础 100 + C 语言程序设计 100 + 计算机网络基础 100，同卷连考",
    structure: [
      ["单项选择题", "30 题", "每题 4 分", "120 分"],
      ["判断题", "15 题", "每题 3 分", "45 分"],
      ["填空题", "30 题", "每题 2 分", "60 分"],
      ["应用题", "6 题", "每题 12.5 分", "75 分"]
    ]
  }
};
// 2027 官方考纲样题（广西招生考试院大纲原题）
// 全部为大纲"题型示例"原题，配详细解析
(function(){
  const S = window.STUDY_DATA = window.STUDY_DATA || { questions: [] };
  const qs = [
    // ========== 数学 ==========
    {
      id:"syl-m1", module:"public", subject:"高等数学", chapter:"ch-math-2", knowledgePoint:"微分",
      type:"choice", typeLabel:"单选", difficulty:1, difficultyLabel:"基础",
      stem:"已知 y = x³，则 dy =（　）",
      options:["3x²","3x² + C","3x² dx","x³ dx"],
      answer:"3x² dx",
      analysis:"【解析】dy = y' dx。y=x³ 求导得 y'=3x²，故 dy=3x² dx。A 是导数但漏了 dx；B 错在不定积分才加 C；D 导数求错。选 C。",
      source:"2027官方考纲", tags:["微分","考纲样题"]
    },
    {
      id:"syl-m2", module:"public", subject:"高等数学", chapter:"ch-math-1", knowledgePoint:"函数定义域",
      type:"blank", typeLabel:"填空", difficulty:2, difficultyLabel:"强化",
      stem:"设 f(x) = lg|x-1| / √(2x+1)，则 f(x) 的定义域是____。",
      answer:"(-1/2, 1) ∪ (1, +∞)",
      analysis:"【解析】两个限制：① 分母 √(2x+1) 要求 2x+1>0 → x>-1/2；② lg 的真数 |x-1|>0 → x≠1。综合得 (-1/2,1)∪(1,+∞)。注意是开区间，且 x=1 必须剔除。",
      source:"2027官方考纲", tags:["函数定义域","考纲样题"]
    },
    {
      id:"syl-m3", module:"public", subject:"高等数学", chapter:"ch-math-1", knowledgePoint:"两个重要极限",
      type:"calc", typeLabel:"解答", difficulty:2, difficultyLabel:"强化", score:8,
      stem:"求极限 lim(x→0) ln(cos2x) / ln(cos3x)。",
      answer:"4/9",
      analysis:"【解析】x→0 时 ln(cos2x)→0、ln(cos3x)→0，属 0/0 型。用等价无穷小：ln(1+u)~u。cos2x=1+(cos2x-1)，ln(cos2x)~cos2x-1=-2sin²x。同理 ln(cos3x)~cos3x-1=-(9/2)sin²x。比值 = 2sin²x / (9/2)sin²x = 4/9。也可用洛必达法则求导得到同样结果。",
      source:"2027官方考纲", tags:["极限","等价无穷小","考纲样题"]
    },
    {
      id:"syl-m4", module:"public", subject:"高等数学", chapter:"ch-math-3", knowledgePoint:"最值应用",
      type:"apply", typeLabel:"应用", difficulty:3, difficultyLabel:"冲刺", score:12,
      stem:"某公司每天生产 A 等轮胎 100x 个、B 等 100y 个，y=(40-10x)/(5-x)（0≤x≤4）。A 利润是 B 的 2 倍。求总利润最大时 A、B 每天产量。",
      answer:"A 约 276 个，B 约 553 个",
      analysis:"【解析】设 B 单个利润 a，则 A 为 2a。总利润 L=100x·2a+100a·y=a[200x+(4000-1000x)/(5-x)]。令 L'=0：200-1000/(5-x)²=0 → (5-x)²=5 → x=5-√5≈2.764。A 产量=100x≈276；B 产量=100y≈553。",
      source:"2027官方考纲", tags:["最值","考纲样题"]
    },
    // ========== 英语 ==========
    {
      id:"syl-e1", module:"public", subject:"英语", chapter:"ch-en-grammar", knowledgePoint:"连词",
      type:"choice", typeLabel:"单选", difficulty:1, difficultyLabel:"基础",
      stem:"I didn't receive the email ___ I could not connect to the Internet.",
      options:["if","unless","although","because"],
      answer:"because",
      analysis:"【解析】后句“无法联网”是前句“没收到邮件”的原因，选 because。if 表条件；unless=if not；although 表让步。句意为“我没收到邮件，因为连不上网”。",
      source:"2027官方考纲", tags:["连词","考纲样题"]
    },
    {
      id:"syl-e2", module:"public", subject:"英语", chapter:"ch-en-grammar", knowledgePoint:"动词短语",
      type:"choice", typeLabel:"单选", difficulty:1, difficultyLabel:"基础",
      stem:"The famous technology company will ___ a new research center in the university.",
      options:["break up","set up","turn up","get up"],
      answer:"set up",
      analysis:"【解析】set up 建立/设立，set up a research center 建立研究中心。break up 分手/打碎；turn up 出现/调大；get up 起床。",
      source:"2027官方考纲", tags:["动词短语","考纲样题"]
    },
    {
      id:"syl-e3", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读主旨",
      type:"choice", typeLabel:"阅读", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读·Strange Weather）What is a proper title for the passage?",
      options:["Humans vs. Nature","Strange Weather","Unusual Tornadoes","Horrible News"],
      answer:"Strange Weather",
      analysis:"【解析】文章列举“天上掉青蛙”“火龙卷风”“冰雹杀人”三种怪异天气，主旨是 Strange Weather。A 太宽泛；C 只覆盖第二段；D 仅讲危害。",
      source:"2027官方考纲", tags:["阅读","主旨题","考纲样题"]
    },
    {
      id:"syl-e4", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读细节",
      type:"choice", typeLabel:"阅读", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读·Strange Weather）What is true about the frogs that rained down in Serbia?",
      options:["They fell off a truck.","A tornado took them from a lake and dropped them over the town.","They fell from an exploded plane.","They grew in clouds."],
      answer:"A tornado took them from a lake and dropped them over the town.",
      analysis:"【解析】原文：a tornado had passed over a lake, sucked up animals, then dropped in the town. 对应第二项。其余选项都是原文中“人们的错误猜测”，不是科学解释。",
      source:"2027官方考纲", tags:["阅读","细节题","考纲样题"]
    },
    {
      id:"syl-e5", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读词义",
      type:"choice", typeLabel:"阅读", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读）The words \"sucked up\" in the passage means ___.",
      options:["made","lifted","used","blew"],
      answer:"lifted",
      analysis:"【解析】suck up 在此语境指龙卷风把动物“吸起/卷起”，近义 lifted（举起）。made 制造；used 使用；blew 吹。",
      source:"2027官方考纲", tags:["阅读","词义题","考纲样题"]
    },
    {
      id:"syl-e6", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读推断",
      type:"choice", typeLabel:"阅读", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读）What's the author's attitude towards weird weather?",
      options:["Common and not worrying.","Exciting to watch.","Not very dangerous.","Terrible and people should be careful."],
      answer:"Terrible and people should be careful.",
      analysis:"【解析】文章描述火龙卷风、冰雹致死等灾害，作者态度是警示——这种怪异天气很可怕、要小心。",
      source:"2027官方考纲", tags:["阅读","态度题","考纲样题"]
    },
    {
      id:"syl-e7", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读细节",
      type:"choice", typeLabel:"阅读", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读·QuickBooks）What is QuickBooks?",
      options:["A bank.","An accountant.","A book.","A software."],
      answer:"A software.",
      analysis:"【解析】QuickBooks 是财务软件（manage money, connect bank, run reports），不是银行/会计师/书。",
      source:"2027官方考纲", tags:["阅读","细节题","考纲样题"]
    },
    {
      id:"syl-e8", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读细节",
      type:"choice", typeLabel:"阅读", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读·QuickBooks）Which can QuickBooks NOT do?",
      options:["Track expenses.","Customize invoices.","Run reports.","HR management."],
      answer:"HR management.",
      analysis:"【解析】文中提到 connect bank（管支出）、custom templates（自定义发票）、run reports（出报表），未提 HR 人力资源管理。",
      source:"2027官方考纲", tags:["阅读","细节题","考纲样题"]
    },
    {
      id:"syl-e9", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读填空",
      type:"blank", typeLabel:"阅读填空", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读·Teacher招聘）What is the name of the employment organization? It is New England ____.",
      answer:"Child Care Academy",
      analysis:"【解析】原文标题 New England Child Care Academy，招聘组织名称即此。",
      source:"2027官方考纲", tags:["阅读填空","考纲样题"]
    },
    {
      id:"syl-e10", module:"public", subject:"英语", chapter:"ch-en-read", knowledgePoint:"阅读填空",
      type:"blank", typeLabel:"阅读填空", difficulty:2, difficultyLabel:"强化",
      stem:"（阅读）Where is the job located?",
      answer:"Salem, NH",
      analysis:"【解析】原文 Job Location: Salem, NH 03079。",
      source:"2027官方考纲", tags:["阅读填空","考纲样题"]
    },
    {
      id:"syl-e11", module:"public", subject:"英语", chapter:"ch-en-trans", knowledgePoint:"英译汉",
      type:"choice", typeLabel:"翻译", difficulty:2, difficultyLabel:"强化",
      stem:"（英译汉选择）Please take a few moments to complete our customer feedback form so that we may serve you better in the future.",
      options:["请花一点时间完成我们的顾客反馈表，我们才能更好地服务。","请拨冗完成我们的顾客反馈表，这样能帮助我们提升未来的服务。","请花时间完成这份顾客反应表，所以我们才能有所提高。","请填写申请表成为我们的顾客，我们就能服务你们。"],
      answer:"请拨冗完成我们的顾客反馈表，这样能帮助我们提升未来的服务。",
      analysis:"【解析】最佳译文：②。\"so that we may serve you better\" = 以便我们更好地服务你未来。\"take a few moments\" = 拨冗/花一点时间。①也基本正确但略生硬；③把 feedback 译成“反应”、逻辑错；④完全误解。",
      source:"2027官方考纲", tags:["翻译","考纲样题"]
    },
    {
      id:"syl-e12", module:"public", subject:"英语", chapter:"ch-en-write", knowledgePoint:"应用文",
      type:"write", typeLabel:"写作", difficulty:3, difficultyLabel:"冲刺", score:18,
      stem:"写一篇不少于80词的英文通知：全体学生参加“如何提高英语写作能力”讲座，主讲李明教授，地点图书馆2楼，时间2026年4月25日9:00-11:00，联系人张红 gxacd@qq.com，主办学生会。",
      answer:"Notice: A lecture on English writing will be held...",
      analysis:"【评分要点】格式：标题Notice+称呼+正文+落款；内容齐全（时间地点人物事件联系人）；不少于80词；语句连贯。",
      source:"2027官方考纲", tags:["写作","通知","考纲样题"]
    },
    // ========== 电工 ==========
    {
      id:"syl-ee1", module:"major", subject:"电工", chapter:"ch-ee-6", knowledgePoint:"三极管工作状态",
      type:"choice", typeLabel:"单选", difficulty:3, difficultyLabel:"冲刺",
      stem:"某 NPN 三极管：发射极电位 1.2V，基极 1.9V，集电极 1.3V。该管工作状态是？",
      options:["放大","饱和","截止","不确定"],
      answer:"饱和",
      analysis:"【解析】NPN 管：发射结正偏需 Vb>Ve=1.2V，现 Vb-Ve=0.7V 正偏。放大状态要求集电结反偏（Vc>Vb），现 Vc=1.3 < Vb=1.9，集电结也正偏。发射结正偏+集电结正偏=饱和导通。",
      source:"2027官方考纲", tags:["三极管","考纲样题"]
    },
    // ========== C 语言 ==========
    {
      id:"syl-c1", module:"major", subject:"C语言", chapter:"ch-c-2", knowledgePoint:"标识符命名",
      type:"choice", typeLabel:"单选", difficulty:1, difficultyLabel:"基础",
      stem:"下列 C 语言变量命名正确的是？",
      options:["ser1","if","2ban","os-3"],
      answer:"ser1",
      analysis:"【解析】C 标识符规则：字母/数字/下划线组成，不能数字开头，不能是关键字。ser1 合法；if 是关键字；2ban 数字开头；os-3 含连字符-（被当减号）。",
      source:"2027官方考纲", tags:["标识符","考纲样题"]
    },
    {
      id:"syl-c2", module:"major", subject:"C语言", chapter:"ch-c-5", knowledgePoint:"自增运算符",
      type:"judge", typeLabel:"判断", difficulty:2, difficultyLabel:"强化",
      stem:"执行 int n=2025,m=0; m=n++; 后，m 的值为 2026。",
      options:["正确","错误"],
      answer:"错误",
      analysis:"【解析】m=n++ 是后置自增：先把 n 原值赋给 m，再 n 自增。所以 m=2025、n=2026。若写成 m=++n 才是 2026。",
      source:"2027官方考纲", tags:["自增","考纲样题"]
    },
    {
      id:"syl-c3", module:"major", subject:"C语言", chapter:"ch-c-6", knowledgePoint:"数组",
      type:"blank", typeLabel:"填空", difficulty:1, difficultyLabel:"基础",
      stem:"int a[5]={6,9,12,15,18}; 则 a[0]+a[3]=____。",
      answer:"21",
      analysis:"【解析】数组下标从 0 开始：a[0]=6, a[3]=15。6+15=21。",
      source:"2027官方考纲", tags:["数组","考纲样题"]
    },
    // ========== 计网 ==========
    {
      id:"syl-n1", module:"major", subject:"计网", chapter:"ch-net-app", knowledgePoint:"DNS",
      type:"choice", typeLabel:"单选", difficulty:2, difficultyLabel:"强化",
      stem:"某电脑无法打开网页，但能正常登录 QQ 和微信，最可能的原因是？",
      options:["线路故障","路由故障","DNS 解析故障","操作系统故障"],
      answer:"DNS 解析故障",
      analysis:"【解析】QQ/微信能登说明网络连通（IP层通）、路由正常、操作系统正常。打不开网页是因为域名无法解析成 IP，即 DNS 故障。",
      source:"2027官方考纲", tags:["DNS","排错","考纲样题"]
    },
    {
      id:"syl-n2", module:"major", subject:"计网", chapter:"ch-net-dll", knowledgePoint:"TTL门电路",
      type:"judge", typeLabel:"判断", difficulty:2, difficultyLabel:"强化",
      stem:"TTL 门电路的一个输入端悬空，相当于输入高电平。",
      options:["正确","错误"],
      answer:"正确",
      analysis:"【解析】TTL 电路输入悬空时，内部三极管基极无电流下拉，等效为高电平输入。CMOS 则不同（悬空不确定）。",
      source:"2027官方考纲", tags:["TTL","考纲样题"]
    },
    {
      id:"syl-n3", module:"major", subject:"计网", chapter:"ch-net-tp", knowledgePoint:"TCP/IP分层",
      type:"judge", typeLabel:"判断", difficulty:1, difficultyLabel:"基础",
      stem:"在 TCP/IP 参考模型中，TCP 协议工作在网络层。",
      options:["正确","错误"],
      answer:"错误",
      analysis:"【解析】TCP 是传输层协议（提供可靠端到端服务）。网络层是 IP。",
      source:"2027官方考纲", tags:["TCP/IP","分层","考纲样题"]
    },
    {
      id:"syl-n4", module:"major", subject:"电工", chapter:"ch-ee-2", knowledgePoint:"电阻并联",
      type:"blank", typeLabel:"填空", difficulty:1, difficultyLabel:"基础",
      stem:"R₁=30Ω，R₂=60Ω，并联等效电阻为____Ω。",
      answer:"20",
      analysis:"【解析】并联：1/R=1/30+1/60=3/60=1/20 → R=20Ω。",
      source:"2027官方考纲", tags:["电阻","并联","考纲样题"]
    },
    {
      id:"syl-n5", module:"major", subject:"计网", chapter:"ch-net-overview", knowledgePoint:"网络组成",
      type:"blank", typeLabel:"填空", difficulty:1, difficultyLabel:"基础",
      stem:"计算机网络系统由通信子网和____子网组成。",
      answer:"资源",
      analysis:"【解析】传统网络两分法：通信子网（负责数据传输）+ 资源子网（负责信息处理与共享）。",
      source:"2027官方考纲", tags:["网络组成","考纲样题"]
    },
    {
      id:"syl-ee2", module:"major", subject:"电工", chapter:"ch-ee-7", knowledgePoint:"运放应用",
      type:"apply", typeLabel:"应用", difficulty:3, difficultyLabel:"冲刺", score:12,
      stem:"同相比例放大器：测 u_i=0.2→u_o=0.6；0.5→1.5；1→3。(1)是同相还是反相放大？(2)电压放大倍数 Au=？(3)R1=10kΩ，要 Au=10，R2=？(4)输出变方波可能哪个电阻虚焊？(5)输出输入完全一样可能哪个电阻虚焊？",
      answer:"(1)同相 (2)3 (3)90kΩ (4)R2 (5)R1",
      analysis:"【解析】(1)输入接同相端+；(2)Au=uo/ui=0.6/0.2=3；(3)同相放大 Au=1+R2/R1，要 Au=10 → R2/R1=9 → R2=90kΩ；(4)R2虚焊→运放开环→输出方波（比较器状态）；(5)R1虚焊→负反馈消失变电压跟随器→输出=输入。",
      source:"2027官方考纲", tags:["运放","考纲样题"]
    }
  ];
  S.questions = S.questions.concat(qs);
})();
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.FORMULA_BOOK = {"高等数学": [{"key": "高频必背", "items": [{"name": "重要极限", "formula": "lim(x→0) (frac{sin x}{x}) = 1", "use": "x→0 且出现 sin(ax)、tan(ax) 与 x 的比时套用。", "example": "例：lim(x→0) (frac{sin 3x}{x}) = 3", "wrong": "不要写成 0/0=1；等价无穷小只用于乘除，加减先变形。"}, {"name": "e 的极限", "formula": "lim(x→∞) (1+frac{1}{x})^x = e", "use": "形如 (1+a/x)^x → e^a。", "example": "例：lim(x→∞) (1+frac{2}{x})^x = e²", "wrong": "结果是 e^a 不是 e；(1−1/x)^x → 1/e。"}, {"name": "常用等价无穷小", "formula": "x→0 时：sinx~x，1−cosx~frac{x²}{2}，eˣ−1~x", "use": "乘除式可直接替换；加减式先通分。", "example": "例：lim(x→0) (frac{1−cos 2x}{x²}) = 2", "wrong": "1−cosx 不是 ~x，而是 ~x²/2。"}, {"name": "导数基本公式", "formula": "(xⁿ)′=nxⁿ⁻¹；(sinx)′=cosx；(cosx)′=−sinx；(eˣ)′=eˣ；(lnx)′=frac{1}{x}", "use": "所有求导题先落到这几条，再套法则。", "example": "例：(x³)′=3x²；(lnx)′=frac{1}{x}", "wrong": "(cosx)′ 有负号。"}, {"name": "乘积与商法则", "formula": "(uv)′=u′v+uv′；(frac{u}{v})′=frac{u′v−uv′}{v²}", "use": "两个函数相乘/相除时用。", "example": "例：(x²·sinx)′ = 2x sinx + x² cosx", "wrong": "乘积求导不是 u′v′。"}, {"name": "链式法则", "formula": "[f(g(x))]′ = f′(g(x))·g′(x)", "use": "复合函数：外层求导 × 内层求导。", "example": "例：(sin 2x)′ = 2cos 2x", "wrong": "易漏内层系数。"}]}, {"key": "常考变形", "items": [{"name": "幂函数积分", "formula": "∫xⁿdx = frac{xⁿ⁺¹}{n+1} + C（n≠−1）；∫frac{1}{x}dx = ln|x| + C", "use": "先化成 xⁿ 再积分；结果必加 C。", "example": "例：∫x³dx = frac{x⁴}{4} + C", "wrong": "漏写 +C；n=−1 不能用幂公式。"}, {"name": "凑微分", "formula": "∫f(g(x))g′(x)dx = ∫f(u)du，u=g(x)", "use": "见到「复合 × 内层导」就凑 u。", "example": "例：∫2x·e^{x²}dx = e^{x²}+C", "wrong": "定积分换元要改上下限。"}, {"name": "分部积分", "formula": "∫udv = uv − ∫vdu", "use": "多项式×指数/三角，或含 ln、arctan。", "example": "例：∫x eˣdx = eˣ(x−1)+C", "wrong": "uv 与积分项符号搞反。"}, {"name": "牛顿-莱布尼茨公式", "formula": "∫ₐᵇf(x)dx = F(b) − F(a)", "use": "先求原函数 F，再代上下限。", "example": "例：∫₀²x²dx = frac{8}{3}", "wrong": "忘了减 F(a)。"}, {"name": "变上限积分求导", "formula": "d/dx ∫ₐˣf(t)dt = f(x)", "use": "F(x)=∫ₐˣf(t)dt，则 F′(x)=f(x)。", "example": "例：F(x)=∫₀ˣsin t dt ⇒ F′(x)=sin x", "wrong": "被积函数含 x 时要先提出。"}, {"name": "面积与旋转体", "formula": "S=∫ₐᵇ|f|dx；V=π∫ₐᵇ[f(x)]²dx（绕 x 轴）", "use": "面积保证上减下；体积对 f 平方。", "example": "例：y=x²，x=0..2：S=frac{8}{3}，V=frac{32π}{5}", "wrong": "体积公式里是 f²。"}, {"name": "极值与最值", "formula": "f′(x)=0 找驻点 → 判极值 → 闭区间再比端点", "use": "应用题先列目标函数再求导。", "example": "例：f=x²−2x，x=1 处极小值 −1", "wrong": "驻点不一定是极值；最值必须比端点。"}, {"name": "可分离变量方程", "formula": "dy/dx = g(x)h(y) ⇒ ∫frac{dy}{h(y)} = ∫g(x)dx", "use": "分离变量后积分，初值定 C。", "example": "例：y′=2xy ⇒ y=Ce^{x²}", "wrong": "通解要含任意常数 C。"}]}, {"key": "冷门补充", "items": [{"name": "洛必达法则", "formula": "lim frac{f}{g} = lim frac{f′}{g′}（仅 0/0 或 ∞/∞）", "use": "先判型，再求导，可多次。", "example": "例：lim(x→0) (frac{eˣ−1}{x}) = 1", "wrong": "非 0/0 乱用会错。"}, {"name": "泰勒展开", "formula": "sinx = x − frac{x³}{6} + o(x³)", "use": "加减抵消时用，比等价无穷小更稳。", "example": "例：lim(x→0) (frac{sinx−x}{x³}) = −frac{1}{6}", "wrong": "展开阶数不够。"}]}, {"key": "大纲补强", "items": [{"name": "罗尔定理", "formula": "闭连续、开可导、f(a)=f(b) ⇒ 存在 ξ 使 f′(ξ)=0", "use": "证明至少有一驻点/根。", "example": "例：f(x)=x²−2x 在 [0,2]，f(0)=f(2)=0 ⇒ f′(ξ)=0", "wrong": "三条件缺一不可。"}, {"name": "拉格朗日中值定理", "formula": "f(b)−f(a) = f′(ξ)(b−a)", "use": "证明不等式、估值。", "example": "例：f(x)=lnx 在 [1,2]：ln2 = 1/ξ ·1，ξ∈(1,2)", "wrong": "ξ 在开区间内。"}, {"name": "洛必达使用条件", "formula": "仅 0/0 或 ∞/∞；导后极限存在或为 ∞", "use": "先判型再求导；可连用。", "example": "例：lim(x→0) frac{eˣ−1}{x} = 1", "wrong": "其他型先变形；求导后无极限不能说原极限无。"}, {"name": "定积分应用：弧长（一阶）", "formula": "S = ∫ₐᵇ √(1+y′²) dx", "use": "曲线 y=f(x) 从 a 到 b。", "example": "例：y=x，0 到 1：S=√2", "wrong": "是 √(1+y′²)，不是 √(1+y′)。"}, {"name": "级数收敛必要条件", "formula": "∑an 收敛 ⇒ lim an = 0（逆不成立）", "use": "判发散：通项不趋于 0 则发散。", "example": "例：∑1 发散（通项→1≠0）", "wrong": "通项→0 不能推出收敛（如调和级数）。"}, {"name": "二阶常系数齐次方程", "formula": "y″+py′+qy=0，特征根 r₁,r₂", "use": "Δ>0: C₁e^r₁ˣ+C₂e^r₂ˣ；Δ=0: (C₁+C₂x)e^rx；Δ<0: e^αˣ(C₁cosβx+C₂sinβx)", "example": "例：y″-3y′+2y=0 ⇒ y=C₁eˣ+C₂e²ˣ", "wrong": "Δ<0 不要漏 e^αˣ"}, {"name": "定积分对称性", "formula": "f奇: ∫₋ₐᵃf=0；f偶: ∫₋ₐᵃf=2∫₀ᵃf", "use": "对称区间先看奇偶，奇函数直接得0", "example": "例：∫₋₁¹x³dx = 0", "wrong": "不是所有对称区间都为0，要先看奇偶"}, {"name": "拐点判别", "formula": "f″(x₀)=0 且两侧 f″ 变号 ⇒ 拐点", "use": "找凹凸分界点", "example": "例：y=x³ 在 x=0 是拐点", "wrong": "f″=0 不一定是拐点，必须两侧变号"}]}], "电工电子技术基础": [{"key": "高频必背", "items": [{"name": "欧姆定律", "formula": "U = IR；I = frac{U}{R}；R = frac{U}{I}", "use": "线性电阻；注意关联参考方向。", "example": "例：R=10Ω，I=2A ⇒ U=20V", "wrong": "单位用 V/A/Ω；非线性不能直接用。"}, {"name": "电功率", "formula": "P = UI = I²R = frac{U²}{R}", "use": "三式等价，选数据齐的算。", "example": "例：U=12V，I=3A ⇒ P=36W", "wrong": "不要用 U/I。"}, {"name": "基尔霍夫定律", "formula": "KCL：ΣI=0；KVL：ΣU=0", "use": "节点电流、回路电压。", "example": "例：流入 3A+2A ⇒ 流出 5A", "wrong": "参考方向要一致。"}, {"name": "电阻串并联", "formula": "串 R=R₁+R₂；并 frac{1}{R}=frac{1}{R₁}+frac{1}{R₂}", "use": "两并时 R=frac{R₁R₂}{R₁+R₂}。", "example": "例：4Ω 与 12Ω 并联 ⇒ 3Ω", "wrong": "并联总电阻小于任一支路。"}, {"name": "分压分流", "formula": "串联 Uₖ=U·frac{Rₖ}{R总}", "use": "两电阻分压更简单。", "example": "例：4Ω+6Ω 串 10V，U₄=4V", "wrong": "分压用电阻比。"}]}, {"key": "常考变形", "items": [{"name": "全电路欧姆定律", "formula": "I = frac{E}{R+r}；U = IR = E − Ir", "use": "有内阻时电流除 (R+r)。", "example": "例：E=12V，r=1Ω，R=5Ω ⇒ I=2A，U=10V", "wrong": "路端电压不是 E。"}, {"name": "叠加定理", "formula": "线性电路：各源单独作用之和 = 总响应", "use": "电压源短路、电流源开路；不叠加功率。", "example": "例：I = I′ + I″", "wrong": "功率不可叠加。"}, {"name": "戴维南 / 诺顿", "formula": "戴维南 Uoc 串 Req；诺顿 Isc 并 Req", "use": "开路电压 + 源置零求内阻。", "example": "例：I = frac{Uoc}{Req+R}", "wrong": "电压源短路、电流源开路。"}, {"name": "反相运放", "formula": "uo = −frac{Rf}{R₁}·ui", "use": "输入从反相端。", "example": "例：R1=10k，Rf=50k，ui=0.2V ⇒ uo=−1V", "wrong": "漏负号。"}, {"name": "同相运放", "formula": "uo = (1+frac{Rf}{R₁})·ui", "use": "增益 ≥1；跟随器为 1。", "example": "例：R1=2k，Rf=8k ⇒ Au=5", "wrong": "与反相公式混。"}, {"name": "二极管与三极管", "formula": "硅管约 0.7V；NPN 放大区：发射结正偏、集电结反偏", "use": "判断工作状态。", "example": "例：硅二极管导通约 0.7V", "wrong": "理想模型写 0。"}]}, {"key": "冷门补充", "items": [{"name": "最大功率传输", "formula": "RL = R0 时负载功率最大", "use": "戴维南后接匹配电阻。", "example": "例：R0=8Ω 则 RL=8Ω", "wrong": "效率只有 50%。"}, {"name": "时间常数", "formula": "τ = RC（RC 电路）；τ = frac{L}{R}（RL 电路）", "use": "暂态约 5τ 到稳态。", "example": "例：R=1k，C=100μF ⇒ τ=0.1s", "wrong": "RC 与 RL 公式勿反。"}]}, {"key": "大纲补强", "items": [{"name": "正弦交流电三要素", "formula": "u = Um sin(ωt + φ)；有效值 U = Um/√2", "use": "最大值、角频率、初相位；工程多用有效值。", "example": "例：Um=311V ⇒ U≈220V", "wrong": "有效值不是最大值；φ 是初相不是相位差。"}, {"name": "阻抗与欧姆定律相量式", "formula": "Z = R + jX；İ = U̇/Z", "use": "RLC 串联：X = ωL − 1/(ωC)。", "example": "例：R=3，XL=4 ⇒ |Z|=5Ω", "wrong": "阻抗是复数，不能直接标量加。"}, {"name": "有功与功率因数", "formula": "P = UI cosφ；cosφ = R/|Z|", "use": "交流功率计算；提高 cosφ 常并电容。", "example": "例：U=220，I=10，cosφ=0.8 ⇒ P=1760W", "wrong": "P 不是 UI；无功 Q=UI sinφ。"}, {"name": "换路定律", "formula": "uc(0+) = uc(0−)；iL(0+) = iL(0−)", "use": "电容电压、电感电流不能突变。", "example": "例：uc(0−)=10V ⇒ uc(0+)=10V", "wrong": "电流、电压（非电感电容）可以突变。"}, {"name": "一阶电路三要素", "formula": "f(t) = f(∞) + [f(0+) − f(∞)]e^{−t/τ}", "use": "RC/R 一阶暂态通用解；τ=RC 或 L/R。", "example": "例：uc 从 0 充到 U：uc=U(1−e^{−t/RC})", "wrong": "τ 的电路是除源后等效。"}, {"name": "三极管电流关系", "formula": "Ie = Ic + Ib；Ic ≈ β Ib（放大区）", "use": "静态工作点估算。", "example": "例：Ib=20μA，β=50 ⇒ Ic=1mA", "wrong": "放大区才成立；饱和区 Ic 不再受 Ib 控制。"}, {"name": "电压比较器", "formula": "u+ > u- 输出高；u+ < u- 输出低", "use": "运放开环状态，输出饱和", "example": "例：u+=2V, u-=1V ⇒ 输出正饱和", "wrong": "比较器不是线性放大"}, {"name": "JK触发器特性", "formula": "Q^{n+1}=JQ̅ⁿ+K̅Qⁿ", "use": "J=K=0保持；J=1,K=0置1；J=0,K=1置0；J=K=1翻转", "example": "例：J=K=1 时每来CP翻转一次", "wrong": "触发器是边沿触发，不是电平触发"}]}], "C语言程序设计": [{"key": "高频必背", "items": [{"name": "整除与取模", "formula": "7/2 = 3；7 % 3 = 1", "use": "两整数相除丢小数；% 用于整数。", "example": "例：int a = 7/2; // a==3", "wrong": "要得 3.5 应写 7.0/2。"}, {"name": "自增自减", "formula": "i++ 先用后加；++i 先加后用", "use": "单独成句相同，表达式里不同。", "example": "例：i=1; a=i++ ⇒ a=1；b=++i ⇒ b=2", "wrong": "勿混。"}, {"name": "逻辑短路", "formula": "&& 左假不判右；|| 左真不判右", "use": "可避免除零。", "example": "例：x!=0 && 10/x>2", "wrong": "不是位运算。"}, {"name": "循环模板", "formula": "for (初始化; 条件; 增量) { 循环体 }", "use": "n 个元素 i=0..n-1。", "example": "例：for(i=0;i<n;i++) sum+=a[i];", "wrong": "i<=n 多跑一趟。"}, {"name": "累加累乘最值", "formula": "sum=0；prod=1；max=a[0]", "use": "遍历数组。", "example": "例：avg = (double)sum/n", "wrong": "max 初值写 0（全负会错）。"}]}, {"key": "常考变形", "items": [{"name": "数组下标", "formula": "a[i] ≡ *(a+i)，下标 0..n-1", "use": "二维行优先。", "example": "例：int a[5] 用 a[0]…a[4]", "wrong": "越界不报编译错。"}, {"name": "字符串", "formula": "以 '\\0' 结束；strlen 不算 '\\0'", "use": "遍历到 '\\0'。", "example": "例：\"ab\" 长 2，占 3 字节", "wrong": "结束符不是 \\n。"}, {"name": "函数传参", "formula": "值传递；改实参传 int *p", "use": "swap(&a,&b)。", "example": "例：void add(int *n){ (*n)++; }", "wrong": "改形参不影响实参。"}, {"name": "指针", "formula": "*p 取值；&a 取地址；p+1 走一元素", "use": "与数组配合。", "example": "例：int *p=&a; printf(\"%d\",*p);", "wrong": "*p++ 与 (*p)++ 不同。"}]}, {"key": "冷门补充", "items": [{"name": "递归", "formula": "f(n) = 出口；否则用 f(n-1) 表达", "use": "阶乘、斐波那契。", "example": "例：fact(n)= n==0?1:n*fact(n-1)", "wrong": "无出口会栈溢出。"}, {"name": "冒泡与二分", "formula": "冒泡 O(n²)；二分 O(log n) 需有序", "use": "有序查找二分。", "example": "例：mid = lo+hi/2", "wrong": "无序不能二分。"}]}, {"key": "大纲补强", "items": [{"name": "结构体", "formula": "struct S { 类型 成员; }；s.a 访问；p->a 等价 (*p).a", "use": "封装一组相关数据。", "example": "例：struct P { int x, y; }; P p; p.x=1;", "wrong": "p->a 必须 p 是指针。"}, {"name": "文件读写", "formula": "fopen(\"a.txt\",\"r\")；fscanf/fprintf；fclose", "use": "文本文件读写；返回 FILE*。", "example": "例：FILE *fp=fopen(\"data.txt\",\"w\");", "wrong": "不 fclose 会丢缓冲；r/w/a 模式勿混。"}, {"name": "字符串函数", "formula": "strlen 长度；strcpy 复制；strcat 拼接；strcmp 比较", "use": "操作字符串库函数", "example": "例：strcpy(s1,s2) 把s2复制到s1", "wrong": "strcpy 不检查目标空间大小，会溢出"}, {"name": "switch穿透", "formula": "每个case后必须写break，否则继续执行下一个case", "use": "多分支选择", "example": "例：case 1: a=1; break; case 2: a=2; break;", "wrong": "漏break会穿透执行后续所有case"}]}], "计算机网络基础": [{"key": "高频必背", "items": [{"name": "OSI / TCP-IP", "formula": "OSI 七层；TCP/IP 四层：接口-网际-传输-应用", "use": "协议归属题。", "example": "例：IP 网络层；TCP 传输层；HTTP 应用层", "wrong": "TCP/IP 无会话层。"}, {"name": "网络与广播地址", "formula": "网络 = IP ∧ 掩码；广播 = 网络 ∨ ¬掩码", "use": "掩码 1 是网络位。", "example": "例：192.168.1.77/26 ⇒ 网络 .64，广播 .127", "wrong": "网络地址不是最小主机。"}, {"name": "CIDR 与主机数", "formula": "可用主机 = 2^(32-n) − 2", "use": "/24 主机 254；/26 块 64。", "example": "例：/27 ⇒ 30 台可用", "wrong": "忘减 2。"}, {"name": "子网划分", "formula": "定主机位 → 借子网位 → 写掩码 → 列网络地址", "use": "先满足主机数再借位。", "example": "例：/24 划 4 子网 ⇒ /26，地址 .0 .64 .128 .192", "wrong": "块大小算错。"}, {"name": "常用端口", "formula": "HTTP 80，HTTPS 443，SSH 22，FTP 21，DNS 53，SMTP 25，DHCP 67/68", "use": "服务与端口配对。", "example": "例：网页 80/443；域名 53", "wrong": "FTP 控制 21 不是 20。"}]}, {"key": "常考变形", "items": [{"name": "TCP 与 UDP", "formula": "TCP 可靠面向连接；UDP 尽力交付", "use": "文件/网页 TCP；视频/查询 UDP。", "example": "例：DNS 查询 UDP", "wrong": "IP 本身不可靠。"}, {"name": "三次握手", "formula": "SYN → SYN+ACK → ACK", "use": "简答题按序写。", "example": "例：建立 3 次，释放多为 4 次", "wrong": "勿与挥手次数混。"}, {"name": "ARP / DNS / DHCP", "formula": "ARP IP→MAC；DNS 域名→IP；DHCP 分配 IP", "use": "填空选缩写。", "example": "例：局域网先 ARP", "wrong": "DNS 解析的不是 MAC。"}, {"name": "交换机与路由器", "formula": "交换机二层看 MAC；路由器三层看 IP", "use": "选设备层次。", "example": "例：同网交换，跨网路由", "wrong": "Hub 一层。"}, {"name": "私有 IP", "formula": "10/8；172.16/12；192.168/16", "use": "判断是否私有。", "example": "例：192.168.1.1 为 C 类私有", "wrong": "127.0.0.1 是回环。"}]}, {"key": "冷门补充", "items": [{"name": "邮件协议", "formula": "SMTP 25 发送；POP3 110 / IMAP 143 接收", "use": "配置邮箱。", "example": "例：发 SMTP，收 POP3", "wrong": "勿把 SMTP 当接收。"}, {"name": "局域网组网", "formula": "同网段、掩码一致、网关可选", "use": "排错题。", "example": "例：.10/24 与 .1 可互通", "wrong": "掩码不同要分别算网络。"}]}, {"key": "大纲补强", "items": [{"name": "以太网帧", "formula": "目的 MAC 6B + 源 MAC 6B + 类型 2B + 数据 + FCS", "use": "链路层封装题。", "example": "例：类型 0x0800 表示 IPv4", "wrong": "帧里不是 IP 地址。"}, {"name": "路由表匹配", "formula": "最长前缀匹配（前缀越长越优先）", "use": "多条路由时选 /24 优于 /16。", "example": "例：去 10.1.1.1 选 10.1.1.0/24 而非 10.0.0.0/8", "wrong": "不是选「最近」的接口。"}, {"name": "静态路由配置要点", "formula": "目标网段 + 掩码 + 下一跳/出接口", "use": "实验与排错。", "example": "例：ip route 192.168.2.0 255.255.255.0 10.0.0.1", "wrong": "下一跳要可达。"}, {"name": "TCP拥塞控制", "formula": "慢启动→拥塞避免→快重传→快恢复", "use": "发送方根据网络拥塞调整窗口", "example": "例：cwnd 从1开始指数增长到ssthresh后线性增长", "wrong": "拥塞控制和流量控制不同：拥塞是全局，流量是端到端"}, {"name": "IPv6特点", "formula": "128位地址；首部固定40字节；无校验和；支持流标签", "use": "替代IPv4", "example": "例：IPv6地址分8组十六进制", "wrong": "IPv6不支持广播，用组播代替"}]}], "英语": [{"key": "高频必背", "items": [{"name": "时态对照", "formula": "一般现在 do/does；进行 be+doing；完成 have/has+done；过去 did", "use": "看时间状语。", "example": "例：I have lived here for 3 years.", "wrong": "for/since 用完成时。"}, {"name": "被动语态", "formula": "be + 过去分词（+by…）", "use": "主语是承受者。", "example": "例：The bridge will be built.", "wrong": "漏 be。"}, {"name": "三大从句", "formula": "定语 who/which/that；宾语 that/if/wh-；状语 because/if/when", "use": "先判断从句类型。", "example": "例：the man who is standing there", "wrong": "宾语从句用陈述语序。"}, {"name": "非谓语", "formula": "to do 目的/将来；doing 主动；done 被动", "use": "enjoy+doing；want+to do。", "example": "例：I enjoy reading. / I want to go.", "wrong": "look forward to + doing。"}]}, {"key": "常考变形", "items": [{"name": "比较级句型", "formula": "比较级+than；the more…, the more…", "use": "对比两者。", "example": "例：The harder you work, the more you get.", "wrong": "more better 不用。"}, {"name": "固定搭配", "formula": "be good at；be proud of；prefer A to B", "use": "单选与写作。", "example": "例：I prefer tea to coffee.", "wrong": "prefer 不用 than。"}, {"name": "so…that / such…that", "formula": "so + adj + that；such + n + that", "use": "结果状语。", "example": "例：so easy that I can do it", "wrong": "such 修饰名词。"}]}, {"key": "冷门补充", "items": [{"name": "写作结构", "formula": "点题 → First/Second/Finally → In short", "use": "80 词短文。", "example": "例：First, we should… Finally, …", "wrong": "无连接词、无结尾。"}]}, {"key": "大纲补强", "items": [{"name": "虚拟语气（if）", "formula": "与现在相反：If + 过去式, would + 原形", "use": "建议/不可能假设。", "example": "例：If I were you, I would go.", "wrong": "if 从句不用 would。"}, {"name": "主谓一致补充", "formula": "each/every + 单数；a number of + 复数；the number of + 单数", "use": "语法单选。", "example": "例：The number of students is rising.", "wrong": "a number of 用复数谓语。"}, {"name": "冠词用法", "formula": "a/an辅音/元音开头；the特指；零冠词泛指复数", "use": "单选高频", "example": "例：a university (辅音音素开头)；an hour (元音音素开头)", "wrong": "按字母不按发音；university用a"}, {"name": "代词it/that", "formula": "it同名同物；that同名异物", "use": "指代题", "example": "例：The weather of Beijing is colder than that of Guangzhou.", "wrong": "it指同一个东西，that指同类不同个"}]}]};
/* 考纲套卷 - 严格按2027广西专升本大纲 */
window.STUDY_DATA = window.STUDY_DATA || {};

window.STUDY_DATA.EXAM_PLANS = {
  "math-full": {
    id: "math-full",
    title: "高等数学考纲卷",
    module: "public",
    subject: "高等数学",
    minutes: 120,
    totalScore: 150,
    note: "单选10×5 + 填空4×5 + 解答7×8 + 应用2×12 = 150分",
    sections: [
      { key: "single", type: "single", n: 10, each: 5, label: "单项选择题", target: 50 },
      { key: "fill", type: "fill", n: 4, each: 5, label: "填空题", target: 20 },
      { key: "calc", type: "calc", n: 7, each: 8, label: "解答题", target: 56 },
      { key: "apply", type: "apply", n: 2, each: 12, label: "应用题", target: 24 }
    ]
  },

  "english-full": {
    id: "english-full",
    title: "英语考纲卷",
    module: "public",
    subject: "英语",
    minutes: 120,
    totalScore: 150,
    note: "词汇语法20×2 + 阅读25×2 + 填空5×2 + 英译汉8×3 + 汉译英1×8 + 写作1×18 = 150分",
    sections: [
      { key: "vocab", type: "single", n: 20, each: 2, label: "词汇与语法", target: 40 },
      { key: "read", type: "single", n: 25, each: 2, label: "阅读理解", target: 50 },
      { key: "fill", type: "fill", n: 5, each: 2, label: "填空", target: 10 },
      { key: "trans", type: "translate", n: 8, each: 3, label: "英译汉选择", target: 24 },
      { key: "write1", type: "write", n: 1, each: 8, label: "汉译英", target: 8 },
      { key: "write2", type: "write", n: 1, each: 18, label: "应用文写作", target: 18 }
    ]
  },

  "major-combined": {
    id: "major-combined",
    title: "专业基础综合合卷",
    module: "major",
    minutes: 150,
    totalScore: 300,
    note: "电工100 + C语言100 + 计网100 · 按大纲题型分布",
    bySubject: true,
    sections: [
      {
        key: "ee",
        label: "电工电子技术基础",
        subject: "电工电子技术基础",
        target: 100,
        mix: [
          { type: "single", n: 10, each: 4 },
          { type: "judge", n: 5, each: 3 },
          { type: "fill", n: 10, each: 2 },
          { type: "calc", n: 2, each: 12.5 }
        ]
      },
      {
        key: "c",
        label: "C语言程序设计",
        subject: "C语言程序设计",
        target: 100,
        mix: [
          { type: "single", n: 10, each: 4 },
          { type: "judge", n: 5, each: 3 },
          { type: "fill", n: 10, each: 2 },
          { type: "calc", n: 2, each: 12.5 }
        ]
      },
      {
        key: "net",
        label: "计算机网络基础",
        subject: "计算机网络基础",
        target: 100,
        mix: [
          { type: "single", n: 10, each: 4 },
          { type: "judge", n: 5, each: 3 },
          { type: "fill", n: 10, each: 2 },
          { type: "calc", n: 2, each: 12.5 }
        ]
      }
    ]
  },

  "ee-special": {
    id: "ee-special",
    title: "电工电子专项卷",
    module: "major",
    subject: "电工电子技术基础",
    minutes: 60,
    totalScore: 100,
    note: "按大纲题型：单选10×4 + 判断5×3 + 填空10×2 + 应用2×12.5",
    sections: [
      { key: "single", type: "single", n: 10, each: 4, label: "单选", target: 40 },
      { key: "judge", type: "judge", n: 5, each: 3, label: "判断", target: 15 },
      { key: "fill", type: "fill", n: 10, each: 2, label: "填空", target: 20 },
      { key: "calc", type: "calc", n: 2, each: 12.5, label: "应用", target: 25 }
    ]
  },

  "c-special": {
    id: "c-special",
    title: "C语言专项卷",
    module: "major",
    subject: "C语言程序设计",
    minutes: 60,
    totalScore: 100,
    note: "按大纲题型：单选10×4 + 判断5×3 + 填空10×2 + 应用2×12.5",
    sections: [
      { key: "single", type: "single", n: 10, each: 4, label: "单选", target: 40 },
      { key: "judge", type: "judge", n: 5, each: 3, label: "判断", target: 15 },
      { key: "fill", type: "fill", n: 10, each: 2, label: "填空", target: 20 },
      { key: "calc", type: "calc", n: 2, each: 12.5, label: "应用", target: 25 }
    ]
  },

  "net-special": {
    id: "net-special",
    title: "计网专项卷",
    module: "major",
    subject: "计算机网络基础",
    minutes: 60,
    totalScore: 100,
    note: "按大纲题型：单选10×4 + 判断5×3 + 填空10×2 + 应用2×12.5",
    sections: [
      { key: "single", type: "single", n: 10, each: 4, label: "单选", target: 40 },
      { key: "judge", type: "judge", n: 5, each: 3, label: "判断", target: 15 },
      { key: "fill", type: "fill", n: 10, each: 2, label: "填空", target: 20 },
      { key: "calc", type: "calc", n: 2, each: 12.5, label: "应用", target: 25 }
    ]
  }
};
