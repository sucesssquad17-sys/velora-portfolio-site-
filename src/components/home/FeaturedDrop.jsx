import React from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';
import { Button } from '../ui/Button';

export const FeaturedDrop = () => {
  return (
    <section className="bg-stone-900 text-stone-100 py-24 lg:py-32 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-[4/5] overflow-hidden bg-stone-800">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1523398002811-999aa8073ac9?auto=format&fit=crop&w=1200&q=80"
              alt="Featured Outerwear Drop"
              className="w-full h-full object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-300">Edition 01</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start">
            <span className="text-[10px] tracking-[0.3em] font-bold text-stone-400 uppercase mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-stone-500" />
              Featured Drop
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white mb-8 leading-[1.1]">
              The Utility<br />Overshirt.
            </h2>
            <p className="text-sm text-stone-400 font-sans leading-relaxed max-w-md mb-10">
              Constructed from a dense, water-repellent Italian cotton blend. Designed with exaggerated utility pockets and a relaxed drape for seamless transition between environments.
            </p>
            <Link to="/product/heavyweight-utility-overshirt-charcoal">
              <Button variant="secondary" className="!bg-white !text-stone-900 hover:!bg-stone-200">
                Explore the Piece
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
