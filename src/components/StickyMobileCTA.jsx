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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-ivory/95 backdrop-blur-md border-t border-sand-dark/60 shadow-2xl flex items-center gap-3"
        >
          <a
            href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20would%20like%20to%20inquire%20about%20sessions."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-sage text-ivory hover:bg-sage-dark transition-colors shrink-0 shadow-md"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenBooking}
            className="flex-1 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs tracking-[0.2em] font-semibold uppercase py-3.5 px-6 rounded-full transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <span>BOOK SESSION</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
