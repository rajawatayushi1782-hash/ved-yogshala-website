import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Flame, Compass, Wind, Sun, Calendar, User } from 'lucide-react';

export default function GoalSelector({ onOpenBooking }) {
  const [selectedGoalId, setSelectedGoalId] = useState('flexibility');

  const goals = [
    {
      id: 'flexibility',
      title: 'More Flexibility',
      recTitle: 'Hatha & Mobility-Focused Practice',
      recDesc: 'Guided progressive stretches and joint warm-ups designed to open tight hamstrings, hips, and shoulders at your natural pace.',
      recommendedSessions: 'Hatha Yoga / Mobility Focus',
      icon: Activity,
    },
    {
      id: 'strength',
      title: 'A Stronger Body',
      recTitle: 'Vinyasa & Functional Core Sequences',
      recDesc: 'Body-weight resistance through flowing postures that build lean muscular endurance, stability, and posture strength.',
      recommendedSessions: 'Vinyasa Flow / Core Alignment',
      icon: Flame,
    },
    {
      id: 'movement',
      title: 'Better Movement',
      recTitle: 'Therapeutic Alignment & Joint Health',
      recDesc: 'Addressing desk fatigue, stiffness, and postural imbalance through mindful biomechanics and gentle active range of motion.',
      recommendedSessions: 'Therapeutic Yoga / Posture Care',
      icon: Compass,
    },
    {
      id: 'stress',
      title: 'Stress Management',
      recTitle: 'Pranayama & Restorative Breathwork',
      recDesc: 'Slowing down the sympathetic nervous system with targeted breath control, quiet meditation, and gentle restorative holds.',
      recommendedSessions: 'Pranayama / Restorative Yoga',
      icon: Wind,
    },
    {
      id: 'mindfulness',
      title: 'Mindfulness',
      recTitle: 'Mindful Movement & Meditation',
      recDesc: 'Cultivating present-moment awareness on and off the mat to reduce mental chatter and build internal calm.',
      recommendedSessions: 'Guided Meditation / Breath Awareness',
      icon: Sparkles,
    },
    {
      id: 'weight',
      title: 'Weight Management',
      recTitle: 'Dynamic Flow & Sustainable Routine',
      recDesc: 'Supporting healthy metabolic awareness and body connection through consistent physical practice and mindful habit building.',
      recommendedSessions: 'Vinyasa Flow / Lifestyle Integration',
      icon: Sun,
    },
    {
      id: 'routine',
      title: 'A Consistent Routine',
      recTitle: 'Structured Group or Studio Batches',
      recDesc: 'Establishing a regular morning or evening practice rhythm in a supportive, encouraging studio environment.',
      recommendedSessions: 'Regular Group Sessions (Adajan Studio)',
      icon: Calendar,
    },
    {
      id: 'guidance',
      title: 'Personal Guidance',
      recTitle: 'One-on-One Customized Sessions',
      recDesc: 'Individualized direct guidance with Ayushi Tomar, tailored to your exact physical requirements, schedule, and personal goals.',
      recommendedSessions: 'Private 1-on-1 Personalized Sessions',
      icon: User,
    },
  ];

  const activeGoal = goals.find((g) => g.id === selectedGoalId) || goals[0];

  return (
    <section className="py-24 md:py-32 bg-forest-deep text-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-sans font-medium text-sage-light block mb-3">
            Intention Matcher
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-tight text-balance">
            What are you looking to cultivate?
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-ivory/75 mt-4">
            Select your primary focus to discover the recommended practice pathway tailored for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14 max-w-4xl mx-auto" role="tablist" aria-label="Goal Selection Tabs">
          {goals.map((g) => {
            const isSelected = g.id === selectedGoalId;
            const IconComp = g.icon;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedGoalId(g.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-colors duration-200 border flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory ${
                  isSelected
                    ? 'bg-terracotta border-terracotta text-ivory shadow-md'
                    : 'bg-forest/60 border-ivory/20 text-ivory/80 hover:border-ivory/50 hover:text-ivory'
                }`}
                data-cursor="Select"
              >
                <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-ivory' : 'text-sage-light'}`} />
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGoal.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-forest rounded-3xl p-8 sm:p-10 border border-ivory/15 shadow-md relative"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sage/20 border border-sage/40 text-sage-light text-xs font-sans font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5 text-terracotta-soft" />
                <span>Recommended pathway</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory mb-3">
                {activeGoal.recTitle}
              </h3>

              <p className="font-sans text-base font-light text-ivory/80 leading-relaxed mb-8">
                {activeGoal.recDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-ivory/15 gap-4">
                <div>
                  <span className="text-xs font-sans text-sage-light block mb-1">
                    Recommended session format
                  </span>
                  <span className="font-serif text-lg text-ivory font-light">
                    {activeGoal.recommendedSessions}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(activeGoal.title)}
                  className="w-full sm:w-auto bg-ivory hover:bg-sand text-forest font-sans text-xs font-medium px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2 shadow-xs shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                >
                  <span>Start this pathway</span>
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
