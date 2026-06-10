import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // First item open by default

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-24 bg-white dark:bg-[#1E1815] relative border-b border-[#E5D1C1]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="faq-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Frequently Asked Questions
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="faq-title">
            Your Questions, <span className="italic text-[#E1B382]">Answered</span>
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/80 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Got queries about our safety guidelines, acrylic ingredients, packages, or bookings? Find critical answers below, or reach out anytime!
          </p>
        </div>

        {/* FAQs Accordions List */}
        <div className="space-y-4" id="faqs-accordion-list">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#E5D1C1]/60 dark:border-[#2D241E]/50 rounded-none overflow-hidden bg-[#FAF7F2]/40 dark:bg-[#251E1A] transition-colors duration-300"
                id={`faq-accordion-item-${faq.id}`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 hover:bg-[#FAF7F2] dark:hover:bg-[#1E1815] text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="font-serif font-bold text-[#2D241E] dark:text-zinc-50 text-sm sm:text-base tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </button>

                {/* Animated Expand Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-left border-t border-[#E5D1C1]/30 dark:border-[#2D241E]/30">
                        <p className="font-sans text-xs sm:text-sm text-zinc-750 dark:text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
