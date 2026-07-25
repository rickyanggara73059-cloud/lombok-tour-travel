import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Star, CheckCircle2, XCircle, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { TourPackage, Language } from '../types';
import { translations } from '../data/translations';
import { getLangText, getLangList } from '../utils/lang';

interface PackageModalProps {
  pkg: TourPackage | null;
  currentLang: Language;
  onClose: () => void;
  onBookWhatsapp: (pkg: TourPackage) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  currentLang,
  onClose,
  onBookWhatsapp
}) => {
  if (!pkg) return null;

  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'gallery'>('itinerary');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(pkg.image);

  const formatCurrencyIdr = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const titleText = getLangText(pkg.title, currentLang);
  const durationText = getLangText(pkg.duration, currentLang);
  const descriptionText = getLangText(pkg.description, currentLang);
  const includedList = getLangList(pkg.included, currentLang);
  const excludedList = getLangList(pkg.excluded, currentLang);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto font-sans animate-fade-in text-white">
      <div className="relative w-full max-w-4xl bg-slate-900 border-2 border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col text-slate-200">
        {/* Header Bar */}
        <div className="relative h-48 md:h-64 w-full bg-slate-950 shrink-0">
          <img
            src={selectedGalleryImg}
            alt={titleText}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/90 hover:bg-slate-800 text-white p-2.5 rounded-full border border-slate-700 transition-colors z-10 shadow-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Title Info */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-300 font-bold mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{pkg.location}</span>
                <span>•</span>
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-200 font-medium">{durationText}</span>
              </div>
              <h2 className="text-xl md:text-3xl font-black text-white font-serif italic leading-tight">
                {titleText}
              </h2>
            </div>

            <div className="bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-cyan-400/40 text-right shrink-0 shadow-lg">
              <div className="text-amber-300 font-black text-lg md:text-xl font-serif italic">
                {formatCurrencyIdr(pkg.priceIdr)}
              </div>
              <div className="text-cyan-300 text-xs font-semibold">~ ${pkg.priceUsd} USD / {t.perPerson}</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 md:px-6 flex gap-4 text-sm font-black">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'itinerary' ? 'border-cyan-400 text-cyan-300 font-black' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {t.itinerary}
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'inclusions' ? 'border-cyan-400 text-cyan-300 font-black' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {t.included} & {t.excluded}
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'gallery' ? 'border-cyan-400 text-cyan-300 font-black' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Gallery ({pkg.gallery.length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-sm">
          {/* Summary */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 leading-relaxed text-slate-300 font-normal">
            {descriptionText}
          </div>

          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <h3 className="font-serif italic font-black text-white text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                {t.itinerary}
              </h3>

              <div className="space-y-4">
                {pkg.itinerary.map((dayItem) => {
                  const dayTitle = getLangText(dayItem.title, currentLang);
                  const dayActivities = getLangList(dayItem.activities, currentLang);
                  return (
                    <div key={dayItem.day} className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
                      <div className="font-black text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-xs font-black">
                          {dayItem.day}
                        </span>
                        <span className="font-serif italic text-amber-300">{dayTitle}</span>
                      </div>

                      <ul className="space-y-2 pl-2 border-l-2 border-cyan-500/50 ml-3">
                        {dayActivities.map((act, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-slate-300 flex items-start gap-2 font-normal">
                            <span className="text-amber-300">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 space-y-3">
                <h4 className="font-black text-emerald-400 flex items-center gap-2 text-base font-serif italic">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  {t.included}
                </h4>
                <ul className="space-y-2">
                  {includedList.map((inc, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-300 flex items-start gap-2 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 space-y-3">
                <h4 className="font-black text-rose-400 flex items-center gap-2 text-base font-serif italic">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  {t.excluded}
                </h4>
                <ul className="space-y-2">
                  {excludedList.map((exc, i) => (
                    <li key={i} className="text-xs md:text-sm text-slate-400 flex items-start gap-2 font-normal">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {pkg.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedGalleryImg(imgUrl)}
                  className={`aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedGalleryImg === imgUrl ? 'border-amber-300 scale-105 shadow-xl' : 'border-slate-800 hover:border-cyan-400'
                  }`}
                >
                  <img src={imgUrl} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs text-cyan-300 font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Konfirmasi Cepat via WhatsApp CS Pacific Lombok</span>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-black text-xs uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={() => onBookWhatsapp(pkg)}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>{t.btnSendWhatsapp}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

