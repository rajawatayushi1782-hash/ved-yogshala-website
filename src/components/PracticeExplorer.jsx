import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';

export default function PracticeExplorer({ onOpenBooking }) {
  const [hoveredPractice, setHoveredPractice] = useState(null);
  const [selectedModalPractice, setSelectedModalPractice] = useState(null);

  const practices = [
    {
      id: '01',
      title: 'Hatha Yoga',
      tagline: 'Traditional foundations, breath awareness, alignment',
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
      title: 'Vinyasa Yoga',
      tagline: 'Fluid movement, rhythmic breathing, energy flow',
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
      title: 'Therapeutic Yoga',
      tagline: 'Gentle restoration, joint mobility, posture care',
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
      title: 'Personalized One-on-One',
      tagline: 'Tailored sequence, individual attention, custom pace',
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
      title: 'Group Sessions',
      tagline: 'Community energy, guided practice, shared focus',
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
      title: 'Online & Offline Formats',
      tagline: 'Flexible studio and virtual home guidance',
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
      title: 'Meditation & Pranayama',
      tagline: 'Mindful stillness, breath mastery, inner calm',
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
    <section id="practices" className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs font-sans font-medium text-terracotta block mb-3">
              Our Offerings
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal text-balance">
              Find your practice pathway.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            Thoughtfully designed practices honoring traditional roots while serving modern well-being in Adajan, Surat.
          </p>
        </div>

        <div className="space-y-2 relative" role="list">
          {practices.map((item) => (
            <div
              key={item.id}
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setHoveredPractice(item.image)}
              onMouseLeave={() => setHoveredPractice(null)}
              onClick={() => setSelectedModalPractice(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedModalPractice(item);
                }
              }}
              className="group cursor-pointer py-7 px-6 sm:px-8 rounded-2xl border-b border-sand-dark/40 hover:bg-sand/40 transition-colors duration-200 flex flex-col md:flex-row md:items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              data-cursor="Discover"
            >
              <div className="flex items-start sm:items-center space-x-6 md:space-x-8">
                <span className="font-serif text-xl sm:text-2xl font-light text-terracotta group-hover:text-forest transition-colors duration-200">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-charcoal group-hover:text-forest transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-charcoal-light font-normal mt-1">
                    {item.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-3 self-end md:self-center">
                <span className="hidden sm:inline-block text-xs font-sans font-medium text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View details
                </span>
                <div className="w-9 h-9 rounded-full border border-sand-dark group-hover:border-forest group-hover:bg-forest group-hover:text-ivory flex items-center justify-center transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hoveredPractice && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-12 right-12 z-30 w-72 h-48 rounded-2xl overflow-hidden shadow-xl pointer-events-none hidden lg:block border border-ivory"
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
          <div
            className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto"
            onClick={() => setSelectedModalPractice(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative border border-sand-dark/60 overflow-hidden"
            >
              <button
                onClick={() => setSelectedModalPractice(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-sand hover:bg-sand-dark transition-colors duration-200 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                aria-label="Close Practice Details"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-xs font-sans font-medium text-terracotta block mb-2">
                Practice {selectedModalPractice.id}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-forest mb-2">
                {selectedModalPractice.title}
              </h3>
              <p className="text-xs font-sans text-sage-dark font-medium mb-6">
                {selectedModalPractice.tagline}
              </p>

              <div className="rounded-2xl overflow-hidden aspect-video mb-6 bg-sand">
                <img
                  src={selectedModalPractice.image}
                  alt={selectedModalPractice.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm sm:text-base font-sans text-charcoal-muted leading-relaxed mb-6 font-light">
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
                  className="flex-1 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium py-3.5 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Enquire for this practice</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
