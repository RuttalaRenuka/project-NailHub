import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Shield, UserCheck, Star } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Shield className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Flawless Sterile Hygiene',
      description: 'Your health is our utmost priority. We employ dental-grade sterilization autoclave equipment for all tool sets and follow stringent disinfection rituals.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Premium Non-Toxic Collections',
      description: 'We prioritize clean beauty. Our gel systems, acrylic overlay bases, and lacquer products are rigorously selected for 9-free, vegan & non-toxic safety.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Bespoke Personalized Styles',
      description: 'We do not believe in generic templates. Our certified master technicians consult dynamically with your nail type, skin tone, and visual goals.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white dark:bg-[#1E1815] overflow-hidden relative border-b border-[#E5D1C1] dark:border-[#2D241E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="about-visuals"
          >
            {/* Main Salon Image */}
            <div className="relative rounded-none overflow-hidden shadow-sm border border-[#E5D1C1] dark:border-[#2D241E]/60 aspect-[4/3] max-w-[540px] mx-auto z-10">
              <img
                src="/src/assets/images/about_salon_1781080941250.png"
                alt="Elite chic interior of NailHub boutique salon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Highlight Overlay representing years of success */}
              <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 dark:bg-[#1E1815]/95 px-4 py-3 rounded-none border border-[#E5D1C1] dark:border-[#2D241E]/50 text-[#2D241E] dark:text-white flex items-center space-x-3">
                <span className="font-serif text-3xl font-bold text-[#D4AF37]">8+</span>
                <div className="text-left font-sans leading-none">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500">Years of</p>
                  <p className="text-xs font-semibold">Excellence</p>
                </div>
              </div>
            </div>

            {/* Accent background block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F4EDE5] dark:bg-zinc-800/10 -z-10" />
          </motion.div>

          {/* Column 2: Content Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-left"
            id="about-content"
          >
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
                About Our Sanctuary
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="about-title">
              Crafting Flawless Luxury <br />
              <span className="italic text-[#E1B382]">For Your Nails</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#2D241E]/80 dark:text-zinc-300 leading-relaxed" id="about-intro">
              Founded in 2018, <strong>NailHub</strong> has grown into an award-winning center for high-fashion manicures, pedicures, and nail structural repairs. We believe nail care is a form of exquisite living — an elegant self-expression designed to enhance confidence and inspire.
            </p>

            {/* Mission Section */}
            <div className="bg-[#F4EDE5] dark:bg-zinc-800/30 p-5 rounded-none border border-[#E5D1C1] dark:border-[#2D241E]/40" id="about-mission">
              <p className="font-serif text-[#D4AF37] font-semibold italic text-xs uppercase tracking-wider">
                Our Mission Statement:
              </p>
              <p className="font-serif text-xs sm:text-sm text-[#2D241E] dark:text-zinc-300 mt-1.5 leading-relaxed italic">
                "To set global standards in wellness, immaculate hygiene, and creative precision. We deliver long-wearing, non-toxic beauty luxury custom-tailored to the uniqueness of every single hand"
              </p>
            </div>

            {/* Technical highlight cards */}
            <div className="mt-4 space-y-4" id="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="flex space-x-4 items-start">
                  <div className="p-2.5 bg-[#F4EDE5] dark:bg-zinc-800/50 rounded-none shrink-0 text-[#D4AF37]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[#2D241E] dark:text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
