import React from 'react';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import { Hero } from '../components/home/Hero';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { FeaturedDrop } from '../components/home/FeaturedDrop';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { ProductCard } from '../components/ecommerce/ProductCard';

const SectionHeader = ({ eyebrow, title, linkTo, linkLabel }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
    <div>
      <p className="label" style={{ marginBottom: '0.75rem' }}>{eyebrow}</p>
      <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#0F0E0C', lineHeight: 1.05 }}>
        {title}
      </h2>
    </div>
    {linkTo && (
      <Link to={linkTo} className="link-line"
        style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9A9590', textDecoration: 'none' }}>
        {linkLabel || 'View All'}
      </Link>
    )}
  </div>
);

const Grid4 = ({ items, onAddToCart }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem 1.5rem' }}
    className="product-grid-4">
    {items.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart}/>)}
    <style>{`@media(max-width:1024px){.product-grid-4{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
  </div>
);

export const HomePage = ({ onAddToCart }) => {
  const newArrivals = allProducts.filter(p => ['New','Trending','Studio Pick'].includes(p.tag)).slice(0, 4);
  const bestSellers = allProducts.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div style={{ background: '#F9F7F4' }}>
      <Hero/>

      {/* New Arrivals */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
          <SectionHeader eyebrow="Just In" title="New Arrivals" linkTo="/new-arrivals"/>
          <Grid4 items={newArrivals} onAddToCart={onAddToCart}/>
        </div>
      </section>

      {/* Featured Drop */}
      <FeaturedDrop/>

      {/* Best Sellers */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
          <SectionHeader eyebrow="Always in Demand" title="Best Sellers" linkTo="/best-sellers"/>
          <Grid4 items={bestSellers} onAddToCart={onAddToCart}/>
        </div>
      </section>

      {/* Editorial Banner */}
      <section style={{ background: '#EDEAE6' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }} id="editorial-banner">
          <div style={{ overflow: 'hidden', minHeight: 400 }} className="img-hover">
            <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900&q=80&fit=crop"
              alt="VELORA fabric" className="img-inner"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(2.5rem, 5vw, 5rem)' }}>
            <p className="label" style={{ marginBottom: '1rem' }}>The Philosophy</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300,
              color: '#0F0E0C', lineHeight: 1.05, marginBottom: '1.25rem' }}>
              Stripped of noise.<br/>Built to last.
            </h2>
            <p style={{ fontSize: 13, color: '#9A9590', fontWeight: 300, lineHeight: 1.85, maxWidth: 360, marginBottom: '2rem' }}>
              We remove logos, noisy graphics, and temporary trends — focusing on structure, silhouette, and fabrics that only get better with time.
            </p>
            <Link to="/about" className="link-line"
              style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#0F0E0C', textDecoration: 'none', display: 'inline-block' }}>
              Our Story →
            </Link>
          </div>
          <style>{`@media(max-width:768px){#editorial-banner{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* Collections */}
      <CollectionsSection/>

      {/* Newsletter */}
      <NewsletterSection/>
    </div>
  );
};
