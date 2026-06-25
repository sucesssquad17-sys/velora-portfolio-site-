import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/Button';

export function CartDrawer({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((acc, item) => {
    // Parse price string like '₹2,499' to number
    const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
    return acc + (price * (item.quantity || 1));
  }, 0);

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink/5 p-6">
              <h2 className="text-lg font-bold text-ink">Your Cart</h2>
              <button onClick={onClose} className="rounded-full p-2 text-ink/50 transition hover:bg-ink/5 hover:text-ink">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center space-y-6 text-center text-ink/40">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="max-w-[200px] text-sm">Your cart is empty. Discover our new arrivals to find your next staple.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex gap-4">
                      <div className="aspect-[4/5] w-24 flex-shrink-0 overflow-hidden rounded-xl bg-ink/5">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-ink text-sm">{item.name}</h3>
                            <button onClick={() => onRemove(item.id)} className="text-ink/40 transition hover:text-red-500">
                              <X size={16} />
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-muted">{item.price}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-ink/10 px-3 py-1">
                            <button onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))} className="text-ink/60 hover:text-ink">
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-medium w-4 text-center">{item.quantity || 1}</span>
                            <button onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)} className="text-ink/60 hover:text-ink">
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-ink/5 bg-paper p-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-bold text-ink">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-6 text-xs text-muted">Shipping and taxes calculated at checkout.</p>
                <Button className="w-full">Proceed to Checkout</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
