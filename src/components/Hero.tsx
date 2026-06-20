import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedImageRail } from './AnimatedImageRail';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const }
    }
  };

  return (
    <section className="relative overflow-hidden bg-brand-bg pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Text and Copy Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* New Drop Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center rounded-full border border-brand-text/10 bg-brand-text/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-text">
              New Drop — SS26
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans text-4xl font-semibold tracking-tight text-brand-text sm:text-5xl md:text-6xl md:leading-[1.1] text-balance"
          >
            Built for slow mornings, late nights, and everything between.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-relaxed text-brand-muted sm:text-lg tracking-wide max-w-2xl text-balance"
          >
            Premium everyday pieces designed with clean silhouettes, soft textures, and effortless comfort.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#new-arrivals"
              className="inline-flex items-center justify-center bg-brand-text px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-bg transition-smooth hover:bg-brand-text/90 focus:outline-none focus:ring-2 focus:ring-brand-text focus:ring-offset-2"
            >
              Shop New Arrivals
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center border border-brand-text/25 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-text transition-smooth hover:bg-brand-text/5 focus:outline-none focus:ring-2 focus:ring-brand-text focus:ring-offset-2"
            >
              View Collection
            </a>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 gap-y-4 py-4 px-6 border-y border-brand-text/5 w-full sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0 text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-xs font-medium tracking-wide text-brand-text/80">
              <Truck className="h-4 w-4 stroke-[1.5] text-brand-accent" />
              <span>Free shipping over ₹2,999</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-xs font-medium tracking-wide text-brand-text/80 border-t border-brand-text/5 pt-4 sm:pt-0 sm:border-t-0 sm:border-x sm:border-brand-text/5">
              <RotateCcw className="h-4 w-4 stroke-[1.5] text-brand-accent" />
              <span>Easy 7-day returns</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-xs font-medium tracking-wide text-brand-text/80 border-t border-brand-text/5 pt-4 sm:pt-0 sm:border-t-0">
              <ShieldCheck className="h-4 w-4 stroke-[1.5] text-brand-accent" />
              <span>Premium cotton blends</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Infinite Image Rail */}
        <div className="mt-12 sm:mt-16">
          <AnimatedImageRail />
        </div>
      </div>
    </section>
  );
};
