import { useState } from 'react';
import { Header } from './components/Header';
import type { CartItem } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { EditorialBanner } from './components/EditorialBanner';
import { CollectionHighlight } from './components/CollectionHighlight';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (newItem: { id: string; name: string; price: number; image: string; color: string; size: string }) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
    // Auto-open cart drawer for immediate user feedback
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, color: string, size: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id && item.color === color && item.size === size) {
            const newQty = item.quantity + change;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string, color: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.color === color && item.size === size))
    );
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-text selection:text-brand-bg">
      {/* Sticky header with Cart drawer capabilities */}
      <Header
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section & Infinite Marquee rail */}
        <Hero />

        {/* Category Strip */}
        <CategorySection />

        {/* Featured Products Grid */}
        <ProductGrid onAddToCart={handleAddToCart} />

        {/* Split Campaign Highlight */}
        <CollectionHighlight />

        {/* Full-width Editorial Narrative Banner */}
        <EditorialBanner />

        {/* Social Proof quotes */}
        <Testimonials />

        {/* Value Guarantees / Brand benefits */}
        <Benefits />

        {/* Mailing Signup form */}
        <Newsletter />
      </main>

      {/* Clean Footer links */}
      <Footer />
    </div>
  );
}

export default App;
