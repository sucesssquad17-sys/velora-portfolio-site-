import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/ecommerce/Breadcrumbs';
import { ProductGrid } from '../components/ecommerce/ProductGrid';
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
      
      {/* Category Hero / Title block */}
      <section className="relative bg-stone-50 border-b border-stone-100">
        {/* Visual Category Background */}
        <div className="w-full h-64 md:h-80 relative overflow-hidden bg-stone-200">
          <img 
            src={category.heroImage} 
            alt={category.name} 
            className="w-full h-full object-cover opacity-80"
            loading="eager"
          />
          <div className="absolute inset-0 bg-stone-950/20" />
          
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal drop-shadow-sm mb-2">
              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-stone-100/90 font-sans max-w-md drop-shadow-sm">
              {category.description}
            </p>
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
            <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-400 mr-2">Fit:</span>
            {uniqueFits.map((fit) => (
              <button
                key={fit}
                onClick={() => setSelectedFit(fit)}
                className={`px-4 py-1.5 border text-xs transition-colors select-none ${
                  selectedFit === fit
                    ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                    : 'border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-950'
                }`}
              >
                {fit}
              </button>
            ))}
          </div>

          {/* Product count */}
          <span className="text-[11px] text-stone-400 font-sans font-medium">
            Showing {filteredProducts.length} of {categoryProducts.length} {categoryProducts.length === 1 ? 'object' : 'objects'}
          </span>
        </div>

        {/* Filtered Grid */}
        <div className="mb-20">
          <ProductGrid 
            products={filteredProducts}
            onAddToCart={onAddToCart}
          />
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
