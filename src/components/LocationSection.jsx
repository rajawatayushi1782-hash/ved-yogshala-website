import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ArrowUpRight } from 'lucide-react';

export default function LocationSection({ onOpenBooking }) {
  return (
    <section id="location" className="py-24 md:py-36 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              14 — VISIT THE STUDIO
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal">
              COME PRACTICE <span className="italic font-normal text-forest">WITH US.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            A peaceful sanctuary located in Adajan, Surat, designed for slow, authentic movement and mindful presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-sand/40 p-8 rounded-3xl border border-sand-dark/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-terracotta text-ivory shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-terracotta block mb-1">
                    STUDIO LOCATION
                  </span>
                  <h3 className="font-serif text-3xl font-light text-forest">
                    VED YOGSHALA
                  </h3>
                  <p className="text-sm font-sans text-charcoal-muted mt-2 leading-relaxed">
                    Adajan, Surat, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-sand-dark/40 text-xs font-sans">
                <div className="flex items-center justify-between text-charcoal">
                  <div className="flex items-center space-x-2 text-sage-dark">
                    <Clock className="w-4 h-4" />
                    <span>Practice Schedule:</span>
                  </div>
                  <span className="font-semibold">Mon – Sat (Morning & Evening Batches)</span>
                </div>
                <div className="flex items-center justify-between text-charcoal">
                  <span className="text-sage-dark">Lead Guide:</span>
                  <span className="font-semibold text-terracotta">Ayushi Tomar</span>
                </div>
                <div className="flex items-center justify-between text-charcoal">
                  <span className="text-sage-dark">Formats Available:</span>
                  <span className="font-semibold">Studio & Virtual Online</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://maps.google.com/?q=Adajan+Surat+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="DIRECTIONS"
                className="group flex items-center justify-center space-x-2 bg-forest hover:bg-forest-light text-ivory py-4 px-5 rounded-2xl text-xs font-sans tracking-wider uppercase font-semibold transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-terracotta" />
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20would%20like%20to%20inquire%20about%20yoga%20classes%20in%20Adajan."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WHATSAPP"
                className="group flex items-center justify-center space-x-2 bg-sage hover:bg-sage-dark text-ivory py-4 px-5 rounded-2xl text-xs font-sans tracking-wider uppercase font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-ivory" />
                <span>WHATSAPP US</span>
              </a>

              <a
                href="tel:+919876543210"
                className="group flex items-center justify-center space-x-2 bg-sand hover:bg-sand-dark text-charcoal py-4 px-5 rounded-2xl text-xs font-sans tracking-wider uppercase font-semibold transition-all border border-sand-dark"
              >
                <Phone className="w-4 h-4 text-terracotta" />
                <span>CALL STUDIO</span>
              </a>

              <button
                onClick={() => onOpenBooking('Location Booking')}
                className="group flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory py-4 px-5 rounded-2xl text-xs font-sans tracking-wider uppercase font-semibold transition-all shadow-md"
              >
                <span>BOOK A SESSION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 min-h-[380px] rounded-3xl overflow-hidden shadow-xl border border-sand-dark/60 bg-sand relative">
            <iframe
              title="Ved Yogshala Location in Adajan Surat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59518.78918236173!2d72.77259834191406!3d21.1959828854089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b043!2sAdajan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.8] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
