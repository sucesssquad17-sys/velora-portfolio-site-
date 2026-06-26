import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductGrid } from '../components/ecommerce/ProductGrid';
import { formatPrice } from '../utils/formatPrice';

const AccordionRow = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[11px] tracking-widest uppercase font-semibold text-ink">{title}</span>
        {open ? <Minus size={12} strokeWidth={2} className="text-muted shrink-0" /> : <Plus size={12} strokeWidth={2} className="text-muted shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-sm font-light text-stone-500 leading-[1.8]">
          {children}
        </div>
      )}
    </div>
  );
};

export const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams();
  const product   = products.find(p => p.slug === slug);
  const category  = categories.find(c => c.slug === product?.categorySlug);

  const [activeImg, setActiveImg] = useState('');
  const [size, setSize]           = useState('');
  const [color, setColor]         = useState(null);
  const [added, setAdded]         = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImg(product.image);
      setSize(product.sizes?.[0] || '');
      setColor(product.colors?.[0] || null);
      setAdded(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center">
          <p className="text-sm text-muted mb-4">Product not found.</p>
          <Link to="/" className="text-[11px] tracking-widest uppercase font-medium text-ink link-underline">Go Home</Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    if (!size || !color) return;
    onAddToCart({ id: product.id, name: product.name, slug: product.slug, price: product.price, image: product.image, color, size, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean);

  return (
    <div className="min-h-screen bg-paper pt-[72px]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-2xs tracking-widest uppercase text-muted font-medium py-5 border-b border-stone-100">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          {category && <Link to={`/category/${category.slug}`} className="hover:text-ink transition-colors">{category.name}</Link>}
          <span>/</span>
          <span className="text-ink truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-10 lg:py-16">

          {/* ── LEFT: Images ── */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
              {allImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(src)}
                  className={`shrink-0 aspect-[3/4] w-14 md:w-16 overflow-hidden bg-stone-100 border transition-all ${
                    activeImg === src ? 'border-ink' : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 order-1 md:order-2">
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                <img
                  src={activeImg}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 text-[9px] tracking-widest uppercase font-medium bg-paper text-ink px-2 py-1">
                    {product.tag}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Details (sticky) ── */}
          <div className="lg:sticky lg:top-[72px] self-start pt-2">
            {/* Tag */}
            {product.tag && (
              <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-3">{product.tag}</p>
            )}

            {/* Name */}
            <h1 className="font-display font-light text-ink text-4xl md:text-5xl leading-[1.0] mb-4">
              {product.name}
            </h1>

            {/* Price + Fit */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-200">
              <span className="text-2xl font-light text-ink">{formatPrice(product.price)}</span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-stone-500 border border-stone-200 px-2.5 py-1">
                {product.fit} Fit
              </span>
            </div>

            {/* Description */}
            <p className="text-sm font-light text-stone-500 leading-[1.8] mb-8">
              {product.description}
            </p>

            {/* Color picker */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-ink">
                    Colour — <span className="text-muted font-normal">{color?.name}</span>
                  </span>
                </div>
                <div className="flex gap-2.5">
                  {product.colors.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c)}
                      title={c.name}
                      className={`h-7 w-7 rounded-full border-2 transition-all duration-200 ${
                        color?.name === c.name ? 'border-ink scale-110' : 'border-stone-200 hover:border-stone-400'
                      }`}
                      style={{ backgroundColor: c.code }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size picker */}
            {product.sizes?.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-ink">
                    Size — <span className="text-muted font-normal">{size}</span>
                  </span>
                  <span className="text-[10px] text-muted hover:text-ink cursor-pointer underline underline-offset-2 transition-colors">
                    Size guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(s => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-[52px] py-2 px-3 text-xs font-medium border transition-all duration-200 ${
                        size === s
                          ? 'border-ink bg-ink text-paper'
                          : 'border-stone-200 text-stone-600 hover:border-stone-400 hover:text-ink'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to bag */}
            <button
              onClick={handleAdd}
              disabled={!size || !color}
              className={`w-full py-4 text-[11px] tracking-widest uppercase font-semibold transition-all duration-300 mb-4 ${
                added
                  ? 'bg-stone-700 text-paper cursor-default'
                  : !size || !color
                  ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  : 'bg-ink text-paper hover:bg-stone-800 active:scale-[0.99]'
              }`}
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="border-t border-stone-200 mt-6">
              {product.features?.length > 0 && (
                <AccordionRow title="Details & Specifications">
                  <ul className="space-y-2 mt-1">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-muted shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </AccordionRow>
              )}
              <AccordionRow title="Fit & Sizing">
                <p>Cut in a <strong className="text-ink font-medium">{product.fit}</strong> silhouette. We recommend selecting your regular size. For a more exaggerated drape, size up by one. Model is 188cm and wears size M.</p>
              </AccordionRow>
              <AccordionRow title="Materials & Care">
                <p>Crafted from sustainably sourced premium fibres. Machine wash cold on a gentle cycle with like colours. Lay flat to dry. Cool iron if needed.</p>
              </AccordionRow>
              <AccordionRow title="Shipping & Returns">
                <p>Complimentary standard shipping on all orders over ₹3,000. Normal processing 1–2 business days. Returns accepted within 14 days, unworn with tags attached.</p>
              </AccordionRow>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="border-t border-stone-100 py-16 lg:py-24">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display font-light text-ink text-3xl md:text-4xl">You May Also Like</h2>
              {category && (
                <Link
                  to={`/category/${category.slug}`}
                  className="hidden sm:inline text-[11px] tracking-widest uppercase font-medium text-muted hover:text-ink transition-colors link-underline"
                >
                  View {category.name}
                </Link>
              )}
            </div>
            <ProductGrid products={related} onAddToCart={onAddToCart} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
};
