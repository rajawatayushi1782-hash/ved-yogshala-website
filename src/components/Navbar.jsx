import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#philosophy' },
    { name: 'PRACTICES', href: '#practices' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'GUIDE', href: '#instructor' },
    { name: 'LOCATION', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand-dark/40 py-4 shadow-sm'
            : 'bg-gradient-to-b from-charcoal/40 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col group"
            data-cursor="HOME"
          >
            <span
              className={`font-serif text-2xl md:text-3xl tracking-wide font-medium transition-colors ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
            >
              VED YOGSHALA
            </span>
            <span
              className={`text-[9px] tracking-[0.25em] font-sans uppercase font-medium transition-colors ${
                scrolled ? 'text-charcoal-light' : 'text-ivory/80'
              }`}
            >
              ADAJAN • SURAT
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="VIEW"
                className={`text-xs tracking-[0.2em] font-medium font-sans uppercase transition-all hover:text-terracotta relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-terracotta hover:after:w-full after:transition-all ${
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
              data-cursor="BEGIN"
              className={`group flex items-center space-x-2 text-xs tracking-[0.18em] font-sans font-medium px-5 py-2.5 rounded-full transition-all duration-300 border ${
                scrolled
                  ? 'border-forest text-forest hover:bg-forest hover:text-ivory'
                  : 'border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal'
              }`}
            >
              <span>BOOK A SESSION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
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
                <div className="font-serif text-2xl tracking-wide font-medium text-ivory">
                  VED YOGSHALA
                </div>
                <div className="text-[10px] tracking-[0.25em] font-sans uppercase text-sage-light">
                  ADAJAN • SURAT
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-ivory hover:text-terracotta transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="my-12 flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="font-serif text-4xl md:text-5xl font-light hover:text-terracotta-soft transition-colors flex items-center justify-between border-b border-ivory/10 pb-4"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans tracking-widest text-sage">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="space-y-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-sm tracking-[0.2em] font-semibold py-4 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg"
              >
                <span>BOOK A SESSION</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <div className="flex justify-between items-center text-xs font-sans text-ivory/70 pt-4 border-t border-ivory/10">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 hover:text-ivory transition-colors"
                >
                  <Phone className="w-4 h-4 text-terracotta" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20would%20like%20to%20inquire%20about%20yoga%20sessions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-ivory transition-colors text-sage-light"
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
