import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div variants={fadeUp} className="group relative">
      <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink/5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <div className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-bold tracking-wide text-ink backdrop-blur-md">
            {product.tag}
          </div>
        )}
      </Link>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="font-semibold text-ink">{product.name}</h3>
          </Link>
          <p className="mt-1 text-sm text-muted">{product.price}</p>
          {product.tones && (
            <div className="mt-3 flex gap-1.5">
              {product.tones.map((tone, i) => (
                <div key={i} className="h-3 w-3 rounded-full border border-ink/10 shadow-sm" style={{ backgroundColor: tone }} />
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink shadow-sm ring-1 ring-ink/10 transition hover:bg-ink hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={18} />
        </button>
      </div>
    </motion.div>
  );
}
