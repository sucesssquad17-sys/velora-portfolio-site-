import React, { useState } from 'react';
import { railImages } from '../../data/siteContent';
import { Lightbox } from '../ui/Lightbox';

export const AnimatedImageRail = () => {
  // Duplicate the list of images to make the infinite marquee seamless
  const extendedImages = [...railImages, ...railImages];
  const [selectedImage, setSelectedImage] = useState(null);

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
        .rail-track.paused {
          animation-play-state: paused;
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
      
      <div className={`rail-track gap-4 md:gap-6 px-4 ${selectedImage ? 'paused' : ''}`}>
        {extendedImages.map((image, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(image)}
            className="w-32 h-40 sm:w-44 sm:h-56 md:w-52 md:h-64 flex-shrink-0 bg-stone-50 overflow-hidden rounded-xs border border-stone-100 cursor-zoom-in group focus:outline-none focus:ring-2 focus:ring-stone-400"
            aria-label={`View ${image.alt} in fullscreen`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox 
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src}
        imageAlt={selectedImage?.alt}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
