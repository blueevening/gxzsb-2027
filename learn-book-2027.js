/* 学习一刻 · 2027 广西专升本考纲全量精讲
 * 结构：科目 → 章节（=大纲小节）→ points[]
 * 字段：id, name, outline, plain, steps[], example, answer, warn, examTip, relatedFormula, level, minutes
 * 数理公式用 frac{}；英语分数/比例用 / 不用 frac
 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.LEARN_BOOK = {
  "高等数学": [
    {
      chapter: "函数、极限与连续",
      outline: "函数三要素与定义域值域；有界/单调/奇偶/周期性；反函数；复合函数分解；基本初等函数图像；极限概念与四则运算；两个重要极限；无穷小阶的比较与等价代换；连续性与间断点判定；闭区间连续函数性质。",
      points: [
        {
          id: "LB-M-01",
          name: "函数三要素与定义域",
          outline: "函数三要素与定义域值域",
          plain: "函数就是一台加工机：定义域是能放进去的原料，值域是能吐出来的结果，对应法则是加工规则。考定义域，本质是列不等式组。",
          steps: [
            "列出所有限制：分母≠0；偶次根号被开方数≥0；对数真数>0。",
            "联立解不等式组，注意边界开闭。",
            "写成区间或集合；实际问题再按题意限非负、整数等。"
          ],
          example: "求 f(x)=frac{1}{x-2}+√x 的定义域。",
          answer: "[0,2)∪(2,+∞)",
          warn: "只写一半条件；漏掉开闭区间括号；定义域写成 x≥0 且 x≠2 时忘了写「且」的集合形式。",
          examTip: "口诀：分母不为零，根号非负，真数为正，先列后解。",
          relatedFormula: "函数三要素与四大性质",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-M-02",
          name: "函数四大性质",
          outline: "有界/单调/奇偶/周期性",
          plain: "有界=被夹住；单调=一直升或一直降；奇偶=关于原点或 y 轴对称；周期=隔一段重复。选择题爱考「哪个不是奇函数」。",
          steps: [
            "奇偶性先看定义域是否关于原点对称，不对称直接非奇非偶。",
            "再算 f(−x)：等于 f(x) 是偶，等于 −f(x) 是奇。",
            "单调性用定义或导数；周期性找最小正周期 T，使 f(x+T)=f(x)。"
          ],
          example: "判断 f(x)=x²·sin x 的奇偶性。",
          answer: "奇函数。因为 x² 是偶、sin x 是奇，偶×奇=奇。",
          warn: "不先查定义域就判奇偶；把 y=x³ 在 R 上说成有界；周期函数不一定有最小正周期。",
          examTip: "口诀：偶×偶=偶，奇×奇=偶，偶×奇=奇；定义域对称是前提。",
          relatedFormula: "函数三要素与四大性质",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-M-03",
          name: "反函数与复合分解",
          outline: "反函数；复合函数分解；基本初等函数图像",
          plain: "反函数就是把机器倒过来：x、y 对调。复合函数是「函数套函数」，求导、求极限都要先拆层。",
          steps: [
            "求反函数：由 y=f(x) 解出 x=f⁻¹(y)，再写成 y=f⁻¹(x)。",
            "定义域值域对调：原来 f 的值域就是 f⁻¹ 的定义域。",
            "复合分解：y=f(u)，u=g(x)，从外到里标层，便于链式求导。"
          ],
          example: "求 y=2x+3 的反函数。",
          answer: "y=frac{x-3}{2}。由 y=2x+3 得 x=frac{y-3}{2}，对调字母得反函数 y=frac{x-3}{2}。",
          warn: "反函数忘对调 x/y；单调函数才有反函数（严格单调）；复合函数拆层漏层。",
          examTip: "口诀：解出再对调；值域变定义域。图像关于直线 y=x 对称。",
          relatedFormula: "反函数与复合分解",
          level: "强化",
          minutes: 7
        },
        {
          id: "LB-M-04",
          name: "极限概念与四则运算",
          outline: "极限概念与四则运算",
          plain: "极限是「无限靠近的结果」，不是代入终点。能直接代入的先代入；0/0、∞/∞ 未定式必须变形。",
          steps: [
            "先看能否直接代入（多项式、连续点直接代）。",
            "若是 0/0：因式分解、有理化、等价无穷小。",
            "若是 ∞/∞：分子分母同除最高次幂，看系数比。"
          ],
          example: "求 lim(x→∞) frac{2x²+1}{x²-3}。",
          answer: "2。同除 x²：lim (2+1/x²)/1−3/x² = 2/1=2。",
          warn: "∞/∞ 不要直接写 0 或 ∞；四则运算法则要求每个极限都存在；加减法不能乱用等价无穷小。",
          examTip: "口诀：未定式先变形；∞/∞ 看最高次系数比；0/0 先分解约分。",
          relatedFormula: "常用等价无穷小",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-M-05",
          name: "两个重要极限",
          outline: "两个重要极限",
          plain: "两个万能钥匙：三角比极限等于 1；(1+小量)^{大数} 趋向 e。考试几乎每年都变形考。",
          steps: [
            "看到 sin□/□ 且 □→0，写成 1，系数跟着角走。",
            "看到 (1+a/x)^x，结果是 e^a；(1+x)^{1/x}→e。",
            "综合题先变形成标准形再套，不要直接硬代。"
          ],
          example: "求 lim(x→0) sin 3x/x。",
          answer: "3。写成 3·sin 3x/3x→3×1=3。",
          warn: "0/0 不能直接写 1；角是 3x 就要除 3x；(1−1/x)^x→1/e 不是 e。",
          examTip: "口诀：三角比同角相除是 1，系数跟角走；底 1 加小量，指数倒数凑。",
          relatedFormula: "重要极限（sin 型）",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-M-06",
          name: "等价无穷小与无穷小比较",
          outline: "无穷小阶的比较与等价代换",
          plain: "等价无穷小=「个头几乎一样小」，乘除里可以直接换。比较阶就是看谁趋于 0 更快。",
          steps: [
            "背熟：x→0 时 sinx~x，tanx~x，1−cosx~x²/2，eˣ−1~x，ln(1+x)~x。",
            "乘除因式中直接替换；加减先通分或提取公因子。",
            "比较：算 lim α/β，得 0 则 α 高阶，∞ 则 α 低阶，非 0 常数则同阶。"
          ],
          example: "求 lim(x→0) 1−cos 2x/x²。",
          answer: "2。1−cos2x~(2x)²/2=2x²，故极限为 2。",
          warn: "加减式乱替换；把 1−cosx 记成 ~x；等价只在 x→0 附近成立。",
          examTip: "口诀：乘除随便换，加减先变形；1−cos 要带平方一半。",
          relatedFormula: "常用等价无穷小",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-M-07",
          name: "连续性与间断点",
          outline: "连续性与间断点判定",
          plain: "连续=图像不断开。间断点分两类：第一类（左右极限都存在）和第二类（至少一边不存在）。",
          steps: [
            "查 f(a) 有无定义。",
            "算 lim(x→a) f(x) 是否存在（左右是否相等）。",
            "比较极限与函数值：相等则连续；否则间断，再按类型分类。"
          ],
          example: "讨论 f(x)=x²−1/x−1 在 x=1 处的连续性。",
          answer: "可去间断点。极限为 2，但 f(1) 无定义；补上 f(1)=2 即连续。",
          warn: "把可去间断说成连续；分母为 0 就断定第二类；忽略左右极限。",
          examTip: "口诀：一有、二存、三相等才连续。可去=极限在；跳跃=左右不等；无穷/振荡=第二类。",
          relatedFormula: "连续与间断点",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-M-08",
          name: "闭区间连续函数性质",
          outline: "闭区间连续函数性质",
          plain: "闭区间上连续函数必有最大值最小值，且能取到中间的一切值。这是存在性证明和应用题的理论依据。",
          steps: [
            "确认函数在闭区间 [a,b] 上连续。",
            "最值：比较端点 f(a)、f(b) 与区间内极值。",
            "介值定理：若 f(a)·f(b)<0，则至少有一点使 f(ξ)=0（零点定理）。"
          ],
          example: "证明 x³−x−1=0 在 (1,2) 内至少有一根。",
          answer: "令 f(x)=x³−x−1。f(1)=−1<0，f(2)=5>0，由零点定理存在 ξ∈(1,2) 使 f(ξ)=0。",
          warn: "开区间上结论不一定成立；忽略端点极值；零点定理要求变号。",
          examTip: "口诀：闭连必有最值；变号必有零点。证明题先构造 f，再验端点异号。",
          relatedFormula: "求极值与闭区间最值",
          level: "冲刺",
          minutes: 7
        }
      ]
    },
    {
      chapter: "一元函数导数与微分",
      outline: "导数定义与可导连续关系；导数几何意义、切线与法线方程；基本求导公式、四则运算、反函数与复合函数求导；隐函数、对数求导、参数方程求导；高阶导数；微分定义与一阶微分形式不变性。",
      points: [
        {
          id: "LB-M-09",
          name: "导数定义与几何意义",
          outline: "导数定义与可导连续关系；切线与法线方程",
          plain: "导数就是瞬时变化率，几何上是切线斜率。可导必连续，连续不一定可导（如 y=|x| 在 0 处）。",
          steps: [
            "用定义：f′(x₀)=lim(Δx→0) (f(x₀+Δx)−f(x₀))/Δx。",
            "切线方程：y−y₀=f′(x₀)(x−x₀)。",
            "法线斜率是 −1/f′(x₀)（f′≠0），再写点斜式。"
          ],
          example: "求 y=x² 在点 (1,1) 处的切线方程。",
          answer: "y′=2x，k=2。切线：y−1=2(x−1)，即 y=2x−1。",
          warn: "法线斜率忘记取负倒数；把导数当函数值；f′(x₀) 不存在仍硬写切线。",
          examTip: "口诀：导数=斜率；切线同号，法线负倒数。可导⇒连续，反之不真。",
          relatedFormula: "导数基本公式",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-M-10",
          name: "基本求导公式与四则运算",
          outline: "基本求导公式、四则运算",
          plain: "先背公式表，再套加减乘除法则。乘积不是各导相乘，商的分母要平方。",
          steps: [
            "背熟：(xⁿ)′=nxⁿ⁻¹，(sinx)′=cosx，(cosx)′=−sinx，(eˣ)′=eˣ，(lnx)′=1/x。",
            "乘积：(uv)′=u′v+uv′。",
            "商：(u/v)′=u′v−uv′/v²。"
          ],
          example: "求 y=x²·sin x 的导数。",
          answer: "y′=2x sin x + x² cos x。",
          warn: "(uv)′ 误写成 u′v′；(cosx)′ 漏负号；商法则分子符号搞反。",
          examTip: "口诀：乘积交叉加，商法则分母平方、分子交叉减。",
          relatedFormula: "乘积与商法则",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-M-11",
          name: "复合函数求导（链式法则）",
          outline: "复合函数求导",
          plain: "外层求导乘内层求导，一层层剥洋葱。复合函数是求导大题的主角。",
          steps: [
            "拆层：写出 y=f(u)，u=g(x)，必要时再拆。",
            "先对外层求导，保持内层原样。",
            "乘以内层导数，最后把 u 换回 x。"
          ],
          example: "求 y=sin(2x²+1) 的导数。",
          answer: "y′=cos(2x²+1)·4x=4x cos(2x²+1)。",
          warn: "漏掉内层系数；多层复合只求一层就停；忘记把中间变量代回。",
          examTip: "口诀：外层′×内层′，有几层乘几次。角是 ax 就会冒出系数 a。",
          relatedFormula: "链式法则（复合求导）",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-M-12",
          name: "隐函数与对数求导",
          outline: "隐函数、对数求导、参数方程求导",
          plain: "隐函数是 x、y 混在一起的方程，两边对 x 求导，把 y′ 解出来。连乘除、幂指函数先取对数。",
          steps: [
            "隐函数：两边对 x 求导，y 看成 x 的函数（y′ 留下）。",
            "整理出含 y′ 的项，解方程得 y′。",
            "对数求导：两边 ln，再求导，适合 y=u(x)^{v(x)}。"
          ],
          example: "由 x²+y²=25 求 y′。",
          answer: "两边求导：2x+2y y′=0 ⇒ y′=−x/y。",
          warn: "对 y 求导时忘记链出 y′；对数求导忘掉定义域 x>0；参数方程漏乘 dy/dx=y′(t)/x′(t)。",
          examTip: "口诀：隐函数两边导，y′ 当未知数解；幂指函数先取 ln。",
          relatedFormula: "隐函数求导",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-M-13",
          name: "高阶导数与微分",
          outline: "高阶导数；微分定义与一阶微分形式不变性",
          plain: "高阶导就是再导一次。微分 dy=f′(x)dx，是增量的线性主部，近似计算常用。",
          steps: [
            "一阶导 y′ 再对 x 求导得 y″，注意乘积、商、复合要反复用法则。",
            "微分：dy=f′(x)dx，可写成 dy=y′dx。",
            "近似：Δx 很小时 f(x₀+Δx)≈f(x₀)+f′(x₀)Δx。"
          ],
          example: "设 y=x³，求 y″。",
          answer: "y′=3x²，y″=6x。",
          warn: "二阶导漏乘中间导；微分写成 dy=f′(x) 而漏 dx；近似公式只在 x₀ 附近有效。",
          examTip: "口诀：一阶斜率二阶弯；dy 一定带 dx。y=xⁿ 的 n 阶导是 n!（x 的 0 次后为 0）。",
          relatedFormula: "导数基本公式",
          level: "基础",
          minutes: 7
        }
      ]
    },
    {
      chapter: "一元函数导数的应用",
      outline: "罗尔/拉格朗日/柯西中值定理；洛必达法则；单调性判定；极值与最值求法及应用；拐点与曲线凹凸性；函数作图步骤。",
      points: [
        {
          id: "LB-M-14",
          name: "中值定理与洛必达法则",
          outline: "罗尔/拉格朗日/柯西中值定理；洛必达法则",
          plain: "中值定理是「平均变化率=某点瞬时变化率」。洛必达是对 0/0、∞/∞ 未定式的求导神器。",
          steps: [
            "洛必达：判型为 0/0 或 ∞/∞，分子分母分别求导再取极限。",
            "罗尔：闭连、开可、端点相等 ⇒ 存在 f′(ξ)=0。",
            "拉格朗日：f′(ξ)=f(b)−f(a)/b−a，证明不等式常用。"
          ],
          example: "求 lim(x→0) eˣ−1/sin x。",
          answer: "0/0 型，洛必达：lim eˣ/cos x=1/1=1。",
          warn: "不是未定式就乱用洛必达；用后更复杂要换法；忽略中值定理条件（连续可导）。",
          examTip: "口诀：0/0、∞/∞ 才洛必达；用一次判一次。罗尔证零点，拉氏证不等式。",
          relatedFormula: "洛必达法则",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-M-15",
          name: "单调性与极值",
          outline: "单调性判定；极值求法",
          plain: "导数正则增、负则减。极值是「局部最高/最低」，发生在驻点或导数不存在处。",
          steps: [
            "求 f′(x)，令 f′(x)=0 得驻点，并标出不可导点。",
            "列表看 f′ 在各区间符号，定单调区间。",
            "极值：符号由正变负是极大，由负变正是极小。"
          ],
          example: "求 f(x)=x³−3x 的极值。",
          answer: "f′=3x²−3=0 ⇒ x=±1。x=−1 处极大 f=2；x=1 处极小 f=−2。",
          warn: "把驻点直接当极值点（如 y=x³ 在 0 处不是极值）；忽略定义域端点；二阶导判定用错符号。",
          examTip: "口诀：一阶导列表看变号；正负是极大，负正是极小。二阶导：f′′<0 极大，>0 极小。",
          relatedFormula: "求极值与闭区间最值",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-M-16",
          name: "闭区间最值与应用题",
          outline: "最值求法及应用",
          plain: "闭区间最值比较「端点+极值」即可。应用题先列目标函数，再求最值。",
          steps: [
            "设变量，把目标（面积、利润、用料）写成一元函数。",
            "求定义域（由实际意义决定）。",
            "求驻点与端点函数值，比较得最值并回验是否符合实际。"
          ],
          example: "周长为 20 的矩形，何时面积最大？",
          answer: "设长 x 宽 10−x，S=x(10−x)，S′=10−2x=0 ⇒ x=5。正方形面积最大为 25。",
          warn: "忘写定义域；比较时不看端点；应用题答案没写单位/实际意义。",
          examTip: "口诀：设—列—求—比—答。最值比较列表：端点、驻点、不可导点。",
          relatedFormula: "求极值与闭区间最值",
          level: "冲刺",
          minutes: 10
        },
        {
          id: "LB-M-17",
          name: "凹凸性与拐点",
          outline: "拐点与曲线凹凸性；函数作图步骤",
          plain: "二阶导正=凹（碗口向上），负=凸。凹凸性改变的点叫拐点。",
          steps: [
            "求 f′′(x)，找 f′′=0 与 f′′ 不存在的点。",
            "列表看 f′′ 符号，定凹凸区间。",
            "拐点：凹凸性改变且曲线连续的点，坐标写成 (x₀, f(x₀))。"
          ],
          example: "求 y=x³ 的拐点。",
          answer: "y′=3x²，y″=6x。x=0 时 y″=0 且两侧变号，拐点 (0,0)。",
          warn: "拐点写成 x=0 而不是点坐标；f′′=0 未变号仍当拐点；凹凸口诀记反。",
          examTip: "口诀：二阶正凹负凸；变号出拐点。作图：定义域→奇偶周期→单调极值→凹凸拐点→渐近线。",
          relatedFormula: "凹凸区间与拐点",
          level: "冲刺",
          minutes: 8
        }
      ]
    },
    {
      chapter: "一元函数积分学",
      outline: "原函数与不定积分概念；基本积分公式；直接积分、换元、分部积分；定积分概念与几何意义；变上限积分求导与牛顿-莱布尼茨公式；广义积分；定积分简单应用（面积、体积）。",
      points: [
        {
          id: "LB-M-18",
          name: "原函数与基本积分公式",
          outline: "原函数与不定积分概念；基本积分公式",
          plain: "积分是求导的逆运算。不定积分是一族原函数，结果必须加 +C。",
          steps: [
            "对照导数公式反写：∫xⁿdx=xⁿ⁺¹/(n+1)+C（n≠−1）。",
            "∫1/xdx=ln|x|+C；∫eˣdx=eˣ+C。",
            "∫cosx dx=sinx+C；∫sinx dx=−cosx+C。"
          ],
          example: "求 ∫(3x²+2x)dx。",
          answer: "x³+x²+C。",
          warn: "漏写 +C；n=−1 仍用幂公式；ln 里忘写绝对值。",
          examTip: "口诀：指数升一除以新指数；1/x 变 ln|x|；三角积分盯准符号。",
          relatedFormula: "不定积分基本公式",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-M-19",
          name: "换元积分与分部积分",
          outline: "直接积分、换元、分部积分",
          plain: "凑微分是「把复合×内层导塞进 d 里」；分部是「转移求导」，对付多项式×指数/三角，或含 ln、arctan。",
          steps: [
            "识别 f(g(x))g′(x) 型，令 u=g(x)，写 ∫f(u)du。",
            "分部选 u 的口诀：反、对、幂、指、三，靠前的作 u。",
            "定积分换元要同步改上下限，不必回代 x。"
          ],
          example: "求 ∫x eˣdx。",
          answer: "取 u=x，dv=eˣdx，则 ∫x eˣdx=x eˣ−∫eˣdx=eˣ(x−1)+C。",
          warn: "凑微分漏系数；分部 uv 与积分项符号搞反；定积分换元不改限。",
          examTip: "口诀：见复合凑 u；幂×指/三用分部；「反对幂指三」定 u 顺序。",
          relatedFormula: "凑微分（第一换元）",
          level: "强化",
          minutes: 10
        },
        {
          id: "LB-M-20",
          name: "牛顿-莱布尼茨与变上限积分",
          outline: "变上限积分求导与牛顿-莱布尼茨公式；广义积分",
          plain: "定积分=原函数在上下限的差。变上限积分对上限求导就是被积函数在上限的值。",
          steps: [
            "先求原函数 F(x)。",
            "代入：∫ₐᵇf(x)dx=F(b)−F(a)。",
            "变上限：d/dx∫ₐˣf(t)dt=f(x)；若上限是 g(x)，则等于 f(g(x))·g′(x)。"
          ],
          example: "求 ∫₀² x²dx。",
          answer: "F=x³/3，∫₀²x²dx=8/3−0=8/3。",
          warn: "忘减 F(a)；被积含 x 时未提出；广义积分忘写极限过程。",
          examTip: "口诀：牛顿-莱布尼茨，先原后代再相减；变上限求导，代上限乘上限′。",
          relatedFormula: "牛顿—莱布尼茨公式",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-M-21",
          name: "定积分应用：面积、体积与弧长",
          outline: "定积分简单应用（面积、体积、弧长）",
          plain: "面积=「上减下」积分；绕 x 轴旋转体体积=π∫y²dx；弧长=∫√(1+(y′)²)dx。先画图定上下限。",
          steps: [
            "画草图，求交点定积分限。",
            "面积：A=∫ₐᵇ [上曲线−下曲线] dx。",
            "旋转体：V=π∫ₐᵇ [f(x)]²dx（绕 x 轴）。",
            "弧长：y=f(x) 时 s=∫ₐᵇ √(1+[f′(x)]²)dx；参数方程 s=∫√(φ′²+ψ′²)dt。"
          ],
          example: "求 y=x² 与 y=0、x=1 围成面积。",
          answer: "A=∫₀¹ x²dx=1/3。",
          warn: "上下线搞反导致负面积；忘了平方配 π；限是交点不是随便取 0、1；弧长根号里别漏 1。",
          examTip: "口诀：面积上减下，体积 πy²，弧长根号下 1 加 y′²。两曲线围成时先解交点。",
          relatedFormula: "定积分求面积与弧长",
          level: "冲刺",
          minutes: 12
        }
      ]
    },
    {
      chapter: "常微分方程",
      outline: "微分方程的阶、解、通解、初始条件与特解；可分离变量微分方程、一阶线性微分方程求解；降阶法；二阶线性微分方程解的结构；二阶常系数齐次线性微分方程解法；了解二阶常系数非齐次解法。",
      points: [
        {
          id: "LB-M-22",
          name: "微分方程基本概念",
          outline: "微分方程的阶、解、通解、初始条件与特解",
          plain: "含未知函数导数的方程叫微分方程。阶=最高阶导数次数；通解含任意常数，个数=阶数；代初值定特解。",
          steps: [
            "找出最高阶导数，确定阶。",
            "验证函数代入是否为解。",
            "通解独立任意常数个数等于阶；用初始条件定常数得特解。"
          ],
          example: "y″+y=0 是几阶？y=sin x 是解吗？",
          answer: "二阶。y=sin x 代入：y″=−sin x，y″+y=0，是解。",
          warn: "阶数看最高阶导不是次数；通解常数个数不够；特解忘代初值。",
          examTip: "口诀：阶看最高导；n 阶通解 n 个 C；初值定特解。",
          relatedFormula: "二阶常系数齐次微分方程",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-M-23",
          name: "可分离变量微分方程",
          outline: "可分离变量微分方程",
          plain: "能写成 g(y)dy=f(x)dx 的方程，两边分别积分即可。",
          steps: [
            "分离：把 y 与 dy 放一边，x 与 dx 放另一边。",
            "两边积分，只写一个 +C。",
            "必要时解出 y，或由初值定 C。"
          ],
          example: "解 dy/dx=2xy。",
          answer: "分离：dy/y=2x dx。积分 ln|y|=x²+C₁，y=C e^{x²}。",
          warn: "分离时漏掉符号/系数；两边积分写两个 C；除 y 时忽略 y=0 特解。",
          examTip: "口诀：先分离后积分；y 与 x 各居一边。能乘开就先乘开再分。",
          relatedFormula: "一阶线性微分方程",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-M-24",
          name: "一阶线性微分方程",
          outline: "一阶线性微分方程求解",
          plain: "标准形 y′+P(x)y=Q(x)。齐次当 Q=0 可分离；非齐次用公式或常数变易。",
          steps: [
            "化成标准形 y′+P(x)y=Q(x)。",
            "公式解：y=e^{−∫P dx} [∫Q e^{∫P dx} dx + C]。",
            "代入化简，得通解；再用初值定特解。"
          ],
          example: "解 y′+y=1。",
          answer: "P=1，Q=1。y=e^{−x}[∫1·eˣdx+C]=e^{−x}(eˣ+C)=1+C e^{−x}。",
          warn: "标准形没化好（y′ 系数不是 1）；积分符号漏；指数上正负号搞反。",
          examTip: "口诀：先标准化再套公式；指数上 ±∫P 要成对出现。",
          relatedFormula: "一阶线性微分方程",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-M-25",
          name: "二阶常系数齐次线性微分方程",
          outline: "二阶常系数齐次线性微分方程解法",
          plain: "形如 y″+py′+qy=0。写特征方程 r²+pr+q=0，按根的三种情况写通解。",
          steps: [
            "写特征方程 r²+pr+q=0，求判别式 Δ。",
            "两个不等实根 r₁≠r₂：y=C₁e^{r₁x}+C₂e^{r₂x}。",
            "重根 r：y=(C₁+C₂x)e^{rx}；共轭复根 α±βi：y=e^{αx}(C₁cos βx+C₂sin βx)。"
          ],
          example: "解 y″−y=0。",
          answer: "特征方程 r²−1=0，r=±1。y=C₁eˣ+C₂e^{−x}。",
          warn: "特征方程写错符号；重根情形漏乘 x；复根漏 e^{αx} 或 sin/cos 系数。",
          examTip: "口诀：两实根相加，重根乘 x，复根夹三角。判别式定三类。",
          relatedFormula: "二阶常系数齐次微分方程",
          level: "冲刺",
          minutes: 10
        }
      ]
    }
  ],
  "英语": [
    {
      chapter: "词汇与语法结构",
      outline: "掌握高职高专英语课标规定的 3000 个常用单词、500 个常用短语与固定搭配；掌握句子结构、时态、语态等语法规则并正确运用。",
      points: [
        {
          id: "LB-E-01",
          name: "高频词汇与固定搭配",
          outline: "3000 常用单词、500 常用短语与固定搭配",
          plain: "单选前几题几乎都是搭配题。背词要连着介词和动词搭配一起背，不要只背中文意思。",
          steps: [
            "先锁定搭配：介词后接 doing；enjoy/finish/mind + doing；want/hope + to do。",
            "看空格左右的词性与固定结构，用搭配排除。",
            "再核对词义是否符合句意（develop habits、by bus 等）。"
          ],
          example: "We should ______ good habits of reading.（develop / improve / make / take）",
          answer: "develop。develop good habits 是固定搭配「养成好习惯」。",
          warn: "把 make habits、take habits 当正确搭配；只看中文不管搭配；忽略冠词与介词。",
          examTip: "口诀：介后 doing，enjoy finish mind 跟 doing；习惯用 develop 不用 make。",
          relatedFormula: "固定搭配（高频介词/动词）",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-E-02",
          name: "时态体系",
          outline: "时态等语法规则并正确运用",
          plain: "先找时间状语，再定时态。for/since→完成时；ago/last→过去时；every day→一般现在。",
          steps: [
            "圈时间状语：already/yet/just/ever/never→现在完成；by the end of last→过去完成。",
            "看动作先后：过去的过去用 had done；到将来某时为止用 will have done。",
            "主句从句时态呼应，从句在「真理/习惯」中可用一般现在。"
          ],
          example: "By the end of last term, we ______ 50 lessons.（learned / had learned / have learned / will learn）",
          answer: "had learned。by the end of last term 是「过去的过去」。",
          warn: "完成时和过去时混用；忽略 by+过去时间点；主将从现不会用。",
          examTip: "口诀：for since 配完成；ago 配过去；by the end of last 用过去完成。",
          relatedFormula: "过去完成时",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-E-03",
          name: "被动语态",
          outline: "语态等语法规则并正确运用",
          plain: "主语是「被做」就用 be done。时态体现在 be 上，done 是过去分词。",
          steps: [
            "判主语是执行者还是承受者，确定是否被动。",
            "定时态：am/is/are done；was/were done；have/has been done；will be done。",
            "含情态：can/must/should be done。"
          ],
          example: "The bridge ______ last year.（built / was built / has built / is built）",
          answer: "was built。桥是被建的，last year 用一般过去时被动。",
          warn: "把主动写成被动；完成时被动漏 been；双宾语被动结构错。",
          examTip: "口诀：be + 过去分词；时态看 be 动词。中文「被/由/受到」提示被动。",
          relatedFormula: "被动语态",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-E-04",
          name: "主谓一致",
          outline: "句子结构与主谓一致",
          plain: "谓语单复数跟主语走。就近原则（there be、either or）和就远原则（as well as）是常考点。",
          steps: [
            "找真正主语：each/every/不定式/动名词/从句作主语通常单数。",
            "注意就近：neither…nor、either…or、not only…but also、there be。",
            "注意就远：together with、as well as、except 不影响主语单复数。"
          ],
          example: "Neither he nor his friends ______ going.（is / are / was / has）",
          answer: "are。neither…nor 就近原则，靠近的是 friends，用复数。",
          warn: "被中间的 with 短语干扰；each of 后动词用单数；people/police 作复数却用单数动词。",
          examTip: "口诀：就近看最近，就远丢修饰；each every 不定式，动词用单数。",
          relatedFormula: "主谓一致",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-E-05",
          name: "定语从句",
          outline: "句子结构与从句运用",
          plain: "定语从句修饰名词。who 指人，which 指物，that 两者皆可；whose 表所属。",
          steps: [
            "找先行词，确定指人/物/事/所属。",
            "选关系词：指人 who/whom/that；指物 which/that；地点 where；时间 when；原因 why。",
            "看从句缺不缺成分：缺成分用关系代词；不缺用关系副词。"
          ],
          example: "The book ______ I bought is useful.（which / what / who / where）",
          answer: "which（或 that）。先行词 book 在从句中作 bought 的宾语，缺成分。",
          warn: "what 不能引导定语从句；关系副词误代宾语；逗号后用 that。",
          examTip: "口诀：缺成分用代词，不缺用副词；逗号后 which 不用 that。",
          relatedFormula: "定语从句",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-E-06",
          name: "名词性从句",
          outline: "句子结构与从句运用",
          plain: "主语从句、宾语从句、表语从句、同位语从句统称名词性从句。陈述语序是铁律。",
          steps: [
            "判断从句在句中作什么成分：主语、宾语、表语还是同位语。",
            "选连接词：that（无意义）、whether/if（是否）、what/who/which（疑问）。",
            "从句一律用陈述语序（主+谓），不倒装。"
          ],
          example: "I don't know ______ he will come.（that / if / what / which）",
          answer: "if（或 whether）。意思是「是否」，引导宾语从句。",
          warn: "宾语从句用疑问语序；that/what 混用；whether 与 if 在介词后/不定式前不用 if。",
          examTip: "口诀：名词性从句陈述序；that 无义 what 有义；「是否」用 whether。",
          relatedFormula: "名词性从句（主语/宾语/表语从句）",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-E-07",
          name: "状语从句",
          outline: "句子结构与从句运用",
          plain: "表时间、条件、让步、原因、结果、目的。记住常用连词，翻译和单选都考。",
          steps: [
            "按逻辑选连词：when/while/as（时间）；if/unless（条件）；although/even if（让步）。",
            "主将从现：if/when/as soon as 引导的从句用一般现在表将来。",
            "注意 so…that 与 such…that、too…to 的转换。"
          ],
          example: "If it ______ tomorrow, we will stay at home.（rains / will rain / rained / would rain）",
          answer: "rains。if 条件句主句将来时，从句一般现在时（主将从现）。",
          warn: "条件句用 will；although 与 but 连用；because 与 so 连用（中式英语）。",
          examTip: "口诀：主将从现；让步不与 but 连；时间条件句用现在表将来。",
          relatedFormula: "状语从句（时间/条件/让步）",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-E-08",
          name: "非谓语动词",
          outline: "非谓语正确运用",
          plain: "一个句子已有谓语，再出现的动词就要「变形」：to do 表目的/将来，doing 表主动/进行，done 表被动/完成。",
          steps: [
            "先找句中已有谓语，确定第二动词是非谓语。",
            "判逻辑主语关系：主动用 doing/to do，被动用 done/to be done。",
            "判时间：将来/目的 to do；进行/主动 doing；完成/被动 done。"
          ],
          example: "______ from the hill, the city looks beautiful.（Seeing / Seen / To see / See）",
          answer: "Seen。逻辑主语 the city 是「被看」，用过去分词。",
          warn: "悬垂非谓语（逻辑主语不一致）；介词后用 to do；使役动词后宾补形式错。",
          examTip: "口诀：主动 doing 被动 done；目的将来 to do。介后一律 doing。",
          relatedFormula: "不定式 to do",
          level: "冲刺",
          minutes: 10
        },
        {
          id: "LB-E-09",
          name: "虚拟语气",
          outline: "语法规则拓展与正确运用",
          plain: "虚拟是「说反话」：对现在/过去/将来假设，动词要「退一格」。",
          steps: [
            "对现在/将来虚拟：if 从句过去式（be 用 were），主句 would/could/might + do。",
            "对过去虚拟：从句 had done，主句 would/could/might + have done。",
            "固定句型：wish/suggest/demand 后从句用 (should) + 动词原形。"
          ],
          example: "If I ______ you, I would take the job.（am / was / were / be）",
          answer: "were。对现在虚拟，be 动词一律用 were。",
          warn: "把虚拟当真实条件句；wish 后时态回退不够；suggest 后不用原形。",
          examTip: "口诀：现在往过去退，过去往 had done 退；would 三兄弟 + 原形/have done。",
          relatedFormula: "虚拟语气（if 条件句）",
          level: "冲刺",
          minutes: 10
        },
        {
          id: "LB-E-10",
          name: "冠词、代词与比较级",
          outline: "词法与句法综合运用",
          plain: "a/an 看音素，the 表特指；代词注意格与指代一致；比较级注意 than 与 the more…the more。",
          steps: [
            "冠词：元音音素前 an；独一无二/序数词前 the；球类三餐零冠词。",
            "代词：主格 I/he、宾格 me/him、物主 my/mine；反身代词与主语一致。",
            "比较级：than 前用比较级；最高级前 the；倍数表达 twice as…as。"
          ],
          example: "This book is not mine. It's ______.（her / hers / she / herself）",
          answer: "hers。= her book，名词性物主代词。",
          warn: "a university（辅音音素）；比较级与最高级混用；it's 与 its 不分。",
          examTip: "口诀：an 看音不看形；mine yours 可独立；比较级配 than，最高级配 the。",
          relatedFormula: "冠词 a/an/the/零冠词",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-E-11",
          name: "阅读理解：主旨与细节",
          outline: "理解主旨大意；获取具体细节",
          plain: "主旨题看首尾段和各段首句；细节题回原文定位，答案常是同义改写而非原词照抄。",
          steps: [
            "先读题干，圈关键词（人名、数字、专有名词）。",
            "回文定位，比对选项与原文，优先同义替换。",
            "主旨题概括各段首句，排除过宽/过窄/无中生有项。"
          ],
          example: "The passage mainly tells us ______.（A. a story B. the main idea C. a detail D. an example）",
          answer: "选概括全文的选项（B 类）。细节、例子、片面项都不对。",
          warn: "凭常识选而不是回文；主旨选成细节；绝对化词汇（all/never）常为干扰。",
          examTip: "口诀：细节回定位，主旨看首尾；绝对化选项慎选。",
          relatedFormula: "英译汉技巧",
          level: "基础",
          minutes: 8
        },
        {
          id: "LB-E-12",
          name: "阅读理解：推断与词义",
          outline: "根据内容判断或推论；根据上下文推测词义",
          plain: "推断题要「有据可推」，不能凭空脑补。词义题看上下句的同义、反义或举例。",
          steps: [
            "推断：找原文依据句，选项必须是原文的必然延伸。",
            "词义：看破折号、that is、同位语、转折 but/however。",
            "作者态度：注意评价性形容词与情态动词。"
          ],
          example: "The word \"it\" in paragraph 2 refers to ______.（前文某名词）",
          answer: "回看前一句与它逻辑最近的名词，保持单复数与人称一致。",
          warn: "推断过头；代词指代看错单复数；态度题把客观当褒义。",
          examTip: "口诀：推断不越界；代词往前找；but 后是重点。",
          relatedFormula: "英译汉技巧",
          level: "强化",
          minutes: 9
        }
      ]
    },
    {
      chapter: "翻译",
      outline: "英译汉：准确识别核心词汇与基础语法、正确理解句意；汉译英：用恰当词汇搭配与正确语法组织句子，译文连贯、符合英语思维。",
      points: [
        {
          id: "LB-E-13",
          name: "英译汉：定语从句与长句拆分",
          outline: "英译汉准确识别核心词汇与基础语法、正确理解句意",
          plain: "英语长句先找主干（主谓宾），从句一层层剥离。定语从句短的前置「……的」，长的独立成句。",
          steps: [
            "划出主干，忽略插入语、同位语。",
            "定语从句：短的放名词前译成「……的」；长的另起一句。",
            "按汉语习惯调整语序，补出省略主语。"
          ],
          example: "The man who is talking to our teacher is my uncle.",
          answer: "正在和我们老师说话的那个人是我叔叔。",
          warn: "定语堆在名词前导致译文过长；漏译关系词；语序完全英式。",
          examTip: "口诀：先主干后修饰；「的」字短语前置，长从句拆句。",
          relatedFormula: "英译汉技巧",
          level: "强化",
          minutes: 9
        },
        {
          id: "LB-E-14",
          name: "英译汉：被动与形式主语",
          outline: "英译汉准确理解句意、译文通顺",
          plain: "英语爱用被动和形式主语 it；汉语多主动。译时常常要把宾语提前当主语。",
          steps: [
            "被动：无 by 短语可译「受到、得到、被」，或转主动「人们认为……」。",
            "It is + adj + to do：译成「做某事是……的」，to do 提前。",
            "it 作形式主语/宾语时，真正内容是后面的从句或不定式。"
          ],
          example: "It is important to learn English well.",
          answer: "学好英语很重要。（把 to learn 提到句首）",
          warn: "译成「它是重要的去学英语」；被动硬译成「被」不自然；it 指代不明。",
          examTip: "口诀：形式主语，真主后移译前提；被动可转「人们/我们」。",
          relatedFormula: "英译汉技巧",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-E-15",
          name: "汉译英：主干搭建",
          outline: "汉译英用恰当词汇搭配与正确语法组织句子",
          plain: "先搭「主+谓+宾」骨架，再加定语状语。时态和主谓一致是扣分重灾区。",
          steps: [
            "确定主语和谓语动词，写出主句。",
            "补定语（…的）用形容词/定语从句；状语放句末或用从句。",
            "检查时态、单复数、冠词、介词。"
          ],
          example: "他每天早上 6 点起床。",
          answer: "He gets up at 6 every morning.",
          warn: "漏第三人称单数 -s；时间状语位置奇怪；逐字对译导致中式英语。",
          examTip: "口诀：先主谓宾，再修饰；every/morning 用一般现在；三单要加 s。",
          relatedFormula: "汉译英技巧",
          level: "基础",
          minutes: 9
        },
        {
          id: "LB-E-16",
          name: "汉译英：高频句型",
          outline: "译文连贯、符合英语思维",
          plain: "背熟十几个万能句型，考场直接套：It is necessary that… / There is no doubt that… / not only…but also…",
          steps: [
            "识别句子类型：建议、原因、比较、存在、目的。",
            "套对应句型，填入关键词汇。",
            "用连接词使句子连贯：because, although, so that, in order to。"
          ],
          example: "我们应该保护环境。",
          answer: "We should protect the environment. / It is necessary for us to protect the environment.",
          warn: "情态动词后多加 to；there be 与 have 混用；连接词重复（because…so）。",
          examTip: "口诀：建议用 should；必要用 It is necessary for sb to；存在用 There be。",
          relatedFormula: "汉译英技巧",
          level: "强化",
          minutes: 9
        }
      ]
    },
    {
      chapter: "写作",
      outline: "根据要求撰写不少于 80 词的应用文（通知/信函等），语句通顺、语篇连贯、结构完整、文体规范。",
      points: [
        {
          id: "LB-E-17",
          name: "通知写作",
          outline: "应用文（通知）语篇连贯、结构完整、文体规范",
          plain: "通知=标题 + 正文（事由、时间、地点、参加者、要求）。语言直接，多用祈使句和一般将来。",
          steps: [
            "写标题 Notice，下写发布单位和日期（可选）。",
            "第一句交代活动（There will be… / We are going to…）。",
            "依次写清 time、place、participants、what to bring；结尾欢迎参加。"
          ],
          example: "写一则英语角通知：本周五晚 7 点，图书馆一楼，欢迎参加。",
          answer: "Notice: There will be an English Corner this Friday evening. It starts at 7 p.m. on the first floor of the library. All students are welcome.",
          warn: "漏时间地点；格式像书信（写 Dear…）；字数不足 80 词。",
          examTip: "口诀：通知无称呼；五要素齐全；一般将来 + 一般现在说明安排。",
          relatedFormula: "写作模板句（图表/观点/书信）",
          level: "基础",
          minutes: 10
        },
        {
          id: "LB-E-18",
          name: "书信写作",
          outline: "应用文（信函）结构完整、文体规范",
          plain: "书信结构：Dear…，正文（写信目的—展开—希望），结尾 Yours，署名。语气正式但不僵硬。",
          steps: [
            "开头：I am writing to…（感谢/申请/邀请/投诉）。",
            "正文 2–3 句展开原因、细节、请求。",
            "结尾：I am looking forward to your reply. + Yours sincerely, + 名字。"
          ],
          example: "写一封申请参加志愿者活动的信（80 词以上）。",
          answer: "Dear Sir/Madam, I am writing to apply for the volunteer job. I am a student and I have time on weekends. I am patient and good with people. I hope to get the chance. I am looking forward to your reply. Yours sincerely, Li Hua.",
          warn: "漏称呼或落款；把正式信写成口语；忘记写信目的。",
          examTip: "口诀：目的一句先写；展开两点足够；looking forward 收尾。",
          relatedFormula: "写作模板句（图表/观点/书信）",
          level: "强化",
          minutes: 12
        },
        {
          id: "LB-E-19",
          name: "写作高分句型与连接",
          outline: "语句通顺、语篇连贯",
          plain: "用连接词和几个亮点句型提升档次：First, Second, What's more, In a word；强调句、感叹句适量用。",
          steps: [
            "列提纲：开头点题—中间 2 点—结尾总结。",
            "每点用连接词开头，句式避免全是一般简单句。",
            "检查字数、时态一致、大小写和标点。"
          ],
          example: "用两点理由写「学英语很重要」。",
          answer: "First, English helps us communicate with people from other countries. Second, it is useful for our future jobs. In a word, learning English is important.",
          warn: "全文无连接词；句句 I think；字数不足或严重超纲。",
          examTip: "口诀：三段式；First/Second/In a word；写完数词数。",
          relatedFormula: "写作模板句（图表/观点/书信）",
          level: "强化",
          minutes: 10
        },
        {
          id: "LB-E-20",
          name: "写作常见扣分点",
          outline: "语句通顺、文体规范",
          plain: "改卷先看有没有硬伤：拼写、时态、主谓、字数、格式。避免硬伤比炫技更重要。",
          steps: [
            "写完先查时态是否统一，主谓是否一致。",
            "查拼写高危词：environment、necessary、opportunity、beginning。",
            "查格式：通知/书信是否用对；大小写与标点是否完整。"
          ],
          example: "改错：He don't like play football.",
          answer: "He doesn't like playing football.（doesn't + like + doing）",
          warn: "逗号拼接两个完整句；冠词乱加；卷面涂改过多。",
          examTip: "口诀：宁写简单正确句，不写复杂错误句。检查五项：时、主、拼、数、式。",
          relatedFormula: "写作模板句（图表/观点/书信）",
          level: "冲刺",
          minutes: 8
        },
        {
          id: "LB-E-21",
          name: "强调句和倒装句",
          outline: "It is/was…that 强调结构；否定词前置引起的部分倒装",
          plain: "强调句：把要强调的部分放进 It is/was…that 中间。倒装：否定词开头时，把助动词提到主语前。",
          steps: [
            "强调句：It is/was + 被强调部分 + that/who + 其余；强调人可用 who，其余一律 that。",
            "判别：去掉 It is/was 和 that 后句子仍完整，才是强调句。",
            "部分倒装：not only…but also 前倒后不倒（前半句倒装）。",
            "部分倒装：not until、hardly…when、no sooner…than 主倒从不倒（主句倒装）。",
            "as/though 让步倒装：把表语/状语提到句首（Young as he is）。"
          ],
          example: "It was in this small village ______ I spent my childhood.（that / which / where / when）",
          answer: "that。强调地点状语，强调句固定用 that，不能用 where。",
          warn: "地点状语也用 that（不用 where）；not only 后忘记倒装；hardly 与 when 搭配、no sooner 与 than 搭配不要混。",
          examTip: "口诀：强调 that 通吃；前倒后不倒，主倒从不倒。",
          relatedFormula: "强调句 It is…that",
          level: "冲刺",
          minutes: 10
        },
        {
          id: "LB-E-22",
          name: "感叹句、祈使句、反意疑问句",
          outline: "How/What 感叹；祈使句及反意疑问；特殊主语的反意疑问",
          plain: "How 修饰形/副，What 修饰名词；祈使句反意用 will you；反意疑问看前面主语。",
          steps: [
            "感叹：How + 形容词/副词 + 主谓；What (a/an) + 形容词 + 名词 + 主谓。",
            "复数名词、不可数名词前用 What（What great changes / What good advice）。",
            "祈使句：肯定用 will you/won't you；否定 Don't… 一律 will you；Let's…shall we。",
            "反意：everyone/nobody 等用 they；this/something 用 it；动名词、不定式用 it。",
            "I wish… 用 may I；并列句与最近的分句主谓一致。"
          ],
          example: "Don't forget to turn off the lights, ______?（will you / won't you / do you）",
          answer: "will you。否定祈使句 Don't… 的反意疑问句一律用 will you。",
          warn: "Don't 后误用 won't you；不可数名词前误用 How；Let's 与 Let us 混淆（前者 shall we，后者 will you）。",
          examTip: "口诀：How 形副 What 名；否定祈使 will you；Let's shall we。",
          relatedFormula: "感叹句与反意疑问句",
          level: "强化",
          minutes: 8
        }
      ]
    }
  ],
  "电工电子技术基础": [
    {
      chapter: "电路基本概念",
      outline: "电流/电压/电位/电功率定义；理想电压源、电流源特性；万用表测量电阻、电压、电流。",
      points: [
        {
          id: "LB-EE-01",
          name: "电流、电压与电位",
          outline: "电流/电压/电位定义",
          plain: "电流是电荷流动（单位 A），电压是两点电位之差（单位 V），电位是某点对参考点的电压。三者别混。",
          steps: [
            "电流方向：规定正电荷移动方向；大小 I=Q/t。",
            "电压 U_AB=φ_A−φ_B，与路径无关。",
            "计算前标参考方向，方向与假设一致为正，相反为负。"
          ],
          example: "若 φ_A=5V，φ_B=2V，求 U_AB。",
          answer: "U_AB=φ_A−φ_B=5−2=3V。",
          warn: "电压与电位混为一谈；电流参考方向搞反导致符号错；单位 mA/μA 换算错。",
          examTip: "口诀：电流看流量，电压看落差，电位看对地。",
          relatedFormula: "欧姆定律",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-EE-02",
          name: "电功率",
          outline: "电功率定义",
          plain: "P=UI=I²R=U²/R。正值吸收功率，负值发出功率。功率单位 W。",
          steps: [
            "选公式：已知 U、I 用 P=UI；已知 I、R 用 I²R。",
            "算出数值后看关联参考方向，判断吸收/发出。",
            "注意单位统一（V、A、W；kΩ 与 mA 常配套）。"
          ],
          example: "电阻 R=10Ω，电流 I=2A，求功率。",
          answer: "P=I²R=4×10=40W（电阻吸收功率）。",
          warn: "额定电压与实际电压混用；把 P=UI 用于非关联方向；单位不统一。",
          examTip: "口诀：P=UI 万能；电阻总吸热；电源可能发也可能吸。",
          relatedFormula: "电功率",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-EE-03",
          name: "理想电压源与电流源",
          outline: "理想电压源、电流源特性",
          plain: "理想电压源：两端电压恒定，电流由外电路决定。理想电流源：电流恒定，电压由外电路决定。",
          steps: [
            "电压源内阻为 0，端电压=电动势（或给定值）。",
            "电流源内阻无穷大，输出电流恒定。",
            "实际电压源=理想电压源串联电阻；实际电流源=理想电流源并联电阻，可等效互换。"
          ],
          example: "理想 10V 电压源接 5Ω 电阻，电流多少？",
          answer: "I=U/R=10/5=2A。电压源电压不变，电流由负载决定。",
          warn: "认为电压源电流也固定；电流源可以短路；等效互换时电阻串并联位置弄反。",
          examTip: "口诀：压源定压不定流，流源定流不定压；串压并流可互换。",
          relatedFormula: "理想电压源与电流源",
          level: "强化",
          minutes: 7
        },
        {
          id: "LB-EE-04",
          name: "万用表测量",
          outline: "万用表测量电阻、电压、电流",
          plain: "测电压并联、测电流串联、测电阻要断电。选错档位容易烧表。",
          steps: [
            "测电压：表并联在被测元件两端，选合适量程。",
            "测电流：表串联进电路，先估电流大小。",
            "测电阻：电路断电，调零后测量，手勿碰表笔金属部分。"
          ],
          example: "用万用表测电阻时，被测电路仍通电，会怎样？",
          answer: "可能烧表或测出错误数值。测电阻必须断电。",
          warn: "电流档测电压；带电测电阻；读错量程（看错刻度）。",
          examTip: "口诀：压并流串电阻断电；先估程再选档。",
          relatedFormula: "万用表测电阻/电压/电流",
          level: "基础",
          minutes: 5
        }
      ]
    },
    {
      chapter: "直流电路",
      outline: "戴维南定理与叠加定理；基尔霍夫电压/电流定律（KVL/KCL）；电阻串并联分析。",
      points: [
        {
          id: "LB-EE-05",
          name: "欧姆定律与全电路",
          outline: "直流电路基本定律",
          plain: "部分电路 U=IR；全电路 I=E/(R+r)。电源内阻会分压。",
          steps: [
            "标出 U、I、R 及方向。",
            "部分电路直接 I=U/R；含内阻用 I=E/(R+r)。",
            "检查单位与符号，必要时分段计算再叠加。"
          ],
          example: "E=12V，r=1Ω，R=5Ω，求电流。",
          answer: "I=E/(R+r)=12/6=2A。",
          warn: "忽略内阻；U=IR 中 U 是电阻两端电压不是电动势；开路时 I=0 但 U=E。",
          examTip: "口诀：U=IR；全电路除以 R+r。开路压等于 E，短路流等于 E/r。",
          relatedFormula: "全电路欧姆定律",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-EE-06",
          name: "KCL 与 KVL",
          outline: "基尔霍夫电压/电流定律（KVL/KCL）",
          plain: "KCL：流入节点的电流代数和为 0。KVL：沿回路电压降代数和为 0。它们是复杂电路的通用武器。",
          steps: [
            "选节点，设支路电流方向，列 KCL：ΣI=0。",
            "选回路，定绕行方向，列 KVL：ΣU=0（升=降）。",
            "解方程组，若电流为负说明实际方向与假设相反。"
          ],
          example: "节点两入一出：I₁=2A，I₂=3A 流入，求流出 I₃。",
          answer: "I₃=I₁+I₂=5A。",
          warn: "绕行方向与电压方向符号不统一；电阻电压漏写 IR；解方程符号错。",
          examTip: "口诀：节点进出相等；回路升降平衡。方向先假设，负号纠方向。",
          relatedFormula: "基尔霍夫电流定律（KCL）",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-EE-07",
          name: "电阻串并联与分压分流",
          outline: "电阻串并联分析",
          plain: "串联分压：电压与电阻成正比；并联分流：电流与电导成正比。",
          steps: [
            "串联 R=R₁+R₂，U₁=R₁/(R₁+R₂)U。",
            "并联 1/R=1/R₁+1/R₂，I₁=R₂/(R₁+R₂)I。",
            "混联先局部等效，逐步化简。"
          ],
          example: "R₁=2Ω 与 R₂=3Ω 串联接 10V，求 R₁ 电压。",
          answer: "U₁=2/5×10=4V。",
          warn: "并联公式误写成 R=R₁+R₂；分压分流公式分子写反；忽略电流相等。",
          examTip: "口诀：串分压比分阻，并分流比分导。",
          relatedFormula: "串联电阻与分压",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-EE-08",
          name: "叠加定理",
          outline: "叠加定理",
          plain: "多个独立源共同作用时，响应=各电源单独作用之和。电压源短路，电流源开路。",
          steps: [
            "保留一个源，其余电压源短路、电流源开路。",
            "分别计算待求量。",
            "代数叠加（注意方向，反向相减）。"
          ],
          example: "两电源共同作用得 I=3A，源 1 单独 I₁=5A，求源 2 单独贡献。",
          answer: "I₂=I−I₁=3−5=−2A（方向与假设相反）。",
          warn: "受控源不能单独置零；功率不能直接叠加；漏掉符号。",
          examTip: "口诀：压短流开；响应可叠加，功率不可。",
          relatedFormula: "叠加定理",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-EE-09",
          name: "戴维南定理",
          outline: "戴维南定理",
          plain: "任何线性二端网络可等效成一个电压源 U_oc 串联 R_eq。求负载电流最方便。",
          steps: [
            "断开负载，求开路电压 U_oc。",
            "独立源置零（压短流开），求等效内阻 R_eq。",
            "接回负载：I=U_oc/(R_eq+R_L)。"
          ],
          example: "开路 12V，内阻 4Ω，接 8Ω 负载，求 I。",
          answer: "I=12/(4+8)=1A。",
          warn: "求 R_eq 时忘记置零独立源；开路电压方向反；受控源处理错误。",
          examTip: "口诀：先开路电压，后等效电阻，再接负载。负载匹配 R_L=R_eq 时功率最大。",
          relatedFormula: "戴维南定理",
          level: "冲刺",
          minutes: 10
        }
      ]
    },
    {
      chapter: "单相正弦交流电路",
      outline: "正弦交流电三要素；电容/电感伏安关系；容抗感抗概念；正弦波形分析。",
      points: [
        {
          id: "LB-EE-10",
          name: "正弦交流三要素",
          outline: "正弦交流电三要素",
          plain: "最大值、角频率、初相位合称三要素。有效值=最大值/√2。",
          steps: [
            "由波形或表达式读出 U_m、ω、φ。",
            "有效值 U=U_m/√2≈0.707 U_m。",
            "频率 f=ω/2π，周期 T=1/f。"
          ],
          example: "u=311 sin(314t+30°) V，求有效值与频率。",
          answer: "U=311/√2≈220V；ω=314=2πf ⇒ f=50Hz。",
          warn: "最大值与有效值混用；弧度与角度混用；初相符号看反。",
          examTip: "口诀：有效值除以根号二；ω=2πf。",
          relatedFormula: "正弦交流三要素",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-EE-11",
          name: "电容电感与容抗感抗",
          outline: "电容/电感伏安关系；容抗感抗概念",
          plain: "电容通交隔直，X_C=1/ωC；电感通直阻交，X_L=ωL。频率越高容抗越小、感抗越大。",
          steps: [
            "写出 X_L=2πfL，X_C=1/2πfC。",
            "纯电容：电压滞后电流 90°；纯电感：电压超前电流 90°。",
            "计算 I=U/X，注意用有效值。"
          ],
          example: "f=50Hz，C=100μF，求 X_C。",
          answer: "X_C=1/(2π×50×100×10^{-6})≈31.8Ω。",
          warn: "μF 忘换算；电容电感相位关系记反；直流稳态电容开路、电感短路。",
          examTip: "口诀：感超容滞；直流稳态电容断、电感通。",
          relatedFormula: "电容与电感基本特性",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-EE-12",
          name: "阻抗与相量",
          outline: "阻抗概念与正弦电路分析",
          plain: "阻抗 Z=R+jX，把电阻电抗合成一个复数「电阻」。U=IZ 仍成立（相量意义下）。",
          steps: [
            "写 Z=R+j(X_L−X_C)。",
            "阻抗模 |Z|=√(R²+X²)，相角 φ=arctan(X/R)。",
            "I=U/|Z|，功率因数 cos φ=R/|Z|。"
          ],
          example: "R=3Ω，X_L=4Ω，X_C=0，求 |Z|。",
          answer: "|Z|=√(3²+4²)=5Ω。",
          warn: "感抗容抗忘记相减；阻抗模与电阻混淆；功率因数算错。",
          examTip: "口诀：阻抗勾股定理；感减容；cos φ 是功率因数。",
          relatedFormula: "阻抗与相量",
          level: "冲刺",
          minutes: 9
        }
      ]
    },
    {
      chapter: "动态电路",
      outline: "RC、RL 充放电规律；时间常数概念；换路定律。",
      points: [
        {
          id: "LB-EE-13",
          name: "RC 暂态与时间常数",
          outline: "RC 充放电规律；时间常数",
          plain: "电容电压不能突变。充电按指数上升，放电按指数下降，时间常数 τ=RC 决定快慢。",
          steps: [
            "换路定律：u_C(0⁺)=u_C(0⁻)（电容电压不能跳变）。",
            "充电：u_C=U(1−e^{−t/τ})；放电：u_C=U_0 e^{−t/τ}，τ=RC。",
            "t=τ 时完成约 63.2%；t=5τ 视为结束。"
          ],
          example: "R=1kΩ，C=1μF，求 τ。",
          answer: "τ=RC=1000×10^{−6}=0.001s=1ms。",
          warn: "把电容电压当可突变；τ 单位换算错；充电放电公式用反。",
          examTip: "口诀：电容压不突变；τ=RC；一τ 六成三，五τ 算充满。",
          relatedFormula: "RC 暂态（电容充放电）",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-EE-14",
          name: "RL 暂态与换路定律",
          outline: "RL 充放电；换路定律",
          plain: "电感电流不能突变。换路瞬间 i_L 连续，u_L 可突变。τ=L/R。",
          steps: [
            "换路定律：i_L(0⁺)=i_L(0⁻)。",
            "时间常数 τ=L/R。",
            "电流按指数变化：i=I(1−e^{−t/τ})（接通）或 i=I_0 e^{−t/τ}（断开）。"
          ],
          example: "L=2H，R=10Ω，求 τ。",
          answer: "τ=L/R=2/10=0.2s。",
          warn: "电感电流突变；τ 公式写成 RC；断开电感可能产生高压。",
          examTip: "口诀：电感流不突变；τ=L/R。",
          relatedFormula: "RL 暂态（电感通断）",
          level: "强化",
          minutes: 8
        }
      ]
    },
    {
      chapter: "二极管与直流稳压电源",
      outline: "半导体与二极管基本知识；二极管测量；二极管简单应用；线性直流稳压电源分析。",
      points: [
        {
          id: "LB-EE-15",
          name: "二极管特性与测量",
          outline: "半导体与二极管基本知识；二极管测量",
          plain: "二极管单向导电：正向导通（硅约 0.7V，锗约 0.3V），反向截止。",
          steps: [
            "判断偏置：阳极电位高于阴极为正偏，导通。",
            "正偏压降：硅 0.7V，锗 0.3V；理想模型为 0V。",
            "万用表二极管档：红表笔接阳极显示导通压降，反接显示溢出。"
          ],
          example: "硅二极管正向导通压降约为多少？",
          answer: "约 0.7V（锗管约 0.3V）。",
          warn: "硅锗压降记混；反向击穿与普通截止不分；测量时未断电。",
          examTip: "口诀：硅 0.7 锗 0.3；正向导反向断。",
          relatedFormula: "二极管单向导电",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-EE-16",
          name: "整流滤波与稳压",
          outline: "二极管简单应用；线性直流稳压电源分析",
          plain: "桥式整流把交流变脉动直流；电容滤波变平滑；稳压管/稳压电路保持输出稳定。",
          steps: [
            "桥式整流：四只二极管，每半周导通两只，输出全波脉动。",
            "电容滤波：并联大电容，充放电减小纹波。",
            "稳压：稳压管反向击穿区工作；线性稳压器调整管压降大但输出稳。"
          ],
          example: "单相桥式整流中，每个二极管一个周期导通多少度？",
          answer: "180°（半周）。四个管轮流两两导通。",
          warn: "整流管数量记成 2；滤波电容极性接反；空载电压按 1.2U₂ 估。",
          examTip: "口诀：桥式四管两两通；小电流电容滤波；稳压管反接。",
          relatedFormula: "二极管单向导电",
          level: "强化",
          minutes: 8
        }
      ]
    },
    {
      chapter: "三极管电路",
      outline: "三极管基本知识与测量；开关电路、共发射极/共集电极放大电路分析。",
      points: [
        {
          id: "LB-EE-17",
          name: "三极管结构与电流关系",
          outline: "三极管基本知识",
          plain: "三极管有基极 B、集电极 C、发射极 E。I_E=I_C+I_B，I_C≈β I_B，起放大作用。",
          steps: [
            "认管脚：发射极箭头方向判断 NPN/PNP。",
            "电流关系：I_E=I_C+I_B，I_C=β I_B。",
            "工作区：放大（发射结正偏集电结反偏）；饱和；截止。"
          ],
          example: "已知 I_B=20μA，β=50，求 I_C。",
          answer: "I_C=β I_B=50×20=1000μA=1mA。",
          warn: "把 I_C=β I_B 用到饱和区；NPN/PNP 电源极性接反；β 与 α 混淆。",
          examTip: "口诀：E 等于 C 加 B；I_C 是 I_B 的 β 倍。",
          relatedFormula: "三极管放大与开关",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-EE-18",
          name: "共射与共集放大电路",
          outline: "共发射极/共集电极放大电路分析",
          plain: "共射：电压放大倍数大、输出反相；共集（射极输出器）：电压放大倍数约 1，输入电阻大，带负载强。",
          steps: [
            "共射：A_u≈−(β·R_C)/r_be，输出与输入反相。",
            "共集：A_u≈1，同相，常作输入/输出级。",
            "静态工作点 Q 要合适，避免饱和截止失真。"
          ],
          example: "共射电路输出与输入相位关系？",
          answer: "反相（相位差 180°）。",
          warn: "共射共集倍数记反；静态工作点不稳；电容隔直通交作用不清。",
          examTip: "口诀：共射反相放大；共集跟随约 1。",
          relatedFormula: "三极管放大与开关",
          level: "强化",
          minutes: 8
        }
      ]
    },
    {
      chapter: "运算放大器",
      outline: "运放基本知识；非线性电路（电压比较器）；线性电路（同相/反相/加法/减法/差动放大器）。",
      points: [
        {
          id: "LB-EE-19",
          name: "运放线性应用",
          outline: "同相/反相/加法/减法/差动放大器",
          plain: "理想运放：虚短（U₊=U₋）、虚断（输入电流为 0）。反相放大有负号，同相没有。",
          steps: [
            "用虚短虚断列方程。",
            "反相：u_o=−R_f/R_1u_i；同相：u_o=(1+R_f/R_1)u_i。",
            "加法/减法按叠加原理写输出表达式。"
          ],
          example: "反相放大 R1=2kΩ，Rf=10kΩ，求电压放大倍数。",
          answer: "A_u=−R_f/R_1=−5。",
          warn: "反相漏负号；同相多写了负号；虚短条件（线性区）不成立仍用。",
          examTip: "口诀：反相带负号，同相加一；虚短虚断先写上。",
          relatedFormula: "运算放大器（反相放大）",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-EE-20",
          name: "电压比较器",
          outline: "非线性电路（电压比较器）",
          plain: "比较器工作在开环或正反馈：U₊>U₋ 输出高电平，反之低电平。可做过零比较、滞回比较。",
          steps: [
            "找出同相端与反相端电压。",
            "比较大小，确定输出高/低（接近电源轨）。",
            "加正反馈形成滞回，提高抗干扰。"
          ],
          example: "反相输入端接 2V 参考，同相端 3V，输出？",
          answer: "U₊>U₋，输出高电平。",
          warn: "仍用虚短分析比较器；忽略参考电压；输出幅值按电源算。",
          examTip: "口诀：比较器不虚短；谁高谁决定输出。",
          relatedFormula: "电压比较器",
          level: "冲刺",
          minutes: 7
        }
      ]
    },
    {
      chapter: "逻辑代数与门电路",
      outline: "逻辑代数基本知识；逻辑门电路基本知识。",
      points: [
        {
          id: "LB-EE-21",
          name: "逻辑代数基本公式",
          outline: "逻辑代数基本知识",
          plain: "与=乘，或=加，非=取反。掌握 0-1 律、重叠律、吸收律、德摩根律。",
          steps: [
            "写真值表验证基本公式。",
            "化简：A+AB=A；A+ĀB=A+B；(A+B)(A+C)=A+BC。",
            "德摩根：¬(A+B)=Ā·B̄，¬(A·B)=Ā+B̄。"
          ],
          example: "化简 A+ĀB。",
          answer: "A+B。因为 A+ĀB=(A+Ā)(A+B)=A+B。",
          warn: "把逻辑加当算术加；德摩根长杠拆开忘反号；吸收律记混。",
          examTip: "口诀：与乘或加非取反；摩根拆杠要变号。",
          relatedFormula: "逻辑代数基本公式",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-EE-22",
          name: "基本逻辑门",
          outline: "逻辑门电路基本知识",
          plain: "与门全 1 出 1；或门有 1 出 1；非门取反；与非、或非、异或按定义记。",
          steps: [
            "列真值表：与全 1 才 1，或有 1 就 1。",
            "与非=与后再非；或非=或后再非。",
            "异或：相同出 0，不同出 1。"
          ],
          example: "与非门输入全 1，输出？",
          answer: "0。先与得 1，再非得 0。",
          warn: "与非门功能记反；异或与同或不分；符号图看错。",
          examTip: "口诀：与非全 1 出 0；或非有 1 出 0；异或相同为 0。",
          relatedFormula: "组合逻辑分析与设计",
          level: "基础",
          minutes: 6
        }
      ]
    },
    {
      chapter: "组合逻辑电路",
      outline: "简单组合逻辑电路分析与设计。",
      points: [
        {
          id: "LB-EE-23",
          name: "组合逻辑分析与设计",
          outline: "简单组合逻辑电路分析与设计",
          plain: "分析：由电路写表达式→化简→真值表。设计：由需求列真值表→写表达式→化简→画图。",
          steps: [
            "分析：逐级写门电路逻辑式，到输出。",
            "化简表达式，必要时卡诺图。",
            "设计：列真值表，用最小项写与或式，再画门电路。"
          ],
          example: "设计 A、B 相异时输出 1 的电路。",
          answer: "Y=A⊕B（异或门）。",
          warn: "表达式漏非；真值表行数 2ⁿ 写错；设计时未化简导致电路复杂。",
          examTip: "口诀：分析自底向上写式；设计自上而下列表。",
          relatedFormula: "组合逻辑分析与设计",
          level: "强化",
          minutes: 9
        }
      ]
    },
    {
      chapter: "时序逻辑电路",
      outline: "RS、JK、D 触发器基本知识；简单时序逻辑电路分析。",
      points: [
        {
          id: "LB-EE-24",
          name: "触发器与简单时序电路",
          outline: "RS、JK、D 触发器基本知识；简单时序逻辑电路分析",
          plain: "触发器存 1 位二进制。D 触发器：Q_{n+1}=D；JK 触发器功能全；RS 要避免约束。",
          steps: [
            "认触发器类型与触发边沿（上升/下降）。",
            "D：次态等于 D；JK：J=K=1 时翻转，J=K=0 保持。",
            "时序分析：列状态表，按时钟逐拍推演。"
          ],
          example: "D 触发器 D=1，时钟有效沿到来后 Q？",
          answer: "Q_{n+1}=1。",
          warn: "把 JK 与 D 功能混；忽略触发沿；RS 的 R=S=1 非法状态。",
          examTip: "口诀：D 跟随；JK 全 1 翻转；时钟沿才动作。",
          relatedFormula: "触发器（基本 RS / JK / D）",
          level: "冲刺",
          minutes: 9
        }
      ]
    }
  ],
  "C语言程序设计": [
    {
      chapter: "程序设计与C语言",
      outline: "计算机程序与语言概述；C 程序结构；运行 C 程序的步骤与方法。",
      points: [
        {
          id: "LB-C-01",
          name: "C 程序结构与上机步骤",
          outline: "计算机程序与语言概述；C 程序结构；运行 C 程序的步骤",
          plain: "一个 C 程序由若干函数组成，必须有且仅有一个 main。执行从 main 开始，到 main 结束。",
          steps: [
            "识别头文件 #include，主函数 int main() { … return 0; }。",
            "上机步骤：编辑→编译→连接→运行。",
            "编译查语法，连接查符号，运行才看结果。"
          ],
          example: "下列哪个是合法的 C 程序入口？",
          answer: "int main(void) { … return 0; }。main 是唯一入口。",
          warn: "写成 Main 或 main 以外的入口；漏 return；把注释当代码执行。",
          examTip: "口诀：一程序一 main；编辑编译连接运行四步走。",
          relatedFormula: "程序结构与编译链接",
          level: "基础",
          minutes: 6
        }
      ]
    },
    {
      chapter: "数据表现与运算",
      outline: "常量变量定义；整型/字符型/浮点型数据使用；数据类型转换。",
      points: [
        {
          id: "LB-C-02",
          name: "数据类型与常量变量",
          outline: "常量变量定义；整型/字符型/浮点型数据",
          plain: "变量先定义类型再使用。int 整型、float/double 浮点、char 字符。常量如 3、3.14、'A'。",
          steps: [
            "选类型：整数 int；小数 double；字符 char。",
            "定义：类型 名字=初值；变量名不能以数字开头。",
            "注意范围与字长：int 通常 4 字节，char 1 字节。"
          ],
          example: "以下哪个是合法变量名？（A. 3x B. int C. x3 D. x-3）",
          answer: "x3。A 以数字开头，B 是关键字，D 含减号。",
          warn: "把关键字当变量名；类型与数据不匹配；未初始化就读取。",
          examTip: "口诀：先定义后使用；标识符字母下划线开头。",
          relatedFormula: "数据类型与运算",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-C-03",
          name: "类型转换",
          outline: "数据类型转换",
          plain: "运算时类型会自动提升（char→int→float→double）。强制转换 (type)expr 只改本次运算。",
          steps: [
            "看表达式中最高类型，整体向它看齐。",
            "赋值时右侧结果转成左侧类型（可能截断）。",
            "强制：(int)3.7 得 3；(double)1/2 得 0.5。"
          ],
          example: "(double)1/2 + (int)3.7 的值是多少？",
          answer: "0.5 + 3 = 3.5。",
          warn: "整数除法 1/2 得 0；强制只作用一项；char 参与运算按 ASCII。",
          examTip: "口诀：混合类型向高看齐；(double)1/2 才是 0.5。",
          relatedFormula: "类型转换",
          level: "强化",
          minutes: 7
        }
      ]
    },
    {
      chapter: "顺序程序设计",
      outline: "运算符与表达式；基本 C 语句；数据输入输出。",
      points: [
        {
          id: "LB-C-04",
          name: "运算符与表达式",
          outline: "运算符与表达式",
          plain: "算术、关系、逻辑、赋值、逗号运算符。优先级与结合性决定计算顺序。",
          steps: [
            "先算术，再关系，再逻辑，最后赋值。",
            "a++ 与 ++a：前者先用后加，后者先加后用。",
            "逻辑与 &&、或 || 有短路：&& 前假不算后；|| 前真不算后。"
          ],
          example: "a=3; b=a++; 则 b=？a=？",
          answer: "b=3，a=4。先赋后加。",
          warn: "++ 前后缀混淆；= 与 == 不分；短路后表达式不执行。",
          examTip: "口诀：先用后加 a++；等于比较是 ==；短路优先。",
          relatedFormula: "运算符优先级与结合性",
          level: "强化",
          minutes: 7
        },
        {
          id: "LB-C-05",
          name: "数据输入输出",
          outline: "数据输入输出",
          plain: "printf 输出、scanf 输入。格式符：%d int，%f float，%lf double，%c char，%s 字符串。",
          steps: [
            "printf(\"%d\", x) 按格式输出。",
            "scanf(\"%d\", &x) 必须取地址。",
            "格式符与实参类型一一对应。"
          ],
          example: "scanf(\"%d\", x) 错在哪里？",
          answer: "应写 scanf(\"%d\", &x)。scanf 需要变量地址。",
          warn: "scanf 漏 &；%f 与 %lf 混；printf 格式符个数与参数个数不一致。",
          examTip: "口诀：scanf 一定加 &；格式符对类型。",
          relatedFormula: "常见输入输出格式",
          level: "基础",
          minutes: 6
        }
      ]
    },
    {
      chapter: "选择结构",
      outline: "关系/逻辑运算符与表达式；if 语句；条件运算符；switch 语句。",
      points: [
        {
          id: "LB-C-06",
          name: "if / else 语句",
          outline: "if 语句；条件运算符",
          plain: "if 后条件为真（非 0）执行。无大括号只控制紧跟的一条语句。",
          steps: [
            "写条件表达式，区分 = 与 ==。",
            "多分支用 else if 阶梯。",
            "条件运算符：a>b?a:b 是三目，相当于简写 if。"
          ],
          example: "if(a=b) 的含义是？",
          answer: "把 b 赋给 a，再判断 a 是否非 0。要比较应写 if(a==b)。",
          warn: "if 后误用赋值；无大括号只跟一条；else 与最近 if 配对。",
          examTip: "口诀：比较用 ==；大括号锁范围；三目：真取前假取后。",
          relatedFormula: "if / else 配对",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-C-07",
          name: "switch 语句",
          outline: "switch 语句",
          plain: "switch 对整型/字符表达式分支。case 后必须是常量，break 才跳出，否则贯穿。",
          steps: [
            "switch(表达式) 中表达式须为整型、字符型。",
            "case 常量表达式：… break;",
            "default 处理其它情况；每个分支结束最好 break。"
          ],
          example: "switch(1) { case 1: printf(\"A\"); case 2: printf(\"B\"); } 输出？",
          answer: "AB。case 1 无 break，贯穿执行 case 2。",
          warn: "case 后写变量；漏 break 贯穿；switch 用浮点型。",
          examTip: "口诀：case 必须常量；break 防贯穿。",
          relatedFormula: "switch 语句",
          level: "强化",
          minutes: 7
        }
      ]
    },
    {
      chapter: "循环结构",
      outline: "三种循环语句异同与使用；循环嵌套；break 与 continue。",
      points: [
        {
          id: "LB-C-08",
          name: "三种循环",
          outline: "三种循环语句异同与使用",
          plain: "for 已知次数；while 先判断后执行（可能 0 次）；do-while 先执行后判断（至少 1 次）。",
          steps: [
            "for(初值; 条件; 步进) 语句。",
            "while(条件) 先判断；do { } while(条件); 至少一次。",
            "选型：次数明确用 for；次数不明用 while。"
          ],
          example: "do-while 至少执行几次？",
          answer: "1 次。先执行循环体，再判断。",
          warn: "while 后多写分号死循环；for 三要素顺序错；do-while 漏分号。",
          examTip: "口诀：for 计数，while 预判，do-while 保底一次。",
          relatedFormula: "三种循环",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-C-09",
          name: "break、continue 与嵌套",
          outline: "循环嵌套；break 与 continue",
          plain: "break 跳出本层循环；continue 跳过本次进入下一次。嵌套循环要理清层。",
          steps: [
            "break：结束最内层循环（或 switch）。",
            "continue：跳过剩余语句，进入下一轮。",
            "嵌套：内外层变量与条件不要写混。"
          ],
          example: "内层 break 会跳出外层吗？",
          answer: "不会。只跳出最内层循环。",
          warn: "break 与 continue 功能对调；嵌套层数看错；循环变量未更新死循环。",
          examTip: "口诀：break 断本层，continue 跳本轮。",
          relatedFormula: "三种循环",
          level: "强化",
          minutes: 7
        }
      ]
    },
    {
      chapter: "数组",
      outline: "一维/二维数组定义与引用；字符数组。",
      points: [
        {
          id: "LB-C-10",
          name: "一维数组",
          outline: "一维数组定义与引用",
          plain: "数组是同类型元素的连续存储。下标从 0 到 n−1。",
          steps: [
            "定义：int a[10]; 合法下标 0..9。",
            "遍历用 for：for(i=0;i<n;i++)。",
            "常用算法：求和、最大值、排序。"
          ],
          example: "int a[4]; 可用下标是？",
          answer: "0–3。长度 4 的数组下标从 0 开始。",
          warn: "下标越界；定义长度与实际使用不符；数组整体赋值用 =。",
          examTip: "口诀：长度 n，下标 0 到 n−1。",
          relatedFormula: "数组与下标",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-C-11",
          name: "二维数组与字符数组",
          outline: "二维数组；字符数组",
          plain: "二维数组按行存储。字符数组存字符串，末尾有 '\\0'。",
          steps: [
            "int a[3][4]; 共 12 个元素，按行连续存放。",
            "字符数组：char s[]=\"hello\"; 含 '\\0' 共 6 字节。",
            "字符串函数：strlen 求长（不算 '\\0'），strcpy 拷贝。"
          ],
          example: "字符串结束符的 ASCII 值是？",
          answer: "0（即 '\\0'）。",
          warn: "strlen 与 sizeof 混；越界写 '\\0' 位置；把字符串当字符比较用 ==。",
          examTip: "口诀：字符数组末尾 '\\0'；strlen 不数 '\\0'。",
          relatedFormula: "字符串与字符数组",
          level: "强化",
          minutes: 7
        }
      ]
    },
    {
      chapter: "函数",
      outline: "函数定义调用与声明；嵌套与递归；数组作函数参数；局部/全局变量；编译预处理。",
      points: [
        {
          id: "LB-C-12",
          name: "函数定义与调用",
          outline: "函数定义调用与声明",
          plain: "函数=功能模块。定义在前调用在后，或先声明原型。实参传值给形参。",
          steps: [
            "写函数头：返回类型 函数名(参数表)。",
            "调用：函数名(实参)；注意返回值类型。",
            "定义在调用之后要写原型声明。"
          ],
          example: "int add(int a,int b){return a+b;} 调用 add(2,3) 结果？",
          answer: "5。",
          warn: "漏返回值；调用参数个数不对；函数原型分号漏写。",
          examTip: "口诀：先声明后调用；返回类型要匹配。",
          relatedFormula: "函数传参（值传递）",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-C-13",
          name: "递归函数",
          outline: "嵌套与递归",
          plain: "递归=自己调自己，必须有出口。无出口会栈溢出。",
          steps: [
            "写递归式：f(n) 与 f(n−1) 的关系。",
            "写终止条件（出口）。",
            "模拟几层，确认向出口收敛。"
          ],
          example: "int f(int n){return n<=1?1:n*f(n-1);} f(5)=？",
          answer: "120（5 的阶乘）。",
          warn: "没有出口；递归层数过深；忘记返回。",
          examTip: "口诀：递归三件套：递归式、出口、返回值。",
          relatedFormula: "递归",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-C-14",
          name: "数组作参数与变量作用域",
          outline: "数组作函数参数；局部/全局变量",
          plain: "数组传参传的是首地址，函数内可改原数组。局部变量函数内有效，全局变量全程有效。",
          steps: [
            "形参写 int a[] 或 int *a，再传长度。",
            "局部：函数内定义，外面不可见。",
            "全局：函数外定义；static 局部保持值。"
          ],
          example: "void f(int a[]){a[0]=1;} 调用后原数组会变吗？",
          answer: "会。传的是地址，修改了原数组元素。",
          warn: "以为数组传值拷贝；全局局部同名时内层覆盖外层；不传长度导致越界。",
          examTip: "口诀：数组传地址；局部遮全局。",
          relatedFormula: "数组作为函数参数",
          level: "强化",
          minutes: 8
        }
      ]
    },
    {
      chapter: "指针",
      outline: "指针变量定义引用；指针引用数组；指针引用字符串；指向函数的指针。",
      points: [
        {
          id: "LB-C-15",
          name: "指针基础",
          outline: "指针变量定义引用",
          plain: "指针存地址。*p 取值，&x 取地址。指针类型决定步长。",
          steps: [
            "定义：int *p; p=&x; 则 *p 等价 x。",
            "指针运算：p+1 走一个元素大小。",
            "空指针 NULL 表示不指向任何对象。"
          ],
          example: "int x=3,*p=&x; 则 *p=？",
          answer: "3。p 指向 x，*p 取 x 的值。",
          warn: "未初始化就解引用；*p 与 p 混；void* 直接算术运算。",
          examTip: "口诀：& 取址，* 取值；p+1 步长看类型。",
          relatedFormula: "指针基础",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-C-16",
          name: "指针与数组、字符串",
          outline: "指针引用数组；指针引用字符串",
          plain: "数组名是首地址。p=a 等价 p=&a[0]。字符串是指向 char 的指针。",
          steps: [
            "a[i] 等价 *(a+i)。",
            "遍历：for(p=a; p<a+n; p++)。",
            "字符串：char *s=\"hello\"; 比较用 strcmp，不用 ==。"
          ],
          example: "int a[5]={1,2,3,4,5}; *(a+2)=？",
          answer: "3。a+2 指向 a[2]，解引用得 3。",
          warn: "字符串用 == 比内容；指针越界；数组名当变量赋值。",
          examTip: "口诀：a[i]=*(a+i)；比串用 strcmp。",
          relatedFormula: "指针基础",
          level: "冲刺",
          minutes: 9
        }
      ]
    },
    {
      chapter: "构造数据类型",
      outline: "结构体变量/数组；共用体；枚举类型。",
      points: [
        {
          id: "LB-C-17",
          name: "结构体",
          outline: "结构体变量/数组",
          plain: "结构体把不同类型打包在一起。用 . 或 -> 访问成员。",
          steps: [
            "定义 struct Student { char name[20]; int age; };",
            "变量访问：s.age；指针访问：p->age。",
            "结构体可整体赋值，可作函数参数/返回。"
          ],
          example: "struct S{int a;} s,*p=&s; 写出 s.a 的指针形式。",
          answer: "p->a 或 (*p).a。",
          warn: "忘记 struct 关键字（C 中）；指针用 . 而不是 ->；结构体大小对齐不计。",
          examTip: "口诀：变量用点，指针用箭头。",
          relatedFormula: "结构体",
          level: "强化",
          minutes: 7
        },
        {
          id: "LB-C-18",
          name: "共用体与枚举",
          outline: "共用体；枚举类型",
          plain: "共用体所有成员共用同一段内存，大小=最大成员。枚举是命名的整型常量。",
          steps: [
            "union 成员同时只有一个有效，长度取最大。",
            "enum 默认从 0 编号，可指定。",
            "共用体与结构体对比记忆。"
          ],
          example: "union U{int a; char b;} 大小通常至少多少？",
          answer: "至少等于最大成员大小（如 int 为 4 字节）。",
          warn: "以为共用体成员同时有效；枚举当字符串；混用 union 与 struct。",
          examTip: "口诀：共用体叠罗汉取最大；枚举是整数常量。",
          relatedFormula: "结构体",
          level: "基础",
          minutes: 6
        }
      ]
    },
    {
      chapter: "文件",
      outline: "文件定义分类；打开关闭；顺序读写；随机读写。",
      points: [
        {
          id: "LB-C-19",
          name: "文件打开与关闭",
          outline: "文件定义分类；打开关闭",
          plain: "fopen 打开文件，fclose 关闭。模式：r 读、w 写、a 追加，加 b 为二进制。",
          steps: [
            "FILE *fp=fopen(\"a.txt\",\"r\");",
            "判断 fp 是否为 NULL，失败处理。",
            "用完 fclose(fp)。"
          ],
          example: "fopen 返回 NULL 说明什么？",
          answer: "打开失败（文件不存在、无权限等）。",
          warn: "不判空指针；w 模式清空原文件；忘记 fclose。",
          examTip: "口诀：打开先判空；用完必关闭；w 清空 a 追加。",
          relatedFormula: "文件读写",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-C-20",
          name: "文件顺序读写",
          outline: "顺序读写",
          plain: "fgetc/fputc 按字符，fputs/fgets 按行，fscanf/fprintf 格式化，fread/fwrite 二进制块。",
          steps: [
            "按需选函数：字符用 fgetc；文本行用 fgets。",
            "循环直到 EOF。",
            "二进制块用 fread/fwrite，注意大小与个数。"
          ],
          example: "从文本文件逐字符读入，循环条件是？",
          answer: "while((ch=fgetc(fp))!=EOF)。",
          warn: "EOF 判断写反；fscanf 格式与类型不符；二进制文件当文本读。",
          examTip: "口诀：读到 EOF 结束；文本用字符/行，二进制用块。",
          relatedFormula: "文件读写",
          level: "强化",
          minutes: 7
        }
      ]
    }
  ],
  "计算机网络基础": [
    {
      chapter: "网络概述",
      outline: "网络发展/概念/分类/组成；电路交换与存储转发分组交换；协议/层次/接口；OSI 与 TCP/IP 体系结构及各层功能。",
      points: [
        {
          id: "LB-N-01",
          name: "网络概念、分类与组成",
          outline: "网络发展/概念/分类/组成",
          plain: "计算机网络=通信子网+资源子网。按覆盖范围分局域网 LAN、城域网 MAN、广域网 WAN。",
          steps: [
            "识别组成：资源子网（主机、终端）+ 通信子网（通信设备、线路）。",
            "按范围分类：LAN 小、MAN 城、WAN 广。",
            "按拓扑：总线、星型、环型、网状。"
          ],
          example: "计算机网络由（　）组成。",
          answer: "资源子网和通信子网。",
          warn: "把硬件软件当标准答案；局域网广域网范围混；拓扑结构功能不清。",
          examTip: "口诀：网络=资源+通信；LAN/MAN/WAN 按范围。",
          relatedFormula: "网络体系结构",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-N-02",
          name: "交换方式",
          outline: "电路交换与存储转发分组交换",
          plain: "电路交换像打电话独占线路；分组交换把数据切片、存储转发，更灵活高效。",
          steps: [
            "电路交换：建连—通话—释放，时延小但独占。",
            "分组交换：切分组、各分组选路、存储转发。",
            "对比：报文交换整份存储，时延大。"
          ],
          example: "Internet 主要采用哪种交换？",
          answer: "分组交换（存储转发）。",
          warn: "把电路交换当互联网主流；分组交换与报文交换混。",
          examTip: "口诀：电话独占电路；网络分组转发。",
          relatedFormula: "电路交换与存储转发包交换",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-N-03",
          name: "OSI 与 TCP/IP 体系",
          outline: "协议/层次/接口；OSI 与 TCP/IP 体系结构及各层功能",
          plain: "分层解耦：每层只做自己的事。OSI 七层，TCP/IP 四层。协议=语法语义同步。",
          steps: [
            "背 OSI：物、数、网、传、会、表、应。",
            "TCP/IP：网络接口、网际、传输、应用。",
            "各层 PDU：比特、帧、分组/包、报文段。"
          ],
          example: "TCP/IP 中，IP 协议属于哪一层？",
          answer: "网际层（网络层）。",
          warn: "层数与名称对不上；接口与协议概念混；PDU 名称记错。",
          examTip: "口诀：物数网传会表应；IP 在网际，TCP 在传输。",
          relatedFormula: "网络体系结构",
          level: "强化",
          minutes: 8
        }
      ]
    },
    {
      chapter: "物理层",
      outline: "物理层与物理协议基本概念；数据通信基本概念；传输介质；数据编码；多路复用分类与特点。",
      points: [
        {
          id: "LB-N-04",
          name: "物理层基本概念与数据通信",
          outline: "物理层与物理协议；数据通信基本概念",
          plain: "物理层管比特流传输：机械、电气、功能、规程特性。数据通信有单工、半双工、全双工。",
          steps: [
            "识别特性：接口形状、电平、引脚意义、时序。",
            "通信方式：单工只发；半双工交替；全双工同时。",
            "时延：发送时延=数据/带宽；传播时延=距离/速度。"
          ],
          example: "发送时延是指（　）。",
          answer: "把数据推上信道的时间，即数据量/信道带宽。",
          warn: "发送时延与传播时延混；带宽单位 bit/s 与 Hz 混。",
          examTip: "口诀：发送看带宽，传播看距离。",
          relatedFormula: "物理层基本概念",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-N-05",
          name: "传输介质、编码与多路复用",
          outline: "传输介质；数据编码；多路复用分类与特点",
          plain: "双绞线、同轴、光纤、无线。编码把比特变信号。多路复用让一条线多路用。",
          steps: [
            "介质：双绞线便宜，光纤带宽大抗干扰。",
            "编码：NRZ、曼彻斯特（每比特有跳变）。",
            "复用：频分 FDM、时分 TDM、波分 WDM、码分 CDM。"
          ],
          example: "以太网常用哪种编码（含时钟同步）？",
          answer: "曼彻斯特编码。",
          warn: "把波分用在电缆；FDM/TDM 概念对调；忽略曼彻斯特自同步优点。",
          examTip: "口诀：频分分频率，时分分时间；曼码有跳变。",
          relatedFormula: "物理层基本概念",
          level: "强化",
          minutes: 7
        },
        {
          id: "LB-N-17",
          name: "信道容量与带宽",
          outline: "数据通信基本概念",
          plain: "带宽是信道能通过的频率范围（Hz）或最高数据率（bit/s）。信道容量有奈奎斯特与香农极限。",
          steps: [
            "无噪声：C=2B log₂V（B 带宽，V 信号电平数）。",
            "有噪声：C=B log₂(1+S/N)，S/N 用信噪比。",
            "实际速率不会超过容量，单位统一到 bit/s。"
          ],
          example: "带宽 3kHz、无噪声、二进制传输，最高数据率？",
          answer: "C=2×3000×log₂2=6000 bit/s=6 kbps。",
          warn: "把带宽 Hz 与 bit/s 混用；信噪比没转成比值；忘记 log₂V。",
          examTip: "口诀：无噪两倍带宽乘 log，有噪香农 log(1+信噪)。",
          relatedFormula: "物理层基本概念",
          level: "冲刺",
          minutes: 8
        }
      ]
    },
    {
      chapter: "数据链路层",
      outline: "差错控制；交换机原理；VLAN 原理；ARP 协议；链路层功能服务；CSMA/CD；二层交换机基本配置。",
      points: [
        {
          id: "LB-N-06",
          name: "差错控制与 CSMA/CD",
          outline: "差错控制；CSMA/CD",
          plain: "差错控制用检错纠错（CRC）。共享总线用 CSMA/CD：先听后发、边发边听、冲突停发随机退避。",
          steps: [
            "CRC 检错，接收方整除余 0 则无错（按约定）。",
            "CSMA/CD 步骤：载波监听→发送→冲突检测→退避重传。",
            "最短帧长与碰撞域相关。"
          ],
          example: "CSMA/CD 的中文含义是？",
          answer: "载波监听多路访问/冲突检测。",
          warn: "以为冲突后立即重发；全双工仍用 CSMA/CD；CRC 与奇偶校验混。",
          examTip: "口诀：先听后发，边听边发，冲突退避。",
          relatedFormula: "以太网帧",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-N-07",
          name: "交换机与 VLAN",
          outline: "交换机原理；VLAN 原理；二层交换机基本配置",
          plain: "交换机按 MAC 表转发帧。VLAN 隔离广播域，不同 VLAN 通信需路由/三层交换。",
          steps: [
            "学习源 MAC，查表转发目的 MAC。",
            "VLAN 划分广播域；Trunk 承载多 VLAN。",
            "VLAN 间通信：单臂路由或三层交换。"
          ],
          example: "VLAN10 与 VLAN20 通信需要什么？",
          answer: "单臂路由或三层交换机。",
          warn: "交换机当集线器（仍冲突域）；Trunk 与 Access 混；VLAN 间以为二层直通。",
          examTip: "口诀：交换看 MAC；VLAN 隔广播；跨 VLAN 要路由。",
          relatedFormula: "交换机与路由器",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-N-08",
          name: "ARP 协议",
          outline: "ARP 协议",
          plain: "ARP 把 IP 地址解析成 MAC 地址。同一网段内广播请求，单播应答。",
          steps: [
            "查 ARP 缓存有无对应 MAC。",
            "没有则广播 ARP 请求（谁有 IP？）。",
            "目标主机单播应答，源机写入缓存。"
          ],
          example: "ARP 的作用是？",
          answer: "由 IP 地址解析 MAC 地址。",
          warn: "与 RARP 反向解析混；ARP 跨网段直接解析（实际走网关）。",
          examTip: "口诀：ARP 从 IP 找 MAC；缓存优先。",
          relatedFormula: "ARP 协议",
          level: "基础",
          minutes: 6
        },
        {
          id: "LB-N-18",
          name: "以太网帧与 MAC 地址",
          outline: "链路层功能服务",
          plain: "以太网帧含目的 MAC、源 MAC、类型、数据、FCS。MAC 48 位，全球唯一。",
          steps: [
            "识别帧结构：前导、MAC 目的/源、类型、载荷、FCS。",
            "MAC 地址固化在网卡，交换机据此转发。",
            "MTU 限制载荷长度，过大 IP 层分片。"
          ],
          example: "以太网帧中标识上层协议的字段是？",
          answer: "类型字段（如 0x0800 表示 IPv4）。",
          warn: "把 MAC 当 IP；FCS 作用不清；MTU 与帧长混。",
          examTip: "口诀：帧看 MAC，包看 IP；FCS 校验。",
          relatedFormula: "以太网帧",
          level: "强化",
          minutes: 7
        }
      ]
    },
    {
      chapter: "网络层",
      outline: "路由器原理；NAT、ICMP；RIP、OSPF；网络层功能服务；IP 协议、IPv4/IPv6；IP 地址分类、子网掩码与子网划分；ping、traceroute；路由器/三层交换机基本配置。",
      points: [
        {
          id: "LB-N-09",
          name: "IP 地址与子网划分",
          outline: "IP 地址分类、子网掩码与子网划分",
          plain: "IPv4 32 位。A/B/C 类范围要背；子网掩码决定网络号与主机号。",
          steps: [
            "分类：A 0–127，B 128–191，C 192–223（首字节范围）。",
            "网络号=IP AND 掩码；广播=主机位全 1。",
            "主机数=2^h−2（去掉网络号与广播）。"
          ],
          example: "192.168.1.130/26 的子网广播地址是？",
          answer: "192.168.1.191。/26 块长 64，子网 128–191，广播 191。",
          warn: "掩码与 IP 按位与算错；忘减 2；把私有地址当公网路由。",
          examTip: "口诀：块长=2^{32−前缀}；广播主机位全 1。",
          relatedFormula: "子网划分",
          level: "冲刺",
          minutes: 10
        },
        {
          id: "LB-N-10",
          name: "路由器与路由协议",
          outline: "路由器原理；RIP、OSPF；路由最长前缀匹配",
          plain: "路由器互联不同网络，按路由表转发。RIP 跳数小；OSPF 链路状态快收敛。最长前缀优先。",
          steps: [
            "查路由表，匹配前缀最长的条目。",
            "RIP：距离向量，最大 15 跳，周期更新。",
            "OSPF：链路状态，开销度量，收敛快。"
          ],
          example: "路由表有 10.0.0.0/8 与 10.1.0.0/16，目的 10.1.2.3 走哪条？",
          answer: "10.1.0.0/16（更长前缀）。",
          warn: "选最短前缀；RIP/OSPF 度量混；忘记默认路由 0.0.0.0/0。",
          examTip: "口诀：最长前缀匹配；RIP 数跳，OSPF 算开销。",
          relatedFormula: "路由最长前缀匹配",
          level: "冲刺",
          minutes: 9
        },
        {
          id: "LB-N-11",
          name: "NAT、ICMP 与诊断命令",
          outline: "NAT、ICMP；ping、traceroute",
          plain: "NAT 把私网 IP 转公网。ICMP 差错与控制。ping 测连通，traceroute 看路径。",
          steps: [
            "NAT：内网多台共享公网 IP，端口映射。",
            "ping 用 ICMP Echo 测可达性。",
            "tracert/traceroute 逐跳 TTL 看路由。"
          ],
          example: "能 ping 通网关但 ping 不通目标，故障最可能在？",
          answer: "目标网络/路由（本机与网关正常）。",
          warn: "以为 ping 用 TCP；NAT 与代理混；tracert 与 ping 功能混。",
          examTip: "口诀：ping 测通，tracert 测路；NAT 私网变公网。",
          relatedFormula: "ICMP 与 ping/traceroute",
          level: "强化",
          minutes: 7
        },
        {
          id: "LB-N-19",
          name: "IPv6 基础",
          outline: "IP 协议、IPv4/IPv6",
          plain: "IPv6 地址 128 位，冒号十六进制书写，地址空间巨大，首部更简洁，支持自动配置。",
          steps: [
            "格式：8 组十六进制，如 2001:0db8::1，可用 :: 压缩连续 0。",
            "对比 IPv4：32 位 vs 128 位；IPv6 取消首部校验和、分片在源端。",
            "过渡：双栈、隧道、翻译。"
          ],
          example: "IPv6 地址长度是多少位？",
          answer: "128 位（IPv4 为 32 位）。",
          warn: "把 IPv6 写成 64 位；压缩零规则用错；忽略双栈过渡。",
          examTip: "口诀：IPv4 三十二，IPv6 一百二十八；冒号十六进制。",
          relatedFormula: "IPv6 基础",
          level: "冲刺",
          minutes: 7
        }
      ]
    },
    {
      chapter: "传输层",
      outline: "传输层功能服务；连接管理；UDP、TCP 协议；TCP 拥塞控制与流量控制。",
      points: [
        {
          id: "LB-N-12",
          name: "TCP 与 UDP",
          outline: "UDP、TCP 协议；传输层功能服务",
          plain: "TCP 面向连接可靠有序；UDP 无连接快但不保证。端口号标识应用进程。",
          steps: [
            "TCP：握手建连、确认重传、有序。",
            "UDP：简单、开销小、校验可选。",
            "端口：HTTP 80，FTP 21，DNS 53，DHCP 67/68 等。"
          ],
          example: "DNS 通常使用哪个端口？",
          answer: "53（查询也可用 UDP）。",
          warn: "把 TCP 当无连接；端口号记错；UDP 校验和以为必须。",
          examTip: "口诀：TCP 可靠连接，UDP 快速轻量；80 万维网，53 域名。",
          relatedFormula: "TCP 与 UDP",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-N-13",
          name: "三次握手与四次挥手",
          outline: "连接管理",
          plain: "建连三次握手，断开四次挥手。序号确认号保证可靠。",
          steps: [
            "握手：SYN→SYN+ACK→ACK。",
            "挥手：FIN→ACK→FIN→ACK（可能合并）。",
            "状态：LISTEN、ESTABLISHED、TIME_WAIT 等。"
          ],
          example: "为什么建立连接是三次握手？",
          answer: "双方确认彼此的收发能力，防止历史连接干扰。",
          warn: "握手次数记成两次；挥手当三次；序号确认号规则不清。",
          examTip: "口诀：建连三握，断连四挥。",
          relatedFormula: "三次握手 / 四次挥手",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-N-14",
          name: "流量控制与拥塞控制",
          outline: "TCP 拥塞控制与流量控制",
          plain: "流量控制用滑动窗口保护接收方；拥塞控制保护网络，慢启动、拥塞避免、快重传快恢复。",
          steps: [
            "接收窗口 rwnd 限制发送量。",
            "慢启动：指数增长到阈值，再线性。",
            "丢包触发快重传/快恢复或超时回退。"
          ],
          example: "TCP 流量控制主要机制是？",
          answer: "滑动窗口（接收方通告窗口大小）。",
          warn: "流量控制与拥塞控制混；窗口单位看成 bit；慢启动线性增长。",
          examTip: "口诀：流量看接收窗，拥塞看网络；慢启动指数。",
          relatedFormula: "流量控制与滑动窗口",
          level: "冲刺",
          minutes: 8
        },
        {
          id: "LB-N-20",
          name: "端口号与套接字",
          outline: "传输层功能服务",
          plain: "套接字=IP:端口，唯一标识一条连接。知名端口 0–1023，客户端临时端口 1024 以上。",
          steps: [
            "区分知名端口：HTTP 80、FTP 21、SSH 22、DNS 53、DHCP 67/68。",
            "套接字 socket=(源IP,源端口,目的IP,目的端口,协议)。",
            "netstat / ss 查看连接状态。"
          ],
          example: "HTTPS 默认端口是？",
          answer: "443（HTTP 为 80）。",
          warn: "把 80 当 HTTPS；端口与进程一一对应说得太死；四元组/五元组混。",
          examTip: "口诀：80 网页 443 安全 22 远程；socket 五元组。",
          relatedFormula: "端口号",
          level: "强化",
          minutes: 7
        }
      ]
    },
    {
      chapter: "应用层",
      outline: "DNS 域名系统与服务过程；WWW；FTP；电子邮件；DHCP；常用服务端口。",
      points: [
        {
          id: "LB-N-15",
          name: "DNS 与 DHCP",
          outline: "DNS 域名系统与服务过程；DHCP",
          plain: "DNS 把域名解析成 IP；DHCP 自动分配 IP、掩码、网关、DNS。",
          steps: [
            "DNS 递归/迭代查询，根→顶级→权威。",
            "DHCP 租约：Discover、Offer、Request、ACK。",
            "查看配置：ipconfig / ifconfig。"
          ],
          example: "DHCP 的作用是？",
          answer: "自动给主机分配 IP 地址及网络配置。",
          warn: "DNS 与 DHCP 功能混；以为 DNS 用 TCP 80；DHCP 静态配置混淆。",
          examTip: "口诀：DNS 域名变 IP；DHCP 自动拿地址。",
          relatedFormula: "DNS 协议",
          level: "基础",
          minutes: 7
        },
        {
          id: "LB-N-16",
          name: "WWW、FTP、邮件与端口",
          outline: "WWW；FTP；电子邮件；常用服务端口",
          plain: "HTTP/HTTPS 网页；FTP 文件传输；SMTP 发信，POP3/IMAP 收信。端口要记牢。",
          steps: [
            "HTTP 80，HTTPS 443；FTP 20/21；SMTP 25；POP3 110；IMAP 143。",
            "URL 格式：协议://主机/路径。",
            "邮件：用户代理→SMTP→收件服务器→POP3/IMAP 取信。"
          ],
          example: "发送电子邮件使用的协议主要是？",
          answer: "SMTP（接收常用 POP3 或 IMAP）。",
          warn: "SMTP 与 POP3 功能对调；HTTPS 端口写成 80；FTP 数据连接端口不清。",
          examTip: "口诀：80 网页 443 安全；发信 SMTP 收信 POP3。",
          relatedFormula: "HTTP / HTTPS",
          level: "强化",
          minutes: 8
        },
        {
          id: "LB-N-21",
          name: "网络故障排查与常用命令",
          outline: "常用服务端口与网络应用综合",
          plain: "排查思路：先本机，再网关，再外网。常用 ipconfig、ping、tracert、nslookup。",
          steps: [
            "本机：ipconfig / ifconfig 看 IP、掩码、网关。",
            "连通性：ping 网关→ping 外网 IP→ping 域名（验 DNS）。",
            "路径：tracert 看哪一跳失败；nslookup 验域名解析。"
          ],
          example: "ping 域名失败但 ping 该域名 IP 成功，问题在？",
          answer: "DNS 解析。",
          warn: "不看本机配置直接猜；把 DNS 故障当网络不通；忽略防火墙。",
          examTip: "口诀：先配置后连通再解析；一步一步缩范围。",
          relatedFormula: "应用层常见协议场景",
          level: "冲刺",
          minutes: 8
        }
      ]
    }
  ]
};
