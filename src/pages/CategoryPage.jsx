import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/ecommerce/Breadcrumbs';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { OptimizedImage } from '../components/ui/OptimizedImage';

export const CategoryPage = ({ onAddToCart }) => {
  const { slug } = useParams();
  const [selectedFit, setSelectedFit] = useState('All');
  
  // Find current category
  const category = categories.find((cat) => cat.slug === slug);

  // Reset filters on category route change
  useEffect(() => {
    setSelectedFit('All');
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-serif text-stone-900 mb-4">Category Not Found</h1>
        <Link to="/" className="text-xs uppercase tracking-wider underline text-stone-600 hover:text-stone-900">
          Return to Home
        </Link>
      </div>
    );
  }

  // Filter products by category and fit
  const categoryProducts = products.filter((prod) => prod.categorySlug === slug);
  const filteredProducts = selectedFit === 'All' 
    ? categoryProducts 
    : categoryProducts.filter((prod) => prod.fit.toLowerCase() === selectedFit.toLowerCase());

  // Related categories for footer list
  const relatedCategories = categories.filter((cat) => cat.slug !== slug).slice(0, 3);

  // Available fits in this category
  const uniqueFits = ['All', ...new Set(categoryProducts.map((p) => p.fit))];

  return (
    <div className="w-full bg-white pt-16 min-h-screen">
      
      {/* Category Hero: Premium Split Column Editorial Layout */}
      <section className="bg-cream border-b border-stone-100 py-12 sm:py-16 md:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[9px] tracking-[0.25em] font-bold text-stone-400 uppercase mb-3">
                Collection Selection
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-serif text-stone-905 font-normal leading-tight mb-4">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed max-w-lg">
                {category.description}
              </p>
            </div>
            
            {/* Right Image */}
            <div className="lg:col-span-6 max-h-72 overflow-hidden bg-stone-50 rounded-xs border border-stone-100">
              <OptimizedImage 
                src={category.heroImage} 
                alt={category.name} 
                aspectRatio="aspect-[16/9]"
                className="w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumb trail */}
        <Breadcrumbs paths={[{ name: category.name, url: `/category/${category.slug}` }]} />

        {/* Filter controls and Product Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-6 mb-10 gap-4 mt-4">
          
          {/* Fit Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] tracking-wider uppercase font-bold text-stone-400 mr-2">Fit:</span>
            {uniqueFits.map((fit) => (
              <button
                key={fit}
                onClick={() => setSelectedFit(fit)}
                className={`px-4 py-1.5 border text-xs tracking-wider uppercase font-semibold transition-colors select-none rounded-xs ${
                  selectedFit === fit
                    ? 'border-stone-900 bg-stone-900 text-white font-bold'
                    : 'border-stone-200 text-stone-605 bg-white hover:border-stone-400 hover:text-stone-950'
                }`}
              >
                {fit}
              </button>
            ))}
          </div>

          {/* Product count */}
          <span className="text-[11px] text-stone-400 font-sans font-semibold uppercase tracking-wider">
            Showing {filteredProducts.length} of {categoryProducts.length} {categoryProducts.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Filtered Grid with Editorial Style Note inline */}
        <div className="mb-20">
          {/* First Row of Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
            {filteredProducts.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* Style Note Block inserted between rows */}
          {filteredProducts.length >= 2 && (
            <div className="my-12 sm:my-16 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 bg-cream border border-stone-200/60 p-6 sm:p-8 items-center rounded-xs">
              <div className="md:col-span-4 max-h-48 overflow-hidden rounded-xs border border-stone-100 bg-stone-50">
                <OptimizedImage
                  src={category.cardImage}
                  alt="Style Note Mood"
                  aspectRatio="aspect-[3/2]"
                  className="w-full object-cover"
                />
              </div>
              <div className="md:col-span-8 flex flex-col text-left">
                <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-stone-400 mb-1.5">Style Note</span>
                <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-2">Curated Rotation Alignment</h4>
                <p className="text-xs text-stone-500 font-sans leading-relaxed">
                  Our {category.name} collection is crafted for continuous versatility. Layer these structural silhouettes with tonal, lightweight fabrics to establish a balance of drape and premium weight suited for high-frequency wear.
                </p>
              </div>
            </div>
          )}

          {/* Second Row of Products */}
          {filteredProducts.length > 2 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
              {filteredProducts.slice(2).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-stone-550 border border-dashed border-stone-200 rounded-xs">
              No products found matching this fit.
            </div>
          )}
        </div>

        {/* Horizontal Mini-Gallery / Related Categories */}
        <div className="border-t border-stone-100 pt-16 pb-12 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-8">
            Explore Other Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCategories.map((cat) => (
              <Link 
                key={cat.slug} 
                to={`/category/${cat.slug}`}
                className="group relative overflow-hidden bg-stone-100 flex flex-col aspect-[16/9]"
              >
                <img 
                  src={cat.cardImage} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h4 className="text-sm font-semibold text-white group-hover:underline flex justify-between items-center">
                    {cat.name}
                    <span>&rarr;</span>
                  </h4>
                  <p className="text-[10px] text-stone-200 font-sans mt-0.5">{cat.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
