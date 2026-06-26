import React from 'react';
import { Link } from 'react-router-dom';

// Rail of lifestyle images for the marquee strip
const RAIL = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=480&q=75',
  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=480&q=75',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=480&q=75',
  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=480&q=75',
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=480&q=75',
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=480&q=75',
];

export const Hero = () => {
  return (
    <section className="relative bg-paper">
      
      {/* ── Above-the-fold: Full-height editorial split ── */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Copy column */}
        <div className="flex flex-col justify-end pb-16 pt-36 px-6 sm:px-10 lg:px-16 lg:pt-0 lg:pb-20 lg:justify-center order-2 lg:order-1">
          
          <div className="max-w-md">
            {/* Eyebrow */}
            <p className="text-2xs tracking-superwide text-muted uppercase font-medium mb-8">
              Studio Collection — SS26
            </p>

            {/* Heading */}
            <h1 className="font-display font-light text-ink text-[52px] sm:text-[64px] lg:text-[76px] leading-[0.95] tracking-tight mb-8">
              Quiet design.<br />
              <em className="italic">Heavyweight</em><br />
              presence.
            </h1>

            {/* Sub-copy */}
            <p className="text-sm font-light text-stone-500 leading-[1.8] mb-10 max-w-sm">
              Premium fabrics, relaxed silhouettes, and a neutral palette. Clothing that speaks softly but carries weight.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/collections"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-ink text-paper text-[11px] font-medium tracking-widest uppercase hover:bg-stone-800 transition-colors duration-300"
              >
                Explore Collection
              </Link>
              <Link
                to="/new-arrivals"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-stone-300 text-ink text-[11px] font-medium tracking-widest uppercase hover:border-ink transition-colors duration-300"
              >
                New Arrivals
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-stone-200">
              {[
                { n: '36+', l: 'Pieces' },
                { n: '6', l: 'Categories' },
                { n: '450g', l: 'GSM Cotton' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="font-display text-2xl font-light text-ink">{n}</p>
                  <p className="text-2xs text-muted tracking-widest uppercase mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative overflow-hidden bg-stone-100 min-h-[55vw] lg:min-h-0 order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
            alt="VELORA editorial campaign"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Vertical text label */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
            <div className="h-16 w-px bg-stone-300/60" />
            <p className="text-[9px] tracking-superwide text-stone-400 uppercase font-medium [writing-mode:vertical-rl] [letter-spacing:0.25em]">
              Campaign 2026
            </p>
          </div>
        </div>
      </div>

      {/* ── Marquee image strip ── */}
      <div className="overflow-hidden border-t border-b border-stone-200 bg-paper py-4">
        <div className="flex gap-4 w-max marquee-track">
          {[...RAIL, ...RAIL].map((src, i) => (
            <div key={i} className="h-[88px] w-[66px] bg-stone-100 shrink-0 overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
