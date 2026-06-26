import React from 'react';
import { products } from '../data/products';
import { ProductGrid } from '../components/ecommerce/ProductGrid';

export const NewArrivalsPage = ({ onAddToCart }) => {
  const newProducts = products.filter(p => p.tag === 'New' || p.tag === 'Trending' || p.tag === 'Studio Pick');
  return (
    <div className="min-h-screen bg-paper pt-[72px]">
      {/* Page header */}
      <div className="border-b border-stone-100 px-6 lg:px-10 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">Just In</p>
          <h1 className="font-display font-light text-ink text-5xl md:text-6xl leading-[0.95]">New Arrivals</h1>
          <p className="text-sm text-muted font-light mt-4 max-w-sm">The freshest drops from this season's studio collection.</p>
        </div>
      </div>
      {/* Products */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-8">
          {newProducts.length} piece{newProducts.length !== 1 ? 's' : ''}
        </p>
        <ProductGrid products={newProducts} onAddToCart={onAddToCart} columns={4} />
      </div>
    </div>
  );
};
