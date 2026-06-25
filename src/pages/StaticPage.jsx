import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function StaticPage({ title, children }) {
  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-8 flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl mb-12">
          {title}
        </h1>
        <div className="prose prose-lg prose-neutral max-w-none prose-headings:text-ink prose-p:text-muted prose-a:text-ink hover:prose-a:text-clay">
          {children}
        </div>
      </div>
    </main>
  );
}
