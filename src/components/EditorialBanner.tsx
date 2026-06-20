import React from 'react';
import { motion } from 'framer-motion';
import oversizedCoat from '../assets/oversized_coat.png';

export const EditorialBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-24 sm:py-32 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-950 px-6 py-20 shadow-2xl sm:px-12 sm:py-32 md:px-20">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={oversizedCoat}
              alt="Editorial campaign model coat"
              className="h-full w-full object-cover object-[center_35%] opacity-40 transition-transform duration-[10s] hover:scale-105"
            />
            {/* Soft vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/30" />
          </div>

          {/* Copy Area */}
          <div className="relative z-10 max-w-xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-bg/60">Brand Narrative</span>
              <h2 className="mt-4 font-serif text-4xl font-light italic leading-tight text-brand-bg sm:text-5xl">
                Quiet design.
                <br />
                Loud comfort.
              </h2>
              <p className="mt-6 text-base text-zinc-300 leading-relaxed tracking-wide">
                Every piece is made to move through your day without trying too hard. We select dense organic yarns and structure them into modern, loose silhouettes that age beautifully.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => alert('Reading our narrative...')}
                  className="inline-flex items-center justify-center bg-brand-bg px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-text transition-smooth hover:bg-brand-text hover:text-brand-bg focus:outline-none"
                >
                  Read Our Story
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
