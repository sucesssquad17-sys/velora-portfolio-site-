import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';

export const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);

  const quickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      color: product.colors?.[0] || { name: 'Default', code: '#000' },
      size: product.sizes?.[0] || 'M',
      quantity: 1,
    });
  };

  const altImage = product.gallery?.[1] || product.gallery?.[0] || product.image;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover img-zoom transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Alt image on hover */}
        <img
          src={altImage}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover img-zoom transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Tag */}
        {product.tag && (
          <span className="absolute top-3 left-3 text-[9px] tracking-widest font-medium uppercase bg-paper text-ink px-2 py-1 z-10">
            {product.tag}
          </span>
        )}

        {/* Quick add — desktop slide-up */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-premium z-20 hidden lg:block">
          <button
            onClick={quickAdd}
            className="w-full flex items-center justify-center gap-2 bg-ink text-paper py-3.5 text-[10px] tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors"
          >
            <Plus size={12} strokeWidth={2} />
            Quick Add
          </button>
        </div>

        {/* Quick add — mobile round button */}
        <button
          onClick={quickAdd}
          className="lg:hidden absolute bottom-2.5 right-2.5 h-9 w-9 rounded-full bg-paper/90 backdrop-blur-sm text-ink flex items-center justify-center z-20 shadow-card"
        >
          <Plus size={14} strokeWidth={2} />
        </button>
      </div>

      {/* Info */}
      <div className="pt-4 pb-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-ink leading-snug truncate">{product.name}</h3>
            <p className="text-xs text-muted mt-0.5 capitalize">{product.fit} fit</p>
          </div>
          <span className="text-sm font-medium text-ink shrink-0">{formatPrice(product.price)}</span>
        </div>

        {/* Color swatches */}
        {product.colors?.length > 0 && (
          <div className="flex gap-1.5 mt-2.5">
            {product.colors.map(c => (
              <span
                key={c.name}
                title={c.name}
                className="h-3 w-3 rounded-full border border-stone-300"
                style={{ backgroundColor: c.code }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
