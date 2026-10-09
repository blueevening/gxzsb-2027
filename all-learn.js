/* 学习一刻 · 分科知识点 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.LEARN_BOOK = {
  高等数学: [
    {
      chapter: "极限与连续",
      points: [
        {
          id: "L-lim-1",
          name: "函数定义域",
          level: "基础",
          minutes: 5,
          define: "使函数有意义的 x 的集合。",
          why: "考纲要求会求定义域；选择题高频。",
          core: [
            { k: "分式", v: "分母 ≠ 0" },
            { k: "偶次根号", v: "被开方数 ≥ 0" },
            { k: "对数", v: "真数 > 0" },
            { k: "实际问题", v: "按题意限非负/整数" },
          ],
          steps: ["列出所有限制条件", "解不等式组", "写成区间或集合"],
          example: {
            stem: "求 f(x)=frac{1}{x−2}+√x 的定义域。",
            analysis: "x−2≠0 ⇒ x≠2；√x ⇒ x≥0。定义域 [0,2)∪(2,+∞)。",
          },
          mistakes: ["只写一半条件", "漏掉开闭区间括号"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-2",
          name: "极限的定义",
          level: "基础",
          minutes: 6,
          define: "当 x 无限接近某值时，函数值无限接近的常数。",
          why: "后续所有极限计算的根基；概念题必考。",
          core: [
            { k: "记号", v: "lim(x→a) f(x) = A" },
            { k: "含义", v: "x→a 时 f(x)→A" },
          ],
          steps: ["看 x 的趋向", "看 f(x) 的趋势", "若存在唯一常数即为极限"],
          example: {
            stem: "lim(x→2) (x+1) =？",
            analysis: "直接代入：2+1=3。多项式在定义点连续，可代入。",
          },
          mistakes: ["把 x→a 与 x=a 混为一谈", "忽略左右是否一致"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-3",
          name: "左极限与右极限",
          level: "基础",
          minutes: 6,
          define: "左极限 x→a⁻，右极限 x→a⁺；左右相等才存在。",
          why: "分段函数、绝对值题必用。",
          core: [
            { k: "存在条件", v: "lim⁻ = lim⁺" },
            { k: "不等", v: "极限不存在" },
          ],
          steps: ["分别算左右", "比较是否相等", "下结论"],
          example: {
            stem: "f(x)=|x|/x 在 x→0 时极限？",
            analysis: "x→0⁺ 得 1，x→0⁻ 得 −1，不相等，极限不存在。",
          },
          mistakes: ["只算一边", "写成 0"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-4",
          name: "无穷小与无穷大",
          level: "基础",
          minutes: 5,
          define: "极限为 0 的量是无穷小；绝对值无限增大是无穷大。",
          why: "判型与等价替换的前提。",
          core: [
            { k: "无穷小", v: "lim = 0" },
            { k: "关系", v: "无穷小的倒数是无穷大（非0）" },
          ],
          steps: ["先算极限", "判断趋向 0 还是 ∞"],
          example: {
            stem: "x→0 时，x² 是无穷小吗？",
            analysis: "是，因为 lim x²=0。",
          },
          mistakes: ["把很小的常数当无穷小"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-5",
          name: "极限四则运算",
          level: "强化",
          minutes: 7,
          define: "和差积商的极限等于极限的和差积商（分母极限非 0）。",
          why: "拆分复杂极限的基础工具。",
          core: [
            { k: "条件", v: "各分极限存在" },
            { k: "商", v: "分母极限 ≠ 0" },
          ],
          steps: ["拆成简单极限", "分别求", "再合并"],
          example: {
            stem: "lim(x→1)(2x+3) =？",
            analysis: "=2·1+3=5。",
          },
          mistakes: ["分母为 0 仍除", "拆成不存在的项"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-6",
          name: "等价无穷小",
          level: "强化",
          minutes: 8,
          define: "x→0 时，sinx~x，1−cosx~frac{x²}{2}，eˣ−1~x，tanx~x。",
          why: "0/0 计算题最常用捷径。",
          core: [
            { k: "只能用在", v: "乘除因子" },
            { k: "加减中", v: "先通分或泰勒" },
          ],
          steps: ["判 0/0", "找可替换因子", "替换后约分"],
          example: {
            stem: "lim(x→0) sin5x/x",
            analysis: "sin5x~5x，结果 5。",
          },
          mistakes: ["加减中乱换", "1−cosx 当成 x"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-7",
          name: "两个重要极限",
          level: "强化",
          minutes: 8,
          define: "lim sinx/x=1；lim(1+1/x)^x=e。",
          why: "选择填空必背。",
          core: [
            { k: "三角型", v: "lim(x→0) sin(ax)/x = a" },
            { k: "e 型", v: "(1+a/x)^x → e^a" },
          ],
          steps: ["匹配结构", "凑成标准形式", "写出结果"],
          example: {
            stem: "lim(x→∞)(1+2/x)^x",
            analysis: "=e²。",
          },
          mistakes: ["指数上的 2 没进 e"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-8",
          name: "洛必达法则",
          level: "强化",
          minutes: 8,
          define: "0/0 或 ∞/∞ 时，极限等于分子分母导数之比的极限。",
          why: "计算大题备用法。",
          core: [
            { k: "前提", v: "先判型" },
            { k: "使用", v: "对分子分母分别求导" },
          ],
          steps: ["代入判型", "求导", "再算极限"],
          example: {
            stem: "lim(x→0) (eˣ−1)/x",
            analysis: "0/0 → eˣ/1 → 1。",
          },
          mistakes: ["分子分母整体求导", "非 0/0 乱用"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-9",
          name: "夹逼定理",
          level: "冲刺",
          minutes: 8,
          define: "两函数极限都是 A 且夹在中间，则中间函数极限也是 A。",
          why: "n 项和、绝对值型极限。",
          core: [
            { k: "放缩", v: "找到可算极限的上下界" },
            { k: "结论", v: "上下极限相等" },
          ],
          steps: ["放缩", "求上下极限", "写出答案"],
          example: {
            stem: "lim(n→∞) (1/n²+…+n²/n²)? 简化例：|sinx|/x 夹逼",
            analysis: "典型题用 −1≤sinx≤1 放缩。",
          },
          mistakes: ["放缩方向错误"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-10",
          name: "极限存在判断",
          level: "冲刺",
          minutes: 7,
          define: "左右极限相等 ⇔ 极限存在（有限）。",
          why: "概念选择题。",
          core: [{ k: "等价说法", v: "lim⁻ = lim⁺ = 有限值" }],
          steps: ["算左右", "比大小"],
          example: {
            stem: "x→0 时 1/x 极限存在吗？",
            analysis: "左右为 ±∞，不相等，不存在（无穷）。",
          },
          mistakes: ["把 ∞ 当存在"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-11",
          name: "连续性",
          level: "冲刺",
          minutes: 7,
          define: "lim f(x)=f(a) 则 f 在 a 连续。",
          why: "间断点题、分段函数题。",
          core: [
            { k: "三条件", v: "有定义、极限存在、相等" },
            { k: "初等函数", v: "定义区间内连续" },
          ],
          steps: ["查定义", "算极限", "比是否相等"],
          example: {
            stem: "f=frac{x²−4}{x−2} 在 x=2 连续吗？",
            analysis: "无定义，不连续；补 f(2)=4 后连续。",
          },
          mistakes: ["忽略无定义点"],
          kp: "极限与连续",
        },
        {
          id: "L-lim-12",
          name: "间断点分类",
          level: "冲刺",
          minutes: 8,
          define: "可去：极限存在；跳跃：左右不等；无穷：趋于 ∞。",
          why: "填空/选择常考分类。",
          core: [
            { k: "可去", v: "lim 存在" },
            { k: "跳跃", v: "左右极限都有限但不等" },
            { k: "无穷", v: "lim=∞" },
          ],
          steps: ["找无定义/突变点", "算左右极限", "归类"],
          example: {
            stem: "f(x)=1/x 在 x=0？",
            analysis: "无穷间断点。",
          },
          mistakes: ["可去与跳跃混"],
          kp: "极限与连续",
        },
      ],
    },
    {
      chapter: "导数与微分",
      points: [
        {
          id: "L-der-1",
          name: "导数的定义",
          level: "基础",
          minutes: 7,
          define: "f′(x)=lim(h→0)[f(x+h)−f(x)]/h。",
          why: "概念题与分段函数求导。",
          core: [{ k: "几何", v: "切线斜率" }],
          steps: ["写出增量比", "取极限"],
          example: {
            stem: "f(x)=x² 在 x=1 的导数？",
            analysis: "用定义或公式 2x，得 2。",
          },
          mistakes: ["漏极限"],
          kp: "导数与微分",
        },
        {
          id: "L-der-2",
          name: "基本求导公式",
          level: "基础",
          minutes: 8,
          define: "幂、指数、对数、三角的求导公式表。",
          why: "所有求导题的出发点。",
          core: [
            { k: "幂", v: "(xⁿ)′=nxⁿ⁻¹" },
            { k: "指数", v: "(eˣ)′=eˣ" },
            { k: "对数", v: "(lnx)′=frac{1}{x}" },
            { k: "三角", v: "(sinx)′=cosx，(cosx)′=−sinx" },
          ],
          steps: ["识别函数类型", "代公式"],
          example: {
            stem: "y=x³+lnx，求 y′。",
            analysis: "3x²+frac{1}{x}。",
          },
          mistakes: ["cosx 求导丢负号"],
          kp: "导数与微分",
        },
        {
          id: "L-der-3",
          name: "乘积与商法则",
          level: "强化",
          minutes: 8,
          define: "(uv)′=u′v+uv′；(u/v)′=frac{u′v−uv′}{v²}。",
          why: "综合求导题必用。",
          core: [{ k: "口诀", v: "前导后不导 + 后导前不导" }],
          steps: ["分清 u、v", "分别求导", "代入合并"],
          example: {
            stem: "y=x eˣ，求 y′。",
            analysis: "eˣ+x eˣ=eˣ(1+x)。",
          },
          mistakes: ["写成 u′v′"],
          kp: "导数与微分",
        },
        {
          id: "L-der-4",
          name: "复合函数（链式）",
          level: "强化",
          minutes: 8,
          define: "[f(g(x))]′=f′(g)·g′。",
          why: "sin(2x)、e^{3x}、(x²+1)ⁿ 等。",
          core: [{ k: "口诀", v: "外层导 × 内层导" }],
          steps: ["找内层 g", "外层求导", "乘 g′"],
          example: {
            stem: "y=sin(2x)，求 y′。",
            analysis: "cos(2x)·2=2cos2x。",
          },
          mistakes: ["漏内层系数"],
          kp: "导数与微分",
        },
        {
          id: "L-der-5",
          name: "微分",
          level: "强化",
          minutes: 6,
          define: "dy=f′(x)dx。",
          why: "填空常考。",
          core: [{ k: "公式", v: "dy=y′dx" }],
          steps: ["先求 y′", "乘上 dx"],
          example: {
            stem: "y=x²，求 dy|_{x=1}。",
            analysis: "y′=2x，dy=2dx。",
          },
          mistakes: ["漏 dx"],
          kp: "导数与微分",
        },
      ],
    },
    {
      chapter: "不定积分",
      points: [
        {
          id: "L-int-1",
          name: "原函数与不定积分",
          level: "基础",
          minutes: 6,
          define: "F′(x)=f(x)，则 ∫f dx=F+C。",
          why: "积分概念题。",
          core: [{ k: "关键", v: "结果必须 +C" }],
          steps: ["找一个原函数", "写 +C"],
          example: {
            stem: "∫2x dx=？",
            analysis: "x²+C。",
          },
          mistakes: ["漏 C"],
          kp: "不定积分",
        },
        {
          id: "L-int-2",
          name: "凑微分",
          level: "强化",
          minutes: 8,
          define: "∫f(g)g′dx=∫f(u)du。",
          why: "计算大题主力。",
          core: [{ k: "关键", v: "看到 g 与 g′ 同时出现" }],
          steps: ["设 u=g(x)", "换 du", "积分回代"],
          example: {
            stem: "∫2x e^{x²}dx",
            analysis: "u=x²，得 e^{x²}+C。",
          },
          mistakes: ["漏 du 系数"],
          kp: "不定积分",
        },
        {
          id: "L-int-3",
          name: "分部积分",
          level: "强化",
          minutes: 8,
          define: "∫udv=uv−∫vdu。",
          why: "多项式×指数/三角、含 ln。",
          core: [{ k: "选 u", v: "反对幂指三" }],
          steps: ["选 u、dv", "求 du、v", "代入"],
          example: {
            stem: "∫x eˣdx",
            analysis: "x eˣ−eˣ+C=eˣ(x−1)+C。",
          },
          mistakes: ["uv 符号错"],
          kp: "不定积分",
        },
      ],
    },
    {
      chapter: "定积分",
      points: [
        {
          id: "L-def-1",
          name: "牛顿-莱布尼茨公式",
          level: "强化",
          minutes: 7,
          define: "∫ₐᵇf=F(b)−F(a)。",
          why: "定积分计算核心。",
          core: [{ k: "步骤", v: "先求 F，再代限相减" }],
          steps: ["求原函数", "代上限减下限"],
          example: {
            stem: "∫₀²x²dx",
            analysis: "frac{8}{3}。",
          },
          mistakes: ["忘减 F(a)"],
          kp: "定积分",
        },
        {
          id: "L-def-2",
          name: "变限积分求导",
          level: "强化",
          minutes: 7,
          define: "d/dx∫ₐˣf(t)dt=f(x)。",
          why: "选择填空高频。",
          core: [{ k: "口诀", v: "把 t 换成 x" }],
          steps: ["写清上下限", "代入被积函数"],
          example: {
            stem: "F=∫₀ˣsin t dt，求 F′。",
            analysis: "sin x。",
          },
          mistakes: ["被积含 x 未处理"],
          kp: "定积分",
        },
      ],
    },
    {
      chapter: "微分方程",
      points: [
        {
          id: "L-ode-1",
          name: "可分离变量",
          level: "强化",
          minutes: 8,
          define: "dy/dx=g(x)h(y) 可分开积分。",
          why: "计算题常见。",
          core: [{ k: "做法", v: "dy/h(y)=g(x)dx 两边积分" }],
          steps: ["分离", "积分", "写通解含 C"],
          example: {
            stem: "y′=2xy",
            analysis: "y=Ce^{x²}。",
          },
          mistakes: ["漏 C"],
          kp: "微分方程",
        },
        {
          id: "L-ode-2",
          name: "二阶常系数齐次",
          level: "冲刺",
          minutes: 9,
          define: "y″+py′+qy=0 用特征方程 r²+pr+q=0。",
          why: "冲刺大题。",
          core: [
            { k: "两实根", v: "y=C₁e^{r₁x}+C₂e^{r₂x}" },
            { k: "重根", v: "y=(C₁+C₂x)e^{rx}" },
            { k: "复根", v: "e^{αx}(C₁cosβx+C₂sinβx)" },
          ],
          steps: ["写特征方程", "解根", "套通解"],
          example: {
            stem: "y″−y′−6y=0",
            analysis: "r=3,−2，y=C₁e^{3x}+C₂e^{−2x}。",
          },
          mistakes: ["特征根算错"],
          kp: "微分方程",
        },
      ],
    },
  ],

  英语: [
    {
      chapter: "时态与语态",
      points: [
        {
          id: "E-ten-1",
          name: "一般现在时",
          level: "基础",
          minutes: 5,
          define: "表示经常、习惯或客观事实。",
          why: "最基础时态，作文也常用。",
          core: [
            { k: "形式", v: "do / does" },
            { k: "标志词", v: "every day, usually, often" },
          ],
          steps: ["看时间状语", "主语三单加 s"],
          example: {
            stem: "He ____ (go) to school every day.",
            analysis: "goes。every day 用一般现在；主语 He 三单。",
          },
          mistakes: ["三单不加 s"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-2",
          name: "一般过去时",
          level: "基础",
          minutes: 5,
          define: "过去某个时间发生的动作。",
          why: "叙事阅读与作文。",
          core: [
            { k: "形式", v: "did / was-were" },
            { k: "标志", v: "yesterday, last week, ago" },
          ],
          steps: ["找过去时间", "动词用过去式"],
          example: {
            stem: "I ____ (see) him yesterday.",
            analysis: "saw。",
          },
          mistakes: ["用现在时"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-3",
          name: "现在进行时",
          level: "基础",
          minutes: 5,
          define: "此刻正在发生的动作。",
          why: "听力阅读高频。",
          core: [{ k: "形式", v: "am/is/are + doing" }],
          steps: ["找 now/look/listen", "be + 动词 ing"],
          example: {
            stem: "Look! The children ____ (play).",
            analysis: "are playing。",
          },
          mistakes: ["漏 be"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-4",
          name: "现在完成时",
          level: "强化",
          minutes: 7,
          define: "过去发生对现在有影响，或从过去持续到现在。",
          why: "考试最爱考的时态。",
          core: [
            { k: "形式", v: "have/has + done" },
            { k: "标志", v: "for, since, already, yet" },
          ],
          steps: ["认标志词", "选 have/has", "动词过去分词"],
          example: {
            stem: "He ____ (live) here for 3 years.",
            analysis: "has lived。for + 完成时。",
          },
          mistakes: ["for/since 用过去时"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-5",
          name: "过去完成时",
          level: "强化",
          minutes: 7,
          define: "过去某一时间之前已完成的动作（过去的过去）。",
          why: "记叙文与从句中常见。",
          core: [{ k: "形式", v: "had + done" }],
          steps: ["找两个过去时间", "更早的用 had done"],
          example: {
            stem: "When I arrived, the meeting ____ (begin).",
            analysis: "had begun。",
          },
          mistakes: ["两个都用一般过去"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-6",
          name: "被动语态",
          level: "强化",
          minutes: 7,
          define: "主语是动作承受者：be + 过去分词。",
          why: "科技说明文高频。",
          core: [{ k: "结构", v: "be + done (+by…)" }],
          steps: ["判断主被动", "按时态变 be", "加过去分词"],
          example: {
            stem: "The bridge ____ (build) next year.",
            analysis: "will be built。",
          },
          mistakes: ["漏 be"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-7",
          name: "时态综合辨析",
          level: "冲刺",
          minutes: 8,
          define: "根据时间状语与语境选时态。",
          why: "语法单选 20 分主力。",
          core: [
            { k: "完成 vs 过去", v: "for/since vs yesterday" },
            { k: "进行 vs 一般", v: "now vs every day" },
          ],
          steps: ["圈时间状语", "判断是否延续", "选结构"],
          example: {
            stem: "I ____ my keys. I can't find them.",
            analysis: "have lost（对现在影响）。",
          },
          mistakes: ["只看中文不管时态标志"],
          kp: "时态与语态",
        },
        {
          id: "E-ten-8",
          name: "主动表被动",
          level: "冲刺",
          minutes: 6,
          define: "有些动词主动形式可表被动（read well 等）。",
          why: "易混陷阱题。",
          core: [{ k: "常见", v: "want, need, be worth + doing" }],
          steps: ["看主语是否承受动作", "是否已有固定主动表被动"],
          example: {
            stem: "The book is worth ____.",
            analysis: "reading（不用 being read）。",
          },
          mistakes: ["全部改成被动"],
          kp: "时态与语态",
        },
      ],
    },
    {
      chapter: "非谓语动词",
      points: [
        {
          id: "E-non-1",
          name: "不定式 to do",
          level: "基础",
          minutes: 6,
          define: "表目的、将来或作主宾补。",
          why: "单选必考。",
          core: [
            { k: "常见动词", v: "want/decide/hope + to do" },
            { k: "句型", v: "It is adj. to do" },
          ],
          steps: ["看前接词", "判断是否表将来/目的"],
          example: {
            stem: "I want ____ (go).",
            analysis: "to go。",
          },
          mistakes: ["want doing"],
          kp: "非谓语动词",
        },
        {
          id: "E-non-2",
          name: "动名词 doing",
          level: "基础",
          minutes: 6,
          define: "作主语、宾语，或介词后。",
          why: "enjoy/finish/介词+doing。",
          core: [{ k: "口诀", v: "介词后跟 doing" }],
          steps: ["看是否介词后", "look forward to 等 to 是介词"],
          example: {
            stem: "I look forward to ____ (hear) from you.",
            analysis: "hearing。",
          },
          mistakes: ["to 一律当不定式"],
          kp: "非谓语动词",
        },
        {
          id: "E-non-3",
          name: "现在分词与过去分词",
          level: "强化",
          minutes: 7,
          define: "doing 主动/进行；done 被动/完成。",
          why: "定语、状语题。",
          core: [{ k: "判断", v: "与逻辑主语是主动还是被动" }],
          steps: ["找逻辑主语", "判断主被动", "选 doing/done"],
          example: {
            stem: "The man ____ (stand) at the door is my teacher.",
            analysis: "standing（主动）。",
          },
          mistakes: ["主动被动混"],
          kp: "非谓语动词",
        },
      ],
    },
  ],

  电工电子技术基础: [
    {
      chapter: "电路分析",
      points: [
        {
          id: "EE-cir-1",
          name: "欧姆定律",
          level: "基础",
          minutes: 6,
          define: "U=IR，线性电阻两端电压与电流成正比。",
          why: "一切电路计算的起点。",
          core: [
            { k: "公式", v: "U=IR，I=frac{U}{R}" },
            { k: "单位", v: "V, A, Ω" },
          ],
          steps: ["画出电路标已知", "选用公式", "代入数字（带单位）"],
          example: {
            stem: "R=10Ω，I=0.5A，求 U。",
            analysis: "U=IR=5V。",
          },
          mistakes: ["单位漏写", "非线性也用欧姆"],
          kp: "电路基本概念",
        },
        {
          id: "EE-cir-2",
          name: "基尔霍夫定律",
          level: "强化",
          minutes: 8,
          define: "KCL：ΣI=0；KVL：ΣU=0。",
          why: "复杂电路计算必考。",
          core: [
            { k: "KCL", v: "节点流入=流出" },
            { k: "KVL", v: "回路升=降" },
          ],
          steps: ["标方向", "列方程", "解方程组"],
          example: {
            stem: "节点流入 2A、3A，流出 I=？",
            analysis: "I=5A。",
          },
          mistakes: ["方向符号错"],
          kp: "直流电路分析",
        },
        {
          id: "EE-cir-3",
          name: "串并联等效",
          level: "强化",
          minutes: 7,
          define: "串 R=R1+R2；并 frac{1}{R}=frac{1}{R1}+frac{1}{R2}。",
          why: "等效电阻与分压分流。",
          core: [{ k: "并联特例", v: "R=R1R2/(R1+R2)" }],
          steps: ["识别串/并", "算等效", "再用欧姆"],
          example: {
            stem: "4Ω 与 12Ω 并联？",
            analysis: "3Ω。",
          },
          mistakes: ["并联当加"],
          kp: "直流电路分析",
        },
      ],
    },
    {
      chapter: "运算放大器",
      points: [
        {
          id: "EE-op-1",
          name: "反相放大",
          level: "强化",
          minutes: 7,
          define: "uo=−frac{Rf}{R1}·ui。",
          why: "电工计算高频。",
          core: [{ k: "要点", v: "输出与输入反相，有负号" }],
          steps: ["认接法", "算 A", "算 uo"],
          example: {
            stem: "R1=10k，Rf=50k，ui=0.2V。",
            analysis: "uo=−1V。",
          },
          mistakes: ["漏负号"],
          kp: "运算放大器",
        },
      ],
    },
  ],

  C语言程序设计: [
    {
      chapter: "指针",
      points: [
        {
          id: "C-ptr-1",
          name: "指针与地址",
          level: "基础",
          minutes: 7,
          define: "指针保存地址；*p 取该地址的值。",
          why: "C 语言难点、必考。",
          core: [
            { k: "&a", v: "取 a 的地址" },
            { k: "*p", v: "取 p 指向的值" },
          ],
          steps: ["画出变量与地址", "跟踪 p 指向谁", "读 *p"],
          example: {
            stem: "int a=5; int *p=&a; *p=?",
            analysis: "5。p 指向 a，*p 就是 a 的值。",
          },
          mistakes: ["*p 与 p 混", "未初始化指针"],
          kp: "指针与数组",
        },
        {
          id: "C-ptr-2",
          name: "指针与数组",
          level: "强化",
          minutes: 8,
          define: "a[i] ≡ *(a+i)；p+1 下一元素。",
          why: "程序阅读题主力。",
          core: [{ k: "注意", v: "p+1 是加一个元素不是 1 字节" }],
          steps: ["写地址序列", "算 *(p+k)", "对照 a[k]"],
          example: {
            stem: "a[5]={2,4,6,8,10}; p=a; *(p+3)=?",
            analysis: "8。",
          },
          mistakes: ["当字节偏移"],
          kp: "指针与数组",
        },
      ],
    },
    {
      chapter: "循环与算法",
      points: [
        {
          id: "C-loop-1",
          name: "for 循环与累加",
          level: "基础",
          minutes: 7,
          define: "按次数重复；sum 累加、max 求极值。",
          why: "程序阅读/填空。",
          core: [{ k: "模板", v: "for(i=0;i<n;i++) sum+=a[i];" }],
          steps: ["定初值", "写条件", "模拟每轮"],
          example: {
            stem: "sum=0; i=1..5 累加？",
            analysis: "15。",
          },
          mistakes: ["边界多跑", "max 初值 0"],
          kp: "循环与算法",
        },
      ],
    },
  ],

  计算机网络基础: [
    {
      chapter: "网络层",
      points: [
        {
          id: "N-ip-1",
          name: "IP 与子网划分",
          level: "强化",
          minutes: 10,
          define: "网络地址=IP∧掩码；可用主机=2^主机位−2。",
          why: "计算题最爱考。",
          core: [
            { k: "/24", v: "块 256，可用 254" },
            { k: "/26", v: "块 64，可用 62" },
            { k: "/27", v: "块 32，可用 30" },
          ],
          steps: ["写掩码/前缀", "算块大小", "网络/广播/可用"],
          example: {
            stem: "192.168.1.77/26 的网络地址？",
            analysis: "块 64，落在 64–127，网络 192.168.1.64。",
          },
          mistakes: ["网络当成最小主机", "可用忘减 2"],
          kp: "IP与子网",
        },
        {
          id: "N-ip-2",
          name: "ARP / ICMP",
          level: "基础",
          minutes: 6,
          define: "ARP：IP→MAC；ICMP：ping 差错报告。",
          why: "概念填空。",
          core: [{ k: "区分", v: "ARP 二层，ICMP 网络层" }],
          steps: ["回忆功能", "匹配缩写"],
          example: {
            stem: "ping 使用的协议？",
            analysis: "ICMP。",
          },
          mistakes: ["ARP 解析域名"],
          kp: "IP与子网",
        },
      ],
    },
    {
      chapter: "运输层",
      points: [
        {
          id: "N-tcp-1",
          name: "TCP 三次握手",
          level: "强化",
          minutes: 7,
          define: "SYN → SYN+ACK → ACK。",
          why: "简答/选择。",
          core: [{ k: "对比", v: "挥手一般四次" }],
          steps: ["按序写三步报文"],
          example: {
            stem: "建立连接几步？",
            analysis: "3 步。",
          },
          mistakes: ["与挥手次数混"],
          kp: "传输层",
        },
      ],
    },
  ],
};
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
/* 学习一刻 2027大纲版 - 电工深度内容 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.LEARN_BOOK = window.STUDY_DATA.LEARN_BOOK || {};

window.STUDY_DATA.LEARN_BOOK["电工电子技术基础"] = [
  {
    chapter: "第1章 电路基本概念",
    points: [
      {
        id: "ee-kp-101", name: "电流电压参考方向与功率", level: "基础", minutes: 8, kp: "电路基本量",
        content: "【一、电流】\n定义：电荷的定向移动\n单位：安培(A)，1A=1000mA\n方向：规定正电荷移动方向为电流正方向\n实际方向：正电荷真实移动方向\n参考方向：人为假定的方向\n→ 计算结果为正，实际=参考；为负则相反\n\n【二、电压】\n定义：单位正电荷从高电位到低电位的能量差\n单位：伏特(V)\n方向：高电位→低电位\n\n【三、关联参考方向】\n电流从电压的+端流入，从-端流出。\n\n【四、功率】\n关联方向下：P = UI\nP>0：元件吸收功率（负载）\nP<0：元件发出功率（电源）\n\n【例题】\n已知U=10V, I=2A，关联方向，求功率。\nP=UI=10×2=20W>0，吸收20W。\n\n【易错点】\n1. 没有参考方向就无法确定功率正负\n2. 电源是发出功率，负载是吸收功率"
      },
      {
        id: "ee-kp-102", name: "理想电源", level: "强化", minutes: 8, kp: "电源",
        content: "【一、理想电压源】\n特点：端电压恒定Us，与电流无关\n内阻为0\n输出电流由外电路决定\n\n【二、理想电流源】\n特点：输出电流恒定Is，与电压无关\n内阻无穷大\n端电压由外电路决定\n\n【三、实际电源等效变换】\n电压源Us串联内阻Rs ↔ 电流源Is=Us/Rs并联内阻Rs\n\n【变换要点】\n- 电流源方向：从电压源负极指向正极\n- 变换前后对外电路等效\n- 内阻大小不变\n\n【例题】\n电压源12V串联2Ω电阻，等效为电流源？\nIs=12/2=6A，并联2Ω电阻\n\n【易错点】\n- 理想电压源短路会产生无穷大电流，不允许\n- 理想电流源开路会产生无穷大电压，不允许"
      }
    ]
  },
  {
    chapter: "第2章 直流电路",
    points: [
      {
        id: "ee-kp-201", name: "欧姆定律与电阻串并联", level: "基础", minutes: 8, kp: "欧姆定律",
        content: "【一、欧姆定律】\nU = IR\n电流与电压成正比，与电阻成反比\n\n【二、电阻串联】\nR = R1 + R2 + R3 + ...\n串联分压：U1/U2 = R1/R2\n越串越大\n\n【三、电阻并联】\n1/R = 1/R1 + 1/R2 + ...\n两电阻并联：R = R1·R2/(R1+R2)\n并联分流：I1/I2 = R2/R1\n越并越小\n\n【例题】\nR1=6Ω, R2=3Ω并联，总电阻？\nR = 6×3/(6+3) = 2Ω\n\n【功率计算】\nP = UI = I²R = U²/R\n\n【易错点】\n1. 并联电阻越并越小，串联越串越大\n2. 两电阻并联等于乘积除以和"
      },
      {
        id: "ee-kp-202", name: "基尔霍夫定律", level: "强化", minutes: 10, kp: "KCL KVL",
        content: "【一、KCL基尔霍夫电流定律】\n节点：三条或三条以上支路的交点\n内容：任一节点，流入电流之和=流出电流之和\nΣI入 = ΣI出\n推广：适用于任意闭合面（广义节点）\n\n【二、KVL基尔霍夫电压定律】\n回路：闭合的电路路径\n内容：沿任一回路绕行一周，电压代数和=0\nΣU = 0\n约定：绕行方向与电压降方向一致取+，相反取-\n\n【例题】\n两电阻串联接12V电源，R1=2Ω, R2=4Ω，求电流。\n总R=6Ω，I=12/6=2A\nU1=2×2=4V, U2=2×4=8V\n验证：U1+U2=12V ✓\n\n【易错点】\n1. KCL是节点上的电流守恒\n2. KVL是回路中的电压守恒\n3. 列方程时注意正负号"
      },
      {
        id: "ee-kp-203", name: "戴维南定理与最大功率", level: "冲刺", minutes: 10, kp: "戴维南",
        content: "【一、戴维南定理】\n任何线性有源二端网络，对外电路来说，都可以等效为一个电压源Uoc串联一个等效电阻Req。\n\nUoc = 端口开路电压\nReq = 所有独立源置零后的端口等效电阻\n（电压源短路，电流源开路）\n\n【二、最大功率传输定理】\n当负载RL = Req时，负载获得最大功率\nPmax = Uoc²/(4Req)\n\n【例题】\nUoc=12V, Req=2Ω，RL=2Ω时功率最大？\nPmax = 12²/(4×2) = 144/8 = 18W\n\n【三、叠加定理】\n多个电源共同作用时，各支路电流（电压）=各电源单独作用时的代数和。\n\n【易错点】\n1. 除源时电压源短路，电流源开路\n2. 最大功率时RL一定等于Req"
      }
    ]
  },
  {
    chapter: "第3章 正弦交流电路",
    points: [
      {
        id: "ee-kp-301", name: "正弦量三要素", level: "基础", minutes: 8, kp: "交流电",
        content: "【一、正弦量三要素】\n1. 幅值（最大值）Um\n2. 角频率ω（rad/s）\n3. 初相位φ\n\ni(t) = Um·sin(ωt + φ)\n\n【二、市电参数】\nf = 50Hz\nT = 1/f = 0.02s\nω = 2πf = 314 rad/s\n\n【三、有效值】\nU = Um/√2 ≈ 0.707Um\nI = Im/√2\n市电220V是有效值，最大值Um=220×√2≈311V\n\n【四、相位差】\n两个同频率正弦量的相位之差\nΔφ = φ1 - φ2\n- Δφ>0：超前\n- Δφ<0：滞后\n- Δφ=0：同相\n- Δφ=π：反相\n\n【例题】\n市电u=311sin314t V，有效值？\nU = 311/√2 ≈ 220V\n\n【易错点】\n1. 电表读数都是有效值\n2. 最大值=有效值×√2"
      },
      {
        id: "ee-kp-302", name: "RLC元件与功率", level: "强化", minutes: 10, kp: "交流电路",
        content: "【一、纯电阻R】\n电压电流同相\n功率P=UI（有功功率，单位W）\n\n【二、纯电容C】\n电流超前电压90°\n容抗Xc = 1/(ωC)\n直流稳态：电容相当于开路\n不消耗有功功率\n\n【三、纯电感L】\n电流滞后电压90°\n感抗Xl = ωL\n直流稳态：电感相当于短路\n不消耗有功功率\n\n【四、功率因数】\ncosφ = P/S\nP=UIcosφ（有功）\nS=UI（视在功率，单位VA）\nQ=UIsinφ（无功）\n\n【例题】\n市电220V, 50Hz，C=100μF，容抗？\nXc = 1/(314×100×10⁻⁶) ≈ 31.8Ω\n\n【易错点】\n1. 电容通交流隔直流\n2. 电感通直流阻交流"
      }
    ]
  },
  {
    chapter: "第4章 动态电路",
    points: [
      {
        id: "ee-kp-401", name: "换路定律与时间常数", level: "强化", minutes: 8, kp: "暂态",
        content: "【一、换路定律】\n电容电压不能突变：Uc(0+) = Uc(0-)\n电感电流不能突变：Il(0+) = Il(0-)\n其他量（电阻电压、电容电流、电感电压）可以突变。\n\n【二、时间常数τ】\nRC电路：τ = R·C\nRL电路：τ = L/R\n单位：秒(s)\n\n【三、过渡过程】\n一般经过3~5个τ后，暂态过程基本结束，达到新稳态。\nτ越大，过程越慢。\n\n【例题】\nRC电路，R=1kΩ, C=100μF，τ=？\nτ = 1000 × 100×10⁻⁶ = 0.1s\n\n【易错点】\n1. 只有电容电压和电感电流不能突变\n2. τ越大充电越慢"
      }
    ]
  },
  {
    chapter: "第5章 二极管与直流稳压电源",
    points: [
      {
        id: "ee-kp-501", name: "二极管整流滤波", level: "基础", minutes: 10, kp: "二极管",
        content: "【一、二极管单向导电性】\n正偏导通（阳极电压>阴极），反偏截止。\n硅管导通压降≈0.7V\n锗管导通压降≈0.3V\n\n【二、稳压管】\n工作在反向击穿区，起稳压作用。\n必须串联限流电阻！\n\n【三、整流电路】\n半波整流：Uo = 0.45U2\n桥式整流（全波）：Uo = 0.9U2\n（U2是变压器副边电压有效值）\n\n【四、电容滤波】\n桥式整流+电容滤波后：\n带载时 Uo ≈ 1.2U2\n空载时 Uo ≈ √2·U2 ≈ 1.414U2\n\n【例题】\n变压器副边10V，桥式整流+电容滤波，带载输出？\nUo ≈ 1.2×10 = 12V\n\n【易错点】\n1. 整流后输出电压值要记住\n2. 电容滤波空载时输出是峰值电压"
      }
    ]
  },
  {
    chapter: "第6章 三极管电路",
    points: [
      {
        id: "ee-kp-601", name: "三极管三种工作状态", level: "强化", minutes: 10, kp: "三极管",
        content: "【一、三极管结构】\n三个电极：基极B、发射极E、集电极C\n两类：NPN和PNP\n\n【二、三种工作状态】\n1. 放大区：\n   发射结正偏，集电结反偏\n   Ic = β·Ib（电流放大）\n\n2. 饱和区：\n   两结都正偏\n   Ic不再随Ib增大，管子相当于导通开关\n\n3. 截止区：\n   两结都反偏（或零偏）\n   Ib≈0, Ic≈0，管子相当于断开开关\n\n【三、NPN管电位关系】\n放大状态：Vc > Vb > Ve\n（硅管Vb-Ve≈0.7V）\n\n【例题】\nNPN管测得Vb=2V, Ve=1.3V, Vc=5V，什么状态？\nVb-Ve=0.7V正偏，Vc>Vb反偏 → 放大状态\n\n【易错点】\n1. NPN和PNP偏置电压极性相反\n2. 饱和和截止相当于开关，放大是线性区"
      },
      {
        id: "ee-kp-602", name: "放大电路分析", level: "强化", minutes: 10, kp: "放大电路",
        content: "【一、共射放大电路】\n特点：电压放大倍数大，反相输出\n输入输出反相（输出与输入差180°）\n\n【二、射极输出器（共集）】\n特点：\n- 电压放大倍数≈1（电压跟随）\n- 输入电阻大\n- 输出电阻小\n- 输出与输入同相\n常用作缓冲级。\n\n【三、失真】\n截止失真：Q点太低，输出正半周被削（NPN）\n饱和失真：Q点太高，输出负半周被削\n\n【四、静态工作点稳定】\n分压式偏置电路通过发射极电阻直流负反馈稳定Q点。\n\n【易错点】\n1. 共射输出反相，共集输出同相\n2. 射极输出器电压跟随但电流有放大"
      }
    ]
  },
  {
    chapter: "第7章 运算放大器",
    points: [
      {
        id: "ee-kp-701", name: "理想运放分析", level: "强化", minutes: 10, kp: "运放",
        content: "【一、理想运放特性】\n- 开环电压放大倍数→∞\n- 输入电阻→∞\n- 输出电阻→0\n\n【二、线性区两个重要结论】\n1. 虚短：U+ = U-（两输入端电压相等）\n2. 虚断：两输入端输入电流=0\n\n【三、基本电路】\n反相比例放大器：\nAu = -Rf/R1\n同相比例放大器：\nAu = 1 + Rf/R1\n电压跟随器：\nAu = 1（特殊的同相比例，Rf=0, R1→∞）\n\n【例题】\n反相比例放大器，R1=10kΩ, Rf=100kΩ，Au=？\nAu = -100/10 = -10（负号表示反相）\n\n【易错点】\n1. 虚短和虚断只在线性区成立\n2. 反相放大有负号，同相放大没有"
      }
    ]
  },
  {
    chapter: "第8章 逻辑门电路",
    points: [
      {
        id: "ee-kp-801", name: "基本逻辑门", level: "基础", minutes: 8, kp: "逻辑门",
        content: "【一、基本逻辑运算】\n与门：Y = A·B（全1出1，有0出0）\n或门：Y = A+B（有1出1，全0出0）\n非门：Y = Ā（取反）\n\n【二、复合门】\n与非门：Y = (A·B)̅（全1出0）\n或非门：Y = (A+B)̅（有1出0）\n异或门：Y = A⊕B（不同出1，相同出0）\n\n【三、TTL门电路特点】\nTTL输入端悬空=高电平\nTTL输入端接地=低电平\n\n【四、CMOS门特点】\nCMOS输入端悬空不确定（不允许）\n输入阻抗高，功耗低\n\n【例题】\n与非门输入全1，输出？\nY=(1·1)̅ = 0\n\n【易错点】\n1. TTL悬空是高电平，CMOS悬空不允许\n2. 异或门是相同为0不同为1"
      }
    ]
  },
  {
    chapter: "第9章 组合逻辑",
    points: [
      {
        id: "ee-kp-901", name: "组合逻辑分析", level: "强化", minutes: 8, kp: "组合逻辑",
        content: "【一、组合逻辑特点】\n输出只与当前输入有关，与过去状态无关。\n没有记忆功能，无反馈回路。\n\n【二、分析步骤】\n1. 由逻辑图写输出表达式\n2. 化简表达式\n3. 列真值表\n4. 分析功能\n\n【三、常用器件】\n编码器：将输入信号编码为二进制\n译码器：将二进制翻译为输出信号\n数据选择器：从多路输入选一路输出\n\n【例题】\nY = AB + AB̅，化简？\nY = A(B+B̅) = A\n即输出只取决于A。\n\n【易错点】\n1. 组合逻辑没有记忆\n2. 分析时先写表达式再化简"
      }
    ]
  },
  {
    chapter: "第10章 时序逻辑",
    points: [
      {
        id: "ee-kp-1001", name: "触发器", level: "强化", minutes: 8, kp: "触发器",
        content: "【一、RS触发器】\n与非门组成，低电平有效：\nR̅=0, S̅=1 → 复位（Q=0）\nR̅=1, S̅=0 → 置位（Q=1）\nR̅=S̅=1 → 保持\nR̅=S̅=0 → 不允许\n\n【二、JK触发器】\nJ=1, K=0 → 置1\nJ=0, K=1 → 置0\nJ=K=0 → 保持\nJ=K=1 → 翻转（计数）\n\n【三、D触发器】\n次态Q(n+1) = D\n时钟上升沿触发\n\n【四、特点】\n触发器有时钟控制，有记忆功能。\n输出状态在时钟有效沿更新。\n\n【易错点】\n1. RS触发器不允许R=S=1（与非门）\n2. JK触发器J=K=1时翻转"
      }
    ]
  }
];

console.log("电工深度内容加载完成！");
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
