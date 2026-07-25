import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Language } from '../types';
import { testimonials } from '../data/testimonials';
import { translations } from '../data/translations';

interface TestimonialSectionProps {
  currentLang: Language;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="testimonials" className="py-20 bg-slate-950 font-sans relative text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-cyan-300 text-xs font-black uppercase tracking-widest bg-cyan-500/20 px-4 py-1.5 rounded-full border border-cyan-400/30 shadow-md">
            Ulasan Wisatawan Laut & Rinjani
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-serif italic">
            {t.testimonialsTitle}
          </h2>
          <p className="text-sky-100 text-sm md:text-base font-normal leading-relaxed">
            {t.testimonialsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 text-slate-200 preserve-3d rotate-3d-hover"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center text-amber-300 gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                  ))}
                </div>

                <p className="text-slate-200 text-xs md:text-sm leading-relaxed italic font-normal">
                  "{item.comment[currentLang]}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <h4 className="text-white font-black text-sm font-serif italic">{item.name}</h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <span>{item.flag}</span>
                      <span>{item.country}</span>
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-amber-300 font-black">{item.tourTaken}</div>
                  <div className="text-[10px] text-slate-400 font-normal">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
