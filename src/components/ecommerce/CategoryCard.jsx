import React from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';

export const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`} 
      className="group flex flex-col bg-white overflow-hidden text-left"
    >
      <div className="relative overflow-hidden bg-stone-50 border border-stone-150 rounded-sm">
        <OptimizedImage
          src={category.cardImage}
          alt={category.name}
          aspectRatio="aspect-[4/5]"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-103"
        />
        
        {/* Visual overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="pt-3">
        <h3 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-stone-600 transition-colors flex items-center justify-between">
          {category.name}
          <span className="text-[9px] uppercase tracking-widest text-stone-400 group-hover:translate-x-1 group-hover:text-stone-900 transition-all duration-300 font-bold">
            Explore &rarr;
          </span>
        </h3>
        <p className="text-[10px] text-stone-400 font-light mt-0.5 leading-relaxed">
          {category.tagline}
        </p>
      </div>
    </Link>
  );
};
