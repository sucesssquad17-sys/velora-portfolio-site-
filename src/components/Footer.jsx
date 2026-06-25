import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-ink">V</span>
              <span className="text-xl font-extrabold tracking-[0.24em]">VELORA</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Premium essentials for the modern rotation. Designed with intention, crafted for comfort.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white/90">Shop</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/#new-arrivals" className="transition hover:text-white">New Arrivals</Link></li>
              <li><Link to="/#collections" className="transition hover:text-white">Collections</Link></li>
              <li><Link to="/#best-sellers" className="transition hover:text-white">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white/90">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/shipping" className="transition hover:text-white">Shipping</Link></li>
              <li><Link to="/returns" className="transition hover:text-white">Returns</Link></li>
              <li><a href="mailto:contact@velora.com" className="transition hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white/90">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition hover:text-white">Terms of Service</Link></li>
            </ul>
            <div className="mt-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-ink">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} VELORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
