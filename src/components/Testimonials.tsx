import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/storeData';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-bg py-16 sm:py-24 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Community Voices</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">
            Word of mouth
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col justify-between p-8 border border-brand-text/5 bg-white shadow-sm rounded-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex space-x-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current text-brand-text" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="font-serif italic text-base text-brand-text leading-relaxed tracking-wide">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-brand-text/5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-text">{t.author}</p>
                <p className="text-[10px] text-brand-muted uppercase tracking-wider mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
