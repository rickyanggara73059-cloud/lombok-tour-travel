import React, { useState } from 'react';
import { BookOpen, Camera, Calendar, User, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { Language, DocumentationArticle } from '../types';
import { documentationArticles, galleryPhotos } from '../data/docs';
import { translations } from '../data/translations';

interface DocumentationSectionProps {
  currentLang: Language;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({ currentLang }) => {
  const [selectedArticle, setSelectedArticle] = useState<DocumentationArticle | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'articles' | 'gallery'>('articles');

  const t = translations[currentLang];

  return (
    <section id="documentation" className="py-20 bg-slate-900 font-sans relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border-2 border-cyan-400/30">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="Galeri & Dokumentasi Banner"
            className="w-full h-64 md:h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/85 to-teal-950/70 flex flex-col justify-center p-6 md:p-12 text-white">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-black uppercase tracking-widest bg-cyan-500/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-400/40 text-amber-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                GALERI & DOKUMENTASI WISATA
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif italic text-white leading-tight">
                {t.docsTitle}
              </h2>
              <p className="text-sky-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                {t.docsSub}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-amber-200">
                <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  📸 Foto Real Asli Wisatawan
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  📖 Panduan & Tips Wisata
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  ⭐ Trip Terverifikasi 100%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-950 border border-slate-800 p-1.5 rounded-2xl flex gap-2 shadow-xl">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'articles'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Panduan & Artikel Wisata</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Camera className="w-4 h-4 text-amber-300" />
              <span>Galeri Foto Wisatawan</span>
            </button>
          </div>
        </div>

        {/* ARTICLES TAB */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
            {documentationArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-cyan-400 transition-all duration-500 flex flex-col justify-between preserve-3d rotate-3d-hover"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title[currentLang]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-black px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white font-serif italic group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title[currentLang]}
                    </h3>

                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed font-normal">
                      {article.summary[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-cyan-300 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-2xl border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-cyan-400/50"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 perspective-1000">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(photo.url)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl hover:border-cyan-400 cursor-pointer preserve-3d rotate-3d-hover"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                  <h4 className="text-white font-black text-base font-serif italic">{photo.title}</h4>
                  <span className="text-amber-300 text-xs font-bold">{photo.location}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl my-auto p-6 space-y-4 text-slate-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 p-2 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title[currentLang]}
              className="w-full h-56 md:h-72 object-cover rounded-2xl"
            />

            <div className="flex items-center gap-3 text-xs text-cyan-300 font-bold">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-300" />
                {selectedArticle.author}
              </span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-white font-serif italic">
              {selectedArticle.title[currentLang]}
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-normal">
              {selectedArticle.content[currentLang]}
            </p>
          </div>
        </div>
      )}

      {/* Lightbox Photo Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Gallery Lightbox" className="w-full h-full object-contain rounded-3xl border-2 border-cyan-400/30" />
          </div>
        </div>
      )}
    </section>
  );
};

