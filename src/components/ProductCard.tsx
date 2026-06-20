import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../data/storeData';
import { Check, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: { id: string; name: string; price: number; image: string; color: string; size: string }) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);


  const sizes = ['S', 'M', 'L', 'XL'];

  const handleQuickAdd = () => {
    setIsSizeSelectorOpen(true);
  };

  const selectSizeAndAdd = (size: string) => {
    setIsSizeSelectorOpen(false);
    
    // Find color name/hex
    const colorHex = selectedColor;
    const colorLabel = colorHex === '#121212' ? 'Charcoal' : colorHex === '#FAF9F6' ? 'Ivory' : colorHex === '#E6DFD3' ? 'Beige' : colorHex === '#5C4033' ? 'Brown' : 'Muted';

    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: colorLabel,
      size: size
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col bg-transparent">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-brand-text/5 bg-white shadow-sm transition-smooth hover:shadow-md">
        
        {/* Badges */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.isBestSeller && (
            <span className="inline-flex rounded-full bg-brand-text px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-bg">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-accent">
              New In
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Quick Add / Size Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/35 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
          
          <AnimatePresence mode="wait">
            {!isSizeSelectorOpen ? (
              <motion.button
                key="quick-add-btn"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 15, opacity: 0 }}
                onClick={handleQuickAdd}
                className="flex w-full items-center justify-center bg-brand-bg py-2.5 text-xs font-bold uppercase tracking-widest text-brand-text transition-smooth hover:bg-brand-text hover:text-brand-bg shadow-lg"
              >
                {isAdded ? (
                  <span className="flex items-center space-x-1">
                    <Check className="h-3.5 w-3.5" />
                    <span>Added</span>
                  </span>
                ) : (
                  <span>Quick Add</span>
                )}
              </motion.button>
            ) : (
              <motion.div
                key="size-selector"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 15, opacity: 0 }}
                className="w-full bg-brand-bg p-3 shadow-lg rounded"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50">Select Size</span>
                  <button 
                    onClick={() => setIsSizeSelectorOpen(false)}
                    className="text-[10px] uppercase font-bold text-brand-text hover:text-brand-accent"
                  >
                    Cancel
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => selectSizeAndAdd(size)}
                      className="border border-brand-text/10 py-1.5 text-xs font-semibold text-brand-text hover:bg-brand-text hover:text-brand-bg hover:border-brand-text transition-smooth"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile quick-add trigger button overlay */}
        <div className="absolute right-3 bottom-3 z-20 sm:hidden">
          <button
            onClick={() => {
              if (isSizeSelectorOpen) {
                setIsSizeSelectorOpen(false);
              } else {
                setIsSizeSelectorOpen(true);
              }
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-bg text-brand-text shadow-lg border border-brand-text/5"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Size selector drawer inside card */}
        <AnimatePresence>
          {isSizeSelectorOpen && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="absolute inset-x-0 bottom-0 z-30 bg-brand-bg p-4 border-t border-brand-text/5 sm:hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/60">Choose size</span>
                <button
                  onClick={() => setIsSizeSelectorOpen(false)}
                  className="text-xs font-bold uppercase text-brand-text/60"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => selectSizeAndAdd(size)}
                    className="border border-brand-text/10 py-2.5 text-xs font-semibold text-brand-text rounded"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Info details */}
      <div className="mt-4 flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold tracking-wide text-brand-text line-clamp-1">
            {product.name}
          </h3>
          <span className="text-sm font-bold text-brand-text ml-2">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>

        <p className="mt-1 text-xs text-brand-muted line-clamp-1">
          {product.description}
        </p>

        {/* Color picker row */}
        <div className="mt-3 flex items-center space-x-1.5">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`relative flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                selectedColor === color ? 'border-brand-text' : 'border-transparent'
              }`}
              style={{ padding: '2px' }}
              aria-label={`Select color ${color}`}
            >
              <span
                className="h-full w-full rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
