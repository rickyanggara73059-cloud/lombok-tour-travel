import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE } from "../config/site";
interface WhatsAppFloatingButtonProps {
  currentLang: Language;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const t = translations[currentLang];

const handleSend = (e: React.FormEvent) => {
  e.preventDefault();

  const finalMsg = userMsg || t.whatsappDefaultMsg;

  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(finalMsg)}`;

  window.open(url, "_blank");

  setUserMsg("");
  setIsOpen(false);
};

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-[#FDFCF8] border border-[#E6E4D9] rounded-3xl shadow-2xl overflow-hidden animate-fade-in mb-2 text-[#4A4A40]">
          {/* Top Bar */}
          <div className="bg-[#5A5A40] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight font-serif italic">{t.whatsappChatHeader}</h4>
                <p className="text-[10px] text-[#E6E4D9]">{t.whatsappChatSub}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSend} className="p-4 space-y-3 bg-[#FDFCF8]">
            <div className="p-3 bg-[#F5F4EE] rounded-2xl text-xs text-[#4A4A40] border border-[#E6E4D9] leading-relaxed">
              Halo! CS Travel Consultant kami online 24 jam untuk menjawab pertanyaan seputar paket wisata Lombok & sewa mobil.
            </div>

            <textarea
              rows={3}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Tulis pesan Anda di sini..."
              className="w-full bg-[#F5F4EE] text-[#4A4A40] text-xs rounded-xl p-3 border border-[#E6E4D9] focus:outline-none focus:border-[#8B8B6B]"
            />

            <button
              type="submit"
              className="w-full bg-[#5A5A40] hover:bg-[#434330] text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 fill-white" />
              <span>Buka WhatsApp Chat</span>
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#5A5A40] hover:bg-[#434330] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all relative group cursor-pointer"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A373] border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A373] border-2 border-white rounded-full" />
      </button>
    </div>
  );
};
