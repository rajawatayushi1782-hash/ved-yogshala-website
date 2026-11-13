import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Feather, Sun, RefreshCw } from 'lucide-react';

export default function WellnessSection() {
  const pillars = [
    {
      icon: <Sun className="w-5 h-5 text-terracotta" />,
      title: 'Mindful Morning Routines',
      desc: 'Building morning consistency through gentle breath awareness and spinal mobilization to set a grounded tone for your day.',
    },
    {
      icon: <Feather className="w-5 h-5 text-sage-dark" />,
      title: 'Breath as an Anchor',
      desc: 'Using pranayama during work hours to release accumulated tension and quiet busy thoughts without stopping your day.',
    },
    {
      icon: <Compass className="w-5 h-5 text-forest" />,
      title: 'Postural Awareness',
      desc: 'Translating yoga alignment into everyday desk posture, walking habits, and ergonomic ease.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-terracotta" />,
      title: 'Rest & Recovery',
      desc: 'Honoring sleep hygiene, evening downtime, and restorative relaxation to replenish depleted physical energy.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-ivory-dark text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-medium text-terracotta block mb-3">
            Sustainable Living
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal text-balance">
            Wellness extending beyond the mat.
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4">
            True practice doesn’t end when class finishes. It expands into how you move, breathe, work, and rest every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-ivory rounded-3xl p-7 border border-sand-dark/50 shadow-xs hover:border-terracotta/40 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-2xl bg-sand/60 inline-block mb-5">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest mb-2">
                  {p.title}
                </h3>
                <p className="text-xs font-sans text-charcoal-muted font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand-dark/30 text-xs font-sans text-terracotta font-medium">
                Daily integration
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
