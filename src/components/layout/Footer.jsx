import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 border-t border-stone-900">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-stone-900">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="block mb-5">
              <span className="text-[11px] font-semibold tracking-superwide text-white uppercase">VELORA</span>
            </Link>
            <p className="text-xs text-stone-500 leading-[1.8] max-w-[220px]">
              Refined everyday basics built from high-density organic textiles. No logos, no noise.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-2xs tracking-superwide text-stone-600 uppercase font-medium mb-5">Shop</p>
            <ul className="space-y-3">
              {[
                { label: 'New Arrivals', to: '/new-arrivals' },
                { label: 'Best Sellers', to: '/best-sellers' },
                { label: 'Collections', to: '/collections' },
                { label: 'Outerwear', to: '/category/outerwear' },
                { label: 'Accessories', to: '/category/accessories' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-stone-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-2xs tracking-superwide text-stone-600 uppercase font-medium mb-5">Info</p>
            <ul className="space-y-3">
              {[
                { label: 'About the Studio', to: '/about' },
                { label: 'Shipping & Delivery', to: '/shipping' },
                { label: 'Returns', to: '/returns' },
                { label: 'Privacy Policy', to: '/privacy' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-stone-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-2xs tracking-superwide text-stone-600 uppercase font-medium mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@velorastudio.com" className="text-xs text-stone-400 hover:text-white transition-colors">
                  hello@velorastudio.com
                </a>
              </li>
              <li className="text-xs text-stone-500">Mon–Fri · 10am–6pm IST</li>
              <li className="text-xs text-stone-500 mt-4">Made in India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8">
          <p className="text-[10px] text-stone-700">© {year} VELORA Studio. All rights reserved.</p>
          <p className="text-[10px] text-stone-800">Portfolio Concept Project</p>
        </div>
      </div>
    </footer>
  );
};
