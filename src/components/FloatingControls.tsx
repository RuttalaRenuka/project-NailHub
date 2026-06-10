import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle, Send, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingControls() {
  const [showScroll, setShowScroll] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'agent'; text: string }>>([
    { sender: 'agent', text: 'Hello! 🌸 Welcome to NailHub. How can we pamper you today?' }
  ]);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMockChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage.trim();
    setChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatMessage('');

    // Trigger mock interactive answers
    setTimeout(() => {
      let replyText = "That sounds lovely! Rest assured, we offer that service with certified organic products. Feel free to use our online book form on the page, or tell us your preferred hour to reserve!";
      if (userMsg.toLowerCase().includes('price') || userMsg.toLowerCase().includes('cost')) {
        replyText = "Our treatments start at just ₹900 for quick polishes! Complete packages (Basic Care, Premium Beauty, Luxury Spa) range from ₹2,000 to ₹7,000. You can browse our transparent Price Bundles above!";
      } else if (userMsg.toLowerCase().includes('bridal') || userMsg.toLowerCase().includes('wedding')) {
        replyText = "Congratulations! 🥂 Our Bridal Package includes private champagne, organic scrubs, and custom Swarovski gemstone art. Feel free to enquire about group rates!";
      } else if (userMsg.toLowerCase().includes('hour') || userMsg.toLowerCase().includes('when')) {
        replyText = "We are open Monday to Friday from 9 AM to 8 PM, and Saturdays from 10 AM to 6 PM. Sunday is reserved for deep clinical clinic sterilization.";
      }
      setChatHistory(prev => [...prev, { sender: 'agent', text: replyText }]);
    }, 1000);
  };

  return (
    <div id="floating-controls-cluster" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
      
      {/* 1. Interactive Mock WhatsApp / Live Luxury Chat panel */}
      <div className="relative">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              className="absolute bottom-16 right-0 w-80 sm:w-85 bg-white dark:bg-[#1E1815] border border-[#E5D1C1]/50 dark:border-zinc-800 rounded-none shadow-2xl overflow-hidden text-left flex flex-col"
              id="floating-chat-widget"
            >
              {/* WhatsApp styled header */}
              <div className="bg-[#2D241E] dark:bg-[#2D241E] p-4 text-white flex items-center justify-between border-b border-[#E5D1C1]/20">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-none bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#D4AF37] border border-[#2D241E] rounded-none" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider font-serif">Concierge Desk</h4>
                    <p className="text-[9px] text-[#D4AF37] uppercase tracking-widest leading-none mt-1 font-bold">Online Support</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 rounded-none hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Chat Message Scroll */}
              <div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#FAF7F2] dark:bg-[#251E1A] text-xs flex flex-col justify-end" id="chat-scroller-window">
                {chatHistory.map((msg, midx) => (
                  <div
                    key={midx}
                    className={`p-3 rounded-none max-w-[85%] leading-relaxed border ${
                      msg.sender === 'agent'
                        ? 'bg-white dark:bg-[#1E1815] text-[#2D241E] dark:text-zinc-200 self-start border-[#E5D1C1]/40 font-serif italic'
                        : 'bg-[#2D241E] text-white self-end border-transparent font-sans'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input section */}
              <form onSubmit={handleSendMockChat} className="p-3 bg-white dark:bg-[#1E1815] border-t border-[#E5D1C1]/30 flex space-x-2" id="whatsapp-fake-form">
                <label htmlFor="chat-input-user" className="sr-only">Type message...</label>
                <input
                  type="text"
                  id="chat-input-user"
                  placeholder="Type your question..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-grow px-3 py-2.5 text-xs bg-[#FAF7F2] dark:bg-[#251E1A] border border-[#E5D1C1]/40 rounded-none focus:outline-none focus:border-[#D4AF37] text-[#2D241E] dark:text-zinc-200 placeholder-zinc-450"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#2D241E] dark:bg-[#D4AF37] hover:bg-[#D4AF37] dark:hover:bg-white dark:hover:text-[#2D241E] text-white rounded-none flex items-center justify-center transition-colors cursor-pointer border border-transparent hover:border-[#E5D1C1]/40"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Float Trigger Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-4 bg-[#2D241E] dark:bg-[#D4AF37] hover:bg-[#D4AF37] dark:hover:bg-white text-white dark:text-[#2D241E] rounded-none shadow-2xl flex items-center justify-center transition-all duration-300 relative group cursor-pointer border border-[#E5D1C1]/20 hover:border-white"
          id="whatsapp-floating-btn"
          aria-label="Open support chat panel"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Notification ping */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#D4AF37] rounded-none animate-ping" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#D4AF37] rounded-none" />

          {/* Hover helper tag */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#2D241E] text-white text-[9px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#E5D1C1]/20">
            Chat With Us
          </span>
        </button>
      </div>

      {/* 2. Floating Back-To-Top button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-3.5 bg-white dark:bg-[#251E1A] text-zinc-700 dark:text-zinc-200 border border-[#E5D1C1]/50 hover:border-[#D4AF37] rounded-none shadow-lg flex items-center justify-center hover:bg-[#FAF7F2] hover:text-[#2D241E] transition-all duration-300 cursor-pointer"
            id="back-to-top-btn"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
