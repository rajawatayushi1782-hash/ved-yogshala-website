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
    <section id="instructor" className="py-24 md:py-32 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-sand border border-sand-dark/50">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                alt="Ayushi Tomar, Lead Yoga Instructor at Ved Yogshala Adajan Surat"
                data-cursor="Guide"
                className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-ivory/95 backdrop-blur-md border border-ivory/80 shadow-lg">
                <span className="text-xs font-sans font-medium text-terracotta block mb-1">
                  Lead Yoga Guide & Founder
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-forest">
                  Ayushi Tomar
                </h3>
                <p className="text-xs font-sans text-charcoal-muted mt-0.5">
                  Ved Yogshala, Adajan, Surat
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-forest text-ivory p-3.5 rounded-full shadow-lg hidden md:flex flex-col items-center justify-center w-20 h-20 border border-ivory/20">
              <span className="font-serif text-xs italic">Authentic</span>
              <span className="font-sans text-[10px] text-sage-light">Practice</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-sans font-medium text-terracotta block mb-3">
              Meet Your Guide
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6 text-balance">
              Mindful direction for your personal journey.
            </h2>

            <p className="text-base sm:text-lg font-sans font-light text-charcoal-muted leading-relaxed mb-8">
              Instructed by <strong className="font-semibold text-charcoal">Ayushi Tomar</strong>, Ved Yogshala provides structured, thoughtful yoga guidance centered around anatomical safety, intentional breath, and accessible practices for everyday life. Ayushi approaches yoga as a personal journey, where every practitioner is encouraged to listen to their body and develop sustainable physical confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl bg-sand/40 border border-sand-dark/40 hover:border-terracotta/40 transition-colors duration-200">
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
                data-cursor="Meet"
                className="group inline-flex items-center space-x-2.5 bg-forest hover:bg-forest-light text-ivory font-sans text-xs font-medium px-7 py-3.5 rounded-full transition-colors duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Meet Ayushi and discuss your goals</span>
                <ArrowRight className="w-4 h-4 text-terracotta-soft transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
