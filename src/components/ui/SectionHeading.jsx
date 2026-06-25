import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function SectionHeading({ title, subtitle }) {
  return (
    <motion.div variants={fadeUp} className="mb-12 flex flex-col items-start gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-sm font-medium text-muted max-w-sm">{subtitle}</p>}
    </motion.div>
  );
}
