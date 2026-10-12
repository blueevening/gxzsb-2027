// 计网补到300
(function(){
  const S=window.STUDY_DATA=window.STUDY_DATA||{questions:[]};
  const mk=(id,kp,type,tl,diff,stem,opts,ans,ana)=>({
    id,module:"major",subject:"计算机网络基础",chapter:"ch-net-1",knowledgePoint:kp,
    type,typeLabel:tl,difficulty:diff,difficultyLabel:diff===1?"基础":diff===2?"强化":"冲刺",
    stem,options:opts,answer:ans,analysis:ana,source:"2027考纲补充",tags:[kp,"考纲补充"]
  });
  S.questions=S.questions.concat([
  mk("nn1","OSI模型","choice","单选",1,"OSI 参考模型共分（　）层。",
    ["4","5","7","6"],"7",
    "OSI 七层：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。"),
  mk("nn2","TCP/IP模型","choice","单选",1,"TCP/IP 参考模型共分（　）层。",
    ["4","5","7","6"],"4",
    "TCP/IP 四层：网络接口层、网际层、传输层、应用层。"),
  mk("nn3","IP地址","choice","单选",1,"IPv4 地址由（　）位二进制组成。",
    ["16","32","64","128"],"32",
    "IPv4 地址 32 位；IPv6 地址 128 位。"),
  mk("nn4","IP地址分类","choice","单选",2,"IP 地址 192.168.1.1 属于（　）类地址。",
    ["A","B","C","D"],"C",
    "C 类地址范围 192.0.0.0~223.255.255.255。"),
  mk("nn5","子网掩码","choice","单选",2,"C 类地址默认子网掩码是（　）",
    ["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],"255.255.255.0",
    "A类255.0.0.0，B类255.255.0.0，C类255.255.255.0。"),
  mk("nn6","TCP","choice","单选",2,"TCP 协议是（　）的。",
    ["无连接","面向连接","不可靠","无确认"],"面向连接",
    "TCP 面向连接、可靠、字节流；UDP 无连接、不可靠、数据报。"),
  mk("nn7","UDP","choice","单选",2,"UDP 协议特点是（　）",
    ["面向连接","可靠传输","无连接不可靠","三次握手"],"无连接不可靠",
    "UDP 无连接、开销小、适合实时应用（视频/语音）。"),
  mk("nn8","端口号","choice","单选",2,"HTTP 协议默认端口号是（　）",
    ["21","23","80","443"],"80",
    "HTTP 80，HTTPS 443，FTP 21，SSH 22，Telnet 23，DNS 53。"),
  mk("nn9","DNS","choice","单选",2,"DNS 的作用是（　）",
    ["传输文件","域名解析为 IP 地址","发送邮件","路由选择"],"域名解析为 IP 地址",
    "DNS 域名系统，将域名解析为 IP 地址。"),
  mk("nn10","MAC地址","choice","单选",1,"MAC 地址长度为（　）字节。",
    ["4","6","8","16"],"6",
    "MAC 地址 48 位=6 字节，固化在网卡中。")
  ]);
})();
