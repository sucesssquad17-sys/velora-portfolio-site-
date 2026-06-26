import React from 'react';
import { products } from '../data/products';
import { ProductGrid } from '../components/ecommerce/ProductGrid';

export const BestSellersPage = ({ onAddToCart }) => {
  const bestSellers = products.filter(p => p.isBestSeller);
  return (
    <div className="min-h-screen bg-paper pt-[72px]">
      <div className="border-b border-stone-100 px-6 lg:px-10 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">Always in Demand</p>
          <h1 className="font-display font-light text-ink text-5xl md:text-6xl leading-[0.95]">Best Sellers</h1>
          <p className="text-sm text-muted font-light mt-4 max-w-sm">Our most-loved, most-repurchased, most-requested pieces.</p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-8">
          {bestSellers.length} piece{bestSellers.length !== 1 ? 's' : ''}
        </p>
        <ProductGrid products={bestSellers} onAddToCart={onAddToCart} columns={4} />
      </div>
    </div>
  );
};
