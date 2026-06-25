import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Collections', path: '/', hash: 'collections' },
    { name: 'About', path: '/about' },
  ];

  const handleNavClick = (e, link) => {
    setMenuOpen(false);
    if (link.hash) {
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(link.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // We let it navigate to '/' first, but it won't scroll automatically without extra logic. 
        // For a simple portfolio, navigating to '/' is sufficient.
      }
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center gap-2" aria-label="VELORA home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white transition group-hover:rotate-6">V</span>
          <span className="text-lg font-extrabold tracking-[0.24em] text-ink">VELORA</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={(e) => handleNavClick(e, link)}
              className="transition hover:text-ink"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="rounded-full p-3 text-ink/50 transition cursor-not-allowed" aria-label="Search">
            <Search size={19} />
          </button>
          <button className="rounded-full p-3 text-ink/50 transition cursor-not-allowed" aria-label="Account">
            <User size={19} />
          </button>
          <button onClick={onCartOpen} className="relative rounded-full p-3 text-ink transition hover:bg-ink/5" aria-label="Open cart">
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button onClick={onCartOpen} className="relative rounded-full p-3 text-ink" aria-label="Open cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen((value) => !value)} className="rounded-full p-3 text-ink" aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-ink/5 bg-paper lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="border-b border-ink/5 py-4 text-lg font-medium text-ink"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
