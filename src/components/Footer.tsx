import React from 'react';
import { Compass, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE } from "../config/site";
import { SOCIAL } from "../config/social";

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800 relative pt-16 pb-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top CTA Banner */}
        <div className="bg-slate-900 border-2 border-cyan-400/30 rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-black text-white font-serif italic">
              Siap Memulai Petualangan Laut & Rinjani di Lombok?
            </h3>
            <p className="text-sky-100 text-sm max-w-xl font-normal">
              Hubungi tim spesialis lokal kami untuk berkonsultasi mengenai rencana wisata, pilihan armada mobil, atau pendakian Rinjani.
            </p>
          </div>

          <a
            rel="noreferrer"
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg transition-transform hover:scale-105 shrink-0"
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xl font-black font-serif italic text-white">
  {SITE.name}
</span>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 font-normal">
              Agen Tour & Travel terpercaya di Lombok Nusa Tenggara Barat. Menyediakan paket wisata Gili Trawangan, Rinjani trekking, Kuta Mandalika, air terjun & sewa mobil privat.
            </p>

            <div className="flex items-center gap-3 pt-2">
             <a
  href={SOCIAL.instagram}
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
>
  <Instagram className="w-4 h-4" />
</a>
              <a
  href={SOCIAL.facebook}
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
>
  <Facebook className="w-4 h-4" />
</a>
              <a
  href={SOCIAL.youtube}
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
>
  <Youtube className="w-4 h-4" />
</a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-serif italic font-black text-base">{t.quickLinks}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('packages')} className="hover:text-amber-300 transition-colors cursor-pointer font-medium">
                  Paket Wisata Populer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gili')} className="hover:text-amber-300 transition-colors cursor-pointer font-medium">
                  Wisata 3 Gili & Snorkeling
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rinjani')} className="hover:text-amber-300 transition-colors cursor-pointer font-medium">
                  Trekking Gunung Rinjani
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('car-rental')} className="hover:text-amber-300 transition-colors cursor-pointer font-medium">
                  Sewa Mobil Driver + BBM
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('documentation')} className="hover:text-amber-300 transition-colors cursor-pointer font-medium">
                  Dokumentasi & Blog Wisata
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div className="space-y-3">
            <h4 className="text-white font-serif italic font-black text-base">{t.popularDestinations}</h4>
            <ul className="space-y-2 text-xs font-normal text-slate-300">
              <li>• Gili Trawangan, Meno & Air</li>
              <li>• Sembalun & Puncak Rinjani 3.726m</li>
              <li>• Desa Sade & Desa Ende Sasak</li>
              <li>• Sirkuit Mandalika & Bukit Merese</li>
              <li>• Air Terjun Tiu Keleb & Benang Kelambu</li>
              <li>• Secret Gilis Sekotong (Gili Gede)</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-serif italic font-black text-base">{t.contactUsTitle}</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Jl. Raya Senggigi No. 88, Batulayar, Lombok Barat, NTB 83355</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+62 812-3456-7890 (Call & WA 24 Jam)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Buka Setiap Hari: 07.00 - 22.00 WITA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
  © {new Date().getFullYear()} {SITE.name}. {t.footerRights}
</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Terdaftar Resmi Dinas Pariwisata NTB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
