import React from 'react';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-36 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-terracotta" />
              <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase">
                01 — THE PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8 text-charcoal">
              YOGA IS NOT <br />
              <span className="italic font-normal text-terracotta">JUST A WORKOUT.</span>
              <br />
              <span className="mt-2 block">
                IT IS A WAY OF <br />
                RETURNING TO YOURSELF.
              </span>
            </h2>

            <div className="editorial-line w-full my-6" />

            <p className="text-base sm:text-lg font-sans font-light text-charcoal-muted leading-relaxed max-w-xl">
              At Ved Yogshala, we approach yoga as an integrated practice of movement, breath awareness, mindfulness, and sustainable wellness. Guided by authentic principles in Adajan, Surat, every session invites you to slow down, align your body, and build a lasting relationship with your physical and mental well-being.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-10 mt-6 border-t border-sand-dark/40">
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-forest font-light">01</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-charcoal-light font-medium">Movement</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-terracotta font-light">02</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-charcoal-light font-medium">Awareness</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-sage-dark font-light">03</span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-charcoal-light font-medium">Balance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-sand">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
                alt="Mindful Yoga Practice at Ved Yogshala"
                data-cursor="PEACE"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ivory/90 backdrop-blur-md border border-ivory">
                <span className="text-[10px] tracking-[0.2em] font-sans uppercase font-bold text-terracotta block mb-1">
                  OUR ESSENCE
                </span>
                <p className="font-serif italic text-sm text-charcoal">
                  "In the posture, discover quiet. In the breath, find returning."
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sage/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
