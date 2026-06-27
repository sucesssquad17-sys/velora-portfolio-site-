import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, Check } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { formatPrice } from '../utils/formatPrice';
import { ProductCard } from '../components/ecommerce/ProductCard';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: '1px solid #E5E2DC' }}>
      <button onClick={() => setOpen(v => !v)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 0', background: 'none', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0F0E0C' }}>{title}</span>
        {open ? <Minus size={12} color="#9A9590"/> : <Plus size={12} color="#9A9590"/>}
      </button>
      {open && <div style={{ paddingBottom: '1.25rem', fontSize: 13, color: '#9A9590', fontWeight: 300, lineHeight: 1.85 }}>{children}</div>}
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
    if (product) { setActiveImg(product.image); setSize(product.sizes?.[0] || ''); setColor(product.colors?.[0] || null); setAdded(false); window.scrollTo({ top:0, behavior:'instant' }); }
  }, [slug]);

  if (!product) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F9F7F4' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#9A9590', marginBottom: '1.5rem' }}>Product not found.</p>
        <Link to="/" style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0F0E0C', textDecoration: 'none' }}>← Home</Link>
      </div>
    </div>
  );

  const related = products.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
  const allImages = [product.image, ...(product.gallery || [])].filter((v, i, a) => a.indexOf(v) === i);

  const handleAdd = () => {
    if (!size || !color) return;
    onAddToCart({ id: product.id, name: product.name, slug: product.slug, price: product.price, image: product.image, color, size, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div style={{ background: '#F9F7F4', minHeight: '100vh', paddingTop: 72 }}>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '1.25rem 0', borderBottom: '1px solid #E5E2DC' }}>
          {[['/','Home'],[`/category/${product.categorySlug}`, category?.name||product.categorySlug],[null, product.name]].map(([to, label], i, a) => (
            <React.Fragment key={label}>
              {to ? <Link to={to} style={{ fontSize: 10, color: '#9A9590', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</Link>
                   : <span style={{ fontSize: 10, color: '#0F0E0C', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>}
              {i < a.length - 1 && <span style={{ color: '#E5E2DC', fontSize: 10 }}>/</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Main grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 2.5rem 6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} id="product-grid">

        {/* Images */}
        <div>
          <div style={{ aspectRatio: '3/4', background: '#EDEAE6', overflow: 'hidden', marginBottom: '0.75rem' }}>
            <img src={activeImg} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          </div>
          {allImages.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }} className="no-scrollbar">
              {allImages.map((src, i) => (
                <button key={i} onClick={() => setActiveImg(src)}
                  style={{ flexShrink: 0, width: 72, height: 90, background: '#EDEAE6', border: '2px solid',
                    borderColor: activeImg === src ? '#0F0E0C' : 'transparent',
                    overflow: 'hidden', cursor: 'pointer', padding: 0 }}>
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details — sticky */}
        <div style={{ position: 'sticky', top: 96 }}>
          {product.tag && (
            <span style={{ display: 'inline-block', fontSize: 9, fontWeight: 600, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#9A9590', marginBottom: '1rem' }}>{product.tag}</span>
          )}
          <h1 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, color: '#0F0E0C', lineHeight: 1.05, marginBottom: '0.5rem' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: 13, color: '#9A9590', fontWeight: 300, marginBottom: '1.5rem', textTransform: 'capitalize' }}>
            {product.fit} fit
          </p>
          <p style={{ fontSize: 22, fontWeight: 500, color: '#0F0E0C', marginBottom: '2rem' }}>
            {formatPrice(product.price)}
          </p>

          {/* Color */}
          {product.colors?.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0F0E0C', marginBottom: '0.75rem' }}>
                Colour — {color?.name}
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                {product.colors.map(c => (
                  <button key={c.name} onClick={() => setColor(c)} title={c.name}
                    style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: c.code,
                      border: `2px solid ${color?.name===c.name ? '#0F0E0C' : 'transparent'}`,
                      outline: `1px solid rgba(0,0,0,0.12)`, cursor: 'pointer', padding: 0 }}/>
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          {product.sizes?.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0F0E0C', marginBottom: '0.75rem' }}>
                Size
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {product.sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)}
                    style={{ padding: '0.5rem 1rem', fontSize: 11, fontWeight: 500, cursor: 'pointer',
                      background: size===s ? '#0F0E0C' : 'transparent',
                      color: size===s ? '#F9F7F4' : '#9A9590',
                      border: `1px solid ${size===s ? '#0F0E0C' : '#E5E2DC'}`,
                      transition: 'all 0.2s' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Bag */}
          <button onClick={handleAdd} disabled={!size || !color || added}
            style={{ width: '100%', padding: '1.1rem', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              background: added ? '#2D5A27' : '#0F0E0C',
              color: '#F9F7F4', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'background 0.3s', marginBottom: '0.75rem' }}>
            {added ? <><Check size={13}/> Added to Bag</> : 'Add to Bag'}
          </button>
          <p style={{ fontSize: 10, color: '#9A9590', textAlign: 'center', marginBottom: '2rem' }}>
            Free shipping over ₹3,000 · Free returns
          </p>

          {/* Description */}
          <p style={{ fontSize: 13, color: '#9A9590', fontWeight: 300, lineHeight: 1.85, marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Accordions */}
          <div style={{ borderBottom: '1px solid #E5E2DC' }}>
            {product.features?.length > 0 && (
              <Accordion title="Details & Features">
                <ul style={{ margin: 0, padding: '0 0 0 1.25rem' }}>
                  {product.features.map((f, i) => <li key={i} style={{ marginBottom: '0.35rem' }}>{f}</li>)}
                </ul>
              </Accordion>
            )}
            <Accordion title="Fit Guide">
              <p>This piece is cut in a <strong>{product.fit}</strong> fit. We recommend sizing up for a more relaxed, oversized silhouette. The model wears size M.</p>
            </Accordion>
            <Accordion title="Delivery & Returns">
              <p>Standard delivery 3–5 working days. Free shipping on orders above ₹3,000. Free returns within 14 days of delivery.</p>
            </Accordion>
          </div>
        </div>
        <style>{`@media(max-width:900px){#product-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div style={{ borderTop: '1px solid #E5E2DC', padding: '5rem 0', background: '#F9F7F4' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
            <p className="label" style={{ marginBottom: '0.75rem' }}>From the same category</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 300, color: '#0F0E0C', marginBottom: '2.5rem' }}>
              You May Also Like
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem 1.5rem' }} id="related-grid">
              {related.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart}/>)}
              <style>{`@media(max-width:900px){#related-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
