import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, User, Target, Calendar, Monitor } from 'lucide-react';

export default function PersonalizedPrograms({ onOpenBooking }) {
  const features = [
    {
      icon: <User className="w-5 h-5 text-terracotta" />,
      title: 'One-on-One Private Yoga',
      desc: 'Dedicated single-practitioner focus with custom modifications suited to your specific body structure and energy levels.',
    },
    {
      icon: <Target className="w-5 h-5 text-terracotta" />,
      title: 'Goal-Based Practice',
      desc: 'Tailored sequences built around your specific aspirations—flexibility, posture correction, stress ease, or movement confidence.',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-terracotta" />,
      title: 'Undivided Personal Attention',
      desc: 'Real-time hands-on posture adjustments and alignment feedback to ensure utmost anatomical safety and comfort.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-terracotta" />,
      title: 'Flexible Schedule Guidance',
      desc: 'Sessions scheduled around your professional and personal commitments in Adajan, Surat.',
    },
    {
      icon: <Monitor className="w-5 h-5 text-terracotta" />,
      title: 'Online / Studio Formats',
      desc: 'Seamless option to practice at the serene Adajan studio or from your home via high-definition live guidance.',
    },
  ];

  return (
    <section id="programs" className="py-24 md:py-36 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              08 — TAILORED PRACTICES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal leading-tight mb-6">
              YOUR BODY. <br />
              <span className="italic font-normal text-forest">YOUR PACE. YOUR PRACTICE.</span>
            </h2>

            <p className="text-base font-sans text-charcoal-muted leading-relaxed mb-8">
              No two bodies carry the exact same history or movement pattern. Our personalized programs are crafted to support your individual lifestyle, offering attentive instruction without rigid expectations or medical claims.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-sand/40 border border-sand-dark/40 hover:border-terracotta/40 transition-all flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-xl bg-ivory shadow-xs shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-forest mb-1">
                      {f.title}
                    </h3>
                    <p className="text-xs font-sans text-charcoal-muted font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenBooking('Personalized One-on-One Program')}
              data-cursor="DISCUSS"
              className="group inline-flex items-center space-x-3 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
            >
              <span>DISCUSS YOUR GOALS WITH AYUSHI</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-forest text-ivory p-8 sm:p-10 flex flex-col justify-between border border-ivory/10">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                alt="Personalized Yoga Session at Ved Yogshala"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] mix-blend-overlay"
              />
              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.3em] font-sans uppercase font-bold text-sage-light bg-forest-light/80 px-3 py-1 rounded-full">
                  STUDIO & VIRTUAL
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory mt-6 leading-snug">
                  "Movement that respects where you are today, while gently inviting where you can be tomorrow."
                </h3>
              </div>

              <div className="relative z-10 pt-6 border-t border-ivory/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-sans text-ivory/90 font-medium block">Adajan Studio & Live Online</span>
                  <span className="text-[10px] font-sans text-sage-light uppercase tracking-widest">Surat, Gujarat</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-ivory/30 flex items-center justify-center font-serif italic text-lg text-terracotta-light">
                  Ved
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
