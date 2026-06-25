import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { StaticPage } from './pages/StaticPage';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Calculate total count (sum of quantities)
  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-paper selection:bg-ink selection:text-paper font-sans">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path="/category/:slug" element={<CategoryPage onAddToCart={handleAddToCart} />} />
            <Route path="/product/:slug" element={<ProductPage onAddToCart={handleAddToCart} />} />
            <Route 
              path="/about" 
              element={
                <StaticPage title="About VELORA">
                  <p>
                    VELORA was founded on a simple principle: clothing should be intentional. We reject the
                    fast-fashion cycle of disposable garments and overwhelming choices.
                  </p>
                  <p>
                    Instead, we focus on a curated rotation of premium essentials. Heavyweight cottons, structured
                    silhouettes, and a neutral palette designed to outlast trends. Form follows function.
                  </p>
                </StaticPage>
              } 
            />
            <Route 
              path="/shipping" 
              element={
                <StaticPage title="Shipping & Delivery">
                  <p>All orders are processed within 1 to 2 business days.</p>
                  <p>Standard delivery takes 3-5 business days across India.</p>
                  <p>Express delivery (1-2 days) is available at checkout for selected pincodes.</p>
                </StaticPage>
              } 
            />
            <Route 
              path="/returns" 
              element={
                <StaticPage title="Returns Policy">
                  <p>
                    We offer a 7-day return policy. If you aren't completely satisfied with your purchase, you can return
                    it in its original condition.
                  </p>
                  <p>
                    To initiate a return, simply contact our support team with your order number. Refunds will be processed
                    to the original payment method within 5-7 business days.
                  </p>
                </StaticPage>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <StaticPage title="Privacy Policy">
                  <p>
                    Your privacy is important to us. We only collect the information necessary to process your order and
                    improve your shopping experience.
                  </p>
                  <p>
                    We do not sell your personal data to third parties. For full details on how we handle your data, please
                    contact us.
                  </p>
                </StaticPage>
              } 
            />
            {/* Fallback 404 */}
            <Route 
              path="*" 
              element={
                <StaticPage title="404 Not Found">
                  <p>The page you are looking for doesn't exist.</p>
                </StaticPage>
              } 
            />
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
