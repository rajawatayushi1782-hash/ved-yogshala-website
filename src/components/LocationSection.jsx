import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ArrowUpRight } from 'lucide-react';

export default function LocationSection({ onOpenBooking }) {
  return (
    <section id="location" className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs font-sans font-medium text-terracotta block mb-3">
              Visit the Studio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal text-balance">
              Come practice with us in Adajan.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            A peaceful sanctuary located in Adajan, Surat, designed for slow, authentic movement and mindful presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-sand/40 p-7 sm:p-8 rounded-3xl border border-sand-dark/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-terracotta text-ivory shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-sans font-medium text-terracotta block mb-0.5">
                    Studio Location
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-forest">
                    Ved Yogshala
                  </h3>
                  <p className="text-sm font-sans text-charcoal-muted mt-1 leading-relaxed">
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
                  <span className="font-medium">Mon to Sat (Morning & Evening Batches)</span>
                </div>
                <div className="flex items-center justify-between text-charcoal">
                  <span className="text-sage-dark">Lead Guide:</span>
                  <span className="font-medium text-terracotta">Ayushi Tomar</span>
                </div>
                <div className="flex items-center justify-between text-charcoal">
                  <span className="text-sage-dark">Formats Available:</span>
                  <span className="font-medium">Studio & Virtual Online</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="https://maps.google.com/?q=Adajan+Surat+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Directions"
                className="group flex items-center justify-center space-x-2 bg-forest hover:bg-forest-light text-ivory py-3.5 px-5 rounded-2xl text-xs font-sans font-medium transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <Navigation className="w-4 h-4 text-terracotta-soft" />
                <span>Get directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Ved%20Yogshala,%20I%20would%20like%20to%20inquire%20about%20yoga%20classes%20in%20Adajan."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WhatsApp"
                className="group flex items-center justify-center space-x-2 bg-sage hover:bg-sage-dark text-ivory py-3.5 px-5 rounded-2xl text-xs font-sans font-medium transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <MessageCircle className="w-4 h-4 text-ivory" />
                <span>WhatsApp us</span>
              </a>

              <a
                href="tel:+919876543210"
                className="group flex items-center justify-center space-x-2 bg-sand hover:bg-sand-dark text-charcoal py-3.5 px-5 rounded-2xl text-xs font-sans font-medium transition-colors duration-200 border border-sand-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <Phone className="w-4 h-4 text-terracotta" />
                <span>Call studio</span>
              </a>

              <button
                onClick={() => onOpenBooking('Location Booking')}
                className="group flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory py-3.5 px-5 rounded-2xl text-xs font-sans font-medium transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Book a session</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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
              className="w-full h-full filter saturate-[0.85] contrast-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
