import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { SectionHeading } from '../components/ui/SectionHeading';

export const BestSellersPage = ({ onAddToCart }) => {
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <div className="w-full bg-[#FAF9F5] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Best Sellers" 
          subtitle="Our Signature Pieces"
          layout="split"
        />

        <div className="mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6 sm:gap-y-16 mt-12">
          {bestSellers.map((product) => (
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
