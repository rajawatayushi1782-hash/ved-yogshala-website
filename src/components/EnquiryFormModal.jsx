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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C86D51', '#94A187', '#1A2E26', '#EFEBE4'],
      });
    } catch (err) {
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-ivory rounded-3xl max-w-2xl w-full p-8 sm:p-12 shadow-2xl relative border border-sand-dark my-8 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-sand hover:bg-sand-dark transition-colors text-charcoal"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>

          {!submitted ? (
            <>
              <span className="text-xs font-sans tracking-[0.3em] font-semibold text-terracotta uppercase block mb-2">
                VED YOGSHALA &bull; ADAJAN
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest mb-2">
                LET'S BEGIN.
              </h2>
              <p className="text-sm font-sans text-charcoal-muted mb-8">
                Fill in your details below to connect directly with instructor Ayushi Tomar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Age Group
                    </label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    >
                      <option value="Under 25">Under 25</option>
                      <option value="26-35">26 – 35</option>
                      <option value="36-50">36 – 50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Primary Focus / Goal
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    >
                      <option value="Flexibility & Strength">Flexibility & Strength</option>
                      <option value="Stress Ease & Calm">Stress Ease & Calm</option>
                      <option value="Better Movement & Posture">Better Movement & Posture</option>
                      <option value="Weight Management">Weight Management</option>
                      <option value="Personal Guidance">Personal Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Preferred Practice
                    </label>
                    <select
                      value={formData.preferredPractice}
                      onChange={(e) => setFormData({ ...formData, preferredPractice: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Format Option
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    >
                      <option value="Studio Adajan (In-Person)">Studio Adajan (In-Person)</option>
                      <option value="Live Virtual (Online)">Live Virtual (Online)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                    >
                      <option value="Morning Batch">Morning Batch</option>
                      <option value="Evening Batch">Evening Batch</option>
                      <option value="Flexible 1-on-1 Slot">Flexible 1-on-1 Slot</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Additional Notes / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any health considerations or specific timing preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sand/40 border border-sand-dark/60 focus:border-terracotta focus:bg-ivory outline-none text-sm font-sans transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs tracking-[0.2em] font-semibold uppercase py-4 rounded-full transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>START MY JOURNEY</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-sage-light/50 text-forest mx-auto flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-terracotta" />
              </div>
              <h3 className="font-serif text-4xl font-light text-forest mb-2">
                THANK YOU, {formData.name.toUpperCase()}.
              </h3>
              <p className="font-sans text-base text-charcoal-muted max-w-md mx-auto mb-8">
                Your inquiry has been logged. Redirecting you to WhatsApp to dispatch your session details directly to instructor Ayushi Tomar...
              </p>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hello Ved Yogshala,\n\nI would like to book a session.\nName: ${formData.name}\nPhone: ${formData.phone}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-sage text-ivory px-6 py-3 rounded-full text-xs font-sans tracking-widest font-semibold uppercase shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>OPEN WHATSAPP DIRECTLY</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
