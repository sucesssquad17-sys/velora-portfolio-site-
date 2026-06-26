import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { SectionHeading } from '../components/ui/SectionHeading';

export const CollectionsPage = () => {
  return (
    <div className="w-full bg-[#FAF9F5] pt-24 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Collections" 
          subtitle="Explore by Category"
          layout="split"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/category/${cat.slug}`}
              className="group relative overflow-hidden flex flex-col aspect-[4/5] bg-stone-100"
            >
              <img 
                src={cat.cardImage} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs tracking-[0.2em] font-bold uppercase text-stone-300 mb-2">{cat.tagline}</span>
                <h4 className="text-2xl font-display text-white group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                  {cat.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
