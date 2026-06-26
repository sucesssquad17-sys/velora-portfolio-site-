import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';

export const Header = ({ cartCount, onCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle keypresses (e.g. Escape to close search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when search modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  }, [searchOpen]);

  // Handle live search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.categorySlug.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  const handleSearchResultClick = (slug) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(`/product/${slug}`);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-stone-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-[11px] font-bold text-stone-100 transition-transform group-hover:rotate-12 duration-300">
              V
            </span>
            <span className="text-[15px] font-bold tracking-[0.25em] text-stone-950">
              VELORA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-[11px] font-semibold tracking-widest text-stone-500 uppercase lg:flex">
            <Link 
              to="/new-arrivals" 
              className="transition-colors hover:text-stone-950"
            >
              New Arrivals
            </Link>
            <Link 
              to="/collections" 
              className="transition-colors hover:text-stone-950"
            >
              Collections
            </Link>
            <Link 
              to="/best-sellers" 
              className="transition-colors hover:text-stone-950"
            >
              Best Sellers
            </Link>
            <Link 
              to="/about" 
              className="transition-colors hover:text-stone-950"
            >
              About
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <button 
              onClick={() => setSearchOpen(true)} 
              className="rounded-full p-2.5 text-stone-700 transition hover:bg-stone-50"
              aria-label="Open search"
            >
              <Search size={17} />
            </button>

            {/* Cart Button */}
            <button 
              onClick={onCartOpen} 
              className="relative rounded-full p-2.5 text-stone-850 transition hover:bg-stone-50"
              aria-label="Open cart"
            >
              <ShoppingBag size={17} />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-stone-900 px-1 text-[9px] font-bold text-stone-100">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="rounded-full p-2.5 text-stone-700 hover:bg-stone-50 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (Sidebar Slide-in) */}
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <div 
            className={`absolute inset-y-0 right-0 w-full max-w-[300px] bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out transform ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-stone-100">
              <span className="text-[10px] font-bold tracking-[0.25em] text-stone-900 uppercase">Navigation</span>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col py-8 text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase gap-6">
              <Link 
                to="/new-arrivals" 
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-stone-950 border-b border-stone-50"
              >
                New Arrivals
              </Link>
              <Link 
                to="/collections" 
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-stone-950 border-b border-stone-50"
              >
                Collections
              </Link>
              <Link 
                to="/best-sellers" 
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-stone-950 border-b border-stone-50"
              >
                Best Sellers
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-stone-950"
              >
                About
              </Link>
            </nav>

            {/* Bottom Info / Socials */}
            <div className="mt-auto border-t border-stone-100 pt-6 text-[10px] text-stone-400 tracking-wider">
              <p className="font-semibold text-stone-850 uppercase mb-2">Customer Service</p>
              <p className="mb-4">support@velora.com</p>
              <div className="flex gap-4 uppercase font-semibold text-[9px] text-stone-500">
                <a href="#instagram" className="hover:text-stone-900 transition-colors">Instagram</a>
                <a href="#pinterest" className="hover:text-stone-900 transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF9F5]/98 backdrop-blur-xl transition-opacity duration-300">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-stone-200/50 w-full">
            <span className="text-[10px] font-bold tracking-[0.3em] text-ink uppercase">Search VELORA</span>
            <button 
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
              className="p-2 text-stone-500 hover:text-ink transition-colors"
              aria-label="Close search"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto w-full flex flex-col justify-start">
            <div className="relative mb-16">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full border-0 border-b border-stone-300 bg-transparent py-4 pr-12 text-3xl sm:text-4xl md:text-5xl font-display text-ink placeholder-stone-300 focus:outline-none focus:border-ink transition-colors focus:ring-0"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300" size={32} strokeWidth={1} />
            </div>

            {/* Results list */}
            {searchQuery && (
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-500 font-bold mb-6">
                  {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
                </p>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {searchResults.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleSearchResultClick(product.slug)}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-4">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h4 className="text-sm font-medium text-ink group-hover:underline">{product.name}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-stone-500">{product.categorySlug}</p>
                          <span className="text-xs font-medium text-ink">{formatPrice(product.price)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-stone-500 font-sans font-light">No products found matching "{searchQuery}".</p>
                )}
              </div>
            )}

            {!searchQuery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-bold mb-6 flex items-center gap-3">
                    <span className="h-px w-4 bg-stone-300" />
                    Popular Categories
                  </h4>
                  <div className="flex flex-col gap-4">
                    {['Hoodies', 'Overshirts', 'T-Shirts', 'Trousers', 'Outerwear'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSearchQuery(cat)}
                        className="text-left text-lg md:text-xl font-medium text-stone-600 hover:text-ink hover:translate-x-2 transition-all duration-300"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-bold mb-6 flex items-center gap-3">
                    <span className="h-px w-4 bg-stone-300" />
                    Trending Now
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {products.filter(p => p.tag === 'Trending' || p.isFeatured).slice(0, 2).map(product => (
                      <div
                        key={product.id}
                        onClick={() => handleSearchResultClick(product.slug)}
                        className="group cursor-pointer"
                      >
                         <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-3">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h4 className="text-xs font-medium text-ink truncate group-hover:underline">{product.name}</h4>
                        <span className="text-[10px] text-stone-500 mt-1 block">{formatPrice(product.price)}</span>
                      </div>
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
