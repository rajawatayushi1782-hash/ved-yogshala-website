import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';

export default function PracticeExplorer({ onOpenBooking }) {
  const [hoveredPractice, setHoveredPractice] = useState(null);
  const [selectedModalPractice, setSelectedModalPractice] = useState(null);

  const practices = [
    {
      id: '01',
      title: 'HATHA YOGA',
      tagline: 'Traditional foundations • Breath • Alignment',
      summary: 'Classic postures held with breath awareness to develop physical stability, balance, and quiet focus.',
      details: [
        'Ideal for beginners and ongoing practitioners wanting alignment mastery.',
        'Focuses on static holding, joint strength, and proper spinal posture.',
        'Combines foundational pranayama with slow physical integration.',
      ],
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '02',
      title: 'VINYASA YOGA',
      tagline: 'Fluid movement • Rhythmic breathing • Energy flow',
      summary: 'Dynamic sequence linking breath directly with movement for cardiovascular vitality and graceful movement.',
      details: [
        'Rhythmic flow sequences for stamina and body awareness.',
        'Encourages mental presence through active movement breath sync.',
        'Builds functional strength and core endurance.',
      ],
      image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '03',
      title: 'THERAPEUTIC YOGA',
      tagline: 'Gentle restoration • Joint mobility • Posture care',
      summary: 'Mindful, slow-paced practice tailored for gentle spinal care, stiffness relief, and stress reduction.',
      details: [
        'Gentle movement adaptations prioritizing joint longevity.',
        'Supports recovery from sedentary desk fatigue and back tightness.',
        'Nervous system soothing with extended restorative holds.',
      ],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '04',
      title: 'PERSONALIZED ONE-ON-ONE',
      tagline: 'Tailored sequence • Individual attention • Custom pace',
      summary: 'Private sessions curated specifically for your body goals, health history, and schedule.',
      details: [
        'Direct 1-on-1 guidance from Ayushi Tomar in Adajan.',
        'Customized adjustments matching your personal flexibility and rhythm.',
        'Progressive personal tracking and goal evaluation.',
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '05',
      title: 'GROUP SESSIONS',
      tagline: 'Community energy • Guided practice • Shared focus',
      summary: 'Group practices fostering motivating communal energy while maintaining personal guidance.',
      details: [
        'Small-batch group environment ensuring individual instructor checks.',
        'Consistent morning and evening studio timings in Adajan.',
        'Supportive, encouraging atmosphere for all levels.',
      ],
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '06',
      title: 'ONLINE & OFFLINE FORMATS',
      tagline: 'Flexible studio • Virtual home guidance',
      summary: 'Practice at the Adajan studio or join live interactive online sessions from your home.',
      details: [
        'High-definition live interactive online classes.',
        'Seamless switching between studio in-person and home practice.',
        'Dedicated guidance regardless of location.',
      ],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '07',
      title: 'MEDITATION & PRANAYAMA',
      tagline: 'Mindful stillness • Breath mastery • Inner calm',
      summary: 'Dedicated breath regulation and guided meditation techniques to quiet mental chatter.',
      details: [
        'Authentic pranayama techniques (Nadi Shodhana, Anulom Vilom, Kapalabhati).',
        'Guided mindfulness practice for stress and anxiety management.',
        'Enhances concentration and emotional balance.',
      ],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="practices" className="py-24 md:py-36 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              03 — OUR OFFERINGS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal">
              FIND YOUR <span className="italic font-normal text-terracotta">PRACTICE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            Thoughtfully designed practices honoring traditional roots while serving modern well-being in Adajan, Surat.
          </p>
        </div>

        <div className="space-y-2 relative">
          {practices.map((item) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredPractice(item.image)}
              onMouseLeave={() => setHoveredPractice(null)}
              onClick={() => setSelectedModalPractice(item)}
              className="group cursor-pointer py-8 px-6 sm:px-8 rounded-2xl border-b border-sand-dark/40 hover:bg-sand/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between"
              data-cursor="DISCOVER"
            >
              <div className="flex items-start sm:items-center space-x-6 md:space-x-10">
                <span className="font-serif text-xl sm:text-2xl font-light text-terracotta group-hover:text-forest transition-colors">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal group-hover:text-forest group-hover:translate-x-2 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans tracking-wide text-charcoal-light font-medium mt-1">
                    {item.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-4 self-end md:self-center">
                <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] font-sans uppercase font-bold text-terracotta opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW DETAILS
                </span>
                <div className="w-10 h-10 rounded-full border border-sand-dark group-hover:border-forest group-hover:bg-forest group-hover:text-ivory flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hoveredPractice && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-12 right-12 z-30 w-72 h-48 rounded-2xl overflow-hidden shadow-2xl pointer-events-none hidden lg:block border-2 border-ivory"
          >
            <img
              src={hoveredPractice}
              alt="Practice Preview"
              className="w-full h-full object-cover filter brightness-[0.95]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedModalPractice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto"
            onClick={() => setSelectedModalPractice(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative border border-sand-dark/60 overflow-hidden"
            >
              <button
                onClick={() => setSelectedModalPractice(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-sand hover:bg-sand-dark transition-colors text-charcoal"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-xs font-sans tracking-[0.25em] font-semibold text-terracotta uppercase block mb-2">
                PRACTICE {selectedModalPractice.id}
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl font-light text-forest mb-2">
                {selectedModalPractice.title}
              </h3>
              <p className="text-sm font-sans text-sage-dark font-medium uppercase tracking-wider mb-6">
                {selectedModalPractice.tagline}
              </p>

              <div className="rounded-2xl overflow-hidden aspect-video mb-6 bg-sand">
                <img
                  src={selectedModalPractice.image}
                  alt={selectedModalPractice.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base font-sans text-charcoal-muted leading-relaxed mb-6">
                {selectedModalPractice.summary}
              </p>

              <div className="space-y-3 mb-8">
                {selectedModalPractice.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm font-sans text-charcoal">
                    <div className="w-5 h-5 rounded-full bg-sage-light/50 text-forest flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-sand-dark/40">
                <button
                  onClick={() => {
                    const practiceName = selectedModalPractice.title;
                    setSelectedModalPractice(null);
                    onOpenBooking(practiceName);
                  }}
                  className="flex-1 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs tracking-widest font-semibold uppercase py-4 rounded-full transition-all flex items-center justify-center space-x-2"
                >
                  <span>ENQUIRE FOR THIS PRACTICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
