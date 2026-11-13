import React from 'react';
import { motion } from 'framer-motion';

export default function TransformationStory() {
  const shifts = [
    {
      label: '01',
      title: 'More Internal Awareness',
      desc: 'Noticing physical tension early and learning to soften before fatigue sets in.',
    },
    {
      label: '02',
      title: 'Better Consistency',
      desc: 'Replacing sporadic workouts with a sustainable, nourishing practice rhythm.',
    },
    {
      label: '03',
      title: 'Greater Body Confidence',
      desc: 'Feeling comfortable and balanced within your natural physical posture.',
    },
    {
      label: '04',
      title: 'A Calmer Evening Routine',
      desc: 'Easing mental chatter through simple breath awareness before rest.',
    },
    {
      label: '05',
      title: 'Improved Movement Ease',
      desc: 'Bending, reaching, and moving throughout the day with fluid confidence.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-medium text-terracotta block mb-3">
              Internal Shifts
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6 text-balance">
              The meaningful change you notice from within.
            </h2>

            <p className="text-sm sm:text-base font-sans font-light text-charcoal-muted leading-relaxed mb-8">
              We do not measure progress in dramatic before/after photos or extreme metrics. Authentic yoga transformation is quiet, steady, and deeply qualitative.
            </p>

            <div className="p-6 rounded-2xl bg-sand/50 border border-sand-dark/40">
              <span className="text-xs font-sans font-medium text-terracotta block mb-1">
                Mindful Note
              </span>
              <p className="text-xs font-sans text-charcoal-light font-light leading-relaxed">
                Practices are designed for holistic wellness, movement, and stress regulation. Personal experiences vary gently according to individual consistency and physical starting points.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {shifts.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 sm:p-6 rounded-2xl bg-ivory border border-sand-dark/40 hover:border-terracotta/40 hover:bg-sand/30 transition-colors duration-200 flex items-center space-x-6"
              >
                <span className="font-serif text-2xl font-light text-terracotta shrink-0">
                  {s.label}
                </span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest mb-0.5">
                    {s.title}
                  </h3>
                  <p className="text-xs font-sans text-charcoal-muted font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
