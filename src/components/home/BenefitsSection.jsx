import React from 'react';
import { ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { benefits } from '../../data/siteContent';

const icons = [ShieldCheck, RotateCcw, Truck, CreditCard];

export const BenefitsSection = () => {
  return (
    <section className="bg-cream py-16 md:py-20 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div key={idx} className="flex flex-col items-start text-left">
                <div className="h-10 w-10 flex items-center justify-center bg-white rounded-xs border border-stone-100 text-stone-800 mb-4">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-stone-450 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
