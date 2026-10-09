/* 新增题库 - 2026考纲版 - 计算机网络基础 第一批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 计算机网络概述 =====
  {
    id: "nn1001", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "网络分类", type: "single", typeLabel: "单选",
    stem: "按覆盖范围，计算机网络可分为（　）",
    options: ["LAN、MAN、WAN", "星型、总线型、环型", "有线、无线", "电路交换、分组交换"],
    answer: "LAN、MAN、WAN",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络概述", "分类"],
    analysis: "【题干】按覆盖范围，网络分哪几类？\n【考点】网络分类\n【详细解答】\n1. 按覆盖范围分：\n2. LAN（局域网）：校园、企业，几公里。\n3. MAN（城域网）：城市范围。\n4. WAN（广域网）：国家、全球。\n5. 星型/总线型是按拓扑结构分的。\n【选项逐个说】\nA. LAN、MAN、WAN → 正确：按范围分。\nB. 星型、总线型、环型 → 错误：按拓扑分。\nC. 有线、无线 → 错误：按传输介质分。\nD. 电路交换、分组交换 → 错误：按交换方式分。\n【答案】LAN、MAN、WAN\n【易错】按范围：LAN<MAN<WAN。"
  },
  {
    id: "nn1002", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "OSI参考模型", type: "single", typeLabel: "单选",
    stem: "OSI参考模型共分为几层？（　）",
    options: ["4层", "5层", "7层", "8层"],
    answer: "7层",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["OSI", "分层"],
    analysis: "【题干】OSI参考模型分几层？\n【考点】OSI七层模型\n【详细解答】\n1. OSI七层模型（从下到上）：\n   物理层 → 数据链路层 → 网络层 → 传输层 → 会话层 → 表示层 → 应用层。\n2. 记忆口诀：物-数-网-传-会-表-用。\n3. TCP/IP模型是4层：网络接口层、网际层、传输层、应用层。\n【选项逐个说】\nA. 4层 → 错误：那是TCP/IP。\nB. 5层 → 错误：教学模型。\nC. 7层 → 正确。\nD. 8层 → 错误。\n【答案】7层\n【易错】OSI是7层，TCP/IP是4层。"
  },
  {
    id: "nn1003", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "协议三要素", type: "single", typeLabel: "单选",
    stem: "网络协议的三要素是（　）",
    options: ["语法、语义、同步", "结构、层次、接口", "硬件、软件、线路", "源、目的、路由"],
    answer: "语法、语义、同步",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络协议", "三要素"],
    analysis: "【题干】网络协议三要素是？\n【考点】网络协议\n【详细解答】\n1. 语法：数据与控制信息的结构或格式。\n2. 语义：需要发出何种控制信息，完成何种动作。\n3. 同步：事件实现顺序的详细说明。\n【选项逐个说】\nA. 语法、语义、同步 → 正确。\nB. 结构、层次、接口 → 错误。\nC. 硬件、软件、线路 → 错误。\nD. 源、目的、路由 → 错误。\n【答案】语法、语义、同步\n【易错】协议三要素：语法、语义、同步。"
  },

  // ===== 第2章 物理层 =====
  {
    id: "nn2001", module: "major", subject: "计算机网络基础", chapter: "ch-net-2",
    knowledgePoint: "传输介质", type: "single", typeLabel: "单选",
    stem: "以下哪种传输介质抗干扰能力最强？（　）",
    options: ["双绞线", "同轴电缆", "光纤", "电话线"],
    answer: "光纤",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["物理层", "传输介质"],
    analysis: "【题干】抗干扰能力最强的传输介质？\n【考点】传输介质比较\n【详细解答】\n1. 光纤：用光信号传输，不受电磁干扰，带宽大，距离远。\n2. 双绞线：便宜，但容易受干扰。\n3. 同轴电缆：比双绞线抗干扰好，但不如光纤。\n4. 光纤是目前性能最好的传输介质。\n【选项逐个说】\nA. 双绞线 → 错误。\nB. 同轴电缆 → 错误。\nC. 光纤 → 正确。\nD. 电话线 → 错误。\n【答案】光纤\n【易错】光纤用光，不受电磁干扰。"
  },
  {
    id: "nn2002", module: "major", subject: "计算机网络基础", chapter: "ch-net-2",
    knowledgePoint: "多路复用", type: "single", typeLabel: "单选",
    stem: "FDM是指（　）",
    options: ["频分复用", "时分复用", "波分复用", "码分复用"],
    answer: "频分复用",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["物理层", "多路复用"],
    analysis: "【题干】FDM是什么？\n【考点】多路复用技术\n【详细解答】\n1. FDM（频分复用）：按频率划分信道。\n2. TDM（时分复用）：按时间划分信道。\n3. WDM（波分复用）：光的频分复用。\n4. CDMA（码分复用）：按码型划分信道。\n【选项逐个说】\nA. 频分复用 → 正确。\nB. 时分复用 → 错误：那是TDM。\nC. 波分复用 → 错误：那是WDM。\nD. 码分复用 → 错误：那是CDMA。\n【答案】频分复用\n【易错】FDM频分，TDM时分。"
  },

  // ===== 第3章 数据链路层 =====
  {
    id: "nn3001", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "MAC地址", type: "single", typeLabel: "单选",
    stem: "MAC地址的长度是多少位？（　）",
    options: ["32位", "48位", "64位", "128位"],
    answer: "48位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据链路层", "MAC地址"],
    analysis: "【题干】MAC地址长度？\n【考点】MAC地址\n【详细解答】\n1. MAC地址（物理地址）：48位（6字节）。\n2. 烧录在网卡上，全球唯一。\n3. 前24位是厂商代码，后24位是设备编号。\n4. IP地址是32位（IPv4）。\n【选项逐个说】\nA. 32位 → 错误：那是IPv4。\nB. 48位 → 正确。\nC. 64位 → 错误。\nD. 128位 → 错误：那是IPv6。\n【答案】48位\n【易错】MAC是48位，IPv4是32位，IPv6是128位。"
  },
  {
    id: "nn3002", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "CSMA/CD", type: "single", typeLabel: "单选",
    stem: "CSMA/CD协议用于解决什么问题？（　）",
    options: ["流量控制", "拥塞控制", "冲突检测", "差错恢复"],
    answer: "冲突检测",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "CSMA/CD"],
    analysis: "【题干】CSMA/CD解决什么问题？\n【考点】CSMA/CD\n【详细解答】\n1. CSMA/CD = 载波监听多点接入/碰撞检测。\n2. 工作原理：先听后发，边发边听，冲突停发，随机重发。\n3. 用于传统以太网的共享信道冲突问题。\n4. 交换机全双工模式不需要CSMA/CD。\n【选项逐个说】\nA. 流量控制 → 错误：那是滑动窗口。\nB. 拥塞控制 → 错误：那是TCP。\nC. 冲突检测 → 正确。\nD. 差错恢复 → 错误。\n【答案】冲突检测\n【易错】CSMA/CD是以太网的碰撞检测协议。"
  },
  {
    id: "nn3003", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "交换机", type: "single", typeLabel: "单选",
    stem: "以太网交换机工作在OSI模型的哪一层？（　）",
    options: ["物理层", "数据链路层", "网络层", "传输层"],
    answer: "数据链路层",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据链路层", "交换机"],
    analysis: "【题干】交换机工作在哪一层？\n【考点】设备与层次对应\n【详细解答】\n1. 集线器（Hub）：物理层。\n2. 交换机（Switch）：数据链路层（二层）。\n3. 路由器（Router）：网络层（三层）。\n4. 交换机根据MAC地址转发帧。\n【选项逐个说】\nA. 物理层 → 错误：那是集线器。\nB. 数据链路层 → 正确。\nC. 网络层 → 错误：那是路由器。\nD. 传输层 → 错误。\n【答案】数据链路层\n【易错】集线器物理层，交换机链路层，路由器网络层。"
  },
  {
    id: "nn3004", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "VLAN", type: "single", typeLabel: "单选",
    stem: "VLAN的主要作用是（　）",
    options: ["增大冲突域", "分割广播域", "提高物理层速率", "增加IP地址数"],
    answer: "分割广播域",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "VLAN"],
    analysis: "【题干】VLAN的主要作用？\n【考点】VLAN虚拟局域网\n【详细解答】\n1. VLAN（虚拟局域网）在交换机上划分逻辑网络。\n2. 不同VLAN之间广播帧不互通，即分割了广播域。\n3. 提高安全性，减少广播风暴。\n4. VLAN隔离广播，不是隔离冲突。\n【选项逐个说】\nA. 增大冲突域 → 错误。\nB. 分割广播域 → 正确。\nC. 提高物理层速率 → 错误。\nD. 增加IP地址数 → 错误。\n【答案】分割广播域\n【易错】VLAN隔离广播域。"
  },
  {
    id: "nn3005", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "ARP协议", type: "single", typeLabel: "单选",
    stem: "ARP协议的作用是（　）",
    options: ["将IP地址解析为MAC地址", "将MAC地址解析为IP地址", "将域名解析为IP地址", "将IP地址解析为域名"],
    answer: "将IP地址解析为MAC地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "ARP"],
    analysis: "【题干】ARP协议的作用？\n【考点】ARP协议\n【详细解答】\n1. ARP（地址解析协议）：将IP地址解析为MAC地址。\n2. 已知IP，求MAC。\n3. RARP：将MAC地址解析为IP地址。\n4. DNS：将域名解析为IP地址。\n【选项逐个说】\nA. 将IP地址解析为MAC地址 → 正确。\nB. 将MAC地址解析为IP地址 → 错误：那是RARP。\nC. 将域名解析为IP地址 → 错误：那是DNS。\nD. 将IP地址解析为域名 → 错误：那是反向DNS。\n【答案】将IP地址解析为MAC地址\n【易错】ARP：IP→MAC。"
  },

  // ===== 第4章 网络层 =====
  {
    id: "nn4001", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "IP地址分类", type: "single", typeLabel: "单选",
    stem: "IP地址192.168.1.1属于哪一类？（　）",
    options: ["A类", "B类", "C类", "D类"],
    answer: "C类",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络层", "IP地址分类"],
    analysis: "【题干】192.168.1.1是哪类IP？\n【考点】IP地址分类\n【详细解答】\n1. A类：1~126（第一个字节）。\n2. B类：128~191。\n3. C类：192~223。\n4. 192在192~223之间，所以是C类。\n5. 私有地址：192.168.x.x是C类私有地址。\n【选项逐个说】\nA. A类 → 错误。\nB. B类 → 错误。\nC. C类 → 正确。\nD. D类 → 错误：组播地址。\n【答案】C类\n【易错】A类1-126，B类128-191，C类192-223。"
  },
  {
    id: "nn4002", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "子网掩码", type: "single", typeLabel: "单选",
    stem: "C类地址默认的子网掩码是（　）",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    answer: "255.255.255.0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络层", "子网掩码"],
    analysis: "【题干】C类默认子网掩码？\n【考点】默认子网掩码\n【详细解答】\n1. A类默认掩码：255.0.0.0（8位网络位）。\n2. B类默认掩码：255.255.0.0（16位网络位）。\n3. C类默认掩码：255.255.255.0（24位网络位）。\n【选项逐个说】\nA. 255.0.0.0 → 错误：A类。\nB. 255.255.0.0 → 错误：B类。\nC. 255.255.255.0 → 正确：C类。\nD. 255.255.255.255 → 错误：主机地址。\n【答案】255.255.255.0\n【易错】A类8位，B类16位，C类24位。"
  },
  {
    id: "nn4003", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "私有地址", type: "single", typeLabel: "单选",
    stem: "以下哪个是私有IP地址？（　）",
    options: ["202.96.128.86", "192.168.1.1", "114.114.114.114", "8.8.8.8"],
    answer: "192.168.1.1",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络层", "私有地址"],
    analysis: "【题干】哪个是私有IP？\n【考点】私有地址范围\n【详细解答】\n1. A类私有：10.0.0.0/8。\n2. B类私有：172.16.0.0/12（172.16~172.31）。\n3. C类私有：192.168.0.0/16。\n4. 私有地址不能直接上公网，需要NAT转换。\n【选项逐个说】\nA. 202.96.128.86 → 错误：公网地址。\nB. 192.168.1.1 → 正确：C类私有。\nC. 114.114.114.114 → 错误：公网DNS。\nD. 8.8.8.8 → 错误：Google公网DNS。\n【答案】192.168.1.1\n【易错】私有地址：10.x、172.16-31.x、192.168.x。"
  },
  {
    id: "nn4004", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "ping命令", type: "single", typeLabel: "单选",
    stem: "ping命令使用的是什么协议？（　）",
    options: ["IP", "ICMP", "TCP", "UDP"],
    answer: "ICMP",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络层", "ping"],
    analysis: "【题干】ping用什么协议？\n【考点】ICMP协议\n【详细解答】\n1. ping使用ICMP协议（互联网控制报文协议）。\n2. 发送ICMP Echo Request，接收Echo Reply。\n3. 用来测试网络连通性。\n4. traceroute也是用ICMP。\n【选项逐个说】\nA. IP → 错误：ICMP是封装在IP里的。\nB. ICMP → 正确。\nC. TCP → 错误。\nD. UDP → 错误。\n【答案】ICMP\n【易错】ping和traceroute都是ICMP。"
  },
  {
    id: "nn4005", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "路由协议", type: "single", typeLabel: "单选",
    stem: "RIP协议是一种什么路由协议？（　）",
    options: ["距离矢量", "链路状态", "路径矢量", "外部网关"],
    answer: "距离矢量",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络层", "路由协议"],
    analysis: "【题干】RIP是什么路由协议？\n【考点】内部路由协议\n【详细解答】\n1. RIP：距离矢量路由协议，跳数为度量。\n2. OSPF：链路状态路由协议。\n3. BGP：路径矢量路由协议，外部网关协议。\n4. RIP最大跳数15，16不可达。\n【选项逐个说】\nA. 距离矢量 → 正确：RIP。\nB. 链路状态 → 错误：那是OSPF。\nC. 路径矢量 → 错误：那是BGP。\nD. 外部网关 → 错误：那是BGP。\n【答案】距离矢量\n【易错】RIP距离矢量，OSPF链路状态。"
  },

  // ===== 第5章 传输层 =====
  {
    id: "nn5001", module: "major", subject: "计算机网络基础", chapter: "ch-net-5",
    knowledgePoint: "TCP与UDP", type: "single", typeLabel: "单选",
    stem: "以下关于TCP和UDP的叙述，正确的是（　）",
    options: ["TCP是无连接的，UDP是面向连接的", "TCP提供可靠传输，UDP不保证可靠", "TCP传输效率比UDP高", "TCP首部开销比UDP小"],
    answer: "TCP提供可靠传输，UDP不保证可靠",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["传输层", "TCP vs UDP"],
    analysis: "【题干】关于TCP和UDP，正确的是？\n【考点】TCP与UDP对比\n【详细解答】\n1. TCP：面向连接、可靠传输、字节流、首部20字节、有拥塞控制。\n2. UDP：无连接、不可靠、数据报、首部8字节、开销小效率高。\n3. TCP适合文件传输、邮件、网页。\n4. UDP适合视频通话、直播、游戏。\n【选项逐个说】\nA. TCP是无连接的，UDP是面向连接的 → 错误：反了。\nB. TCP提供可靠传输，UDP不保证可靠 → 正确。\nC. TCP传输效率比UDP高 → 错误：UDP更快。\nD. TCP首部开销比UDP小 → 错误：TCP首部更大。\n【答案】TCP提供可靠传输，UDP不保证可靠\n【易错】TCP可靠但慢，UDP快但不可靠。"
  },
  {
    id: "nn5002", module: "major", subject: "计算机网络基础", chapter: "ch-net-5",
    knowledgePoint: "TCP连接建立", type: "single", typeLabel: "单选",
    stem: "TCP建立连接需要几次握手？（　）",
    options: ["2次", "3次", "4次", "5次"],
    answer: "3次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["传输层", "TCP连接"],
    analysis: "【题干】TCP建立连接几次握手？\n【考点】TCP三次握手\n【详细解答】\n1. TCP建立连接：三次握手。\n2. 第一次：客户端发SYN。\n3. 第二次：服务器回SYN+ACK。\n4. 第三次：客户端发ACK。\n5. 断开连接是四次挥手。\n【选项逐个说】\nA. 2次 → 错误。\nB. 3次 → 正确。\nC. 4次 → 错误：那是断开。\nD. 5次 → 错误。\n【答案】3次\n【易错】建立三次握手，断开四次挥手。"
  },

  // ===== 第6章 应用层 =====
  {
    id: "nn6001", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "常用端口", type: "single", typeLabel: "单选",
    stem: "HTTP协议默认端口号是（　）",
    options: ["21", "23", "80", "110"],
    answer: "80",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["应用层", "端口号"],
    analysis: "【题干】HTTP默认端口？\n【考点】常用端口号\n【详细解答】\n1. HTTP：80。\n2. HTTPS：443。\n3. FTP：20/21。\n4. SSH：22。\n5. Telnet：23。\n6. DNS：53。\n7. SMTP：25。\n8. POP3：110。\n【选项逐个说】\nA. 21 → 错误：FTP。\nB. 23 → 错误：Telnet。\nC. 80 → 正确：HTTP。\nD. 110 → 错误：POP3。\n【答案】80\n【易错】80 HTTP，443 HTTPS，21 FTP，22 SSH，23 Telnet，53 DNS。"
  },
  {
    id: "nn6002", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "DNS", type: "single", typeLabel: "单选",
    stem: "DNS协议的作用是（　）",
    options: ["将域名解析为IP地址", "将IP地址解析为MAC地址", "分配IP地址", "传输网页"],
    answer: "将域名解析为IP地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["应用层", "DNS"],
    analysis: "【题干】DNS的作用是？\n【考点】DNS域名系统\n【详细解答】\n1. DNS（域名系统）：将域名解析为IP地址。\n2. 例：www.baidu.com → 180.101.50.242。\n3. ARP是IP→MAC，DNS是域名→IP。\n4. DHCP是自动分配IP地址。\n【选项逐个说】\nA. 将域名解析为IP地址 → 正确。\nB. 将IP地址解析为MAC地址 → 错误：那是ARP。\nC. 分配IP地址 → 错误：那是DHCP。\nD. 传输网页 → 错误：那是HTTP。\n【答案】将域名解析为IP地址\n【易错】DNS域名→IP，ARP IP→MAC。"
  },
  {
    id: "nn6003", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "DHCP", type: "single", typeLabel: "单选",
    stem: "DHCP协议的作用是（　）",
    options: ["自动分配IP地址", "域名解析", "文件传输", "远程登录"],
    answer: "自动分配IP地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["应用层", "DHCP"],
    analysis: "【题干】DHCP的作用是？\n【考点】DHCP动态主机配置\n【详细解答】\n1. DHCP（动态主机配置协议）：自动给主机分配IP地址。\n2. 自动分配IP、子网掩码、网关、DNS。\n3. 不需要手动设置IP，即插即用。\n4. DNS是域名解析，FTP是文件传输，Telnet是远程登录。\n【选项逐个说】\nA. 自动分配IP地址 → 正确。\nB. 域名解析 → 错误：那是DNS。\nC. 文件传输 → 错误：那是FTP。\nD. 远程登录 → 错误：那是Telnet/SSH。\n【答案】自动分配IP地址\n【易错】DHCP自动分IP。"
  }
]);
