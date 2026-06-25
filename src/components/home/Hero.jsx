import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AnimatedImageRail } from './AnimatedImageRail';

export const Hero = () => {
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
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-stone-50/50 pb-16 pt-28 lg:pt-36 border-b border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl flex flex-col items-center"
        >
          {/* Collection tag */}
          <motion.span 
            variants={itemVariants}
            className="text-[9px] tracking-[0.25em] font-semibold text-stone-400 uppercase mb-4"
          >
            Studio Collection 2026
          </motion.span>
          
          {/* Main Title Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-normal tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15]"
          >
            Elevated essentials.<br />Designed for reality.
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-stone-500 font-sans"
          >
            Premium heavyweight fabrics, relaxed silhouettes, and a neutral palette. Clothing that speaks softly but carries weight.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" onClick={() => scrollToSection('collections')}>
              Explore Collections
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('new-arrivals')}>
              Shop New Drops
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS-based Infinite Image Rail */}
      <AnimatedImageRail />
    </section>
  );
};
