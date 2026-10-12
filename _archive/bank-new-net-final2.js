/* 计网补37道到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // 第1章
  { id: "nn1607", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "电路交换特点", type: "single", typeLabel: "单选",
    stem: "电路交换缺点是（　）", options: ["线路利用率低", "延迟大", "不可靠", "速度慢"], answer: "线路利用率低",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "交换"],
    analysis: "【题干】电路交换缺点？\n【考点】交换方式对比\n【详细解答】\n1. 电路交换独占线路，线路利用率低。\n【选项逐个说】\nA. 线路利用率低 → 正确。\nB. 延迟大 → 错误：延迟小。\nC. 不可靠 → 错误。\nD. 速度慢 → 错误。\n【答案】线路利用率低\n【易错】电路交换独占线路浪费。"
  },
  { id: "nn1608", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "分组交换特点", type: "single", typeLabel: "单选",
    stem: "分组交换优点是（　）", options: ["线路利用率高", "实时性好", "延迟小", "无开销"], answer: "线路利用率高",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "交换"],
    analysis: "【题干】分组交换优点？\n【考点】分组交换\n【详细解答】\n1. 分组交换动态共享线路，利用率高。\n【选项逐个说】\nA. 线路利用率高 → 正确。\nB. 实时性好 → 错误：那是电路交换。\nC. 延迟小 → 错误。\nD. 无开销 → 错误：有首部开销。\n【答案】线路利用率高\n【易错】分组交换共享线路。"
  },

  // 第2章
  { id: "nn2605", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "奈奎斯特定理", type: "single", typeLabel: "单选",
    stem: "奈奎斯特定理理想低通信道带宽3000Hz，最高码元速率（　）", options: ["3000波特", "6000波特", "12000波特", "1500波特"], answer: "6000波特",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["物理层", "奈奎斯特"],
    analysis: "【题干】带宽3000Hz最高码元率？\n【考点】奈奎斯特\n【详细解答】\n1. 奈奎斯特：最高码元率=2W=2×3000=6000波特。\n【选项逐个说】\nA. 3000波特 → 错误。\nB. 6000波特 → 正确。\nC. 12000波特 → 错误。\nD. 1500波特 → 错误。\n【答案】6000波特\n【易错】奈奎斯特是2W。"
  },
  { id: "nn2606", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "双绞线分类", type: "single", typeLabel: "单选",
    stem: "六类线支持最大速率是（　）", options: ["10Mbps", "100Mbps", "1000Mbps", "10Gbps"], answer: "1000Mbps",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "双绞线"],
    analysis: "【题干】六类线速率？\n【考点】双绞线类别\n【详细解答】\n1. 五类：100Mbps。\n2. 六类：1000Mbps（千兆）。\n3. 超六类：10Gbps。\n【选项逐个说】\nA. 10Mbps → 错误。\nB. 100Mbps → 错误：五类。\nC. 1000Mbps → 正确。\nD. 10Gbps → 错误：超六类。\n【答案】1000Mbps\n【易错】六类千兆。"
  },

  // 第3章
  { id: "nn3606", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "以太网帧最大数据", type: "single", typeLabel: "单选",
    stem: "以太网帧最大数据字段长度是（　）", options: ["1500字节", "1518字节", "46字节", "64字节"], answer: "1500字节",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "以太网帧"],
    analysis: "【题干】最大数据字段？\n【考点】以太网帧结构\n【详细解答】\n1. 数据字段46~1500字节。\n2. 整个帧最大1518字节。\n【选项逐个说】\nA. 1500字节 → 正确：数据字段最大。\nB. 1518字节 → 错误：那是整个帧。\nC. 46字节 → 错误：那是最小数据。\nD. 64字节 → 错误：那是最小帧。\n【答案】1500字节\n【易错】MTU=1500。"
  },
  { id: "nn3607", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "冲突域", type: "single", typeLabel: "单选",
    stem: "集线器连接4台主机，几个冲突域？（　）", options: ["1", "2", "3", "4"], answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "冲突域"],
    analysis: "【题干】集线器4台主机冲突域？\n【考点】冲突域\n【详细解答】\n1. 集线器所有端口在一个冲突域。\n【选项逐个说】\nA. 1 → 正确。\nB. 2 → 错误。\nC. 3 → 错误。\nD. 4 → 错误：那是交换机。\n【答案】1\n【易错】集线器一个冲突域。"
  },
  { id: "nn3608", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "VLAN划分方法", type: "single", typeLabel: "单选",
    stem: "最常用的VLAN划分方法是（　）", options: ["基于端口", "基于MAC", "基于IP", "基于协议"], answer: "基于端口",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "VLAN"],
    analysis: "【题干】最常用VLAN划分？\n【考点】VLAN划分\n【详细解答】\n1. 基于端口划分最常用，最简单。\n【选项逐个说】\nA. 基于端口 → 正确。\nB. 基于MAC → 错误。\nC. 基于IP → 错误。\nD. 基于协议 → 错误。\n【答案】基于端口\n【易错】最常用按端口划VLAN。"
  },

  // 第4章
  { id: "nn4607", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "IP地址主机位全1", type: "single", typeLabel: "单选",
    stem: "主机位全1的IP地址是（　）", options: ["广播地址", "网络地址", "环回地址", "组播地址"], answer: "广播地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "广播地址"],
    analysis: "【题干】主机位全1是？\n【考点】特殊IP地址\n【详细解答】\n1. 主机位全0：网络地址。\n2. 主机位全1：广播地址。\n【选项逐个说】\nA. 广播地址 → 正确。\nB. 网络地址 → 错误：那是全0。\nC. 环回地址 → 错误：127开头。\nD. 组播地址 → 错误。\n【答案】广播地址\n【易错】全1广播。"
  },
  { id: "nn4608", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "子网掩码作用", type: "single", typeLabel: "单选",
    stem: "子网掩码作用是（　）", options: ["区分网络位和主机位", "分配IP", "加密", "压缩"], answer: "区分网络位和主机位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "子网掩码"],
    analysis: "【题干】子网掩码作用？\n【考点】子网掩码\n【详细解答】\n1. 子网掩码和IP做与运算，得到网络地址。\n【选项逐个说】\nA. 区分网络位和主机位 → 正确。\nB. 分配IP → 错误：那是DHCP。\nC. 加密 → 错误。\nD. 压缩 → 错误。\n【答案】区分网络位和主机位\n【易错】掩码划分子网。"
  },
  { id: "nn4609", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "路由器功能", type: "single", typeLabel: "单选",
    stem: "路由器主要功能是（　）", options: ["路由选择和分组转发", "放大信号", "MAC地址学习", "加密数据"], answer: "路由选择和分组转发",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "路由器"],
    analysis: "【题干】路由器主要功能？\n【考点】路由器\n【详细解答】\n1. 路由器：路由选择+分组转发。\n【选项逐个说】\nA. 路由选择和分组转发 → 正确。\nB. 放大信号 → 错误：那是中继器。\nC. MAC地址学习 → 错误：那是交换机。\nD. 加密数据 → 错误。\n【答案】路由选择和分组转发\n【易错】路由器选路转发。"
  },

  // 第5章
  { id: "nn5606", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "UDP特点", type: "single", typeLabel: "单选",
    stem: "UDP特点不包括（　）", options: ["面向连接", "无连接", "开销小", "不可靠"], answer: "面向连接",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "UDP"],
    analysis: "【题干】UDP不包括？\n【考点】UDP特点\n【详细解答】\n1. UDP无连接、不可靠、开销小。\n2. 面向连接是TCP特点。\n【选项逐个说】\nA. 面向连接 → 正确：不是UDP特点。\nB. 无连接 → 错误：是。\nC. 开销小 → 错误：是。\nD. 不可靠 → 错误：是。\n【答案】面向连接\n【易错】UDP无连接。"
  },
  { id: "nn5607", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP三次握手", type: "single", typeLabel: "单选",
    stem: "TCP三次握手第二次报文标志位是（　）", options: ["SYN,ACK", "FIN,ACK", "PSH,ACK", "RST"], answer: "SYN,ACK",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "TCP连接"],
    analysis: "【题干】第二次握手标志位？\n【考点】三次握手\n【详细解答】\n1. 第一次：SYN。\n2. 第二次：SYN+ACK。\n3. 第三次：ACK。\n【选项逐个说】\nA. SYN,ACK → 正确。\nB. FIN,ACK → 错误：那是挥手。\nC. PSH,ACK → 错误。\nD. RST → 错误。\n【答案】SYN,ACK\n【易错】第二次SYN+ACK。"
  },

  // 第6章
  { id: "nn6607", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "DNS作用", type: "single", typeLabel: "单选",
    stem: "DNS系统作用是（　）", options: ["域名到IP映射", "IP到MAC映射", "分配IP", "发送邮件"], answer: "域名到IP映射",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "DNS"],
    analysis: "【题干】DNS作用？\n【考点】DNS\n【详细解答】\n1. DNS把域名翻译成IP地址。\n【选项逐个说】\nA. 域名到IP映射 → 正确。\nB. IP到MAC映射 → 错误：那是ARP。\nC. 分配IP → 错误：那是DHCP。\nD. 发送邮件 → 错误：那是SMTP。\n【答案】域名到IP映射\n【易错】DNS域名解析。"
  },
  { id: "nn6608", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "DHCP作用", type: "single", typeLabel: "单选",
    stem: "DHCP不能自动分配什么？（　）", options: ["MAC地址", "IP地址", "子网掩码", "默认网关"], answer: "MAC地址",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "DHCP"],
    analysis: "【题干】DHCP不能分配什么？\n【考点】DHCP\n【详细解答】\n1. DHCP分IP、子网掩码、网关、DNS。\n2. MAC地址是烧在网卡里的，不能分。\n【选项逐个说】\nA. MAC地址 → 正确：不能分。\nB. IP地址 → 错误：能分。\nC. 子网掩码 → 错误：能分。\nD. 默认网关 → 错误：能分。\n【答案】MAC地址\n【易错】MAC是网卡的。"
  },

  // 判断题
  { id: "nn1609", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "互联网", type: "judge", typeLabel: "判断",
    stem: "互联网是世界上最大的广域网。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "互联网"],
    analysis: "【题干】互联网最大广域网？\n【考点】互联网\n【详细解答】\n1. 互联网是全球最大的广域网。\n【答案】正确\n【易错】互联网最大。"
  },
  { id: "nn2607", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "信道带宽", type: "judge", typeLabel: "判断",
    stem: "信道带宽单位是Hz。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "带宽"],
    analysis: "【题干】带宽单位Hz？\n【考点】带宽\n【详细解答】\n1. 信道带宽是频率范围，单位Hz。\n【答案】正确\n【易错】带宽频率单位Hz。"
  },
  { id: "nn3609", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "以太网MAC", type: "judge", typeLabel: "判断",
    stem: "MAC地址前24位是厂商标识。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "MAC"],
    analysis: "【题干】MAC前24位厂商标？\n【考点】MAC地址结构\n【详细解答】\n1. MAC地址前24位OUI是厂商标识。\n2. 后24位厂家分配。\n【答案】正确\n【易错】MAC前24位厂商标。"
  },
  { id: "nn4610", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "IPv6", type: "judge", typeLabel: "判断",
    stem: "IPv6地址长度是128位。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "IPv6"],
    analysis: "【题干】IPv6是128位？\n【考点】IPv6\n【详细解答】\n1. IPv6 128位，地址超多。\n【答案】正确\n【易错】IPv6 128位。"
  },
  { id: "nn5608", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP可靠", type: "judge", typeLabel: "判断",
    stem: "TCP是面向字节流的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】TCP面向字节流？\n【考点】TCP特点\n【详细解答】\n1. TCP是面向字节流的。\n2. UDP是面向报文的。\n【答案】正确\n【易错】TCP字节流，UDP报文。"
  },
  { id: "nn6609", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "WWW", type: "judge", typeLabel: "判断",
    stem: "URL就是网址。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "URL"],
    analysis: "【题干】URL就是网址？\n【考点】URL\n【详细解答】\n1. URL统一资源定位符，就是我们说的网址。\n【答案】正确\n【易错】URL=网址。"
  }
]);
