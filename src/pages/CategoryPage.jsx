import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductGrid } from '../components/ecommerce/ProductGrid';
import { ChevronDown } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'default',    label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc',   label: 'Name A–Z' },
];

const FIT_OPTIONS = ['All', 'Relaxed', 'Oversized', 'Structured', 'Regular'];

export const CategoryPage = ({ onAddToCart }) => {
  const { slug } = useParams();
  const category  = categories.find(c => c.slug === slug);

  const [fit, setFit]   = useState('All');
  const [sort, setSort] = useState('default');

  const categoryProducts = useMemo(() => {
    let list = products.filter(p => p.categorySlug === slug);
    if (fit !== 'All') list = list.filter(p => p.fit === fit);
    if (sort === 'price-asc')  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'name-asc')   list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [slug, fit, sort]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center">
          <p className="text-sm text-muted mb-4">Category not found.</p>
          <Link to="/" className="text-[11px] tracking-widest uppercase font-medium text-ink link-underline">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">

      {/* ── Hero ── */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden bg-stone-100">
        <img
          src={category.heroImage}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-2xs tracking-widest uppercase text-paper/60 font-medium mb-4">
            <Link to="/" className="hover:text-paper/90 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paper/90">{category.name}</span>
          </nav>
          <h1 className="font-display font-light text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            {category.name}
          </h1>
          <p className="text-sm text-paper/60 font-light mt-3 max-w-sm">{category.tagline}</p>
        </div>
      </div>

      {/* ── Filters & Products ── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12 lg:py-16">

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          
          {/* Fit filters */}
          <div className="flex flex-wrap gap-2">
            {FIT_OPTIONS.map(f => (
              <button
                key={f}
                onClick={() => setFit(f)}
                className={`px-4 py-1.5 text-[10px] tracking-widest uppercase font-medium transition-all duration-200 ${
                  fit === f
                    ? 'bg-ink text-paper'
                    : 'text-stone-500 border border-stone-200 hover:border-stone-400 hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-stone-200 text-[10px] tracking-widest uppercase font-medium text-stone-600 px-4 py-1.5 pr-8 focus:outline-none focus:border-ink cursor-pointer hover:border-stone-400 transition-colors"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={10} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        {/* Count */}
        <p className="text-2xs tracking-superwide uppercase text-muted font-medium mb-8">
          {categoryProducts.length} piece{categoryProducts.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <ProductGrid
          products={categoryProducts}
          onAddToCart={onAddToCart}
          columns={4}
        />
      </div>
    </div>
  );
};
