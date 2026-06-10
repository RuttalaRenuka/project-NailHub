import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import * as Icons from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  
  // Helper to dynamically get the Lucide icon from data name
  const renderIcon = (iconName: string) => {
    // Falls back to Sparkles if not found
    const IconComponent = (Icons as any)[iconName] || Icons.Sparkles;
    return <IconComponent className="w-4 h-4 text-[#D4AF37]" />;
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-[#FAF7F2] dark:bg-[#1E1815] relative border-b border-[#E5D1C1] dark:border-[#2D241E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Our Professional Treatments
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="services-title">
            Artisan Care <span className="italic text-[#E1B382]">&</span> Luxury Pampering
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/70 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed" id="services-subtitle">
            Explore our curated menu of high-end clinical nail services, organic foot therapies, and custom hand-painted nail designs in our rose-gold-themed sanctuary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-[#251E1A] rounded-none overflow-hidden border border-[#E5D1C1] dark:border-[#2D241E]/50 shadow-xs hover:shadow-md hover:border-[#D4AF37] transition-all duration-300 flex flex-col group h-full"
              id={`service-card-${service.id}`}
            >
              {/* Product Card Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Price tag */}
                <div className="absolute top-3 right-3 bg-[#2D241E] dark:bg-[#1E1815] px-3 py-1 rounded-none text-white font-sans text-[10px] font-semibold tracking-wider border border-[#E5D1C1]/20">
                  {service.price}
                </div>

                {/* Floating category */}
                <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/95 dark:bg-[#1E1815]/95 px-2.5 py-0.5 rounded-none text-[8px] font-sans font-bold tracking-widest uppercase text-[#D4AF37] border border-[#E5D1C1] dark:border-[#332A24]">
                  {service.category}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <span className="p-2 bg-[#F4EDE5] dark:bg-zinc-800 rounded-none shrink-0 text-[#D4AF37]">
                    {renderIcon(service.iconName)}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#2D241E] dark:text-zinc-50 tracking-wide">
                    {service.name}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#2D241E]/70 dark:text-zinc-450 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Button container */}
                <div className="mt-auto pt-4 border-t border-[#E5D1C1] dark:border-[#2D241E]/40 animate-duration-100">
                  <button
                    onClick={() => onBookService(service.name)}
                    className="w-full py-2.5 text-[10px] uppercase font-bold tracking-widest bg-transparent border border-[#2D241E] dark:border-zinc-400 text-[#2D241E] dark:text-zinc-200 hover:bg-[#2D241E] hover:text-[#FAF7F2] dark:hover:bg-zinc-100 dark:hover:text-[#2D241E] transition-all duration-300 rounded-none cursor-pointer"
                  >
                    Request Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
