import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#FAF7F2] dark:bg-[#1E1815] overflow-hidden pt-24 pb-12 border-b border-[#E5D1C1] dark:border-[#2D241E]/30"
    >
      {/* Decorative luxury hairline background strip */}
      <div className="absolute top-1/2 -left-8 transform -rotate-90 text-[9px] tracking-[0.8em] font-light text-[#2D241E] dark:text-[#E5D1C1] opacity-10 uppercase pointer-events-none select-none">
        LUXURY NAIL ARTISTRY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
            id="hero-content"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold italic">
              Bespoke Artistry
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-[1.05] tracking-tight text-[#2D241E] dark:text-white" id="hero-title">
              Transforming <br />
              <span className="ml-8 sm:ml-12 text-[#E1B382]">Nails</span> into <br />
              Works of Art.
            </h1>

            <p className="font-serif text-sm sm:text-base leading-relaxed text-[#2D241E]/80 dark:text-zinc-300 italic max-w-sm mt-4 font-serif" id="hero-description">
              Professional nail care, creative nail art, and luxury beauty treatments delivered with excellence in our rose-gold-themed sanctuary.
            </p>

            {/* Action CTA with Editorial Styles */}
            <div className="flex flex-wrap gap-4 pt-4" id="hero-actions">
              <a
                href="#booking"
                className="border border-[#2D241E] dark:border-zinc-300 px-6 py-3.5 text-[10px] uppercase tracking-widest font-semibold text-[#2D241E] dark:text-white hover:bg-[#2D241E] hover:text-[#FAF7F2] dark:hover:bg-white dark:hover:text-[#2D241E] transition-all duration-300"
              >
                Book Appointment
              </a>
              <a
                href="#portfolio"
                className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-semibold hover:opacity-75 transition-opacity"
              >
                <span className="h-[1px] w-8 bg-[#D4AF37]"></span>
                <span className="text-[#2D241E] dark:text-zinc-200">View Portfolio</span>
              </a>
            </div>

            {/* Micro details stats bar - elegant hairline bordered dividers */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5D1C1] dark:border-[#2D241E]/50 max-w-md" id="hero-stats">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-medium text-[#D4AF37]">10k+</p>
                <p className="text-[9px] font-sans text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#2D241E] dark:text-white">Est. 2018</p>
                <p className="text-[9px] font-sans text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">Nail Sanctuary</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-medium text-[#D4AF37]">4.9★</p>
                <p className="text-[9px] font-sans text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Images - Collage styled layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center"
            id="hero-visual"
          >
            {/* Elegant Background frame of rose gold / marble */}
            <div className="absolute inset-0 bg-[#E5D1C1]/20 dark:bg-[#2D241E]/10 border border-[#E5D1C1] dark:border-[#2D241E]/40 rounded-none scale-95 translate-y-4 translate-x-4 -z-10" />

            {/* Custom generated primary hero image with elegant shadow frame */}
            <div className="relative overflow-hidden rounded-none shadow-xl border border-[#E5D1C1] dark:border-zinc-800 group aspect-[4/3] w-full max-w-[500px]">
              <img
                src="/src/assets/images/hero_nail_art_1781080924595.png"
                alt="Luxury manicured nails with soft pink and rose gold polish art"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/40 via-transparent to-transparent opacity-80" />
              
              {/* Glass overlay with client note */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 dark:bg-[#1E1815]/95 border border-[#E5D1C1] dark:border-zinc-800 p-4 rounded-none text-[#2D241E] dark:text-white">
                <p className="font-serif text-xs italic">"Absolutely flawless art, custom designed with beautiful gold flakes and lasting durability!"</p>
                <div className="flex justify-between items-center mt-2 border-t border-[#E5D1C1] dark:border-zinc-800 pt-2 text-[10px]">
                  <span className="font-sans font-semibold tracking-wider uppercase opacity-90">— Chloe Mercer, Artist</span>
                  <div className="text-[#D4AF37]">★ ★ ★ ★ ★</div>
                </div>
              </div>
            </div>

            {/* Dynamic floating badge */}
            <div className="absolute -top-3 -right-3 md:right-4 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1] dark:border-zinc-800 px-4 py-3 rounded-none shadow-md flex items-center space-x-3 rotate-1">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                ★
              </div>
              <div className="text-left">
                <p className="text-[8px] font-sans text-zinc-400 uppercase tracking-widest leading-none">Hygiene</p>
                <p className="text-[10px] font-serif italic text-[#2D241E] dark:text-white mt-1">Sterilized Safety</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
