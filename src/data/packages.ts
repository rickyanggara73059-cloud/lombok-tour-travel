import { TourPackage } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: 'gili-3-islands',
    category: 'gili',
    location: 'North West Lombok',
    priceIdr: 450000,
    priceUsd: 30,
    rating: 4.9,
    reviewsCount: 312,
    featured: true,
    image: '/packages/sunsetgili.jpg', // Tropical island ocean
    gallery: [
      '/packages/gili1.jpg',
      '/packages/gili2.jpg',
      '/packages/gili3.jpg'
    ],
    title: {
      id: 'Paket Tour 3 Gili (Trawangan, Meno & Air)',
      en: '3 Gilis Island Hopping Tour (Trawangan, Meno & Air)',
      zh: '跳岛一日游：吉利特拉旺岸、梅诺与艾尔三岛',
      ja: '3つのギリ島めぐり（トラワンガン・メノ・アイル）'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Jelajahi keindahan triptik tiga gili paling ikonik di Lombok dalam satu hari. Nikmati laut kristal, pasir putih lembut, perahu private glass bottom boat, serta spot foto sepeda pantai ikonik.',
      en: 'Explore the iconic trilogy of Gilis in a single unforgettable day. Sail across crystal-clear turquoise waters on a private glass-bottom boat and enjoy white sandy beaches.',
      zh: '一日内游览龙目岛最出名的三座吉利岛。乘坐私人玻璃底船穿越碧蓝海水，与海龟共舞，体验柔软白沙滩。',
      ja: 'ロンボク島で最も有名な3つのギリ島を1日で満喫。プライベートグラスボトムボートで透き通る海を渡り、ウミガメと泳ぎましょう。'
    },
    highlights: {
      id: [
        'Naik Private Glass Bottom Boat menuju 3 Gili',
        'Singgah di Gili Trawangan untuk keliling sepeda / Dokar Cikar',
        'Fotografi pantai pasir putih & ayunan laut viral',
        'Spot patung bawah laut Nest Meno & Turtle Point',
        'Makan siang santai di tepi pantai Gili Air'
      ],
      en: [
        'Private Glass Bottom Boat charter to all 3 Gilis',
        'Explore Gili Trawangan by bicycle or cidomo horse cart',
        'Instagrammable ocean swings & white sand beach photos',
        'Underwater human sculptures at Gili Meno Nest',
        'Beachside lunch at serene Gili Air'
      ],
      zh: [
        '包乘私人玻璃底船包揽三岛',
        '骑自行车或乘马车环游吉利特拉旺岸',
        '打卡网红海上秋千与粉白沙滩',
        '水下水肺打卡：梅诺雕像群与海龟点',
        '在吉利艾尔岛享受海景午餐'
      ],
      ja: [
        '3つのギリ島へ向かうプライベートグラスボトムボート',
        'レンタサイクルや馬車でギリ・トラワンガン散策',
        'インスタ映えのブランコ＆白砂ビーチ',
        'ギリ・メノの海底人型像＆ウミガメポイント',
        'ギリ・アイルの海辺でゆったりランチ'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Penjemputan & Island Hopping 3 Gili',
          en: 'Pickup & 3 Gilis Exploration',
          zh: '接送与三岛游览',
          ja: 'お迎えと3島めぐり'
        },
        activities: {
          id: [
            '08.00 - Penjemputan di Hotel Senggigi/Mataram menuju Pelabuhan Teluk Nare/Bangsal',
            '09.00 - Menyeberang dengan Glass Bottom Boat ke Gili Meno untuk melihat Nest Statue',
            '10.30 - Lanjut snorkeling bersama penyu liar di Turtle Point Gili Trawangan',
            '12.30 - Makan siang dan eksplorasi Gili Trawangan (sepeda/ayunan)',
            '14.30 - Menuju Gili Air untuk bersantai dan feeding ikan warna-warni',
            '16.30 - Kembali ke Lombok pulau utama & diantar ke hotel'
          ],
          en: [
            '08.00 AM - Hotel pickup (Senggigi/Mataram) to Teluk Nare harbor',
            '09.00 AM - Glass bottom boat ride to Gili Meno underwater statue',
            '10.30 AM - Snorkel with sea turtles at Gili Trawangan Turtle Reef',
            '12.30 PM - Beachside lunch & bicycle ride in Gili Trawangan',
            '02.30 PM - Relax at Gili Air and feed tropical reef fish',
            '04.30 PM - Cruise back to mainland Lombok & hotel drop-off'
          ],
          zh: [
            '08:00 - 从酒店接送前往码头',
            '09:00 - 乘玻璃底船前往吉利梅诺水下雕像',
            '10:30 - 在特拉旺岸海龟点与野生海龟游泳',
            '12:30 - 海滩午餐及环岛骑行',
            '14:30 - 前往吉利艾尔岛喂热带鱼与放松',
            '16:30 - 返回龙目主岛并送回酒店'
          ],
          ja: [
            '08:00 - ホテルお迎え、港へ移動',
            '09:00 - グラスボトムボートでギリ・メノ海底像へ',
            '10:30 - ギリ・トラワンガンでウミガメとシュノーケリング',
            '12:30 - ランチ＆サイクリング散策',
            '14:30 - ギリ・アイルで魚の餌やりとリラックス',
            '16:30 - 本島へ戻りホテル送迎'
          ]
        }
      }
    ],
    included: {
      id: ['Transport AC privat PP', 'Private Glass Bottom Boat', 'Peralatan Snorkeling (Masker & Fin)', 'Life Jacket & Roti Ikan', 'Pemandu lokal & Dokumentasi GoPro', 'Makan siang 1x'],
      en: ['Private AC transport roundtrip', 'Private Glass Bottom Boat', 'Snorkeling Gear (Mask & Fins)', 'Life Jacket & Fish Bread', 'Local Guide & GoPro Documentation', '1x Lunch'],
      zh: ['私家空调接送', '包船玻璃底船', '浮潜装备（面镜+脚蹼）', '救生衣与鱼食', '本地向导与GoPro水下拍照', '1次午餐'],
      ja: ['往復専用AC送迎車', 'チャーターグラスボトムボート', 'シュノーケリング機材一式', 'ライフジャケット', 'ガイド＆GoPro撮影', 'ランチ1回']
    },
    excluded: {
      id: ['Sewa sepeda di Gili Trawangan', 'Pengeluaran pribadi', 'Tip driver & guide'],
      en: ['Bicycle rental on Gili Trawangan', 'Personal expenses', 'Driver & guide tip'],
      zh: ['特拉旺岸岛上单车租金', '个人消费', '司机导游小费'],
      ja: ['島内自転車レンタル代', '個人支出', 'チップ']
    }
  },

  {
    id: 'snorkeling-gili-trawangan',
    category: 'gili',
    location: 'Gili Trawangan',
    priceIdr: 350000,
    priceUsd: 24,
    rating: 4.8,
    reviewsCount: 198,
    featured: false,
    image: '/packages/gili2.jpg', // Snorkeling turtle
    gallery: [
      '/packages/gili3.jpg',
      '/packages/snorkling.jpg'
    ],
    title: {
      id: 'Paket Special Snorkeling Gili Trawangan & Turtle Point',
      en: 'Gili Trawangan Turtle & Coral Snorkeling Specialty',
      zh: '吉利特拉旺岸海龟与珊瑚浮潜专线',
      ja: 'ギリ・トラワンガン ウミガメ＆珊瑚シュノーケリング'
    },
    duration: {
      id: '1 Hari (6 Jam)',
      en: '1 Day (6 Hours)',
      zh: '1天 (6小时)',
      ja: '1日 (6時間)'
    },
    description: {
      id: 'Paket khusus pecinta bawah laut! Temukan keajaiban taman karang berwarna-warni, kawanan ikan tropis, serta berenang dari dekat dengan penyu hijau raksasa di spot Turtle Point Gili Trawangan.',
      en: 'Special package for marine life lovers! Dive into vivid coral gardens, tropical fish schools, and swim side-by-side with wild green turtles at Gili Trawangan Turtle Point.',
      zh: '专为水下爱好者设计的浮潜专线！探索绚丽的珊瑚花园与海龟点，与野生绿海龟共游并留下珍贵照片。',
      ja: '海好きのための特別パッケージ！色鮮やかなサンゴ礁と熱帯夜の群れ、巨大なウミガメと一緒に泳ぐ最高のシュノーケリング体験。'
    },
    highlights: {
      id: [
        'Spot Utama: Turtle Point Gili Trawangan',
        'Spot Karang Biru (Blue Coral) & Fish Garden',
        'Gratis foto & video bawah air kualitas tinggi (GoPro)',
        'Pemandu snorkeling berpengalaman',
        'Waktu santai santap kuliner laut di Trawangan'
      ],
      en: [
        'Main Spot: Gili Trawangan Turtle Point',
        'Rare Blue Coral & Fish Garden snorkeling stops',
        'Free high-res underwater GoPro photography & video',
        'Experienced personal snorkeling master guide',
        'Beach relaxation & seafood dining time'
      ],
      zh: [
        '核心打卡：特拉旺岸海龟点',
        '蓝珊瑚花园与千鱼浮潜点',
        '免费提供GoPro高清水下拍摄',
        '专业浮潜教练陪同',
        '岛上休闲与海鲜美食时间'
      ],
      ja: [
        'メインスポット：ギリ・トラワンガン ウミガメポイント',
        'ブルーコーラル＆フィッシュガーデン',
        'GoPro水中写真＆動画撮影プレゼント',
        '経験豊富なベテランガイド同行',
        '島内ビーチリラックスとシーフード'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Eksplorasi Bawah Laut Gili Trawangan',
          en: 'Undersea Adventure Gili Trawangan',
          zh: '特拉旺岸水下探险',
          ja: 'ギリ・トラワンガン水中アドベンチャー'
        },
        activities: {
          id: [
            '08.30 - Meeting point di Pelabuhan Bangsal/Teluk Nare',
            '09.15 - Menuju Turtle Point & pengarahan safety snorkeling',
            '10.00 - Snorkeling bersama penyu hijau & foto GoPro underwater',
            '11.30 - Pindah ke spot Blue Coral Meno / Trawangan',
            '13.00 - Makan siang di resto pinggir pantai Gili Trawangan',
            '15.00 - Acara bebas di Trawangan & kembali ke Lombok'
          ],
          en: [
            '08.30 AM - Meet at Bangsal/Teluk Nare Harbor',
            '09.15 AM - Boat ride to Turtle Point & safety briefing',
            '10.00 AM - Snorkel with green turtles & GoPro photos',
            '11.30 AM - Continue to Blue Coral garden reef',
            '01.00 PM - Beachside lunch on Gili Trawangan',
            '03.00 PM - Free time & return boat to Lombok mainland'
          ],
          zh: [
            '08:30 - 码头集合',
            '09:15 - 乘船至海龟点并听取安全讲解',
            '10:00 - 与海龟浮潜并拍摄GoPro照片',
            '11:30 - 探索蓝珊瑚与彩鱼区',
            '13:00 - 特拉旺岸海滩餐厅午餐',
            '15:00 - 自由活动后返航'
          ],
          ja: [
            '08:30 - 港で合流・レクチャー',
            '09:15 - ウミガメポイントへ移動',
            '10:00 - ウミガメと泳ぎGoPro撮影',
            '11:30 - ブルーコーラルエリアへ移動',
            '13:00 - ギリ・トラワンガンでランチ',
            '15:00 - 自由散策後、本島へ帰航'
          ]
        }
      }
    ],
    included: {
      id: ['Speedboat / Glass bottom boat', 'Alat Snorkeling lengkap', 'Dokumentasi GoPro file asli', 'Life jacket', 'Pemandu renang profesional'],
      en: ['Speedboat / Glass bottom boat', 'Full Snorkeling kit', 'Original GoPro underwater photos/videos', 'Life vest', 'Pro swim guide'],
      zh: ['快艇/玻璃底船', '全套浮潜设备', 'GoPro原始水下照片视频', '救生衣', '专业水下向导'],
      ja: ['スピードボート/グラスボトム', 'シュノーケリング用具一式', 'GoPro撮影データ全提供', 'ライフジャケット', 'プロガイド']
    },
    excluded: {
      id: ['Makan & Minum pribadi', 'Handuk & kebutuhan pribadi'],
      en: ['Personal meals & drinks', 'Towel & personal items'],
      zh: ['个人餐饮', '毛巾及个人用品'],
      ja: ['個人飲食代', 'タオル・個人用品']
    }
  },

  {
    id: 'gili-gede-sekotong',
    category: 'gili',
    location: 'South West Lombok (Sekotong)',
    priceIdr: 650000,
    priceUsd: 44,
    rating: 4.9,
    reviewsCount: 124,
    featured: true,
    image: '/packages/giligede.jpg', // White sand secluded beach
    gallery: [
      '/packages/giligede1.jpg',
      '/packages/gilikedis.jpg'
    ],
    title: {
      id: 'Paket Tour Secret Gilis (Gili Gede, Gili Layar & Gili Asahan Sekotong)',
      en: 'Secret Gilis Expedition (Gili Gede, Gili Layar & Gili Asahan Sekotong)',
      zh: '秘境吉利金三角：吉利格德、莱亚与阿萨汉水下探索',
      ja: 'シークレットギリ探索（ギリ・ゲデ、ギリ・ラヤール＆アサハン）'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Sisi rahasia keindahan Lombok Barat Daya! Nikmati ketenangan pulau-pulau perawan tanpa keramaian: Gili Gede, Gili Layar, Gili Asahan, dan Gili Rengit dengan terumbu karang hidup yang luar biasa indah.',
      en: 'Discover South West Lombok pristine secrets! Escape the crowds and sail through untouched paradises: Gili Gede, Gili Layar, Gili Asahan & Gili Rengit with vibrant virgin coral reefs.',
      zh: '探索龙目岛西南部的隐秘天堂！远离喧嚣人群，穿梭于隐秘小岛：吉利格德、莱亚尔、阿萨汉与伦吉特岛。',
      ja: 'ロンボク島南西部の隠れた楽園へ！混雑を避け、手つかずの自然が残るギリ・ゲデ、ラヤール、アサハンを巡るラグジュアリープライベートボート旅。'
    },
    highlights: {
      id: [
        'Eksplorasi pulau rahasia Sekotong Lombok Barat Daya',
        'Snorkeling karang kipas (Sea Fan) & biota laut langka',
        'Suasana pulau tenang, privat, dan instagrammable',
        'Perahu privat tradisional dari Pelabuhan Tembowong',
        'Sajian seafood segar bakar di pinggir pantai Gili Asahan'
      ],
      en: [
        'Explore untouched Secret Gilis of Sekotong, SW Lombok',
        'Snorkel huge Sea Fan gardens & rare marine ecosystems',
        'Peaceful, private beach vibes without crowded tourists',
        'Private traditional boat charter from Tembowong harbor',
        'Fresh grilled seafood lunch on Gili Asahan beach'
      ],
      zh: [
        '探索龙目岛西南部秘境海岛',
        '浮潜打卡巨型海扇珊瑚与稀有海洋生物',
        '宁静人少，极具独享私密感',
        '从Tembowong码头包乘传统船',
        '在阿萨汉岛享受现烤海鲜大餐'
      ],
      ja: [
        'ロンボク南西部の隠れ家「シークレットギリ」巡り',
        '巨大なウミウチワ（サンゴ）と珍しい海の生き物',
        '観光客が少なくプライベート感あふれるビーチ',
        'テンボウォン港からのチャーターボート',
        'ギリ・アサハン島での新鮮なシーフードBBQ'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Tour Bahari Lombok Barat Daya',
          en: 'South West Lombok Marine Discovery',
          zh: '龙目岛西南部海洋之旅',
          ja: 'ロンボク南西海域マリンディスカバリー'
        },
        activities: {
          id: [
            '07.30 - Penjemputan di Hotel menuju Pelabuhan Tembowong Sekotong',
            '09.30 - Naik perahu privat menuju Gili Rengit & Gili Layar',
            '10.30 - Snorkeling di taman karang spektakuler Gili Layar',
            '12.30 - Singgah di Gili Asahan untuk makan siang seafood bakar',
            '14.30 - Eksplorasi pulau terbesar Gili Gede & perkampungan nelayan',
            '16.30 - Menyeberang kembali ke daratan & perjalanan pulang'
          ],
          en: [
            '07.30 AM - Hotel pickup drive south to Tembowong Sekotong Harbor',
            '09.30 AM - Private boat boarding towards Gili Rengit & Gili Layar',
            '10.30 AM - Snorkel Gili Layar stunning untouched coral gardens',
            '12.30 PM - Gili Asahan beachside grilled seafood lunch',
            '02.30 PM - Visit Gili Gede island & peaceful fishing village',
            '04.30 PM - Return boat to mainland & hotel drop-off'
          ],
          zh: [
            '07:30 - 酒店接送前往Sekotong Tembowong码头',
            '09:30 - 乘坐私人船前往吉利伦吉特与莱亚岛',
            '10:30 - 在莱亚岛未受污染的珊瑚花园浮潜',
            '12:30 - 抵达阿萨汉岛享用烤海鲜午餐',
            '14:30 - 游览吉利格德岛与渔村文化',
            '16:30 - 乘船返回主岛并送回酒店'
          ],
          ja: [
            '07:30 - ホテルお迎え、テンボウォン港へドライブ',
            '09:30 - ボートでギリ・レンギット＆ラヤールへ',
            '10:30 - ギリ・ラヤールで感動の絶景シュノーケリング',
            '12:30 - ギリ・アサハンで獲れたてシーフードランチ',
            '14:30 - ギリ・ゲデ島と漁村ののどかな風景散策',
            '16:30 - 本島へ戻りホテル送迎'
          ]
        }
      }
    ],
    included: {
      id: ['Transport AC Privat PP', 'Perahu Privat Sekotong', 'Peralatan Snorkeling', 'Makan siang Seafood BBQ 1x', 'Air Mineral & Buah Segar', 'Pemandu lokal'],
      en: ['Private AC vehicle PP', 'Private Sekotong Boat Charter', 'Full Snorkel gear', '1x Seafood BBQ Lunch', 'Mineral Water & Fresh Fruit', 'Local guide'],
      zh: ['私家空调专车接送', 'Sekotong包船', '全套浮潜工具', '1次烧烤海鲜午餐', '矿泉水与水果', '本地导游'],
      ja: ['往復専用車', 'チャーターボート', 'シュノーケル一式', 'シーフードBBQランチ', 'ミネラルウォーター・フルーツ', '現地ガイド']
    },
    excluded: {
      id: ['Pengeluaran pribadi', 'Tip driver & boatman'],
      en: ['Personal expenses', 'Tips for driver & boatman'],
      zh: ['个人花费', '司机与船夫小费'],
      ja: ['個人支出', 'チップ']
    }
  },

  {
    id: 'rinjani-trekking-sembalun-3d2n',
    category: 'rinjani',
    location: 'Gunung Rinjani, Sembalun',
    priceIdr: 2850000,
    priceUsd: 190,
    rating: 5.0,
    reviewsCount: 245,
    featured: true,
    image: '/packages/mtrinjani.jpg', // Volcano summit sunrise
    gallery: [
      '/packages/sunsetrinjani.jpg',
      '/packages/plawangan.jpg'
    ],
    title: {
      id: 'Paket Trekking Rinjani Summit 3.726m & Danau Segara Anak (3H2M Sembalun)',
      en: 'Mt Rinjani Summit 3,726m & Segara Anak Lake Trekking (3D2N Sembalun)',
      zh: '林贾尼火山登顶3726米与圣湖徒步 (3天2晚 仙本伦路线)',
      ja: 'リンジャニ山頂 3,726m＆セガラ・アナック湖トレッキング（3泊2日）'
    },
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
      zh: '3天2晚',
      ja: '3泊2日'
    },
    description: {
      id: 'Pengalaman pendakian gunung terbaik di Asia Tenggara! Penaklukan puncak Rinjani 3.726 mdpl via Sembalun, menyaksikan matahari terbit mengagumkan, danau kawah Segara Anak, serta pemandian air panas alami.',
      en: 'The ultimate volcano trekking challenge in Southeast Asia! Conquest of Mount Rinjani 3,726m summit via Sembalun, stunning crater rim sunrise, Segara Anak caldera lake & natural hot springs.',
      zh: '东南亚终极火山徒步挑战！经由仙本伦路线征服海拔3726米的林贾尼火山山顶，打卡云海日出、圣湖以及天然温泉。',
      ja: '東南アジア最高の火山トレッキング！センバルンルートから3,726mのリンジャニ山頂を極め、雲海の初日の出、カルデラ湖、天然温泉を巡る。'
    },
    highlights: {
      id: [
        'Mencapai Puncak Rinjani 3.726 mdpl',
        'Camping di Plawangan Sembalun dengan pemandangan bintang',
        'Turun ke Danau Segara Anak & Gunung Baru Jari',
        'Berendam di Kolam Air Panas Alami Rinjani',
        'Porter profesional membawa perlengkapan tenda & makanan lezat'
      ],
      en: [
        'Reach Mount Rinjani Summit 3,726m peak',
        'Camp at Sembalun Crater Rim with stargazing',
        'Descent to Segara Anak Crater Lake & Baru Jari volcano',
        'Soak in healing Natural Thermal Hot Springs',
        'Full porter team carrying camping gear & serving fresh cooked meals'
      ],
      zh: [
        '登顶海拔3726米林贾尼火山最高峰',
        '在Sembalun火山口边缘露营露天观星',
        '下撤至Segara Anak火山湖与Baru Jari小火山',
        '体验温泉自然野浴',
        '专业背夫协助携带露营装备与全程烹饪料理'
      ],
      ja: [
        '標高3,726mのリンジャニ山頂へ登頂',
        'センバルン外輪山で満天の星空キャンプ',
        'セガラ・アナック湖とバル・ジャリ火山へ下山',
        '天然の野天温泉で疲労回復',
        '経験豊富なポーターが全キャンプ用品搬送＆温かい食事提供'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Sembalun Village (1.100m) ke Plawangan Sembalun (2.639m)',
          en: 'Sembalun Village (1,100m) to Crater Rim (2,639m)',
          zh: 'Sembalun村至火山口露营地',
          ja: 'センバルン村から外輪山キャンプ地へ'
        },
        activities: {
          id: [
            '07.00 - Briefing & registrasi di Taman Nasional Gunung Rinjani (TNGR) Sembalun',
            '08.00 - Mulai trekking melewati padang savana Sembalun ke Pos 1, 2, dan 3',
            '13.00 - Makan siang segar disiapkan porter di Pos 2',
            '14.00 - Pendakian melintasi Bukit Penyesalan menuju Plawangan Sembalun',
            '17.30 - Tiba di Plawangan Sembalun, menikmati sunset & santap malam tenda'
          ],
          en: [
            '07.00 AM - Briefing & medical check at Sembalun Rinjani National Park',
            '08.00 AM - Start trek across golden Sembalun savanna to Pos 1, 2, 3',
            '01.00 PM - Fresh cooked lunch served by porters at Pos 2',
            '02.00 PM - Steep climb up "Regret Hill" towards Sembalun Crater Rim',
            '05.30 PM - Arrive Crater Rim, enjoy sunset view over lake & dinner'
          ],
          zh: [
            '07:00 - 国家公园注册与说明',
            '08:00 - 穿过Sembalun大草原徒步至1、2、3号休息站',
            '13:00 - 在2号站享用背夫烹制的午餐',
            '14:00 - 挑战"悔恨丘"陡坡前往火山口边缘',
            '17:30 - 抵达露营地观赏夕阳与享用晚餐'
          ],
          ja: [
            '07:00 - センバルン国立公園事務所で受付け',
            '08:00 - 大草原を越えてPos 1, 2, 3へトレッキング',
            '13:00 - Pos 2にてポーターが温かいランチを提供',
            '14:00 - 外輪山へと続く急坂（後悔の丘）を登る',
            '17:30 - キャンプ地到着、夕日観賞と夕食'
          ]
        }
      },
      {
        day: 2,
        title: {
          id: 'Puncak 3.726m - Danau Segara Anak & Air Panas',
          en: 'Summit Push 3,726m - Crater Lake & Hot Springs',
          zh: '冲顶3726米 - 降至圣湖与温泉',
          ja: '山頂アタック 3,726m - 火山湖と温泉'
        },
        activities: {
          id: [
            '02.00 - Bangun & light breakfast, persiapan summit attack',
            '06.00 - Tiba di Puncak Rinjani 3.726 mdpl menyaksikan sunrise & Samudra Hindia',
            '09.00 - Kembali ke camp Plawangan Sembalun & sarapan pagi',
            '11.00 - Turun menuju Danau Segara Anak (2.000m)',
            '14.00 - Makan siang di danau & berendam di Air Panas Alami',
            '18.00 - Camping malam kedua di pinggir Danau Segara Anak'
          ],
          en: [
            '02.00 AM - Wake up, light breakfast & start midnight summit attack',
            '06.00 AM - Reach Summit 3,726m for glorious sunrise & Lombok/Bali views',
            '09.00 AM - Return to Rim camp for heavy breakfast',
            '11.00 AM - Steep descent down to Segara Anak Caldera Lake',
            '02.00 PM - Lake lunch & relaxing soak in Natural Thermal Hot Springs',
            '06.00 PM - Camp night 2 on the peaceful banks of Segara Anak Lake'
          ],
          zh: [
            '02:00 - 起床享用简餐，开启深夜冲顶',
            '06:00 - 登顶3726米俯瞰云海日出与阿贡火山',
            '09:00 - 返回露营地享用丰盛早餐',
            '11:00 - 下撤至Segara Anak火山湖',
            '14:00 - 湖边午餐与泡天然温泉解乏',
            '18:00 - 在火山口湖畔露营过夜'
          ],
          ja: [
            '02:00 - 起床、軽食後に深夜の山頂アタック開始',
            '06:00 - 3,726m山頂登頂！雲海と日出、バリ島アグン山を望む',
            '09:00 - キャンプ地へ戻り朝食',
            '11:00 - セガラ・アナック湖へ向けて急降下',
            '14:00 - 湖畔ランチ＆天然温泉でリフレッシュ',
            '18:00 - 湖畔にて2泊目のキャンプ'
          ]
        }
      },
      {
        day: 3,
        title: {
          id: 'Danau Segara Anak ke Senaru / Sembalun & Transfer Hotel',
          en: 'Lake Ascent to Senaru/Sembalun & Return',
          zh: '下山与返回酒店',
          ja: '下山とホテル送迎'
        },
        activities: {
          id: [
            '07.00 - Sarapan pagi di tepi danau yang tenang',
            '08.00 - Naik menuju Plawangan Senaru / Sembalun',
            '12.00 - Makan siang di perjalanan trek',
            '15.00 - Tiba di gerbang Senaru/Sembalun',
            '16.00 - Transfer kendaraan AC ke hotel Senggigi/Kuta/Airport'
          ],
          en: [
            '07.00 AM - Breakfast by the calm lake shore',
            '08.00 AM - Hike up towards Senaru/Sembalun crater rim',
            '12.00 PM - Trail lunch prepared by guide',
            '03.00 PM - Reach Senaru/Sembalun gate exit',
            '04.00 PM - Private vehicle transfer back to hotel/airport'
          ],
          zh: [
            '07:00 - 湖边晨间早餐',
            '08:00 - 徒步经Senaru或Sembalun出山',
            '12:00 - 途中午餐',
            '15:00 - 抵达出口',
            '16:00 - 专车接送回酒店或机场'
          ],
          ja: [
            '07:00 - 湖畔での朝食',
            '08:00 - 下山トレック開始',
            '12:00 - 途中でトレイルランチ',
            '15:00 - 登山口ゲート到着',
            '16:00 - 専用車でホテル/空港へ送迎'
          ]
        }
      }
    ],
    included: {
      id: ['Tiket Masuk Taman Nasional Rinjani', 'Pemandu Gunung Berlisensi', 'Porter Tenda, Matras & Cooking Gear', 'Tenda Dome, Sleeping Bag, Bantal', 'Makan 3x sehari selama pendakian', 'Transportasi AC PP ke Sembalun', 'Toilet tent & P3K'],
      en: ['Rinjani National Park Entry Fee', 'Licensed Mountain Guide', 'Porters for Camp Equipment & Food', 'Dome Tent, Sleeping Bag, Mattress', '3 Meals daily during trek', 'AC Transport roundtrip to Sembalun', 'Toilet tent & First Aid kit'],
      zh: ['林贾尼国家公园门票', '持有执照的专业登山导游', '携带露营设备与食材的背夫团队', '双层露营帐篷、睡袋、防潮垫', '登山期间每日三餐', '往返Sembalun空调专车', '移动厕所帐篷与急救包'],
      ja: ['リンジャニ国立公園入山料', 'ライセンス所持登山ガイド', 'キャンプ用品・食料搬送ポーター', 'ドームテント・寝袋・マット', 'トレック中 毎食3食付き', 'センバルン往返専用車', 'トイレテント＆救急箱']
    },
    excluded: {
      id: ['Pakaian / jaket hangat pribadi', 'Sepatu trekking pribadi', 'Tip guide & porter', 'Pengeluaran pribadi'],
      en: ['Personal trekking gear & warm jacket', 'Personal hiking boots', 'Tips for guide & porters', 'Personal items'],
      zh: ['个人御寒保暖衣物', '个人登山鞋', '导游与背夫小费', '个人花费'],
      ja: ['防寒着・個人衣装', 'トレッキングシューズ', 'ガイド・ポーターへのチップ', '個人支出']
    }
  },

  {
    id: 'rinjani-rim-sembalun-2d1n',
    category: 'rinjani',
    location: 'Sembalun, Gunung Rinjani',
    priceIdr: 1950000,
    priceUsd: 130,
    rating: 4.8,
    reviewsCount: 167,
    featured: false,
    image: '/packages/tracking.jpg', // Mountain savanna sunset
    gallery: [
      '/packages/sembalun.jpg'
    ],
    title: {
      id: 'Paket Trekking Rinjani Express Plawangan Sembalun (2H1M)',
      en: 'Mt Rinjani Crater Rim Sembalun Express Trek (2D1N)',
      zh: '林贾尼火山口边缘仙本伦快线徒步 (2天1晚)',
      ja: 'リンジャニ外輪山 センバルン エクスプレストレック（2泊1日）'
    },
    duration: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
      zh: '2天1晚',
      ja: '2泊1日'
    },
    description: {
      id: 'Pilihan ideal bagi pendaki dengan waktu terbatas! Menjangkau Plawangan Sembalun (2.639m), menikmati sunset fantastis di atas danau Segara Anak serta pemandangan puncak Rinjani.',
      en: 'Perfect option for hikers with limited time! Reach Sembalun Crater Rim (2,639m), watch breathtaking sunsets over Segara Anak crater lake and marvel at Rinjani peak.',
      zh: '适合时间有限的登山爱好者的完美选择！抵达海拔2639米的Sembalun火山口边缘，观赏日落与火山湖全景。',
      ja: '限られた時間で楽しみたい方に最適！標高2,639mのセンバルン外輪山へ登り、カルデラ湖に沈む絶景の夕日を堪能。'
    },
    highlights: {
      id: [
        'Melintasi Savana Sembalun yang menawan',
        'Camping mewah di Plawangan Sembalun (2.639m)',
        'Sunset & Sunrise panorama danau Segara Anak',
        'Penyediaan makanan segar hangat dari porter',
        'Cocok untuk pemula dengan stamina baik'
      ],
      en: [
        'Trek through stunning Sembalun Savanna grass plains',
        'Luxury camping at Sembalun Crater Rim (2,639m)',
        'Sunset & Sunrise panorama of crater lake',
        'Fresh hot meals served by mountain porters',
        'Great option for active beginners'
      ],
      zh: [
        '徒步穿越美丽的仙本伦大草原',
        '在海拔2639米火山口边缘露营',
        '火山口日落与日出壮丽全景',
        '背夫全程现做热腾腾的丰盛餐食',
        '适合体力良好的初学者'
      ],
      ja: [
        '美しく広がるセンバルン大草原をトレック',
        '標高2,639mの外輪山で絶景キャンプ',
        '火山口湖の夕日と朝日を堪能',
        'ポーターによる温かい手料理',
        '体力のある初心者にもおすすめ'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Sembalun - Plawangan Sembalun Rim',
          en: 'Sembalun to Sembalun Crater Rim',
          zh: 'Sembalun至火山口露营地',
          ja: 'センバルンから外輪山キャンプ地へ'
        },
        activities: {
          id: [
            '07.00 - Penjemputan hotel menuju Desa Sembalun',
            '08.30 - Star trekking dari Sembalun gate',
            '12.00 - Makan siang di Pos 2 Padang Savana',
            '16.30 - Tiba di Plawangan Sembalun, pasang tenda & nikmati sunset',
            '19.00 - Makan malam & istirahat di bawah hamparan bintang'
          ],
          en: [
            '07.00 AM - Hotel pick-up drive to Sembalun Village',
            '08.30 AM - Start trekking from Sembalun gate',
            '12.00 PM - Savanna lunch break at Pos 2',
            '04.30 PM - Arrive Sembalun Crater Rim, sunset viewing & camp setup',
            '07.00 PM - Dinner under starry sky & overnight in tent'
          ],
          zh: [
            '07:00 - 酒店接送至Sembalun村',
            '08:30 - 从Sembalun入口出发徒步',
            '12:00 - 在2号站大草原享用午餐',
            '16:30 - 抵达火山口边缘，搭建帐篷与观赏日落',
            '19:00 - 星空下享用晚餐与休息'
          ],
          ja: [
            '07:00 - ホテルお迎え、センバルン村へ',
            '08:30 - 登山口よりトレッキング開始',
            '12:00 - Pos 2にて草原ランチ',
            '16:30 - 外輪山到着、テント設営＆夕日観賞',
            '19:00 - 満天の星空の下で夕食・就寝'
          ]
        }
      },
      {
        day: 2,
        title: {
          id: 'Sunrise Rim - Turun Kembali ke Sembalun',
          en: 'Sunrise Rim - Descent to Sembalun',
          zh: '火山口日出 - 下山返回',
          ja: '日出観賞 - センバルンへ下山'
        },
        activities: {
          id: [
            '06.00 - Menikmati sunrise fantastis dari atas tenda',
            '07.30 - Sarapan pagi & kopi/teh hangat',
            '08.30 - Perjalanan turun kembali menuju Sembalun',
            '13.00 - Makan siang di Pos 1 / Sembalun village',
            '15.00 - Transfer kembali ke hotel Senggigi/Kuta Lombok'
          ],
          en: [
            '06.00 AM - Watch glorious sunrise from tent doorstep',
            '07.30 AM - Breakfast with hot coffee/tea',
            '08.30 AM - Start descent back down to Sembalun village',
            '01.00 PM - Lunch at Pos 1 or Sembalun base',
            '03.00 PM - Private transfer back to hotel Senggigi/Kuta'
          ],
          zh: [
            '06:00 - 帐篷前观赏日出',
            '07:30 - 享用早餐与热咖啡',
            '08:30 - 开始徒步下山',
            '13:00 - 在Sembalun享用午餐',
            '15:00 - 专车送回酒店'
          ],
          ja: [
            '06:00 - テント前からご来光観賞',
            '07:30 - 朝食と温かいコーヒー/紅茶',
            '08:30 - センバルン村へ下山開始',
            '13:00 - 麓でランチ',
            '15:00 - 専用車でホテルへ送迎'
          ]
        }
      }
    ],
    included: {
      id: ['Tiket Taman Nasional Rinjani', 'Guide & Porter Tenda', 'Peralatan Camp (Tenda, Sleeping Bag, Matras)', 'Makan & Minum selama trek', 'Transportasi AC PP'],
      en: ['Rinjani National Park Fee', 'Mountain Guide & Porters', 'Camping Equipment (Tent, Sleeping Bag, Mat)', 'All meals & water during trek', 'AC Transport Roundtrip'],
      zh: ['国家公园门票', '导游与背夫', '全套露营装备', '徒步全程餐饮与水', '往返空调接送'],
      ja: ['入山料', 'ガイド＆ポーター', 'キャンプ機材一式', '全食事・飲料水', '往復専用車']
    },
    excluded: {
      id: ['Perlengkapan pribadi', 'Tip guide & porter'],
      en: ['Personal gear', 'Tips for guide & porter'],
      zh: ['个人物品', '导游背夫小费'],
      ja: ['個人用品', 'チップ']
    }
  },

  {
    id: 'desasade-desaende-culture',
    category: 'culture',
    location: 'Central Lombok',
    priceIdr: 400000,
    priceUsd: 27,
    rating: 4.9,
    reviewsCount: 185,
    featured: true,
    image: '/packages/sade1.jpg', // Traditional Sasak weaving / village
    gallery: [
      '/packages/sade2.jpg',
      '/packages/sade3.jpg'
    ],
    title: {
      id: 'Paket Wisata Budaya Sasak Desa Sade & Desa Ende',
      en: 'Authentic Sasak Cultural Heritage Tour (Desa Sade & Desa Ende)',
      zh: '萨萨克传统文化遗产深度游：Sade村与Ende村',
      ja: 'ササック族の伝統文化体験（サデ村＆エンデ村）'
    },
    duration: {
      id: '1 Hari (Half/Full Day)',
      en: '1 Day (Half/Full Day)',
      zh: '1天 (半天/全天)',
      ja: '1日（半日/終日）'
    },
    description: {
      id: 'Menyelami kearifan lokal dan budaya asli suku Sasak di Desa Sade dan Desa Ende. Ditemani warga lokal, lihat rumah adat atap ilalang, pembuatan Kain Tenun Ikat, serta tarian seni pertarungan Peresean.',
      en: 'Immerse in ancient indigenous heritage of Lombok Sasak tribe at Sade & Ende villages. Walk with local village elders through thatched-roof homes, handloom ikat weaving & Peresean stick fighting art.',
      zh: '深入萨萨克土著部落Sade村与Ende村。在村里长老带领下探访茅草屋、手织宋克特布（Tenun Ikat）以及观赏Peresean传统藤条比武。',
      ja: 'サデ村とエンデ村でササック族の古き良き伝統文化を体験。藁葺き屋根の伝統家屋、手織り絣（テヌン）、藤の棒で戦うペレセアン演武を見学。'
    },
    highlights: {
      id: [
        'Eksplorasi Desa Adat Sade & Desa Ende dengan Pemandu Lokal Sasak',
        'Melihat arsitektur unik Bale Tani berlantaikan kotoran kerbau kering',
        'Belajar menenun Kain Tenun Ikat khas Lombok langsung dari pengrajin',
        'Pertunjukan kesenian tradisional pertarungan Peresean',
        'Mencoba pakaian adat Sasak (Baju Lambung & Pegon) untuk foto kenangan'
      ],
      en: [
        'Explore Sade & Ende Traditional Villages guided by native Sasak elders',
        'Witness unique Bale Tani architecture built with natural materials',
        'Learn traditional handloom ikat weaving directly from village women',
        'Watch live dramatic Peresean stick-fighting martial art performance',
        'Try traditional Sasak costumes (Lambung & Pegon) for photo souvenirs'
      ],
      zh: [
        '由本地萨萨克长者带领游览Sade和Ende传统村落',
        '参观独特的Bale Tani土木竹草结构建筑',
        '向村里妇女学习体验传统手织布艺',
        '观赏刺激的Peresean藤条格斗传统武艺表演',
        '穿上传统Sasak服饰拍照留念'
      ],
      ja: [
        'ササック族の長老ガイドと巡るサデ村＆エンデ村',
        '自然素材で作られた伝統建築Bale Tani見学',
        '村の女性たちから学ぶ伝統の手織り体験',
        '迫力満点の伝統格闘演武ペレセアン見学',
        '伝統衣装（ラムブン）を着用して記念撮影'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Perjalanan Kebudayaan Sasak',
          en: 'Sasak Cultural Journey',
          zh: '萨萨克文化之旅',
          ja: 'ササック文化ジャーニー'
        },
        activities: {
          id: [
            '09.00 - Penjemputan di Hotel / Bandara Lombok (LOP)',
            '09.45 - Tiba di Desa Ende, disambut musik Gendang Beleq & pemandu lokal',
            '10.30 - Mengunjungi Desa Sade, belajar kerajinan tenun & rumah adat',
            '12.30 - Santap siang kuliner khas Lombok (Ayam Taliwang / Nasi Balap Sukaraja)',
            '14.30 - Belanja suvenir kerajinan tangan kain tenun asli Sasak',
            '16.00 - Diantar kembali ke hotel atau destinasi berikutnya'
          ],
          en: [
            '09.00 AM - Pick-up from Hotel or Lombok Airport (LOP)',
            '09.45 AM - Arrive Ende Village, welcomed by Gendang Beleq music & village guide',
            '10.30 AM - Visit Sade Village, learn weaving arts & ancient living style',
            '12.30 PM - Traditional Lombok lunch (Ayam Taliwang grilled spicy chicken)',
            '02.30 PM - Shop authentic Sasak handwoven ikat fabrics & handicrafts',
            '04.00 PM - Drop-off back to hotel or next destination'
          ],
          zh: [
            '09:00 - 酒店或龙目岛机场接送',
            '09:45 - 抵达Ende村，欣赏Gendang Beleq传统迎宾鼓乐',
            '10:30 - 参访Sade村，体验传统织布与古法民居',
            '12:30 - 享用龙目特产Taliwang烤鸡美味午餐',
            '14:30 - 选购精美萨萨克手织布与手工纪念品',
            '16:00 - 送回酒店或指定地点'
          ],
          ja: [
            '09:00 - ホテルまたは空港でお迎え',
            '09:45 - エンデ村到着、歓迎の伝統太鼓演奏',
            '10:30 - サデ村見学、織物体験と伝統住居見学',
            '12:30 - ロンボク名物タリワンチキン等のランチ',
            '14:30 - 手織り布や伝統工芸品のお買い物',
            '16:00 - ホテルまたは次の目的地へ送迎'
          ]
        }
      }
    ],
    included: {
      id: ['Transport Mobil AC Privat', 'Donasi & Tiket Masuk Desa Sade & Ende', 'Pemandu Lokal Desa Berbahasa Indonesia/Inggris', 'Sewa Kostum Adat Sasak untuk foto', 'Makan siang kuliner Sasak 1x'],
      en: ['Private AC Car', 'Village Entrance & Donation Fees', 'English/Indonesian Native Village Guide', 'Sasak Traditional Costume Rental', '1x Authentic Sasak Lunch'],
      zh: ['私家空调专车', '村落门票与捐款', '双语本地村落导游', '萨萨克传统服饰租赁', '1次萨萨克特色午餐'],
      ja: ['専用AC車', '村の入場料・寄付金', '日本語/英語ガイド', '伝統衣装レンタル', 'ササック料理ランチ1回']
    },
    excluded: {
      id: ['Pembelian souvenir pribadi', 'Tip guide village & driver'],
      en: ['Personal souvenir purchases', 'Tips for village guide & driver'],
      zh: ['个人纪念品购买', '村落导游与司机小费'],
      ja: ['個人のお土産代', 'ガイド・ドライバーへのチップ']
    }
  },

  {
    id: 'kuta-mandalika-bukit-merese',
    category: 'mandalika',
    location: 'South Lombok (Mandalika)',
    priceIdr: 450000,
    priceUsd: 30,
    rating: 4.9,
    reviewsCount: 220,
    featured: true,
    image: '/gakeri/merese.jpg', // Coastal hills ocean view
    gallery: [
      '/gakeri/pantaikuta.jpg'
    ],
    title: {
      id: 'Paket Tour Pantai Kuta Mandalika & Bukit Merese Sunset',
      en: 'Kuta Mandalika Beaches & Bukit Merese Sunset Panorama',
      zh: '曼达利卡海滩与Merese山丘夕阳绝景一日游',
      ja: 'クタ・マンダリカビーチ＆メレーセの丘 サンセットツアー'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Menjelajahi pesona pesisir selatan Lombok yang mendunia! Kunjungi Sirkuit Internasional Mandalika, Pantai Tanjung Aan berpasir merica, Pantai Seger, dan momen sunset terbaik di atas Bukit Merese.',
      en: 'Tour Lombok world-famous southern coastline! Visit Mandalika International MotoGP Circuit photo spot, unique pepper-sand Tanjung Aan Beach, Seger Beach & breathtaking Bukit Merese sunset cliffs.',
      zh: '游览龙目岛闻名遐迩的南部海岸线！打卡曼达利卡MotoGP赛车场外景、胡椒步道Tanjung Aan沙滩、Seger海滩与Merese山丘悬崖日落。',
      ja: '世界的に有名なロンボク島南部海岸線を巡る！マンダリカMotoGPサーキット、胡椒のような砂のタンジュン・アンビーチ、メレーセの丘からのサンセット。'
    },
    highlights: {
      id: [
        'Spot foto Sirkuit Internasional Mandalika MotoGP',
        'Pantai Tanjung Aan pasir merica unik & Pantai Seger',
        'Mendaki Bukit Merese untuk sunset terbaik di Lombok',
        'Makan siang kuliner seafood di pesisir pantai Kuta',
        'Spot foto tebing samudera Hindia yang dramatis'
      ],
      en: [
        'Photo session at Mandalika MotoGP International Circuit',
        'Unique "Pepper-Sand" Tanjung Aan Beach & Seger Beach',
        'Hike up Bukit Merese for Lombok #1 rated Sunset view',
        'Beachfront seafood lunch at Kuta Beach boardwalk',
        'Dramatic cliffside Indian Ocean panoramic vistas'
      ],
      zh: [
        '曼达利卡MotoGP国际赛道外景打卡',
        '独特的"胡椒沙"Tanjung Aan海滩与Seger海滩',
        '登Merese山丘观赏龙目岛排名第一的夕阳绝景',
        '海边享用新鲜海鲜午餐',
        '印度洋悬崖峭壁壮丽景色'
      ],
      ja: [
        'マンダリカMotoGP国際サーキット記念撮影',
        '胡椒のような粒砂タンジュン・アン＆セガービーチ',
        'ロンボク島No.1の絶景サンセットスポット「メレーセの丘」',
        'クタ海辺のレストランでシーフードランチ',
        'インド洋を見渡すダイナミックな断崖絶壁'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Eksplorasi Mandalika & Sunset Merese',
          en: 'Mandalika Exploration & Sunset Merese',
          zh: '曼达利卡探索与夕阳游览',
          ja: 'マンダリカ散策とサンセット'
        },
        activities: {
          id: [
            '08.30 - Penjemputan di Hotel / Bandara Lombok',
            '09.30 - Mengunjungi Sirkuit Mandalika & Patung Jokowi',
            '10.30 - Menuju Pantai Kuta Lombok & bersantai di pinggir pantai',
            '12.30 - Makan siang di Kuta Mandalika',
            '14.00 - Bermain air di Pantai Tanjung Aan yang bening',
            '16.30 - Mendaki Bukit Merese untuk momen sunset menakjubkan',
            '18.30 - Perjalanan kembali ke hotel'
          ],
          en: [
            '08.30 AM - Pickup from Hotel or Lombok Airport',
            '09.30 AM - Visit Mandalika Circuit viewpoint & statue',
            '10.30 AM - Arrive Kuta Lombok Beach for seaside walk',
            '12.30 PM - Lunch at Kuta Mandalika beachfront restaurant',
            '02.00 PM - Swim & relax at turquoise Tanjung Aan Beach',
            '04.30 PM - Hike Bukit Merese hill for unforgettable sunset',
            '06.30 PM - Evening drive back to hotel'
          ],
          zh: [
            '08:30 - 酒店或机场接送',
            '09:30 - 参访曼达利卡赛道与标志雕像',
            '10:30 - 抵达龙目岛Kuta海滩漫步',
            '12:30 - 曼达利卡海滩餐厅午餐',
            '14:00 - 在Tanjung Aan清澈海水中游泳与放松',
            '16:30 - 登上Merese山丘迎接浪漫夕阳',
            '18:30 - 返程送回酒店'
          ],
          ja: [
            '08:30 - ホテルまたは空港でお迎え',
            '09:30 - マンダリカサーキット＆記念像見学',
            '10:30 - クタ・ロンボクビーチ散策',
            '12:30 - クタ海辺レストランでランチ',
            '14:00 - タンジュン・アンビーチで海水浴',
            '16:30 - メレーセの丘へ登り感動の夕日鑑賞',
            '18:30 - ホテルへ戻り'
          ]
        }
      }
    ],
    included: {
      id: ['Transport AC Privat PP', 'Tiket Masuk Semua Objek Wisata', 'Parkir & Retribusi Pantai', 'Makan siang 1x di Kuta', 'Pemandu / Driver terampil'],
      en: ['Private AC vehicle', 'All Destination Entry Tickets', 'Parking & Beach Fees', '1x Lunch in Kuta', 'Professional driver/guide'],
      zh: ['私家空调专车往返', '所有景点门票', '停车费与场地费', '1次Kuta午餐', '专业司机兼导游'],
      ja: ['専用AC車', '全観光地入場料', '駐車場・施設使用料', 'クタでのランチ1回', '専属ドライバー/ガイド']
    },
    excluded: {
      id: ['Sewa perahu lokal di Tanjung Aan (opsional ke Batu Payung)', 'Pengeluaran pribadi'],
      en: ['Local boat rental at Tanjung Aan (optional)', 'Personal expenses'],
      zh: ['当地船只租赁（可选前往Batu Payung）', '个人费用'],
      ja: ['ローカルボート代（任意）', '個人支出']
    }
  },

  {
    id: 'benang-kelambu-benang-stokel-waterfalls',
    category: 'waterfall',
    location: 'Central Lombok (Aik Berik)',
    priceIdr: 450000,
    priceUsd: 30,
    rating: 4.8,
    reviewsCount: 156,
    featured: false,
    image: '/packages/benangkelambu.jpg', // Lush waterfall curtains
    gallery: [
      '/packages/tiukelep1.jpg'
    ],
    title: {
      id: 'Paket Wisata Air Terjun Benang Kelambu & Benang Stokel',
      en: 'Exotic Benang Kelambu & Benang Stokel Waterfall Eco Tour',
      zh: '清凉雨林：Benang Kelambu与Benang Stokel双瀑布一日游',
      ja: 'ブナン・ケランブ＆ブナン・ストケルの滝 エコツアー'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Rasakan kesejukan alami air terjun unik di kaki Gunung Rinjani. Air Terjun Benang Kelambu memancar bagai tirai hijau alami dari tebing rimbun, dipadukan dengan tirai kembar Benang Stokel.',
      en: 'Experience pure mountain freshness at the foot of Mount Rinjani! Benang Kelambu cascades like a green natural curtain through dense vines, paired with twin waterfalls of Benang Stokel.',
      zh: '感受林贾尼火山山脚下的纯净清凉！Benang Kelambu瀑布如同绿色自然流苏窗帘般从悬崖蔓藤喷涌而出，配合Benang Stokel双子瀑布。',
      ja: 'リンジャニ山麓のマイナスイオンあふれる滝へ！ブナン・ケランブ瀑布は緑のカーテンのように崖から流れ落ちる幻想的な絶景。'
    },
    highlights: {
      id: [
        'Melihat keajaiban Air Terjun Benang Kelambu beratap tirai tumbuhan',
        'Mandi di kolam alami bening Air Terjun Benang Stokel',
        'Trekking santai hutan asri diawasi pemandu lokal',
        'Melihat perkebunan kopi & kakao penduduk setempat',
        'Udaranya sangat sejuk khas pegunungan Rinjani'
      ],
      en: [
        'Marvel at curtain-like cascade of Benang Kelambu Waterfall',
        'Swim in natural plunge pools at Benang Stokel Waterfall',
        'Easy jungle eco-trek guided by local rainforest ranger',
        'See organic local coffee & cocoa plantations',
        'Crisp cool mountain air away from coastal heat'
      ],
      zh: [
        '打卡Benang Kelambu植物流苏瀑布奇观',
        '在Benang Stokel天然清澈水池中嬉水',
        '森林公园护林员带领下的轻度雨林徒步',
        '参观当地有机咖啡与可可种植园',
        '享用山林凉爽宜人的空气'
      ],
      ja: [
        '緑のカーテンのようなブナン・ケランブの滝',
        'ブナン・ストケルの天然プールで泳ぎリフレッシュ',
        '地元ガイドと巡るマイナスイオン満載のジャングルトレック',
        'オーガニックのコーヒー＆カカオ農園見学',
        '涼しく心地よい高原の風'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Eksplorasi Air Terjun Lombok Tengah',
          en: 'Central Lombok Waterfalls Expedition',
          zh: '中部瀑布探秘',
          ja: 'ロンボク中部 滝の探検'
        },
        activities: {
          id: [
            '08.30 - Penjemputan di Hotel menuju Aik Berik Lombok Tengah',
            '09.45 - Registrasi & mulai soft trekking ke Air Terjun Benang Stokel',
            '10.30 - Berfoto & mandi di Air Terjun Benang Stokel',
            '11.30 - Lanjut ke Air Terjun Benang Kelambu dengan pemandangan tiada tanding',
            '13.00 - Makan siang khas di saung pedesaan',
            '15.00 - Diantar kembali ke hotel'
          ],
          en: [
            '08.30 AM - Hotel pickup drive to Aik Berik, Central Lombok',
            '09.45 AM - Register & start pleasant jungle walk to Benang Stokel',
            '10.30 AM - Photos & swim at Benang Stokel plunge pool',
            '11.30 AM - Walk to magical Benang Kelambu curtain waterfall',
            '01.00 PM - Local lunch at countryside traditional gazebos',
            '03.00 PM - Afternoon drive back to hotel'
          ],
          zh: [
            '08:30 - 酒店接送前往Aik Berik',
            '09:45 - 登记后漫步至Benang Stokel瀑布',
            '10:30 - 在瀑布池中戏水拍照',
            '11:30 - 步行前往Benang Kelambu流苏瀑布奇观',
            '13:00 - 乡村凉亭享用午餐',
            '15:00 - 下午送回酒店'
          ],
          ja: [
            '08:30 - ホテルお迎え、アイク・ベリックへ',
            '09:45 - トレック開始、ブナン・ストケルの滝へ',
            '10:30 - 滝つぼで写真撮影とスイミング',
            '11:30 - 幻想的なブナン・ケランブの滝へ',
            '13:00 - のどかな東屋でランチ',
            '15:00 - ホテルへ戻り'
          ]
        }
      }
    ],
    included: {
      id: ['Transport Mobil AC Privat', 'Tiket Masuk Kawasan Air Terjun', 'Pemandu Lokal Trekking', 'Makan Siang 1x', 'Air Mineral'],
      en: ['Private AC Car', 'Waterfall Park Entrance Ticket', 'Local Trekking Ranger Guide', '1x Lunch', 'Mineral Water'],
      zh: ['私家空调车', '瀑布公园门票', '本地徒步护林员导游', '1次午餐', '饮用水'],
      ja: ['専用AC車', '滝公園入場料', '現地ナチュラリストガイド', 'ランチ1回', 'ミネラルウォーター']
    },
    excluded: {
      id: ['Ojek lokal ke lokasi (opsional)', 'Tip guide'],
      en: ['Local motorbike shuttle if requested (optional)', 'Tips for guide'],
      zh: ['当地摩托短途接驳（可选）', '导游小费'],
      ja: ['ローカルバイクタクシー（任意）', 'ガイドチップ']
    }
  },

  {
    id: 'tiu-keleb-sendang-gile-waterfall',
    category: 'waterfall',
    location: 'North Lombok (Senaru)',
    priceIdr: 500000,
    priceUsd: 33,
    rating: 5.0,
    reviewsCount: 210,
    featured: true,
    image: '/packages/tiukelep.jpg', // Huge jungle waterfall stream
    gallery: [
      '/packages/tiu2.jpg'
    ],
    title: {
      id: 'Paket Wisata Air Terjun Tiu Keleb & Sendang Gile Senaru',
      en: 'Majestic Tiu Keleb & Sendang Gile Waterfall Journey (Senaru)',
      zh: '龙目岛第一瀑布：Tiu Keleb与Sendang Gile雨林探险',
      ja: '絶景 ティウ・ケレブ＆センダン・ギレの滝（セナル）'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Air terjun paling megah dan terkenal di Lombok! Tersembunyi di tengah belantara hutan tropis Senaru Lombok Utara. Gemuruh air deras Tiu Keleb menciptakan embun pelangi yang menakjubkan.',
      en: 'Lombok most grand & celebrated waterfalls! Hidden deep in North Lombok rainforest of Senaru. The roaring rush of Tiu Keleb creates mesmerizing rainbow mist and giant natural pools.',
      zh: '龙目岛最壮观与最负盛名的双级瀑布！隐匿于龙目岛北部Senaru热带雨林腹地。Tiu Keleb巨瀑倾泻而下形成如梦似幻的彩虹雾气与巨型池潭。',
      ja: 'ロンボク島最高峰の壮大なスケールを誇る二大滝！北部セナルの熱帯雨林の奥深くにあり、ティウ・ケレブの瀑布からは虹色の水蒸気が広がります。'
    },
    highlights: {
      id: [
        'Mengunjungi Air Terjun Sendang Gile berlantai dua yang megah',
        'Menyusuri alur sungai bening ke Air Terjun Tiu Keleb',
        'Merasakan sensasi mandi air dingin menyegarkan langsung dari Rinjani',
        'Pemandangan lembah hijau pegunungan Senaru',
        'Makan siang di restoran tebing panorama Rinjani'
      ],
      en: [
        'Visit two-tiered majestic Sendang Gile Waterfall',
        'Jungle stream walk crossing clear rivers to Tiu Keleb',
        'Dip into invigorating ice-clear waters directly from Mount Rinjani',
        'Stunning mountain canyon vistas of Senaru',
        'Panorama cliffside lunch overlooking Rinjani mountain range'
      ],
      zh: [
        '参访双层宏伟的Sendang Gile瀑布',
        '踏着清澈小溪徒步深林前往Tiu Keleb巨瀑',
        '浸泡在直接源自林贾尼火山的冰凉清澈泉水中',
        '俯瞰Senaru山谷与陡峭峡谷风光',
        '在悬崖餐厅享用全景午餐'
      ],
      ja: [
        '二段構造のスケール大きなセンダン・ギレの滝',
        '清流を歩きジャングル奥深くのティウ・ケレブへ',
        'リンジャニ山直結の清涼な天然水浴',
        'セナルの美しい深緑の渓谷美',
        '絶景マウンテンビューレストランでのランチ'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Ekspedisi Air Terjun Senaru',
          en: 'Senaru Waterfall Expedition',
          zh: 'Senaru瀑布探险',
          ja: 'セナル滝の探検'
        },
        activities: {
          id: [
            '08.00 - Penjemputan di Hotel kawasan Senggigi/Mataram/Kuta',
            '10.15 - Tiba di Senaru, bertemu guide lokal & mulai turun tangga ke Sendang Gile',
            '11.00 - Lanjut menyusuri jalur sungai tropis menuju Air Terjun Tiu Keleb',
            '12.00 - Berenang di kolam bawah Tiu Keleb & berfoto pelangi',
            '13.30 - Makan siang di restoran view tebing Senaru',
            '15.30 - Perjalanan santai kembali ke hotel'
          ],
          en: [
            '08.00 AM - Hotel pickup (Senggigi/Mataram/Kuta)',
            '10.15 AM - Arrive Senaru, meet local guide & walk down to Sendang Gile',
            '11.00 AM - Stream trek through jungle trail to Tiu Keleb',
            '12.00 PM - Swim in Tiu Keleb plunge pool & photo session',
            '01.30 PM - Lunch at Senaru cliffside panoramic restaurant',
            '03.30 PM - Scenic drive back to hotel'
          ],
          zh: [
            '08:00 - 从酒店接送前往Senaru',
            '10:15 - 抵达Senaru，在本地导游带领下步行至Sendang Gile瀑布',
            '11:00 - 涉溪渡过热带小溪前往Tiu Keleb巨瀑',
            '12:00 - 在Tiu Keleb巨瀑潭中游泳与拍摄彩虹雾',
            '13:30 - 在悬崖景致餐厅享用午餐',
            '15:30 - 返程送回酒店'
          ],
          ja: [
            '08:00 - ホテルでお迎え、セナルへドライブ',
            '10:15 - セナル到着、ローカルガイドとセンダン・ギレの滝へ',
            '11:00 - 渡渉しながらジャングル奥のティウ・ケレブの滝へ',
            '12:00 - 滝つぼで遊泳＆写真撮影',
            '13:30 - マウンテンビューのレストランでランチ',
            '15:30 - ホテルへ帰路'
          ]
        }
      }
    ],
    included: {
      id: ['Transport AC Privat PP', 'Tiket Masuk Kawasan Senaru', 'Pemandu Lokal Berpengalaman', 'Makan Siang 1x', 'Air Mineral'],
      en: ['Private AC vehicle', 'Senaru Park Entry Fees', 'Experienced Local Guide', '1x Cliffside Lunch', 'Mineral water'],
      zh: ['私家空调专车', 'Senaru门票', '经验丰富的本地导游', '1次悬崖景致午餐', '矿泉水'],
      ja: ['専用AC車', 'セナル入場料', 'ベテラン現地ガイド', '絶景ランチ1回', 'ミネラルウォーター']
    },
    excluded: {
      id: ['Handuk & ganti pakaian pribadi', 'Tip driver & guide'],
      en: ['Personal towel & change of clothes', 'Tip for driver & guide'],
      zh: ['个人毛巾与换洗衣物', '司机导游小费'],
      ja: ['タオル・着替え', 'チップ']
    }
  },

  {
    id: 'lombok-city-tour',
    category: 'city',
    location: 'Mataram & Ampenan',
    priceIdr: 350000,
    priceUsd: 24,
    rating: 4.7,
    reviewsCount: 110,
    featured: false,
    image: '/packages/islamic.jpg', // Mataram Islamic Center / Souvenirs
    gallery: [
      '/packages/Tembolak.jpg'
    ],
    title: {
      id: 'Paket Lombok City Tour & Belanja Mutiara Souvenir',
      en: 'Mataram City Culture & Lombok Pearl Souvenir Tour',
      zh: '马塔兰城市观光与珍珠古迹半日/一日游',
      ja: 'マタラム シティツアー＆ロンボク真珠お買い物'
    },
    duration: {
      id: '1 Hari (Half/Full Day)',
      en: '1 Day (Half/Full Day)',
      zh: '1天 (半天/全天)',
      ja: '1日（半日/終日）'
    },
    description: {
      id: 'Eksplorasi warisan sejarah & belanja oleh-oleh khas Lombok! Mengunjungi Kota Tua Ampenan, Taman Air Mayura, Masjid Hubbul Wathan Islamic Center Mataram, dan pusat kerajinan Mutiara Air Laut Lombok.',
      en: 'Explore Lombok historical heritage & famous souvenir markets! Visit Ampenan Heritage Old Town, Mayura Water Palace, Hubbul Wathan Islamic Center Grand Mosque & authentic Lombok South Sea Pearl stores.',
      zh: '打卡龙目岛历史遗产与知名特产购物中心！游览Ampenan老街、Mayura水上宫殿、Hubbul Wathan伊斯兰中心清真寺与知名龙目南海珍珠专卖店。',
      ja: 'ロンボクの歴史遺産とショッピングを満喫！アンペナンの旧市街、マユラ水上宮殿、イスラミックセンター大清真寺、ロンボク真珠専門店へご案内。'
    },
    highlights: {
      id: [
        'Kemegahan Masjid Hubbul Wathan Islamic Center Mataram',
        'Bangunan bersejarah Kota Tua Ampenan tepi laut',
        'Taman Air Mayura peninggalan Kerajaan Bali Karangasem',
        'Pusat Kerajinan Mutiara Air Laut & Mutiara Air Tawar Lombok',
        'Pusat Oleh-Oleh Khas (Kaos Lombok, Telur Asin, Makanan Khas)'
      ],
      en: [
        'Grand architectural marvel of Hubbul Wathan Islamic Center Mosque',
        'Coastal historic architecture of Ampenan Old Town',
        'Mayura Water Palace heritage of Karangasem Kingdom',
        'Authentic Lombok South Sea & Freshwater Pearl showrooms',
        'Lombok Souvenir Centers (Apparel, Local snacks, Honey, Weaving)'
      ],
      zh: [
        'Hubbul Wathan伊斯兰中心宏伟清真寺建筑',
        'Ampenan海滨老街历史建筑遗迹',
        'Mayura水上宫殿巴厘王国遗址',
        '龙目岛南海珍珠与淡水珍珠展示中心',
        '龙目岛土特产与纪念品中心（T恤、野生蜂蜜、小吃）'
      ],
      ja: [
        '壮大なマタラム・イスラミックセンター大清真寺',
        'アンペナン旧市街のノスタルジックな街並み',
        'マユラ水上宮殿遺構',
        'ロンボク産 南海真珠＆淡水真珠専門店',
        'お土産センター（T恤、蜂蜜、お菓子）'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Jelajah Kota Mataram & Souvenir',
          en: 'Mataram City & Shopping Tour',
          zh: '马塔兰市观光与购物',
          ja: 'マタラム市内観光＆ショッピング'
        },
        activities: {
          id: [
            '09.00 - Penjemputan di Hotel Senggigi/Mataram',
            '09.30 - Mengunjungi Kota Tua Ampenan & Pelabuhan Tua',
            '10.30 - Wisata arsitektur Mayura Water Palace',
            '11.30 - Mengunjungi Islamic Center Hubbul Wathan Mataram',
            '12.30 - Makan siang khas Sate Bulayak / Nasi Puyung',
            '14.00 - Berbelanja Perhiasan Mutiara Lombok bergaransi sertifikat',
            '15.30 - Singgah di toko oleh-oleh khas & kembali ke hotel'
          ],
          en: [
            '09.00 AM - Hotel pickup in Senggigi or Mataram',
            '09.30 AM - Stroll through historic Ampenan Old Town & Old Port',
            '10.30 AM - Visit Mayura Water Palace garden',
            '11.30 AM - Tour Islamic Center Hubbul Wathan Grand Mosque',
            '12.30 PM - Lunch with local Sate Bulayak or Nasi Puyung',
            '02.00 PM - Shop certified Lombok Sea Pearls at local artisan gallery',
            '03.30 PM - Visit Lombok souvenir snack market & hotel return'
          ],
          zh: [
            '09:00 - 酒店接送',
            '09:30 - 漫步Ampenan老街与旧港口',
            '10:30 - 游览Mayura水上宫殿花园',
            '11:30 - 参访Hubbul Wathan大清真寺',
            '12:30 - 享用当地特色Sate Bulayak沙爹午餐',
            '14:00 - 选购带有官方证书的优质龙目珍珠珠宝',
            '15:30 - 特产中心采购纪念品后送回酒店'
          ],
          ja: [
            '09:00 - ホテルでお迎え',
            '09:30 - アンペナン旧市街と港の散策',
            '10:30 - マユラ水上宮殿見学',
            '11:30 - イスラミックセンター大清真寺見学',
            '12:30 - 名物サテ・ブレヤック等のランチ',
            '14:00 - 鑑定書付きロンボク真珠専門店でお買い物',
            '15:30 - お土産店寄り道後、ホテル送迎'
          ]
        }
      }
    ],
    included: {
      id: ['Transport Mobil AC Privat', 'Tiket Masuk & Parkir', 'Pemandu / Driver lokal', 'Makan siang 1x', 'Air Mineral'],
      en: ['Private AC Car', 'Entry Fees & Parking', 'Local driver/guide', '1x Local Lunch', 'Mineral water'],
      zh: ['私家空调专车', '景点门票与停车费', '本地司机/导游', '1次当地午餐', '矿泉水'],
      ja: ['専用AC車', '入場料＆駐車場代', '現地ドライバー/ガイド', 'ランチ1回', 'ミネラルウォーター']
    },
    excluded: {
      id: ['Belanja barang souvenir pribadi', 'Tip driver'],
      en: ['Personal shopping purchases', 'Driver tip'],
      zh: ['个人购物花费', '司机小费'],
      ja: ['個人買い物費用', 'チップ']
    }
  },

  {
    id: 'lombok-fishing-trip',
    category: 'fishing',
    location: 'South & East Lombok Sea',
    priceIdr: 1200000,
    priceUsd: 80,
    rating: 4.9,
    reviewsCount: 88,
    featured: false,
    image: '/packages/mancing.jpg', // Deep sea boat fishing
    gallery: [
      '/packages/mancing.jpg'
    ],
    title: {
      id: 'Paket Private Fishing Trip Lombok (Deep Sea & Coral Fishing)',
      en: 'Lombok Deep Sea & Reef Fishing Charter Boat Trip',
      zh: '龙目岛包船外海与海钓烧烤之旅',
      ja: 'ロンボク島 チャーターボート フィッシング＆海鮮BBQ'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Pengalaman memancing mania di lautan kaya nutrisi Lombok Selatan atau Timur! Dilengkapi joran professional, umpan segar, kapten lokal berpengalaman, serta pesta BBQ ikan segar hasil tangkapan di pulau!',
      en: 'An exciting deep sea fishing charter trip in fish-rich ocean waters of Lombok! Equipped with quality rods, fresh bait, expert local captain & an amazing beach BBQ feast of your fresh catch!',
      zh: '在龙目岛资源丰富的南部或东部海域体验出海海钓！配备专业钓竿、新鲜鱼饵、经验丰富的船长，并在岛上享用现钓鲜鱼烧烤大餐！',
      ja: '魚種豊富なロンボク海域での本格ボートフィッシング！本格タックル、仕掛け、ベテラン船長同行で、釣った魚は島で豪快な海鮮BBQに！'
    },
    highlights: {
      id: [
        'Perahu Nelayan Privat lengkap GPS & Sonar Pencari Ikan',
        'Teknik Trolling (Tuna, Mahi-Mahi, Barracuda) & Bottom Fishing (Kerapu, Kakap)',
        'Peralatan pancing & umpan lengkap disiapkan',
        'Kapten & ABK berpengalaman menentukan spot terbaik',
        'BBQ Ikan Segar hasil pancingan di pinggir pantai pasir putih'
      ],
      en: [
        'Private Fishing Boat Charter equipped with GPS fish finder sonar',
        'Trolling (Tuna, Mahi-Mahi, Barracuda) & Bottom Reef Fishing (Snapper, Grouper)',
        'Full set fishing rods, reels & fresh bait provided',
        'Expert local captain who knows all secret fishing hotspots',
        'Fresh Catch Seafood BBQ grilled right on a white sandy beach'
      ],
      zh: [
        '私人钓鱼船配置GPS与探鱼声呐',
        '拖钓（金枪鱼、鬼头刀、梭鱼）与底钓（石斑、石鲷）',
        '提供全套钓竿、轮卷与新鲜鱼饵',
        '本地老船长带领前往隐藏最佳钓点',
        '在沙滩上将现钓鲜鱼现场炭火烧烤享用'
      ],
      ja: [
        'GPS・魚群探知機付き専用フィッシングボート',
        'トローリング（マグロ、シイラ）＆胴突きフカセ（ハタ、フエダイ）',
        '本格ロッド＆リール、エサ一式準備済み',
        '極上ポイントを知り尽くしたベテランキャプテン',
        '無人島の砂浜で釣った魚の炭火BBQランチ'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Petualangan Memancing Lombok',
          en: 'Lombok Sea Fishing Adventure',
          zh: '出海海钓之旅',
          ja: 'ボートフィッシング'
        },
        activities: {
          id: [
            '06.00 - Penjemputan di Hotel menuju dermaga keberangkatan',
            '07.00 - Naik perahu pancing privat & mulai trolling ke samudera lepas',
            '10.00 - Pindah ke spot Karang Dalam untuk Bottom Fishing ikan kerapu/kakap',
            '13.00 - Mendarat di pulau kecil terpencil untuk panggangan BBQ Ikan',
            '15.00 - Sesi memancing sore & perjalanan kembali ke dermaga',
            '17.00 - Diantar kembali ke hotel membawa hasil pancingan'
          ],
          en: [
            '06.00 AM - Hotel pickup drive to departure pier',
            '07.00 AM - Board private fishing boat & begin offshore trolling',
            '10.00 AM - Switch to deep reef spot for Snapper & Grouper bottom fishing',
            '01.00 PM - Land on a secluded islet for Fresh Catch BBQ Lunch',
            '03.00 PM - Afternoon casual fishing & cruise back to pier',
            '05.00 PM - Hotel drop-off with your packed catch'
          ],
          zh: [
            '06:00 - 酒店接送前往码头',
            '07:00 - 登船开启外海拖钓之旅',
            '10:00 - 前往深海珊瑚礁区体验底钓石斑与红鲷',
            '13:00 - 登上无人群岛体验鲜鱼海鲜烧烤午餐',
            '15:00 - 下午休闲钓鱼并返回码头',
            '17:00 - 送回酒店，可打包渔获'
          ],
          ja: [
            '06:00 - ホテルお迎え、出航港へドライブ',
            '07:00 - チャーター船で出航、トローリング開始',
            '10:00 - 深場サンゴ礁ポイントでハタ・鯛釣り',
            '13:00 - 無人島に上陸し釣果の炭火BBQランチ',
            '15:00 - 午後のフィッシング後、帰港',
            '17:00 - 釣った魚と共にホテルへお送り'
          ]
        }
      }
    ],
    included: {
      id: ['Transport AC PP ke Dermaga', 'Perahu Pancing Privat Charter', 'Peralatan Pancing lengkap & Umpan', 'Kapten & ABK Pancing', 'Makan Siang BBQ Ikan & Es Minuman', 'Life jacket & Coolbox'],
      en: ['AC Transport PP to Pier', 'Private Fishing Charter Boat', 'Full Fishing Tackle & Bait', 'Experienced Captain & Crew', 'Catch BBQ Lunch & Cold Drinks', 'Life vest & Ice Coolbox'],
      zh: ['往返专车接送', '包船钓鱼船', '全套钓具与鱼饵', '船长与协助水手', '烤鱼午餐与冰镇饮料', '救生衣与冰盒'],
      ja: ['港までの往復送迎車', '専用フィッシングボート代', '釣り竿・仕掛け・エサ一式', 'キャプテン＆クルー', '魚BBQランチ＆冷たい飲み物', 'クーラーボックス']
    },
    excluded: {
      id: ['Pengeluaran pribadi', 'Tip kapten & crew boat'],
      en: ['Personal expenses', 'Tips for boat captain & crew'],
      zh: ['个人花费', '船长水手小费'],
      ja: ['個人支出', 'キャプテン・クルーのチップ']
    }
  },

  {
    id: 'surf-lesson-kuta-gerupuk',
    category: 'surf',
    location: 'Gerupuk Bay / Selong Belanak, Kuta Lombok',
    priceIdr: 450000,
    priceUsd: 30,
    rating: 4.9,
    reviewsCount: 178,
    featured: true,
    image: '/packages/surfing.jpg', // Wave surfing HD
    gallery: [
      '/packages/gerupuksurf.jpg',
      '/packages/gerupuksurf.jpg'
    ],
    title: {
      id: 'Paket Kursus Surfing (Surf Lesson) Pemula & Intermediate di Lombok',
      en: 'Lombok Surfing Lessons for Beginners & Intermediates (Gerupuk / Selong Belanak)',
      zh: '龙目岛初级与中级冲浪教学课程 (Gerupuk / Selong Belanak)',
      ja: 'ロンボク島 サーフレッスン（初心者＆中級者向け）'
    },
    duration: {
      id: '1 Hari (2.5 Jam Sesi)',
      en: '1 Day (2.5 Hour Session)',
      zh: '1天 (2.5小时课程)',
      ja: '1日（2.5時間セッション）'
    },
    description: {
      id: 'Pelajari seni menaklukkan ombak tropis Lombok bersama instruktur surfing berpengalaman! Termasuk sewa papan surfboard, perahu penyeberangan ke spot ombak Gerupuk, foto GoPro, serta baju surfing.',
      en: 'Learn to ride Lombok tropical waves with certified local surf instructors! Includes surfboard hire, boat shuttle to Gerupuk reef break, rashguard, safety briefing, and GoPro photos.',
      zh: '在专业本地冲浪教练指导下踏浪而行！包含冲浪板租赁、接驳船前往Gerupuk浪点、冲浪服、安全讲解及GoPro摄影。',
      ja: 'ベテラン現地インストラクターと一緒にロンボクの極上波に乗ろう！サーフボード一式、ボート送迎、ラッシュガード、GoPro水中写真付き。'
    },
    highlights: {
      id: [
        'Instruktur Surfing Privat / Semi-Privat Berlisensi',
        'Sewa Surfboard Lengkap (Softboard / Epoxy)',
        'Perahu Penyeberangan (Boat Charter) ke Spot Ombak Gerupuk Bay',
        'Baju Surfing (Rashguard), Surf Wax & Leash Lengkap',
        'Dokumentasi Foto & Video Aksi Ombak (GoPro / Kamera)'
      ],
      en: [
        'Licensed Private / Semi-Private Certified Surf Instructor',
        'Full Surfboard Rental (Softboard for Beginners or Epoxy)',
        'Boat Shuttle Charter to Gerupuk Bay Reef Breaks',
        'UV Rashguard Suit, Surf Wax & Ankle Leash included',
        'Surf Action Photos & Video Clips (GoPro)'
      ],
      zh: [
        '一对一或小班专业认证教练',
        '全套冲浪板租赁 (初学者软板或硬板)',
        '包船接送至Gerupuk Bay海浪点',
        '提供防晒冲浪服、脚绳与蜡块',
        '免费GoPro冲浪精彩打卡拍照'
      ],
      ja: [
        'プライベート認定サーフインストラクター',
        'サーフボードレンタル一式（初心者用ソフト/エポキシ）',
        'ゲルプック湾ボート送迎',
        'ラッシュガード・リーシュコード・ワックス完備',
        'GoProライディング写真・動画データプレゼント'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Sesi Belajar Surfing & Praktek Ombak',
          en: 'Surf Theory & Reef Wave Session',
          zh: '冲浪理论与实操',
          ja: 'サーフ理論と実践ライディング'
        },
        activities: {
          id: [
            '08.00 - Penjemputan di Hotel Kuta Lombok / Meeting Point Gerupuk',
            '08.30 - Teori dasar surfing di darat (Pop-up, Balance, & Wave Safety)',
            '09.00 - Naik perahu lokal ke spot ombak Inside/Outside Gerupuk',
            '09.15 - Praktek meluncur & berdiri di atas ombak bersama instruktur',
            '11.00 - Sesi foto aksi & kembali ke pantai',
            '11.30 - Istirahat, kelapa muda segar, & diantar kembali'
          ],
          en: [
            '08.00 AM - Hotel pickup in Kuta Lombok or meet at Gerupuk surf camp',
            '08.30 AM - Beach land theory (pop-up technique, stance & wave rules)',
            '09.00 AM - Boat transfer to Inside or Outside Gerupuk reef break',
            '09.15 AM - Water practice: paddling, catching waves & riding standing up',
            '11.00 AM - Action camera photo shoot & boat back to shore',
            '11.30 AM - Fresh young coconut, debriefing & drop-off'
          ],
          zh: [
            '08:00 - 从Kuta Lombok酒店接送至冲浪点',
            '08:30 - 陆地冲浪理论（站姿、平衡与水上安全）',
            '09:00 - 乘船前往Gerupuk浪点',
            '09:15 - 在教练一对一辅助下起立划水划浪',
            '11:00 - 冲浪抓拍与返回岸边',
            '11:30 - 享用新鲜椰汁与送回酒店'
          ],
          ja: [
            '08:00 - クタ・ロンボクのホテルお迎え',
            '08:30 - ビーチでのテイクオフ陸上トレーニング',
            '09:00 - ボートでゲルプック湾サーフポイントへ',
            '09:15 - 海上での実践！パドリング＆テイクオフ',
            '11:00 - 撮影＆港へ戻る',
            '11:30 - 新鮮なヤシの実ジュースでリフレッシュ'
          ]
        }
      }
    ],
    included: {
      id: ['Sewa Surfboard', 'Instruktur Surfing Profesional', 'Perahu Bolak-balik ke Spot Ombak', 'Baju Rashguard', 'Foto/Video GoPro', 'Air Mineral & Kelapa Muda'],
      en: ['Surfboard Rental', 'Professional Surf Coach', 'Roundtrip Boat Shuttle to Reef', 'Rashguard Wet Shirt', 'GoPro Photos/Videos', 'Mineral Water & Fresh Coconut'],
      zh: ['冲浪板租赁', '专业冲浪教练', '往返接驳船', '防晒冲浪服', 'GoPro照片视频', '饮用水与椰子'],
      ja: ['サーフボード代', 'プロコーチ', 'ポイント往復ボート', 'ラッシュガード', 'GoPro撮影', 'ミネラルウォーター＆ココナッツ']
    },
    excluded: {
      id: ['Pengeluaran pribadi', 'Tip instruktur & boatman'],
      en: ['Personal expenses', 'Tips for surf coach & boat captain'],
      zh: ['个人花费', '教练与船夫小费'],
      ja: ['個人支出', 'コーチ・船夫チップ']
    }
  },

  {
    id: 'surfboard-rental-lombok',
    category: 'surf',
    location: 'Kuta Lombok / Gerupuk / Selong Belanak',
    priceIdr: 200000,
    priceUsd: 14,
    rating: 4.9,
    reviewsCount: 142,
    featured: true,
    image: '/packages/sewasurfboard.jpg', // Surfboards lined up on beach
    gallery: [
      'https://images.unsplash.com/photo-1455729552865-3658a5d3e092?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop'
    ],
    title: {
      id: 'Layanan Penyewaan Surfboard Harian (Softboard, Longboard, Shortboard & Epoxy)',
      en: 'Daily Surfboard Rental Service Lombok (Softboard, Longboard, Shortboard & Epoxy)',
      zh: '龙目岛冲浪板日租服务 (软板、长板、短板与Epoxy环氧树脂板)',
      ja: 'ロンボク島 デイリーサーフボードレンタル（ソフト・ロング・ショート・エポキシ）'
    },
    duration: {
      id: '1 Hari (Full Day 24 Jam)',
      en: '1 Day (Full Day 24 Hours)',
      zh: '1天 (全天24小时)',
      ja: '1日（24時間）'
    },
    description: {
      id: 'Sewa papan surfboard berkualitas untuk menjelajahi spot-spot ombak kelas dunia di Lombok. Pilihan lengkap mulai dari Softboard pemula 8"-9", Longboard classic, Funboard, hingga Shortboard Epoxy performance.',
      en: 'Rent high-quality surfboards to explore Lombok world-class waves independently. Complete selection from beginner 8"-9" Softboards, classic Longboards, Funboards, to performance Shortboards.',
      zh: '租赁高品质冲浪板，自由探索龙目岛世界级浪点。提供初学者8-9英尺软板、复古长板、练习板及高性能短板。',
      ja: 'ロンボクの極上スポットを自由に巡る高品質サーフボードレンタル。初心者用8〜9ftソフトボードからロング、ファン、ショートまで豊富に用意。'
    },
    highlights: {
      id: [
        'Koleksi Papan Lengkap: Softboard, Longboard, Shortboard, Epoxy & Fiberglass',
        'Termasuk Tali Leash Kaki, Surf Wax Premium, & Fin Set Lengkap',
        'Layanan Antar-Jemput Papan Gratis ke Hotel Kuta / Pantai Gerupuk',
        'Konsultasi Gratis Spot Ombak Harian & Kondisi Pasang Surut (Tide Chart)',
        'Diskon Khusus untuk Sewa Lebih dari 3 Hari'
      ],
      en: [
        'Full Board Collection: Softboards, Longboards, Shortboards, Epoxy & Fiberglass',
        'Includes Ankle Leash, Premium Surf Wax & Fin Set',
        'Free Board Delivery & Collection in Kuta / Gerupuk Area',
        'Free Daily Wave Condition & Tide Chart Advice',
        'Special Discounts for Rentals over 3 Days'
      ],
      zh: [
        '板型全齐：软板、长板、短板、Epoxy环氧树脂板',
        '免费提供安全脚绳、高级冲浪蜡与尾鳍套件',
        'Kuta/Gerupuk区域免费免费送板上门',
        '免费每日浪况与潮汐咨询',
        '租期3天以上享专属优惠'
      ],
      ja: [
        '豊富ラインナップ：ソフト、ロング、ショート、エポキシ、ファイバーグラス',
        'リーシュコード、高級ワックス、フィンセット込み',
        'クタ・ゲルプックエリア無料配達＆回収サービス',
        '毎日のタイドグラフ＆ポイントコンディション情報',
        '3日以上のレンタルで割引適用'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Proses Penyewaan & Pengantaran Papan',
          en: 'Board Pick-up & Wave Session',
          zh: '选板与送板',
          ja: '受け取り＆サーフセッション'
        },
        activities: {
          id: [
            '07.00 - Papan diantar langsung ke hotel / tempat tinggal di Kuta Lombok',
            '07.30 - Pemeriksaan kondisi papan & penyesuaian tali leash & fin',
            '08.00 - Papan siap digunakan seharian di pantai mana saja',
            '18.00 - Pengembalian papan atau penjemputan oleh tim kami'
          ],
          en: [
            '07.00 AM - Board delivered directly to your Kuta hotel or beach spot',
            '07.30 AM - Board check, leash fitting & fin configuration',
            '08.00 AM - Enjoy riding waves all day at any Lombok surf spot',
            '06.00 PM - Board pickup or extension setup'
          ],
          zh: [
            '07:00 - 冲浪板直接送到您位于Kuta的酒店或海滩',
            '07:30 - 板况检查、调整脚绳与尾鳍',
            '08:00 - 开启全天自由冲浪',
            '18:00 - 团队上门收板'
          ],
          ja: [
            '07:00 - クタのホテルまたはビーチへボードを配送',
            '07:30 - コンディション確認、リーシュ＆フィン調整',
            '08:00 - 1日中お好きなポイントでサーフィン',
            '18:00 - スタッフがボードを回収'
          ]
        }
      }
    ],
    included: {
      id: ['Sewa Surfboard 24 Jam', 'Leash Kaki', 'Surf Wax', 'Layanan Antar-Jemput Papan (Kuta/Gerupuk)', 'Zinc Sunscreen (Opsional)'],
      en: ['24-Hour Surfboard Rental', 'Ankle Leash', 'Surf Wax', 'Free Board Delivery (Kuta/Gerupuk)', 'Zinc Sunscreen (Optional)'],
      zh: ['24小时冲浪板租赁', '安全脚绳', '冲浪防滑蜡', 'Kuta/Gerupuk送板上门', '物理防晒锌膏'],
      ja: ['24時間ボードレンタル', 'リーシュコード', 'ワックス', '無料デリバリー', '日焼け止めジンク']
    },
    excluded: {
      id: ['Biaya perahu penyeberangan spot', 'Kerusakan papan akibat kelalaian'],
      en: ['Local surf boat shuttle fees', 'Board damage due to negligence'],
      zh: ['接驳船费', '人为意外损坏赔偿'],
      ja: ['ボート代', '破損時の修理費']
    }
  },

  {
    id: 'surf-trip-desert-point-ekas',
    category: 'surf',
    location: 'Desert Point (Bangko-Bangko) & Ekas Bay',
    priceIdr: 950000,
    priceUsd: 64,
    rating: 5.0,
    reviewsCount: 95,
    featured: false,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop', // Barrel wave
    gallery: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop'
    ],
    title: {
      id: 'Paket Guided Surf Trip Advanced (Desert Point Bangko-Bangko & Ekas Bay)',
      en: 'Advanced Guided Surf Trip Expedition (Desert Point & Ekas Bay)',
      zh: '进阶高级冲浪包车导览行程 (Desert Point & Ekas Bay)',
      ja: '上級者向けガイド付きサーフトリップ（沙漠ポイント＆エカス湾）'
    },
    duration: {
      id: '1 Hari (Full Day)',
      en: '1 Day (Full Day)',
      zh: '1天全天',
      ja: '1日（終日）'
    },
    description: {
      id: 'Trip khusus surfer tingkat lanjut! Berburu ombak barrel legendaris di Desert Point Bangko-Bangko atau ombak panjang di Ekas Outside/Inside ditemani surf guide lokal yang paham karakter tides.',
      en: 'Special guided trip for experienced surfers! Chase legendary left-hand barrels at Desert Point or powerful long waves at Ekas Bay with a local surf guide who knows tidal secrets.',
      zh: '专为中高级冲浪者打造！在懂得潮汐秘诀的本地导游带领下，追逐Desert Point传奇左向管浪或Ekas湾的长浪。',
      ja: '上級サーファーのための専門ガイド付きトリップ！潮汐熟知の現地ガイドと共に Desert Pointの伝説的バレルやエカス湾のロング波をチェイス。'
    },
    highlights: {
      id: [
        'Eksplorasi Spot Ombak Kelas Dunia: Desert Point & Ekas Bay',
        'Mobil Privat AC / 4x4 Khusus Rute Terjal',
        'Pemandu Surf Guide Lokal Berpengalaman',
        'Perahu Boat Charter Khusus di Ekas Bay',
        'Cooler Box Es & Makan Siang Barbeque'
      ],
      en: [
        'Explore World-Class Surf Breaks: Desert Point & Ekas Bay',
        'Private AC / 4x4 Vehicle Suited for Rugged Roads',
        'Experienced Local Surf Guide & Spot Knowledge',
        'Private Boat Charter at Ekas Reef',
        'Ice Cooler Box & BBQ Lunch included'
      ],
      zh: [
        '打卡世界级冲浪巨浪点：Desert Point与Ekas湾',
        '4x4越野专车穿梭崎岖路段',
        '经验丰富的本地冲浪向导',
        'Ekas Bay包船接送',
        '冰盒冰镇饮料与烤肉午餐'
      ],
      ja: [
        '世界最高峰サーフポイント：Desert Point＆エカス湾',
        '悪路対応 4x4/専用AC車',
        'ローカルサーフガイド同行',
        'エカス湾ボートチャーター',
        'クーラーボックス＆BBQランチ'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Perburuan Ombak Barrel Desert Point / Ekas',
          en: 'Wave Chase & Reef Session',
          zh: '追浪与冲浪 session',
          ja: 'ウェイブチェイス＆サーフセッション'
        },
        activities: {
          id: [
            '06.00 - Penjemputan subuh di hotel menuju Sekotong / Ekas',
            '08.00 - Tiba di lokasi spot & membaca arah angin & pasang surut bersama guide',
            '08.30 - Sesi surfing ombak pertama (3-4 jam)',
            '12.30 - Makan siang BBQ & istirahat',
            '14.30 - Sesi surfing kedua sesuai kondisi pasang',
            '17.00 - Perjalanan kembali ke hotel'
          ],
          en: [
            '06.00 AM - Early morning pickup drive south to Sekotong or Ekas',
            '08.00 AM - Arrival, surf guide briefing on tides & wave section entry/exit',
            '08.30 AM - Morning surf session (3-4 hours)',
            '12.30 PM - BBQ Lunch & shadow break',
            '02.30 PM - Afternoon second surf session',
            '05.00 PM - Return drive to hotel'
          ],
          zh: [
            '06:00 - 清晨专车出发前往Sekotong或Ekas',
            '08:00 - 抵达浪点，向导讲解潮汐风向与进出浪区通道',
            '08:30 - 上午冲浪session (3-4小时)',
            '12:30 - BBQ烧烤午餐与休息',
            '14:30 - 下午第二次冲浪',
            '17:00 - 返程送回酒店'
          ],
          ja: [
            '06:00 - 早朝お迎え、セコトン/エカスへ出発',
            '08:00 - ポイント到着、タイド＆カレントのアドバイス',
            '08:30 - 午前サーフセッション（3〜4時間）',
            '12:30 - BBQランチ＆休憩',
            '14:30 - 午後セッション',
            '17:00 - ホテルへ帰航'
          ]
        }
      }
    ],
    included: {
      id: ['Transport Privat AC / 4x4', 'Surf Guide Lokal', 'Perahu Charter Ekas', 'Makan Siang & Es Minuman', 'Dokumentasi Foto'],
      en: ['Private AC / 4x4 Transport', 'Local Surf Guide', 'Ekas Boat Charter', 'Lunch & Cold Drinks', 'Photo Session'],
      zh: ['私家专车/4x4越野', '本地冲浪向导', 'Ekas包船', '午餐与冰饮料', '照片拍摄'],
      ja: ['専用4x4/AC車', 'ローカルガイド', 'エカスボート代', 'ランチ・飲料', '写真撮影']
    },
    excluded: {
      id: ['Sewa papan (bawa sendiri/opsional)', 'Tip guide & driver'],
      en: ['Surfboard rental (BYO or add-on)', 'Tips for guide & driver'],
      zh: ['冲浪板（自备或额外租用）', '向导与司机小费'],
      ja: ['ボード代（持参または追加）', 'チップ']
    }
  }
];
