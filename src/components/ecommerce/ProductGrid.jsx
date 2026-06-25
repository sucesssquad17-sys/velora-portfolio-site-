import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onAddToCart, limit }) => {
  const displayProducts = limit ? products.slice(0, limit) : products;

  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-stone-500 border border-dashed border-stone-200">
        No products found in this selection.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
