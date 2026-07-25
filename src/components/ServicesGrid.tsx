import React from 'react';
import { Compass, Car, Users, Map, Anchor, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ServicesGridProps {
  currentLang: Language;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const services = [
    {
      icon: <Anchor className="w-7 h-7 text-white" />,
      color: 'from-cyan-500 to-teal-600',
      shadow: 'shadow-cyan-500/20',
      badge: '3 Gili & Fishing',
      title: {
        id: 'Aktivitas Wisata Bahari & Gili',
        en: 'Gili Marine & Snorkeling Activities',
        zh: '吉利海岛与水下活动',
        ja: 'ギリ島 マリンアクティビティ'
      },
      desc: {
        id: 'Island hopping 3 Gili, private glass bottom boat, snorkeling penyu & deep sea fishing trip.',
        en: '3 Gilis island hopping, private glass bottom boat charters, turtle snorkeling & deep sea fishing.',
        zh: '吉利三岛跳岛游、包船玻璃底船、海龟浮潜与深海海钓。',
        ja: '3つのギリ島巡り、グラスボトムボート、ウミガメシュノーケル、本格フィッシング。'
      },
      bgImage: '/packages/karang.jpg'
    },
    {
      icon: <Compass className="w-7 h-7 text-white animate-spin-slow" />,
      color: 'from-amber-500 to-orange-600',
      shadow: 'shadow-amber-500/20',
      badge: 'Summit 3,726M',
      title: {
        id: 'Pendakian Gunung Rinjani',
        en: 'Mt Rinjani Expeditions',
        zh: '林贾尼火山徒步登山',
        ja: 'リンジャニ山 登山トレッキング'
      },
      desc: {
        id: 'Paket trekking Sembalun 2H1M & 3H2M lengkap dengan guide TNGR, tim porter & perlengkapan camp.',
        en: 'Sembalun trekking packages 2D1N & 3D2N with licensed national park guide, porter team & camp gear.',
        zh: '仙本伦徒步2天1晚及3天2晚，包含国家公园持证导游、背夫团队与全套露营设备。',
        ja: 'センバルンルート2泊1日＆3泊2日。公認ガイド、ポーター、キャンプ用具一式付き。'
      },
      bgImage: '/packages/plawangan.jpg'
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      color: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/20',
      badge: 'Sasak Heritage',
      title: {
        id: 'Wisata Budaya & Pemandu Privat',
        en: 'Cultural Tour & Private Guides',
        zh: '萨萨克传统文化与私家导游',
        ja: '伝統文化体験＆専属ガイド'
      },
      desc: {
        id: 'Jelajahi Desa Sade, Desa Ende, kerajinan tenun ikat & pertunjukan seni pertarungan Peresean.',
        en: 'Immerse in Sade & Ende Sasak traditional villages, handloom weaving & live Peresean stick fights.',
        zh: '探访Sade与Ende萨萨克古村落、手织宋克特布与Peresean传统藤条比武。',
        ja: 'サデ村・エンデ村の伝統集落見学、手織り体験、伝統格闘演武ペレセアン観赏。'
      },
      bgImage: '/packages/sade2.jpg'
    },
    {
      icon: <Car className="w-7 h-7 text-white" />,
      color: 'from-sky-500 to-blue-600',
      shadow: 'shadow-blue-500/20',
      badge: 'VIP Fleet & Driver',
      title: {
        id: 'Sewa Mobil & Transportasi VIP',
        en: 'Car Rental & Airport Transfers',
        zh: '租车与机场/码头接送',
        ja: 'レンタカー＆送迎サービス'
      },
      desc: {
        id: 'Armada Avanza, Innova Reborn, HiAce hingga Alphard lengkap dengan driver ramah & BBM.',
        en: 'Fleet of Avanza, Innova Reborn, HiAce vans to Alphard complete with friendly driver & fuel.',
        zh: '拥有Avanza、Innova、HiAce至Alphard豪华车队，配熟练司机与燃油。',
        ja: 'アバンザ、イノバ、ハイエースからアルファードまで、ガソリン代・ドライバー付き。'
      },
      bgImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: <Waves className="w-7 h-7 text-white" />,
      color: 'from-blue-600 to-cyan-500',
      shadow: 'shadow-blue-500/20',
      badge: 'Surf & Rental',
      title: {
        id: 'Kursus Surfing & Sewa Surfboard',
        en: 'Surfing Lessons & Surfboard Rental',
        zh: '冲浪教学与冲浪板租赁',
        ja: 'サーフレッスン＆ボードレンタル'
      },
      desc: {
        id: 'Surf lesson pemula Gerupuk / Selong Belanak, sewa papan harian, & guided surf trip Desert Point.',
        en: 'Beginner surf lessons at Gerupuk/Selong Belanak, daily board rental, & guided Desert Point trip.',
        zh: 'Gerupuk/Selong Belanak初级冲浪课程、日租冲浪板与Desert Point追浪包车。',
        ja: '初心者サーフレッスン、日帰りボードレンタル、Desert Pointガイド付きトリップ。'
      },
      bgImage: '/packages/gerupuksurf.jpg'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 font-sans relative overflow-hidden text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full border border-cyan-400/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Pacific Lombok - Laut, Surfing & Rinjani, air terjun
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-serif italic">
            Layanan Tour Laut, Surfing & Rinjani Serba Ada
          </h2>
          <p className="text-sky-100 text-sm md:text-base font-normal leading-relaxed">
            Eksplorasi keindahan laut 3 Gili, ombak surfing Kuta Lombok, dan kemegahan puncak Rinjani dengan standar pelayanan premium & terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 perspective-1000">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl ${item.shadow} hover:border-cyan-400 transition-all duration-500 flex flex-col justify-between min-h-[340px] p-6 preserve-3d rotate-3d-hover`}
            >
              {/* Card Background Image with dark gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.bgImage}
                  alt={item.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 flex justify-between items-start">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-slate-950/90 text-amber-300 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 shadow-md">
                  {item.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-2 mt-auto pt-6">
                <h3 className="text-lg font-black text-white font-serif italic group-hover:text-cyan-400 transition-colors">
                  {item.title[currentLang]}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  {item.desc[currentLang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

