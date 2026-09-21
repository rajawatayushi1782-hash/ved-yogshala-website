import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Practicing at Ved Yogshala helped me slow down my chaotic morning routine. Ayushi's focus on proper breath and alignment transformed how my back feels after long hours at my desk in Surat.",
      name: "Pooja Patel",
      experience: "Studio Hatha Practitioner &bull; Adajan, Surat",
    },
    {
      quote: "I was hesitant as a complete beginner, but Ayushi made me feel immediately welcome. The one-on-one sessions allowed me to move at my own pace without feeling rushed or overwhelmed.",
      name: "Rajesh Shah",
      experience: "Personalized 1-on-1 Sessions",
    },
    {
      quote: "The breathing exercises and serene atmosphere at Ved Yogshala are my anchor during high-stress work weeks. It feels like a genuine peaceful sanctuary right here in Adajan.",
      name: "Dr. Ananya Desai",
      experience: "Vinyasa & Mindfulness Practice",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 md:py-36 bg-forest-deep text-ivory relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-terracotta/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] font-sans font-medium text-sage-light uppercase block mb-3">
            11 — PRACTITIONER REFLECTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory">
            STORIES FROM <span className="italic font-normal text-terracotta-soft">THE MAT.</span>
          </h2>
        </div>

        <div className="relative min-h-[260px] sm:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl px-4"
            >
              <Quote className="w-10 h-10 text-terracotta/40 mx-auto mb-6" />

              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-relaxed text-ivory mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              <div>
                <h4 className="font-serif text-xl font-normal text-terracotta-soft">
                  {testimonials[currentIndex].name}
                </h4>
                <p
                  className="text-xs font-sans tracking-widest uppercase text-sage-light mt-1"
                  dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].experience }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-ivory/20 hover:border-ivory text-ivory/70 hover:text-ivory transition-all"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-terracotta' : 'w-2 bg-ivory/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-ivory/20 hover:border-ivory text-ivory/70 hover:text-ivory transition-all"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
