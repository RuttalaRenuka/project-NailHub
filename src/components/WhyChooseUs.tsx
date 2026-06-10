import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Gem, Compass, CircleDollarSign, Calendar, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Certified Nail Technicians',
      description: 'Our team comprises award-winning master artisans with international certifications in state-of-the-art extensions and skin ergonomics.'
    },
    {
      icon: <Gem className="w-5 h-5" />,
      title: 'Premium Quality Products',
      description: 'We source only premium, clinical-grade polish formulas, hypoallergenic polymers, and nourishing base oils for long-wearing integrity.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Hygienic Environment',
      description: 'We exceed state medical boards. Autoclave sterilized equipment, single-use client liners, and continuous air sterilization purifiers.'
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: 'Customized Designs',
      description: 'Bringing Pinterest feeds to real life. Whether fine-line painted art, holographic finishes, or pearls, we design specifically for you.'
    },
    {
      icon: <CircleDollarSign className="w-5 h-5" />,
      title: 'Affordable Pricing',
      description: 'Transparent flat-rate pricing. Enjoy high-fashion luxury treatment menus without undisclosed extra styling or service fees.'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: 'Flexible Appointments',
      description: 'Easy online booking and cancellation list options. Walk-ins are accommodated warmly based on artist accessibility.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: 'Excellent Customer Service',
      description: 'Warm champagne welcoming, complementary stress-relief neck hot towels, and an unwavering commitment to your utter happiness.'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-24 bg-white dark:bg-[#1E1815] relative border-b border-[#E5D1C1] dark:border-[#2D241E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="why-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Our Elite Promises
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="why-title">
            Why Discerning Clients <br />
            <span className="italic text-[#E1B382]">Choose NailHub</span>
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/70 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed" id="why-subtitle">
            We do not compromise on the tiny details. Discover the luxury standard and custom hospitality details that define our award-winning service boutique.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-6 rounded-none border transition-all duration-300 flex flex-col items-start text-left group ${
                index === 0 
                  ? 'bg-[#F4EDE5] dark:bg-zinc-800/30 border-[#E5D1C1] dark:border-[#2D241E]/50 lg:col-span-1'
                  : 'bg-[#FAF7F2]/40 dark:bg-[#251E1A] border-[#E5D1C1]/60 dark:border-[#2D241E]/40 hover:border-[#D4AF37] hover:bg-white dark:hover:bg-[#2D241E]/20'
              }`}
              id={`why-card-${index}`}
            >
              {/* Feature Icon frame */}
              <div className="p-3 bg-white dark:bg-zinc-800 text-[#D4AF37] rounded-none shadow-xs border border-[#E5D1C1] dark:border-zinc-700/60 transition-transform group-hover:scale-105 duration-300">
                {feature.icon}
              </div>

              <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-[#2D241E] dark:text-white mt-5 mb-2">
                {feature.title}
              </h3>

              <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
