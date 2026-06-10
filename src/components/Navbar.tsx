import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Our Team', href: '#team' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 dark:bg-[#1E1815]/95 backdrop-blur-md shadow-xs border-b border-[#E5D1C1] dark:border-[#2D241E]/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group-logo" id="nav-logo">
            <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[10px] tracking-widest text-[#D4AF37] font-semibold transition-transform group-hover:rotate-12 duration-300">
              NH
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xs sm:text-sm tracking-[0.3em] text-[#2D241E] dark:text-white uppercase leading-none">
                NailHub
              </span>
              <span className="text-[9px] tracking-[0.35em] mt-0.5 text-[#D4AF37] font-sans font-bold uppercase leading-none">
                Services
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8" id="desktop-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#2D241E]/80 dark:text-zinc-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4" id="nav-actions">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="mode-toggle-btn"
              className="p-2 text-[#2D241E] dark:text-zinc-300 hover:bg-[#F4EDE5] dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5 text-[#D4AF37]" /> : <Moon className="w-4.5 h-4.5 text-[#2D241E]" />}
            </button>

            {/* CTA Book Now */}
            <a
              href="#booking"
              id="nav-booking-cta"
              className="bg-[#2D241E] dark:bg-[#D4AF37] text-[#FAF7F2] dark:text-[#2D241E] px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] dark:hover:bg-[#FAF7F2] transition-all duration-300 shadow-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburguer and Mode Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="mode-toggle-btn-mobile"
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-pink-100/50 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-pink-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-pink-100/50 dark:hover:bg-zinc-800 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#FAF7F2] dark:bg-[#1E1815] border-b border-[#E5D1C1] dark:border-[#2D241E]/50 shadow-xl transition-all duration-300" id="mobile-drawer-menu">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-xs font-semibold uppercase tracking-widest text-[#2D241E] dark:text-zinc-300 hover:bg-[#F4EDE5] dark:hover:bg-zinc-900 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E5D1C1] dark:border-[#2D241E]/50 px-3">
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 text-[10px] uppercase font-bold tracking-widest bg-[#2D241E] dark:bg-[#D4AF37] text-[#FAF7F2] dark:text-[#2D241E] hover:bg-[#D4AF37] dark:hover:bg-white transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
