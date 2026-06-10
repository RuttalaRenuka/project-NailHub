import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Sync dark mode class on document element so Tailwind styles toggle atomically
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handler passed to services/pricing to link to booking selections seamlessly
  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans antialiased overflow-x-hidden">
      
      {/* Structural layout partitions mapping exact user visual descriptions */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main id="main-content-flow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Services Section */}
        <Services onBookService={handleBookService} />

        {/* 4. Why Choose Us Features */}
        <WhyChooseUs />

        {/* 5. Masonry Portfolio Gallery */}
        <Portfolio />

        {/* 6. Customer Testimonials Slider */}
        <Testimonials />

        {/* 7. Pricing Packages Section */}
        <Pricing onBookService={handleBookService} />

        {/* 8. Online Booking Appointment Form & tracker */}
        <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />

        {/* 9. Team Profiles */}
        <Team />

        {/* 10. FAQ Accordions */}
        <FAQ />

        {/* 11. Contact Info, Map driving directions & Direct message form */}
        <Contact />
      </main>

      {/* 12. Footer with Insta grid, Newsletters, Social links */}
      <Footer />

      {/* Floating Extras (WhatsApp support concierge, Back to top) */}
      <FloatingControls />

    </div>
  );
}
