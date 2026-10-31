/*
 * math-bank-integral.js —— 广西专升本《高等数学》独立积分专项题库
 * 来源：河南9月月考卷、河南27年大联考C卷、山东智博10月月考、耶鲁10月大联考、不定积分综合练习题
 * 适配：广西专升本高等数学大纲（一元函数积分学：不定积分、定积分及应用）
 * 约定：与 math-bank.js 同 schema，直接 push 进 window.STUDY_DATA.questions
 * 题目编号：i01 起；解答风格：秒懂考点 + 保姆级拆解 + 避坑指南
 */
(function(){
  if(!window.STUDY_DATA) window.STUDY_DATA={};
  if(!window.STUDY_DATA.questions) window.STUDY_DATA.questions=[];

  // ============ 一、不定积分（凑微分 / 换元 / 分部） ============

  window.STUDY_DATA.questions.push({
    id:"i01", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ [2ˣ − 1/(2x+1)² + tan x] dx。",
    options:[], answer:"2ˣ/ln2 + 1/[2(2x+1)] − ln|cos x| + C",
    pitfalls:["∫2ˣ dx 忘除以 ln2：指数函数积分不是 2ˣ，是 2ˣ/ln2","∫1/(2x+1)² dx 漏内层系数 2：凑微分 d(2x+1)=2dx，要补 1/2","∫tan x dx 记成 ln|sin x|：正确是 −ln|cos x|，负号最容易丢","不定积分最后忘写 +C：填空题没 C 直接扣分"],
    tags:["不定积分","凑微分","基本积分表"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】逐项积分：指数函数套 ∫aˣdx=aˣ/lna，二次分式凑微分，tan x 背公式",
      "【第一项】∫2ˣ dx = 2ˣ/ln2（a=2，记住除以 lna）",
      "【第二项】凑微分：令 u=2x+1，du=2dx，所以 dx=du/2；∫1/u²·du/2 = (1/2)(−1/u) = −1/[2(2x+1)]；原式前面有负号，负负得正：+1/[2(2x+1)]",
      "【第三项】∫tan x dx = ∫sin x/cos x dx = −∫d(cos x)/cos x = −ln|cos x|",
      "【合并】三项相加，最后统一加一个任意常数 C",
      "【答案】2ˣ/ln2 + 1/[2(2x+1)] − ln|cos x| + C"
    ],
    hint:"【结论】2ˣ/ln2 + 1/[2(2x+1)] − ln|cos x| + C 【考点】不定积分逐项积分",
    analysis:"【审题】三项和的积分，分项处理即可。\n\n【思路】多项式和的积分等于积分的和。三项分别用：指数积分公式、凑微分、背 tan 积分公式。\n\n【步骤】\n① ∫2ˣdx = 2ˣ/ln2。\n② 令 u=2x+1，∫−1/(2x+1)² dx = −∫u⁻²·(du/2) = 1/(2u) = 1/[2(2x+1)]。\n③ ∫tan x dx = −ln|cos x|。\n④ 合并并加 C。\n\n【答案】2ˣ/ln2 + 1/[2(2x+1)] − ln|cos x| + C。\n\n【易错】指数积分漏除 ln2；凑微分漏内层系数；tan 积分漏负号；忘写 C。\n\n【口诀】逐项积分别合并，指数除 ln，凑微分补系数，tan 负 ln cos。"
  });

  window.STUDY_DATA.questions.push({
    id:"i02", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ ln(1+√x)/√x dx。",
    options:[], answer:"2(1+√x)ln(1+√x) − 2√x + C",
    pitfalls:["看到 √x 不换元硬凑：直接换 t=√x 最干净","分部积分时 u、dv 选反：ln 当 u，√x dx 当 dv 才好做","最后忘把 t 换回 √x"],
    tags:["不定积分","换元积分","分部积分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】带根号的对数积分：先换元去根号，再分部",
      "【换元】令 t=√x，则 x=t²，dx=2t dt；原式变为 ∫ ln(1+t)/t · 2t dt = 2∫ln(1+t)dt",
      "【分部】∫ln(1+t)dt：u=ln(1+t)，dv=dt；du=1/(1+t)dt，v=t",
      "【套公式】= t·ln(1+t) − ∫t/(1+t)dt = t ln(1+t) − ∫(1 − 1/(1+t))dt",
      "【继续】= t ln(1+t) − t + ln(1+t) = (1+t)ln(1+t) − t",
      "【乘2并回代】2[(1+t)ln(1+t) − t] = 2(1+√x)ln(1+√x) − 2√x",
      "【答案】+C"
    ],
    hint:"【结论】2(1+√x)ln(1+√x) − 2√x + C 【考点】换元+分部",
    analysis:"【审题】被积函数是对数套根号，典型的「先换元去根号，再分部」组合题。\n\n【思路】令 t=√x 把根号去掉，dx=2t dt 里的 t 正好和分母 √x=t 约掉，变成干净的 ∫ln(1+t)dt。\n\n【步骤】\n① t=√x，dx=2t dt，原式 = 2∫ln(1+t)dt。\n② 分部：u=ln(1+t)，dv=dt；= t ln(1+t) − ∫t/(1+t)dt。\n③ 化简 t/(1+t)=1−1/(1+t)，积分得 t − ln(1+t)。\n④ 合并 = (1+t)ln(1+t) − t，乘 2 回代 t=√x。\n\n【答案】2(1+√x)ln(1+√x) − 2√x + C。\n\n【易错】不换元硬做；分部时把 ln 放进 dv；忘回代。\n\n【口诀】根号套对数，先换元再分部，ln 永远当 u。"
  });

  window.STUDY_DATA.questions.push({
    id:"i03", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求不定积分 ∫ dx/[x√(1−x²)]。",
    options:[], answer:"ln|(1−√(1−x²))/x| + C",
    pitfalls:["三角代换 x=sin t 后忘了回代","写成 ln|tan(t/2)| 不回代不算最终答案","漏绝对值"],
    tags:["不定积分","三角代换"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】√(1−x²) 型一律令 x=sin t（或 x=tan t 对应 √(1+x²)）",
      "【换元】令 x=sin t，dx=cos t dt，√(1−x²)=cos t",
      "【代入】原式 = ∫ 1/(sin t·cos t) · cos t dt = ∫ csc t dt",
      "【背公式】∫csc t dt = ln|csc t − cot t| + C",
      "【回代】csc t=1/x，cot t=√(1−x²)/x",
      "【答案】ln|(1 − √(1−x²))/x| + C"
    ],
    hint:"【结论】ln|(1−√(1−x²))/x| + C 【考点】三角代换",
    analysis:"【审题】带 √(1−x²) 的积分，标准三角代换 x=sin t。\n\n【思路】三角代换后根号消失，dx 里的 cos t 与分母 cos t 约掉，剩下 csc t 的积分。\n\n【步骤】\n① x=sin t，dx=cos t dt。\n② 化简得 ∫csc t dt。\n③ 公式 ∫csc t dt = ln|csc t − cot t| + C。\n④ 回代：csc t=1/x，cot t=√(1−x²)/x。\n\n【答案】ln|(1−√(1−x²))/x| + C。\n\n【易错】√(1−x²) 错用 x=sec t；不回代；漏绝对值。\n\n【口诀】根号一减 x 方，正弦代换最妥当，csc 积分 ln|csc−cot|。"
  });

  window.STUDY_DATA.questions.push({
    id:"i04", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求不定积分 ∫ x² sin x cos x dx。",
    options:[], answer:"−x² cos2x/4 + x sin2x/4 + cos2x/8 + C",
    pitfalls:["不先化简 sinx cosx=½sin2x 直接分部，越做越乱","分部两次时符号出错","最后系数 1/2 漏乘"],
    tags:["不定积分","分部积分","三角恒等"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】sinx cosx = ½sin2x，先化简再分部",
      "【化简】原式 = ½∫x² sin2x dx",
      "【第一次分部】u=x²，dv=sin2x dx；du=2x dx，v=−cos2x/2",
      "【套公式】= ½[−x² cos2x/2 + ∫x cos2x dx]",
      "【第二次分部】对 ∫x cos2x dx：u=x，dv=cos2x dx；= x sin2x/2 − ∫sin2x/2 dx = x sin2x/2 + cos2x/4",
      "【合并】= ½[−x² cos2x/2 + x sin2x/2 + cos2x/4] = −x² cos2x/4 + x sin2x/4 + cos2x/8",
      "【答案】+C"
    ],
    hint:"【结论】−x² cos2x/4 + x sin2x/4 + cos2x/8 + C 【考点】两次分部",
    analysis:"【审题】幂函数乘三角，典型分部积分，且要做两次。\n\n【思路】先倍角公式化简 sinx cosx=½sin2x，降低复杂度；再连续两次分部，多项式次数逐次降。\n\n【步骤】\n① 化简：sinx cosx=½sin2x。\n② 第一次分部：u=x²，dv=sin2x dx。\n③ 第二次分部：u=x，dv=cos2x dx。\n④ 合并并整理系数。\n\n【答案】−x² cos2x/4 + x sin2x/4 + cos2x/8 + C。\n\n【易错】不化简硬分部；两次分部符号错；系数漏乘。\n\n【口诀】幂乘三角分两部，多项式当 u，三角当 dv，次数逐次降。"
  });

  window.STUDY_DATA.questions.push({
    id:"i05", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ (1+x+x²)/(x+x³) dx。",
    options:[], answer:"ln|x| + arctan x + C",
    pitfalls:["不拆分式直接硬做","部分分式分解时系数解错"],
    tags:["不定积分","有理函数","部分分式"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】有理函数积分：先因式分解分母，再部分分式",
      "【分母】x+x³ = x(1+x²)",
      "【分解】设 (1+x+x²)/[x(1+x²)] = A/x + (Bx+C)/(1+x²)",
      "【通分比较】1+x+x² = A(1+x²) + (Bx+C)x = A + (A+B)x² + Cx",
      "【解方程】常数项 A=1；一次项 C=1；二次项 A+B=1 → B=0",
      "【结果】= 1/x + 1/(1+x²)",
      "【积分】∫ = ln|x| + arctan x + C"
    ],
    hint:"【结论】ln|x| + arctan x + C 【考点】部分分式",
    analysis:"【审题】分子三次、分母三次的有理分式，先看分母能否分解。\n\n【思路】分母 x(1+x²)，一个一次因式一个二次因式，按标准部分分式拆成 A/x + (Bx+C)/(1+x²)。\n\n【步骤】\n① 分母因式分解 x(1+x²)。\n② 通分比较系数：A=1，C=1，B=0。\n③ 积分 1/x 得 ln|x|，积分 1/(1+x²) 得 arctan x。\n\n【答案】ln|x| + arctan x + C。\n\n【易错】Bx+C 这一项漏写；把 1+x² 也当成一次式拆。\n\n【口诀】有理函数先分解，一次因式配常数，二次因式配一次。"
  });

  window.STUDY_DATA.questions.push({
    id:"i06", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ (x+1)/(x²+4x+6) dx。",
    options:[], answer:"½ln(x²+4x+6) − (1/√2)arctan((x+2)/√2) + C",
    pitfalls:["不看分母判别式 <0 硬拆根","分子凑导数时系数算错"],
    tags:["不定积分","有理函数","凑微分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】分母是二次且判别式<0：把分子凑成分母的导数",
      "【分母导数】(x²+4x+6)′ = 2x+4",
      "【凑分子】x+1 = ½(2x+4) − 1",
      "【拆分】原式 = ½∫(2x+4)/(x²+4x+6)dx − ∫1/(x²+4x+6)dx",
      "【第一块】= ½ln(x²+4x+6)",
      "【第二块】配方：x²+4x+6 = (x+2)²+2；∫1/((x+2)²+2)dx = (1/√2)arctan((x+2)/√2)",
      "【答案】½ln(x²+4x+6) − (1/√2)arctan((x+2)/√2) + C"
    ],
    hint:"【结论】½ln(x²+4x+6) − (1/√2)arctan((x+2)/√2) + C 【考点】凑微分+配方",
    analysis:"【审题】分母 x²+4x+6，判别式 16−24=−8<0，无实根，不能拆成一次因式。\n\n【思路】标准套路：把分子凑成分母导数的倍数，剩下常数项再配方用 arctan 公式。\n\n【步骤】\n① 分母导数 2x+4。\n② 分子 x+1 = ½(2x+4) − 1。\n③ 第一块凑微分得 ln；第二块配方 (x+2)²+2 用 ∫1/(u²+a²)du=(1/a)arctan(u/a)。\n\n【答案】½ln(x²+4x+6) − (1/√2)arctan((x+2)/√2) + C。\n\n【易错】硬拆无实根的二次式；配方时常数项算错。\n\n【口诀】二次无实根，先凑分母导，再配方 arctan。"
  });

  window.STUDY_DATA.questions.push({
    id:"i07", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ dx/(eˣ − e⁻ˣ)。",
    options:[], answer:"½ ln|(eˣ−1)/(eˣ+1)| + C",
    pitfalls:["不换元直接积分","分母有理化时符号错"],
    tags:["不定积分","换元积分","指数"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】eˣ 型积分：令 u=eˣ，du=eˣ dx",
      "【变形】分子分母同乘 eˣ：原式 = ∫ eˣ/(e²ˣ−1) dx",
      "【换元】u=eˣ，du=eˣ dx；原式 = ∫ du/(u²−1)",
      "【套公式】∫1/(u²−1)du = ½ln|(u−1)/(u+1)|",
      "【回代】= ½ln|(eˣ−1)/(eˣ+1)| + C"
    ],
    hint:"【结论】½ ln|(eˣ−1)/(eˣ+1)| + C 【考点】指数换元",
    analysis:"【审题】分母含 eˣ 和 e⁻ˣ，同乘 eˣ 变成标准有理函数。\n\n【思路】分子分母同乘 eˣ，把 e⁻ˣ 消掉，再令 u=eˣ，du=eˣdx 正好约掉分子 eˣ。\n\n【步骤】\n① 同乘 eˣ：∫eˣ/(e²ˣ−1)dx。\n② u=eˣ，du=eˣdx，=∫du/(u²−1)。\n③ 公式 ∫1/(u²−1)du=½ln|(u−1)/(u+1)|。\n\n【答案】½ln|(eˣ−1)/(eˣ+1)|+C。\n\n【易错】不同乘 eˣ 无法换元；公式记成 ln 不带 1/2。\n\n【口诀】e 方差一，半比对数。"
  });

  window.STUDY_DATA.questions.push({
    id:"i08", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ x/(1−x)³ dx。",
    options:[], answer:"−1/(1−x) + 1/[2(1−x)²] + C",
    pitfalls:["不换元展开(x=1−u)算错符号"],
    tags:["不定积分","换元积分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】线性式高次幂：令 u=1−x",
      "【换元】u=1−x，则 x=1−u，dx=−du",
      "【代入】原式 = ∫(1−u)/u³·(−du) = ∫(u−1)/u³ du = ∫(u⁻² − u⁻³)du",
      "【积分】= −u⁻¹ + ½u⁻²",
      "【回代】= −1/(1−x) + 1/[2(1−x)²] + C"
    ],
    hint:"【结论】−1/(1−x) + 1/[2(1−x)²] + C 【考点】线性换元",
    analysis:"【审题】分母 (1−x)³，分子 x，线性换元最干净。\n\n【步骤】\n① u=1−x，x=1−u，dx=−du。\n② 化简为幂函数积分。\n③ 回代。\n\n【答案】−1/(1−x) + 1/[2(1−x)²] + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i09", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:1, difficultyLabel:"基础", source:"integral-bank",
    stem:"求不定积分 ∫ (1+cos x)/(x+sin x) dx。",
    options:[], answer:"ln|x+sin x| + C",
    pitfalls:["看不出分子是分母的导数，硬做"],
    tags:["不定积分","凑微分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】观察：分母 (x+sinx)′ = 1+cosx，正好是分子！",
      "【凑微分】原式 = ∫ d(x+sinx)/(x+sinx)",
      "【公式】= ln|x+sinx| + C"
    ],
    hint:"【结论】ln|x+sin x| + C 【考点】凑微分",
    analysis:"【审题】一眼看出分子是分母的导数，凑微分送分题。\n\n【答案】ln|x+sin x| + C。\n\n【口诀】分子是分母导，直接 ln 绝对值。"
  });

  window.STUDY_DATA.questions.push({
    id:"i10", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ tan⁴x dx。",
    options:[], answer:"tan³x/3 − tan x + x + C",
    pitfalls:["不会降次：tan⁴ 要拆成 tan²(sec²−1)"],
    tags:["不定积分","三角恒等"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】tanⁿx 用 tan²x = sec²x − 1 降次",
      "【降次】tan⁴x = tan²x·tan²x = tan²x(sec²x − 1) = tan²x sec²x − tan²x",
      "【再降】= tan²x sec²x − (sec²x − 1)",
      "【积分】∫tan²x sec²x dx = tan³x/3；∫sec²x dx = tanx；∫1 dx = x",
      "【答案】tan³x/3 − tanx + x + C"
    ],
    hint:"【结论】tan³x/3 − tan x + x + C 【考点】tan 降次",
    analysis:"【审题】tan 的高次幂必须用 sec²−1 降次。\n\n【答案】tan³x/3 − tan x + x + C。\n\n【口诀】tan 高次先降幂，sec² 减一要记清。"
  });

  window.STUDY_DATA.questions.push({
    id:"i11", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ dx/√(x(1+x))。",
    options:[], answer:"ln|x + 1/2 + √(x²+x)| + C",
    pitfalls:["不会配方成 √(u²−a²) 型"],
    tags:["不定积分","配方","积分公式"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】√(x(1+x)) = √(x²+x)，配方成 √(u²−a²)",
      "【配方】x²+x = (x+½)² − 1/4",
      "【公式】∫du/√(u²−a²) = ln|u + √(u²−a²)|",
      "【答案】ln|x+½ + √(x²+x)| + C"
    ],
    hint:"【结论】ln|x + 1/2 + √(x²+x)| + C 【考点】配方积分",
    analysis:"【答案】ln|x + 1/2 + √(x²+x)| + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i12", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ x cos²x dx。",
    options:[], answer:"x²/4 + x sin2x/4 + cos2x/8 + C",
    pitfalls:["不先降幂 cos²x=(1+cos2x)/2"],
    tags:["不定积分","分部","降幂"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】cos²x 用降幂公式 (1+cos2x)/2",
      "【化简】原式 = ½∫x dx + ½∫x cos2x dx",
      "【第一块】= x²/4",
      "【第二块分部】∫x cos2x dx = x sin2x/2 + cos2x/4",
      "【合并】= x²/4 + x sin2x/4 + cos2x/8 + C"
    ],
    hint:"【结论】x²/4 + x sin2x/4 + cos2x/8 + C 【考点】降幂+分部",
    analysis:"【答案】x²/4 + x sin2x/4 + cos2x/8 + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i13", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求不定积分 ∫ e^(ax) cos bx dx（a,b 为常数）。",
    options:[], answer:"e^(ax)(a cos bx + b sin bx)/(a²+b²) + C",
    pitfalls:["两次分部后不回代原方程","系数 a²+b² 漏掉"],
    tags:["不定积分","分部积分","指数三角"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】指数×三角：两次分部后会出现原式，解方程",
      "【第一次分部】u=cos bx，dv=e^(ax)dx；I = e^(ax)cos bx/a + (b/a)∫e^(ax) sin bx dx",
      "【第二次分部】对 ∫e^(ax)sin bx dx：u=sin bx，dv=e^(ax)dx；= e^(ax)sin bx/a − (b/a)∫e^(ax)cos bx dx = e^(ax)sin bx/a − (b/a)I",
      "【回代】I = e^(ax)cos bx/a + (b/a)[e^(ax)sin bx/a − (b/a)I]",
      "【整理】I(1 + b²/a²) = e^(ax)(a cos bx + b sin bx)/a²",
      "【答案】I = e^(ax)(a cos bx + b sin bx)/(a²+b²) + C"
    ],
    hint:"【结论】e^(ax)(a cos bx + b sin bx)/(a²+b²) + C 【考点】循环分部",
    analysis:"【审题】指数乘三角的经典循环题，两次分部后等式两边都出现 I，解出即可。\n\n【答案】e^(ax)(a cos bx + b sin bx)/(a²+b²) + C。\n\n【口诀】指数乘三角，分部两次再解方程。"
  });

  window.STUDY_DATA.questions.push({
    id:"i14", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求不定积分 ∫ ln(1+x²) dx。",
    options:[], answer:"x ln(1+x²) − 2x + 2 arctan x + C",
    pitfalls:["分部时 u、dv 选反","化简 x²/(1+x²) 时拆错"],
    tags:["不定积分","分部积分","对数"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】对数积分：u=ln(1+x²)，dv=dx",
      "【分部】= x ln(1+x²) − ∫x·2x/(1+x²) dx = x ln(1+x²) − 2∫x²/(1+x²)dx",
      "【拆】x²/(1+x²) = 1 − 1/(1+x²)",
      "【积分】= x ln(1+x²) − 2[x − arctan x]",
      "【答案】x ln(1+x²) − 2x + 2 arctan x + C"
    ],
    hint:"【结论】x ln(1+x²) − 2x + 2 arctan x + C 【考点】对数分部",
    analysis:"【答案】x ln(1+x²) − 2x + 2 arctan x + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i15", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求不定积分 ∫ arctan√x dx。",
    options:[], answer:"(x+1)arctan√x − √x + C",
    pitfalls:["不换元直接分部","回代时漏项"],
    tags:["不定积分","换元","分部","反三角"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】反三角套根号：先换 t=√x，再分部",
      "【换元】t=√x，dx=2t dt；原式 = 2∫t arctan t dt",
      "【分部】u=arctan t，dv=2t dt；= t² arctan t − ∫t²/(1+t²)dt",
      "【拆】t²/(1+t²) = 1 − 1/(1+t²)",
      "【积分】= t² arctan t − t + arctan t = (t²+1)arctan t − t",
      "【回代】= (x+1)arctan√x − √x + C"
    ],
    hint:"【结论】(x+1)arctan√x − √x + C 【考点】换元+分部",
    analysis:"【答案】(x+1)arctan√x − √x + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i16", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求不定积分 ∫ sin x/(1+sin x) dx。",
    options:[], answer:"sec x − tan x + x + C",
    pitfalls:["不会分子分母同乘 (1−sinx) 有理化"],
    tags:["不定积分","三角有理化"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】分母 1+sinx：同乘 (1−sinx) 凑 cos²x",
      "【有理化】原式 = ∫sinx(1−sinx)/(1−sin²x) dx = ∫(sinx − sin²x)/cos²x dx",
      "【拆分】= ∫sinx/cos²x dx − ∫sin²x/cos²x dx = ∫tanx secx dx − ∫tan²x dx",
      "【积分】= secx − ∫(sec²x−1)dx = secx − tanx + x",
      "【答案】+C"
    ],
    hint:"【结论】sec x − tan x + x + C 【考点】三角有理化",
    analysis:"【答案】sec x − tan x + x + C。"
  });

  // ============ 二、定积分（牛顿-莱布尼茨 / 换元 / 奇偶对称 / 几何意义） ============

  window.STUDY_DATA.questions.push({
    id:"i17", module:"public", subject:"高等数学", chapter:"ch-math-5", knowledgePoint:"定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求定积分 ∫₀¹ 2/(eˣ + e^(2−x)) dx。",
    options:[], answer:"(2/e)[π/4 − arctan(1/e)]",
    pitfalls:["不提取公因子 e² 直接硬做","换元后上下限不更新"],
    tags:["定积分","换元积分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】分母同乘 eˣ 凑 u=eˣ",
      "【变形】原式 = ∫₀¹ 2eˣ/(e²ˣ + e²) dx",
      "【换元】u=eˣ，du=eˣdx；x=0→u=1，x=1→u=e",
      "【化简】= ∫₁^e 2/(u²+e²) du",
      "【公式】∫du/(u²+a²) = (1/a)arctan(u/a)，a=e",
      "【结果】= (2/e)arctan(u/e)|₁^e = (2/e)[arctan1 − arctan(1/e)] = (2/e)(π/4 − arctan(1/e))"
    ],
    hint:"【结论】(2/e)[π/4 − arctan(1/e)] 【考点】定积分换元",
    analysis:"【审题】分母 eˣ+e^(2−x)，先乘 eˣ 变成标准 u²+a² 型。\n\n【步骤】\n① 乘 eˣ。\n② u=eˣ 换元，更新上下限 1→e。\n③ 套 arctan 公式。\n\n【答案】(2/e)(π/4 − arctan(1/e))。"
  });

  window.STUDY_DATA.questions.push({
    id:"i18", module:"public", subject:"高等数学", chapter:"ch-math-5", knowledgePoint:"定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求定积分 ∫₀³ 1/[(x+1)(1+√(1+x))] dx。",
    options:[], answer:"2 ln(4/3)",
    pitfalls:["根号不换元","部分分式后上下限算错"],
    tags:["定积分","换元","部分分式"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】√(1+x)：令 t=√(1+x)",
      "【换元】t=√(1+x)，x=t²−1，dx=2t dt；x=0→t=1，x=3→t=2",
      "【代入】原式 = ∫₁² 1/[t²(1+t)] · 2t dt = 2∫₁² 1/[t(1+t)] dt",
      "【部分分式】1/[t(1+t)] = 1/t − 1/(1+t)",
      "【积分】2[ln t − ln(1+t)]₁²",
      "【代入】= 2[(ln2−ln3) − (ln1−ln2)] = 2[ln(2/3) + ln2] = 2 ln(4/3)"
    ],
    hint:"【结论】2 ln(4/3) 【考点】换元+部分分式",
    analysis:"【答案】2 ln(4/3)。"
  });

  window.STUDY_DATA.questions.push({
    id:"i19", module:"public", subject:"高等数学", chapter:"ch-math-5", knowledgePoint:"定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"求定积分 ∫₁^e (ln x + 1)/x² dx。",
    options:[], answer:"2 − 3/e",
    pitfalls:["分部时 v 选错","代入上下限符号错"],
    tags:["定积分","分部积分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】对数乘幂：u=lnx+1，dv=dx/x²",
      "【分部】du=dx/x，v=−1/x",
      "【套公式】= −(lnx+1)/x |₁^e + ∫₁^e (1/x)(1/x) dx",
      "【继续】= [−(lnx+1)/x − 1/x] |₁^e",
      "【代入上限 e】= −2/e − 1/e = −3/e",
      "【代入下限 1】= −1 − 1 = −2",
      "【相减】= −3/e − (−2) = 2 − 3/e"
    ],
    hint:"【结论】2 − 3/e 【考点】定积分分部",
    analysis:"【答案】2 − 3/e。"
  });

  window.STUDY_DATA.questions.push({
    id:"i20", module:"public", subject:"高等数学", chapter:"ch-math-5", knowledgePoint:"定积分",
    type:"single", typeLabel:"计算", difficulty:3, difficultyLabel:"较难", source:"integral-bank",
    stem:"求定积分 ∫₋₂² [√(4−x²) + ln(x+√(1+x²)) + x² e^(x³)] dx。",
    options:[], answer:"2π + (e⁸ − e⁻⁸)/3",
    pitfalls:["不识别奇偶函数，硬算第二块","几何意义不会用","第三块凑微分系数 3 漏"],
    tags:["定积分","奇偶对称","几何意义","凑微分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】对称区间 [−a,a] 必看奇偶；√(a²−x²) 是半圆面积",
      "【第一块】∫₋₂²√(4−x²)dx = 半径 2 的上半圆面积 = ½·π·4 = 2π",
      "【第二块】f(x)=ln(x+√(1+x²)) 是奇函数（验证 f(−x)=−f(x)），对称区间积分 = 0",
      "【第三块】∫₋₂²x² e^(x³) dx：凑微分 d(x³)=3x²dx，= (1/3)e^(x³)|₋₂²",
      "【第三块结果】= (1/3)(e⁸ − e⁻⁸)",
      "【总和】2π + 0 + (e⁸ − e⁻⁸)/3"
    ],
    hint:"【结论】2π + (e⁸ − e⁻⁸)/3 【考点】对称区间+几何意义",
    analysis:"【审题】对称区间三块，分别用几何意义、奇偶性、凑微分。\n\n【步骤】\n① √(4−x²) 是半径 2 的上半圆，面积 2π。\n② ln(x+√(1+x²)) 是奇函数，对称区间为 0。\n③ x²e^(x³) 凑 d(x³)=3x²dx。\n\n【答案】2π + (e⁸ − e⁻⁸)/3。\n\n【口诀】对称区间看奇偶，半圆面积直接出，凑微分别忘了系数。"
  });

  window.STUDY_DATA.questions.push({
    id:"i21", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:1, difficultyLabel:"基础", source:"integral-bank",
    stem:"计算不定积分 ∫ 1/[x(2 ln x + 1)] dx。",
    options:[], answer:"½ ln|2 ln x + 1| + C",
    pitfalls:["凑微分时 d(lnx)=dx/x 看不出来"],
    tags:["不定积分","凑微分","对数"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】d(lnx)=dx/x，正好分子是 dx/x",
      "【凑微分】原式 = ∫ d(lnx)/(2 lnx + 1)",
      "【再凑】令 u=2lnx+1，du=2d(lnx)；= ½∫du/u",
      "【答案】= ½ln|u| = ½ln|2lnx+1| + C"
    ],
    hint:"【结论】½ ln|2 ln x + 1| + C 【考点】凑微分",
    analysis:"【答案】½ ln|2 ln x + 1| + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i22", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:1, difficultyLabel:"基础", source:"integral-bank",
    stem:"计算不定积分 ∫ 1/√(2x+1) dx。",
    options:[], answer:"√(2x+1) + C",
    pitfalls:["凑微分漏系数 1/2"],
    tags:["不定积分","凑微分","根式"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】令 u=2x+1，du=2dx",
      "【代入】原式 = ∫ u^(−1/2)·du/2 = ½·2·u^(1/2) = √u",
      "【答案】√(2x+1) + C"
    ],
    hint:"【结论】√(2x+1) + C 【考点】根式凑微分",
    analysis:"【答案】√(2x+1) + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i23", module:"public", subject:"高等数学", chapter:"ch-math-4", knowledgePoint:"不定积分",
    type:"single", typeLabel:"计算", difficulty:2, difficultyLabel:"中等", source:"integral-bank",
    stem:"计算不定积分 ∫ x e^(2x) dx。",
    options:[], answer:"(x/2 − 1/4)e^(2x) + C",
    pitfalls:["分部后 ∫e^(2x)dx 漏除以 2"],
    tags:["不定积分","分部积分"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】幂乘指数：u=x，dv=e^(2x)dx",
      "【分部】= x·e^(2x)/2 − ∫e^(2x)/2 dx",
      "【继续】= x e^(2x)/2 − e^(2x)/4",
      "【答案】= (x/2 − 1/4)e^(2x) + C"
    ],
    hint:"【结论】(x/2 − 1/4)e^(2x) + C 【考点】分部积分",
    analysis:"【答案】(x/2 − 1/4)e^(2x) + C。"
  });

  window.STUDY_DATA.questions.push({
    id:"i24", module:"public", subject:"高等数学", chapter:"ch-math-5", knowledgePoint:"定积分",
    type:"single", typeLabel:"计算", difficulty:1, difficultyLabel:"基础", source:"integral-bank",
    stem:"求由 y=x、x=0、x=1 及 x 轴围成图形的面积。",
    options:[], answer:"1/2",
    pitfalls:["把三角形当矩形，忘除以 2"],
    tags:["定积分","几何应用"], explainLevel:"subject-specific",
    steps:[
      "【秒懂考点】定积分求面积：上减下",
      "【几何】直角三角形底 1 高 1，面积 = 1×1/2 = 1/2",
      "【积分验证】∫₀¹ x dx = x²/2|₀¹ = 1/2",
      "【答案】1/2"
    ],
    hint:"【结论】1/2 【考点】定积分几何应用",
    analysis:"【答案】1/2。"
  });

  console.log('[gxzsb] integral-bank loaded, questions appended:', 24);
})();