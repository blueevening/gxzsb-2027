/* 新增题库 - 2026考纲版 - 计算机网络基础 第二批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 网络概述 - 补充 =====
  {
    id: "nn1101", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "电路交换与分组交换", type: "single", typeLabel: "单选",
    stem: "电路交换的特点是（　）",
    options: ["建立连接、独占线路、传输结束后释放", "存储转发、动态分配带宽", "不需要建立连接", "分组独立路由"],
    answer: "建立连接、独占线路、传输结束后释放",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络概述", "交换方式"],
    analysis: "【题干】电路交换的特点？\n【考点】交换方式对比\n【详细解答】\n1. 电路交换：先建立连接，独占线路，传输完释放。\n2. 优点：传输延迟小，实时性好。\n3. 缺点：线路利用率低。\n4. 分组交换：存储转发，动态分配带宽，线路利用率高。\n【选项逐个说】\nA. 建立连接、独占线路、传输结束后释放 → 正确。\nB. 存储转发、动态分配带宽 → 错误：那是分组交换。\nC. 不需要建立连接 → 错误。\nD. 分组独立路由 → 错误。\n【答案】建立连接、独占线路、传输结束后释放\n【易错】电路交换独占线路，分组交换共享线路。"
  },
  {
    id: "nn1102", module: "major", subject: "计算机网络基础", chapter: "ch-net-1",
    knowledgePoint: "OSI各层功能", type: "single", typeLabel: "单选",
    stem: "OSI模型中，负责路由选择的是哪一层？（　）",
    options: ["数据链路层", "网络层", "传输层", "应用层"],
    answer: "网络层",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["OSI", "各层功能"],
    analysis: "【题干】负责路由选择的是哪层？\n【考点】OSI各层功能\n【详细解答】\n1. 物理层：比特流传输。\n2. 数据链路层：成帧、MAC寻址、差错检测。\n3. 网络层：IP寻址、路由选择、分组转发。\n4. 传输层：端到端通信、流量控制、差错控制。\n5. 应用层：面向用户的应用。\n【选项逐个说】\nA. 数据链路层 → 错误：MAC寻址。\nB. 网络层 → 正确：IP路由。\nC. 传输层 → 错误：端到端。\nD. 应用层 → 错误。\n【答案】网络层\n【易错】路由器工作在网络层。"
  },

  // ===== 第2章 物理层 - 补充 =====
  {
    id: "nn2101", module: "major", subject: "计算机网络基础", chapter: "ch-net-2",
    knowledgePoint: "基带与宽带", type: "single", typeLabel: "单选",
    stem: "基带传输是指（　）",
    options: ["数字信号直接传输", "模拟信号传输", "频分复用", "光纤传输"],
    answer: "数字信号直接传输",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["物理层", "基带传输"],
    analysis: "【题干】基带传输是指？\n【考点】基带与宽带\n【详细解答】\n1. 基带传输：数字信号直接在信道上传输。\n2. 宽带传输：把数字信号调制到高频载波上传输。\n3. 局域网以太网用基带传输。\n【选项逐个说】\nA. 数字信号直接传输 → 正确。\nB. 模拟信号传输 → 错误。\nC. 频分复用 → 错误。\nD. 光纤传输 → 错误。\n【答案】数字信号直接传输\n【易错】基带=数字直接传，宽带=调制后传。"
  },
  {
    id: "nn2102", module: "major", subject: "计算机网络基础", chapter: "ch-net-2",
    knowledgePoint: "奈奎斯特定理", type: "single", typeLabel: "单选",
    stem: "奈奎斯特定理描述的是（　）",
    options: ["无噪声信道的最大码元传输速率", "有噪声信道的最大传输速率", "光纤的传输距离", "双绞线的衰减"],
    answer: "无噪声信道的最大码元传输速率",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["物理层", "奈奎斯特"],
    analysis: "【题干】奈奎斯特定理描述什么？\n【考点】信道极限容量\n【详细解答】\n1. 奈奎斯特定理：无噪声理想信道，最大码元传输速率 = 2W（W是带宽）。\n2. 香农定理：有噪声信道，最大传输速率 = W log2(1+S/N)。\n3. 奈奎斯特是无噪声，香农是有噪声。\n【选项逐个说】\nA. 无噪声信道的最大码元传输速率 → 正确。\nB. 有噪声信道的最大传输速率 → 错误：那是香农。\nC. 光纤的传输距离 → 错误。\nD. 双绞线的衰减 → 错误。\n【答案】无噪声信道的最大码元传输速率\n【易错】奈奎斯特无噪声，香农有噪声。"
  },

  // ===== 第3章 数据链路层 - 补充 =====
  {
    id: "nn3101", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "以太网帧", type: "single", typeLabel: "单选",
    stem: "以太网V2帧的最小长度是（　）字节",
    options: ["46", "64", "128", "1518"],
    answer: "64",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "帧结构"],
    analysis: "【题干】以太网帧最小长度？\n【考点】以太网帧结构\n【详细解答】\n1. 以太网V2帧：目的MAC(6)+源MAC(6)+类型(2)+数据(46~1500)+FCS(4)。\n2. 最小帧长 = 6+6+2+46+4 = 64字节。\n3. 最大帧长 = 6+6+2+1500+4 = 1518字节。\n【选项逐个说】\nA. 46 → 错误：那是数据字段最小。\nB. 64 → 正确：整个帧最小。\nC. 128 → 错误。\nD. 1518 → 错误：那是最大帧。\n【答案】64\n【易错】最小帧64字节，最大帧1518字节。"
  },
  {
    id: "nn3102", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "交换机工作原理", type: "single", typeLabel: "单选",
    stem: "以太网交换机转发帧依据的是（　）",
    options: ["目的IP地址", "目的MAC地址", "源IP地址", "源MAC地址"],
    answer: "目的MAC地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["数据链路层", "交换机"],
    analysis: "【题干】交换机转发依据？\n【考点】交换机工作原理\n【详细解答】\n1. 交换机根据目的MAC地址转发帧。\n2. 交换机内部有MAC地址表：MAC地址 ↔ 端口。\n3. 收到帧后，查MAC地址表，从对应端口转发出去。\n4. 不知道就泛洪（向所有端口转发）。\n【选项逐个说】\nA. 目的IP地址 → 错误：那是路由器。\nB. 目的MAC地址 → 正确。\nC. 源IP地址 → 错误。\nD. 源MAC地址 → 错误：学习用源MAC。\n【答案】目的MAC地址\n【易错】转发看目的MAC，学习看源MAC。"
  },
  {
    id: "nn3103", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "冲突域与广播域", type: "single", typeLabel: "单选",
    stem: "用交换机连接4台主机，有几个冲突域？（　）",
    options: ["1", "2", "3", "4"],
    answer: "4",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "冲突域"],
    analysis: "【题干】交换机连4台主机，几个冲突域？\n【考点】冲突域与广播域\n【详细解答】\n1. 交换机每个端口是一个独立的冲突域。\n2. 4台主机各连一个端口，所以有4个冲突域。\n3. 如果用集线器，所有主机共享1个冲突域。\n4. 路由器/三层交换机可以隔离广播域。\n【选项逐个说】\nA. 1 → 错误：那是集线器。\nB. 2 → 错误。\nC. 3 → 错误。\nD. 4 → 正确。\n【答案】4\n【易错】交换机每端口一个冲突域。"
  },
  {
    id: "nn3104", module: "major", subject: "计算机网络基础", chapter: "ch-net-3",
    knowledgePoint: "CRC校验", type: "judge", typeLabel: "判断",
    stem: "CRC校验可以检测出所有的传输错误。",
    options: ["正确", "错误"],
    answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["数据链路层", "CRC"],
    analysis: "【题干】CRC能检测所有错误？\n【考点】差错检测\n【详细解答】\n1. CRC（循环冗余校验）可以检测出绝大多数错误。\n2. 但不是100%能检测出来。\n3. CRC只能检错，不能纠错。\n【答案】错误\n【易错】CRC检错率很高，但不是100%。"
  },

  // ===== 第4章 网络层 - 补充 =====
  {
    id: "nn4101", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "IPv4地址组成", type: "single", typeLabel: "单选",
    stem: "IP地址由哪两部分组成？（　）",
    options: ["网络号和主机号", "MAC地址和IP地址", "子网掩码和网关", "源地址和目的地址"],
    answer: "网络号和主机号",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["网络层", "IP地址"],
    analysis: "【题干】IP地址由哪两部分组成？\n【考点】IP地址结构\n【详细解答】\n1. IP地址 = 网络号 + 主机号。\n2. 网络号标识网络，主机号标识网络里的具体主机。\n3. 子网掩码用来区分哪部分是网络号，哪部分是主机号。\n【选项逐个说】\nA. 网络号和主机号 → 正确。\nB. MAC地址和IP地址 → 错误。\nC. 子网掩码和网关 → 错误。\nD. 源地址和目的地址 → 错误。\n【答案】网络号和主机号\n【易错】IP=网络号+主机号。"
  },
  {
    id: "nn4102", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "子网划分", type: "single", typeLabel: "单选",
    stem: "子网掩码255.255.255.192，每个子网最多有多少个可用主机？（　）",
    options: ["62", "64", "126", "30"],
    answer: "62",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["网络层", "子网划分"],
    analysis: "【题干】掩码/26，可用主机数？\n【考点】子网划分计算\n【详细解答】\n1. 255.255.255.192 = /26（26位网络位）。\n2. 主机位 = 32 - 26 = 6位。\n3. 总主机数 = 2⁶ = 64。\n4. 减去网络地址和广播地址，可用主机 = 64 - 2 = 62。\n【选项逐个说】\nA. 62 → 正确。\nB. 64 → 错误：没减网络和广播。\nC. 126 → 错误：那是/25。\nD. 30 → 错误：那是/27。\n【答案】62\n【易错】可用主机数=2^主机位-2。"
  },
  {
    id: "nn4103", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "NAT", type: "single", typeLabel: "单选",
    stem: "NAT技术的作用是（　）",
    options: ["将私有地址转换为公网地址", "将域名解析为IP", "分配IP地址", "加密数据"],
    answer: "将私有地址转换为公网地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络层", "NAT"],
    analysis: "【题干】NAT的作用？\n【考点】NAT网络地址转换\n【详细解答】\n1. NAT（网络地址转换）：把私有IP地址转换成公网IP地址。\n2. 解决公网IP地址不足的问题。\n3. 内部多台主机共享一个公网IP上网。\n【选项逐个说】\nA. 将私有地址转换为公网地址 → 正确。\nB. 将域名解析为IP → 错误：那是DNS。\nC. 分配IP地址 → 错误：那是DHCP。\nD. 加密数据 → 错误。\n【答案】将私有地址转换为公网地址\n【易错】NAT内网换公网IP。"
  },
  {
    id: "nn4104", module: "major", subject: "计算机网络基础", chapter: "ch-net-4",
    knowledgePoint: "ICMP协议", type: "single", typeLabel: "单选",
    stem: "traceroute命令使用的是什么协议？（　）",
    options: ["ICMP", "TCP", "UDP", "ARP"],
    answer: "ICMP",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["网络层", "traceroute"],
    analysis: "【题干】traceroute用什么协议？\n【考点】ICMP应用\n【详细解答】\n1. traceroute（路由跟踪）用ICMP协议。\n2. 发送TTL递增的UDP包，收到超时通知，跟踪路径。\n3. ping也是ICMP。\n【选项逐个说】\nA. ICMP → 正确。\nB. TCP → 错误。\nC. UDP → 错误。\nD. ARP → 错误。\n【答案】ICMP\n【易错】ping和traceroute都是ICMP。"
  },

  // ===== 第5章 传输层 - 补充 =====
  {
    id: "nn5101", module: "major", subject: "计算机网络基础", chapter: "ch-net-5",
    knowledgePoint: "UDP特点", type: "single", typeLabel: "单选",
    stem: "UDP协议特点是（　）",
    options: ["面向连接", "可靠传输", "开销小，效率高", "有拥塞控制"],
    answer: "开销小，效率高",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["传输层", "UDP"],
    analysis: "【题干】UDP的特点？\n【考点】UDP协议\n【详细解答】\n1. UDP：无连接、不可靠、数据报、首部8字节、开销小效率高。\n2. 没有拥塞控制，没有流量控制。\n3. 适合实时应用：视频通话、直播、游戏。\n4. TCP是面向连接可靠的。\n【选项逐个说】\nA. 面向连接 → 错误：那是TCP。\nB. 可靠传输 → 错误：那是TCP。\nC. 开销小，效率高 → 正确。\nD. 有拥塞控制 → 错误：那是TCP。\n【答案】开销小，效率高\n【易错】UDP快但不可靠，TCP可靠但慢。"
  },
  {
    id: "nn5102", module: "major", subject: "计算机网络基础", chapter: "ch-net-5",
    knowledgePoint: "TCP断开连接", type: "single", typeLabel: "单选",
    stem: "TCP断开连接需要几次挥手？（　）",
    options: ["2次", "3次", "4次", "5次"],
    answer: "4次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["传输层", "TCP连接"],
    analysis: "【题干】TCP断开连接几次挥手？\n【考点】TCP四次挥手\n【详细解答】\n1. TCP建立连接：三次握手。\n2. TCP断开连接：四次挥手。\n3. 为什么是四次？因为被动关闭方收到FIN后，可能还有数据要发，所以先回ACK，等数据发完再发FIN。\n【选项逐个说】\nA. 2次 → 错误。\nB. 3次 → 错误：那是建立连接。\nC. 4次 → 正确。\nD. 5次 → 错误。\n【答案】4次\n【易错】建立三次握手，断开四次挥手。"
  },

  // ===== 第6章 应用层 - 补充 =====
  {
    id: "nn6101", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "HTTP与HTTPS", type: "single", typeLabel: "单选",
    stem: "HTTPS协议默认端口是（　）",
    options: ["80", "443", "8080", "21"],
    answer: "443",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["应用层", "端口号"],
    analysis: "【题干】HTTPS默认端口？\n【考点】常用端口\n【详细解答】\n1. HTTP：80端口，明文传输。\n2. HTTPS：443端口，加密传输。\n3. HTTPS = HTTP + SSL/TLS。\n【选项逐个说】\nA. 80 → 错误：那是HTTP。\nB. 443 → 正确。\nC. 8080 → 错误：那是代理端口。\nD. 21 → 错误：那是FTP。\n【答案】443\n【易错】80 HTTP，443 HTTPS。"
  },
  {
    id: "nn6102", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "电子邮件协议", type: "single", typeLabel: "单选",
    stem: "发送邮件使用什么协议？（　）",
    options: ["SMTP", "POP3", "IMAP", "FTP"],
    answer: "SMTP",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["应用层", "电子邮件"],
    analysis: "【题干】发送邮件用什么协议？\n【考点】邮件协议\n【详细解答】\n1. SMTP：发送邮件（简单邮件传输协议）。\n2. POP3：接收邮件（把邮件下载到本地）。\n3. IMAP：接收邮件（邮件存在服务器上，多端同步）。\n4. 发送用SMTP，接收用POP3/IMAP。\n【选项逐个说】\nA. SMTP → 正确：发邮件。\nB. POP3 → 错误：收邮件。\nC. IMAP → 错误：收邮件。\nD. FTP → 错误：文件传输。\n【答案】SMTP\n【易错】SMTP发，POP3/IMAP收。"
  },
  {
    id: "nn6103", module: "major", subject: "计算机网络基础", chapter: "ch-net-6",
    knowledgePoint: "FTP", type: "single", typeLabel: "单选",
    stem: "FTP协议默认使用几个端口？（　）",
    options: ["1个", "2个", "3个", "4个"],
    answer: "2个",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["应用层", "FTP"],
    analysis: "【题干】FTP用几个端口？\n【考点】FTP协议\n【详细解答】\n1. FTP用两个端口：\n2. 21端口：控制连接（传输命令）。\n3. 20端口：数据连接（传输文件）。\n4. 是有两个连接的协议。\n【选项逐个说】\nA. 1个 → 错误。\nB. 2个 → 正确：控制+数据。\nC. 3个 → 错误。\nD. 4个 → 错误。\n【答案】2个\n【易错】FTP控制21，数据20。"
  }
]);
