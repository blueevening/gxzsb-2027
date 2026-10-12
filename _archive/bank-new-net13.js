// 计网补充 第6批（最后10题到500）
(function(){
  const S=window.STUDY_DATA=window.STUDY_DATA||{questions:[]};
  const mk=(id,kp,type,tl,diff,stem,opts,ans,ana)=>({
    id,module:"major",subject:"计算机网络基础",chapter:"ch-net-1",knowledgePoint:kp,
    type,typeLabel:tl,difficulty:diff,difficultyLabel:diff===1?"基础":diff===2?"强化":"冲刺",
    stem,options:opts,answer:ans,analysis:ana,source:"2027考纲补充",tags:[kp,"考纲补充"]
  });
  S.questions=S.questions.concat([
  mk("nn201","综合","choice","单选",1,"互联网采用的核心协议是（　）",
    ["TCP/IP","IPX/SPX","NetBEUI","AppleTalk"],"TCP/IP",
    "互联网核心 TCP/IP。"),
  mk("nn202","综合","choice","单选",1,"计算机网络最基本的目标是（　）",
    ["数据通信和资源共享","提高速度","存储数据","数据处理"],"数据通信和资源共享",
    "网络两大功能。"),
  mk("nn203","综合","choice","单选",2,"OSI 模型中，数据加密在（　）层。",
    ["表示","应用","会话","传输"],"表示",
    "表示层负责加密压缩。"),
  mk("nn204","综合","choice","单选",2,"以太网 MAC 地址长度（　）位。",
    ["32","48","64","128"],"48",
    "MAC 48位。"),
  mk("nn205","综合","choice","单选",2,"IP 地址由（　）位二进制组成。",
    ["32","48","64","128"],"32",
    "IPv4 32位。"),
  mk("nn206","综合","choice","单选",2,"下列哪个是 B 类地址？",
    ["128.0.0.1","10.0.0.1","192.168.1.1","224.0.0.1"],"128.0.0.1",
    "B 类 128~191。"),
  mk("nn207","综合","choice","单选",2,"子网掩码 255.255.255.0 对应（　）类地址默认掩码。",
    ["A","B","C","D"],"C",
    "C 类默认 /24。"),
  mk("nn208","综合","choice","单选",2,"TCP 建立连接时，第二次报文标志位是（　）",
    ["SYN+ACK","SYN","ACK","FIN"],"SYN+ACK",
    "第二次握手 SYN+ACK。"),
  mk("nn209","综合","choice","单选",2,"HTTP 默认端口号是（　）",
    ["80","443","21","25"],"80",
    "HTTP 80。"),
  mk("nn210","综合","choice","单选",2,"能上 QQ 但打不开网页，最可能原因是（　）故障。",
    ["DNS","IP","网关","网卡"],"DNS",
    "QQ 用 IP，网页需 DNS。")
  ]);
})();
