import { CarOption } from '../types';

export const carOptions: CarOption[] = [
  {
    id: 'avanza-veloz',
    name: 'Toyota Avanza / Veloz',
    category: 'mpv',
    capacity: 5,
    luggage: 4,
    transmission: 'Both',
    price12HoursIdr: 550000,
    priceFullDayIdr: 650000,
    image: '/cars/avanza.jpg',
    included: {
      id: ['Driver Ramah & Berpengalaman', 'BBM / Bensin Full', 'Penggunaan 12 Jam / Full Day Area Lombok', 'AC Dingin & Mobil Bersih Wangi'],
      en: ['Friendly Experienced Driver', 'Full Fuel / Petrol Included', '12 Hours / Full Day Lombok Usage', 'Clean Fragrant Vehicle with AC'],
      zh: ['经验丰富友好司机', '包含全程燃油', '12小时/全天龙目岛使用', '干净整洁车内空调'],
      ja: ['ベテランドライバー同行', 'ガソリン代全額込み', '12時間/終日 ロンボク全域', '車内清掃・冷房完備']
    }
  },
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn / Zenix',
    category: 'mpv',
    capacity: 6,
    luggage: 5,
    transmission: 'Automatic',
    price12HoursIdr: 800000,
    priceFullDayIdr: 950000,
    image: '/cars/reabon.jpg',
    included: {
      id: ['Driver Berpengalaman Jalur Wisata', 'BBM Full', 'Kenyamanan Suspensi Halus', 'Air Mineral Botol Gratis'],
      en: ['Driver Expert in Tour Routes', 'Full Fuel', 'Smooth Plush Suspension Comfort', 'Free Bottled Water'],
      zh: ['熟悉所有线路的资深司机', '全包燃油', '舒适宽敞座椅与悬挂', '免费瓶装水'],
      ja: ['観光ルート熟知ドライバー', 'ガソリン代込み', '快適なクッションと静音性', 'ミネラルウォーターサービス']
    }
  },
  {
    id: 'hiace',
    name: 'Toyota HiAce Commuter / Premio (12-14 Seat)',
    category: 'van',
    capacity: 14,
    luggage: 8,
    transmission: 'Manual',
    price12HoursIdr: 1250000,
    priceFullDayIdr: 1450000,
    image: '/cars/hiace.jpg',
    included: {
      id: ['Ideal Rombongan / Keluarga Besar', 'Driver Khusus Minibus', 'BBM Full Area Lombok', 'Audio Sound System & Charger'],
      en: ['Ideal for Group/Big Family Tour', 'Dedicated Minibus Captain', 'Full Fuel Included', 'Audio Sound System & Phone Charging'],
      zh: ['团队/大型家庭出游首选', '专属小巴大卡司机', '包含全岛燃油', '音响与车载充电口'],
      ja: ['グループ・大人数家族旅行に最適', 'マイクロバス専属ドライバー', 'ガソリン代込み', 'オーディオ＆USB充電']
    }
  },
  {
    id: 'Alphard-vellfire',
    name: 'PREMIUM Toyota Alphard / Vellfire',
    category: 'suv',
    capacity: 6,
    luggage: 4,
    transmission: 'Automatic',
    price12HoursIdr: 3000000,
    priceFullDayIdr: 5000000,
    image: 'cars/alphard.jpg',
    included: {
      id: ['Tampilan Gagah & Mewah', 'Cocok Medan Pegunungan Sembalun/Rinjani', 'Driver VIP Professional', 'BBM Included'],
      en: ['Bold Luxury Prestige SUV', 'Great for Mountain Hills & Rinjani Roads', 'Professional VIP Driver', 'Fuel Included'],
      zh: ['奢华大气越野SUV', '轻松应对Sembalun林贾尼山路', 'VIP专职司导', '包含全程油费'],
      ja: ['豪快なラグジュアリーSUV', 'リンジャニ山道・山岳地帯も余裕の走行', 'VIPプロドライバー', 'ガソリン代込み']
    }
  },
  {
    id: 'Zenix',
    name: 'Toyota Zenix hybrid ',
    category: 'luxury',
    capacity: 6,
    luggage: 4,
    transmission: 'Automatic',
    price12HoursIdr: 2800000,
    priceFullDayIdr: 3200000,
    image: '/cars/Zenix.jpg',
    included: {
      id: ['Captain Seat Ergonomis', 'Pelayanan VVIP Executive', 'Driver Berseragam Rapi', 'BBM & Tol/Parkir Included'],
      en: ['Ergonomic Leather Captain Seats', 'VVIP Executive Service Level', 'Uniformed Chauffeur Driver', 'Fuel & Parking Included'],
      zh: ['头等舱皮质独立座椅', 'VVIP高规格礼宾服务', '着装整洁专业司导', '油费及停车费全包'],
      ja: ['キャプテンシートレザー仕様', 'VVIPエグゼクティブ対応', '制服姿の専属専任ドライバー', 'ガソリン・駐車場代込み']
    }
  },
  {
    id: 'Sigra and calya',
    name: 'sigra/calya',
    category: 'mpv',
    capacity: 6,
    luggage: 3,
    transmission: 'Both',
    price12HoursIdr: 500000,
    priceFullDayIdr: 600000,
    image: '/cars/sigra.jpg',
    included: {
      id: ['Hemat Bahan Bakar & Irit', 'Driver Lokal Mengerti Rute', 'BBM Full', 'AC Double Blower'],
      en: ['Fuel Efficient Hybrid', 'Local Route Knowledgeable Driver', 'Full Fuel', 'Double Blower AC'],
      zh: ['省油舒适跨界车', '熟悉路况的本地司机', '包含燃料', '双区强劲空调'],
      ja: ['ハイブリッド低燃費車', '地元の抜け道に詳しいドライバー', 'ガソリン代込み', 'デュアルエアコン']
    }
  }
];
