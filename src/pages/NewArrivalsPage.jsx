import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { SectionHeading } from '../components/ui/SectionHeading';

export const NewArrivalsPage = ({ onAddToCart }) => {
  // Filter products tagged as New or Trending, or just recent ones
  const newProducts = products.filter((p) => p.tag === 'New' || p.tag === 'Trending' || p.tag === 'Studio Pick');

  return (
    <div className="w-full bg-[#FAF9F5] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="New Arrivals" 
          subtitle="Latest Additions"
          layout="split"
        />

        <div className="mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6 sm:gap-y-16 mt-12">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
