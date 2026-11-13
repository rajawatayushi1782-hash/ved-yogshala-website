import React from 'react';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-terracotta" />
              <span className="text-xs font-sans font-medium text-terracotta">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-8 text-charcoal text-balance">
              Yoga is not merely a workout. It is an intentional returning to yourself.
            </h2>

            <div className="editorial-line w-full my-6" />

            <p className="text-base sm:text-lg font-sans font-light text-charcoal-muted leading-relaxed max-w-xl">
              At Ved Yogshala, we approach yoga as an integrated practice of movement, breath awareness, mindfulness, and sustainable wellness. Guided by authentic principles in Adajan, Surat, every session invites you to slow down, align your body, and build a lasting relationship with your physical and mental well-being.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-10 mt-6 border-t border-sand-dark/50">
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-forest font-light">01</span>
                <span className="text-xs font-sans text-charcoal-light font-medium">Movement</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-terracotta font-light">02</span>
                <span className="text-xs font-sans text-charcoal-light font-medium">Awareness</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-sage-dark font-light">03</span>
                <span className="text-xs font-sans text-charcoal-light font-medium">Balance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-sand border border-sand-dark/40">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
                alt="Mindful Yoga Practice at Ved Yogshala"
                data-cursor="Peace"
                className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-ivory/95 backdrop-blur-md border border-ivory/80 shadow-md">
                <span className="text-xs font-sans font-medium text-terracotta block mb-1">
                  Our Essence
                </span>
                <p className="font-serif italic text-base text-charcoal leading-snug">
                  “In the posture, discover quiet. In the breath, find returning.”
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
