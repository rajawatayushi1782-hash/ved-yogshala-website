import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Is yoga suitable for complete beginners?',
      a: 'Yes, absolutely. At Ved Yogshala, all sessions are structured with clear modifications so beginners can learn foundational postures safely without pressure or competition.',
    },
    {
      q: 'What should I wear to sessions?',
      a: 'Wear comfortable, breathable clothing that allows free movement of your arms, legs, and torso. Stretchable cotton or soft athletic wear is ideal.',
    },
    {
      q: 'Do I need prior yoga experience?',
      a: 'No prior experience is required. Our instructor, Ayushi Tomar, guides every movement with clear alignment cues and personalized posture adjustments.',
    },
    {
      q: 'Are live online sessions available?',
      a: 'Yes, live interactive virtual sessions are offered for practitioners who prefer joining remotely from home while receiving real-time posture feedback.',
    },
    {
      q: 'Are one-on-one personalized sessions available?',
      a: 'Yes, private 1-on-1 sessions are available for individuals looking for focused instruction tailored to their specific body rhythm, goals, and schedule.',
    },
    {
      q: 'How do I book or inquire about a session?',
      a: 'You can easily request a session by clicking any “Book a Session” button on this website, sending us a direct message on WhatsApp, or giving us a call at our Adajan studio.',
    },
    {
      q: 'What should I bring to class?',
      a: 'Bring a personal water bottle and a small sweat towel. Studio mats are available in Adajan, though practitioners are welcome to bring their personal yoga mat if preferred.',
    },
    {
      q: 'Are trial or introductory sessions available?',
      a: 'Trial availability and batch timings depend on current studio capacity in Adajan. Please reach out via our inquiry form or WhatsApp to check current batch openings.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-ivory-dark text-charcoal relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-sans font-medium text-terracotta block mb-3">
            Frequent Questions
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal text-balance">
            Common questions about practicing with us.
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-ivory border-terracotta/40 shadow-xs'
                    : 'bg-ivory/60 border-sand-dark/50 hover:border-sand-dark'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between space-x-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl font-light text-charcoal pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-colors duration-200 shrink-0 ${isOpen ? 'bg-terracotta text-ivory' : 'bg-sand text-charcoal'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-8 pb-6 text-sm font-sans font-light text-charcoal-muted leading-relaxed border-t border-sand-dark/30 pt-4"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl bg-ivory border border-sand-dark/50">
          <p className="font-serif text-2xl font-light text-forest mb-2">Have a question not listed here?</p>
          <p className="text-xs font-sans text-charcoal-muted mb-6">Ayushi and the Ved Yogshala team are happy to assist you.</p>
          <button
            onClick={() => onOpenBooking('General Inquiry from FAQ')}
            className="inline-flex items-center space-x-2 bg-forest hover:bg-forest-light text-ivory font-sans text-xs font-medium px-6 py-3 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            <span>Send an inquiry</span>
          </button>
        </div>
      </div>
    </section>
  );
}
