import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryFormModal({ isOpen, onClose, initialPractice = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    ageGroup: '26-35',
    primaryGoal: 'Flexibility & Strength',
    preferredPractice: initialPractice || 'Hatha Yoga',
    format: 'Studio Adajan',
    preferredTime: 'Morning Batch',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPractice) {
      setFormData((prev) => ({ ...prev, preferredPractice: initialPractice }));
    }
  }, [initialPractice]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 60,
        spread: 55,
        origin: { y: 0.6 },
        colors: ['#C86D51', '#94A187', '#1A2E26', '#EFEBE4'],
      });
    } catch {
      // Fallback
    }

    setSubmitted(true);

    const text = encodeURIComponent(
      `Hello Ved Yogshala,\n\nI would like to book/inquire about a yoga session.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Age Group:* ${formData.ageGroup}\n*Primary Goal:* ${formData.primaryGoal}\n*Preferred Practice:* ${formData.preferredPractice}\n*Format:* ${formData.format}\n*Preferred Time:* ${formData.preferredTime}\n*Message:* ${formData.message || 'N/A'}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 16 }}
          className="bg-ivory rounded-3xl max-w-2xl w-full p-7 sm:p-10 shadow-lg relative border border-sand-dark my-8 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-sand hover:bg-sand-dark transition-colors duration-200 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              <span className="text-xs font-sans font-medium text-terracotta block mb-1">
                Ved Yogshala, Adajan
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-forest mb-2">
                Let’s begin your journey.
              </h2>
              <p className="text-sm font-sans text-charcoal-muted mb-6">
                Fill in your details below to connect directly with instructor Ayushi Tomar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Age Group
                    </label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    >
                      <option value="Under 25">Under 25</option>
                      <option value="26-35">26-35</option>
                      <option value="36-50">36-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Primary Focus / Goal
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    >
                      <option value="Flexibility & Strength">Flexibility & Strength</option>
                      <option value="Stress Ease & Calm">Stress Ease & Calm</option>
                      <option value="Better Movement & Posture">Better Movement & Posture</option>
                      <option value="Weight Management">Weight Management</option>
                      <option value="Personal Guidance">Personal Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Preferred Practice
                    </label>
                    <select
                      value={formData.preferredPractice}
                      onChange={(e) => setFormData({ ...formData, preferredPractice: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    >
                      <option value="Hatha Yoga">Hatha Yoga</option>
                      <option value="Vinyasa Flow">Vinyasa Flow</option>
                      <option value="Therapeutic Yoga">Therapeutic Yoga</option>
                      <option value="Personalized 1-on-1">Personalized 1-on-1</option>
                      <option value="Group Studio Sessions">Group Studio Sessions</option>
                      <option value="Meditation & Breathwork">Meditation & Breathwork</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Format Option
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    >
                      <option value="Studio Adajan (In-Person)">Studio Adajan (In-Person)</option>
                      <option value="Live Virtual (Online)">Live Virtual (Online)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                    >
                      <option value="Morning Batch">Morning Batch</option>
                      <option value="Evening Batch">Evening Batch</option>
                      <option value="Flexible 1-on-1 Slot">Flexible 1-on-1 Slot</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                    Additional Notes / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any health considerations or specific timing preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium py-3.5 rounded-full transition-colors duration-200 shadow-md flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <span>Start my journey</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-sage-light/50 text-forest mx-auto flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="font-serif text-3xl font-light text-forest mb-2">
                Thank you, {formData.name}.
              </h3>
              <p className="font-sans text-sm text-charcoal-muted max-w-md mx-auto mb-6">
                Your inquiry has been logged. Redirecting you to WhatsApp to dispatch your session details directly to instructor Ayushi Tomar…
              </p>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hello Ved Yogshala,\n\nI would like to book a session.\nName: ${formData.name}\nPhone: ${formData.phone}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-sage hover:bg-sage-dark text-ivory px-6 py-3 rounded-full text-xs font-sans font-medium shadow-sm transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp directly</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
