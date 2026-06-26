import React from 'react';
import { Link } from 'react-router-dom';

const MANIFESTO = [
  {
    n: '01',
    title: 'No Logos',
    body: 'We strip all branding from the surface of our garments. The quality speaks for itself.'
  },
  {
    n: '02',
    title: 'Premium Fibres',
    body: 'We source heavyweight organic cotton, merino wool blends, and dense gabardines — constructed to outlast trends.'
  },
  {
    n: '03',
    title: 'Quiet Silhouettes',
    body: 'Relaxed, considered cuts that work across contexts. Not built for one occasion — built for your entire week.'
  },
  {
    n: '04',
    title: 'Slow Production',
    body: 'We produce in small batches, avoiding overstock waste and ensuring consistent quality control.'
  },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-paper pt-[72px]">
      
      {/* Full-bleed hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden bg-stone-200">
        <img
          src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1600&q=85"
          alt="VELORA studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 pb-16">
          <p className="text-2xs tracking-superwide text-paper/60 uppercase font-medium mb-4">Since 2024</p>
          <h1 className="font-display font-light text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            About VELORA
          </h1>
        </div>
      </div>

      {/* Mission split */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 px-6 lg:px-10 py-20 lg:py-28">
        <div>
          <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-6">Our Philosophy</p>
          <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-[1.05] mb-8">
            Designed for<br />permanence.
          </h2>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-medium text-ink link-underline"
          >
            Explore the Collections →
          </Link>
        </div>
        <div className="space-y-6 text-sm text-stone-500 font-light leading-[1.9]">
          <p>
            VELORA was born from a desire to strip away the excess. We believe true luxury lies not in conspicuous consumption, but in the quiet confidence of well-made, thoughtfully designed essentials.
          </p>
          <p>
            Our collections are not dictated by fleeting trends. Instead, we focus on creating a modular wardrobe of enduring silhouettes — garments that integrate seamlessly into your daily life and improve with age.
          </p>
          <p>
            Every piece is an exercise in restraint, designed to offer maximum versatility and uncompromised comfort. Welcome to the new standard of the modern uniform.
          </p>
        </div>
      </div>

      {/* Manifesto grid */}
      <div className="border-t border-stone-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-12">The Manifesto</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {MANIFESTO.map(({ n, title, body }) => (
              <div key={n} className="border-t-2 border-stone-200 pt-6">
                <p className="text-2xs text-muted font-medium mb-4">{n}</p>
                <h3 className="font-display font-light text-ink text-xl mb-3">{title}</h3>
                <p className="text-xs text-stone-500 font-light leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual closing */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="aspect-video bg-stone-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=80"
            alt="VELORA garment detail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
