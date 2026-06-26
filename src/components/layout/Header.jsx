import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';

export const Header = ({ cartCount, onCartOpen }) => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setSearchOpen(false), setMenuOpen(false));
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 80);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); return; }
    const q = searchQuery.toLowerCase();
    setSearchResults(
      products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.categorySlug.toLowerCase().includes(q) ||
        p.fit?.toLowerCase().includes(q)
      ).slice(0, 12)
    );
  }, [searchQuery]);

  const handleResultClick = (slug) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(`/product/${slug}`);
  };

  const navLinks = [
    { label: 'New Arrivals', to: '/new-arrivals' },
    { label: 'Collections', to: '/collections' },
    { label: 'Best Sellers', to: '/best-sellers' },
    { label: 'About', to: '/about' },
  ];

  return (
    <>
      {/* ── Main Header ── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F9F7F4]/95 backdrop-blur-sm border-b border-stone-200/70 shadow-[0_1px_0_rgba(15,14,12,0.04)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-screen-xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-semibold tracking-[0.35em] text-ink uppercase select-none">
              VELORA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-[11px] tracking-widest font-medium uppercase transition-colors duration-200 link-underline ${
                  location.pathname === to
                    ? 'text-ink'
                    : 'text-stone-500 hover:text-ink'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-stone-600 hover:text-ink transition-colors"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2.5 text-stone-600 hover:text-ink transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-ink text-[8px] font-semibold text-paper">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="p-2.5 text-stone-600 hover:text-ink transition-colors lg:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 inset-y-0 w-[280px] bg-paper flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.215,0.61,0.355,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-stone-200/60">
            <span className="text-[10px] tracking-superwide font-medium text-muted uppercase">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-muted hover:text-ink transition-colors p-1">
              <X size={17} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-8 gap-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="py-3.5 text-sm font-medium text-stone-700 hover:text-ink border-b border-stone-100 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-10 pt-6 border-t border-stone-100">
            <p className="text-[10px] tracking-widest uppercase text-muted font-medium mb-1">VELORA Studio</p>
            <p className="text-xs text-stone-500">hello@velorastudio.com</p>
          </div>
        </div>
      </div>

      {/* ── Search Overlay ── */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-paper/98 backdrop-blur-xl flex flex-col">
          {/* Header row */}
          <div className="flex items-center justify-between px-6 lg:px-10 h-[72px] border-b border-stone-200/50 shrink-0">
            <span className="text-[10px] tracking-superwide font-medium text-muted uppercase">Search</span>
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              className="text-muted hover:text-ink transition-colors p-1"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Search input */}
          <div className="px-6 lg:px-16 pt-12 pb-8 max-w-4xl mx-auto w-full">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full bg-transparent border-0 border-b-2 border-stone-200 focus:border-ink text-4xl md:text-5xl lg:text-6xl font-display font-light text-ink placeholder-stone-300 py-4 focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Results area */}
          <div className="flex-1 overflow-y-auto px-6 lg:px-16 max-w-4xl mx-auto w-full pb-16">
            {searchQuery && (
              <>
                <p className="text-2xs text-muted tracking-superwide uppercase mb-6">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {searchResults.map(p => (
                      <button
                        key={p.id}
                        onClick={() => handleResultClick(p.slug)}
                        className="group text-left"
                      >
                        <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-3">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover img-zoom" />
                        </div>
                        <p className="text-xs font-medium text-ink group-hover:underline leading-snug">{p.name}</p>
                        <p className="text-xs text-muted mt-0.5">{formatPrice(p.price)}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted font-light">No results for "{searchQuery}"</p>
                )}
              </>
            )}

            {!searchQuery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-6">Categories</p>
                  <div className="flex flex-col gap-0">
                    {['Hoodies', 'Overshirts', 'T-Shirts', 'Trousers', 'Outerwear', 'Accessories'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSearchQuery(cat)}
                        className="text-left py-3.5 border-b border-stone-100 text-xl md:text-2xl font-display font-light text-stone-600 hover:text-ink transition-colors duration-200 group flex justify-between items-center"
                      >
                        {cat}
                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-6">Trending</p>
                  <div className="grid grid-cols-2 gap-4">
                    {products.filter(p => p.isFeatured).slice(0, 2).map(p => (
                      <button key={p.id} onClick={() => handleResultClick(p.slug)} className="group text-left">
                        <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-3">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover img-zoom" />
                        </div>
                        <p className="text-xs font-medium text-ink group-hover:underline truncate">{p.name}</p>
                        <p className="text-xs text-muted mt-0.5">{formatPrice(p.price)}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
