import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { products, categories } from '../data';
import { Button } from '../components/ui/Button';
import { ProductGrid } from '../components/ProductGrid';

export function ProductPage({ onAddToCart }) {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-paper pt-32 text-center">
        <h1 className="text-4xl font-bold text-ink">Product Not Found</h1>
        <Link to="/" className="mt-6 flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </main>
    );
  }

  const category = categories.find((c) => c.slug === product.categorySlug);
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const images = product.gallery || [product.image];

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes?.length > 0) {
      alert("Please select a size");
      return;
    }
    // In a real app, we'd pass the size to the cart item too.
    onAddToCart({ ...product, selectedSize });
  };

  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-sm font-medium text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          {category && (
            <>
              <Link to={`/category/${category.slug}`} className="hover:text-ink">{category.name}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-ink">{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink/5">
              <img
                src={images[activeImageIndex]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.tag && (
                <div className="absolute left-6 top-6 rounded-full bg-paper/90 px-4 py-2 text-xs font-bold tracking-wide text-ink backdrop-blur-md">
                  {product.tag}
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/5] w-20 flex-shrink-0 overflow-hidden rounded-xl ${
                      activeImageIndex === idx ? 'ring-2 ring-ink ring-offset-2 ring-offset-paper' : ''
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col py-4">
            <h1 className="text-3xl font-bold text-ink sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-2xl font-medium text-ink/80">{product.price}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {product.description}
            </p>

            {/* Colors */}
            {product.tones && product.tones.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-bold text-ink">Color</h3>
                <div className="mt-3 flex gap-3">
                  {product.tones.map((tone, i) => (
                    <button
                      key={i}
                      className="relative h-8 w-8 rounded-full border border-ink/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
                      style={{ backgroundColor: tone }}
                      aria-label={`Select color ${tone}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-ink">Size</h3>
                  <button className="text-xs font-medium text-muted underline hover:text-ink">Size Guide</button>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-12 min-w-12 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition ${
                        selectedSize === size
                          ? 'border-ink bg-ink text-white'
                          : 'border-ink/10 bg-transparent text-ink hover:border-ink/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action */}
            <div className="mt-10 flex gap-4">
              <Button onClick={handleAddToCart} className="flex-1 py-4 text-base">
                Add to Cart
              </Button>
            </div>

            {/* Metadata */}
            <div className="mt-12 space-y-4 border-t border-ink/10 pt-8 text-sm">
              {product.fit && (
                <div className="flex justify-between border-b border-ink/5 pb-4">
                  <span className="font-semibold text-ink">Fit</span>
                  <span className="text-muted">{product.fit}</span>
                </div>
              )}
              {product.material && (
                <div className="flex justify-between border-b border-ink/5 pb-4">
                  <span className="font-semibold text-ink">Material</span>
                  <span className="text-muted">{product.material}</span>
                </div>
              )}
              <div className="flex items-center gap-2 pt-2 text-muted">
                <Check size={16} /> Free shipping and returns.
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="mb-8 text-2xl font-bold text-ink">You may also like</h2>
            <ProductGrid products={relatedProducts} onAddToCart={onAddToCart} />
          </div>
        )}
      </div>
    </main>
  );
}
