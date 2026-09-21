import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApproachSection() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      num: '01',
      title: 'ALIGN',
      subtitle: 'Mindful Posture & Structural Integrity',
      desc: 'Grounding every pose in safe, intentional geometry that respects individual anatomy and honors functional movement.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      num: '02',
      title: 'BREATHE',
      subtitle: 'Pranayama & Nervous System Regulation',
      desc: 'Harnessing the breath as the bridge between body and mind, calming the nervous system and deepening focus.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    },
    {
      num: '03',
      title: 'MOVE',
      subtitle: 'Fluidity & Sustainable Strength',
      desc: 'Building grace, strength, and mobility through rhythmic sequences designed to build lasting vitality.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      num: '04',
      title: 'RESTORE',
      subtitle: 'Deep Relaxation & Integration',
      desc: 'Allowing space for quiet integration, easing accumulated tension and renewing physical and emotional clarity.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-36 bg-ivory-dark text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              02 — OUR APPROACH
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal leading-tight">
              FROM MOVEMENT <br />
              <span className="italic font-normal text-forest">TO AWARENESS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            Four foundational pillars guiding every practice at Ved Yogshala, bridging ancient tradition with modern lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            {principles.map((item, idx) => {
              const isActive = activePrinciple === idx;
              return (
                <div
                  key={item.num}
                  onClick={() => setActivePrinciple(idx)}
                  onMouseEnter={() => setActivePrinciple(idx)}
                  className={`group cursor-pointer p-6 sm:p-8 rounded-2xl transition-all duration-500 border ${
                    isActive
                      ? 'bg-ivory border-terracotta/40 shadow-lg'
                      : 'bg-transparent border-sand-dark/30 hover:border-sand-dark hover:bg-ivory/50'
                  }`}
                  data-cursor="EXPLORE"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <span
                        className={`font-serif text-2xl font-light transition-colors ${
                          isActive ? 'text-terracotta font-normal' : 'text-charcoal-light'
                        }`}
                      >
                        {item.num}
                      </span>
                      <h3
                        className={`font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors ${
                          isActive ? 'text-forest font-normal' : 'text-charcoal'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[11px] font-sans tracking-widest uppercase transition-colors ${
                        isActive ? 'text-terracotta font-semibold' : 'text-charcoal-light'
                      }`}
                    >
                      {isActive ? 'ACTIVE' : 'SELECT'}
                    </span>
                  </div>

                  <p className="text-xs font-sans uppercase tracking-widest text-sage-dark font-medium mb-3">
                    {item.subtitle}
                  </p>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-sans font-light text-charcoal-muted leading-relaxed"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-sand border border-ivory">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePrinciple}
                  src={principles[activePrinciple].image}
                  alt={`Ved Yogshala ${principles[activePrinciple].title}`}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-8 left-8 right-8 text-ivory">
                <span className="text-[10px] tracking-[0.3em] font-sans uppercase font-bold text-terracotta bg-ivory/90 text-terracotta px-3 py-1 rounded-full inline-block mb-2">
                  PILLAR {principles[activePrinciple].num}
                </span>
                <h4 className="font-serif text-3xl font-light text-ivory mb-1">
                  {principles[activePrinciple].title}
                </h4>
                <p className="text-xs font-sans text-ivory/80 font-light">
                  {principles[activePrinciple].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
