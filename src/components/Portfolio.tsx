import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { Heart, Search, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [likes, setLikes] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    PORTFOLIO_ITEMS.forEach(item => {
      initial[item.id] = item.likes;
    });
    return initial;
  });
  const [userLikes, setUserLikes] = useState<Record<string, boolean>>({});
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { name: 'All Work', value: 'all' },
    { name: 'Bridal', value: 'bridal' },
    { name: 'Nail Art', value: 'nail-art' },
    { name: 'Gel Nails', value: 'gel-nails' },
    { name: 'Acrylic Nails', value: 'acrylic-nails' },
    { name: 'Pedicure', value: 'pedicure' },
  ];

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const liked = userLikes[id];
    setLikes(prev => ({
      ...prev,
      [id]: liked ? prev[id] - 1 : prev[id] + 1
    }));
    setUserLikes(prev => ({
      ...prev,
      [id]: !liked
    }));
  };

  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  const openLightbox = (item: PortfolioItem) => {
    const idx = PORTFOLIO_ITEMS.findIndex(p => p.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      const prevIdx = activeLightboxIndex === 0 ? PORTFOLIO_ITEMS.length - 1 : activeLightboxIndex - 1;
      setActiveLightboxIndex(prevIdx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      const nextIdx = activeLightboxIndex === PORTFOLIO_ITEMS.length - 1 ? 0 : activeLightboxIndex + 1;
      setActiveLightboxIndex(nextIdx);
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-[#FAF7F2] dark:bg-[#1E1815] relative border-b border-[#E5D1C1] dark:border-[#2D241E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" id="portfolio-header">
          <div className="text-left space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
                Our Visual Canvas
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="portfolio-title">
              Our Creative <span className="italic text-[#E1B382]">Masterpieces</span>
            </h2>

            <p className="font-serif italic text-sm text-[#2D241E]/70 dark:text-zinc-400 leading-relaxed">
              Take inspiration from our real client nail files. Filter our high-gloss extensions, bespoke watercolor art plates, and gorgeous classic pedicures.
            </p>
          </div>

          {/* Filtering links */}
          <div className="flex flex-wrap gap-2 md:justify-end" id="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer border ${
                  filter === cat.value
                    ? 'bg-[#2D241E] dark:bg-[#D4AF37] text-[#FAF7F2] dark:text-[#2D241E] border-[#2D241E] dark:border-[#D4AF37]'
                    : 'bg-white dark:bg-[#251E1A] text-[#2D241E]/80 dark:text-zinc-300 border-[#E5D1C1] hover:border-[#D4AF37] hover:bg-[#F4EDE5]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid of items */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-none overflow-hidden shadow-xs group cursor-pointer border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 bg-white dark:bg-[#251E1A] mb-6"
                onClick={() => openLightbox(item)}
              >
                {/* Image */}
                <div className="relative overflow-hidden w-full h-auto max-h-[420px] aspect-auto bg-[#FAF7F2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Hover panel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E] via-[#2D241E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" id="card-hover-panel">
                    <span className="text-[9px] font-sans font-bold text-white uppercase tracking-[0.2em] mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-serif text-white text-base font-semibold leading-snug tracking-wide mb-3">
                      {item.title}
                    </h3>
                    
                    <div className="flex justify-between items-center text-white pt-2.5 border-t border-white/10">
                      <span className="text-[9px] font-sans font-bold tracking-widest uppercase hover:underline flex items-center space-x-1" id="lightbox-label">
                        <Search className="w-3 h-3 text-white" />
                        <span>Inspect Design</span>
                      </span>
                      
                      {/* Interactive Love Button */}
                      <button
                        onClick={(e) => handleLike(e, item.id)}
                        className={`p-1.5 rounded-none transition-all ${
                          userLikes[item.id]
                            ? 'bg-red-500 text-white scale-105'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                        aria-label="Like Design"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom detail for static viewing (without hovering) */}
                <div className="p-4 flex justify-between items-center sm:hidden dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                      {item.category.replace('-', ' ')}
                    </span>
                    <p className="text-xs font-semibold text-[#2D241E] dark:text-white truncate max-w-[150px]">
                      {item.title}
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleLike(e, item.id)}
                    className="flex items-center space-x-1 text-zinc-400 hover:text-red-500"
                  >
                    <Heart className={`w-3.5 h-3.5 ${userLikes[item.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    <span className="text-[11px] font-sans">{likes[item.id]}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal overlay view */}
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#1E1815]/95 flex items-center justify-center p-4 backdrop-blur-xs"
              onClick={() => setActiveLightboxIndex(null)}
              id="portfolio-lightbox"
            >
              {/* Outer navigation controls */}
              <button
                onClick={(e) => { e.stopPropagation(); setActiveLightboxIndex(null); }}
                className="absolute top-6 right-6 p-2 rounded-none bg-[#2D241E] border border-[#E5D1C1]/30 text-white hover:bg-black transition-all"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 p-3 rounded-none bg-[#2D241E]/90 border border-[#E5D1C1]/30 text-white hover:bg-black transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 p-3 rounded-none bg-[#2D241E]/90 border border-[#E5D1C1]/30 text-white hover:bg-black transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Central Box frame */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-4xl w-full bg-white dark:bg-[#251E1A] border border-[#E5D1C1] rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image panel */}
                <div className="flex-grow bg-[#FAF7F2] dark:bg-[#1E1815] flex justify-center items-center overflow-hidden h-[40vh] md:h-auto">
                  <img
                    src={PORTFOLIO_ITEMS[activeLightboxIndex].image}
                    alt={PORTFOLIO_ITEMS[activeLightboxIndex].title}
                    className="w-full h-full object-contain md:max-h-[70vh]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details side bar */}
                <div className="p-6 md:p-8 w-full md:w-80 shrink-0 text-left flex flex-col justify-between bg-white dark:bg-[#251E1A] text-[#2D241E] dark:text-white border-t md:border-t-0 md:border-l border-[#E5D1C1] dark:border-[#2D241E]/50">
                  <div className="space-y-4">
                    <span className="text-[9px] font-sans text-[#D4AF37] font-semibold tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {PORTFOLIO_ITEMS[activeLightboxIndex].category.replace('-', ' ')}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-[#2D241E] dark:text-white">
                      {PORTFOLIO_ITEMS[activeLightboxIndex].title}
                    </h3>
                    <p className="font-serif italic text-xs text-[#2D241E]/70 dark:text-zinc-400 leading-relaxed">
                      Captured at our premium sanctuary. Designed using clinical-safe, organic nail nourishment elements and custom hand instruments.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E5D1C1] dark:border-[#2D241E]/40 flex items-center justify-between mt-6">
                    <button
                      onClick={(e) => handleLike(e, PORTFOLIO_ITEMS[activeLightboxIndex].id)}
                      className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-none font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                        userLikes[PORTFOLIO_ITEMS[activeLightboxIndex].id]
                          ? 'bg-red-650 text-white scale-105 shadow-xs'
                          : 'bg-[#F4EDE5] dark:bg-zinc-850/60 text-zinc-750 dark:text-zinc-300 hover:bg-[#E5D1C1]'
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current text-current" />
                      <span>{likes[PORTFOLIO_ITEMS[activeLightboxIndex].id]} likes</span>
                    </button>

                    <a
                      href="#booking"
                      onClick={() => setActiveLightboxIndex(null)}
                      className="px-4 py-2 bg-[#2D241E] dark:bg-[#D4AF37] text-white dark:text-[#2D241E] text-[10px] font-bold tracking-widest rounded-none uppercase hover:bg-[#D4AF37] dark:hover:bg-white transition-colors"
                    >
                      Inquire Art
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
