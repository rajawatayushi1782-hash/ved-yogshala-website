import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="py-24 md:py-36 bg-forest-deep text-ivory relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans font-medium text-sage-light mb-4"
        >
          The Beginning of Practice
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-ivory mb-6 text-balance"
        >
          Your journey doesn’t need to be rushed.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-lg sm:text-xl md:text-2xl italic font-light text-ivory/80 max-w-xl mb-10 text-balance"
        >
          “Start with one breath. Then one practice. Then another.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
        >
          <button
            onClick={onOpenBooking}
            data-cursor="Begin"
            className="w-full sm:w-auto group bg-terracotta hover:bg-terracotta-hover text-ivory px-8 py-3.5 rounded-full font-sans text-xs font-medium transition-colors duration-200 shadow-xl flex items-center justify-center space-x-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            <span>Book your session</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <a
            href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20am%20ready%20to%20begin%20my%20yoga%20journey."
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WhatsApp"
            className="w-full sm:w-auto group border border-ivory/30 hover:border-ivory bg-ivory/10 hover:bg-ivory/20 text-ivory px-7 py-3.5 rounded-full font-sans text-xs font-medium transition-colors duration-200 backdrop-blur-xs flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            <MessageCircle className="w-4 h-4 text-sage-light" />
            <span>WhatsApp us</span>
          </a>
        </motion.div>

        <div className="mt-14 pt-6 border-t border-ivory/15 text-xs font-sans text-ivory/60">
          Ved Yogshala, Adajan, Surat, Gujarat
        </div>
      </div>
    </section>
  );
}
