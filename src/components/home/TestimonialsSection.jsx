import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/siteContent';

export const TestimonialsSection = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-24 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-stone-400 block mb-3">
          Voice of the Studio
        </span>
        <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif leading-tight mb-12">
          Customer Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-stone-100 p-8 flex flex-col justify-between relative shadow-sm"
            >
              <Quote className="absolute right-8 top-8 text-stone-100 h-8 w-8 stroke-1" />
              
              <p className="text-xs text-stone-600 italic leading-relaxed font-sans z-10 mb-6">
                "{t.quote}"
              </p>
              
              <div className="border-t border-stone-50 pt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-900">{t.name}</h4>
                <p className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
