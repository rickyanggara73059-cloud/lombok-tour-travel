import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, TourPackage, PackageCategory, CarOption } from './types';
import { tourPackages } from './data/packages';
import { translations } from './data/translations';
import { getLangText } from './utils/lang';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { PackageCard } from './components/PackageCard';
import { PackageModal } from './components/PackageModal';
import { CarRentalSection } from './components/CarRentalSection';
import { DocumentationSection } from './components/DocumentationSection';
import { TravelTipsAccordion } from './components/TravelTipsAccordion';
import { TestimonialSection } from './components/TestimonialSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Compass, Filter, Sparkles } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [activeCategory, setActiveCategory] = useState<PackageCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialPackageId, setInitialPackageId] = useState('');
  const [initialCarId, setInitialCarId] = useState('');

  const t = translations[currentLang];

  // Filter packages based on activeCategory & searchQuery
  const filteredPackages = tourPackages.filter((pkg) => {
    // Category match
    const matchesCategory = activeCategory === 'all' || pkg.category === activeCategory;

    // Search query match across language titles and description
    const titleText = getLangText(pkg.title, currentLang).toLowerCase();
    const descText = getLangText(pkg.description, currentLang).toLowerCase();
    const locationText = pkg.location.toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesQuery = !query || titleText.includes(query) || descText.includes(query) || locationText.includes(query);

    return matchesCategory && matchesQuery;
  });

  const handleSearchFromHero = (filters: {
    destination: string;
    category: PackageCategory;
    date: string;
    maxPrice: number;
  }) => {
    setActiveCategory(filters.category);
    setSearchQuery(filters.destination);
  };

  const handleOpenBookingWithPackage = (pkg: TourPackage) => {
    setInitialPackageId(pkg.id);
    setInitialCarId('');
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithCar = (car: CarOption) => {
    setInitialCarId(car.id);
    setInitialPackageId('');
    setBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setInitialPackageId('');
    setInitialCarId('');
    setBookingModalOpen(true);
  };

  const categories: { id: PackageCategory; labelKey: keyof typeof t }[] = [
    { id: 'all', labelKey: 'allCategories' },
    { id: 'gili', labelKey: 'catGili' },
    { id: 'rinjani', labelKey: 'catRinjani' },
    { id: 'surf', labelKey: 'catSurf' },
    { id: 'culture', labelKey: 'catCulture' },
    { id: 'mandalika', labelKey: 'catMandalika' },
    { id: 'waterfall', labelKey: 'catWaterfall' },
    { id: 'city', labelKey: 'catCity' },
    { id: 'fishing', labelKey: 'catFishing' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Hero Section with Large Banner & Search Filter */}
      <Hero
        currentLang={currentLang}
        onSearch={handleSearchFromHero}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Services Grid (Pacific Colorlib style feature cards) */}
      <ServicesGrid currentLang={currentLang} />

      {/* Main Tour Packages Section */}
      <section id="packages" className="py-20 bg-slate-950 text-white relative font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Banner Header */}
          <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border-2 border-cyan-400/30">
            <img
              src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2000&auto=format&fit=crop"
              alt="Lombok Surfing & Tropical Waves Tour Banner HD"
              className="w-full h-64 md:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/85 to-teal-950/70 flex flex-col justify-center p-6 md:p-12 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLang}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-2xl space-y-3"
                >
                  <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-black uppercase tracking-widest bg-cyan-500/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-400/40 text-amber-300 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    KATALOG PAKET TOUR LAUT & RINJANI LOMBOK
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif italic text-white leading-tight">
                    {t.packagesHeaderTitle}
                  </h2>
                  <p className="text-sky-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                    {t.packagesHeaderSub}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-amber-200">
                    <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      🌊 Snorkeling 3 Gili & Bahari
                    </span>
                    <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      🌋 Trekking Mount Rinjani 3.726M
                    </span>
                    <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      ⭐ Privat & Verifikasi 100%
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Category Filter Tabs with Text Motion */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex items-center gap-1.5 min-w-max shadow-xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30 scale-105'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <motion.span
                    key={`${cat.id}-${currentLang}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {t[cat.labelKey]}
                  </motion.span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Query indicator reset */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-2xl max-w-xl mx-auto shadow-xl"
            >
              <span className="text-xs text-slate-200">
                Menampilkan hasil pencarian untuk: <strong className="text-amber-300">"{searchQuery}"</strong>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-cyan-400 hover:text-cyan-300 underline font-extrabold"
              >
                Reset Filter
              </button>
            </motion.div>
          )}

          {/* Package Cards Grid with Menu Switch Motion */}
          <AnimatePresence mode="wait">
            {filteredPackages.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${currentLang}-${searchQuery}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPackages.map((pkg, idx) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <PackageCard
                      pkg={pkg}
                      currentLang={currentLang}
                      onSelectPackage={(selected) => setSelectedPackage(selected)}
                      onQuickBook={(selected) => handleOpenBookingWithPackage(selected)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800 max-w-xl mx-auto space-y-3 shadow-2xl"
              >
                <Compass className="w-12 h-12 text-cyan-400 mx-auto animate-spin-slow" />
                <h3 className="text-lg font-black text-white font-serif italic">Tidak ada paket yang sesuai</h3>
                <p className="text-xs text-slate-400 font-normal">Coba ubah pencarian atau pilih kategori lain.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-black text-xs px-6 py-3 rounded-xl transition-all shadow-lg"
                >
                  Lihat Semua Paket
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Specific Featured Shortcuts (3 Gili & Rinjani anchors) */}
      <div id="gili" className="h-0" />
      <div id="rinjani" className="h-0" />

      {/* Car Rental Fleet Section */}
      <CarRentalSection
        currentLang={currentLang}
        onBookCar={handleOpenBookingWithCar}
      />

      {/* Documentation & Travel Blog Section */}
      <DocumentationSection currentLang={currentLang} />

      {/* Travel Tips & Preparation Accordion Section */}
      <TravelTipsAccordion currentLang={currentLang} />

      {/* Tourist Testimonials Section */}
      <TestimonialSection currentLang={currentLang} />

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Modals & Floating Widgets */}
      <PackageModal
        pkg={selectedPackage}
        currentLang={currentLang}
        onClose={() => setSelectedPackage(null)}
        onBookWhatsapp={(pkg) => {
          setSelectedPackage(null);
          handleOpenBookingWithPackage(pkg);
        }}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        initialPackageId={initialPackageId}
        initialCarId={initialCarId}
        currentLang={currentLang}
        onClose={() => setBookingModalOpen(false)}
      />

      <WhatsAppFloatingButton currentLang={currentLang} />
    </div>
  );
}
