export type Language = 'id' | 'en' | 'zh' | 'ja' | 'de' | 'fr' | 'ru' | 'ko' | 'es' | 'ar';

export type PackageCategory = 
  | 'all'
  | 'gili'
  | 'rinjani'
  | 'surf'
  | 'culture'
  | 'mandalika'
  | 'waterfall'
  | 'city'
  | 'fishing'
  | 'car';

export interface TourPackage {
  id: string;
  title: Record<string, string>;
  category: PackageCategory;
  duration: Record<string, string>;
  location: string;
  priceIdr: number;
  priceUsd: number;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  image: string;
  gallery: string[];
  description: Record<string, string>;
  highlights: Record<string, string[]>;
  itinerary: {
    day: number;
    title: Record<string, string>;
    activities: Record<string, string[]>;
  }[];
  included: Record<string, string[]>;
  excluded: Record<string, string[]>;
}

export interface CarOption {
  id: string;
  name: string;
  category: 'mpv' | 'suv' | 'van' | 'luxury' | 'bike';
  capacity: number;
  luggage: number;
  transmission: 'Manual' | 'Automatic' | 'Both';
  price12HoursIdr: number;
  priceFullDayIdr: number;
  image: string;
  included: Record<Language, string[]>;
}

export interface DocumentationArticle {
  id: string;
  title: Record<Language, string>;
  date: string;
  category: string;
  image: string;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  author: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  avatar: string;
  rating: number;
  comment: Record<Language, string>;
  tourTaken: string;
  date: string;
}

export interface BookingFormState {
  fullName: string;
  whatsappNumber: string;
  email: string;
  packageId: string;
  carId: string;
  travelDate: string;
  durationDays: number;
  paxAdults: number;
  paxChildren: number;
  pickupLocation: string;
  customRequests: string;
  language: Language;
}
