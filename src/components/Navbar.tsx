import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Globe, Menu, X, Compass, ChevronDown, Home, Compass as TourIcon, Car, Camera, MessageSquare, ArrowRight, Sparkles, ShieldCheck, Zap, Star, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'packages' | 'car-rental' | 'documentation'>('home');
  const [langSearch, setLangSearch] = useState('');

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy for active section
      const packagesElem = document.getElementById('packages');
      const carRentalElem = document.getElementById('car-rental');
      const docElem = document.getElementById('documentation');

      const scrollPos = window.scrollY + 200;

      if (docElem && scrollPos >= docElem.offsetTop) {
        setActiveSection('documentation');
      } else if (carRentalElem && scrollPos >= carRentalElem.offsetTop) {
        setActiveSection('car-rental');
      } else if (packagesElem && scrollPos >= packagesElem.offsetTop) {
        setActiveSection('packages');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: 'id', label: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', nativeName: 'English (US)', flag: '🇬🇧' },
    { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'ru', label: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: 'Chinese', nativeName: '中文 (Mandarin)', flag: '🇨🇳' },
    { code: 'ja', label: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
    { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  ];

  const currentLangObj = languages.find(l => l.code === currentLang) || languages[0];

  const filteredLanguages = languages.filter(l => 
    l.label.toLowerCase().includes(langSearch.toLowerCase()) || 
    l.nativeName.toLowerCase().includes(langSearch.toLowerCase())
  );

  const scrollToSection = (id: string, sectionKey: 'home' | 'packages' | 'car-rental' | 'documentation') => {
    setMobileMenuOpen(false);
    setActiveSection(sectionKey);
    if (sectionKey === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { key: 'home' as const, id: 'hero', label: t.navHome, icon: Home, badge: null },
    { key: 'packages' as const, id: 'packages', label: t.navPackages, icon: TourIcon, badge: '🔥 HOT' },
    { key: 'car-rental' as const, id: 'car-rental', label: t.navCarRental, icon: Car, badge: '24H' },
    { key: 'documentation' as const, id: 'documentation', label: t.navDocumentation, icon: Camera, badge: 'NEW' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-500">
      {/* Futuristic Glowing Laser Edge Line at Top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

      {/* Futuristic Top Bar Info Ticker (Hidden on mobile) */}
      <div className="bg-slate-950/95 text-slate-200 text-xs py-2 px-4 border-b border-slate-800/80 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Contact & Live Operational Badges */}
          <div className="flex items-center space-x-5 text-[11px]">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE CS ONLINE 24/7</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-cyan-300 font-semibold bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-amber-300 animate-pulse" />
              <span>RESPON WA &lt; 3 MENIT</span>
            </div>

            <a href="tel:+6281234567890" className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+62 812-3456-7890</span>
            </a>

            <a href="mailto:info@pacificlomboktour.com" className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors font-medium">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>info@pacificlomboktour.com</span>
            </a>

            <div className="hidden xl:flex items-center gap-1.5 text-amber-300 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>4.9/5 (1.200+ Ulasan)</span>
            </div>
          </div>

          {/* Right: Security Badge & Multi-language Selector */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garansi Layanan Resmi & Terverifikasi</span>
            </div>

            {/* Language Switcher Button */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold transition-all border border-cyan-500/30 hover:border-cyan-400/60 cursor-pointer shadow-md shadow-cyan-950/50"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span className="text-base leading-none">{currentLangObj.flag}</span>
                <span className="font-extrabold tracking-wide uppercase text-[11px] text-white">{currentLangObj.code}</span>
                <ChevronDown className={`w-3 h-3 text-cyan-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Multi-Language Futuristic Dropdown */}
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 bg-slate-900/95 border border-cyan-500/40 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl py-3 px-2 z-50 overflow-hidden"
                  >
                    <div className="px-3 pb-2 mb-2 border-b border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-300" /> Multi-Language (10)
                      </span>
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 font-bold px-2 py-0.5 rounded-full border border-cyan-500/30">
                        AI Translate
                      </span>
                    </div>

                    <div className="px-2 mb-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Cari bahasa / Search..."
                          value={langSearch}
                          onChange={(e) => setLangSearch(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                        />
                      </div>
                    </div>

                    <div className="max-h-64 overflow-y-auto space-y-1 px-1 custom-scrollbar">
                      {filteredLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onLanguageChange(lang.code);
                            setLangDropdownOpen(false);
                            setLangSearch('');
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                            currentLang === lang.code
                              ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-lg leading-none">{lang.flag}</span>
                            <div>
                              <div className="font-bold leading-tight">{lang.nativeName}</div>
                              <div className="text-[10px] text-slate-400 font-normal">{lang.label}</div>
                            </div>
                          </div>
                          {currentLang === lang.code && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Main Futuristic Glassmorphic Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-cyan-500/20 backdrop-blur-2xl py-2.5'
            : 'bg-slate-950/85 border-b border-slate-800/80 backdrop-blur-xl py-3.5 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Futuristic Glowing Holographic Badge */}
          <button
            onClick={() => scrollToSection('hero', 'home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition duration-500 group-hover:scale-110" />
              <div className="relative w-11 h-11 rounded-2xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-all duration-300">
                <Compass className="w-6 h-6 text-cyan-400 animate-spin-slow" />
              </div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-white block leading-tight font-serif italic">
                Pacific <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans text-base not-italic uppercase tracking-wider font-extrabold">Lombok</span>
              </span>
              <span className="text-[10px] text-cyan-400/90 tracking-widest uppercase block font-sans font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.brandTagline}
              </span>
            </div>
          </button>

          {/* Desktop Nav Items (Pills with Neon Highlight) */}
          <div className="hidden lg:flex items-center p-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 shadow-inner space-x-1 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id, item.key)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] font-black scale-105'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400/80'}`} />
                  <motion.span
                    key={`${item.key}-${item.label}`}
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                  {item.badge && !isActive && (
                    <span className="text-[9px] bg-cyan-500/20 text-cyan-300 font-bold px-1.5 py-0.2 rounded-full border border-cyan-500/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Button (Futuristic Glowing CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-amber-400 to-emerald-500 rounded-full animate-spin-slow group-hover:scale-105 transition-all" />
              <div className="relative bg-slate-950 group-hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/20 animate-bounce" />
                <span className="bg-gradient-to-r from-amber-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  {t.bookNow}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3 py-2 text-cyan-300 bg-slate-900 rounded-xl text-xs flex items-center gap-1.5 border border-cyan-500/30 cursor-pointer font-bold"
            >
              <span className="text-base">{currentLangObj.flag}</span>
              <span className="uppercase">{currentLangObj.code}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-cyan-400 bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors border border-cyan-500/30 cursor-pointer shadow-md"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Language Selector Popup */}
        <AnimatePresence>
          {langDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-4 pt-3 pb-4 bg-slate-950 border-b border-cyan-500/20 overflow-hidden"
            >
              <div className="text-[11px] font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> Pilih Bahasa (Multi-Language)
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`p-2.5 rounded-xl text-xs flex items-center gap-2 text-left transition-all cursor-pointer ${
                      currentLang === lang.code
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-md'
                        : 'bg-slate-900 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="truncate">{lang.nativeName}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-3 shadow-2xl"
            >
              {/* Operational Banner */}
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>CS WhatsApp Online 24/7</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  Respon Cepat
                </span>
              </div>

              {/* Navigation Items */}
              <div className="p-2 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.id, item.key)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-xs font-extrabold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-black shadow-md'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-600'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Booking CTA */}
              <div className="pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>{t.bookNow}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

