import React from 'react';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import { Hero } from '../components/home/Hero';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { FeaturedDrop } from '../components/home/FeaturedDrop';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { ProductGrid } from '../components/ecommerce/ProductGrid';

export const HomePage = ({ onAddToCart }) => {
  const newArrivals = allProducts
    .filter(p => p.tag === 'New' || p.tag === 'Trending')
    .slice(0, 4);

  const bestSellers = allProducts
    .filter(p => p.isBestSeller)
    .slice(0, 4);

  return (
    <div className="bg-paper">
      {/* 1. Hero */}
      <Hero />

      {/* 2. New Arrivals */}
      <section className="py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">Just In</p>
              <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-[1.05]">New Arrivals</h2>
            </div>
            <Link
              to="/new-arrivals"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-medium text-muted hover:text-ink transition-colors link-underline"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={newArrivals} onAddToCart={onAddToCart} />
        </div>
      </section>

      {/* 3. Featured Drop (dark editorial) */}
      <FeaturedDrop />

      {/* 4. Best Sellers */}
      <section className="py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">Always in Demand</p>
              <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-[1.05]">Best Sellers</h2>
            </div>
            <Link
              to="/best-sellers"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-medium text-muted hover:text-ink transition-colors link-underline"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={bestSellers} onAddToCart={onAddToCart} />
        </div>
      </section>

      {/* 5. Editorial Banner */}
      <section className="bg-stone-100">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
          <div className="relative overflow-hidden min-h-[320px] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80"
              alt="VELORA fabric texture"
              className="absolute inset-0 w-full h-full object-cover img-zoom"
            />
          </div>
          <div className="flex flex-col justify-center px-10 py-16 lg:px-16">
            <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-4">The Philosophy</p>
            <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-[1.1] mb-6">
              Stripped of noise.<br />
              Built to last.
            </h2>
            <p className="text-sm text-stone-500 font-light leading-[1.8] max-w-sm mb-8">
              We remove logos, noisy graphics, and temporary trends. Every piece is focused on structure, silhouette, and premium fabric that softens with time.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-medium text-ink link-underline"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Collections Grid */}
      <CollectionsSection />

      {/* 7. Newsletter */}
      <NewsletterSection />
    </div>
  );
};
