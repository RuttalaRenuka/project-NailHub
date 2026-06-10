import React from 'react';
import { motion } from 'motion/react';
import { TEAM_DATA } from '../data';
import { Instagram, Facebook, Linkedin, ShieldCheck, Award } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-24 bg-[#FAF7F2] dark:bg-[#1E1815] relative overflow-hidden border-b border-[#E5D1C1]/20">
      
      {/* Absolute floating decor icons representing nail care safety */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FAF7F2]/40 dark:bg-zinc-850 blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="team-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Our Elite Master Artisans
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="team-title">
            The Hands Behind <span className="italic text-[#E1B382]">Your Art</span>
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/80 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Meet our certified, high-fashion nail technicians and health specialists dedicated explicitly to sterile hygiene, flawless structures, and painting.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="team-grid">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-[#251E1A] rounded-none overflow-hidden border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 shadow-xs hover:shadow-md hover:border-[#D4AF37] dark:hover:border-gold-500/30 transition-all duration-300 flex flex-col group text-left"
              id={`team-card-${member.id}`}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Experience floating bubble */}
                <div className="absolute top-3 left-3 bg-[#2D241E]/90 backdrop-blur-md border border-[#E5D1C1]/10 px-3 py-1 rounded-none text-[9px] font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                  {member.experience}
                </div>

                {/* Professional badge indicator */}
                <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xs p-1.5 rounded-none text-[#D4AF37] dark:text-gold-400 shadow-sm border border-[#E5D1C1]/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* General details */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-bold text-[#2D241E] dark:text-zinc-50">
                    {member.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] font-sans">
                    {member.position}
                  </p>
                </div>

                {/* Social media links matching requested specific requirements */}
                <div className="pt-4 mt-4 border-t border-[#E5D1C1]/30 dark:border-[#2D241E]/30 flex items-center justify-between" id="member-socials">
                  <span className="text-[9px] font-sans text-zinc-400 uppercase tracking-widest font-bold">Connect Artist</span>
                  <div className="flex space-x-2">
                    {member.instagram && (
                      <a
                        href={`https://instagram.com/${member.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-none bg-[#FAF7F2] hover:bg-[#2D241E] dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-white dark:hover:text-gold-400 transition-colors cursor-pointer border border-[#E5D1C1]/20"
                        aria-label={`${member.name} Instagram`}
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.facebook && (
                      <a
                        href={`https://facebook.com/${member.facebook}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-none bg-[#FAF7F2] hover:bg-[#2D241E] dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-white dark:hover:text-gold-400 transition-colors cursor-pointer border border-[#E5D1C1]/20"
                        aria-label={`${member.name} Facebook`}
                      >
                        <Facebook className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-none bg-[#FAF7F2] hover:bg-[#2D241E] dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-white dark:hover:text-gold-400 transition-colors cursor-pointer border border-[#E5D1C1]/20"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
