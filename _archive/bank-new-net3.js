/* 新增题库 - 2026考纲版 - 计算机网络基础 第三批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 网络概述 - 再补充 =====
  {
    id: "nn1201", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "网络拓扑", type: "single", typeLabel: "单选",
    stem: "星型拓扑结构的中心节点是（　）",
    options: ["交换机", "路由器", "防火墙", "调制解调器"],
    answer: "交换机",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络概述", "拓扑"],
    analysis: "【题干】星型拓扑中心节点是？\n【考点】网络拓扑结构\n【详细解答】\n1. 星型拓扑：所有节点都连到中心节点（交换机/集线器）。\n2. 优点：容易添加新节点，某个节点故障不影响其他。\n3. 缺点：中心节点故障整个网络瘫痪。\n【选项逐个说】\nA. 交换机 → 正确。\nB. 路由器 → 错误：那是网络层设备。\nC. 防火墙 → 错误。\nD. 调制解调器 → 错误。\n【答案】交换机\n【易错】星型中心是交换机。"
  },
  {
    id: "nn1202", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "TCP/IP模型", type: "single", typeLabel: "单选",
    stem: "TCP/IP模型共分几层？（　）",
    options: ["4层", "5层", "7层", "8层"],
    answer: "4层",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络概述", "TCP/IP"],
    analysis: "【题干】TCP/IP模型分几层？\n【考点】TCP/IP模型\n【详细解答】\n1. TCP/IP模型4层：网络接口层、网际层、传输层、应用层。\n2. OSI是7层。\n3. 教学模型是5层：物理层、数据链路层、网络层、传输层、应用层。\n【选项逐个说】\nA. 4层 → 正确。\nB. 5层 → 错误：教学模型。\nC. 7层 → 错误：OSI。\nD. 8层 → 错误。\n【答案】4层\n【易错】TCP/IP 4层，OSI 7层。"
  },

  // ===== 第2章 物理层 - 再补充 =====
  {
    id: "nn2201", module: "major", subject: "计算机网络基础", chapter: "ch-net-2",
    knowledgePoint: "双绞线", type: "single", typeLabel: "单选",
    stem: "双绞线用什么接头？（　）",
    options: ["RJ45", "RJ11", "BNC", "USB"],
    answer: "RJ45",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["物理层", "双绞线"],
    analysis: "【题干】双绞线用什么接头？\n【考点】传输介质\n【详细解答】\n1. 双绞线（网线）用RJ45接头。\n2. 电话线用RJ11接头。\n3. 同轴电缆用BNC接头。\n【选项逐个说】\nA. RJ45 → 正确：网线水晶头。\nB. RJ11 → 错误：电话线。\nC. BNC → 错误：同轴。\nD. USB → 错误。\n【答案】RJ45\n【易错】RJ45网线，RJ11电话线。"
  },

  // ===== 第3章 数据链路层 - 再补充 =====
  {
    id: "nn3201", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "以太网MAC地址", type: "single", typeLabel: "单选",
    stem: "MAC地址通常表示为多少位十六进制数？（　）",
    options: ["12位", "6位", "32位", "8位"],
    answer: "12位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据链路层", "MAC地址"],
    analysis: "【题干】MAC地址几位十六进制？\n【考点】MAC地址表示\n【详细解答】\n1. MAC地址48位二进制 = 12位十六进制数。\n2. 例：00-0C-29-AB-CD-EF。\n3. 每两个十六进制位对应一个字节。\n【选项逐个说】\nA. 12位 → 正确：48位二进制=12位十六进制。\nB. 6位 → 错误。\nC. 32位 → 错误：那是IPv4。\nD. 8位 → 错误。\n【答案】12位\n【易错】MAC 48位=12个十六进制字符。"
  },
  {
    id: "nn3202", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "交换机MAC地址表", type: "single", typeLabel: "单选",
    stem: "交换机的MAC地址表是通过什么学习到的？（　）",
    options: ["源MAC地址学习", "目的MAC地址学习", "手工配置", "广播请求"],
    answer: "源MAC地址学习",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "交换机"],
    analysis: "【题干】交换机MAC地址表怎么学的？\n【考点】交换机自学习\n【详细解答】\n1. 交换机收到一个帧，读取源MAC地址。\n2. 把 源MAC + 接收端口 写入MAC地址表。\n3. 这就是\"逆向学习\"算法。\n4. 转发帧时看目的MAC。\n【选项逐个说】\nA. 源MAC地址学习 → 正确。\nB. 目的MAC地址学习 → 错误。\nC. 手工配置 → 错误：默认自动学习。\nD. 广播请求 → 错误。\n【答案】源MAC地址学习\n【易错】学习看源MAC，转发看目的MAC。"
  },
  {
    id: "nn3203", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "VLAN", type: "single", typeLabel: "单选",
    stem: "VLAN标准是（　）",
    options: ["802.1Q", "802.3", "802.11", "802.1X"],
    answer: "802.1Q",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "VLAN"],
    analysis: "【题干】VLAN标准是？\n【考点】常见IEEE标准\n【详细解答】\n1. 802.1Q：VLAN标准（以太网帧加VLAN标签）。\n2. 802.3：以太网标准。\n3. 802.11：无线局域网标准（WiFi）。\n4. 802.1X：端口认证标准。\n【选项逐个说】\nA. 802.1Q → 正确。\nB. 802.3 → 错误：以太网。\nC. 802.11 → 错误：WiFi。\nD. 802.1X → 错误：认证。\n【答案】802.1Q\n【易错】802.1Q是VLAN。"
  },

  // ===== 第4章 网络层 - 再补充 =====
  {
    id: "nn4201", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "IP地址分类", type: "single", typeLabel: "单选",
    stem: "IP地址128.10.20.30属于哪一类？（　）",
    options: ["A类", "B类", "C类", "D类"],
    answer: "B类",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络层", "IP分类"],
    analysis: "【题干】128.10.20.30是哪类？\n【考点】IP地址分类\n【详细解答】\n1. A类：1~126。\n2. B类：128~191。\n3. C类：192~223。\n4. 128在128~191之间，所以是B类。\n【选项逐个说】\nA. A类 → 错误。\nB. B类 → 正确。\nC. C类 → 错误。\nD. D类 → 错误：组播。\n【答案】B类\n【易错】A 1-126，B 128-191，C 192-223。"
  },
  {
    id: "nn4202", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "子网掩码", type: "single", typeLabel: "单选",
    stem: "B类地址默认子网掩码是（　）",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    answer: "255.255.0.0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络层", "子网掩码"],
    analysis: "【题干】B类默认掩码？\n【考点】默认子网掩码\n【详细解答】\n1. A类默认：255.0.0.0（8位网络位）。\n2. B类默认：255.255.0.0（16位网络位）。\n3. C类默认：255.255.255.0（24位网络位）。\n【选项逐个说】\nA. 255.0.0.0 → 错误：A类。\nB. 255.255.0.0 → 正确：B类。\nC. 255.255.255.0 → 错误：C类。\nD. 255.255.255.255 → 错误。\n【答案】255.255.0.0\n【易错】A8，B16，C24。"
  },
  {
    id: "nn4203", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "IPv6", type: "single", typeLabel: "单选",
    stem: "IPv6地址长度是多少位？（　）",
    options: ["32位", "64位", "128位", "256位"],
    answer: "128位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络层", "IPv6"],
    analysis: "【题干】IPv6地址长度？\n【考点】IPv6\n【详细解答】\n1. IPv4地址：32位，约43亿个地址。\n2. IPv6地址：128位，地址数量几乎无限。\n3. IPv6用冒号分隔的十六进制表示。\n【选项逐个说】\nA. 32位 → 错误：那是IPv4。\nB. 64位 → 错误。\nC. 128位 → 正确。\nD. 256位 → 错误。\n【答案】128位\n【易错】IPv4 32位，IPv6 128位。"
  },

  // ===== 第5章 传输层 - 再补充 =====
  {
    id: "nn5201", module: "major", subject: "计算机网络基础", chapter: "ch-net-5",
    knowledgePoint: "端口作用", type: "single", typeLabel: "单选",
    stem: "传输层端口号的作用是（　）",
    options: ["标识主机", "标识进程/应用", "标识网络", "标识接口"],
    answer: "标识进程/应用",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["传输层", "端口"],
    analysis: "【题干】端口号的作用？\n【考点】端口号\n【详细解答】\n1. IP地址标识主机。\n2. 端口号标识主机上的具体应用/进程。\n3. IP+端口 = 唯一标识网络中的一个通信进程。\n【选项逐个说】\nA. 标识主机 → 错误：那是IP地址。\nB. 标识进程/应用 → 正确。\nC. 标识网络 → 错误。\nD. 标识接口 → 错误。\n【答案】标识进程/应用\n【易错】IP找主机，端口找应用。"
  },
  {
    id: "nn5202", module: "major", subject: "计算机网络基础", chapter: "ch-net-5",
    knowledgePoint: "TCP流量控制", type: "single", typeLabel: "单选",
    stem: "TCP流量控制使用什么机制？（　）",
    options: ["滑动窗口", "慢启动", "拥塞避免", "快重传"],
    answer: "滑动窗口",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["传输层", "TCP"],
    analysis: "【题干】TCP流量控制用什么？\n【考点】TCP流量与拥塞控制\n【详细解答】\n1. 流量控制：滑动窗口机制，控制发送方不要发太快，接收方来得及收。\n2. 拥塞控制：慢启动、拥塞避免、快重传、快恢复。\n3. 流量控制是端到端的，拥塞控制是整个网络的。\n【选项逐个说】\nA. 滑动窗口 → 正确：流量控制。\nB. 慢启动 → 错误：拥塞控制。\nC. 拥塞避免 → 错误：拥塞控制。\nD. 快重传 → 错误：拥塞控制。\n【答案】滑动窗口\n【易错】流量控制=滑动窗口，拥塞控制=慢启动等。"
  },

  // ===== 第6章 应用层 - 再补充 =====
  {
    id: "nn6201", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "DNS", type: "single", typeLabel: "单选",
    stem: "DNS协议使用什么传输层协议？（　）",
    options: ["TCP", "UDP", "IP", "ARP"],
    answer: "UDP",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["应用层", "DNS"],
    analysis: "【题干】DNS用什么传输层协议？\n【考点】应用层协议与传输层\n【详细解答】\n1. DNS查询一般用UDP（快）。\n2. DNS区域传送用TCP（可靠）。\n3. HTTP用TCP，FTP用TCP，TFTP用UDP。\n【选项逐个说】\nA. TCP → 错误：区域传送才用。\nB. UDP → 正确：查询用UDP。\nC. IP → 错误：网络层。\nD. ARP → 错误：数据链路层。\n【答案】UDP\n【易错】DNS查询用UDP。"
  },
  {
    id: "nn6202", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "DHCP", type: "single", typeLabel: "单选",
    stem: "DHCP分配IP地址的过程有几步？（　）",
    options: ["2步", "3步", "4步", "5步"],
    answer: "4步",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["应用层", "DHCP"],
    analysis: "【题干】DHCP过程几步？\n【考点】DHCP工作过程\n【详细解答】\n1. DHCP四步：发现、提供、请求、确认。\n2. Discover：客户端广播找DHCP服务器。\n3. Offer：服务器提供IP。\n4. Request：客户端请求使用这个IP。\n5. ACK：服务器确认。\n【选项逐个说】\nA. 2步 → 错误。\nB. 3步 → 错误。\nC. 4步 → 正确。\nD. 5步 → 错误。\n【答案】4步\n【易错】DHCP DORA四步：Discover, Offer, Request, ACK。"
  }
]);
