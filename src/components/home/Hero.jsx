import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] pb-12 pt-28 sm:pt-32 sm:pb-16 lg:pt-32 lg:pb-24 border-b border-stone-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl flex flex-col items-center lg:items-start"
            >
              {/* Badge */}
              <motion.span 
                variants={itemVariants}
                className="text-[10px] tracking-[0.3em] font-bold text-stone-500 uppercase mb-6"
              >
                Studio Collection 2026
              </motion.span>
              
              {/* Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal tracking-tight text-ink font-display leading-[1.05]"
              >
                Quiet design.<br className="hidden sm:inline" /> Heavyweight presence.
              </motion.h1>
              
              {/* Paragraph */}
              <motion.p 
                variants={itemVariants}
                className="mt-8 max-w-md text-sm sm:text-base leading-relaxed text-stone-600 font-sans font-light"
              >
                Premium heavyweight fabrics, relaxed silhouettes, and a neutral palette. Clothing that speaks softly but carries weight.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
              >
                <Link to="/collections" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full">
                    Explore Collections
                  </Button>
                </Link>
                <Link to="/new-arrivals" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full">
                    Shop New Drops
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Row */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-[10px] tracking-widest uppercase font-semibold text-stone-400 font-sans"
              >
                <div className="flex items-center gap-2">
                  <span className="h-px w-3 bg-stone-300" />
                  <span>Premium Cotton</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-3 bg-stone-300" />
                  <span>Complimentary Shipping</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Premium Collage (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-7 relative h-[700px] justify-end items-center">
            {/* Primary Large Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[80%] z-10 overflow-hidden bg-stone-100">
              <img
                src={railImages[0].src}
                alt="Model styling lifestyle shot"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="absolute left-0 bottom-[10%] w-[45%] z-20 overflow-hidden bg-stone-100">
              <img
                src={railImages[1].src}
                alt="Sweater textures"
                className="w-full h-auto aspect-[3/4] object-cover"
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
