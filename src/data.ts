import { Service, TeamMember, Testimonial, PricingPackage, PortfolioItem, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'classic-manicure',
    name: 'Classic Manicure',
    description: 'Nail shaping, cuticle care, hand massage, and professional lacquer application in your choice of shade.',
    price: '$35',
    iconName: 'Sparkles',
    category: 'Manicure',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'luxury-manicure',
    name: 'Luxury Manicure',
    description: 'An indulgent manicure combining organic exfoliation, paraffin wax treatment, thermal mittens, and standard polish.',
    price: '$55',
    iconName: 'Crown',
    category: 'Manicure',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'classic-pedicure',
    name: 'Classic Pedicure',
    description: 'Relaxing foot soak, scrub exfoliation, nail trimming, callus smoothing, and professional polish application.',
    price: '$45',
    iconName: 'Heart',
    category: 'Pedicure',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gel-extensions',
    name: 'Gel Nail Extensions',
    description: 'Modern non-toxic gel extension overlay customized to your length and shape. Glossy, durable, and natural-looking.',
    price: '$85',
    iconName: 'Gem',
    category: 'Gel Nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'acrylic-nails',
    name: 'Acrylic Nails',
    description: 'Full set of premium acrylic nail extensions applied with artisan precision for maximum durability and strength.',
    price: '$75',
    iconName: 'Layers',
    category: 'Acrylic Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nail-art-custom',
    name: 'Nail Art & Custom Designs',
    description: 'Hand-painted details, chrome, metallic accents, Swarovski crystals, foils, or minimalist geometric custom nail designs.',
    price: '$25+',
    iconName: 'Paintbrush',
    category: 'Nail Art',
    image: '/src/assets/images/hero_nail_art_1781080924595.png'
  },
  {
    id: 'bridal-package',
    name: 'Bridal Nail Packages',
    description: 'Elegant custom wedding-ready nails featuring intricate lace, pearlescent detailing, and relaxing spa champagne services.',
    price: '$120+',
    iconName: 'Gift',
    category: 'Bridal',
    image: '/src/assets/images/bridal_nails_1781080956482.png'
  },
  {
    id: 'nail-repair',
    name: 'Nail Repair & Maintenance',
    description: 'Professional repair of cracked or broken nails with silk wrap or gel infills, restoring integrity securely.',
    price: '$15',
    iconName: 'CheckCircle',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'polish-application',
    name: 'Nail Polish Application',
    description: 'Nail trim, buff, and quick application of long-wear premium lacquer or high-shine hybrid gel polish.',
    price: '$20',
    iconName: 'Feather',
    category: 'Polish',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'spa-treatments',
    name: 'Spa Treatments',
    description: 'Hydrating clay masks, essential oil hot towel wraps, aromatherapy, and deeply healing extended zone foot and calf massage.',
    price: '$50',
    iconName: 'Flower2',
    category: 'Spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'elena',
    name: 'Elena Rostova',
    position: 'Creative Director & Master Artist',
    experience: '12 Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    instagram: 'elena_nails_salon',
    facebook: 'elena.rostova.nails',
    linkedin: 'elena-rostova-nailpolish'
  },
  {
    id: 'chloe',
    name: 'Chloe Mercer',
    position: 'Senior Nail Technician',
    experience: '8 Years Experience',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    instagram: 'chlo_mercer_nailart',
    facebook: 'chloe.mercer.beauty'
  },
  {
    id: 'sophia',
    name: 'Sophia Lin',
    position: 'Nail Extension Specialist',
    experience: '6 Years Experience',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    instagram: 'sophia_gel_nails',
    linkedin: 'sophia-lin-nails'
  },
  {
    id: 'harper',
    name: 'Harper Joy',
    position: 'Spa Therapist & Pedicurist',
    experience: '7 Years Experience',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    instagram: 'harper_massage_spa'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Victoria Hawthorne',
    rating: 5,
    reviewText: 'NailPolish Services is literally my absolute favorite sanctuary! Elena designed custom nail art for my birthday and they held up perfectly for over 4 weeks without a single chip. Exceptionally hygienic and stunning decor.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    date: 'June 4, 2026',
    service: 'Nail Art & Custom Designs'
  },
  {
    id: 't2',
    name: 'Gabriella Reynolds',
    rating: 5,
    reviewText: 'I booked the Bridal Package for myself and my bridesmaids. The experience was blissful — champagne, a relaxing hand scrub, and the most exquisite pearl-themed nails. The level of care and hygiene is incredible!',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200',
    date: 'May 28, 2026',
    service: 'Bridal Nail Packages'
  },
  {
    id: 't3',
    name: 'Samantha Wright',
    rating: 5,
    reviewText: 'Their gel extensions are the best in the city. Sophia Lin works so quickly but is perfection itself! They look so incredibly natural and thin, yet they are virtually indestructible. Highly recommend this salon.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200',
    date: 'May 12, 2026',
    service: 'Gel Nail Extensions'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic-care',
    name: 'Basic Care Package',
    price: '$45',
    subtitle: 'Essential care for healthy, polished nails',
    features: [
      'Classic Manicure',
      'Cuticle care and dynamic hydration',
      'Nail shaping and buffing',
      'Premium classic lacquer polish',
      'Warm towel wrap treatment',
      'Herbal hand tea'
    ],
    isPopular: false
  },
  {
    id: 'premium-beauty',
    name: 'Premium Beauty Package',
    price: '$85',
    subtitle: 'Our signature combination for high gloss and stamina',
    features: [
      'Luxury Manicure or Pedicure',
      'Long-lasting Hybrid Gel polish',
      'Gentle exfoliating hand scrub',
      'Nourishing hand and arm massage',
      'Strengthening nail shield therapy',
      'Complementary beverage'
    ],
    isPopular: true
  },
  {
    id: 'luxury-spa',
    name: 'Luxury Spa Package',
    price: '$120',
    subtitle: 'Ultimate relaxation & deep hydration ritual',
    features: [
      'Gold Mineral hand/foot soak',
      'Warm Paraffin moisture therapy',
      'Classic Manicure & Pedicure combo',
      '20-minute hot stone calf massage',
      'Your choice of premium polishes',
      'Aromatherapy stress release'
    ],
    isPopular: false
  },
  {
    id: 'bridal',
    name: 'Bridal Package',
    price: '$150',
    subtitle: 'Elegant perfection for your special wedding day',
    features: [
      'Bridal custom consultation & mockup',
      'Custom luxury Gel Extensions',
      'Intricate, bespoke fine line hand Art',
      'Real gemstone / perl bead inclusions',
      'Restorative organic rose hand mask',
      'Complimentary premium Champagne glass'
    ],
    isPopular: false
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Bespoke Pearl Bridal Elegance',
    category: 'bridal',
    image: '/src/assets/images/bridal_nails_1781080956482.png',
    likes: 245
  },
  {
    id: 'p2',
    title: 'Rose Gold Metallic Marble Art',
    category: 'nail-art',
    image: '/src/assets/images/hero_nail_art_1781080924595.png',
    likes: 512
  },
  {
    id: 'p3',
    title: 'Emerald Green & Chrome Extension',
    category: 'gel-nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=600',
    likes: 189
  },
  {
    id: 'p4',
    title: 'Monochromatic Acrylic Stilettos',
    category: 'acrylic-nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    likes: 304
  },
  {
    id: 'p5',
    title: 'Celestial Dream Hand-painted Art',
    category: 'nail-art',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    likes: 420
  },
  {
    id: 'p6',
    title: 'Luxury Gold Leaf Citrus Pedicure',
    category: 'pedicure',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    likes: 218
  },
  {
    id: 'p7',
    title: 'Minimalist Ivory & Champagne Gel',
    category: 'gel-nails',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
    likes: 153
  },
  {
    id: 'p8',
    title: 'Blossom Pink Acrylic Coffin Set',
    category: 'acrylic-nails',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600',
    likes: 279
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How do I book an appointment?',
    answer: 'You can book easily right here on our booking section by filling out your contact info, selecting your favorite service, and picking a desired date and time. You will get an instant confirmation card and code'
  },
  {
    id: 'faq2',
    question: 'What products do you use?',
    answer: 'We exclusively use premium, certified cruelty-free, and non-toxic professional brands (specifically 9-free gel systems) that protect natural nails while providing beautiful, indestructible shine and durability.'
  },
  {
    id: 'faq3',
    question: 'How long do nail extensions last?',
    answer: 'Typically, both gel extensions and acrylic nails last between 3 to 4 weeks before requiring an infill or maintenance appointment, depending on your natural nail growth rate and daily active lifestyle.'
  },
  {
    id: 'faq4',
    question: 'Do you offer bridal packages?',
    answer: 'Yes! We offer single-person custom bridal designs as well as all-inclusive Bridal Group packages with private champagne services, premium hand pampering, and personalized custom art coordinates.'
  },
  {
    id: 'faq5',
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit and debit cards, contactless payments (Apple Pay, Google Pay), online secure bank transfers, and standard cash at our physical checkout reception desk.'
  }
];

export const INSTAGRAM_PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=300', likes: 120 },
  { url: '/src/assets/images/hero_nail_art_1781080924595.png', likes: 512 },
  { url: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=300', likes: 98 },
  { url: '/src/assets/images/bridal_nails_1781080956482.png', likes: 245 },
  { url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=300', likes: 310 },
  { url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=300', likes: 154 }
];
