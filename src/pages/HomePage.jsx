import React from 'react';
import { Hero } from '../components/home/Hero';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductGrid } from '../components/ecommerce/ProductGrid';
import { EditorialSection } from '../components/home/EditorialSection';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { products } from '../data/products';

export const HomePage = ({ onAddToCart }) => {
  // New Arrivals: Limit to first 8 items
  const newArrivals = products.slice(0, 8);
  
  // Best Sellers: Filter products with isBestSeller tag
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <main className="w-full">
      {/* 1. Hero Section & CSS Image Rail */}
      <Hero />

      {/* 2. Collections (Category Grid) */}
      <CollectionsSection />

      {/* 3. New Arrivals (Product Grid) */}
      <section id="new-arrivals" className="bg-white py-16 md:py-24 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="New Arrivals"
            subtitle="Fresh Cuts"
            centered
          />
          <ProductGrid 
            products={newArrivals}
            onAddToCart={onAddToCart}
          />
        </div>
      </section>

      {/* 4. Editorial Banner / Collage */}
      <EditorialSection />

      {/* 5. Benefits */}
      <BenefitsSection />

      {/* 6. Best Sellers (Product Grid) */}
      <section id="best-sellers" className="bg-white py-16 md:py-24 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Best Sellers"
            subtitle="The Essentials"
            centered
          />
          <ProductGrid 
            products={bestSellers}
            onAddToCart={onAddToCart}
          />
        </div>
      </section>

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Newsletter Signup */}
      <NewsletterSection />
    </main>
  );
};
