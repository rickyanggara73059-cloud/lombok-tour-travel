import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, Users, MapPin, Car, Compass, Calculator, MessageSquare, Sparkles, User, Phone, Globe } from 'lucide-react';
import { Language } from '../types';
import { tourPackages } from '../data/packages';
import { carOptions } from '../data/cars';
import { translations } from '../data/translations';
import { getLangText } from '../utils/lang';
import { SITE } from "../config/site";
interface BookingModalProps {
  isOpen: boolean;
  initialPackageId?: string;
  initialCarId?: string;
  currentLang: Language;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialPackageId = '',
  initialCarId = '',
  currentLang,
  onClose
}) => {
  if (!isOpen) return null;

  const t = translations[currentLang];

  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [packageId, setPackageId] = useState(initialPackageId);
  const [carId, setCarId] = useState(initialCarId);
  const [travelDate, setTravelDate] = useState('');
  const [durationDays, setDurationDays] = useState(1);
  const [paxAdults, setPaxAdults] = useState(2);
  const [paxChildren, setPaxChildren] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('Hotel Senggigi / Mataram');
  const [customRequests, setCustomRequests] = useState('');

  useEffect(() => {
    if (initialPackageId) setPackageId(initialPackageId);
    if (initialCarId) setCarId(initialCarId);
  }, [initialPackageId, initialCarId]);

  const selectedPackage = tourPackages.find(p => p.id === packageId);
  const selectedCar = carOptions.find(c => c.id === carId);

  // Price Calculation
  const calculateTotalEstimate = () => {
    let total = 0;
    if (selectedPackage) {
      total += selectedPackage.priceIdr * Math.max(1, paxAdults + paxChildren * 0.5);
    }
    if (selectedCar) {
      total += selectedCar.priceFullDayIdr * durationDays;
    }
    return total;
  };

  const estimatedTotalIdr = calculateTotalEstimate();

  const formatCurrencyIdr = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleSubmitWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !whatsappNumber || !originCity || !travelDate) {
      alert('Mohon lengkapi Nama, Nomor HP/WhatsApp, Asal Kota, dan Tanggal Keberangkatan.');
      return;
    }

    const pkgTitle = selectedPackage ? getLangText(selectedPackage.title, currentLang) : 'Custom Itinerary Lombok';
    const carTitle = selectedCar ? selectedCar.name : 'Tanpa Sewa Mobil Tambahan';

    const messageText = `🌊 *PACIFIC LOMBOK TOUR & TRAVEL* 🌊
===================================
📋 *FORM PEMESANAN TOUR LOMBOK*

👤 *Nama Lengkap:* ${fullName}
📱 *Nomor HP / WA:* ${whatsappNumber}
🏙️ *Asal Kota / Daerah:* ${originCity}
📅 *Tanggal Keberangkatan:* ${travelDate} (${durationDays} Hari)
🗺️ *Paket Tour:* ${pkgTitle}
🚘 *Sewa Mobil:* ${carTitle}
👥 *Jumlah Peserta:* ${paxAdults} Dewasa, ${paxChildren} Anak
📍 *Lokasi Penjemputan:* ${pickupLocation}
💬 *Catatan Khusus:* ${customRequests || '-'}

💰 *Estimasi Total:* ${formatCurrencyIdr(estimatedTotalIdr)}

Halo CS Pacific Lombok, mohon informasi ketersediaan jadwal dan prosedur konfirmasi pemesanan ini. Terima kasih!`;

    const encodedMsg = encodeURIComponent(messageText);

const whatsappLink = `${whatsappUrl}?text=${encodedMsg}`;

window.open(whatsappLink, '_blank');
onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto font-sans animate-fade-in text-white">
      <div className="relative w-full max-w-3xl bg-slate-900 border-2 border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col text-slate-200">
        {/* Header */}
        <div className="bg-slate-950 p-5 md:p-6 border-b border-slate-800 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
              <MessageSquare className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-black text-white font-serif italic flex items-center gap-2">
                {t.bookingFormTitle}
                <Sparkles className="w-4 h-4 text-amber-300" />
              </h2>
              <p className="text-xs text-cyan-300 font-bold">
                Direct WhatsApp Instant Confirmation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitWhatsapp} className="p-5 md:p-6 overflow-y-auto space-y-5 text-sm flex-1">
          <p className="text-sky-200 text-xs bg-slate-950 border border-slate-800 p-3.5 rounded-2xl leading-relaxed font-medium">
            {t.bookingFormSub}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                {t.fullName} *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="cth. Budi Santoso"
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 placeholder-slate-500 font-medium"
              />
            </div>

            {/* WhatsApp / HP Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {t.whatsappNumber} *
              </label>
              <input
                type="tel"
                required
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="cth. 08123456789"
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 placeholder-slate-500 font-medium"
              />
            </div>

            {/* Origin City / Country (Asal) */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                {t.originCity} *
              </label>
              <input
                type="text"
                required
                value={originCity}
                onChange={(e) => setOriginCity(e.target.value)}
                placeholder="cth. Jakarta / Surabaya / Bandung"
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 placeholder-slate-500 font-medium"
              />
            </div>

            {/* Travel Date / Tanggal Keberangkatan */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {t.travelDate} *
              </label>
              <input
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 font-medium"
              />
            </div>

            {/* Select Tour Package */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-300" />
                {t.selectPackage}
              </label>
              <select
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 cursor-pointer font-medium"
              >
                <option value="">-- Custom Itinerary / Tanya Dulu --</option>
                {tourPackages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {getLangText(p.title, currentLang)} ({formatCurrencyIdr(p.priceIdr)})
                  </option>
                ))}
              </select>
            </div>

            {/* Select Vehicle Option */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-amber-300" />
                {t.selectCarOptional}
              </label>
              <select
                value={carId}
                onChange={(e) => setCarId(e.target.value)}
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 cursor-pointer font-medium"
              >
                <option value="">-- Tanpa Sewa Mobil Tambahan --</option>
                {carOptions.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({formatCurrencyIdr(c.priceFullDayIdr)}/day)
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Days */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-amber-300">
                {t.duration}
              </label>
              <input
                type="number"
                min={1}
                max={14}
                value={durationDays}
                onChange={(e) => setDurationDays(parseInt(e.target.value) || 1)}
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 font-medium"
              />
            </div>

            {/* Pax Adults */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-300" />
                {t.paxAdults}
              </label>
              <input
                type="number"
                min={1}
                max={50}
                value={paxAdults}
                onChange={(e) => setPaxAdults(parseInt(e.target.value) || 1)}
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 font-medium"
              />
            </div>

            {/* Pax Children */}
            <div className="space-y-1.5">
              <label className="text-xs font-black text-cyan-300">
                {t.paxChildren}
              </label>
              <input
                type="number"
                min={0}
                max={20}
                value={paxChildren}
                onChange={(e) => setPaxChildren(parseInt(e.target.value) || 0)}
                className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 font-medium"
              />
            </div>
          </div>

          {/* Pickup Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {t.pickupLocation}
            </label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 cursor-pointer font-medium"
            >
              <option value="Hotel Senggigi / Mataram">Hotel Senggigi / Mataram</option>
              <option value="Hotel Kuta Mandalika">Hotel Kuta Mandalika</option>
              <option value="Bandara Internasional Lombok (LOP)">Bandara Internasional Lombok (LOP)</option>
              <option value="Pelabuhan Bangsal (ke Gili)">Pelabuhan Bangsal (ke Gili)</option>
              <option value="Pelabuhan Lembar">Pelabuhan Lembar</option>
            </select>
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-300">
              {t.specialRequests}
            </label>
            <textarea
              rows={2}
              value={customRequests}
              onChange={(e) => setCustomRequests(e.target.value)}
              placeholder="Bahasa guide (English/Mandarin/Jepang), ukuran alat snorkeling, makanan halal, dll."
              className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-700 focus:outline-none focus:border-cyan-400 placeholder-slate-500 font-medium"
            />
          </div>

          {/* Estimated Total Calculation */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-slate-200">
              <Calculator className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="font-black text-xs text-white">{t.estimatedPrice}</div>
                <div className="text-[10px] text-slate-400">Subtotal otomatis berdasarkan pilihan</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-amber-300 font-black text-xl font-serif italic">
                {estimatedTotalIdr > 0 ? formatCurrencyIdr(estimatedTotalIdr) : 'Sesuai Request'}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black py-4 rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 text-base transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send className="w-5 h-5 text-slate-950" />
            <span>{t.btnSendWhatsapp}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

