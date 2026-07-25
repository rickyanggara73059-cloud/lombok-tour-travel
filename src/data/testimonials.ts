import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Budi & Dian Prasetyo',
    country: 'Indonesia',
    flag: '🇮🇩',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    tourTaken: 'Paket 3 Gili + Sade + Kuta Mandalika',
    date: 'Juli 2026',
    comment: {
      id: 'Sangat memuaskan! Driver Mas Budi ramah banget, mobil Innova Reborn bersih dan wangi. Snorkeling di Gili Meno lihat penyu dan foto underwater GoPro-nya keren banget!',
      en: 'Super satisfied! Our driver Mas Budi was extremely friendly, the Innova Reborn was spotless. Snorkeling at Gili Meno turtle point and the GoPro photos were amazing!',
      zh: '体验非常完美！司机非常友好开朗，Innova商务车干净舒适。在吉利梅诺浮潜看海龟，GoPro水下照片太惊艳了！',
      ja: '大満足のツアーでした！ドライバーのブディさんはとても親切で、車も綺麗でした。ギリ・メノでのウミガメシュノーケリングとGoPro撮影が最高でした！'
    }
  },
  {
    id: '2',
    name: 'Liam & Emma Watson',
    country: 'Australia',
    flag: '🇦🇺',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    tourTaken: 'Rinjani Trekking 3D2N Sembalun',
    date: 'Juni 2026',
    comment: {
      id: 'Pengalaman hidup tak terlupakan! Tim porter dan guide Pak Roni sangat perhatian, makanan di atas gunung melimpah dan enak. Sunset Bukit Merese dan Rinjani summit tiada duanya.',
      en: 'An unforgettable bucket-list experience! Porter team and guide Roni were so attentive, mountain food was hot and delicious. Sunset at Merese and Rinjani summit are unbeatable.',
      zh: '毕生难忘的惊艳之旅！背夫团队和导游Roni非常细心周到，山上的热餐丰盛美味。Merese山丘夕阳和林贾尼登顶风景独一无二。',
      ja: '一生の思い出になる素晴らしいトレッキングでした！ガイドのロニさんとポーターさんたちの手厚いサポート、山での温かい食事が最高でした。'
    }
  },
  {
    id: '3',
    name: 'Kenji & Yoko Tanaka',
    country: 'Japan',
    flag: '🇯🇵',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    tourTaken: 'Air Terjun Tiu Keleb & Gili Gede Sekotong',
    date: 'Mei 2026',
    comment: {
      id: 'Lombok luar biasa indah! Air Terjun Tiu Keleb sangat sejuk dan segar. Layanan booking via WhatsApp sangat cepat dan profesional.',
      en: 'Lombok is breathtakingly beautiful! Tiu Keleb waterfall was crisp and refreshing. WhatsApp booking communication was super fast and professional.',
      zh: '龙目岛美得令人窒息！Tiu Keleb瀑布清凉舒适。WhatsApp预订响应非常迅速与专业。',
      ja: 'ロンボク島は言葉にできないほど美しかったです！ティウ・ケレブの滝はマイナスイオンたっぷりでリフレッシュできました。WhatsAppでのやり取りもとてもスムーズでした。'
    }
  }
];
