import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // auto-rotate every 6s
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white dark:bg-[#1E1815] relative overflow-hidden border-b border-[#E5D1C1] dark:border-[#2D241E]/30">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-4 w-40 h-40 bg-[#FAF7F2] dark:bg-zinc-950/10 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Testimonial Quote element */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-[#F4EDE5] dark:bg-[#2D241E] rounded-none shadow-xs text-[#D4AF37]">
            <Quote className="w-6 h-6 transform rotate-180" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-12 space-y-3" id="testimonials-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Elite Client Stories
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="testimonials-title">
            Loved By <span className="italic text-[#E1B382]">Thousands</span>
          </h2>
        </div>

        {/* Slider Box */}
        <div className="relative min-h-[300px] flex items-center justify-center" id="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="bg-[#FAF7F2] dark:bg-[#251E1A] rounded-none p-6 sm:p-10 border border-[#E5D1C1] dark:border-[#2D241E]/40 shadow-xs relative w-full"
            >
              {/* Star review ratings */}
              <div className="flex justify-center space-x-1 text-[#D4AF37] mb-6" id="review-stars">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-sm sm:text-base md:text-lg text-[#2D241E]/90 dark:text-zinc-200 leading-relaxed italic mb-8 max-w-2xl mx-auto">
                "{TESTIMONIALS_DATA[currentIndex].reviewText}"
              </blockquote>

              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-3 sm:space-y-0">
                <div className="relative w-14 h-14 rounded-none overflow-hidden border border-[#E5D1C1]/60 dark:border-zinc-700 shadow-xs">
                  <img
                    src={TESTIMONIALS_DATA[currentIndex].image}
                    alt={TESTIMONIALS_DATA[currentIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left text-center sm:text-left">
                  <h4 className="font-sans font-bold text-[#2D241E] dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    {TESTIMONIALS_DATA[currentIndex].name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-0.5 text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">
                    <span>Verified Client</span>
                    <span className="w-1 h-1 rounded-full bg-[#E5D1C1]"></span>
                    <span className="text-[#D4AF37]">{TESTIMONIALS_DATA[currentIndex].service}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-16px] sm:left-[-32px] p-2.5 rounded-none bg-white dark:bg-[#1E1815] border border-[#E5D1C1] text-[#2D241E] dark:text-zinc-300 hover:bg-[#F4EDE5] dark:hover:bg-[#2D241E] shadow-xs transition-all scale-90 sm:scale-100 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-16px] sm:right-[-32px] p-2.5 rounded-none bg-white dark:bg-[#1E1815] border border-[#E5D1C1] text-[#2D241E] dark:text-zinc-300 hover:bg-[#F4EDE5] dark:hover:bg-[#2D241E] shadow-xs transition-all scale-90 sm:scale-100 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel indicator Dots */}
        <div className="flex justify-center space-x-2 pb-2 mt-8" id="testimonials-dots">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 duration-300 rounded-none cursor-pointer ${
                index === currentIndex 
                  ? 'w-6 bg-[#2D241E] dark:bg-[#D4AF37]' 
                  : 'w-2 bg-[#E5D1C1] dark:bg-zinc-800 hover:bg-[#2D241E]'
              }`}
              aria-label={`Go to Testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
