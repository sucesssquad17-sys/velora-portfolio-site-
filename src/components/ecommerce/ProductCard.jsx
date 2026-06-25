import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { formatPrice } from '../../utils/formatPrice';

export const ProductCard = ({ product, onAddToCart }) => {
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add default color and size for quick add
    const defaultColor = product.colors?.[0] || { name: 'Default', code: '#000000' };
    const defaultSize = product.sizes?.[0] || 'M';
    
    onAddToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      color: defaultColor,
      size: defaultSize,
      quantity: 1
    });
  };

  return (
    <Link 
      to={`/product/${product.slug}`} 
      className="group flex flex-col bg-white overflow-hidden text-left"
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-stone-100">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          aspectRatio="aspect-[4/5]"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Product Tag Badge */}
        {product.tag && (
          <span className="absolute left-3 top-3 bg-white/90 backdrop-blur-[2px] text-[9px] uppercase tracking-widest font-semibold text-stone-850 px-2.5 py-1">
            {product.tag}
          </span>
        )}

        {/* Quick Add Overlay Button (Desktop Only) */}
        <button
          onClick={handleQuickAdd}
          className="absolute inset-x-3 bottom-3 hidden lg:flex items-center justify-center gap-1.5 bg-stone-900 text-stone-100 py-3.5 text-[10px] uppercase font-bold tracking-widest opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-stone-800"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus size={12} />
          Quick Add
        </button>

        {/* Quick Add Round Button (Mobile Only) */}
        <button
          onClick={handleQuickAdd}
          className="absolute right-3 bottom-3 flex lg:hidden h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-stone-100 shadow-md transition-transform active:scale-95"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus size={15} />
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-xs font-semibold text-stone-900 group-hover:underline">
              {product.name}
            </h3>
            <p className="text-[10px] text-stone-400 font-medium uppercase tracking-wider mt-0.5">
              {product.fit} fit
            </p>
          </div>
          <span className="text-xs font-medium text-stone-850">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
};
