import React from 'react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { editorial } from '../../data/siteContent';

export const EditorialSection = () => {
  return (
    <section id="about" className="bg-darkink text-stone-100 py-20 md:py-28 border-b border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Narrative Text */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-stone-400 block mb-3">
              {editorial.subheading}
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-white font-serif leading-tight mb-6">
              {editorial.heading}
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-sans mb-8">
              {editorial.paragraph}
            </p>
            
            <div className="border-t border-stone-800 pt-6">
              <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold text-stone-200">
                <div>
                  <span className="block text-stone-500 mb-1">Origin</span>
                  <span>Made in India</span>
                </div>
                <div>
                  <span className="block text-stone-500 mb-1">Philosophy</span>
                  <span>Neutrals Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetric Image Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            {/* Primary taller portrait image */}
            <div className="col-span-8 relative">
              <OptimizedImage
                src={editorial.primaryImage}
                alt="Model styling lifestyle shot"
                aspectRatio="aspect-[3/4]"
                className="w-full shadow-md rounded-xs border border-stone-900/50"
              />
            </div>
            
            {/* Secondary offset overlay image */}
            <div className="col-span-4 self-end mb-[15%]">
              <OptimizedImage
                src={editorial.secondaryImage}
                alt="Fabric and textures details"
                aspectRatio="aspect-[4/5]"
                className="w-full shadow-lg border border-stone-900 rounded-xs"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
