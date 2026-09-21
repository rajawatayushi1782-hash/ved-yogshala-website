import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Sparkles, UserCheck } from 'lucide-react';

export default function InstructorSection({ onOpenBooking }) {
  const highlights = [
    {
      icon: <UserCheck className="w-5 h-5 text-terracotta" />,
      title: 'Personalized Guidance',
      desc: 'Adapting traditional postures to meet your individual physical structure and capability.',
    },
    {
      icon: <Shield className="w-5 h-5 text-terracotta" />,
      title: 'Posture & Alignment',
      desc: 'Emphasis on anatomical safety and sustainable joint mechanics to prevent fatigue.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-terracotta" />,
      title: 'Breath Awareness',
      desc: 'Integrating mindful pranayama to anchor focus and calm nervous system tension.',
    },
    {
      icon: <Heart className="w-5 h-5 text-terracotta" />,
      title: 'Beginner-Friendly Teaching',
      desc: 'Creating an encouraging, non-judgmental space for practitioners at every stage.',
    },
  ];

  return (
    <section id="instructor" className="py-24 md:py-36 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-sand border border-sand-dark/50">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                alt="Ayushi Tomar - Lead Yoga Instructor at Ved Yogshala Adajan Surat"
                data-cursor="GUIDE"
                className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.02] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-ivory/95 backdrop-blur-md border border-ivory/80 shadow-xl">
                <span className="text-[10px] tracking-[0.25em] font-sans uppercase font-bold text-terracotta block mb-1">
                  LEAD YOGA GUIDE & FOUNDER
                </span>
                <h3 className="font-serif text-3xl font-light text-forest">
                  AYUSHI TOMAR
                </h3>
                <p className="text-xs font-sans text-charcoal-muted mt-1">
                  Ved Yogshala &bull; Adajan, Surat
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-forest text-ivory p-4 rounded-full shadow-xl hidden md:flex flex-col items-center justify-center w-24 h-24 border border-ivory/20">
              <span className="font-serif text-xs italic">Authentic</span>
              <span className="font-sans text-[9px] tracking-widest font-bold uppercase text-sage-light">PRACTICE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              05 — MEET YOUR GUIDE
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal leading-tight mb-6">
              MINDFUL DIRECTION FOR <br />
              <span className="italic font-normal text-forest">YOUR PERSONAL JOURNEY.</span>
            </h2>

            <p className="text-base sm:text-lg font-sans font-light text-charcoal-muted leading-relaxed mb-8">
              Instructed by <strong className="font-semibold text-charcoal">Ayushi Tomar</strong>, Ved Yogshala provides structured, thoughtful yoga guidance centered around anatomical safety, intentional breath, and accessible practices for everyday life. Ayushi approaches yoga as a personal journey—where every practitioner is encouraged to listen to their body and develop sustainable physical confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl bg-sand/40 border border-sand-dark/30 hover:border-terracotta/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-ivory shadow-xs">
                      {h.icon}
                    </div>
                    <h4 className="font-serif text-xl font-normal text-forest">
                      {h.title}
                    </h4>
                  </div>
                  <p className="text-xs font-sans text-charcoal-muted leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => onOpenBooking('Personal Guidance with Ayushi Tomar')}
                data-cursor="MEET"
                className="group inline-flex items-center space-x-3 bg-forest hover:bg-forest-light text-ivory font-sans text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
              >
                <span>MEET AYUSHI & DISCUSS YOUR GOALS</span>
                <ArrowRight className="w-4 h-4 text-terracotta transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
