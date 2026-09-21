import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function GoalSelector({ onOpenBooking }) {
  const [selectedGoalId, setSelectedGoalId] = useState('flexibility');

  const goals = [
    {
      id: 'flexibility',
      title: 'MORE FLEXIBILITY',
      recTitle: 'Hatha & Mobility-Focused Practice',
      recDesc: 'Guided progressive stretches and joint warm-ups designed to open tight hamstrings, hips, and shoulders at your natural pace.',
      recommendedSessions: 'Hatha Yoga • Mobility Focus',
      icon: '🧘‍♀️',
    },
    {
      id: 'strength',
      title: 'A STRONGER BODY',
      recTitle: 'Vinyasa & Functional Core Sequences',
      recDesc: 'Body-weight resistance through flowing postures that build lean muscular endurance, stability, and posture strength.',
      recommendedSessions: 'Vinyasa Flow • Core Alignment',
      icon: '💪',
    },
    {
      id: 'movement',
      title: 'BETTER MOVEMENT',
      recTitle: 'Therapeutic Alignment & Joint Health',
      recDesc: 'Addressing desk fatigue, stiffness, and postural imbalance through mindful biomechanics and gentle active range of motion.',
      recommendedSessions: 'Therapeutic Yoga • Posture Care',
      icon: '🌿',
    },
    {
      id: 'stress',
      title: 'STRESS MANAGEMENT',
      recTitle: 'Pranayama & Restorative Breathwork',
      recDesc: 'Slowing down the sympathetic nervous system with targeted breath control, quiet meditation, and gentle restorative holds.',
      recommendedSessions: 'Pranayama • Restorative Yoga',
      icon: '🌬️',
    },
    {
      id: 'mindfulness',
      title: 'MINDFULNESS',
      recTitle: 'Mindful Movement & Meditation',
      recDesc: 'Cultivating present-moment awareness on and off the mat to reduce mental chatter and build internal calm.',
      recommendedSessions: 'Guided Meditation • Breath Awareness',
      icon: '✨',
    },
    {
      id: 'weight',
      title: 'WEIGHT MANAGEMENT',
      recTitle: 'Dynamic Flow & Sustainable Routine',
      recDesc: 'Supporting healthy metabolic awareness and body connection through consistent physical practice and mindful habit building.',
      recommendedSessions: 'Vinyasa Flow • Lifestyle Integration',
      icon: '🌱',
    },
    {
      id: 'routine',
      title: 'A CONSISTENT ROUTINE',
      recTitle: 'Structured Group or Studio Batches',
      recDesc: 'Establishing a regular morning or evening practice rhythm in a supportive, encouraging studio environment.',
      recommendedSessions: 'Regular Group Sessions (Adajan Studio)',
      icon: '🗓️',
    },
    {
      id: 'guidance',
      title: 'PERSONAL GUIDANCE',
      recTitle: 'One-on-One Customized Sessions',
      recDesc: 'Individualized direct guidance with Ayushi Tomar, tailored to your exact physical requirements, schedule, and personal goals.',
      recommendedSessions: 'Private 1-on-1 Personalized Sessions',
      icon: '👤',
    },
  ];

  const activeGoal = goals.find((g) => g.id === selectedGoalId) || goals[0];

  return (
    <section className="py-24 md:py-36 bg-forest-deep text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] font-sans font-medium text-sage-light uppercase block mb-3">
            04 — INTENTION MATCHER
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-ivory leading-tight">
            WHAT ARE YOU <br />
            <span className="italic font-normal text-terracotta-soft">LOOKING FOR?</span>
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-ivory/70 mt-4">
            Select your primary focus to discover the recommended practice pathway tailored for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16 max-w-4xl mx-auto">
          {goals.map((g) => {
            const isSelected = g.id === selectedGoalId;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGoalId(g.id)}
                className={`px-5 py-3 rounded-full text-xs font-sans tracking-widest uppercase font-semibold transition-all duration-300 border flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-terracotta border-terracotta text-ivory shadow-lg scale-105'
                    : 'bg-forest/60 border-ivory/20 text-ivory/80 hover:border-ivory/50 hover:text-ivory'
                }`}
                data-cursor="SELECT"
              >
                <span>{g.icon}</span>
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGoal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-forest-light via-forest to-forest-card rounded-3xl p-8 sm:p-12 border border-ivory/15 shadow-2xl relative"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sage/20 border border-sage/40 text-sage-light text-[10px] tracking-[0.25em] font-sans font-bold uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>RECOMMENDED PATHWAY</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl font-light text-ivory mb-4">
                {activeGoal.recTitle}
              </h3>

              <p className="font-sans text-base sm:text-lg font-light text-ivory/80 leading-relaxed mb-8">
                {activeGoal.recDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-ivory/15 gap-4">
                <div>
                  <span className="text-[10px] tracking-widest font-sans uppercase text-sage-light block mb-1">
                    RECOMMENDED SESSION FORMAT
                  </span>
                  <span className="font-serif text-lg text-ivory font-medium">
                    {activeGoal.recommendedSessions}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(activeGoal.title)}
                  className="w-full sm:w-auto bg-ivory hover:bg-sand text-forest font-sans text-xs tracking-widest font-bold uppercase px-7 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-md shrink-0"
                >
                  <span>START THIS PATHWAY</span>
                  <ArrowRight className="w-4 h-4 text-terracotta" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
