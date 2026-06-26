import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const subtotal      = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const freeThreshold = 3000;
  const shipping      = subtotal >= freeThreshold ? 0 : 150;
  const total         = subtotal + shipping;
  const itemCount     = cartItems.reduce((a, i) => a + i.quantity, 0);

  const checkout = () => alert('Portfolio demo: Checkout would open here in production.');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute right-0 inset-y-0 w-full max-w-[420px] bg-paper flex flex-col shadow-luxury">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-widest uppercase font-semibold text-ink">Your Bag</span>
            {itemCount > 0 && (
              <span className="text-[9px] font-semibold text-muted bg-stone-100 rounded-full px-2 py-0.5">
                {itemCount}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-muted hover:text-ink transition-colors p-1">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <p className="text-sm text-muted font-light mb-8">Your bag is empty.</p>
              <button
                onClick={onClose}
                className="text-[11px] tracking-widest uppercase font-medium text-ink link-underline"
              >
                Continue Shopping →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-stone-100 px-6">
              {cartItems.map(item => {
                const key = `${item.id}-${item.size}-${item.color?.name || ''}`;
                return (
                  <div key={key} className="flex gap-4 py-5">
                    {/* Thumb */}
                    <Link to={`/product/${item.slug}`} onClick={onClose} className="shrink-0 h-20 w-14 bg-stone-100 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 flex flex-col gap-2 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link to={`/product/${item.slug}`} onClick={onClose}>
                          <h4 className="text-xs font-medium text-ink leading-snug hover:underline">{item.name}</h4>
                        </Link>
                        <span className="text-xs font-medium text-ink shrink-0">{formatPrice(item.price * item.quantity)}</span>
                      </div>

                      <p className="text-[10px] tracking-wide text-muted uppercase font-medium">
                        {item.size} · {item.color?.name}
                      </p>

                      {/* Quantity + Delete */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-stone-200">
                          <button
                            onClick={() => onUpdateQuantity(key, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="w-6 text-center text-xs font-medium text-ink select-none">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(key, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(key)}
                          className="text-muted hover:text-ink transition-colors p-1"
                        >
                          <Trash2 size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-stone-200 px-6 py-6 bg-paper">
            {/* Shipping progress */}
            {shipping > 0 && (
              <div className="mb-4">
                <div className="flex justify-between text-[10px] text-muted mb-1.5">
                  <span>Add {formatPrice(freeThreshold - subtotal)} for free shipping</span>
                </div>
                <div className="h-px bg-stone-200 w-full">
                  <div
                    className="h-px bg-ink transition-all duration-500"
                    style={{ width: `${Math.min((subtotal / freeThreshold) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Totals */}
            <div className="space-y-2 text-xs mb-5">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span className="text-ink font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-600 font-medium' : 'text-ink font-medium'}>
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-stone-200">
                <span className="text-sm font-medium text-ink">Total</span>
                <span className="text-sm font-semibold text-ink">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              onClick={checkout}
              className="w-full bg-ink text-paper text-[11px] tracking-widest uppercase font-semibold py-4 hover:bg-stone-800 transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
            <p className="text-[10px] text-muted text-center mt-3">Free returns · 14-day policy</p>
          </div>
        )}
      </div>
    </div>
  );
};
