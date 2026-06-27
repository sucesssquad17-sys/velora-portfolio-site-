import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';

export const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const alt = product.gallery?.[1] || product.gallery?.[0] || product.image;

  const quickAdd = (e) => {
    e.preventDefault(); e.stopPropagation();
    onAddToCart({
      id: product.id, name: product.name, slug: product.slug,
      price: product.price, image: product.image,
      color: product.colors?.[0] || { name: 'Default', code: '#000' },
      size: product.sizes?.[0] || 'M', quantity: 1,
    });
  };

  return (
    <Link to={`/product/${product.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '3/4', background: '#EDEAE6', overflow: 'hidden' }}>
        <img src={product.image} alt={product.name} loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transition: 'opacity 0.7s, transform 0.9s cubic-bezier(0.215,0.61,0.355,1)',
            opacity: hovered ? 0 : 1, transform: hovered ? 'scale(1.04)' : 'scale(1)' }}/>
        <img src={alt} alt={product.name} loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transition: 'opacity 0.7s, transform 0.9s cubic-bezier(0.215,0.61,0.355,1)',
            opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1.04)' : 'scale(1)' }}/>

        {product.tag && (
          <span style={{ position: 'absolute', top: 12, left: 12, background: '#F9F7F4',
            fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#0F0E0C', padding: '4px 8px', zIndex: 1 }}>
            {product.tag}
          </span>
        )}

        {/* Quick add — desktop */}
        <div style={{ position: 'absolute', inset: '0 0 0 0', display: 'flex', alignItems: 'flex-end',
          transition: 'opacity 0.3s', opacity: hovered ? 1 : 0, zIndex: 2 }} className="hidden lg:flex">
          <button onClick={quickAdd}
            style={{ width: '100%', background: '#0F0E0C', color: '#F9F7F4', border: 'none',
              cursor: 'pointer', padding: '14px', fontSize: 9, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              transform: hovered ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.3s cubic-bezier(0.215,0.61,0.355,1)' }}>
            <Plus size={11} strokeWidth={2}/> Quick Add
          </button>
        </div>

        {/* Mobile */}
        <button onClick={quickAdd} className="lg:hidden"
          style={{ position: 'absolute', bottom: 10, right: 10, width: 34, height: 34,
            borderRadius: '50%', background: 'rgba(249,247,244,0.92)', border: 'none',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.12)', zIndex: 2 }}>
          <Plus size={14} strokeWidth={2} color="#0F0E0C"/>
        </button>
      </div>

      {/* Info */}
      <div style={{ paddingTop: '0.875rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: '#0F0E0C', lineHeight: 1.3,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.name}
            </p>
            <p style={{ fontSize: 11, color: '#9A9590', marginTop: 2, textTransform: 'capitalize' }}>
              {product.fit} fit
            </p>
          </div>
          <span style={{ fontSize: 13, fontWeight: 500, color: '#0F0E0C', flexShrink: 0 }}>
            {formatPrice(product.price)}
          </span>
        </div>
        {product.colors?.length > 0 && (
          <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
            {product.colors.map(c => (
              <span key={c.name} title={c.name}
                style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: c.code,
                  border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0 }}/>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
