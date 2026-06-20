import React, { useState } from 'react';
import { ShoppingBag, User, Search, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color: string;
  size: string;
}

interface HeaderProps {
  cart: CartItem[];
  updateQuantity: (id: string, color: string, size: string, change: number) => void;
  removeFromCart: (id: string, color: string, size: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
  isCartOpen,
  setIsCartOpen
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const navLinks = [
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'Collections', href: '#collections' },
    { label: 'Best Sellers', href: '#best-sellers' },
    { label: 'About', href: '#about' }
  ];

  return (
    <>
      {/* Navbar Container */}
      <header className="sticky top-0 z-40 w-full border-b border-brand-text/5 bg-brand-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-brand-text hover:text-brand-accent md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 stroke-[1.5]" />
          </button>

          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-[0.25em] text-brand-text">
            VELORA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wider text-brand-text/80 transition-smooth hover:text-brand-text hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-brand-text transition-smooth hover:text-brand-accent"
              aria-label="Search products"
            >
              <Search className="h-5 w-5 stroke-[1.5]" />
            </button>
            
            <button
              className="hidden p-2 text-brand-text transition-smooth hover:text-brand-accent sm:block"
              aria-label="Customer account"
            >
              <User className="h-5 w-5 stroke-[1.5]" />
            </button>

            {/* Cart Bag Icon with dynamic Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-brand-text transition-smooth hover:text-brand-accent"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-text text-[9px] font-bold text-brand-bg"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Slide Down Search Panel */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-brand-text/5 bg-brand-bg px-4 py-4 sm:px-6"
            >
              <div className="mx-auto max-w-3xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search collection (e.g. Hoodies, Overshirts...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-b border-brand-text/20 bg-transparent py-3 pr-10 text-sm tracking-wider text-brand-text outline-none transition-smooth focus:border-brand-text"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-8 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-text"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  <Search className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="relative z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-brand-bg p-6 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-brand-text/5 pb-4">
                <span className="text-lg font-bold tracking-[0.25em] text-brand-text">VELORA</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-text hover:text-brand-accent"
                >
                  <X className="h-6 w-6 stroke-[1.5]" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 pt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium tracking-widest text-brand-text hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto border-t border-brand-text/5 pt-6">
                <div className="flex items-center space-x-3 text-brand-text/80">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium tracking-wide">Account</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-out Shopping Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="relative z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black"
            />

            {/* Slider container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="fixed inset-y-0 right-0 flex w-full max-w-md flex-col bg-brand-bg shadow-2xl"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between border-b border-brand-text/5 px-6 py-5">
                <h2 className="text-lg font-semibold tracking-wider text-brand-text">Shopping Bag ({cartCount})</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-brand-text hover:text-brand-accent transition-smooth"
                >
                  <X className="h-6 w-6 stroke-[1.5]" />
                </button>
              </div>

              {/* Cart Items list */}
              <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <ShoppingBag className="mb-4 h-12 w-12 stroke-[1.2] text-brand-muted" />
                    <p className="text-base font-medium tracking-wider text-brand-text">Your bag is empty.</p>
                    <p className="mt-1 text-sm text-brand-muted">Explore our new essentials collection.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 border border-brand-text bg-brand-text px-6 py-2.5 text-xs font-semibold tracking-widest text-brand-bg transition-smooth hover:bg-transparent hover:text-brand-text"
                    >
                      Shop New Arrivals
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.color}-${item.size}`} className="flex border-b border-brand-text/5 pb-6">
                        {/* Product Image */}
                        <div className="h-24 w-18 flex-shrink-0 overflow-hidden rounded bg-brand-bg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="ml-4 flex flex-1 flex-col">
                          <div className="flex justify-between text-sm font-medium text-brand-text">
                            <h3 className="tracking-wide">{item.name}</h3>
                            <span className="ml-4 font-semibold">₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <p className="mt-1 text-xs text-brand-muted tracking-wide">
                            Size: {item.size} | Color: {item.color}
                          </p>

                          <div className="mt-auto flex items-center justify-between pt-2">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-brand-text/10 rounded">
                              <button
                                onClick={() => updateQuantity(item.id, item.color, item.size, -1)}
                                className="p-1.5 text-brand-muted hover:text-brand-text transition-smooth"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-2 text-xs font-medium text-brand-text">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.color, item.size, 1)}
                                className="p-1.5 text-brand-muted hover:text-brand-text transition-smooth"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => removeFromCart(item.id, item.color, item.size)}
                              className="text-brand-muted hover:text-red-500 transition-smooth"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4 stroke-[1.5]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subtotal and Checkout Section */}
              {cart.length > 0 && (
                <div className="border-t border-brand-text/5 px-6 py-6 bg-brand-bg">
                  <div className="flex justify-between text-base font-semibold tracking-wider text-brand-text">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="mt-1 text-xs text-brand-muted">
                    Shipping and taxes calculated at checkout.
                  </p>
                  
                  {cartSubtotal < 2999 && (
                    <p className="mt-2 text-xs font-medium text-brand-accent">
                      Add ₹{(2999 - cartSubtotal).toLocaleString('en-IN')} more for free shipping!
                    </p>
                  )}

                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => alert('Proceeding to mock secure checkout...')}
                      className="w-full bg-brand-text py-3.5 text-xs font-bold tracking-widest text-brand-bg transition-smooth hover:bg-brand-text/90"
                    >
                      Secure Checkout
                    </button>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="w-full border border-brand-text/25 py-3.5 text-xs font-bold tracking-widest text-brand-text transition-smooth hover:bg-brand-text/5"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
