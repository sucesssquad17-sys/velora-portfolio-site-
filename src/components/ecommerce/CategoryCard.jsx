import React from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';

export const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`} 
      className="group flex flex-col overflow-hidden text-left"
    >
      <div className="relative overflow-hidden bg-stone-100 aspect-[4/5]">
        <OptimizedImage
          src={category.cardImage}
          alt={category.name}
          aspectRatio="aspect-[4/5]"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Visual overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-medium text-ink flex items-center justify-between">
          {category.name}
          <span className="text-[10px] uppercase tracking-widest text-stone-400 group-hover:translate-x-1 group-hover:text-ink transition-all duration-300 font-bold">
            Explore &rarr;
          </span>
        </h3>
        <p className="text-xs text-stone-500 font-light mt-1">
          {category.tagline}
        </p>
      </div>
    </Link>
  );
};
