import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, PRICING_PACKAGES } from '../data';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, Sparkles, AlertCircle, X, Trash2 } from 'lucide-react';
import { Booking } from '../types';

interface BookingFormProps {
  selectedService: string;
  setSelectedService: (val: string) => void;
}

export default function BookingForm({ selectedService, setSelectedService }: BookingFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const [error, setError] = useState('');
  const [activeBooking, setActiveBooking] = useState<Booking | null>(null);
  const [appointments, setAppointments] = useState<Booking[]>([]);

  // Pre-load all available services and packages for the select dropdown
  const allServices = [
    ...SERVICES_DATA.map(s => s.name),
    ...PRICING_PACKAGES.map(p => p.name)
  ];

  // Sync selectedService prop with local dropdown state
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  // Load existing bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nail_polish_bookings');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error('Error reading appointments', e);
      }
    }
  }, []);

  const saveAppointmentsToLocalStorage = (list: Booking[]) => {
    localStorage.setItem('nail_polish_bookings', JSON.stringify(list));
    setAppointments(list);
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Quick validation
    if (!name.trim() || !email.trim() || !phone.trim() || !service || !date || !time) {
      setError('Please fill in all the required fields correctly to secure your slot.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address for appointment confirmation.');
      return;
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (phone.length < 7 || !phoneRegex.test(phone)) {
      setError('Please enter a valid phone number for SMS reminders.');
      return;
    }

    // Capture booking object
    const newBooking: Booking = {
      id: `NP-${Math.floor(10000 + Math.random() * 90000)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      date,
      time,
      notes: notes.trim(),
      status: 'Confirmed' // High fidelity instant confirm
    };

    const updatedList = [newBooking, ...appointments];
    saveAppointmentsToLocalStorage(updatedList);
    setActiveBooking(newBooking);

    // Reset Form
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
    setNotes('');
    setSelectedService('');
  };

  const handleCancelBooking = (bookingId: string) => {
    const updated = appointments.map(app => 
      app.id === bookingId ? { ...app, status: 'Cancelled' as const } : app
    );
    saveAppointmentsToLocalStorage(updated);
  };

  const handleDeleteBooking = (bookingId: string) => {
    const updated = appointments.filter(app => app.id !== bookingId);
    saveAppointmentsToLocalStorage(updated);
    if (activeBooking?.id === bookingId) {
      setActiveBooking(null);
    }
  };

  return (
    <section id="booking" className="py-20 md:py-24 bg-[#FAF7F2] dark:bg-[#1E1815] relative border-b border-[#E5D1C1]/20 dark:border-[#2D241E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="booking-header">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-sans">
              Reserve Your Experience
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D241E] dark:text-white" id="booking-title">
            Book An <span className="italic text-[#E1B382]">Appointment</span>
          </h2>

          <p className="font-serif italic text-sm text-[#2D241E]/80 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Fill in the details below to instantly schedule your elite treatment. All online bookings receive instant session codes and digital vouchers.
          </p>
        </div>

        {/* Form and confirmation display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="booking-container">
          
          {/* Booking Form Card (Take 7 cols dynamically) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#251E1A] p-6 sm:p-10 rounded-none border border-[#E5D1C1]/60 dark:border-[#2D241E]/50 shadow-xs text-left relative overflow-hidden" id="booking-form-box">
            
            {/* Soft decor background lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF7F2] dark:bg-[#1E1815]/10 blur-xl font-sans" />

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D241E] dark:text-white mb-6">
              Treatment Details Form
            </h3>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 rounded-none text-xs flex items-center space-x-2 border border-red-100/50 dark:border-red-900/30 animate-shake" id="booking-error">
                <AlertCircle className="w-4 h-4 shrink-0 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleBookSubmit} className="space-y-5" id="appointment-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full name */}
                <div>
                  <label htmlFor="booking-name" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-455 uppercase mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      id="booking-name"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* Email address */}
                <div>
                  <label htmlFor="booking-email" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-455 uppercase mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      id="booking-email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                  <label htmlFor="booking-phone" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-455 uppercase mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="tel"
                      id="booking-phone"
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="booking-service" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-400 uppercase mb-2">
                    Select Treatment *
                  </label>
                  <select
                    id="booking-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-300 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all cursor-pointer"
                  >
                    <option value="" disabled>Choose service or package</option>
                    {allServices.map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date Selection */}
                <div>
                  <label htmlFor="booking-date" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-400 uppercase mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <input
                      type="date"
                      id="booking-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-300 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label htmlFor="booking-time" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-400 uppercase mb-2">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    <select
                      id="booking-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-300 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select time</option>
                      <option value="09:00 AM">09:00 AM (Early Glow)</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="12:00 PM">12:00 PM (Lunch Break Slot)</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="06:00 PM">06:00 PM (Sunset Sanctuary)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-[10px] font-bold tracking-widest text-[#2D241E]/80 dark:text-zinc-400 uppercase mb-2">
                  Additional Notes & Custom Preferences
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                  <textarea
                    id="booking-notes"
                    rows={3}
                    placeholder="E.g., I have a specific Pinterest style, need builder gel, or require silent salon treatments..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] dark:bg-[#1E1815] border border-[#E5D1C1]/80 dark:border-[#2D241E]/50 rounded-none text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#D4AF37] transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="booking-submit-btn"
                className="w-full py-4 text-center text-xs font-bold tracking-widest uppercase bg-[#2D241E] dark:bg-[#D4AF37] text-white dark:text-[#2D241E] rounded-none shadow-xs hover:bg-[#D4AF37] dark:hover:bg-white hover:text-white dark:hover:text-[#2D241E] transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                Secure Appointment Slot
              </button>
            </form>
          </div>

          {/* Sidebar Area: Live Vouchers & Appointment Feed (Take 5 cols dynamically) */}
          <div className="lg:col-span-5 space-y-6" id="booking-sidebar">
            
            {/* Active Newly Created Voucher representation */}
            <AnimatePresence>
              {activeBooking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#2D241E] text-white p-6 rounded-none border border-[#D4AF37]/30 relative overflow-hidden shadow-2xl"
                  id="active-booking-receipt"
                >
                  {/* Voucher cutout markings */}
                  <div className="absolute top-0 left-4 right-4 h-1.5 bg-[#D4AF37]/20 border-b border-dashed border-[#D4AF37]/30" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                        Confirmed Appointment
                      </span>
                    </div>
                    {/* Clear success key */}
                    <button
                      onClick={() => setActiveBooking(null)}
                      className="p-1 rounded-none bg-[#1E1815] hover:bg-black text-[#E5D1C1] hover:text-white cursor-pointer"
                      aria-label="Dismiss Voucher"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="border-t border-b border-dashed border-zinc-800/60 py-4 my-2 text-left space-y-3.5">
                    <div className="flex justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans font-bold">Booking ID</span>
                      <span className="text-xs font-bold text-[#D4AF37] font-mono">{activeBooking.id}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans font-bold">Client Name</span>
                      <span className="text-xs font-semibold">{activeBooking.name}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans font-bold">Treatment</span>
                      <span className="text-xs font-semibold text-[#E1B382] truncate max-w-[170px]">{activeBooking.service}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans font-bold">Date & Time</span>
                      <span className="text-xs font-semibold">{activeBooking.date} at {activeBooking.time}</span>
                    </div>
                    
                    {activeBooking.notes && (
                      <div className="pt-2 border-t border-zinc-800">
                        <span className="text-[9px] uppercase tracking-wider text-zinc-400 block mb-1 font-bold">Notes:</span>
                        <p className="text-xs italic text-zinc-300 tracking-wide font-serif leading-relaxed">
                          "{activeBooking.notes}"
                        </p>
                      </div>
                    )}
                  </div>

                   <div className="mt-4 pt-1 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[9px] uppercase tracking-wider text-zinc-500 font-sans font-bold">Status</p>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-none text-[9px] font-bold bg-[#E1B382]/10 text-[#E1B382] border border-[#E1B382]/20">
                        Ready • Secure
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-[9px] text-[#D4AF37] uppercase font-bold tracking-[0.2em] font-sans">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>PRESENT VOUCHER</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* List of Scheduled sessions stored in LocalStorage */}
            <div className="bg-white dark:bg-[#251E1A] border border-[#E5D1C1]/60 dark:border-[#2D241E]/40 p-6 rounded-none text-left" id="saved-bookings-box">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#2D241E] dark:text-white mb-4 flex items-center justify-between">
                <span>Your Scheduled Sessions</span>
                <span className="text-xs bg-[#FAF7F2] dark:bg-[#1E1815] text-[#D4AF37] border border-[#E5D1C1]/50 dark:border-[#2D241E]/40 font-mono px-2.5 py-0.5 rounded-none font-bold">
                  {appointments.length}
                </span>
              </h4>

              {appointments.length === 0 ? (
                <div className="py-8 text-center text-zinc-400 dark:text-zinc-500" id="appointments-empty">
                  <Calendar className="w-8 h-8 mx-auto mb-2.5 opacity-40 text-[#D4AF37]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] font-sans">No sessions scheduled yet.</p>
                  <p className="text-[11px] mt-1 italic normal-case leading-normal font-sans">Secure your favorite slot on the left form to see your session tracking cards live!</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1" id="appointments-scroll-feed">
                  {appointments.map((app) => (
                    <div
                      key={app.id}
                      className={`p-4 rounded-none border flex justify-between items-start transition-all ${
                        app.status === 'Cancelled'
                          ? 'bg-[#FAF7F2]/50 dark:bg-[#1E1815]/20 border-[#E5D1C1]/40 dark:border-[#2D241E]/40 text-zinc-400 dark:text-zinc-550'
                          : 'bg-white dark:bg-[#1E1815] border-[#E5D1C1] dark:border-[#2D241E]/85 hover:border-[#D4AF37] dark:hover:border-[#D4AF37]/50 text-[#2D241E] dark:text-zinc-200'
                      }`}
                    >
                      <div className="text-left space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold text-[#2D241E] dark:text-white tracking-wide">
                            {app.id}
                          </span>
                          <span className={`inline-flex items-center px-1.5 py-0.5 rounded-none text-[9px] font-bold ${
                            app.status === 'Cancelled'
                              ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                              : 'bg-[#FAF7F2] dark:bg-[#1E1815] text-[#D4AF37] border border-[#E5D1C1]/50 dark:border-[#2D241E]/30'
                          }`}>
                            {app.status}
                          </span>
                        </div>

                        <p className="text-xs font-bold truncate max-w-[170px]">{app.service}</p>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans tracking-wide">
                          {app.date} • {app.time}
                        </p>
                      </div>

                      <div className="flex space-x-1">
                        {app.status !== 'Cancelled' && (
                          <button
                            onClick={() => handleCancelBooking(app.id)}
                            className="p-1 px-2 rounded-none hover:bg-rose-50 dark:hover:bg-rose-950/20 text-[10px] font-bold text-rose-700 border border-rose-100 dark:border-rose-900/50 cursor-pointer"
                            title="Cancel Appointment"
                          >
                            Cancel
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteBooking(app.id)}
                          className="p-1.5 rounded-none hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
                          title="Remove Entry"
                          aria-label="Delete Entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
