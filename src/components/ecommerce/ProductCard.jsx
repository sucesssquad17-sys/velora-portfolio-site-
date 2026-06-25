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
      <div className="relative overflow-hidden bg-stone-50 border border-stone-100 rounded-sm">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          aspectRatio="aspect-[4/5]"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Product Tag Badge */}
        {product.tag && (
          <span className="absolute left-2.5 top-2.5 bg-white/95 backdrop-blur-[2px] text-[8px] sm:text-[9px] uppercase tracking-widest font-semibold text-stone-850 px-2 py-0.5 shadow-sm">
            {product.tag}
          </span>
        )}

        {/* Quick Add Overlay Button (Desktop Only) */}
        <button
          onClick={handleQuickAdd}
          className="absolute inset-x-3 bottom-3 hidden lg:flex items-center justify-center gap-1.5 bg-stone-900 text-stone-100 py-3 text-[10px] uppercase font-bold tracking-widest opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-stone-800"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus size={11} />
          Quick Add
        </button>

        {/* Quick Add Round Button (Mobile Only) */}
        <button
          onClick={handleQuickAdd}
          className="absolute right-2.5 bottom-2.5 flex lg:hidden h-8.5 w-8.5 items-center justify-center rounded-full bg-stone-900 text-stone-100 shadow-md transition-transform active:scale-95 z-10"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-3 pb-1 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-1">
          <div className="flex-grow">
            <h3 className="text-xs sm:text-[13px] font-medium text-stone-900 leading-snug group-hover:text-stone-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-[9px] sm:text-[10px] text-stone-400 font-semibold uppercase tracking-wider mt-0.5">
              {product.fit} fit
            </p>
            {/* Color Swatch Dots */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex gap-1 mt-1.5">
                {product.colors.map((color) => (
                  <span
                    key={color.name}
                    className="inline-block h-2 w-2 rounded-full border border-stone-200/80 shadow-xs"
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            )}
          </div>
          <span className="text-xs sm:text-[13px] font-semibold text-stone-850 whitespace-nowrap mt-0.5">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
};
