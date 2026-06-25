import React, { useState } from 'react';

/**
 * OptimizedImage component preventing CLS (Cumulative Layout Shift)
 * and optimizing load performance with lazy loading.
 */
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  eager = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${aspectRatio} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-150 animate-pulse" />
      )}
    </div>
  );
};
