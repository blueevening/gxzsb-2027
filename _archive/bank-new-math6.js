// 数学补到500
(function(){
  const S=window.STUDY_DATA=window.STUDY_DATA||{questions:[]};
  const mk=(id,kp,type,tl,diff,stem,opts,ans,ana)=>({
    id,module:"public",subject:"高等数学",chapter:"ch-math-1",knowledgePoint:kp,
    type,typeLabel:tl,difficulty:diff,difficultyLabel:diff===1?"基础":diff===2?"强化":"冲刺",
    stem,options:opts,answer:ans,analysis:ana,source:"2027考纲补充",tags:[kp,"考纲补充"]
  });
  S.questions=S.questions.concat([
  mk("nm172","极限","choice","单选",1,"lim(x→0) (frac{sin 5x}{x}) =（　）",
    ["5","1","1/5","0"],"5",
    "sin5x~5x，极限=5。"),
  mk("nm173","导数","choice","单选",1,"y=x·ln x，则 y′=（　）",
    ["ln x+1","ln x","1/x","x ln x"],"ln x+1",
    "乘积法则：y'=lnx+x·(1/x)=lnx+1。"),
  mk("nm174","定积分","choice","单选",1,"∫₀^π sin x dx =（　）",
    ["2","0","1","π"],"2",
    "[-cosx]₀^π=-cosπ+cos0=1+1=2。"),
  mk("nm175","微分方程","choice","单选",2,"y′=3x² 的通解是（　）",
    ["y=x³+C","y=3x+C","y=x²+C","y=6x+C"],"y=x³+C",
    "积分：y=x³+C。"),
  mk("nm176","极限","choice","单选",1,"lim(x→∞) (1 + frac{1}{x})^x =（　）",
    ["1","e","0","∞"],"e",
    "重要极限：(1+1/x)^x→e。")
  ]);
})();
