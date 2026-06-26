import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/ecommerce/CartDrawer';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { StaticPage } from './pages/StaticPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { NewArrivalsPage } from './pages/NewArrivalsPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { BestSellersPage } from './pages/BestSellersPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velora_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart items', e);
      }
    }
  }, []);

  // Save cart to localStorage when updated
  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem('velora_cart', JSON.stringify(items));
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      // Look for match with same ID, size and color name
      const matchIndex = prev.findIndex(
        (item) => 
          item.id === product.id && 
          item.size === product.size && 
          item.color?.name === product.color?.name
      );

      let updated;
      if (matchIndex > -1) {
        updated = prev.map((item, idx) =>
          idx === matchIndex 
            ? { ...item, quantity: item.quantity + product.quantity } 
            : item
        );
      } else {
        updated = [...prev, product];
      }
      
      localStorage.setItem('velora_cart', JSON.stringify(updated));
      return updated;
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (uniqueKey) => {
    // uniqueKey is a combination of id + size + colorName
    setCartItems((prev) => {
      const updated = prev.filter((item) => {
        const itemKey = `${item.id}-${item.size}-${item.color?.name || ''}`;
        return itemKey !== uniqueKey;
      });
      localStorage.setItem('velora_cart', JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateQuantity = (uniqueKey, newQty) => {
    if (newQty < 1) {
      handleRemoveFromCart(uniqueKey);
      return;
    }
    setCartItems((prev) => {
      const updated = prev.map((item) => {
        const itemKey = `${item.id}-${item.size}-${item.color?.name || ''}`;
        return itemKey === uniqueKey ? { ...item, quantity: newQty } : item;
      });
      localStorage.setItem('velora_cart', JSON.stringify(updated));
      return updated;
    });
  };

  // Sum total quantities in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="flex min-h-screen flex-col selection:bg-stone-900 selection:text-white font-sans antialiased text-stone-900">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage onAddToCart={handleAddToCart} />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/best-sellers" element={<BestSellersPage onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:slug" element={<CategoryPage onAddToCart={handleAddToCart} />} />
            <Route path="/product/:slug" element={<ProductPage onAddToCart={handleAddToCart} />} />
            <Route path="/shipping" element={<StaticPage />} />
            <Route path="/returns" element={<StaticPage />} />
            <Route path="/privacy" element={<StaticPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />

        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
    </Router>
  );
}

export default App;

