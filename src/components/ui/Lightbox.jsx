import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Lightbox = ({ isOpen, imageSrc, imageAlt, onClose }) => {
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm cursor-zoom-out"
            onClick={onClose}
          />
          
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 z-[51]"
            aria-label="Close fullscreen image"
          >
            <X size={24} strokeWidth={1.5} />
          </motion.button>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
            className="relative z-50 max-w-[90vw] max-h-[90vh] md:max-w-[85vw] md:max-h-[85vh] rounded-xs overflow-hidden pointer-events-none shadow-2xl"
          >
            <img 
              src={imageSrc} 
              alt={imageAlt || 'Fullscreen view'}
              className="w-full h-full object-contain pointer-events-auto"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
