import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/storeData';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGridProps {
  onAddToCart: (item: { id: string; name: string; price: number; image: string; color: string; size: string }) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Items' },
    { id: 'hoodies', label: 'Hoodies' },
    { id: 'overshirts', label: 'Overshirts' },
    { id: 't-shirts', label: 'T-Shirts' },
    { id: 'trousers', label: 'Trousers' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section id="new-arrivals" className="bg-brand-bg py-16 sm:py-24 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title and Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Drop SS26</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-text sm:text-4xl">
            New season essentials
          </h2>
          <p className="mt-3 text-sm text-brand-muted tracking-wide">
            Clean staples made for everyday rotation. Designed for durability, fit, and effortless aesthetics.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12 border-b border-brand-text/5 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-smooth ${
                activeFilter === tab.id 
                  ? 'text-brand-text' 
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <span>{tab.label}</span>
              {activeFilter === tab.id && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute bottom-0 inset-x-4 h-[2px] bg-brand-text"
                  transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Area */}
        <motion.div 
          layout
          className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
