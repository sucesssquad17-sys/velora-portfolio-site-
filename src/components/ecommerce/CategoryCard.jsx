import React from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';

export const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`} 
      className="group flex flex-col bg-white overflow-hidden text-left"
    >
      <div className="relative overflow-hidden bg-stone-100">
        <OptimizedImage
          src={category.cardImage}
          alt={category.name}
          aspectRatio="aspect-[4/5]"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Visual overlay on hover */}
        <div className="absolute inset-0 bg-stone-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-semibold text-stone-900 group-hover:underline flex items-center justify-between">
          {category.name}
          <span className="text-[10px] text-stone-400 font-normal group-hover:translate-x-1 transition-transform duration-300">
            &rarr;
          </span>
        </h3>
        <p className="text-[10px] text-stone-400 font-sans mt-0.5 leading-relaxed">
          {category.tagline}
        </p>
      </div>
    </Link>
  );
};
