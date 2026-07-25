import React, { useState } from 'react';
import { Mountain, Waves, Compass, ChevronDown, CheckCircle2, ShieldAlert, Sun, Info, HelpCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface TravelTipsProps {
  currentLang: Language;
}

interface AccordionItem {
  id: string;
  icon: React.ElementType;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  highlights: Record<Language, string[]>;
  sections: {
    heading: Record<Language, string>;
    items: Record<Language, string[]>;
  }[];
}

export const TravelTipsAccordion: React.FC<TravelTipsProps> = ({ currentLang }) => {
  const [openId, setOpenId] = useState<string>('rinjani');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const tipsData: AccordionItem[] = [
    {
      id: 'rinjani',
      icon: Mountain,
      badge: {
        id: 'Trekking & Pendakian',
        en: 'Trekking & Hiking',
        zh: '徒步与登山',
        ja: 'トレッキング＆登山',
      },
      title: {
        id: 'Persiapan & Packing List Pendakian Gunung Rinjani (3.726 mdpl)',
        en: 'Mount Rinjani Trekking Preparation & Essential Packing List',
        zh: '林贾尼火山徒步准备与必备物品清单 (3,726米)',
        ja: 'リンジャニ山トレッキング準備＆必須パッキングリスト (3,726m)',
      },
      subtitle: {
        id: 'Panduan lengkap perlengkapan, pakaian dingin, dan latihan fisik sebelum menaklukkan puncak Rinjani.',
        en: 'Comprehensive guide on cold-weather gear, essential items, and physical preparation before summiting Rinjani.',
        zh: '登顶林贾尼火山前的御寒装备、必备物品和体能准备完整指南。',
        ja: 'リンジャニ山頂を目指す前の防寒具、必須装備、体能準備の完全ガイド。',
      },
      highlights: {
        id: ['Suhu Puncak: 0°C - 10°C', 'Mata Air Bersih Tersedia', 'Wajib Sepatu Grippy', 'Porter & Guide Berlisensi'],
        en: ['Summit Temp: 0°C - 10°C', 'Clean Spring Water Available', 'Grippy Hiking Boots Required', 'Licensed Porter & Guide Provided'],
        zh: ['山顶温度：0°C - 10°C', '提供清洁泉水', '必须穿防滑登山鞋', '配备持牌挑夫与导游'],
        ja: ['山頂気温：0°C〜10°C', '湧き水あり', '滑り止め登山靴必須', 'ライセンス持ちポーター＆ガイド付き'],
      },
      sections: [
        {
          heading: {
            id: '🧥 Pakaian & Perlengkapan Hangat (Wajib bawa di Daypack)',
            en: '🧥 Cold Weather Clothing & Layering (Essential in Daypack)',
            zh: '🧥 防寒衣物与保暖层 (随身背包必备)',
            ja: '🧥 防寒着＆レイヤリング (デイパック必須)',
          },
          items: {
            id: [
              'Jaket Thermal / Windbreaker tahan angin & dingin hingga 0°C.',
              'Sepatu trekking dengan grip tajam (sudah terbiasa dipakai, hindari sepatu baru).',
              'Pakaian sintetis moisture-wicking (2-3 pasang, hindari bahan katun tebal yang menyerap keringat).',
              'Kupluk (beanie), sarung tangan hangat, dan kaus kaki tebal ekstra 2-3 pasang.',
              'Jas hujan / Poncho ringan untuk mengantisipasi cuaca gunung yang dinamis.'
            ],
            en: [
              'Windproof thermal jacket rated for temperatures down to 0°C.',
              'Sturdy trekking boots with good ankle support & deep tread.',
              'Moisture-wicking synthetic shirts (2-3 pairs, avoid heavy cotton).',
              'Warm beanie, insulated gloves, and 2-3 extra pairs of thick wool socks.',
              'Lightweight rain jacket or poncho for unpredictable mountain weather.'
            ],
            zh: [
              '防风保暖外套，适用于低至 0°C 的气温。',
              '具有良好脚踝支撑和深齿纹的坚固徒步靴。',
              '吸湿排汗合成纤维快干衣 (2-3 件，避免穿厚重棉织物)。',
              '保暖毛线帽、隔热手套和 2-3 双额外厚羊毛袜。',
              '轻便雨衣或斗篷，应对多变的高山天气。'
            ],
            ja: [
              '0°Cまで対応する防風サーマルジャケット。',
              '足首をしっかりサポートする滑り止めトレッキングシューズ。',
              '吸汗速乾インナーシャツ (2-3枚、綿製品は避ける)。',
              '防寒ニット帽、手袋、厚手靴下2-3足。',
              '山天候急変用の軽量レインポンチョ。'
            ]
          }
        },
        {
          heading: {
            id: '🎒 Peralatan Tambahan & Kesehatan',
            en: '🎒 Essential Hardware & Personal Health',
            zh: '🎒 必备装备与个人健康物品',
            ja: '🎒 必須ギア＆個人健康用品',
          },
          items: {
            id: [
              'Headlamp (senter kepala) + baterai cadangan wajib untuk summit attack jam 02.00 pagi.',
              'Trekking pole (tongkat mendaki) sangat membantu menahan beban lutut saat turunan pasir.',
              'Sunblock SPF 50+, lip balm, kain buff/masker debu pasir saat ke puncak.',
              'Obat-obatan pribadi (Antalgin, obat flu, korset lutut, plaster lecet).',
              'Powerbank & kantong plastik kedap air (dry bag) untuk elektronik.'
            ],
            en: [
              'Headlamp with fresh batteries (mandatory for 2:00 AM summit push).',
              'Trekking poles (highly recommended to save knees on loose volcanic scree).',
              'SPF 50+ sunscreen, lip balm, and face buff/mask for loose dust on summit path.',
              'Personal first aid & meds (painkillers, altitude sickness pills, blister pads).',
              'Power bank & waterproof dry bags for electronics.'
            ],
            zh: [
              '带备用电池的头灯 (凌晨 2:00 冲顶必备)。',
              '登山杖 (强烈建议使用，在松散的火山灰下坡时保护膝盖)。',
              'SPF 50+ 防晒霜、润唇膏和防尘面罩。',
              '个人急救和药品 (止痛药、高反药、水泡贴)。',
              '移动电源和用于电子产品的防水袋。'
            ],
            ja: [
              '予備電池付きヘッドランプ (午前2時の山頂アタック必須)。',
              'トレッキングポール (砂利道下山時の膝の負担軽減に最適)。',
              'SPF 50+日焼け止め、リップクリーム、砂塵用マスク。',
              '常備薬 (镇痛剤、高山病薬、靴擦れ防止パッド)。',
              'モバイルバッテリー＆電子機器用防水バッグ。'
            ]
          }
        },
        {
          heading: {
            id: '🏃 Tips Fisik & Etika Kelestarian Rinjani',
            en: '🏃 Physical Tips & Leave-No-Trace Policy',
            zh: '🏃 体能准备与环保原则',
            ja: '🏃 体能トレーニング＆環境保護マナー',
          },
          items: {
            id: [
              'Latihan kardio (jogging, naik-turun tangga) minimal 2 minggu sebelum pendakian.',
              'Selalu bawa pulang sampah pribadi (prinsip Pack It In, Pack It Out).',
              'Minum air mineral berkala dan atur ritme jalan (santai tapi konsisten).',
              'Ikuti instruksi Guide & Porter Pacific Lombok demi keamanan perjalanan.'
            ],
            en: [
              'Cardio training (jogging, stair climbing) for at least 2 weeks before arrival.',
              'Strict Leave-No-Trace policy: pack out all personal trash.',
              'Sip water regularly and maintain a steady, slow-paced walking rhythm.',
              'Follow guide instructions at all times for mountain safety.'
            ],
            zh: [
              '徒步前至少进行 2 周的心肺训练 (慢跑、爬楼梯)。',
              '严格无痕山林原则：将所有个人垃圾带下山。',
              '定期补充水分，保持平稳、匀速的步行节奏。',
              '时刻听从导游和挑夫的安全指示。'
            ],
            ja: [
              '到着2週間前からの有酸素運動 (ジョギング、階段昇降)。',
              'ゴミ持ち帰り徹底 (Leave-No-Traceポリシー)。',
              'こまめな水分補給と無理のないペース配分。',
              'ガイド指示の順守による安全確保。'
            ]
          }
        }
      ]
    },
    {
      id: 'gili',
      icon: Waves,
      badge: {
        id: 'Snorkeling & Wisata Bahari',
        en: 'Snorkeling & Marine Tourism',
        zh: '浮潜与海洋旅游',
        ja: 'シュノーケリング＆マリン観光',
      },
      title: {
        id: 'Etika Snorkeling & Tips Wisata di 3 Gili (Trawangan, Meno, Air)',
        en: 'Snorkeling Etiquette & Visitor Tips for 3 Gili Islands',
        zh: '吉利三岛 (Trawangan, Meno, Air) 浮潜礼仪与游玩指南',
        ja: 'ギリ3島 (トラワンガン、メノ、アイル) シュノーケリングマナー＆観光のコツ',
      },
      subtitle: {
        id: 'Panduan menjaga terumbu karang, perlindungan satwa penyu, dan keamanan berenang di perairan Gili.',
        en: 'Guidelines on protecting coral reefs, sea turtle welfare, and swimming safely in Gili waters.',
        zh: '保护珊瑚礁、海龟福祉以及在吉利海域安全游泳的指南。',
        ja: 'サンゴ礁保護、ウミガメへの配慮、ギリ海域での安全遊泳ガイド。',
      },
      highlights: {
        id: ['Dilarang Menyentuh Penyu', 'Gunakan Reef-Safe Sunscreen', 'Jaket Pelampung Gratis', 'Spot Patung Nest Meno'],
        en: ['Do Not Touch Turtles', 'Use Reef-Safe Sunscreen', 'Free Life Jackets Available', 'NEST Statue Spot at Meno'],
        zh: ['禁止触摸海龟', '使用环保防晒霜', '免费提供救生衣', '吉利梅诺水下雕塑雕像'],
        ja: ['ウミガメ接触禁止', 'リーフセーフ日焼け止め使用', 'ライフジャケット無料貸出', 'メノ島水中像スポット'],
      },
      sections: [
        {
          heading: {
            id: '🐢 Konservasi Laut & Penyu (Turtle Friendly)',
            en: '🐢 Sea Turtle & Coral Conservation Rules',
            zh: '🐢 海龟与珊瑚保育规则',
            ja: '🐢 ウミガメ＆サンゴ礁の保全ルール',
          },
          items: {
            id: [
              'Jagalah jarak minimal 2 meter dari penyu liar. DILARANG MENYENTUH, memegang, atau menunggangi penyu.',
              'Jangan injak terumbu karang hidup. Gunakan pelampung jika belum mahir berenang agar kaki tidak merusak karang.',
              'Dilarang memberi makan ikan (fish feeding) dengan roti/makanan olahan karena merusak ekosistem alami.',
              'Hindari mengambil kerang, pasir, atau karang mati dari dasar laut untuk dibawa pulang.'
            ],
            en: [
              'Maintain at least 2 meters distance from wild sea turtles. NEVER touch, chase, or hold them.',
              'Do not step on living corals. Wear a life jacket if you are a non-swimmer to prevent accidental reef damage.',
              'Do not feed fish with bread or processed food as it disrupts natural marine dietary balance.',
              'Never collect shells, sand, or dead coral fragments to take home.'
            ],
            zh: [
              '与野生海龟保持至少 2 米的距离。严禁触摸、追逐或抓捏海龟。',
              '切勿踩踏活珊瑚。如不擅长游泳，请穿救生衣以防无意中损坏珊瑚礁。',
              '请勿用面包或加工食品喂鱼，以免破坏自然海洋生态。',
              '切勿采集贝壳、沙子或死珊瑚带回家。'
            ],
            ja: [
              'ウミガメから最低2m離れて観察。絶対に触ったり追いかけたりしないでください。',
              '生きたサンゴを踏まない。泳ぎが得意でない方はライフジャケットを着用してください。',
              'パンなどの加工食品での餌付け禁止 (自然生態系保護のため)。',
              '貝殻やサンゴの持ち帰り禁止。'
            ]
          }
        },
        {
          heading: {
            id: '🧴 Keamanan Berenang & Tabir Surya',
            en: '🧴 Swimming Safety & Reef-Safe Sunscreen',
            zh: '🧴 游泳安全与无害防晒',
            ja: '🧴 安全遊泳＆リーフセーフ日焼け止め',
          },
          items: {
            id: [
              'Gunakan tabir surya bebas Oxybenzone & Octinoxate (Reef-Safe Sunscreen) untuk menjaga kejernihan laut.',
              'Perhatikan arus laut antar pulau (Gili Trawangan & Meno). Patuhi garis aman berenang dari boat captain.',
              'Pakai masker snorkeling & fin (kaki katak) yang ukurannya pas untuk kenyamanan bergerak.',
              'Selalu bawa kantong air waterproof (drybag) untuk menyimpan ponsel dan kamera saat naik glass-bottom boat.'
            ],
            en: [
              'Use Oxybenzone & Octinoxate-free sunscreen (Reef-Safe) to prevent coral bleaching.',
              'Be aware of strong inter-island currents between Gili T and Gili Meno. Follow captain safety briefings.',
              'Ensure snorkeling mask and fins fit snugly before stepping off the boat.',
              'Keep mobile phones and cameras inside a dry bag while on glass-bottom boats.'
            ],
            zh: [
              '使用不含氧苯酮和辛氧酸酯的防晒霜 (环保防晒霜)，防止珊瑚白化。',
              '注意吉利特拉旺岸与梅诺岛之间的强烈洋流，遵循船长安全指导。',
              '下水前确保浮潜面罩和脚蹼尺寸合适。',
              '乘坐玻璃底船时，将手机和相机放在防水袋中。'
            ],
            ja: [
              'オキシベンゾン不使用のサンゴに優しい日焼け止め (Reef-Safe) を推奨。',
              '島間の潮流に注意。キャプテンの安全指示に従ってください。',
              'シュノーケルマスクとフィンがフィットしているか事前に確認。',
              'グラスボトムボート搭乗時は防水バッグを着用。'
            ]
          }
        }
      ]
    },
    {
      id: 'culture',
      icon: Compass,
      badge: {
        id: 'Budaya & Etika Lokal',
        en: 'Culture & Local Etiquette',
        zh: '当地文化与礼仪',
        ja: '現地文化＆マナー',
      },
      title: {
        id: 'Etika Budaya Sasak & Tips Praktis Keliling Lombok',
        en: 'Sasak Cultural Etiquette & Lombok Practical Travel Tips',
        zh: '萨萨克族文化礼仪与龙目岛实用旅游指南',
        ja: 'ササック文化マナー＆ロンボク観光実用アドバイス',
      },
      subtitle: {
        id: 'Informasi sopan santun pakaian, opsi pembayaran tunai, dan waktu terbaik berkunjung ke Lombok.',
        en: 'Advice on modest dress codes, cash payment options, and the best seasons to visit Lombok.',
        zh: '关于着装礼仪、现金支付方式以及游览龙目岛最佳季节的建议。',
        ja: '服装マナー、現金決済、ロンボク島訪問のベストシーズン。',
      },
      highlights: {
        id: ['Sopan di Desa Adat Sade', 'Bawa Tunai IDR di Gili', 'Musim Kemarau Apr - Okt', 'Ramah Wisatawan Muslim'],
        en: ['Modest Dress at Sade Village', 'Bring IDR Cash to Gilis', 'Dry Season Apr - Oct', 'Muslim-Friendly Island'],
        zh: ['在萨德古村注意着装', '吉利群岛准备印尼盾现金', '旱季 4月 - 10月', '穆斯林友好岛屿'],
        ja: ['サデ村でのマナー服装', 'ギリ島現金持参推奨', '乾期 4月〜10月', 'ムスリムフレンドリー'],
      },
      sections: [
        {
          heading: {
            id: '👗 Pakaian & Norma Kunjungan Desa Adat',
            en: '👗 Dress Code & Visiting Traditional Villages',
            zh: '👗 着装规范与拜访传统村落',
            ja: '👗 服装マナー＆伝統的な村への訪問',
          },
          items: {
            id: [
              'Saat berkunjung ke Desa Adat Sasak (Desa Sade / Ende) atau tempat ibadah, kenakan pakaian yang menutup bahu & lutut.',
              'Pelepasan alas kaki biasanya diperlukan saat memasuki rumah adat bambu atau area bertuah.',
              'Gunakan tangan kanan saat memberi/menerima barang atau menyapa warga lokal sebagai bentuk penghormatan.',
              'Mintalah izin terlebih dahulu sebelum mengambil foto portrait warga lokal atau anak-anak.'
            ],
            en: [
              'When visiting Sasak Traditional Villages (Sade / Ende) or sacred spots, wear clothes covering shoulders and knees.',
              'Remove shoes before entering traditional bamboo houses or sacred areas.',
              'Use your right hand when giving/receiving items or greeting locals as a mark of respect.',
              'Always ask for permission before taking close-up portraits of village elders or children.'
            ],
            zh: [
              '拜访萨萨克传统村落 (Sade / Ende) 时，请穿遮盖肩膀和膝盖的服饰。',
              '进入传统竹屋或神圣区域前请脱鞋。',
              '递交物品或与当地人打招呼时，请使用右手以示尊重。',
              '在给村民或儿童拍近景肖像前，请先征得同意。'
            ],
            ja: [
              'ササック伝統村 (サデ/エンデ) 訪問時は肩や膝が隠れる服装を着用。',
              '伝統家屋に入る際は靴を脱ぐ。',
              '物の受け渡しや挨拶には右手を使用。',
              '地元住民や子供の写真を撮る前は許可を得てください。'
            ]
          }
        },
        {
          heading: {
            id: '💵 Uang Tunai, ATM & Cuaca Terbaik',
            en: '💵 Cash, ATMs & Best Travel Season',
            zh: '💵 现金、自动取款机与最佳旅游季节',
            ja: '💵 現金、ATM＆旅行のベストシーズン',
          },
          items: {
            id: [
              'Mata uang resmi: Rupiah (IDR). Bawa uang tunai secukupnya untuk belanja di Gili Trawangan & Meno.',
              'ATM & Money Changer resmi banyak tersedia di Mataram, Senggigi, Airport, dan Kuta Mandalika.',
              'Musim kemarau (April - Oktober) adalah waktu terbaik untuk trekking Rinjani & cuaca laut cerah.',
              'Semua makanan yang disajikan tim Pacific Lombok dipastikan Halal 100% dan higienis.'
            ],
            en: [
              'Official Currency: Indonesian Rupiah (IDR). Carry sufficient cash for small purchases in the Gilis.',
              'ATMs & licensed Money Changers are widely accessible in Mataram, Senggigi, Lombok Airport, and Kuta.',
              'Dry Season (April - October) offers optimal conditions for Rinjani trekking and crystal clear seas.',
              'All meals served on Pacific Lombok tours are 100% Halal and hygienically prepared.'
            ],
            zh: [
              '官方货币：印尼盾 (IDR)。在吉利群岛小额消费建议携带足够现金。',
              '马塔兰、圣吉吉、机场和库塔区域有充足的 ATM 与正规兑换店。',
              '旱季 (4月至10月) 为林贾尼徒步和水下浮潜的最佳时机。',
              'Pacific Lombok 所有行程安排的餐饮均为 100% 清真且卫生。'
            ],
            ja: [
              '通貨：インドネシアルピア (IDR)。ギリ島での買い物用に十分な現金を持参。',
              'マタラム、センギギ、空港、クタにATMと両替所多数あり。',
              '乾期 (4月〜10月) がトレッキングとマリンアクティビティの最適期。',
              'ツアー中の食事は100%ハラール対応で安心。'
            ]
          }
        }
      ]
    }
  ];

  return (
    <section id="travel-tips" className="py-20 bg-slate-950 font-sans relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border-2 border-cyan-400/30">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
            alt="Travel Preparation Banner"
            className="w-full h-60 md:h-72 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/85 to-teal-950/70 flex flex-col justify-center p-6 md:p-12 text-white">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-black uppercase tracking-widest bg-cyan-500/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-400/40 text-amber-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                TRAVEL TIPS & PREPARATION
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif italic text-white leading-tight">
                {currentLang === 'id' && 'Panduan & Persiapan Wisata Lombok'}
                {currentLang === 'en' && 'Lombok Travel Tips & Preparation Guide'}
                {currentLang === 'zh' && '龙目岛旅游准备与实用贴士'}
                {currentLang === 'ja' && 'ロンボク島旅行の準備とアドバイス'}
              </h2>
              <p className="text-sky-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                {currentLang === 'id' && 'Informasi penting seputar perlengkapan pendakian Rinjani, etika snorkeling di 3 Gili, serta tips budaya lokal.'}
                {currentLang === 'en' && 'Essential advice for Rinjani trekkers, Gili Islands snorkeling etiquette, and local cultural norms.'}
                {currentLang === 'zh' && '林贾尼火山徒步装备清单、吉利群岛浮潜礼仪与当地风俗指南。'}
                {currentLang === 'ja' && 'リンジャニ山パッキング、ギリ3島シュノーケリングマナー、現地文化のアドバイス。'}
              </p>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-5">
          {tipsData.map((item) => {
            const IconComponent = item.icon;
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-slate-900 rounded-3xl border transition-all duration-300 overflow-hidden shadow-xl ${
                  isOpen ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-start md:items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-500/30' : 'bg-slate-800 text-cyan-400 border border-slate-700'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                          {item.badge[currentLang]}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-white font-serif italic">
                        {item.title[currentLang]}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-300 line-clamp-1 font-normal">
                        {item.subtitle[currentLang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-extrabold">
                      {isOpen ? (
                        <span className="text-xs text-amber-300 font-black uppercase tracking-wider">Tutup Detail</span>
                      ) : (
                        <span className="text-xs text-cyan-400 font-black uppercase tracking-wider">Lihat Tips</span>
                      )}
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Accordion Collapsible Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800 space-y-6 bg-slate-950 animate-fade-in">
                    {/* Quick Highlights Badge Grid */}
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black text-amber-300 mr-2 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-cyan-400" />
                        Key Highlights:
                      </span>
                      {item.highlights[currentLang].map((hl, idx) => (
                        <span key={idx} className="bg-slate-800 px-3 py-1 rounded-xl text-xs text-slate-200 font-medium border border-slate-700">
                          ✓ {hl}
                        </span>
                      ))}
                    </div>

                    {/* Detailed Sections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="bg-slate-900 rounded-2xl p-5 border border-slate-800 space-y-3">
                          <h4 className="font-serif italic font-black text-cyan-300 text-sm border-b border-slate-800 pb-2">
                            {sec.heading[currentLang]}
                          </h4>

                          <ul className="space-y-2">
                            {sec.items[currentLang].map((bullet, bIdx) => (
                              <li key={bIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2 font-normal">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

