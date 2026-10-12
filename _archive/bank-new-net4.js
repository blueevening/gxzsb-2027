/* 新增题库 - 2026考纲版 - 计算机网络基础 第四批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 网络概述 =====
  { id: "nn1301", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "网络定义", type: "single", typeLabel: "单选",
    stem: "计算机网络最主要的功能是（　）", options: ["资源共享和数据通信", "提高计算机速度", "节省电力", "数据备份"], answer: "资源共享和数据通信",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "功能"],
    analysis: "【题干】计算机网络主要功能？\n【考点】网络功能\n【详细解答】\n1. 两大基本功能：数据通信、资源共享。\n2. 资源包括硬件、软件、数据。\n【选项逐个说】\nA. 资源共享和数据通信 → 正确。\nB. 提高计算机速度 → 错误。\nC. 节省电力 → 错误。\nD. 数据备份 → 错误。\n【答案】资源共享和数据通信\n【易错】通信+共享。"
  },
  { id: "nn1302", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "网络分类", type: "single", typeLabel: "单选",
    stem: "覆盖范围最小的网络是（　）", options: ["局域网LAN", "城域网MAN", "广域网WAN", "互联网"], answer: "局域网LAN",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "分类"],
    analysis: "【题干】范围最小的网络？\n【考点】按范围分类\n【详细解答】\n1. PAN个域网：几米。\n2. LAN局域网：一个楼/校园。\n3. MAN城域网：一个城市。\n4. WAN广域网：跨城市跨国家。\n【选项逐个说】\nA. 局域网LAN → 正确。\nB. 城域网MAN → 错误。\nC. 广域网WAN → 错误。\nD. 互联网 → 错误。\n【答案】局域网LAN\n【易错】LAN最小，WAN最大。"
  },
  { id: "nn1303", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "网络性能指标", type: "single", typeLabel: "单选",
    stem: "网络中传输的数据量与传输时间之比称为（　）", options: ["带宽", "时延", "丢包率", "吞吐量"], answer: "带宽",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "性能指标"],
    analysis: "【题干】数据量/时间叫？\n【考点】性能指标\n【详细解答】\n1. 带宽：单位时间能传输的最大数据量。\n2. 时延：数据从发走到收到花的时间。\n3. 吞吐量：单位时间实际传输的数据量。\n【选项逐个说】\nA. 带宽 → 正确。\nB. 时延 → 错误。\nC. 丢包率 → 错误。\nD. 吞吐量 → 错误。\n【答案】带宽\n【易错】带宽是最大值，吞吐量是实际值。"
  },
  { id: "nn1304", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "电路交换", type: "single", typeLabel: "单选",
    stem: "传统电话网使用的交换技术是（　）", options: ["电路交换", "报文交换", "分组交换", "信元交换"], answer: "电路交换",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "交换"],
    analysis: "【题干】传统电话用什么交换？\n【考点】交换技术\n【详细解答】\n1. 传统电话网：电路交换。\n2. 先建立连接，独占线路，通话完释放。\n3. 互联网用分组交换。\n【选项逐个说】\nA. 电路交换 → 正确。\nB. 报文交换 → 错误。\nC. 分组交换 → 错误：那是互联网。\nD. 信元交换 → 错误。\n【答案】电路交换\n【易错】电话=电路交换。"
  },

  // ===== 第2章 物理层 =====
  { id: "nn2301", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", knowledgePoint: "物理层功能", type: "single", typeLabel: "单选",
    stem: "物理层传输的数据单位是（　）", options: ["比特", "帧", "分组", "报文"], answer: "比特",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "数据单位"],
    analysis: "【题干】物理层数据单位？\n【考点】各层数据单位\n【详细解答】\n1. 物理层：比特(bit)。\n2. 数据链路层：帧(frame)。\n3. 网络层：分组/包(packet)。\n4. 传输层：报文段(segment)。\n【选项逐个说】\nA. 比特 → 正确。\nB. 帧 → 错误：链路层。\nC. 分组 → 错误：网络层。\nD. 报文 → 错误。\n【答案】比特\n【易错】物理层传比特。"
  },
  { id: "nn2302", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", knowledgePoint: "传输介质", type: "single", typeLabel: "单选",
    stem: "以下哪种传输介质抗干扰能力最强？（　）", options: ["光纤", "双绞线", "同轴电缆", "无线电"], answer: "光纤",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "传输介质"],
    analysis: "【题干】抗干扰最强的介质？\n【考点】传输介质比较\n【详细解答】\n1. 光纤：用光传输，不受电磁干扰，带宽大，距离远。\n2. 双绞线：便宜，距离短。\n3. 无线：方便，但易受干扰。\n【选项逐个说】\nA. 光纤 → 正确。\nB. 双绞线 → 错误。\nC. 同轴电缆 → 错误。\nD. 无线电 → 错误。\n【答案】光纤\n【易错】光纤抗干扰最强。"
  },
  { id: "nn2303", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", knowledgePoint: "信道复用", type: "single", typeLabel: "单选",
    stem: "频分复用（FDM）是指（　）", options: ["不同用户用不同频率", "不同用户用不同时间", "不同用户用不同波长", "不同用户用不同码"], answer: "不同用户用不同频率",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["物理层", "复用"],
    analysis: "【题干】频分复用FDM？\n【考点】信道复用技术\n【详细解答】\n1. FDM频分：不同用户占不同频率段。\n2. TDM时分：不同用户占不同时间段。\n3. WDM波分：光纤里不同波长。\n4. CDMA码分：不同码。\n【选项逐个说】\nA. 不同用户用不同频率 → 正确。\nB. 不同用户用不同时间 → 错误：TDM。\nC. 不同用户用不同波长 → 错误：WDM。\nD. 不同用户用不同码 → 错误：CDMA。\n【答案】不同用户用不同频率\n【易错】频分=频率分。"
  },

  // ===== 第3章 数据链路层 =====
  { id: "nn3301", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", knowledgePoint: "数据链路层功能", type: "single", typeLabel: "单选",
    stem: "数据链路层传输的数据单位是（　）", options: ["比特", "帧", "分组", "报文"], answer: "帧",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "数据单位"],
    analysis: "【题干】链路层数据单位？\n【考点】各层PDU\n【详细解答】\n1. 物理层：比特。\n2. 数据链路层：帧。\n3. 网络层：IP数据报/分组。\n【选项逐个说】\nA. 比特 → 错误：物理层。\nB. 帧 → 正确。\nC. 分组 → 错误：网络层。\nD. 报文 → 错误。\n【答案】帧\n【易错】链路层传帧。"
  },
  { id: "nn3302", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", knowledgePoint: "PPP协议", type: "single", typeLabel: "单选",
    stem: "PPP协议工作在（　）", options: ["物理层", "数据链路层", "网络层", "传输层"], answer: "数据链路层",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "PPP"],
    analysis: "【题干】PPP工作在哪层？\n【考点】常见协议层次\n【详细解答】\n1. PPP（点到点协议）：数据链路层协议。\n2. 用于拨号上网、专线连接。\n【选项逐个说】\nA. 物理层 → 错误。\nB. 数据链路层 → 正确。\nC. 网络层 → 错误。\nD. 传输层 → 错误。\n【答案】数据链路层\n【易错】PPP是链路层协议。"
  },
  { id: "nn3303", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", knowledgePoint: "CSMA/CD", type: "single", typeLabel: "单选",
    stem: "CSMA/CD用于什么网络？（　）", options: ["以太网", "令牌环网", "ATM", "帧中继"], answer: "以太网",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "CSMA/CD"],
    analysis: "【题干】CSMA/CD用于什么网？\n【考点】以太网介质访问\n【详细解答】\n1. CSMA/CD：载波监听多点接入/碰撞检测。\n2. 传统共享式以太网用这个协议。\n3. 现在交换机全双工不用了。\n【选项逐个说】\nA. 以太网 → 正确。\nB. 令牌环网 → 错误。\nC. ATM → 错误。\nD. 帧中继 → 错误。\n【答案】以太网\n【易错】以太网用CSMA/CD。"
  },
  { id: "nn3304", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", knowledgePoint: "广播域", type: "single", typeLabel: "单选",
    stem: "以下哪个设备可以隔离广播域？（　）", options: ["交换机", "路由器", "集线器", "中继器"], answer: "路由器",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "广播域"],
    analysis: "【题干】哪个设备隔离广播域？\n【考点】冲突域与广播域\n【详细解答】\n1. 集线器：既不隔离冲突域也不隔离广播域。\n2. 交换机：隔离冲突域，不隔离广播域。\n3. 路由器：既隔离冲突域也隔离广播域。\n【选项逐个说】\nA. 交换机 → 错误：隔离冲突域。\nB. 路由器 → 正确：隔离广播域。\nC. 集线器 → 错误。\nD. 中继器 → 错误。\n【答案】路由器\n【易错】路由器隔离广播域。"
  },

  // ===== 第4章 网络层 =====
  { id: "nn4301", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "网络层功能", type: "single", typeLabel: "单选",
    stem: "网络层传输的数据单位是（　）", options: ["比特", "帧", "IP数据报/分组", "报文段"], answer: "IP数据报/分组",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "数据单位"],
    analysis: "【题干】网络层数据单位？\n【考点】各层PDU\n【详细解答】\n1. 网络层：IP数据报（分组）。\n2. 路由器工作在网络层。\n【选项逐个说】\nA. 比特 → 错误：物理层。\nB. 帧 → 错误：链路层。\nC. IP数据报/分组 → 正确。\nD. 报文段 → 错误：传输层。\n【答案】IP数据报/分组\n【易错】网络层传分组。"
  },
  { id: "nn4302", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "IP协议", type: "single", typeLabel: "单选",
    stem: "IP协议提供的是什么服务？（　）", options: ["面向连接可靠", "无连接不可靠", "面向连接不可靠", "无连接可靠"], answer: "无连接不可靠",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "IP"],
    analysis: "【题干】IP提供什么服务？\n【考点】IP协议特点\n【详细解答】\n1. IP协议：无连接、不可靠、尽最大努力交付。\n2. 不保证分组一定到达，不保证顺序。\n3. 可靠性由TCP来保证。\n【选项逐个说】\nA. 面向连接可靠 → 错误：那是TCP。\nB. 无连接不可靠 → 正确。\nC. 面向连接不可靠 → 错误。\nD. 无连接可靠 → 错误。\n【答案】无连接不可靠\n【易错】IP不保证可靠。"
  },
  { id: "nn4303", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "子网划分", type: "single", typeLabel: "单选",
    stem: "子网掩码255.255.255.0相当于多少位前缀？（　）", options: ["/8", "/16", "/24", "/32"], answer: "/24",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "子网掩码"],
    analysis: "【题干】255.255.255.0是多少位？\n【考点】CIDR表示\n【详细解答】\n1. 255.255.255.0有24个1。\n2. 所以写成/24。\n【选项逐个说】\nA. /8 → 错误：255.0.0.0。\nB. /16 → 错误：255.255.0.0。\nC. /24 → 正确。\nD. /32 → 错误：255.255.255.255。\n【答案】/24\n【易错】/24=255.255.255.0。"
  },
  { id: "nn4304", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "ARP协议", type: "single", typeLabel: "单选",
    stem: "ARP协议的作用是（　）", options: ["把IP地址解析为MAC地址", "把MAC地址解析为IP地址", "把域名解析为IP", "分配IP地址"], answer: "把IP地址解析为MAC地址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "ARP"],
    analysis: "【题干】ARP作用？\n【考点】地址解析协议\n【详细解答】\n1. ARP：已知IP地址，求对应的MAC地址。\n2. RARP：已知MAC，求IP。\n3. DNS：域名→IP。\n【选项逐个说】\nA. 把IP地址解析为MAC地址 → 正确。\nB. 把MAC地址解析为IP地址 → 错误：那是RARP。\nC. 把域名解析为IP → 错误：那是DNS。\nD. 分配IP地址 → 错误：那是DHCP。\n【答案】把IP地址解析为MAC地址\n【易错】ARP：IP→MAC。"
  },
  { id: "nn4305", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "路由器", type: "single", typeLabel: "单选",
    stem: "路由器工作在OSI哪一层？（　）", options: ["数据链路层", "网络层", "传输层", "应用层"], answer: "网络层",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "路由器"],
    analysis: "【题干】路由器工作在哪层？\n【考点】各层设备\n【详细解答】\n1. 集线器/中继器：物理层。\n2. 交换机/网桥：数据链路层。\n3. 路由器：网络层。\n4. 网关：传输层及以上。\n【选项逐个说】\nA. 数据链路层 → 错误：那是交换机。\nB. 网络层 → 正确。\nC. 传输层 → 错误。\nD. 应用层 → 错误。\n【答案】网络层\n【易错】路由器=网络层。"
  },

  // ===== 第5章 传输层 =====
  { id: "nn5301", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "传输层功能", type: "single", typeLabel: "单选",
    stem: "传输层的作用是（　）", options: ["主机到主机通信", "进程到进程通信", "网络到网络通信", "链路到链路通信"], answer: "进程到进程通信",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "功能"],
    analysis: "【题干】传输层作用？\n【考点】传输层功能\n【详细解答】\n1. 网络层：主机到主机。\n2. 传输层：进程到进程（通过端口号）。\n【选项逐个说】\nA. 主机到主机通信 → 错误：那是网络层。\nB. 进程到进程通信 → 正确。\nC. 网络到网络通信 → 错误。\nD. 链路到链路通信 → 错误。\n【答案】进程到进程通信\n【易错】传输层端到端=进程到进程。"
  },
  { id: "nn5302", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "TCP特点", type: "single", typeLabel: "单选",
    stem: "TCP协议特点是（　）", options: ["无连接不可靠", "面向连接可靠", "开销小", "不保证顺序"], answer: "面向连接可靠",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】TCP特点？\n【考点】TCP vs UDP\n【详细解答】\n1. TCP：面向连接、可靠、字节流、开销大。\n2. UDP：无连接、不可靠、数据报、开销小。\n【选项逐个说】\nA. 无连接不可靠 → 错误：那是UDP。\nB. 面向连接可靠 → 正确。\nC. 开销小 → 错误：那是UDP。\nD. 不保证顺序 → 错误：那是UDP。\n【答案】面向连接可靠\n【易错】TCP可靠面向连接。"
  },
  { id: "nn5303", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "TCP三次握手", type: "single", typeLabel: "单选",
    stem: "TCP建立连接需要几次握手？（　）", options: ["2次", "3次", "4次", "5次"], answer: "3次",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "TCP连接"],
    analysis: "【题干】TCP建立连接几次握手？\n【考点】三次握手\n【详细解答】\n1. 建立连接：三次握手。\n2. 断开连接：四次挥手。\n【选项逐个说】\nA. 2次 → 错误。\nB. 3次 → 正确。\nC. 4次 → 错误：那是断开。\nD. 5次 → 错误。\n【答案】3次\n【易错】建三挥四。"
  },
  { id: "nn5304", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "UDP应用", type: "single", typeLabel: "单选",
    stem: "以下哪个应用适合用UDP？（　）", options: ["文件传输", "网页浏览", "视频通话", "邮件发送"], answer: "视频通话",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "UDP应用"],
    analysis: "【题干】哪个适合UDP？\n【考点】UDP应用场景\n【详细解答】\n1. UDP适合实时、不要求100%可靠的应用：语音视频、直播、游戏。\n2. TCP适合要求可靠的：文件传输、网页、邮件。\n【选项逐个说】\nA. 文件传输 → 错误：用TCP。\nB. 网页浏览 → 错误：HTTP用TCP。\nC. 视频通话 → 正确：实时用UDP。\nD. 邮件发送 → 错误：用TCP。\n【答案】视频通话\n【易错】实时用UDP。"
  },

  // ===== 第6章 应用层 =====
  { id: "nn6301", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "应用层功能", type: "single", typeLabel: "单选",
    stem: "应用层协议是为了解决（　）", options: ["某类特定应用问题", "路由选择", "差错控制", "物理连接"], answer: "某类特定应用问题",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "功能"],
    analysis: "【题干】应用层协议解决？\n【考点】应用层\n【详细解答】\n1. 应用层直接面向用户，为特定应用制定规则。\n2. 比如HTTP解决网页，FTP解决文件传输。\n【选项逐个说】\nA. 某类特定应用问题 → 正确。\nB. 路由选择 → 错误：网络层。\nC. 差错控制 → 错误：链路层/传输层。\nD. 物理连接 → 错误：物理层。\n【答案】某类特定应用问题\n【易错】应用层面向具体应用。"
  },
  { id: "nn6302", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "HTTP", type: "single", typeLabel: "单选",
    stem: "HTTP协议默认端口是（　）", options: ["80", "443", "21", "25"], answer: "80",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "端口"],
    analysis: "【题干】HTTP默认端口？\n【考点】常用端口\n【详细解答】\n1. HTTP：80。\n2. HTTPS：443。\n3. FTP：20/21。\n4. SMTP：25。\n【选项逐个说】\nA. 80 → 正确。\nB. 443 → 错误：HTTPS。\nC. 21 → 错误：FTP。\nD. 25 → 错误：SMTP。\n【答案】80\n【易错】80 HTTP。"
  },
  { id: "nn6303", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "DNS", type: "single", typeLabel: "单选",
    stem: "DNS的作用是（　）", options: ["域名解析为IP", "IP解析为MAC", "分配IP", "发送邮件"], answer: "域名解析为IP",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "DNS"],
    analysis: "【题干】DNS作用？\n【考点】DNS\n【详细解答】\n1. DNS：域名系统，把域名（www.baidu.com）翻译成IP地址。\n2. 方便用户记忆。\n【选项逐个说】\nA. 域名解析为IP → 正确。\nB. IP解析为MAC → 错误：那是ARP。\nC. 分配IP → 错误：那是DHCP。\nD. 发送邮件 → 错误：那是SMTP。\n【答案】域名解析为IP\n【易错】DNS域名→IP。"
  },
  { id: "nn6304", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "WWW", type: "single", typeLabel: "单选",
    stem: "WWW是指（　）", options: ["万维网", "局域网", "广域网", "城域网"], answer: "万维网",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "WWW"],
    analysis: "【题干】WWW是指？\n【考点】万维网\n【详细解答】\n1. WWW = World Wide Web 万维网。\n2. 基于HTTP协议，网页浏览服务。\n【选项逐个说】\nA. 万维网 → 正确。\nB. 局域网 → 错误：LAN。\nC. 广域网 → 错误：WAN。\nD. 城域网 → 错误：MAN。\n【答案】万维网\n【易错】WWW=万维网。"
  },

  // ===== 判断题 =====
  { id: "nn1305", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "互联网", type: "judge", typeLabel: "判断",
    stem: "互联网是世界上最大的计算机网络。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "互联网"],
    analysis: "【题干】互联网是最大网络？\n【考点】互联网\n【详细解答】\n1. 互联网（Internet）是全球最大的互联网络。\n【答案】正确\n【易错】Internet最大。"
  },
  { id: "nn2304", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", knowledgePoint: "奈奎斯特", type: "judge", typeLabel: "判断",
    stem: "香农定理描述了有噪声信道的最大传输速率。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["物理层", "香农"],
    analysis: "【题干】香农定理是有噪声？\n【考点】奈奎斯特与香农\n【详细解答】\n1. 奈奎斯特：无噪声理想信道。\n2. 香农：有噪声信道。\n【答案】正确\n【易错】香农有噪声。"
  },
  { id: "nn3305", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", knowledgePoint: "MAC地址", type: "judge", typeLabel: "判断",
    stem: "MAC地址是全球唯一的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "MAC"],
    analysis: "【题干】MAC地址全球唯一？\n【考点】MAC地址\n【详细解答】\n1. MAC地址前24位是厂商标识，后24位是厂家分配。\n2. 理论上全球唯一。\n【答案】正确\n【易错】MAC地址烧在网卡里。"
  },
  { id: "nn4306", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "私有地址", type: "judge", typeLabel: "判断",
    stem: "192.168.x.x是私有IP地址。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "私有地址"],
    analysis: "【题干】192.168是私有地址？\n【考点】私有地址段\n【详细解答】\n1. 私有地址段：10.0.0.0/8，172.16.0.0/12，192.168.0.0/16。\n2. 这些地址不能在公网上路由。\n【答案】正确\n【易错】192.168是内网地址。"
  },
  { id: "nn5305", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "端口号", type: "judge", typeLabel: "判断",
    stem: "端口号范围是0~65535。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "端口"],
    analysis: "【题干】端口号范围0~65535？\n【考点】端口号\n【详细解答】\n1. 端口号16位，范围0~65535。\n2. 知名端口0~1023。\n【答案】正确\n【易错】端口16位。"
  },
  { id: "nn6305", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "FTP", type: "judge", typeLabel: "判断",
    stem: "FTP协议可以用来上传和下载文件。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "FTP"],
    analysis: "【题干】FTP上传下载文件？\n【考点】FTP\n【详细解答】\n1. FTP：文件传输协议。\n2. 用于把文件从客户端传到服务器（上传），或从服务器下载到本地。\n【答案】正确\n【易错】FTP传文件。"
  }
]);
