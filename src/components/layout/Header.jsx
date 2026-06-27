import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';

export const Header = ({ cartCount, onCartOpen }) => {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [query,       setQuery]       = useState('');
  const [results,     setResults]     = useState([]);
  const [scrolled,    setScrolled]    = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [location]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && (setSearchOpen(false), setMenuOpen(false));
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);
  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(products.filter(p =>
      p.name.toLowerCase().includes(q) || p.categorySlug.includes(q)
    ).slice(0, 10));
  }, [query]);

  const navLinks = [
    { label: 'New Arrivals', to: '/new-arrivals' },
    { label: 'Collections',  to: '/collections'  },
    { label: 'Best Sellers', to: '/best-sellers'  },
    { label: 'About',        to: '/about'         },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      {/* HEADER */}
      <header
        style={{
          position: 'fixed', inset: '0 0 auto 0', zIndex: 40,
          transition: 'background 0.4s, border-color 0.4s',
          background: scrolled ? 'rgba(249,247,244,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E2DC' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', height: 72,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2.5rem' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.35em', color: scrolled || !isHome ? '#0F0E0C' : '#fff',
              transition: 'color 0.4s',
            }}>VELORA</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '2.5rem' }} className="hidden lg:flex">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="link-line" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none',
                color: scrolled || !isHome ? (location.pathname===to ? '#0F0E0C' : '#9A9590') : 'rgba(255,255,255,0.8)',
                transition: 'color 0.3s',
              }}>{label}</Link>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {[
              { icon: <Search size={18} strokeWidth={1.5}/>, fn: () => setSearchOpen(true), label: 'Search' },
            ].map(({ icon, fn, label }) => (
              <button key={label} onClick={fn} aria-label={label}
                style={{ padding: '10px', background: 'none', border: 'none', cursor: 'pointer',
                  color: scrolled || !isHome ? '#0F0E0C' : '#fff', transition: 'color 0.3s' }}>
                {icon}
              </button>
            ))}
            <button onClick={onCartOpen} aria-label="Cart"
              style={{ padding: '10px', background: 'none', border: 'none', cursor: 'pointer',
                color: scrolled || !isHome ? '#0F0E0C' : '#fff', transition: 'color 0.3s', position: 'relative' }}>
              <ShoppingBag size={18} strokeWidth={1.5}/>
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: 6, right: 6, background: '#0F0E0C',
                  color: '#F9F7F4', borderRadius: '50%', width: 14, height: 14, fontSize: 8,
                  fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(v => !v)} aria-label="Menu"
              className="lg:hidden"
              style={{ padding: '10px', background: 'none', border: 'none', cursor: 'pointer',
                color: scrolled || !isHome ? '#0F0E0C' : '#fff', transition: 'color 0.3s' }}>
              {menuOpen ? <X size={18} strokeWidth={1.5}/> : <Menu size={18} strokeWidth={1.5}/>}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50 }}>
          <div onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(15,14,12,0.3)', backdropFilter: 'blur(2px)' }}/>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 280,
            background: '#F9F7F4', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 1.5rem', height: 72, borderBottom: '1px solid #E5E2DC' }}>
              <span className="label">Navigation</span>
              <button onClick={() => setMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9A9590' }}>
                <X size={17} strokeWidth={1.5}/>
              </button>
            </div>
            <nav style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {navLinks.map(({ label, to }) => (
                <Link key={to} to={to} style={{ padding: '1rem 0', textDecoration: 'none',
                  fontSize: 14, fontWeight: 500, color: '#0F0E0C',
                  borderBottom: '1px solid #F0EEEB' }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(249,247,244,0.98)', backdropFilter: 'blur(12px)',
          display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 2.5rem', height: 72, borderBottom: '1px solid #E5E2DC', flexShrink: 0 }}>
            <span className="label">Search</span>
            <button onClick={() => { setSearchOpen(false); setQuery(''); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9A9590' }}>
              <X size={20} strokeWidth={1.5}/>
            </button>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%', padding: '3rem 2.5rem 1.5rem' }}>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products…"
              style={{
                width: '100%', background: 'none', border: 'none',
                borderBottom: '2px solid #E5E2DC', outline: 'none',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300,
                color: '#0F0E0C', padding: '0.5rem 0', lineHeight: 1.2,
              }}
            />
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem 2.5rem',
            maxWidth: 800, margin: '0 auto', width: '100%' }}>
            {query && results.length === 0 && (
              <p style={{ fontSize: 13, color: '#9A9590', fontWeight: 300 }}>No results for "{query}"</p>
            )}
            {results.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1.5rem' }}>
                {results.map(p => (
                  <button key={p.id} onClick={() => { navigate(`/product/${p.slug}`); setSearchOpen(false); setQuery(''); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <div style={{ aspectRatio: '3/4', background: '#EDEAE6', overflow: 'hidden', marginBottom: '0.75rem' }} className="img-hover">
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="img-inner"/>
                    </div>
                    <p style={{ fontSize: 12, fontWeight: 500, color: '#0F0E0C', marginBottom: 2 }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: '#9A9590' }}>{formatPrice(p.price)}</p>
                  </button>
                ))}
              </div>
            )}
            {!query && (
              <div>
                <p className="label" style={{ marginBottom: '1.5rem' }}>Categories</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {['Hoodies','Overshirts','T-Shirts','Trousers','Outerwear','Accessories'].map(c => (
                    <button key={c} onClick={() => setQuery(c)}
                      style={{ background: 'none', border: 'none', borderBottom: '1px solid #F0EEEB',
                        cursor: 'pointer', textAlign: 'left', padding: '1rem 0',
                        fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28,
                        fontWeight: 300, color: '#9A9590', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color='#0F0E0C'}
                      onMouseLeave={e => e.target.style.color='#9A9590'}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
