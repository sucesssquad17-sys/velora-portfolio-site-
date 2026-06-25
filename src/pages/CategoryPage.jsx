import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories, products } from '../data';
import { ProductGrid } from '../components/ProductGrid';
import { SectionHeading } from '../components/ui/SectionHeading';

const FIT_OPTIONS = ['All', 'Oversized', 'Relaxed', 'Regular', 'Structured'];

export function CategoryPage({ onAddToCart }) {
  const { slug } = useParams();
  const [activeFit, setActiveFit] = useState('All');

  const category = categories.find((c) => c.slug === slug);
  
  const categoryProducts = useMemo(() => {
    let filtered = products.filter((p) => p.categorySlug === slug);
    if (activeFit !== 'All') {
      filtered = filtered.filter((p) => p.fit === activeFit);
    }
    return filtered;
  }, [slug, activeFit]);

  if (!category) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-paper pt-32 text-center">
        <h1 className="text-4xl font-bold text-ink">Category Not Found</h1>
        <Link to="/" className="mt-6 flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center text-sm font-medium text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <SectionHeading title={category.name} subtitle={category.description} />
          
          {/* Fit Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {FIT_OPTIONS.map((fit) => (
              <button
                key={fit}
                onClick={() => setActiveFit(fit)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeFit === fit
                    ? 'bg-ink text-white'
                    : 'border border-ink/10 bg-transparent text-ink hover:border-ink/30'
                }`}
              >
                {fit}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={categoryProducts} onAddToCart={onAddToCart} />
        
      </div>
    </main>
  );
}
