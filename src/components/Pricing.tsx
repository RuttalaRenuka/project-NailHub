import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PACKAGES } from '../data';
import { Check, Sparkles } from 'lucide-react';

interface PricingProps {
  onBookService: (packageName: string) => void;
}

export default function Pricing({ onBookService }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-[#FAF7F2] dark:bg-[#1E1815] relative overflow-hidden border-b border-[#E5D1C1]/20">
      
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#E5D1C1]/10 dark:bg-[#2D241E]/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FAF7F2]/20 dark:bg-[#2D241E]/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="pricing-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Curated Master Packages
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="pricing-title">
            Bespoke Treatment <span className="italic text-[#E1B382]">Bundles</span>
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/80 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Choose from our specialized, full-service health and beauty bundles designed for standard monthly care, specialized weddings, or complete sensory spa comfort.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch" id="pricing-grid">
          {PRICING_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`rounded-none p-6 sm:p-8 flex flex-col justify-between border relative transition-all duration-300 h-full ${
                pkg.isPopular
                  ? 'bg-[#2D241E] dark:bg-[#251E1A] border-[#D4AF37] text-white shadow-xl lg:translate-y-[-10px] z-10'
                  : 'bg-white dark:bg-[#251E1A] border-[#E5D1C1]/60 dark:border-[#2D241E]/45 text-[#2D241E] dark:text-zinc-100 shadow-xs hover:shadow-md'
              }`}
              id={`pricing-card-${pkg.id}`}
            >
              {/* Featured Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%] bg-[#D4AF37] text-white px-3 py-1 rounded-none text-[9px] font-sans font-bold uppercase tracking-widest flex items-center space-x-1 shadow-xs">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Package Meta Info */}
              <div className="text-left">
                <h3 className={`font-serif text-lg font-bold tracking-tight ${pkg.isPopular ? 'text-[#E1B382]' : 'text-[#2D241E] dark:text-zinc-100'}`}>
                  {pkg.name}
                </h3>
                <p className={`font-serif italic text-xs mt-1 leading-snug ${pkg.isPopular ? 'text-zinc-300' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {pkg.subtitle}
                </p>

                {/* Pricing Line */}
                <div className="my-6 flex items-baseline">
                  <span className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
                    {pkg.price}
                  </span>
                  <span className={`font-sans text-[10px] uppercase tracking-wider ml-2 ${pkg.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    / bespoke
                  </span>
                </div>

                <hr className={`my-6 ${pkg.isPopular ? 'border-zinc-800' : 'border-[#E5D1C1]/40'}`} />

                {/* Features check list */}
                <ul className="space-y-3.5 mb-8" id="pkg-features-list">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start space-x-3 text-left">
                      <span className={`p-0.5 rounded-none mt-0.5 shrink-0 ${
                        pkg.isPopular 
                          ? 'text-[#D4AF37]' 
                          : 'text-[#D4AF37] dark:text-[#E1B382]'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className={`font-sans text-xs leading-tight ${pkg.isPopular ? 'text-zinc-200' : 'text-zinc-650 dark:text-zinc-350'}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA Button */}
              <div className="mt-auto">
                <button
                  onClick={() => onBookService(`${pkg.name} (${pkg.price})`)}
                  className={`w-full py-3.5 text-[10px] font-bold tracking-widest uppercase rounded-none transition-all duration-300 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#D4AF37] hover:bg-white text-white hover:text-[#2D241E] shadow-sm'
                      : 'bg-[#FAF7F2] dark:bg-[#1E1815] hover:bg-[#2D241E] dark:hover:bg-[#D4AF37] hover:text-white dark:hover:text-[#2D241E] text-[#2D241E] dark:text-[#E1B382] border border-[#E5D1C1]/20'
                  }`}
                >
                  Book Bundle Now
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
