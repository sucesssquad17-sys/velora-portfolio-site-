import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Star, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Breadcrumbs } from '../components/ecommerce/Breadcrumbs';
import { ProductGrid } from '../components/ecommerce/ProductGrid';
import { Button } from '../components/ui/Button';
import { formatPrice } from '../utils/formatPrice';
import { OptimizedImage } from '../components/ui/OptimizedImage';

export const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams();
  
  // Find current product
  const product = products.find((p) => p.slug === slug);
  const category = categories.find((cat) => cat.slug === product?.categorySlug);

  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [openSection, setOpenSection] = useState('details');

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? '' : sectionName);
  };

  // Reset attributes when URL slug changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedSize(product.sizes?.[0] || 'M');
      setSelectedColor(product.colors?.[0] || null);
      setOpenSection('details');
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-serif text-stone-900 mb-4">Product Not Found</h1>
        <Link to="/" className="text-xs uppercase tracking-wider underline text-stone-600 hover:text-stone-900">
          Return to Home
        </Link>
      </div>
    );
  }

  // Related products (same category slug, excluding self)
  const relatedProducts = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;
    
    onAddToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    });
  };

  return (
    <div className="w-full bg-white pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumbs */}
        {category && (
          <Breadcrumbs 
            paths={[
              { name: category.name, url: `/category/${category.slug}` },
              { name: product.name, url: `/product/${product.slug}` }
            ]} 
          />
        )}

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-8">
          
          {/* Left Column: Image gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            
            {/* Gallery thumbnails (horizontal scroll on mobile, stacked list on desktop) */}
            <div className="flex md:flex-col flex-nowrap overflow-x-auto md:overflow-visible gap-2 order-2 md:order-1 flex-shrink-0 max-w-full pb-2 md:pb-0 scrollbar-none">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`h-16 w-14 sm:h-20 sm:w-16 border bg-stone-50 overflow-hidden flex-shrink-0 transition-colors rounded-xs ${
                    activeImage === imgUrl ? 'border-stone-900' : 'border-stone-200'
                  }`}
                  aria-label={`View image angle ${idx + 1}`}
                >
                  <img src={imgUrl} alt={`${product.name} thumbnail`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            {/* Active image display with layout aspect ratio protection */}
            <div className="flex-grow order-1 md:order-2">
              <OptimizedImage
                src={activeImage || product.image}
                alt={product.name}
                aspectRatio="aspect-[4/5]"
                className="w-full shadow-sm rounded-xs border border-stone-100"
                eager
              />
            </div>
          </div>

          {/* Right Column: Descriptions & Configurator (Sticky on Desktop) */}
          <div className="lg:col-span-5 flex flex-col text-left lg:sticky lg:top-24 self-start">
            {/* Tag label */}
            {product.tag && (
              <span className="inline-block text-[9px] uppercase tracking-widest font-semibold text-stone-400 mb-2">
                {product.tag}
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl font-normal text-stone-900 font-serif leading-snug mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 border-b border-stone-100 pb-4 mb-6">
              <span className="text-lg font-medium text-stone-850">
                {formatPrice(product.price)}
              </span>
              <span className="text-[10px] text-stone-450 uppercase font-semibold tracking-wider bg-stone-50 px-2 py-0.5 border border-stone-100">
                {product.fit} Fit
              </span>
            </div>

            {/* Product description paragraph */}
            <p className="text-xs text-stone-550 leading-relaxed font-sans mb-8">
              {product.description}
            </p>

            {/* Configurator inputs */}
            <div className="space-y-6 border-b border-stone-100 pb-8 mb-8">
              
              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-400 mb-3">
                    Color: <span className="text-stone-800 font-bold ml-1">{selectedColor?.name}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`relative h-7 w-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          selectedColor?.name === color.name
                            ? 'border-stone-900 scale-105 shadow-sm'
                            : 'border-stone-200 hover:border-stone-400'
                        }`}
                        style={{ backgroundColor: color.code }}
                        aria-label={`Select color ${color.name}`}
                      >
                        {selectedColor?.name === color.name && (
                          <span className={`block w-1.5 h-1.5 rounded-full ${
                            color.code === '#FAFAFA' || color.code === '#F5F2EB' || color.code === '#E3DCCE'
                              ? 'bg-stone-900'
                              : 'bg-white'
                          }`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-400">
                      Size: <span className="text-stone-800 font-bold ml-1">{selectedSize}</span>
                    </label>
                    <span className="text-[10px] text-stone-400 hover:text-stone-800 cursor-help underline select-none">
                      Size Chart
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-9 w-12 border text-xs transition-all duration-200 select-none ${
                          selectedSize === size
                            ? 'border-stone-900 bg-stone-900 text-stone-100 font-semibold'
                            : 'border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-950'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Add to Cart Actions */}
            <div className="mb-8">
              <Button 
                variant="primary" 
                className="w-full justify-center py-4"
                onClick={handleAddToCart}
              >
                Add to Bag
              </Button>
            </div>

            {/* Product Specifications Accordions */}
            {product.features && (
              <div className="border-t border-stone-200 mt-8">
                {/* Accordion: Details & Specs */}
                <div className="border-b border-stone-200 py-4">
                  <button
                    type="button"
                    onClick={() => toggleSection('details')}
                    className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase font-bold text-stone-900 focus:outline-none"
                  >
                    <span>Details &amp; Specifications</span>
                    <span className="text-stone-400 font-normal text-base">{openSection === 'details' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'details' && (
                    <div className="mt-3 text-xs text-stone-500 font-sans leading-relaxed space-y-2">
                      <ul className="space-y-2 list-none p-0 m-0">
                        {product.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accordion: Fit Guide */}
                <div className="border-b border-stone-200 py-4">
                  <button
                    type="button"
                    onClick={() => toggleSection('fit')}
                    className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase font-bold text-stone-900 focus:outline-none"
                  >
                    <span>Fit &amp; Sizing</span>
                    <span className="text-stone-400 font-normal text-base">{openSection === 'fit' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'fit' && (
                    <div className="mt-3 text-xs text-stone-500 font-sans leading-relaxed">
                      <p className="mb-2">
                        Cut in a <strong>{product.fit}</strong> fit. We recommend selecting your normal size. For a more exaggerated silhouette, choose one size larger.
                      </p>
                      <p>
                        Model is 188cm / 6'2" and is wearing size Medium.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion: Materials & Care */}
                <div className="border-b border-stone-200 py-4">
                  <button
                    type="button"
                    onClick={() => toggleSection('materials')}
                    className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase font-bold text-stone-900 focus:outline-none"
                  >
                    <span>Materials &amp; Care</span>
                    <span className="text-stone-400 font-normal text-base">{openSection === 'materials' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'materials' && (
                    <div className="mt-3 text-xs text-stone-500 font-sans leading-relaxed">
                      <p className="mb-2">
                        Crafted from sustainably sourced premium fibers, pre-washed to minimize shrinkage and ensure high shape-retention over time.
                      </p>
                      <p>
                        Machine wash cold with like colors on a gentle cycle. Lay flat to dry. Cool iron if needed.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion: Shipping & Returns */}
                <div className="border-b border-stone-200 py-4">
                  <button
                    type="button"
                    onClick={() => toggleSection('shipping')}
                    className="w-full flex items-center justify-between text-[11px] tracking-widest uppercase font-bold text-stone-900 focus:outline-none"
                  >
                    <span>Shipping &amp; Returns</span>
                    <span className="text-stone-400 font-normal text-base">{openSection === 'shipping' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'shipping' && (
                    <div className="mt-3 text-xs text-stone-500 font-sans leading-relaxed">
                      <p className="mb-2">
                        Complimentary standard shipping on all orders above $150. Normal processing time is 1–2 business days.
                      </p>
                      <p>
                        Returns are accepted within 14 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Section: Related Items */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-stone-100 pt-16 pb-8 text-left mt-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900">
                You May Also Like
              </h3>
              {category && (
                <Link 
                  to={`/category/${category.slug}`}
                  className="text-[10px] tracking-widest uppercase font-semibold text-stone-400 hover:text-stone-900 flex items-center gap-1 transition-colors"
                >
                  View Collection <ArrowRight size={12} />
                </Link>
              )}
            </div>
            <ProductGrid 
              products={relatedProducts}
              onAddToCart={onAddToCart}
            />
          </section>
        )}

      </div>
    </div>
  );
};
