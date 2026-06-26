import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { formatPrice } from '../../utils/formatPrice';

export const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  const hoverImage = product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.image;

  return (
    <Link 
      to={`/product/${product.slug}`} 
      className="group flex flex-col overflow-hidden text-left transition-opacity duration-300 hover:opacity-95"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-[#F3F2EE] aspect-[4/5]">
        <img
          src={isHovered ? hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out object-center"
          loading="lazy"
        />

        {/* Product Tag Badge */}
        {product.tag && (
          <span className="absolute left-3 top-3 bg-white text-[10px] uppercase font-semibold text-ink px-2 py-1 tracking-wide z-10">
            {product.tag}
          </span>
        )}

        {/* Quick Add Overlay Button (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out hidden lg:block z-20">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white text-ink hover:bg-ink hover:text-white transition-colors py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
            aria-label={`Quick add ${product.name} to cart`}
          >
            <Plus size={14} />
            Quick Add
          </button>
        </div>

        {/* Quick Add Mobile */}
        <button
          onClick={handleQuickAdd}
          className="absolute right-2 bottom-2 flex lg:hidden h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-xs transition-transform active:scale-95 z-20"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-4 pb-2 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-grow">
            <h3 className="text-sm font-medium text-ink leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-stone-500 mt-1 capitalize">
              {product.fit} fit
            </p>
            {/* Color Swatch Dots */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex gap-1.5 mt-2">
                {product.colors.map((color) => (
                  <span
                    key={color.name}
                    className="inline-block h-2.5 w-2.5 rounded-full border border-stone-200"
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            )}
          </div>
          <span className="text-sm font-medium text-ink whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
};
