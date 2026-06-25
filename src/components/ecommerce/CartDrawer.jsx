import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../ui/Button';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  // Prevent body scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCharge = subtotal > 1500 ? 0 : 150;

  const handleCheckout = () => {
    alert('Checkout simulation: Orders are processed securely in production. Thank you for viewing the VELORA portfolio!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        {/* Panel */}
        <div className="w-screen max-w-md bg-white flex flex-col shadow-2xl transition-transform transform duration-300 translate-x-0">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-stone-850" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-stone-900">Your Cart</h2>
              <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 font-bold rounded-full">
                {cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 text-stone-400 hover:text-stone-900 transition-colors"
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Items list */}
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-stone-100">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-sm text-stone-400 font-sans mb-6">Your shopping cart is currently empty.</p>
                <Button 
                  variant="primary" 
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}-${item.color.name}`} className="flex gap-4 py-4 first:pt-0">
                  {/* Item Image */}
                  <div className="h-20 w-16 bg-stone-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-semibold text-stone-900">{item.name}</h4>
                        <span className="text-xs font-semibold text-stone-850">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                      
                      {/* Selected Attributes */}
                      <div className="flex flex-wrap gap-x-3 text-[10px] text-stone-400 mt-1 uppercase tracking-wider font-semibold">
                        <span>Size: {item.size}</span>
                        <span className="flex items-center gap-1">
                          Color: 
                          <span 
                            className="inline-block h-2.5 w-2.5 rounded-full border border-stone-200" 
                            style={{ backgroundColor: item.color.code }}
                          />
                          {item.color.name}
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls & Delete */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-stone-200">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2.5 py-1 text-stone-500 hover:text-stone-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-2 text-xs font-medium text-stone-900 select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2.5 py-1 text-stone-500 hover:text-stone-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-stone-400 hover:text-stone-600 p-1 transition-colors"
                        aria-label="Delete item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotals & Actions */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-100 bg-stone-50 px-6 py-6 font-sans">
              <div className="space-y-2 mb-6 text-xs text-stone-500">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-stone-900">
                    {shippingCharge === 0 ? (
                      <span className="text-emerald-600 font-semibold tracking-wide">FREE</span>
                    ) : (
                      formatPrice(shippingCharge)
                    )}
                  </span>
                </div>
                {shippingCharge > 0 && (
                  <p className="text-[10px] text-stone-450 italic text-right">
                    Add {formatPrice(1500 - subtotal)} more for free shipping
                  </p>
                )}
                <div className="border-t border-stone-200 pt-3 flex justify-between text-sm font-semibold text-stone-900">
                  <span>Estimated Total</span>
                  <span>{formatPrice(subtotal + shippingCharge)}</span>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full justify-center"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              
              <p className="text-[10px] text-stone-400 text-center mt-3 leading-relaxed">
                Duties and taxes included. Free 7-day returns on all products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
