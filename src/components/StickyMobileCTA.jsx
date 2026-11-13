import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function StickyMobileCTA({ onOpenBooking }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3.5 bg-ivory/95 backdrop-blur-md border-t border-sand-dark/60 shadow-xl flex items-center gap-3"
        >
          <a
            href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20would%20like%20to%20inquire%20about%20sessions."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-sage text-ivory hover:bg-sage-dark transition-colors duration-200 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenBooking}
            className="flex-1 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium py-3 px-5 rounded-full transition-colors duration-200 shadow-md flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <span>Book a Session</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
