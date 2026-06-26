import React from 'react';
import { railImages } from '../../data/siteContent';

export const AnimatedImageRail = () => {
  // Duplicate the list of images to make the infinite marquee seamless
  const extendedImages = [...railImages, ...railImages];

  return (
    <div className="w-full overflow-hidden border-y border-stone-100 py-4 sm:py-6 bg-white relative">
      <style>{`
        @keyframes railMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .rail-track {
          display: flex;
          width: max-content;
          animation: railMarquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .rail-track {
            animation: none;
            overflow-x: auto;
            width: auto;
            transform: none;
          }
        }
      `}</style>
      
      <div className="rail-track gap-4 md:gap-6 px-4">
        {extendedImages.map((image, index) => (
          <div 
            key={index}
            className="w-32 h-40 sm:w-44 sm:h-56 md:w-52 md:h-64 flex-shrink-0 bg-stone-50 overflow-hidden rounded-xs border border-stone-100"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
