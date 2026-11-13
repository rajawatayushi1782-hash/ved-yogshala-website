import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClassExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stages = [
    {
      word: 'Arrive',
      subtitle: 'Leave external noise behind as you step onto the mat.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'Breathe',
      subtitle: 'Synchronize your breath to calm the nervous system.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'Warm Up',
      subtitle: 'Gentle spinal mobilization and joint preparation.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'Move',
      subtitle: 'Flow through physical posture and build stability.',
      image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'Align',
      subtitle: 'Refine anatomy, geometry, and functional balance.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'Rest',
      subtitle: 'Savasana relaxation to absorb physical practice.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'Reflect',
      subtitle: 'Step forward renewed with quiet mental clarity.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [stages.length, isPaused]);

  return (
    <section
      className="relative w-full min-h-[80dvh] flex items-center justify-center overflow-hidden bg-forest-deep text-ivory"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={stages[activeStep].image}
            alt={`Ved Yogshala Session Stage: ${stages[activeStep].word}`}
            className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <span className="text-xs font-sans font-medium text-sage-light block mb-5">
          Session Rhythm
        </span>

        <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center my-3">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-ivory text-balance"
            >
              {stages[activeStep].word}
            </motion.h2>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-base sm:text-lg font-light text-ivory/85 max-w-xl mx-auto mb-10"
          >
            {stages[activeStep].subtitle}
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-2 sm:space-x-3" role="tablist" aria-label="Session Stages">
          {stages.map((s, idx) => (
            <button
              key={s.word}
              role="tab"
              aria-selected={activeStep === idx}
              onClick={() => setActiveStep(idx)}
              className="py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory rounded-full"
              aria-label={`Jump to stage: ${s.word}`}
            >
              <div
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  activeStep === idx
                    ? 'w-10 sm:w-14 bg-terracotta'
                    : 'w-4 sm:w-6 bg-ivory/30 hover:bg-ivory/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
