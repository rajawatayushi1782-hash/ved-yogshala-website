import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function CinematicHero({ onOpenBooking }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-forest-deep text-ivory">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
          alt="Ved Yogshala Authentic Morning Practice in Adajan Surat"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 via-transparent to-forest-deep/40" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay paper-texture" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-ivory/20 bg-forest/40 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] font-sans uppercase font-medium text-ivory/90">
            VED YOGSHALA &bull; ADAJAN &bull; SURAT
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mb-8 text-ivory uppercase"
        >
          BREATHE.<br />
          <span className="italic font-normal text-ivory/95">MOVE.</span> BECOME.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="max-w-xl text-base sm:text-lg md:text-xl font-sans font-light text-ivory/80 leading-relaxed mb-12 text-center"
        >
          Yoga designed to bring movement, awareness and balance into everyday life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <button
            onClick={onOpenBooking}
            data-cursor="BEGIN"
            className="w-full sm:w-auto group bg-terracotta hover:bg-terracotta-hover text-ivory px-8 py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-xl flex items-center justify-center space-x-3"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#practices"
            data-cursor="DISCOVER"
            className="w-full sm:w-auto group border border-ivory/40 hover:border-ivory bg-white/5 hover:bg-white/10 text-ivory px-7 py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 backdrop-blur-xs flex items-center justify-center space-x-2"
          >
            <span>EXPLORE PRACTICES</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center space-y-2 text-ivory/50"
      >
        <span className="text-[9px] tracking-[0.3em] font-sans uppercase font-medium">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-ivory/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
