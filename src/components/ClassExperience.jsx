import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClassExperience() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      word: 'ARRIVE',
      subtitle: 'Leave external noise behind as you step onto the mat.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'BREATHE',
      subtitle: 'Synchronize your breath to calm the nervous system.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'WARM UP',
      subtitle: 'Gentle spinal mobilization and joint preparation.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'MOVE',
      subtitle: 'Flow through physical posture and build stability.',
      image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'ALIGN',
      subtitle: 'Refine anatomy, geometry, and functional balance.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'REST',
      subtitle: 'Savasana relaxation to absorb physical practice.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop',
    },
    {
      word: 'REFLECT',
      subtitle: 'Step forward renewed with quiet mental clarity.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-forest-deep text-ivory">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={stages[activeStep].image}
            alt={`Ved Yogshala Session Stage: ${stages[activeStep].word}`}
            className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-forest-deep/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <span className="text-xs tracking-[0.3em] font-sans font-medium text-sage-light uppercase block mb-6">
          07 — SESSION RHYTHM
        </span>

        <div className="h-28 sm:h-36 md:h-44 flex items-center justify-center my-4">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeStep}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="font-serif text-6xl sm:text-8xl md:text-9xl font-light tracking-tight text-ivory uppercase"
            >
              {stages[activeStep].word}
            </motion.h2>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-xl font-light text-ivory/80 max-w-xl mx-auto mb-12"
          >
            {stages[activeStep].subtitle}
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          {stages.map((s, idx) => (
            <button
              key={s.word}
              onClick={() => setActiveStep(idx)}
              className="group py-2 px-1 focus:outline-none"
              title={s.word}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeStep === idx
                    ? 'w-10 sm:w-16 bg-terracotta'
                    : 'w-4 sm:w-6 bg-ivory/30 group-hover:bg-ivory/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
