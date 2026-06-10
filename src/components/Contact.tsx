import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, Sparkles } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all general message inputs before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setLoading(true);
    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#FAF7F2] dark:bg-[#1E1815] relative overflow-hidden border-b border-[#E5D1C1]/20">
      
      {/* Background visual shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E5D1C1]/10 dark:bg-[#2D241E]/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Connect With Us
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="contact-title">
            Visit Our <span className="italic text-[#E1B382]">Sanctuary</span>
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/80 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Have custom design templates, bridal inquiries, or group booking questions? Reach our desk or explore opening hours at our physical boutique location.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-layout">
          
          {/* Column 1: Info Plates (Take 5 cols dynamically) */}
          <div className="lg:col-span-5 space-y-6 text-left" id="contact-info-panel">
            <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2D241E] dark:text-white mb-4">
              Salon Coordinates
            </h3>

            {/* Address */}
            <div className="bg-white dark:bg-[#251E1A] p-5 rounded-none border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 shadow-xs flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] dark:bg-[#1E1815] rounded-none text-[#D4AF37] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-sans">
                <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Address Location</p>
                <p className="text-sm font-bold text-[#2D241E] dark:text-zinc-100 mt-1">
                  104 Luxury Avenue, Suite B, <br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-[#251E1A] p-5 rounded-none border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 shadow-xs flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] dark:bg-[#1E1815] rounded-none text-[#D4AF37] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="font-sans">
                <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Phone & Call Desk</p>
                <p className="text-sm font-bold text-[#2D241E] dark:text-zinc-100 mt-1 hover:text-[#D4AF37] transition-colors">
                  <a href="tel:+13105550192">+1 (310) 555-0192</a>
                </p>
                <p className="text-[10px] text-zinc-400">Reservations & SMS notifications</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-[#251E1A] p-5 rounded-none border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 shadow-xs flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] dark:bg-[#1E1815] rounded-none text-[#D4AF37] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="font-sans">
                <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Email Correspondence</p>
                <p className="text-sm font-bold text-[#2D241E] dark:text-zinc-100 mt-1 hover:text-[#D4AF37] transition-colors">
                  <a href="mailto:concierge@nailhub.com">concierge@nailhub.com</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-[#251E1A] p-5 rounded-none border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 shadow-xs flex items-start space-x-4">
              <div className="p-3 bg-[#FAF7F2] dark:bg-[#1E1815] rounded-none text-[#D4AF37] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-sans w-full">
                <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Boutique Salon Hours</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                  <span>Mon — Fri:</span>
                  <span className="font-bold text-right">09:00 AM — 08:00 PM</span>
                  <span>Saturday:</span>
                  <span className="font-bold text-right">10:00 AM — 06:00 PM</span>
                  <span>Sunday:</span>
                  <span className="font-bold text-[#D4AF37] dark:text-gold-400 text-right">Closed (Rest & Sterilize)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form and Map widget (Take 7 cols dynamically) */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-7 text-left" id="contact-visual-panel">
            
            {/* Custom vector Map representation avoiding standard blank iframes */}
            <div className="bg-[#1E1815] border border-[#E5D1C1]/20 h-64 rounded-none relative overflow-hidden shadow-xs flex items-center justify-center p-4" id="simulated-map">
              {/* Artistic coordinate grid representing map */}
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent z-10" />
              
              <div className="relative text-center z-20 space-y-3 p-4">
                <div className="mx-auto w-12 h-12 bg-[#D4AF37] rounded-none flex items-center justify-center text-white dark:text-zinc-950 animate-pulse">
                  <Navigation className="w-6 h-6 rotate-45 transform" />
                </div>
                <h4 className="font-serif text-white text-base font-bold uppercase tracking-wider">Interactive Studio Radar</h4>
                <p className="font-serif italic text-xs text-zinc-300 max-w-sm mx-auto leading-normal">
                  Our boutique is situated at Beverly Hills block 104, beside Ritz Plaza. Easily accessible valet parking is available at the front entrance desk.
                </p>
                
                <a
                  href="https://maps.google.com/?q=Beverly+Hills+CA+90210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 bg-[#FAF7F2] dark:bg-[#2D241E] hover:bg-white text-[9px] text-[#2D241E] dark:text-zinc-200 border border-[#E5D1C1]/30 hover:border-[#D4AF37] rounded-none transition-all font-sans font-bold tracking-widest uppercase cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Message Feed Card */}
            <div className="bg-white dark:bg-[#251E1A] p-6 sm:p-8 rounded-none border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 text-left relative" id="contact-form-box">
              <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2D241E] dark:text-white mb-4">
                Send Direct Message
              </h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto" />
                    <h4 className="font-serif text-base font-bold uppercase tracking-wider text-[#2D241E] dark:text-white">Message Delivered</h4>
                    <p className="font-serif italic text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
                      Thank you for contacting us. Our salon concierge desk will email or text you back within 2 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#2D241E] text-[#2D241E] hover:text-white border border-[#E5D1C1]/40 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4" id="direct-message-form">
                    {error && (
                      <p className="text-xs text-rose-700 bg-rose-50 dark:bg-rose-950/20 p-3 rounded-none border border-rose-100 dark:border-rose-900/50">
                        {error}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1 font-sans">Your Name *</label>
                        <input
                          type="text"
                          id="contact-name"
                          placeholder="Elizabeth"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/40 dark:bg-[#1E1815] border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 rounded-none focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1 font-sans">Email *</label>
                        <input
                          type="email"
                          id="contact-email"
                          placeholder="elizabeth@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/40 dark:bg-[#1E1815] border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 rounded-none focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1 font-sans">Subject *</label>
                      <input
                        type="text"
                        id="contact-subject"
                        placeholder="Inquiry about Group Nail Packages"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/40 dark:bg-[#1E1815] border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 rounded-none focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1 font-sans">Message Body *</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Explain your preferences or group sizes in detail..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/40 dark:bg-[#1E1815] border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 rounded-none focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-[#2D241E] dark:bg-[#D4AF37] text-white dark:text-[#2D241E] font-sans text-[10px] font-bold tracking-widest uppercase rounded-none transition-all flex items-center justify-center space-x-2 cursor-pointer hover:bg-[#D4AF37] hover:text-white dark:hover:bg-white"
                    >
                      {loading ? (
                        <span>Transmitting Message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
