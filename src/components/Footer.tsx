import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { INSTAGRAM_PHOTOS } from '../data';
import { Sparkles, Instagram, Facebook, Twitter, Mail, CheckCircle, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const footerLinksCivil = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Meeting FAQs', href: '#faqs' },
    { name: 'Salon Contact', href: '#contact' },
  ];

  const footerServices = [
    { name: 'Classic Manicure', href: '#services' },
    { name: 'Luxury Manicure', href: '#services' },
    { name: 'Gel extensions', href: '#services' },
    { name: 'Bespoke Nail Art', href: '#services' },
    { name: 'Spa Treatments', href: '#services' },
  ];

  return (
    <footer id="main-footer" className="bg-[#2D241E] text-zinc-300 border-t border-[#E5D1C1]/20 pt-16 pb-12 relative overflow-hidden text-left" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* 1. Instagram Feed strip ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" id="insta-feed-section">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" />
              Instagram Feed
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-white font-medium mt-1">
              Follow/Tag <span className="italic text-[#E1B382]">@NailPolishServices</span>
            </h3>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[#D4AF37] hover:text-white pb-0.5 border-b border-[#D4AF37]/40 hover:border-white transition-all font-sans uppercase tracking-[0.2em]"
          >
            Visit Profile
          </a>
        </div>

        {/* Strip Grid of 6 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="instagram-photos-grid">
          {INSTAGRAM_PHOTOS.map((photo, pidx) => (
            <div
              key={pidx}
              className="relative aspect-square rounded-none overflow-hidden group cursor-pointer bg-[#251E1A] border border-[#E5D1C1]/10"
            >
              <img
                src={photo.url}
                alt="Manicure visual from nailpolish services instagram feed"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Insta Hover pane */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white space-x-1.5 font-mono text-xs">
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span className="font-semibold">{photo.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-[#E5D1C1]/10 max-w-7xl mx-auto mb-16" />

      {/* 2. Primary 4-Column Footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12" id="footer-menu-grid">
        
        {/* Col 1: Bio */}
        <div className="lg:col-span-4 space-y-5" id="footer-col-1">
          <a href="#" className="flex items-center space-x-2 w-fit">
            <span className="p-1.5 bg-[#FAF7F2]/10 rounded-none text-[#D4AF37]">
              <Sparkles className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg tracking-[0.1em] text-white uppercase">
                NailPolish
              </span>
              <span className="text-[9px] tracking-[0.3em] -mt-1 text-[#D4AF37] font-sans font-medium uppercase">
                Services
              </span>
            </div>
          </a>

          <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-sm">
            Setting global boutique benchmarks in clinical nail safety, organic nourishment rituals, and hand-painted customizable high-fashion nail art in Los Angeles.
          </p>

          <div className="flex space-x-3" id="footer-social-icons">
            <a href="https://facebook.com" className="p-2 bg-[#251E1A] hover:bg-[#D4AF37] rounded-none text-zinc-300 hover:text-[#2D241E] transition-colors border border-[#E5D1C1]/10" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" className="p-2 bg-[#251E1A] hover:bg-[#D4AF37] rounded-none text-zinc-300 hover:text-[#2D241E] transition-colors border border-[#E5D1C1]/10" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" className="p-2 bg-[#251E1A] hover:bg-[#D4AF37] rounded-none text-zinc-300 hover:text-[#2D241E] transition-colors border border-[#E5D1C1]/10" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick coordinates links */}
        <div className="lg:col-span-2 space-y-4" id="footer-col-2">
          <h4 className="font-serif text-xs font-bold text-white tracking-[0.2em] uppercase">
            Quick Nav
          </h4>
          <ul className="space-y-2 text-xs" id="quick-links-ul">
            {footerLinksCivil.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services categories links */}
        <div className="lg:col-span-2 space-y-4" id="footer-col-3">
          <h4 className="font-serif text-xs font-bold text-white tracking-[0.2em] uppercase">
            Treatments Setup
          </h4>
          <ul className="space-y-2 text-xs" id="services-links-ul">
            {footerServices.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Newsletter Subscriber */}
        <div className="lg:col-span-4 space-y-4 text-left" id="footer-newsletter-box">
          <h4 className="font-serif text-xs font-bold text-white tracking-[0.2em] uppercase">
            Boutique Newsletter
          </h4>
          <p className="font-sans text-xs text-zinc-300 leading-normal max-w-sm">
            Subscribe to our seasonal beauty journal and secure $10 off your first luxurious paraffin wax manicure session.
          </p>

          <AnimatePresence mode="wait">
            {subscribed ? (
              <div className="p-3 bg-[#251E1A] border border-[#D4AF37]/30 text-[#D4AF37] rounded-none text-xs flex items-center space-x-2" id="subscribe-badge-success">
                <CheckCircle className="w-4 h-4" />
                <span>Subscription Secured!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2 flex" id="newsletter-foot-form">
                <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pr-12 pl-4 py-2.5 bg-[#251E1A] border border-[#E5D1C1]/20 rounded-none text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4AF37] text-[#2D241E] rounded-none flex items-center justify-center hover:bg-white hover:text-[#2D241E] transition-colors cursor-pointer"
                  aria-label="Secure Subscription"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>

      <hr className="border-[#E5D1C1]/10 max-w-7xl mx-auto my-8" />

      {/* 3. Bottom copyright coordinates bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 gap-4" id="footer-bottom-copyright">
        <p>© 2026 NailPolish Services. Crafted with exquisite precision. All rights reserved.</p>
        
        <div className="flex space-x-6 text-zinc-400" id="footer-disclaimers">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
}
