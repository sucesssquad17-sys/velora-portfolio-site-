import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products = [], onAddToCart, columns = 4 }) => {
  if (!products || products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-sm text-muted">No products found.</p>
      </div>
    );
  }

  const colClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[columns] || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className={`grid ${colClass} gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12`}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
