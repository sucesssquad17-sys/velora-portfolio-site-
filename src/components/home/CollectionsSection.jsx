import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CategoryCard } from '../ecommerce/CategoryCard';
import { categories } from '../../data/categories';

export const CollectionsSection = () => {
  return (
    <section id="collections" className="bg-[#FAF9F5] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Core Rotation"
          subtitle="Collections"
          layout="split"
        />
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
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
