import React from 'react';
import beigeHoodie from '../assets/beige_hoodie.png';
import blackJacket from '../assets/black_jacket.png';
import foldedTshirts from '../assets/folded_tshirts.png';
import woolOvershirt from '../assets/wool_overshirt.png';
import blackTrousers from '../assets/black_trousers.png';
import creamSweatshirt from '../assets/cream_sweatshirt.png';
import oversizedCoat from '../assets/oversized_coat.png';
import accessoriesFlatlay from '../assets/accessories_flatlay.png';

interface RailImage {
  src: string;
  alt: string;
  aspect: string;
  width: string;
}

export const AnimatedImageRail: React.FC = () => {
  const RAIL_IMAGES: RailImage[] = [
    { src: beigeHoodie, alt: 'Oversized beige hoodie model', aspect: 'aspect-[3/4]', width: 'w-48 sm:w-64' },
    { src: blackJacket, alt: 'Urban streetwear black jacket', aspect: 'aspect-[4/5]', width: 'w-44 sm:w-56' },
    { src: foldedTshirts, alt: 'Neutral cotton folded t-shirts', aspect: 'aspect-square', width: 'w-40 sm:w-48' },
    { src: woolOvershirt, alt: 'Brown wool overshirt model', aspect: 'aspect-[3/4]', width: 'w-48 sm:w-64' },
    { src: blackTrousers, alt: 'Wide-leg trousers and sneakers', aspect: 'aspect-[4/5]', width: 'w-44 sm:w-56' },
    { src: creamSweatshirt, alt: 'Cream sweatshirt on hanger', aspect: 'aspect-square', width: 'w-40 sm:w-48' },
    { src: oversizedCoat, alt: 'Oversized coat street look', aspect: 'aspect-[3/4]', width: 'w-48 sm:w-64' },
    { src: accessoriesFlatlay, alt: 'Flat lay of streetwear accessories', aspect: 'aspect-[4/5]', width: 'w-44 sm:w-56' },
  ];

  // Duplicate items to ensure smooth loop transition
  const doubledImages = [...RAIL_IMAGES, ...RAIL_IMAGES];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Muted background gradients to fade out edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-bg to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-bg to-transparent sm:w-32" />

      {/* Marquee Animation Wrap */}
      <div className="marquee-container">
        <div className="marquee-content py-2">
          {doubledImages.map((img, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 overflow-hidden rounded-xl border border-brand-text/5 bg-white shadow-md transition-smooth hover:-translate-y-1 hover:shadow-lg ${img.width} ${img.aspect}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-all duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
