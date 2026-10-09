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
