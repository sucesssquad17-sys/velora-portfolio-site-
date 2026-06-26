import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

// Each category gets a distinct editorial image
const CAT_IMAGES = {
  'hoodies':     'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80',
  'overshirts':  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
  't-shirts':    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  'trousers':    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
  'accessories': 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=900&q=80',
  'outerwear':   'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
};

export const CollectionsSection = () => {
  return (
    <section className="bg-paper py-28 lg:py-36">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">The Catalog</p>
            <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-[1.05]">
              Core Collections
            </h2>
          </div>
          <Link
            to="/collections"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-medium text-muted hover:text-ink transition-colors link-underline"
          >
            View All
          </Link>
        </div>

        {/* Featured large + small grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-3">
          {categories.map((cat, idx) => {
            // First item spans 2 cols and 2 rows (hero slot)
            const isHero = idx === 0;
            const isTall = idx === 1;
            return (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={`group relative overflow-hidden bg-stone-100 ${
                  isHero
                    ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto'
                    : isTall
                    ? 'col-span-1 row-span-2 aspect-[2/3] md:aspect-auto'
                    : 'col-span-1 row-span-1 aspect-square'
                }`}
              >
                <img
                  src={CAT_IMAGES[cat.slug] || cat.cardImage}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover img-zoom"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="text-2xs tracking-widest uppercase text-paper/70 font-medium mb-1">Explore</p>
                  <h3 className="text-white font-display font-light text-lg md:text-xl leading-tight">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
