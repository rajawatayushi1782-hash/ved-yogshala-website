import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="py-28 md:py-44 bg-forest-deep text-ivory relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terracotta/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sage/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] font-sans font-medium text-sage-light uppercase mb-6"
        >
          15 — THE BEGINNING OF PRACTICE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight leading-[0.95] text-ivory mb-8 uppercase"
        >
          YOUR JOURNEY <br />
          DOESN'T NEED <br />
          <span className="italic font-normal text-terracotta-soft">TO BE RUSHED.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-serif text-xl sm:text-2xl italic font-light text-ivory/80 max-w-xl mb-12"
        >
          "Start with one breath. Then one practice. Then another."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <button
            onClick={onOpenBooking}
            data-cursor="BEGIN"
            className="w-full sm:w-auto group bg-terracotta hover:bg-terracotta-hover text-ivory px-9 py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3"
          >
            <span>BOOK YOUR SESSION</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20am%20ready%20to%20begin%20my%20yoga%20journey."
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WHATSAPP"
            className="w-full sm:w-auto group border border-ivory/30 hover:border-ivory bg-white/5 hover:bg-white/10 text-ivory px-8 py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 backdrop-blur-xs flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-sage-light" />
            <span>WHATSAPP US</span>
          </a>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-ivory/15 text-xs font-sans text-ivory/60 tracking-widest uppercase">
          VED YOGSHALA &bull; ADAJAN &bull; SURAT &bull; GUJARAT
        </div>
      </div>
    </section>
  );
}
