import React from 'react';
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
      desc: 'Tailored sequences built around your specific aspirations, such as flexibility, posture correction, stress ease, or movement confidence.',
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
      title: 'Online and Studio Formats',
      desc: 'Seamless option to practice at the serene Adajan studio or from your home via high-definition live guidance.',
    },
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-sans font-medium text-terracotta block mb-3">
              Tailored Practices
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6 text-balance">
              Your body. Your pace. Your personal practice.
            </h2>

            <p className="text-base font-sans font-light text-charcoal-muted leading-relaxed mb-8">
              No two bodies carry the exact same history or movement pattern. Our personalized programs are crafted to support your individual lifestyle, offering attentive instruction without rigid expectations or medical claims.
            </p>

            <div className="space-y-3.5 mb-8">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-sand/40 border border-sand-dark/40 hover:border-terracotta/40 transition-colors duration-200 flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-xl bg-ivory shadow-xs shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-forest mb-0.5">
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
              data-cursor="Discuss"
              className="group inline-flex items-center space-x-2.5 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium px-7 py-3.5 rounded-full transition-colors duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Discuss your goals with Ayushi</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-forest text-ivory p-8 sm:p-10 flex flex-col justify-between border border-ivory/10">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                alt="Personalized Yoga Session at Ved Yogshala"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] mix-blend-overlay"
              />
              <div className="relative z-10">
                <span className="text-xs font-sans text-sage-light bg-forest-light/80 px-3 py-1 rounded-full">
                  Studio & Virtual
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory mt-6 leading-snug">
                  “Movement that respects where you are today, while gently inviting where you can be tomorrow.”
                </h3>
              </div>

              <div className="relative z-10 pt-6 border-t border-ivory/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-sans text-ivory/90 font-medium block">Adajan Studio & Live Online</span>
                  <span className="text-xs font-sans text-sage-light">Surat, Gujarat</span>
                </div>
                <div className="w-11 h-11 rounded-full border border-ivory/30 flex items-center justify-center font-serif italic text-lg text-terracotta-light">
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
