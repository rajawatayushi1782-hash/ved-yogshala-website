import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import CinematicHero from './components/CinematicHero';
import PhilosophySection from './components/PhilosophySection';
import BreathingExperience from './components/BreathingExperience';
import ApproachSection from './components/ApproachSection';
import PracticeExplorer from './components/PracticeExplorer';
import GoalSelector from './components/GoalSelector';
import InstructorSection from './components/InstructorSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ClassExperience from './components/ClassExperience';
import PersonalizedPrograms from './components/PersonalizedPrograms';
import WellnessSection from './components/WellnessSection';
import TransformationStory from './components/TransformationStory';
import Testimonials from './components/Testimonials';
import PhotoJournal from './components/PhotoJournal';
import FAQ from './components/FAQ';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import EnquiryFormModal from './components/EnquiryFormModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPracticeForBooking, setSelectedPracticeForBooking] = useState('');

  const handleOpenBooking = (practiceName = '') => {
    setSelectedPracticeForBooking(practiceName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedPracticeForBooking('');
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal relative selection:bg-terracotta selection:text-ivory">
      {/* Desktop Contextual Custom Cursor */}
      <CustomCursor />

      {/* Main Header / Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Experience */}
      <main>
        <CinematicHero onOpenBooking={() => handleOpenBooking()} />

        {/* Section 01: Philosophy */}
        <PhilosophySection />

        {/* Section 08: Signature Interactive Breathing Experience */}
        <BreathingExperience />

        {/* Section 09: Our Approach */}
        <ApproachSection />

        {/* Section 10: Practices Explorer */}
        <PracticeExplorer onOpenBooking={handleOpenBooking} />

        {/* Section 11: Goal Matcher */}
        <GoalSelector onOpenBooking={handleOpenBooking} />

        {/* Section 12: Meet Your Guide (Ayushi Tomar) */}
        <InstructorSection onOpenBooking={handleOpenBooking} />

        {/* Section 13: Practice Progression Timeline */}
        <ExperienceTimeline />

        {/* Section 14: Cinematic Session Rhythm */}
        <ClassExperience />

        {/* Section 15: Personalized Programs */}
        <PersonalizedPrograms onOpenBooking={handleOpenBooking} />

        {/* Section 16: Sustainable Wellness */}
        <WellnessSection />

        {/* Section 17: Transformation Story (Qualitative Internal Shifts) */}
        <TransformationStory />

        {/* Section 18: Practitioner Reflections / Testimonials */}
        <Testimonials />

        {/* Section 19: Photo Journal (A Day at Ved Yogshala) */}
        <PhotoJournal />

        {/* Section 20: FAQ */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* Section 21: Studio Location & Directions */}
        <LocationSection onOpenBooking={handleOpenBooking} />

        {/* Section 22: Final Emotional Climax CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking / Enquiry Form Modal */}
      <EnquiryFormModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialPractice={selectedPracticeForBooking}
      />

      {/* Mobile Persistent Sticky CTA */}
      <StickyMobileCTA onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
