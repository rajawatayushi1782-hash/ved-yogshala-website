import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand your goals',
      desc: 'We start by discussing your health history, current mobility, and what you wish to cultivate—whether flexibility, calm, or routine.',
    },
    {
      num: '02',
      title: 'BEGIN',
      subtitle: 'Choose your format',
      desc: 'Select between personalized 1-on-1 sessions, small group studio batches in Adajan, or flexible live online sessions.',
    },
    {
      num: '03',
      title: 'PRACTICE',
      subtitle: 'Move and breathe consistently',
      desc: 'Step onto the mat with clear instruction, posture alignment adjustments, and steady breath synchronization.',
    },
    {
      num: '04',
      title: 'DEEPEN',
      subtitle: 'Build strength and discipline',
      desc: 'As physical stamina grows, we introduce deeper pranayama, posture refinements, and enhanced body awareness.',
    },
    {
      num: '05',
      title: 'INTEGRATE',
      subtitle: 'Mindfulness beyond the mat',
      desc: 'Carry calm breath, postural awareness, and centered clarity into your everyday work, decisions, and routine.',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-ivory-dark text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              06 — THE JOURNEY
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal">
              YOUR PRACTICE <span className="italic font-normal text-forest">STARTS HERE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            A simple, intentional 5-step progression guiding your entry into authentic yoga practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-ivory rounded-2xl p-6 sm:p-8 border border-sand-dark/40 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-terracotta group-hover:scale-110 transition-transform">
                    {s.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sage" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-forest mb-2">
                  {s.title}
                </h3>
                <p className="text-[11px] font-sans tracking-wider uppercase font-semibold text-sage-dark mb-4">
                  {s.subtitle}
                </p>
                <p className="text-xs font-sans text-charcoal-muted font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-sand-dark/30 text-[10px] font-sans uppercase tracking-widest text-charcoal-light flex items-center justify-between">
                <span>STEP {idx + 1} OF 5</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-terracotta">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
