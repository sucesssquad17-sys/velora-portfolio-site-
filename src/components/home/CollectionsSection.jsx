import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CategoryCard } from '../ecommerce/CategoryCard';
import { categories } from '../../data/categories';

export const CollectionsSection = () => {
  return (
    <section id="collections" className="bg-white py-16 md:py-24 border-b border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Core Rotation"
          subtitle="Collections"
          centered
        />
        
        {/* Categories Grid - 6 categories, responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
