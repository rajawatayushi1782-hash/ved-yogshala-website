import React from 'react';
import { motion } from 'framer-motion';

export default function PhotoJournal() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop',
      caption: 'Morning Light Practice in Adajan',
      span: 'col-span-12 md:col-span-8 aspect-[16/10]',
    },
    {
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
      caption: 'Quiet Breath Regulation',
      span: 'col-span-12 md:col-span-4 aspect-[4/5]',
    },
    {
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
      caption: 'Teacher Posture Adjustment',
      span: 'col-span-12 md:col-span-4 aspect-[4/5]',
    },
    {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1000&auto=format&fit=crop',
      caption: 'Fluid Vinyasa Transitions',
      span: 'col-span-12 md:col-span-8 aspect-[16/10]',
    },
    {
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
      caption: 'Restorative Savasana Stillness',
      span: 'col-span-12 md:col-span-12 aspect-[21/9]',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-sand-dark/60">
          <div>
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-terracotta uppercase block mb-3">
              12 — VISUAL JOURNAL
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-charcoal">
              A DAY AT <span className="italic font-normal text-forest">VED YOGSHALA.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans font-light text-charcoal-muted mt-4 md:mt-0">
            A glimpse into authentic morning practice, quiet details, natural studio light, and mindful moments in Adajan.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden bg-sand group border border-sand-dark/40 shadow-sm ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.caption}
                data-cursor="JOURNAL"
                className="w-full h-full object-cover filter brightness-[0.96] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-6 left-6 right-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] tracking-[0.2em] font-sans uppercase font-bold text-terracotta bg-ivory px-3 py-1 rounded-full text-charcoal">
                  ADAJAN STUDIO
                </span>
                <p className="font-serif text-xl sm:text-2xl font-light mt-2 text-ivory">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
