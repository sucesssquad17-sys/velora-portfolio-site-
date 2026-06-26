import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductGrid } from '../components/ecommerce/ProductGrid';
import { FeaturedDrop } from '../components/home/FeaturedDrop';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { products } from '../data/products';

export const HomePage = ({ onAddToCart }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  // New Arrivals: Limit to first 8 items
  const newArrivals = products.filter(p => p.tag === 'New' || p.tag === 'Trending').slice(0, 4);
  if (newArrivals.length < 4) {
      newArrivals.push(...products.slice(0, 4 - newArrivals.length));
  }
  
  // Best Sellers: Filter products with isBestSeller tag
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <main className="w-full bg-[#FAF9F5]">
      {/* 1. Hero Section & CSS Image Rail */}
      <Hero />

      {/* 2. New Arrivals (Product Grid) */}
      <section id="new-arrivals" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="New Arrivals"
            subtitle="Latest Additions"
            layout="split"
          />
          <div className="mt-16">
            <ProductGrid 
              products={newArrivals}
              onAddToCart={onAddToCart}
            />
          </div>
        </div>
      </section>

      {/* 3. Featured Drop / Editorial */}
      <FeaturedDrop />

      {/* 4. Best Sellers (Product Grid) */}
      <section id="best-sellers" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Signature Pieces"
            subtitle="Best Sellers"
            layout="split"
          />
          <div className="mt-16">
            <ProductGrid 
              products={bestSellers}
              onAddToCart={onAddToCart}
            />
          </div>
        </div>
      </section>

      {/* 5. Collections (Category Grid) */}
      <CollectionsSection />

      {/* 6. Newsletter Signup */}
      <NewsletterSection />
    </main>
  );
};
