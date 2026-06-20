import React from 'react';
import { motion } from 'framer-motion';
import beigeHoodie from '../assets/beige_hoodie.png';
import { ArrowRight } from 'lucide-react';

export const CollectionHighlight: React.FC = () => {
  const listItems = [
    { title: 'Soft heavyweight fabrics', desc: 'Custom loopback French terry and organic cotton weights up to 450GSM.' },
    { title: 'Relaxed silhouettes', desc: 'Drop-shoulders, wide-leg drapes, and boxy fits refined for high comfort.' },
    { title: 'Seasonless colors', desc: 'Curated natural pigments of warm sand, washed concrete, coal, and dry moss.' },
    { title: 'Built for repeat wear', desc: 'Pre-shrunk fibers, reinforced twin-needle stitching, and shape-retaining ribs.' }
  ];

  return (
    <section className="bg-brand-bg py-16 sm:py-24 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-brand-text/5 bg-white shadow-md group"
          >
            <img
              src={beigeHoodie}
              alt="Model showcasing The Neutral Edit"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Subtle light overlay */}
            <div className="absolute inset-0 bg-brand-text/5 pointer-events-none" />
          </motion.div>

          {/* Right Column: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Seasonal Spotlight</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-text sm:text-4xl">
              The Neutral Edit
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed tracking-wide">
              Layerable tones, relaxed fits, and timeless staples built around an easy wardrobe. Designed to blend together effortlessly so you can dress without thinking twice.
            </p>

            {/* Bullet Points */}
            <div className="mt-8 space-y-6">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-text/5 text-xs text-brand-text font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold tracking-wide text-brand-text">{item.title}</h4>
                    <p className="mt-1 text-xs text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#new-arrivals"
                className="inline-flex items-center justify-center bg-brand-text px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-bg transition-smooth hover:bg-brand-text/90 group"
              >
                <span>Explore The Edit</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
