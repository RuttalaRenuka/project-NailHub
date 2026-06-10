export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  iconName: string;
  category: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  image: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  reviewText: string;
  image: string;
  date: string;
  service: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  isPopular: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'nail-art' | 'gel-nails' | 'acrylic-nails' | 'pedicure';
  image: string;
  likes: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}
