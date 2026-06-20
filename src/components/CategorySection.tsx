import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/storeData';
import { ArrowRight } from 'lucide-react';

export const CategorySection: React.FC = () => {
  return (
    <section id="collections" className="bg-brand-bg py-16 sm:py-24 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-muted">Shop by Category</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Curated Wardrobe Kits</p>
          </div>
          <a
            href="#new-arrivals"
            className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-brand-text hover:text-brand-accent transition-smooth group"
          >
            Explore all items
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.a
              href={`#new-arrivals`}
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block aspect-[3/4] overflow-hidden bg-brand-bg border border-brand-text/5 shadow-sm"
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/10 z-10 transition-smooth group-hover:bg-black/25" />

              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Card Copy */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 flex flex-col justify-end text-brand-bg bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-bg/75">{cat.count}</span>
                <h3 className="text-lg font-bold tracking-wide mt-1">{cat.name}</h3>
                
                <div className="flex items-center mt-3 text-xs font-semibold tracking-widest uppercase opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Explore</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 stroke-[2]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#new-arrivals"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-text hover:text-brand-accent transition-smooth"
          >
            Explore all items
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
