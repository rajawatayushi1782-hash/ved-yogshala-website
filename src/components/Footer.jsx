import React from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-deep text-ivory pt-20 pb-12 border-t border-ivory/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl md:text-4xl tracking-wide font-light text-ivory block mb-2">
                Ved Yogshala
              </span>
              <p className="text-xs font-sans text-sage-light font-medium mb-4">
                Authentic Yoga, Wellness & Mindful Living
              </p>
              <p className="text-sm font-sans font-light text-ivory/70 max-w-sm leading-relaxed mb-6">
                Guided yoga, breathwork, and mindful movement instructed by Ayushi Tomar in Adajan, Surat, Gujarat.
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs font-sans text-ivory/80">
              <span className="inline-block w-2 h-2 rounded-full bg-terracotta motion-reduce:animate-none animate-pulse" />
              <span>Adajan Studio & Live Virtual Batches</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 font-sans text-sm">
            <span className="text-xs font-medium text-terracotta-soft block mb-3">
              Navigation
            </span>
            <ul className="space-y-2.5 text-ivory/80 text-xs">
              <li><a href="#philosophy" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">About philosophy</a></li>
              <li><a href="#practices" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">Our practices</a></li>
              <li><a href="#approach" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">Four pillars</a></li>
              <li><a href="#programs" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">1-on-1 programs</a></li>
              <li><a href="#instructor" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">Meet Ayushi</a></li>
              <li><a href="#faq" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">Frequent questions</a></li>
              <li><a href="#location" className="hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta">Adajan location</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-sans font-medium text-terracotta-soft block mb-3">
              Connect & Book
            </span>
            <div className="space-y-2.5 text-xs font-sans text-ivory/80">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-ivory transition-colors duration-200 p-2.5 rounded-xl bg-ivory/5 border border-ivory/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta"
              >
                <MessageCircle className="w-4 h-4 text-sage-light" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 hover:text-ivory transition-colors duration-200 p-2.5 rounded-xl bg-ivory/5 border border-ivory/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta"
              >
                <Phone className="w-4 h-4 text-terracotta-soft" />
                <span>Call Studio: +91 98765 43210</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-ivory transition-colors duration-200 p-2.5 rounded-xl bg-ivory/5 border border-ivory/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta"
              >
                <svg className="w-4 h-4 text-sage-light fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@vedyogshala.surat</span>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-3 bg-terracotta hover:bg-terracotta-hover text-ivory font-sans text-xs font-medium py-3 rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            >
              Book a Session
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-ivory/60">
          <p>© {new Date().getFullYear()} Ved Yogshala. Adajan, Surat, Gujarat.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-ivory/70 hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terracotta"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
