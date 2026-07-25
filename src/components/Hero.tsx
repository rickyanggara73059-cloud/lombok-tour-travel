import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Play, ShieldCheck, Award, Star, X, MapPin, Sun, Waves, Zap, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, PackageCategory } from '../types';
import { translations } from '../data/translations';
import { QuickSearch } from './QuickSearch';

interface HeroProps {
  currentLang: Language;
  onSearch: (filters: {
    destination: string;
    category: PackageCategory;
    date: string;
    maxPrice: number;
  }) => void;
  onOpenBooking: () => void;
}

const POPULAR_SLIDES = [
  {
    id: 'surf',
    title: 'Kuta Lombok & Gerupuk Surfing',
    category: 'SURFING & SURFBOARD',
    badge: '🔥 POPULAR #1',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop',
    subtitle: 'Spot ombak tropis kelas dunia, surf lesson pemula & sewa papan surfboard lengkap.',
    tagIcon: '🏄‍♂️',
    location: 'Gerupuk Bay & Selong Belanak'
  },
  {
    id: 'gili',
    title: '3 Gili Snorkeling & Underwater',
    category: 'GILI ISLANDS',
    badge: '🌊 FAVORIT TURIS',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    subtitle: 'Air laut jernih kristal, penyu laut, & patung bawah laut Gili Meno.',
    tagIcon: '🤿',
    location: 'Gili Trawangan, Meno & Air'
  },
  {
    id: 'rinjani',
    title: 'Puncak Gunung Rinjani 3.726m',
    category: 'RINJANI TREKKING',
    badge: '🌋 ECO ADVENTURE',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    subtitle: 'Petualangan gunung berapi tertinggi ke-2 Indonesia & Danau Segara Anak.',
    tagIcon: '🏔️',
    location: 'Sembalun & Senaru Rinjani'
  },
  {
    id: 'mandalika',
    title: 'Pantai Kuta Mandalika & Merese',
    category: 'SOUTH LOMBOK',
    badge: '🌅 SUNSET POINT',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    subtitle: 'Hamparan pasir putih merica, tebing Bukit Merese & Sirkuit Mandalika.',
    tagIcon: '🏝️',
    location: 'Kuta Mandalika & Tanjung Aan'
  }
];

export const Hero: React.FC<HeroProps> = ({ currentLang, onSearch, onOpenBooking }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const t = translations[currentLang];

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % POPULAR_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = POPULAR_SLIDES[activeSlide];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden font-sans bg-slate-950">
      {/* Background Hero Banner Image - HD Pristine Beach & Crystal Sea */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/pantaikuta.jpg"
          alt="Pantai Kuta"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-teal-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.30),transparent_65%)]" />
      </div>

      {/* Decorative 3D Ambient Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center md:text-left pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm font-extrabold shadow-lg shadow-cyan-500/10 shimmer-badge">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span className="bg-gradient-to-r from-amber-200 via-white to-cyan-200 bg-clip-text text-transparent">
                Official Lombok & West Nusa Tenggara (NTB) Travel Agency
              </span>
            </div>

            {/* Main Headline & Subtitle with Text Motion */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLang}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] font-serif italic">
                  {t.heroTitle.split('Lombok')[0]}
                  <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent underline decoration-amber-400/50 not-italic font-serif italic drop-shadow-md">
                    Lombok
                  </span>
                  {t.heroTitle.split('Lombok')[1] || ''}
                </h1>

                <p className="text-sky-100 text-base md:text-xl max-w-2xl font-normal leading-relaxed text-shadow">
                  {t.heroSub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  const pkgElem = document.getElementById('packages');
                  if (pkgElem) pkgElem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-black text-xs md:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer border border-white/30"
              >
                <Compass className="w-5 h-5 text-amber-200" />
                <span>{t.heroCta}</span>
              </button>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="group flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs md:text-sm uppercase tracking-wider px-6 py-4 rounded-full border border-white/30 backdrop-blur-md transition-all hover:scale-105 cursor-pointer shadow-lg shadow-black/20"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-slate-900 translate-x-0.5" />
                </div>
                <span>Watch 3D Lombok Video</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md border-t border-white/20 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-sm">4.9 / 5.0</div>
                  <div className="text-sky-200 text-[10px] font-medium">1,500+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-sm">Licensed</div>
                  <div className="text-sky-200 text-[10px] font-medium">Official NTB</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-sm">Best Price</div>
                  <div className="text-sky-200 text-[10px] font-medium">Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Modern Animated Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 relative perspective-1000"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Animated Glowing Aura Outline */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 rounded-3xl blur-lg opacity-60 animate-pulse pointer-events-none" />

            {/* Main Showcase Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/25 bg-slate-900/90 backdrop-blur-xl p-3.5 group">
              
              {/* Photo Showcase Area */}
              <div className="relative h-[380px] rounded-2xl overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide.id}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </AnimatePresence>

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10 pointer-events-none" />

                {/* Top Overlay Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-slate-950/80 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300 animate-spin-slow" />
                    {currentSlide.badge}
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-widest bg-cyan-500/80 text-white px-3 py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1">
                    <Eye className="w-3 h-3" /> FOTO POPULER
                  </span>
                </div>

                {/* Bottom Overlay Info Box */}
                <div className="absolute bottom-3 left-3 right-3 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/30 text-white space-y-1.5 shadow-xl z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <span>{currentSlide.tagIcon}</span>
                      <span>{currentSlide.category}</span>
                    </span>
                    <span className="text-[10px] text-amber-300 font-extrabold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" /> {currentSlide.location}
                    </span>
                  </div>

                  <h4 className="font-serif italic font-black text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {currentSlide.title}
                  </h4>
                  <p className="text-xs text-sky-100 font-normal leading-relaxed line-clamp-2">
                    {currentSlide.subtitle}
                  </p>
                </div>

                {/* Left/Right Manual Controls */}
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + POPULAR_SLIDES.length) % POPULAR_SLIDES.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-cyan-500 transition-colors z-20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % POPULAR_SLIDES.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-cyan-500 transition-colors z-20 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Running Text Marquee Banner (Tekst Berjalan) */}
              <div className="mt-3 py-2 px-3 bg-slate-950/90 rounded-xl border border-cyan-400/40 overflow-hidden shadow-lg backdrop-blur-md">
                <div className="animate-marquee whitespace-nowrap text-xs font-black tracking-wider flex items-center gap-6">
                  <span className="flex items-center gap-2 text-amber-300">
                    <span className="text-cyan-400">🏄‍♂️</span> PAKET SURFING & LESSON GERUPUK KUTA LOMBOK
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-cyan-300">
                    <span className="text-emerald-400">🌊</span> SNORKELING UNDERWATER 3 GILI
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-emerald-300">
                    <span className="text-amber-400">🌋</span> RINJANI VOLCANO SUMMIT TREKKING
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-amber-300">
                    <span className="text-cyan-400">🚘</span> SEWA MOBIL & DRIVER PACIFIC LOMBOK
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-teal-300">
                    <span className="text-amber-300">🏝️</span> SEWA SURFBOARD HARIAN HIGH QUALITY
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  {/* Duplicated for seamless continuous infinite marquee loop */}
                  <span className="flex items-center gap-2 text-amber-300">
                    <span className="text-cyan-400">🏄‍♂️</span> PAKET SURFING & LESSON GERUPUK KUTA LOMBOK
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-cyan-300">
                    <span className="text-emerald-400">🌊</span> SNORKELING UNDERWATER 3 GILI
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-emerald-300">
                    <span className="text-amber-400">🌋</span> RINJANI VOLCANO SUMMIT TREKKING
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-amber-300">
                    <span className="text-cyan-400">🚘</span> SEWA MOBIL & DRIVER PACIFIC LOMBOK
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="flex items-center gap-2 text-teal-300">
                    <span className="text-amber-300">🏝️</span> SEWA SURFBOARD HARIAN HIGH QUALITY
                  </span>
                  <span className="text-slate-600 font-bold">•</span>
                </div>
              </div>

              {/* Interactive Thumbnail Selector Tabs */}
              <div className="pt-2.5 grid grid-cols-4 gap-2">
                {POPULAR_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative rounded-xl overflow-hidden h-14 border transition-all cursor-pointer ${
                      activeSlide === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-105 shadow-md shadow-cyan-500/20'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${activeSlide === idx ? 'bg-cyan-500/20' : 'bg-slate-950/40'}`} />
                    <div className="absolute bottom-0.5 left-0 right-0 text-[9px] font-black text-center text-white truncate px-1 drop-shadow-md">
                      {slide.tagIcon} {slide.id.toUpperCase()}
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Quick Search Widget overlaying bottom of Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <QuickSearch currentLang={currentLang} onSearch={onSearch} />
      </div>

      {/* Video Modal Popup */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900 text-white">
              <h3 className="text-amber-300 font-serif italic font-extrabold text-lg flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                Wonderful Lombok & NTB Experience 3D
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/zvYMC4i45F8"
                title="Lombok Travel Destination"
                 className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


