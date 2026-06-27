import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { ChevronDown } from 'lucide-react';

const CAT_IMGS = {
  hoodies:     'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1600&q=85&fit=crop',
  overshirts:  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1600&q=85&fit=crop',
  't-shirts':  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&q=85&fit=crop',
  trousers:    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1600&q=85&fit=crop',
  accessories: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=1600&q=85&fit=crop',
  outerwear:   'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=85&fit=crop',
};

const SORT_OPTIONS = [
  { value: 'default',    label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'name-asc',   label: 'Name A–Z' },
];

const FIT_OPTIONS = ['All', 'Relaxed', 'Oversized', 'Structured', 'Regular'];

const pill = (active) => ({
  padding: '6px 16px', border: 'none', cursor: 'pointer',
  fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
  background: active ? '#0F0E0C' : 'transparent',
  color: active ? '#F9F7F4' : '#9A9590',
  outline: active ? 'none' : '1px solid #E5E2DC',
  transition: 'all 0.2s',
});

export const CategoryPage = ({ onAddToCart }) => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
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

  if (!category) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F9F7F4' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#9A9590', marginBottom: '1.5rem' }}>Category not found.</p>
        <Link to="/" style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0F0E0C' }}>← Home</Link>
      </div>
    </div>
  );

  const heroSrc = CAT_IMGS[slug] || category.heroImage;

  return (
    <div style={{ background: '#F9F7F4', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: '55vh', minHeight: 380, overflow: 'hidden', background: '#1a1a1a' }}>
        <img src={heroSrc} alt={category.name}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,14,12,0.3) 0%, rgba(15,14,12,0.65) 100%)' }}/>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 'clamp(1.5rem,5vw,4rem)', paddingBottom: '3rem' }}>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>/</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{category.name}</span>
          </nav>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 300, color: '#fff', lineHeight: 0.95 }}>
            {category.name}
          </h1>
          {category.tagline && (
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 300, marginTop: '0.75rem' }}>{category.tagline}</p>
          )}
        </div>
      </div>

      {/* Filters + Products */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        {/* Filter bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12, padding: '1.5rem 0', borderBottom: '1px solid #E5E2DC', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {FIT_OPTIONS.map(f => (
              <button key={f} onClick={() => setFit(f)} style={pill(fit === f)}>{f}</button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <select value={sort} onChange={e => setSort(e.target.value)}
              style={{ appearance: 'none', background: 'transparent', border: '1px solid #E5E2DC',
                fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#9A9590', padding: '6px 32px 6px 12px', cursor: 'pointer', outline: 'none' }}>
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown size={10} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', color: '#9A9590', pointerEvents: 'none' }}/>
          </div>
        </div>

        {/* Count */}
        <p className="label" style={{ marginBottom: '2rem' }}>{categoryProducts.length} piece{categoryProducts.length !== 1 ? 's' : ''}</p>

        {/* Grid */}
        {categoryProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem 1.5rem', marginBottom: '5rem' }} id="cat-grid">
            {categoryProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart}/>)}
            <style>{`@media(max-width:1024px){#cat-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <p style={{ fontSize: 13, color: '#9A9590', fontWeight: 300, marginBottom: '1rem' }}>No products match this filter.</p>
            <button onClick={() => setFit('All')} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0F0E0C', background: 'none', border: 'none', cursor: 'pointer' }}>Clear Filter →</button>
          </div>
        )}
      </div>
    </div>
  );
};
