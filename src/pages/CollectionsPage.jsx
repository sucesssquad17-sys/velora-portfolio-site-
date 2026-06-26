import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CAT_IMAGES = {
  'hoodies':     'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80',
  'overshirts':  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
  't-shirts':    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  'trousers':    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
  'accessories': 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=900&q=80',
  'outerwear':   'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
};

export const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-paper pt-[72px]">
      {/* Header */}
      <div className="border-b border-stone-100 px-6 lg:px-10 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">The Catalog</p>
          <h1 className="font-display font-light text-ink text-5xl md:text-6xl leading-[0.95]">Collections</h1>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className={`group relative overflow-hidden bg-stone-100 ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[3/4]">
                <img
                  src={CAT_IMAGES[cat.slug] || cat.cardImage}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-2xs tracking-widest uppercase text-paper/60 font-medium mb-2">{cat.tagline}</p>
                <h2 className="font-display font-light text-white text-3xl leading-tight group-hover:underline underline-offset-2">
                  {cat.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
