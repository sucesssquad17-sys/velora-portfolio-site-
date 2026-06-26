import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AnimatedImageRail } from './AnimatedImageRail';
import { OptimizedImage } from '../ui/OptimizedImage';
import { railImages } from '../../data/siteContent';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-cream pb-12 pt-28 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 border-b border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl flex flex-col items-center lg:items-start"
            >
              {/* Badge */}
              <motion.span 
                variants={itemVariants}
                className="text-[10px] tracking-[0.3em] font-bold text-stone-400 uppercase mb-4"
              >
                Studio Collection 2026
              </motion.span>
              
              {/* Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-stone-900 font-serif leading-[1.1]"
              >
                Quiet design.<br className="hidden sm:inline" /> Heavyweight presence.
              </motion.h1>
              
              {/* Paragraph */}
              <motion.p 
                variants={itemVariants}
                className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-stone-500 font-sans font-light"
              >
                Premium heavyweight fabrics, relaxed silhouettes, and a neutral palette. Clothing that speaks softly but carries weight.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
              >
                <Button variant="primary" onClick={() => scrollToSection('collections')} className="w-full sm:w-auto">
                  Explore Collections
                </Button>
                <Button variant="secondary" onClick={() => scrollToSection('new-arrivals')} className="w-full sm:w-auto">
                  Shop New Drops
                </Button>
              </motion.div>

              {/* Trust Row */}
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-[10px] tracking-widest uppercase font-semibold text-stone-400 font-sans"
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Premium Long-Staple Cotton</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Complimentary Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Easy 7-day Returns</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Premium Collage (Desktop Only) */}
          <div className="hidden lg:grid lg:col-span-6 grid-cols-12 gap-4 relative pl-8">
            {/* Primary Large Image */}
            <div className="col-span-8 relative z-10">
              <OptimizedImage
                src={railImages[0].src}
                alt="Model styling lifestyle shot"
                aspectRatio="aspect-[3/4]"
                className="w-full shadow-soft rounded-xs border border-stone-200/30"
              />
            </div>
            
            {/* Secondary Overlapping Stacked Image 1 */}
            <div className="col-span-4 self-end mb-[15%] relative z-20 -ml-10">
              <OptimizedImage
                src={railImages[1].src}
                alt="Sweater textures"
                aspectRatio="aspect-[4/5]"
                className="w-full shadow-product border border-white rounded-xs"
              />
            </div>

            {/* Tertiary Stacked Image 2 */}
            <div className="absolute right-[12%] top-[5%] w-[28%] shadow-soft border border-white rounded-xs bg-stone-50 overflow-hidden z-20">
              <OptimizedImage
                src={railImages[2].src}
                alt="Fabric detail"
                aspectRatio="aspect-[1/1]"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Banner */}
      <AnimatedImageRail />
    </section>
  );
};
