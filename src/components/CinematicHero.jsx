import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function CinematicHero({ onOpenBooking }) {
  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden bg-forest-deep text-ivory">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
          alt="Ved Yogshala Morning Yoga Practice in Adajan Surat"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/30" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay paper-texture" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-ivory/20 bg-forest-deep/60 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-terracotta motion-reduce:animate-none animate-pulse" />
          <span className="text-xs font-sans font-medium text-ivory/90">
            Ved Yogshala, Adajan, Surat
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] mb-8 text-ivory text-balance"
        >
          Breathe. Move. Become.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl text-base sm:text-lg md:text-xl font-sans font-light text-ivory/85 leading-relaxed mb-12 text-center"
        >
          Yoga designed to bring movement, awareness and balance into everyday life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
        >
          <button
            onClick={onOpenBooking}
            data-cursor="Begin"
            className="w-full sm:w-auto group bg-terracotta hover:bg-terracotta-hover text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium transition-colors duration-200 shadow-lg flex items-center justify-center space-x-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            <span>Start your journey</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="#practices"
            data-cursor="Discover"
            className="w-full sm:w-auto group border border-ivory/40 hover:border-ivory bg-ivory/10 hover:bg-ivory/20 text-ivory px-7 py-3.5 rounded-full font-sans text-sm font-medium transition-colors duration-200 backdrop-blur-xs flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            <span>Explore practices</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center space-y-2 text-ivory/60"
      >
        <span className="text-xs font-sans font-medium">Scroll to explore</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-ivory/50 to-transparent" />
      </motion.div>
    </section>
  );
}
