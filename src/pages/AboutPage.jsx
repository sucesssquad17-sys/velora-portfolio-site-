import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="w-full bg-[#FAF9F5] pt-24 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Velora" 
          subtitle="Our Philosophy"
          layout="split"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-xl">
            <h3 className="text-2xl font-display text-ink mb-6">Designed for permanence.</h3>
            <div className="space-y-6 text-stone-600 font-sans leading-relaxed text-sm">
              <p>
                Velora was born from a desire to strip away the excess. We believe that true luxury lies not in conspicuous consumption, but in the quiet confidence of well-made, thoughtfully designed essentials.
              </p>
              <p>
                Our collections are not dictated by fleeting trends. Instead, we focus on creating a modular wardrobe of enduring silhouettes—garments that integrate seamlessly into your daily life and improve with age. We source premium, tactile fabrics and insist on rigorous construction standards.
              </p>
              <p>
                Every piece is an exercise in restraint, designed to offer maximum versatility and uncompromised comfort. Welcome to the new standard of modern uniform.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/collections" className="inline-flex items-center text-sm font-medium text-ink hover:text-stone-500 transition-colors">
                Explore the collections &rarr;
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" 
                alt="Brand philosophy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
