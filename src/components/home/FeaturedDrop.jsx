import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedDrop = () => {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

        {/* Image */}
        <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0 order-1">
          <img
            src="https://images.unsplash.com/photo-1523398002811-999aa8073ac9?auto=format&fit=crop&w=1200&q=85"
            alt="Featured outerwear piece"
            className="absolute inset-0 w-full h-full object-cover img-zoom"
          />
          {/* Subtle tint */}
          <div className="absolute inset-0 bg-ink/20" />
          {/* Corner label */}
          <div className="absolute top-6 left-6">
            <span className="text-[9px] tracking-superwide uppercase text-paper/70 font-medium border border-paper/30 px-3 py-1.5">
              Drop 01 — SS26
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20 order-2">
          <p className="text-2xs tracking-superwide text-paper/50 uppercase font-medium mb-6">Featured Piece</p>
          <h2 className="font-display font-light text-paper text-5xl md:text-6xl lg:text-[68px] leading-[0.95] mb-6">
            The Utility<br />
            <em className="italic">Overshirt.</em>
          </h2>
          <p className="text-sm text-paper/60 font-light leading-[1.8] mb-10 max-w-sm">
            Constructed from a dense, water-repellent Italian cotton blend with exaggerated utility pockets and a relaxed drape. Built for every environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/product/heavyweight-utility-overshirt-charcoal"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-paper text-ink text-[11px] font-medium tracking-widest uppercase hover:bg-stone-100 transition-colors duration-300"
            >
              Shop the Piece
            </Link>
            <Link
              to="/category/overshirts"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-paper/30 text-paper text-[11px] font-medium tracking-widest uppercase hover:border-paper/60 transition-colors duration-300"
            >
              View Overshirts
            </Link>
          </div>

          {/* Material callouts */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-paper/10">
            {['Italian Cotton', 'Water-Repellent', 'Structured Fit'].map(label => (
              <div key={label}>
                <p className="text-2xs text-paper/40 tracking-widest uppercase font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
