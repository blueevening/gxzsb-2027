/* 公式手册 · 按 2027 大纲补充完整例题与分步详解 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.FORMULA_BOOK = {
  "高等数学": [
    {
      "key": "高频必背",
      "items": [
        {
          "name": "重要极限",
          "formula": "lim(x→0) frac{sin x}{x} = 1",
          "use": "x→0 且出现 sin(ax)、tan(ax) 与 x 的比时套用；可先凑出标准形。",
          "example": "求 lim(x→0) frac{sin 3x}{x}",
          "steps": ["把 3x 看成整体：sin 3x / x = 3 · sin 3x / 3x", "3x→0 时 sin 3x / 3x → 1", "结果 = 3×1 = 3"],
          "answer": "3",
          "wrong": "不要写成 0/0=1；等价无穷小只用于乘除，加减先变形。"
        },
        {
          "name": "e 的极限",
          "formula": "lim(x→∞) (1+frac{1}{x})^x = e；lim(x→∞) (1+frac{a}{x})^x = e^a",
          "use": "形如 (1+a/x)^x 或 (1+x)^{1/x} 时凑成 e 的定义。",
          "example": "求 lim(x→∞) (1+frac{2}{x})^x",
          "steps": ["写成 [(1+2/x)^{x/2}]^2", "内层 (1+2/x)^{x/2} → e", "结果 = e²"],
          "answer": "e²",
          "wrong": "结果是 e^a 不是 e；(1−1/x)^x → 1/e。"
        },
        {
          "name": "常用等价无穷小",
          "formula": "x→0：sinx~x，tanx~x，1−cosx~frac{x²}{2}，eˣ−1~x，ln(1+x)~x",
          "use": "乘除式可直接替换；加减式先通分或泰勒展开。",
          "example": "求 lim(x→0) frac{1−cos 2x}{x²}",
          "steps": ["1−cos 2x ~ (2x)²/2 = 2x²", "原式 = 2x² / x²", "结果 = 2"],
          "answer": "2",
          "wrong": "1−cosx 是 ~x²/2，不是 ~x；2x 要代入整个表达式。"
        },
        {
          "name": "导数基本公式",
          "formula": "(xⁿ)′=nxⁿ⁻¹；(sinx)′=cosx；(cosx)′=−sinx；(eˣ)′=eˣ；(lnx)′=frac{1}{x}",
          "use": "所有求导题先落到这几条，再套四则与链式法则。",
          "example": "求 y = x³ + sinx + lnx 的导数",
          "steps": ["(x³)′ = 3x²", "(sinx)′ = cosx", "(lnx)′ = 1/x", "y′ = 3x² + cosx + 1/x"],
          "answer": "y′ = 3x² + cosx + 1/x",
          "wrong": "(cosx)′ 有负号；(lnx)′ 没有负号。"
        },
        {
          "name": "乘积与商法则",
          "formula": "(uv)′=u′v+uv′；(frac{u}{v})′=frac{u′v−uv′}{v²}",
          "use": "两个函数相乘/相除时用。",
          "example": "求 (x²·sinx)′",
          "steps": ["u=x²，v=sinx", "u′=2x，v′=cosx", "(uv)′=2x·sinx + x²·cosx"],
          "answer": "2x sinx + x² cosx",
          "wrong": "乘积求导不是 u′v′；商法则分子是 u′v−uv′ 不要写反。"
        },
        {
          "name": "链式法则",
          "formula": "[f(g(x))]′ = f′(g(x))·g′(x)",
          "use": "复合函数：外层求导 × 内层求导。",
          "example": "求 (sin 2x)′ 与 (e^{x²})′",
          "steps": ["(sin 2x)′ = cos 2x · (2x)′ = 2cos 2x", "(e^{x²})′ = e^{x²} · (x²)′ = 2x e^{x²}"],
          "answer": "2cos 2x；2x e^{x²}",
          "wrong": "易漏内层系数（如 2）。"
        }
      ]
    },
    {
      "key": "常考变形",
      "items": [
        {
          "name": "幂函数与基本积分",
          "formula": "∫xⁿdx = frac{xⁿ⁺¹}{n+1} + C（n≠−1）；∫frac{1}{x}dx = ln|x| + C；∫eˣdx = eˣ + C",
          "use": "先化成 xⁿ 再积分；不定积分必加 C。",
          "example": "求 ∫(x³ + 2x)dx",
          "steps": ["∫x³dx = x⁴/4", "∫2x dx = x²", "结果 = x⁴/4 + x² + C"],
          "answer": "x⁴/4 + x² + C",
          "wrong": "漏写 +C；n=−1 不能用幂公式。"
        },
        {
          "name": "凑微分",
          "formula": "∫f(g(x))g′(x)dx = ∫f(u)du，u=g(x)",
          "use": "见到「复合 × 内层导」就凑 u。",
          "example": "求 ∫2x·e^{x²}dx",
          "steps": ["令 u=x²，则 du=2x dx", "原式 = ∫e^u du = e^u + C", "代回 = e^{x²} + C"],
          "answer": "e^{x²} + C",
          "wrong": "定积分换元要改上下限。"
        },
        {
          "name": "分部积分",
          "formula": "∫udv = uv − ∫vdu",
          "use": "多项式×指数/三角，或含 ln、arctan。",
          "example": "求 ∫x eˣdx",
          "steps": ["u=x，dv=eˣdx ⇒ du=dx，v=eˣ", "∫x eˣdx = x eˣ − ∫eˣ dx", "= x eˣ − eˣ + C = eˣ(x−1)+C"],
          "answer": "eˣ(x−1)+C",
          "wrong": "uv 与积分项符号搞反；u 一般选求导后变简单的。"
        },
        {
          "name": "牛顿-莱布尼茨公式",
          "formula": "∫ₐᵇf(x)dx = F(b) − F(a)",
          "use": "先求原函数 F，再代上下限。",
          "example": "求 ∫₀² x² dx",
          "steps": ["F(x) = x³/3", "F(2) = 8/3", "F(0) = 0", "积分值 = 8/3 − 0 = 8/3"],
          "answer": "8/3",
          "wrong": "忘了减 F(a)。"
        },
        {
          "name": "变上限积分求导",
          "formula": "d/dx ∫ₐˣf(t)dt = f(x)",
          "use": "F(x)=∫ₐˣf(t)dt，则 F′(x)=f(x)。",
          "example": "F(x)=∫₀ˣ sin t dt，求 F′(x)",
          "steps": ["直接套公式", "F′(x) = sin x"],
          "answer": "F′(x) = sin x",
          "wrong": "被积函数含 x 时要先提出再求导。"
        },
        {
          "name": "面积与旋转体",
          "formula": "S=∫ₐᵇ|f|dx；V=π∫ₐᵇ[f(x)]²dx（绕 x 轴）",
          "use": "面积保证上减下；体积对 f 平方。",
          "example": "y=x²，x=0..2，求面积与绕 x 轴体积",
          "steps": ["S = ∫₀² x² dx = [x³/3]₀² = 8/3", "V = π ∫₀² (x²)² dx = π ∫₀² x⁴ dx", "= π [x⁵/5]₀² = 32π/5"],
          "answer": "S=8/3，V=32π/5",
          "wrong": "体积公式里是 f²，不是 f。"
        },
        {
          "name": "极值与最值",
          "formula": "f′(x)=0 找驻点 → 判极值 → 闭区间再比端点",
          "use": "应用题先列目标函数再求导。",
          "example": "f=x²−2x，求极值与在 [0,3] 上最值",
          "steps": ["f′=2x−2=0 ⇒ x=1", "f″=2>0 ⇒ x=1 极小，f(1)=−1", "f(0)=0，f(3)=3", "最小 −1，最大 3"],
          "answer": "极小 −1；区间最小 −1，最大 3",
          "wrong": "驻点不一定是极值；最值必须比端点。"
        },
        {
          "name": "可分离变量方程",
          "formula": "dy/dx = g(x)h(y) ⇒ ∫frac{dy}{h(y)} = ∫g(x)dx",
          "use": "分离变量后积分，初值定 C。",
          "example": "解 y′=2xy，y(0)=1",
          "steps": ["dy/y = 2x dx", "ln|y| = x² + C₁", "y = C e^{x²}", "y(0)=1 ⇒ C=1"],
          "answer": "y = e^{x²}",
          "wrong": "通解要含任意常数 C；初值题必须定 C。"
        }
      ]
    },
    {
      "key": "冷门补充",
      "items": [
        {
          "name": "洛必达法则",
          "formula": "lim frac{f}{g} = lim frac{f′}{g′}（仅 0/0 或 ∞/∞）",
          "use": "先判型，再求导，可多次。",
          "example": "求 lim(x→0) frac{eˣ−1}{x}",
          "steps": ["代入 0 得 0/0，可用洛必达", "分子导 eˣ，分母导 1", "极限 = e⁰/1 = 1"],
          "answer": "1",
          "wrong": "非 0/0、∞/∞ 乱用会错。"
        },
        {
          "name": "泰勒展开",
          "formula": "sinx = x − frac{x³}{6} + o(x³)；eˣ = 1+x+frac{x²}{2}+o(x²)",
          "use": "加减抵消时用，比等价无穷小更稳。",
          "example": "求 lim(x→0) frac{sinx−x}{x³}",
          "steps": ["sinx − x = −x³/6 + o(x³)", "原式 = −1/6"],
          "answer": "−1/6",
          "wrong": "展开阶数不够会算错。"
        }
      ]
    },
    {
      "key": "大纲补强",
      "items": [
        {
          "name": "罗尔定理",
          "formula": "闭连续、开可导、f(a)=f(b) ⇒ 存在 ξ∈(a,b) 使 f′(ξ)=0",
          "use": "证明至少有一驻点/根。",
          "example": "f(x)=x²−2x 在 [0,2]，验证罗尔定理",
          "steps": ["f(0)=0，f(2)=0，连续可导", "存在 ξ∈(0,2) 使 f′(ξ)=0", "f′=2x−2=0 ⇒ ξ=1"],
          "answer": "ξ=1",
          "wrong": "三条件缺一不可。"
        },
        {
          "name": "拉格朗日中值定理",
          "formula": "f(b)−f(a) = f′(ξ)(b−a)",
          "use": "证明不等式、估值。",
          "example": "f(x)=lnx 在 [1,2] 写出中值公式",
          "steps": ["f(2)−f(1)=ln2", "f′(x)=1/x", "ln2 = 1/ξ · (2−1) ⇒ ξ = 1/ln2 ∈ (1,2)"],
          "answer": "ln2 = 1/ξ",
          "wrong": "ξ 在开区间内，不在端点。"
        },
        {
          "name": "二阶常系数齐次方程",
          "formula": "y″+py′+qy=0，特征根 r₁,r₂：Δ>0 两异根；Δ=0 重根；Δ<0 共轭复根",
          "use": "写特征方程 r²+pr+q=0 求根。",
          "example": "解 y″−3y′+2y=0",
          "steps": ["r²−3r+2=0 ⇒ r=1 或 2", "y = C₁eˣ + C₂e²ˣ"],
          "answer": "y = C₁eˣ + C₂e²ˣ",
          "wrong": "Δ<0 时不要漏 e^{αx}。"
        },
        {
          "name": "定积分对称性",
          "formula": "f 奇：∫₋ₐᵃf=0；f 偶：∫₋ₐᵃf=2∫₀ᵃf",
          "use": "对称区间先看奇偶。",
          "example": "求 ∫₋₁¹ x³ dx",
          "steps": ["x³ 是奇函数", "区间对称", "积分 = 0"],
          "answer": "0",
          "wrong": "不是所有对称区间都为 0，要先看奇偶。"
        },
        {
          "name": "拐点判别",
          "formula": "f″(x₀)=0 且两侧 f″ 变号 ⇒ 拐点",
          "use": "找凹凸分界点。",
          "example": "判断 y=x³ 在 x=0 处",
          "steps": ["y″=6x", "x=0 处 y″=0", "x<0 时 y″<0，x>0 时 y″>0，变号", "是拐点"],
          "answer": "(0,0) 是拐点",
          "wrong": "f″=0 不一定是拐点，必须两侧变号。"
        }
      ]
    }
  ],
  "电工电子技术基础": [
    {
      "key": "高频必背",
      "items": [
        {
          "name": "欧姆定律",
          "formula": "U = IR；I = frac{U}{R}；R = frac{U}{I}",
          "use": "线性电阻；注意关联参考方向。",
          "example": "R=10Ω，I=2A，求 U 与 P",
          "steps": ["U = IR = 2×10 = 20V", "P = UI = 20×2 = 40W"],
          "answer": "U=20V，P=40W",
          "wrong": "单位用 V/A/Ω；非线性不能直接用。"
        },
        {
          "name": "电功率",
          "formula": "P = UI = I²R = frac{U²}{R}",
          "use": "三式等价，选数据齐的算。",
          "example": "U=12V，I=3A，求 P",
          "steps": ["P = UI = 12×3 = 36W"],
          "answer": "36W",
          "wrong": "不要用 U/I；功率不能叠加。"
        },
        {
          "name": "基尔霍夫定律",
          "formula": "KCL：ΣI=0（节点）；KVL：ΣU=0（回路）",
          "use": "列方程前先标参考方向。",
          "example": "节点流入 3A 与 2A，流出应为多少",
          "steps": ["KCL：流入=流出", "流出 = 3+2 = 5A"],
          "answer": "5A",
          "wrong": "参考方向要一致，否则符号错。"
        },
        {
          "name": "电阻串并联",
          "formula": "串 R=R₁+R₂；并 frac{1}{R}=frac{1}{R₁}+frac{1}{R₂}（两并 R=frac{R₁R₂}{R₁+R₂}）",
          "use": "先串后并逐步化简。",
          "example": "4Ω 与 12Ω 并联，总电阻",
          "steps": ["R = 4×12 / (4+12) = 48/16 = 3Ω"],
          "answer": "3Ω",
          "wrong": "并联总电阻小于任一支路。"
        },
        {
          "name": "分压分流",
          "formula": "串联 Uₖ=U·frac{Rₖ}{R总}；并联 Iₖ=I·frac{R总}{Rₖ}",
          "use": "两电阻分压最常考。",
          "example": "4Ω+6Ω 串接 10V，求 U₄",
          "steps": ["U₄ = 10 × 4/(4+6) = 4V"],
          "answer": "4V",
          "wrong": "分压用电阻比，不是等分。"
        }
      ]
    },
    {
      "key": "常考变形",
      "items": [
        {
          "name": "全电路欧姆定律",
          "formula": "I = frac{E}{R+r}；U = IR = E − Ir",
          "use": "有内阻时电流除 (R+r)。",
          "example": "E=12V，r=1Ω，R=5Ω，求 I、U",
          "steps": ["I = 12/(5+1) = 2A", "U = 2×5 = 10V（或 12−2×1=10V）"],
          "answer": "I=2A，U=10V",
          "wrong": "路端电压 U 不是电源电动势 E。"
        },
        {
          "name": "叠加定理",
          "formula": "线性电路：各独立源单独作用的响应之和 = 总响应",
          "use": "电压源短路、电流源开路；只叠加电压电流，不叠加功率。",
          "example": "两源分别产生 I′=1A、I″=−0.5A，总 I",
          "steps": ["I = I′ + I″ = 1 + (−0.5) = 0.5A"],
          "answer": "0.5A",
          "wrong": "功率不可叠加；源置零方式勿反。"
        },
        {
          "name": "戴维南定理",
          "formula": "等效为 Uoc 串 Req；I = frac{Uoc}{Req+R}",
          "use": "先求开路电压，再求源置零后的等效电阻。",
          "example": "Uoc=10V，Req=2Ω，接 R=3Ω，求 I",
          "steps": ["I = 10/(2+3) = 2A"],
          "answer": "2A",
          "wrong": "电压源短路、电流源开路后再求 Req。"
        },
        {
          "name": "反相 / 同相运放",
          "formula": "反相 uo = −frac{Rf}{R₁}ui；同相 uo = (1+frac{Rf}{R₁})ui",
          "use": "虚短虚断；反相有负号，同相增益≥1。",
          "example": "R1=10k，Rf=50k，ui=0.2V，分别求反相/同相输出",
          "steps": ["反相：uo = −(50/10)×0.2 = −1V", "同相：uo = (1+5)×0.2 = 1.2V"],
          "answer": "−1V；1.2V",
          "wrong": "两种接法公式勿混；漏负号。"
        }
      ]
    },
    {
      "key": "冷门补充",
      "items": [
        {
          "name": "最大功率传输",
          "formula": "RL = R0 时负载功率最大，Pmax = frac{Uoc²}{4R0}",
          "use": "戴维南后接匹配电阻。",
          "example": "Uoc=12V，R0=8Ω，求 RL 与 Pmax",
          "steps": ["RL = 8Ω", "Pmax = 144/(4×8) = 4.5W"],
          "answer": "RL=8Ω，Pmax=4.5W",
          "wrong": "此时效率只有 50%。"
        },
        {
          "name": "时间常数与暂态",
          "formula": "τ = RC（RC）；τ = L/R（RL）；约 5τ 到稳态",
          "use": "一阶电路充电放电。",
          "example": "R=1kΩ，C=100μF，求 τ",
          "steps": ["τ = RC = 1000 × 100×10⁻⁶ = 0.1s"],
          "answer": "0.1s",
          "wrong": "RC 与 RL 公式勿反。"
        }
      ]
    },
    {
      "key": "大纲补强",
      "items": [
        {
          "name": "正弦交流三要素与有效值",
          "formula": "u = Um sin(ωt + φ)；U = Um/√2",
          "use": "最大值、角频率、初相位；工程用有效值。",
          "example": "Um=311V，求有效值 U",
          "steps": ["U = 311/√2 ≈ 220V"],
          "answer": "约 220V",
          "wrong": "有效值不是最大值。"
        },
        {
          "name": "阻抗与功率因数",
          "formula": "Z=R+jX；P=UI cosφ；cosφ=R/|Z|",
          "use": "RLC 串联算阻抗与有功。",
          "example": "U=220V，I=10A，cosφ=0.8，求 P",
          "steps": ["P = UI cosφ = 220×10×0.8", "P = 1760W"],
          "answer": "1760W",
          "wrong": "P 不是 UI；无功 Q=UI sinφ。"
        },
        {
          "name": "换路定律与三要素",
          "formula": "uc(0+)=uc(0−)；iL(0+)=iL(0−)；f(t)=f(∞)+[f(0+)−f(∞)]e^{−t/τ}",
          "use": "一阶暂态通用解。",
          "example": "电容从 0 充到 U，写 uc(t)",
          "steps": ["uc(0+)=0，uc(∞)=U，τ=RC", "uc = U + (0−U)e^{−t/RC} = U(1−e^{−t/RC})"],
          "answer": "uc = U(1−e^{−t/RC})",
          "wrong": "电容电压、电感电流不能突变。"
        },
        {
          "name": "三极管与比较器",
          "formula": "Ie=Ic+Ib；放大区 Ic≈βIb；比较器 u+>u− 输出高",
          "use": "静态工作点与运放开环。",
          "example": "Ib=20μA，β=50，求 Ic",
          "steps": ["Ic = βIb = 50×20μA = 1mA"],
          "answer": "1mA",
          "wrong": "饱和区 Ic 不再受 Ib 控制。"
        }
      ]
    }
  ],
  "C语言程序设计": [
    {
      "key": "高频必背",
      "items": [
        {
          "name": "整除与取模",
          "formula": "7/2 = 3；7 % 3 = 1；整数除丢小数",
          "use": "两整数相除得整数；% 只用于整数。",
          "example": "int a = 7/2; double b = 7.0/2; 的值",
          "steps": ["a = 3（整除）", "b = 3.5（浮点除）"],
          "answer": "a=3，b=3.5",
          "wrong": "要得小数必须用浮点数参与运算。"
        },
        {
          "name": "自增自减",
          "formula": "i++ 先用后加；++i 先加后用",
          "use": "单独成句相同，表达式里不同。",
          "example": "i=1; a=i++; 然后 b=++i;",
          "steps": ["a = i++：a 得 1，i 变 2", "b = ++i：i 先变 3，b 得 3"],
          "answer": "a=1，b=3",
          "wrong": "顺序勿混。"
        },
        {
          "name": "逻辑短路",
          "formula": "&& 左假不判右；|| 左真不判右",
          "use": "可避免除零等错误。",
          "example": "x!=0 && 10/x>2 在 x=0 时",
          "steps": ["左边 x!=0 为假", "右边不再执行", "不会除零"],
          "answer": "安全短路",
          "wrong": "不是位运算 & |。"
        },
        {
          "name": "循环与累加",
          "formula": "for (i=0; i<n; i++) sum += a[i];",
          "use": "遍历 n 个元素。",
          "example": "求 1 到 100 的和",
          "steps": ["sum=0", "for(i=1;i<=100;i++) sum+=i", "sum=5050"],
          "answer": "5050",
          "wrong": "i<=n 多跑一趟时用 i<n。"
        }
      ]
    },
    {
      "key": "常考变形",
      "items": [
        {
          "name": "数组与下标",
          "formula": "a[i] ≡ *(a+i)；合法下标 0..n-1",
          "use": "二维按行优先。",
          "example": "int a[5] = {6,9,12,15,18}; 求 a[0]+a[3]",
          "steps": ["a[0]=6，a[3]=15", "和为 21"],
          "answer": "21",
          "wrong": "越界 a[5] 不报编译错但会出错。"
        },
        {
          "name": "字符串与 \\0",
          "formula": "以 '\\0' 结束；strlen 不算 '\\0'",
          "use": "遍历到 '\\0'。",
          "example": "\"ab\" 的 strlen 与占内存",
          "steps": ["strlen=2", "实际占 3 字节（含 \\0）"],
          "answer": "2；3 字节",
          "wrong": "结束符不是 \\n。"
        },
        {
          "name": "指针传参",
          "formula": "值传递；改实参传地址 int *p；*p 取值",
          "use": "swap 必须传指针。",
          "example": "void add(int *n){ (*n)++; } 调用 add(&x);",
          "steps": ["传入 x 的地址", "*n 即 x", "x 加 1"],
          "answer": "实参 x 被修改",
          "wrong": "改形参本身不影响实参。"
        }
      ]
    },
    {
      "key": "冷门补充",
      "items": [
        {
          "name": "递归",
          "formula": "必须有出口；否则用更小规模表达",
          "use": "阶乘、斐波那契。",
          "example": "写 n! 递归",
          "steps": ["fact(n) = 1 若 n==0", "否则 n * fact(n-1)"],
          "answer": "fact(n)= n==0?1:n*fact(n-1)",
          "wrong": "无出口会栈溢出。"
        },
        {
          "name": "二分查找",
          "formula": "mid = (lo+hi)/2；有序表 O(log n)",
          "use": "有序数组查找。",
          "example": "在有序 a[] 中找 x",
          "steps": ["lo=0, hi=n-1", "比较 a[mid] 与 x 调整半区", "lo>hi 则未找到"],
          "answer": "有序才能二分",
          "wrong": "无序不能二分。"
        }
      ]
    },
    {
      "key": "大纲补强",
      "items": [
        {
          "name": "结构体",
          "formula": "struct S {…}；s.a；p->a ≡ (*p).a",
          "use": "封装一组数据。",
          "example": "struct P { int x,y; }; P p={1,2}; p.x",
          "steps": ["定义结构体", "变量 p 的 x 成员为 1"],
          "answer": "1",
          "wrong": "p->a 必须 p 是指针。"
        },
        {
          "name": "文件读写",
          "formula": "fopen(\"a.txt\",\"r/w\")；fscanf/fprintf；fclose",
          "use": "文本文件操作。",
          "example": "打开写入再关闭",
          "steps": ["fp=fopen(\"data.txt\",\"w\")", "fprintf(fp,\"%d\",10)", "fclose(fp)"],
          "answer": "写入 10",
          "wrong": "不 fclose 会丢缓冲；模式 r/w 勿混。"
        },
        {
          "name": "switch 穿透",
          "formula": "case 后不写 break 会继续执行下一 case",
          "use": "多分支。",
          "example": "case 1 后无 break 会怎样",
          "steps": ["执行完 case 1 体", "继续执行后续 case 直到 break"],
          "answer": "发生穿透",
          "wrong": "每个分支后要 break（除非有意穿透）。"
        }
      ]
    }
  ],
  "计算机网络基础": [
    {
      "key": "高频必背",
      "items": [
        {
          "name": "OSI / TCP-IP",
          "formula": "OSI 七层；TCP/IP 四层：网络接口-网际-传输-应用",
          "use": "协议归属题。",
          "example": "IP、TCP、HTTP 各在哪一层",
          "steps": ["IP 网际/网络层", "TCP 传输层", "HTTP 应用层"],
          "answer": "网络层 / 传输层 / 应用层",
          "wrong": "TCP/IP 无会话层、表示层。"
        },
        {
          "name": "网络与广播地址",
          "formula": "网络 = IP ∧ 掩码；广播 = 网络 ∨ ¬掩码",
          "use": "掩码 1 是网络位。",
          "example": "192.168.1.77/26 求网络与广播",
          "steps": ["/26 块大小 64", "77 在 64~127", "网络 .64，广播 .127"],
          "answer": "192.168.1.64；192.168.1.127",
          "wrong": "网络地址不是最小主机 .65。"
        },
        {
          "name": "主机数与子网",
          "formula": "可用主机 = 2^(32−n) − 2；借位划分子网",
          "use": "先满足主机数再借位。",
          "example": "192.168.1.0/24 借 2 位划分子网",
          "steps": ["借 2 位 ⇒ /26", "子网数 2²=4", "网络 .0 .64 .128 .192", "每个子网可用主机 2⁶−2=62"],
          "answer": "/26，4 个子网，各 62 台",
          "wrong": "可用主机要减 2。"
        },
        {
          "name": "常用端口",
          "formula": "HTTP 80，HTTPS 443，SSH 22，FTP 21，DNS 53，SMTP 25，DHCP 67/68",
          "use": "服务与端口配对。",
          "example": "网页、域名解析、文件传输端口",
          "steps": ["网页 80/443", "DNS 53", "FTP 21"],
          "answer": "80/443；53；21",
          "wrong": "FTP 控制 21，数据 20。"
        }
      ]
    },
    {
      "key": "常考变形",
      "items": [
        {
          "name": "TCP 与 UDP",
          "formula": "TCP 可靠面向连接；UDP 尽力交付",
          "use": "文件/网页 TCP；视频/查询 UDP。",
          "example": "DNS 查询、文件下载分别用什么",
          "steps": ["DNS 常用 UDP", "文件下载用 TCP"],
          "answer": "UDP；TCP",
          "wrong": "IP 本身不可靠。"
        },
        {
          "name": "三次握手与挥手",
          "formula": "建立：SYN → SYN+ACK → ACK；释放常为 4 次",
          "use": "简答按序写。",
          "example": "为什么建立是 3 次",
          "steps": ["客户端发 SYN", "服务端回 SYN+ACK", "客户端再 ACK"],
          "answer": "双方确认初始序号",
          "wrong": "勿与挥手次数混。"
        },
        {
          "name": "ARP / DNS / DHCP",
          "formula": "ARP IP→MAC；DNS 域名→IP；DHCP 分配 IP",
          "use": "填空选缩写。",
          "example": "访问网站前如何得到 IP",
          "steps": ["浏览器查 DNS 缓存/服务器", "得到 IP 后再路由访问"],
          "answer": "DNS 解析域名",
          "wrong": "DNS 解析的不是 MAC。"
        }
      ]
    },
    {
      "key": "冷门补充",
      "items": [
        {
          "name": "邮件协议",
          "formula": "SMTP 25 发送；POP3 110 / IMAP 143 接收",
          "use": "配置邮箱。",
          "example": "发信用什么收信用什么",
          "steps": ["发 SMTP", "收 POP3/IMAP"],
          "answer": "SMTP；POP3/IMAP",
          "wrong": "勿把 SMTP 当接收。"
        }
      ]
    },
    {
      "key": "大纲补强",
      "items": [
        {
          "name": "路由最长前缀匹配",
          "formula": "匹配前缀最长的路由条目优先",
          "use": "多条路由时选更精确网段。",
          "example": "去 10.1.1.1，表项 10.0.0.0/8 与 10.1.1.0/24",
          "steps": ["/24 比 /8 前缀更长", "选 10.1.1.0/24"],
          "answer": "10.1.1.0/24",
          "wrong": "不是选「最近」接口。"
        },
        {
          "name": "TCP 拥塞控制",
          "formula": "慢启动 → 拥塞避免 → 快重传 → 快恢复",
          "use": "发送窗口调整。",
          "example": "cwnd 如何增长",
          "steps": ["慢启动指数涨到 ssthresh", "拥塞避免线性涨"],
          "answer": "指数→线性",
          "wrong": "拥塞控制是全局，流量控制是端到端。"
        },
        {
          "name": "IPv6 要点",
          "formula": "128 位地址；首部 40 字节；无校验和；用组播代替广播",
          "use": "对比 IPv4。",
          "example": "IPv6 地址长度与是否广播",
          "steps": ["128 位", "不支持广播"],
          "answer": "128 位；无广播",
          "wrong": "IPv6 仍有路由与分层结构。"
        }
      ]
    }
  ],
  "英语": [
    {
      "key": "高频必背",
      "items": [
        {
          "name": "时态对照",
          "formula": "一般现在 do/does；进行 be+doing；完成 have/has+done；过去 did",
          "use": "看时间状语选时态。",
          "example": "I ___ (live) here for 3 years.",
          "steps": ["for 3 years 是完成时标志", "主语 I 用 have", "have lived"],
          "answer": "have lived",
          "wrong": "for/since 用完成时，不用过去时。"
        },
        {
          "name": "被动语态",
          "formula": "be + 过去分词（+ by…）",
          "use": "主语是承受者。",
          "example": "The bridge will ___ (build) next year.",
          "steps": ["will 后加 be", "build 过去分词 built", "will be built"],
          "answer": "will be built",
          "wrong": "漏 be。"
        },
        {
          "name": "三大从句",
          "formula": "定语 who/which/that；宾语 that/if/wh-；状语 because/if/when",
          "use": "先判从句类型。",
          "example": "the man ___ is standing there",
          "steps": ["修饰 man，定语从句", "指人用 who/that"],
          "answer": "who / that",
          "wrong": "宾语从句用陈述语序。"
        },
        {
          "name": "非谓语",
          "formula": "to do 目的/将来；doing 主动；done 被动",
          "use": "记动词搭配。",
          "example": "enjoy ___ ；want ___",
          "steps": ["enjoy + doing", "want + to do"],
          "answer": "reading；to go",
          "wrong": "look forward to + doing（to 是介词）。"
        }
      ]
    },
    {
      "key": "常考变形",
      "items": [
        {
          "name": "比较级句型",
          "formula": "比较级+than；the more…, the more…",
          "use": "对比两者。",
          "example": "The harder you work, the ___ you get.",
          "steps": ["the + 比较级…, the + 比较级", "more"],
          "answer": "more",
          "wrong": "more better 不用。"
        },
        {
          "name": "固定搭配",
          "formula": "be good at；be proud of；prefer A to B",
          "use": "单选与写作。",
          "example": "I prefer tea ___ coffee.",
          "steps": ["prefer A to B", "填 to"],
          "answer": "to",
          "wrong": "prefer 不用 than。"
        },
        {
          "name": "so…that / such…that",
          "formula": "so + adj/adv + that；such + (a/an) + n + that",
          "use": "结果状语。",
          "example": "It is ___ easy that I can do it.",
          "steps": ["easy 是形容词", "用 so"],
          "answer": "so",
          "wrong": "such 后接名词短语。"
        }
      ]
    },
    {
      "key": "冷门补充",
      "items": [
        {
          "name": "应用文写作骨架",
          "formula": "点题 → First / Second / Finally → In short",
          "use": "不少于 80 词的应用文。",
          "example": "写「如何学好英语」开头与结尾",
          "steps": ["开头点题：Here are my suggestions.", "中间用连接词列 2–3 点", "结尾：In short, practice makes perfect."],
          "answer": "三段式清晰结构",
          "wrong": "无连接词、无结尾。"
        }
      ]
    },
    {
      "key": "大纲补强",
      "items": [
        {
          "name": "虚拟语气（if）",
          "formula": "与现在相反：If + 过去式, would/could + 原形",
          "use": "建议/不可能假设。",
          "example": "If I ___ (be) you, I ___ (go).",
          "steps": ["if 从句过去式 were", "主句 would + 原形"],
          "answer": "were；would go",
          "wrong": "if 从句不用 would。"
        },
        {
          "name": "主谓一致",
          "formula": "each/every + 单数；a number of + 复数；the number of + 单数",
          "use": "语法单选。",
          "example": "The number of students ___ rising.",
          "steps": ["the number of + 单数谓语", "is"],
          "answer": "is",
          "wrong": "a number of 用复数谓语。"
        },
        {
          "name": "冠词",
          "formula": "a/an 看音素；the 特指；零冠词泛指复数",
          "use": "单选高频。",
          "example": "___ university；___ hour",
          "steps": ["university 辅音音素 /j/ → a", "hour 元音音素 → an"],
          "answer": "a；an",
          "wrong": "按发音不按字母。"
        }
      ]
    }
  ]
};
