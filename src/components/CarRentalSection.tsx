import React from 'react';
import { Car, Users, Luggage, Fuel, ShieldCheck, Check, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, CarOption } from '../types';
import { carOptions } from '../data/cars';
import { translations } from '../data/translations';

interface CarRentalSectionProps {
  currentLang: Language;
  onBookCar: (car: CarOption) => void;
}

export const CarRentalSection: React.FC<CarRentalSectionProps> = ({ currentLang, onBookCar }) => {
  const t = translations[currentLang];

  const formatCurrencyIdr = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="car-rental" className="py-20 bg-slate-900 font-sans relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border-2 border-cyan-400/30">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop"
            alt="Armada Mobil Lombok Banner"
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
                  ARMADA & SEWA MOBIL LOMBOK
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif italic text-white leading-tight">
                  {t.carRentalTitle}
                </h2>
                <p className="text-sky-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                  {t.carRentalSub}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-amber-200">
                  <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    ✓ Driver Lokal Ramah & BBM Included
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    ✓ Mobil Bersih, Harum & AC Dingin
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    ✓ Penjemputan Bandara/Hotel
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {carOptions.map((car) => (
            <div
              key={car.id}
              className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-cyan-400 transition-all duration-500 flex flex-col justify-between preserve-3d rotate-3d-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 border border-amber-400/40 backdrop-blur-md shadow-md">
                  {t.withDriverFuel}
                </span>

                <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 rounded-2xl shadow-lg text-right">
                  <div className="text-amber-300 font-black text-sm md:text-base font-serif italic">
                    {formatCurrencyIdr(car.priceFullDayIdr)}
                  </div>
                  <div className="text-[10px] text-cyan-200">/ Full Day (12-14 hrs)</div>
                </div>
              </div>

              {/* Specs & Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-white font-serif italic group-hover:text-cyan-400 transition-colors">
                    {car.name}
                  </h3>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800 text-xs text-slate-300">
                    <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-900 border border-slate-800">
                      <Users className="w-4 h-4 text-cyan-400 mb-1" />
                      <span className="text-[10px] text-slate-400 font-medium">{t.capacity}</span>
                      <span className="font-extrabold text-white">{car.capacity} Pax</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-900 border border-slate-800">
                      <Luggage className="w-4 h-4 text-cyan-400 mb-1" />
                      <span className="text-[10px] text-slate-400 font-medium">{t.luggage}</span>
                      <span className="font-extrabold text-white">{car.luggage} Bags</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-900 border border-slate-800">
                      <Car className="w-4 h-4 text-cyan-400 mb-1" />
                      <span className="text-[10px] text-slate-400 font-medium">{t.transmission}</span>
                      <span className="font-extrabold text-white text-[10px]">{car.transmission}</span>
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="space-y-1.5 pt-1">
                    {car.included[currentLang].map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onBookCar(car)}
                  className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-emerald-300/40"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.rentCarBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

