import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCw, Truck, Lock } from 'lucide-react';
import { BENEFITS } from '../data/storeData';

export const Benefits: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case '1':
        return <Sparkles className="h-6 w-6 stroke-[1.2] text-brand-text" />;
      case '2':
        return <RefreshCw className="h-6 w-6 stroke-[1.2] text-brand-text" />;
      case '3':
        return <Truck className="h-6 w-6 stroke-[1.2] text-brand-text" />;
      case '4':
        return <Lock className="h-6 w-6 stroke-[1.2] text-brand-text" />;
      default:
        return <Sparkles className="h-6 w-6 stroke-[1.2] text-brand-text" />;
    }
  };

  return (
    <section className="bg-brand-bg py-16 sm:py-20 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 border border-brand-text/5 rounded-xl bg-white shadow-sm hover:shadow-md transition-smooth"
            >
              {/* Icon Circle */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-bg mb-4 border border-brand-text/5">
                {getIcon(benefit.id)}
              </div>
              
              {/* Info */}
              <h3 className="text-sm font-semibold tracking-wider text-brand-text">
                {benefit.title}
              </h3>
              
              <p className="mt-2 text-xs text-brand-muted leading-relaxed max-w-xs">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
