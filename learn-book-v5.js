/* 学习一刻 2027大纲版 - 数学+英语 深度内容 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.LEARN_BOOK = window.STUDY_DATA.LEARN_BOOK || {};

// ============ 高等数学 ============
window.STUDY_DATA.LEARN_BOOK["高等数学"] = [
  {
    chapter: "第1章 函数极限与连续",
    points: [
      {
        id: "math-kp-101", name: "函数三要素", level: "基础", minutes: 8, kp: "函数",
        content: "【一、函数定义】\n设D为非空实数集，若对D中每个x，按对应法则f都有唯一确定的y与之对应，则称y=f(x)，D为定义域。\n\n【二、三要素】\n1. 定义域：x的取值范围\n2. 对应法则：f的规则\n3. 值域：y的取值集合\n两函数相等 ⟺ 定义域和对应法则都相同。\n\n【三、求定义域的限制条件】\n① 分母 ≠ 0\n② 偶次根号内 ≥ 0\n③ 对数真数 > 0\n④ tanx中 x≠π/2+kπ\n\n【四、典型例题】\n求 f(x)=lg|x-1|/√(2x+1) 的定义域。\n解：真数|x-1|>0 → x≠1\n根号内2x+1>0 → x>-1/2\n定义域：(-1/2,1)∪(1,+∞)\n\n【五、函数性质】\n- 奇偶性：f(-x)=f(x)偶；f(-x)=-f(x)奇\n- 单调性：导数>0递增\n- 周期性：f(x+T)=f(x)\n- 有界性：|f(x)|≤M\n\n【易错点】\n1. 对数真数必须严格>0，不是≥0\n2. 定义域是区间，写成(-1/2,1)∪(1,+∞)，不是不等式"
      },
      {
        id: "math-kp-102", name: "两个重要极限", level: "强化", minutes: 10, kp: "极限",
        content: "【重要极限一】\nlim(x→0) sinx/x = 1\n\n推广形式：\nlim(x→0) sin(ax)/x = a\nlim(x→0) x/sin(bx) = 1/b\n\n【重要极限二】\nlim(x→∞) (1+1/x)^x = e\n\n推广形式：\nlim(x→∞) (1+a/x)^x = e^a\nlim(x→0) (1+x)^(1/x) = e\n\n【典型例题】\n求 lim(x→∞) (1+2/x)^x\n解：令a=2，原式=e²\n\n求 lim(x→0) sin3x/x\n解：=3·lim(sin3x/3x)=3·1=3\n\n【等价无穷小代换】\nx→0时：\nsinx ~ x\ntanx ~ x\narcsinx ~ x\ne^x-1 ~ x\nln(1+x) ~ x\n1-cosx ~ x²/2\n\n【典型例题】\nlim(x→0) tan3x/sin5x\n= lim(3x/5x) = 3/5\n\n【易错点】\n1. 等价无穷小只能在乘除中代换，加减中不能代换！\n2. lim(x→∞) sinx/x = 0（不是1！因为x→∞不是x→0）\n3. 重要极限一必须是x→0"
      },
      {
        id: "math-kp-103", name: "洛必达法则", level: "强化", minutes: 10, kp: "洛必达",
        content: "【一、适用条件】\n仅适用于 0/0 型 或 ∞/∞ 型。\n其他类型（∞-∞、0·∞、1^∞等）要先变形。\n\n【二、法则内容】\n若 lim f(x)=0, lim g(x)=0\n且 f,g可导, g'(x)≠0\n则 lim f/g = lim f'/g'\n（分子分母分别求导）\n\n【三、典型例题】\n求 lim(x→0) lncos2x/lncos3x\n判断：x→0时cos2x→1，ln1=0，是0/0型。\n求导：\n分子导：(1/cos2x)·(-2sin2x) = -2tan2x\n分母导：(1/cos3x)·(-3sin3x) = -3tan3x\n= lim(2tan2x)/(3tan3x)\n= (2/3)·lim(tan2x/tan3x)\n= (2/3)·(2x/3x) = 4/9\n\n【四、使用要点】\n1. 每次用前都要检查是否还是0/0或∞/∞\n2. 求导后若仍是未定式可继续用\n3. 能先化简的先化简（等价无穷小、约分）\n\n【易错点】\n1. 不是0/0或∞/∞时不能用洛必达\n2. 是分子分母分别求导，不是整个分式求导"
      },
      {
        id: "math-kp-104", name: "连续性与间断点", level: "基础", minutes: 8, kp: "连续",
        content: "【一、连续定义】\n函数f(x)在x0连续 ⟺\nlim(x→x0) f(x) = f(x0)\n三个条件缺一不可：\n① f(x0)有定义\n② lim(x→x0) f(x)存在\n③ 极限值 = 函数值\n\n【二、间断点分类】\n第一类间断点：左右极限都存在\n- 可去间断点：左极限=右极限≠函数值\n- 跳跃间断点：左极限≠右极限\n\n第二类间断点：至少一个极限不存在\n- 无穷间断点：如y=1/x在x=0\n- 振荡间断点\n\n【三、闭区间上连续函数性质】\n1. 最值定理：必有最大值和最小值\n2. 介值定理：f(a)<C<f(b)则存在ξ使f(ξ)=C\n3. 零点定理：f(a)·f(b)<0则存在ξ使f(ξ)=0\n\n【易错点】\n- 分段函数在分界点必须用左右极限判断\n- 可去间断点可以通过补充定义变为连续"
      }
    ]
  },
  {
    chapter: "第2章 导数与微分",
    points: [
      {
        id: "math-kp-201", name: "导数公式与求导法则", level: "基础", minutes: 10, kp: "导数",
        content: "【一、基本求导公式】\n(c)' = 0\n(x^n)' = n·x^(n-1)\n(sinx)' = cosx\n(cosx)' = -sinx\n(tanx)' = sec²x\n(e^x)' = e^x\n(a^x)' = a^x·lna\n(lnx)' = 1/x\n\n【二、四则运算法则】\n(u±v)' = u'±v'\n(uv)' = u'v + uv'\n(u/v)' = (u'v - uv')/v²\n\n【三、复合函数求导（链式法则）】\ny=f(u), u=g(x)\ny' = f'(u)·g'(x)\n\n【典型例题】\ny=sin(3x)，求y'\n解：令u=3x\ny' = cosu·3 = 3cos(3x)\n\ny=e^(2x²)，求y'\n= e^(2x²)·4x = 4x·e^(2x²)\n\n【四、微分】\ndy = f'(x)dx\n例：y=x³，则dy = 3x²dx\n（注意不要漏掉dx！）\n\n【五、可导与连续关系】\n可导 ⟹ 连续\n连续 ⇏ 可导（如y=|x|在x=0连续但不可导）\n\n【易错点】\n1. cosx导数是-sinx，别漏负号\n2. 复合函数一定要乘内层导数\n3. 微分结果必须带dx"
      },
      {
        id: "math-kp-202", name: "导数应用", level: "强化", minutes: 10, kp: "导数应用",
        content: "【一、单调性判定】\nf'(x)>0 → f(x)单调递增\nf'(x)<0 → f(x)单调递减\n\n【二、极值】\n必要条件：f'(x0)=0（驻点）或f'(x0)不存在\n第一充分条件：f'在x0左右变号\n- 左正右负 → 极大值\n- 左负右正 → 极小值\n\n【三、最值】\n闭区间[a,b]上连续函数：\n最值可能在驻点、不可导点、端点取得\n比较这些点的函数值即可。\n\n【四、凹凸性与拐点】\nf''(x)>0 → 凹（开口向上）\nf''(x)<0 → 凸（开口向下）\n拐点：f''变号的点\n\n【五、切线方程】\n曲线y=f(x)在(x0,y0)处切线：\ny - y0 = f'(x0)(x - x0)\n\n【典型例题】\n求f(x)=x³-3x的单调区间和极值\nf'(x)=3x²-3=3(x-1)(x+1)\n驻点x=±1\nx<-1: f'>0 增\n-1<x<1: f'<0 减\nx>1: f'>0 增\n极大值f(-1)=2，极小值f(1)=-2"
      }
    ]
  },
  {
    chapter: "第3章 一元函数积分学",
    points: [
      {
        id: "math-kp-301", name: "不定积分", level: "基础", minutes: 10, kp: "积分",
        content: "【一、基本积分公式】\n∫x^n dx = x^(n+1)/(n+1) + C  (n≠-1)\n∫1/x dx = ln|x| + C\n∫e^x dx = e^x + C\n∫a^x dx = a^x/lna + C\n∫sinx dx = -cosx + C\n∫cosx dx = sinx + C\n∫sec²x dx = tanx + C\n\n【二、换元积分法】\n第一类换元（凑微分）：\n∫f(ax+b)dx = (1/a)F(ax+b)+C\n\n例：∫(2x+1)^5 dx\n= (1/2)·(2x+1)^6/6 + C\n\n【三、分部积分法】\n∫u dv = uv - ∫v du\n选择顺序：反→对→幂→三→指\n（谁在前谁当u）\n\n例：∫x·e^x dx\n令u=x, dv=e^x dx\n= x·e^x - ∫e^x dx = x·e^x - e^x + C\n\n【易错点】\n1. 不定积分结果必须加C！\n2. ∫1/x=ln|x|，别忘了绝对值\n3. 不定积分结果可以求导验证"
      },
      {
        id: "math-kp-302", name: "定积分", level: "强化", minutes: 10, kp: "定积分",
        content: "【一、牛顿-莱布尼茨公式】\n∫[a,b] f(x)dx = F(b) - F(a)\n其中F'(x)=f(x)\n\n【二、变上限积分求导】\nΦ(x)=∫[a,x] f(t)dt\nΦ'(x) = f(x)\n推广：∫[a,g(x)] f(t)dt 导数 = f(g(x))·g'(x)\n\n【三、定积分性质】\n∫[a,b] f(x)dx = -∫[b,a] f(x)dx\n∫[a,b] 1 dx = b-a\n奇偶函数：\n奇函数在对称区间[-a,a]积分=0\n偶函数=2∫[0,a]f(x)dx\n\n【四、几何应用】\n曲线y=f(x)与x轴在[a,b]间围成的面积\n= ∫[a,b] |f(x)|dx\n\n【典型例题】\n∫[0,1] x² dx = [x³/3][0,1] = 1/3\n\n【易错点】\n1. 定积分结果是常数，不带C\n2. 上下限代入F(b)-F(a)，注意顺序\n3. 面积要加绝对值"
      }
    ]
  },
  {
    chapter: "第4章 常微分方程",
    points: [
      {
        id: "math-kp-401", name: "一阶微分方程", level: "强化", minutes: 10, kp: "微分方程",
        content: "【一、基本概念】\n微分方程：含未知函数导数的方程\n阶：最高阶导数的阶数\n通解：含任意常数的解\n特解：确定了常数的解\n\n【二、可分离变量方程】\ndy/dx = f(x)·g(y)\n分离：dy/g(y) = f(x)dx\n两边积分即可。\n\n例：dy/dx = 2xy\ndy/y = 2x dx\nln|y| = x² + C\ny = Ce^(x²)\n\n【三、一阶线性方程】\ny' + P(x)y = Q(x)\n通解公式：\ny = e^(-∫Pdx) [ ∫Q·e^(∫Pdx) dx + C ]\n\n【四、二阶常系数齐次方程】\ny'' + py' + qy = 0\n特征方程：r² + pr + q = 0\n两根r1,r2：\n- 不等实根：y = C1·e^(r1x) + C2·e^(r2x)\n- 相等实根：y = (C1+C2x)e^(rx)\n- 共轭复根：y = e^(αx)(C1cosβx+C2sinβx)\n\n【易错点】\n1. 可分离变量要移项彻底\n2. 通解公式中的积分不用加C（C在外面）"
      }
    ]
  },
  {
    chapter: "第5章 应用题",
    points: [
      {
        id: "math-kp-501", name: "利润最值问题", level: "冲刺", minutes: 12, kp: "应用题",
        content: "【解题步骤】\n1. 设变量，建立目标函数\n2. 写出函数关系式\n3. 求导找驻点\n4. 判断最大值（二阶导或端点）\n5. 回答实际问题\n\n【典型例题】\n某厂每天生产A轮胎100x个，B轮胎100y个，\ny=(40-10x)/(5-x), 0≤x≤4\nA利润是B的2倍，求总利润最大时产量。\n\n解：设每个B利润为a，A为2a\n总利润L = 100x·2a + 100y·a\n= a(200x + 100(40-10x)/(5-x))\n令L'(x)=0，解得x=5-√5≈2.76\nA产量≈276个，B产量≈553个\n\n【关键】\n- 把实际问题转化为求函数最大值\n- 注意定义域范围\n- 答案要符合实际意义（取整）"
      }
    ]
  }
];

// ============ 英语 ============
window.STUDY_DATA.LEARN_BOOK["英语"] = [
  {
    chapter: "第1章 词汇与语法",
    points: [
      {
        id: "en-kp-101", name: "固定搭配与短语", level: "基础", minutes: 8, kp: "词汇",
        content: "【高频动词短语】\nbreak up 分手/破裂/解散\nbreak down 出故障/崩溃\nbreak out 爆发\nset up 建立/设立/搭建\nset off 出发/引爆\nturn up 出现/调大音量\nturn down 拒绝/调小\nget up 起床\nget over 克服\nlook up 查阅\nlook forward to 期待（+doing）\nput off 推迟（+doing）\ngive up 放弃（+doing）\n\n【高频介词短语】\nin time 及时\non time 准时\nin the end 最后\nat the end of 在...末尾\nby the way 顺便问一下\non the way to 在去...的路上\n\n【例题】\nThe company will ___ a new office in the city.\nA. break up  B. set up  C. turn up  D. get up\n答案：B（建立新办公室）\n\n【易错点】\n- look forward to 后面加doing，不是do\n- be used to doing 习惯于\n- used to do 过去常常"
      },
      {
        id: "en-kp-102", name: "时态语态", level: "强化", minutes: 10, kp: "语法",
        content: "【一、常用时态】\n1. 一般现在时：经常性动作\n   He goes to school every day.\n   第三人称单数动词加s/es\n\n2. 一般过去时：过去发生\n   I visited my grandma last week.\n\n3. 现在进行时：be+doing\n   They are watching TV now.\n\n4. 现在完成时：have/has+done\n   I have lived here for 5 years.\n   标志词：already, yet, since, for, ever, never\n\n5. 过去进行时：was/were+doing\n   At 8 pm yesterday, I was reading.\n\n【二、被动语态】\nbe + 过去分词\nThe bridge was built in 1990.\nEnglish is spoken in many countries.\n\n【三、时间标志词】\nyesterday → 过去时\nsince 2020 → 现在完成时\nfor 3 years → 现在完成时\nlook! / now → 进行时\nevery day → 一般现在时\n\n【例题】\nI ___ this book for three days.\nA. read  B. have read  C. am reading  D. will read\n答案：B（for three days用现在完成时）"
      },
      {
        id: "en-kp-103", name: "从句", level: "强化", minutes: 10, kp: "从句",
        content: "【一、宾语从句】\n引导词：that/if/whether/what/when/where\n语序：陈述语序（主语+谓语）\n\n例：\nI don't know where he lives.（不是where does he live）\nCan you tell me what time it is?\n\n【二、定语从句】\n先行词是人：who/that/whom\n先行词是物：which/that\n所属关系：whose\n\n例：\nThe man who is talking is my teacher.\nThe book which/that you bought is interesting.\n\n【三、状语从句】\n时间：when/while/before/after/until\n原因：because/since/as\n条件：if/unless\n让步：though/although\n结果：so...that/such...that\n目的：so that\n\n【例题】\nI don't know ___.\nA. where does he live  B. where he lives\nC. where he live  D. he lives where\n答案：B（宾语从句用陈述语序）"
      }
    ]
  },
  {
    chapter: "第2章 阅读理解",
    points: [
      {
        id: "en-kp-201", name: "阅读技巧与题型", level: "强化", minutes: 10, kp: "阅读",
        content: "【一、五大题型】\n1. 主旨大意题：main idea / best title\n   解题：看首尾段，找高频词\n\n2. 细节理解题：according to the passage\n   解题：题干关键词回原文定位\n\n3. 推理判断题：infer / imply / suggest\n   解题：基于原文合理推断，不选原文直接说的\n\n4. 词义猜测题：the word \"...\" means\n   解题：看上下文，找同义或反义线索\n\n5. 观点态度题：author's attitude\n   解题：注意褒贬形容词\n\n【二、应用文技巧】\n广告、通知、招聘：先看题干，再回原文找信息\n数字、大写字母、时间地点是定位法宝\n\n【三、常见干扰项】\n- 偷换概念\n- 无中生有\n- 扩大范围\n- 正反混淆\n\n【做题顺序建议】\n先看题目→带着问题读文章→定位找答案"
      }
    ]
  },
  {
    chapter: "第3章 翻译",
    points: [
      {
        id: "en-kp-301", name: "翻译技巧", level: "强化", minutes: 8, kp: "翻译",
        content: "【一、英译汉技巧】\n1. 找句子主干（主谓宾）\n2. 先译主干，再补修饰\n3. 长句拆成短句，符合中文习惯\n4. 被动句常转主动\n\n例：\nThe book written by Lu Xun is popular.\n鲁迅写的这本书很受欢迎。\n\n【二、汉译英技巧】\n1. 先搭骨架（主语+谓语+宾语）\n2. 再添修饰语\n3. 注意时态、单复数、冠词\n4. 用常用词，别用生僻词\n\n【三、常用表达】\n- 越来越多：more and more\n- 不仅...而且：not only...but also\n- 例如：such as / for example\n- 因此：therefore / so / thus\n- 随着：with + 名词短语\n\n【汉译英例题】\n中国结是一种传统的中国手工艺品，通常由一根红绳编织而成。\n译文：The Chinese knot is a traditional Chinese handicraft, usually made from a single red rope."
      }
    ]
  },
  {
    chapter: "第4章 写作",
    points: [
      {
        id: "en-kp-401", name: "应用文写作模板", level: "强化", minutes: 10, kp: "写作",
        content: "【通知/邮件万能结构】\n\nDear all,\n（称呼）\n\nI am writing to inform you that a lecture will be held. \n（开头句）\n\nThe lecture is about \"How to Improve English Writing Skills\". \nIt will take place in the school hall at 2:00 pm on Friday.\n（时间地点内容）\n\nEveryone is welcome to attend. Please be on time.\n（结尾邀请）\n\nPlease contact us if you have any questions.\n\nYours sincerely,\nLi Ming\n（落款）\n\n【常用开头】\nI am writing to... 我写信是为了...\nI would like to... 我想...\nIt is announced that... 据通知...\n\n【常用结尾】\nWe are looking forward to your participation.\nYour early reply will be appreciated.\n\n【注意事项】\n1. 不少于80词\n2. 要点齐全（时间、地点、活动）\n3. 语句通顺，时态一致\n4. 格式正确（称呼+落款）"
      }
    ]
  }
];

console.log("数学英语深度内容加载完成！");
