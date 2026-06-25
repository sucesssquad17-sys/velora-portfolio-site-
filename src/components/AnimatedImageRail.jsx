import { motion } from 'framer-motion';

export function AnimatedImageRail({ images }) {
  // Duplicate array for seamless infinite scroll
  const scrollItems = [...images, ...images];

  return (
    <div className="relative mt-8 flex w-full overflow-hidden py-12 md:mt-16">
      <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent sm:w-24 md:w-32" />
      <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent sm:w-24 md:w-32" />
      
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
        className="flex w-fit items-center gap-4 sm:gap-6 md:gap-8"
      >
        {scrollItems.map((image, index) => {
          // Simplify layout to two consistent sizes for a cleaner rhythm
          const isLarge = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex-shrink-0 overflow-hidden rounded-[2rem] shadow-soft ${
                isLarge
                  ? 'h-[280px] w-[200px] sm:h-[400px] sm:w-[280px] md:h-[500px] md:w-[380px]'
                  : 'h-[220px] w-[160px] sm:h-[300px] sm:w-[220px] md:h-[400px] md:w-[300px] mt-8 md:mt-12'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/5" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
