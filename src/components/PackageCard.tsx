import React from 'react';
import { Star, Clock, MapPin, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { TourPackage, Language } from '../types';
import { translations } from '../data/translations';
import { getLangText, getLangList } from '../utils/lang';

interface PackageCardProps {
  pkg: TourPackage;
  currentLang: Language;
  onSelectPackage: (pkg: TourPackage) => void;
  onQuickBook: (pkg: TourPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  currentLang,
  onSelectPackage,
  onQuickBook
}) => {
  const t = translations[currentLang];

  const formatCurrencyIdr = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const titleText = getLangText(pkg.title, currentLang);
  const durationText = getLangText(pkg.duration, currentLang);
  const descriptionText = getLangText(pkg.description, currentLang);
  const highlightsList = getLangList(pkg.highlights, currentLang);

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400 transition-all duration-500 flex flex-col justify-between font-sans preserve-3d rotate-3d-hover text-white">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={pkg.image}
          alt={titleText}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Category & Featured Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/90 text-cyan-300 border border-cyan-400/40 shadow-md backdrop-blur-md">
            {pkg.category.toUpperCase()}
          </span>

          {pkg.featured && (
            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              POPULAR
            </span>
          )}
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-xl border border-cyan-400/30 px-4 py-2 rounded-2xl shadow-xl text-right z-10">
          <div className="text-amber-300 font-black text-lg leading-none font-serif italic">
            {formatCurrencyIdr(pkg.priceIdr)}
          </div>
          <div className="text-[10px] text-cyan-200 font-semibold mt-0.5">
            ~ ${pkg.priceUsd} USD / {t.perPerson}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Location & Duration */}
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1 text-cyan-300 font-extrabold">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {pkg.location}
            </span>
            <span className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full text-amber-300 border border-slate-700 font-bold">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              {durationText}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-black text-white font-serif italic group-hover:text-cyan-400 transition-colors line-clamp-2">
            {titleText}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center text-amber-300 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span className="ml-1 font-black text-white">{pkg.rating}</span>
            </div>
            <span className="text-slate-400 font-normal">({pkg.reviewsCount} reviews)</span>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed font-normal">
            {descriptionText}
          </p>

          {/* Top 2 Highlights */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5">
            {highlightsList.slice(0, 2).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="truncate">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-3 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onSelectPackage(pkg)}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-black text-xs uppercase tracking-wider py-3 px-3 rounded-2xl border border-slate-700 transition-colors text-center cursor-pointer"
          >
            {t.viewDetails}
          </button>
          <button
            onClick={() => onQuickBook(pkg)}
            className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-3 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <span>{t.bookNow}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};

