import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function ProductGrid({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted">No products found in this category.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </motion.div>
  );
}
