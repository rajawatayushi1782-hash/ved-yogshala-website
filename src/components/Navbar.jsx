import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#philosophy' },
    { name: 'Practices', href: '#practices' },
    { name: 'Approach', href: '#approach' },
    { name: 'Programs', href: '#programs' },
    { name: 'Guide', href: '#instructor' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand-dark/50 py-3.5 shadow-xs'
            : 'bg-gradient-to-b from-forest-deep/60 to-transparent py-5 text-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-sm"
            data-cursor="Home"
          >
            <span
              className={`font-serif text-2xl md:text-3xl font-light tracking-wide transition-colors ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
            >
              Ved Yogshala
            </span>
            <span
              className={`text-xs font-sans font-medium transition-colors ${
                scrolled ? 'text-charcoal-light' : 'text-ivory/80'
              }`}
            >
              Adajan, Surat
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="View"
                className={`text-sm font-medium font-sans transition-colors duration-200 hover:text-terracotta relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-sm ${
                  scrolled ? 'text-charcoal/80' : 'text-ivory/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              data-cursor="Begin"
              className={`group inline-flex items-center space-x-2 text-xs font-sans font-medium px-5 py-2.5 rounded-full transition-colors duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                scrolled
                  ? 'border-forest text-forest hover:bg-forest hover:text-ivory'
                  : 'border-ivory/60 text-ivory hover:bg-ivory hover:text-forest-deep'
              }`}
            >
              <span>Book a Session</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
              scrolled ? 'text-charcoal' : 'text-ivory'
            }`}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest text-ivory flex flex-col justify-between p-8 md:p-12 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif text-2xl tracking-wide font-light text-ivory">
                  Ved Yogshala
                </div>
                <div className="text-xs font-sans text-sage-light">
                  Adajan, Surat
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-ivory hover:text-terracotta-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg"
                aria-label="Close Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="my-10 flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04 }}
                  className="font-serif text-3xl sm:text-4xl font-light hover:text-terracotta-soft transition-colors flex items-center justify-between border-b border-ivory/10 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-sage">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-sm font-medium py-3.5 rounded-full flex items-center justify-center space-x-2 transition-colors duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              >
                <span>Book a Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-xs font-sans text-ivory/70 pt-4 border-t border-ivory/10">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 hover:text-ivory transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-terracotta-soft" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20would%20like%20to%20inquire%20about%20yoga%20sessions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-ivory transition-colors text-sage-light py-1"
                >
                  <MessageCircle className="w-4 h-4 text-sage" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
