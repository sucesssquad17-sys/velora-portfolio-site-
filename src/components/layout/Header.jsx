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

  // Navigate with smooth scroll for homepage sections
  const handleNavClick = (e, hash) => {
    setMenuOpen(false);
    
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on homepage, navigate to homepage first, then scroll
      navigate(`/#${hash}`);
    }
  };

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
            <a 
              href="#new-arrivals" 
              onClick={(e) => handleNavClick(e, 'new-arrivals')}
              className="transition-colors hover:text-stone-950"
            >
              New Arrivals
            </a>
            <a 
              href="#collections" 
              onClick={(e) => handleNavClick(e, 'collections')}
              className="transition-colors hover:text-stone-950"
            >
              Collections
            </a>
            <a 
              href="#best-sellers" 
              onClick={(e) => handleNavClick(e, 'best-sellers')}
              className="transition-colors hover:text-stone-950"
            >
              Best Sellers
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="transition-colors hover:text-stone-950"
            >
              About
            </a>
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

        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed inset-x-0 top-16 bg-white border-b border-stone-100 transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
            menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 text-xs font-semibold tracking-wider text-stone-500 uppercase gap-4">
            <a 
              href="#new-arrivals" 
              onClick={(e) => handleNavClick(e, 'new-arrivals')}
              className="py-2 transition-colors hover:text-stone-950 border-b border-stone-50"
            >
              New Arrivals
            </a>
            <a 
              href="#collections" 
              onClick={(e) => handleNavClick(e, 'collections')}
              className="py-2 transition-colors hover:text-stone-950 border-b border-stone-50"
            >
              Collections
            </a>
            <a 
              href="#best-sellers" 
              onClick={(e) => handleNavClick(e, 'best-sellers')}
              className="py-2 transition-colors hover:text-stone-950 border-b border-stone-50"
            >
              Best Sellers
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="py-2 transition-colors hover:text-stone-950"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Full-screen Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex h-16 items-center justify-between border-b border-stone-100 px-4 sm:px-6 lg:px-8">
            <span className="text-[11px] font-bold tracking-[0.25em] text-stone-900 uppercase">Search VELORA</span>
            <button 
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
              className="rounded-full p-2 text-stone-650 hover:bg-stone-50"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name or category (e.g. Hoodie, Overshirt)..."
                className="w-full border border-stone-200 rounded-none bg-stone-50 py-3.5 pl-12 pr-4 text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white transition-colors"
              />
            </div>

            {/* Results list */}
            {searchQuery && (
              <div>
                <p className="text-[10px] tracking-wider uppercase text-stone-400 font-semibold mb-4">
                  Found {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
                </p>
                {searchResults.length > 0 ? (
                  <div className="divide-y divide-stone-100">
                    {searchResults.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleSearchResultClick(product.slug)}
                        className="flex items-center gap-4 py-3 cursor-pointer group transition-colors hover:bg-stone-50 px-2"
                      >
                        <div className="h-14 w-11 bg-stone-100 flex-shrink-0">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-semibold text-stone-900 group-hover:underline">{product.name}</h4>
                          <p className="text-[10px] uppercase tracking-wider text-stone-400 mt-0.5">{product.categorySlug}</p>
                        </div>
                        <span className="text-xs font-medium text-stone-850">{formatPrice(product.price)}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-stone-400 py-4">No products found matching your search term.</p>
                )}
              </div>
            )}

            {!searchQuery && (
              <div>
                <h4 className="text-[10px] tracking-wider uppercase text-stone-400 font-semibold mb-3">Suggested Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {['Hoodies', 'Overshirts', 'T-Shirts', 'Trousers', 'Accessories', 'Outerwear'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchQuery(cat)}
                      className="px-4 py-1.5 border border-stone-200 text-xs text-stone-700 hover:border-stone-900 hover:text-stone-900 transition-colors"
                    >
                      {cat}
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
