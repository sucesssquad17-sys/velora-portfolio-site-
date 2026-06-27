import React from 'react';
import { Link } from 'react-router-dom';

const CAT_IMGS = {
  hoodies:     'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80&fit=crop',
  overshirts:  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&q=80&fit=crop',
  't-shirts':  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&fit=crop',
  trousers:    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80&fit=crop',
  accessories: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80&fit=crop',
  outerwear:   'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&fit=crop',
};

const CATS = [
  { slug:'hoodies',     name:'Hoodies' },
  { slug:'overshirts',  name:'Overshirts' },
  { slug:'t-shirts',    name:'T-Shirts' },
  { slug:'trousers',    name:'Trousers' },
  { slug:'outerwear',   name:'Outerwear' },
  { slug:'accessories', name:'Accessories' },
];

const Card = ({ slug, name, span }) => (
  <Link to={`/category/${slug}`}
    style={{ display: 'block', textDecoration: 'none', position: 'relative',
      overflow: 'hidden', background: '#1a1a1a',
      gridColumn: span ? 'span 2' : 'span 1',
      gridRow: span ? 'span 2' : 'span 1',
    }}
    className="img-hover">
    <div style={{ paddingBottom: span ? '66%' : '133%', position: 'relative' }}>
      <img src={CAT_IMGS[slug]} alt={name} loading="lazy"
        className="img-inner"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,14,12,0.75) 0%, transparent 50%)' }}/>
      <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '1.5rem' }}>
        <p className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem' }}>Explore</p>
        <h3 className="font-display" style={{ fontSize: span ? 28 : 22, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{name}</h3>
      </div>
    </div>
  </Link>
);

export const CollectionsSection = () => (
  <section style={{ background: '#F9F7F4', padding: '6rem 0' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
        <div>
          <p className="label" style={{ marginBottom: '0.75rem' }}>The Catalog</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#0F0E0C', lineHeight: 1.05 }}>
            Core Collections
          </h2>
        </div>
        <Link to="/collections" className="link-line"
          style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#9A9590', textDecoration: 'none' }}>
          View All
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, gridAutoRows: '200px' }}>
        {/* Large hero card */}
        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', position: 'relative', overflow: 'hidden', background: '#1a1a1a' }} className="img-hover">
          <img src={CAT_IMGS.hoodies} alt="Hoodies" loading="lazy" className="img-inner"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, position: 'absolute', inset: 0 }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,14,12,0.75) 0%, transparent 50%)' }}/>
          <Link to="/category/hoodies" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem', textDecoration: 'none' }}>
            <p className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem' }}>Explore</p>
            <h3 className="font-display" style={{ fontSize: 36, fontWeight: 300, color: '#fff', lineHeight: 1 }}>Hoodies</h3>
          </Link>
        </div>
        {/* Remaining 5 categories */}
        {CATS.slice(1).map(({ slug, name }) => (
          <div key={slug} style={{ position: 'relative', overflow: 'hidden', background: '#1a1a1a' }} className="img-hover">
            <img src={CAT_IMGS[slug]} alt={name} loading="lazy" className="img-inner"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, position: 'absolute', inset: 0 }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,14,12,0.7) 0%, transparent 60%)' }}/>
            <Link to={`/category/${slug}`} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', textDecoration: 'none' }}>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
