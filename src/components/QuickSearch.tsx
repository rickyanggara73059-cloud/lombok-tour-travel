import React, { useState } from 'react';
import { Search, Calendar, MapPin, Tag, Sparkles } from 'lucide-react';
import { Language, PackageCategory } from '../types';
import { translations } from '../data/translations';

interface QuickSearchProps {
  currentLang: Language;
  onSearch: (filters: {
    destination: string;
    category: PackageCategory;
    date: string;
    maxPrice: number;
  }) => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({ currentLang, onSearch }) => {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState<PackageCategory>('all');
  const [date, setDate] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(3000000);

  const t = translations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, category, date, maxPrice });
    const pkgElem = document.getElementById('packages');
    if (pkgElem) {
      pkgElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-900/90 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-5 md:p-7 shadow-2xl shadow-cyan-500/20 max-w-5xl mx-auto font-sans relative overflow-hidden group text-white">
      {/* Top glowing bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-amber-400" />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Destination input */}
        <div className="space-y-1.5">
          <label className="text-xs font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-300" />
            {t.searchDestination}
          </label>
          <div className="relative">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Gili, Rinjani, Kuta..."
              className="w-full bg-slate-950 text-white font-semibold placeholder-slate-500 text-sm rounded-2xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Category selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-amber-300" />
            {t.searchCategory}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as PackageCategory)}
            className="w-full bg-slate-950 text-white font-semibold text-sm rounded-2xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all cursor-pointer shadow-inner"
          >
            <option value="all">{t.allCategories}</option>
            <option value="gili">{t.catGili}</option>
            <option value="rinjani">{t.catRinjani}</option>
            <option value="surf">{t.catSurf}</option>
            <option value="culture">{t.catCulture}</option>
            <option value="mandalika">{t.catMandalika}</option>
            <option value="waterfall">{t.catWaterfall}</option>
            <option value="city">{t.catCity}</option>
            <option value="fishing">{t.catFishing}</option>
            <option value="car">{t.catCar}</option>
          </select>
        </div>

        {/* Trip Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-cyan-400" />
            {t.searchCheckIn}
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-950 text-white font-semibold text-sm rounded-2xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
          />
        </div>

        {/* Search Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Search className="w-4 h-4 text-slate-950" />
            <span>{t.btnSearch}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

