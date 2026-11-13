import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: 'Practicing at Ved Yogshala helped me slow down my chaotic morning routine. Ayushi’s focus on proper breath and alignment transformed how my back feels after long hours at my desk in Surat.',
      name: 'Pooja Patel',
      experience: 'Studio Hatha Practitioner, Adajan, Surat',
    },
    {
      quote: 'I was hesitant as a complete beginner, but Ayushi made me feel immediately welcome. The one-on-one sessions allowed me to move at my own pace without feeling rushed or overwhelmed.',
      name: 'Rajesh Shah',
      experience: 'Personalized 1-on-1 Sessions',
    },
    {
      quote: 'The breathing exercises and serene atmosphere at Ved Yogshala are my anchor during high-stress work weeks. It feels like a genuine peaceful sanctuary right here in Adajan.',
      name: 'Dr. Ananya Desai',
      experience: 'Vinyasa & Mindfulness Practice',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length, isPaused]);

  return (
    <section
      className="py-24 md:py-32 bg-forest-deep text-ivory relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium text-sage-light block mb-3">
            Practitioner Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory text-balance">
            Stories from the mat.
          </h2>
        </div>

        <div className="relative min-h-[240px] sm:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl px-4"
            >
              <Quote className="w-8 h-8 text-terracotta/40 mx-auto mb-6" />

              <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-ivory mb-6 text-balance">
                “{testimonials[currentIndex].quote}”
              </p>

              <div>
                <h3 className="font-serif text-xl font-normal text-terracotta-soft">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-xs font-sans text-sage-light mt-1">
                  {testimonials[currentIndex].experience}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-ivory/25 hover:border-ivory text-ivory/70 hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2" role="tablist" aria-label="Testimonial Navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={currentIndex === idx}
                onClick={() => setCurrentIndex(idx)}
                className="py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory rounded-full"
                aria-label={`Jump to testimonial ${idx + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-colors duration-200 ${
                    currentIndex === idx ? 'w-8 bg-terracotta' : 'w-2 bg-ivory/30'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-ivory/25 hover:border-ivory text-ivory/70 hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
