import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleAboutClick = (e) => {
    // If on homepage, smooth scroll to about section
    const el = document.getElementById('about');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Information */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-[11px] font-bold text-stone-950 transition-transform group-hover:rotate-12 duration-300">
              V
            </span>
            <span className="text-[15px] font-bold tracking-[0.25em] text-white">
              VELORA
            </span>
          </Link>
          <p className="text-[11px] text-stone-400 leading-relaxed font-sans mt-2 max-w-xs">
            Refined daily basics built from high-density organic textiles. Stripped of branding, focused purely on cut, comfort, and structure.
          </p>
        </div>

        {/* Navigation links */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-100 mb-4">Shop</h4>
          <ul className="space-y-2 text-xs font-sans text-stone-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Catalog</Link>
            </li>
            <li>
              <a href="#about" onClick={handleAboutClick} className="hover:text-white transition-colors">About the Studio</a>
            </li>
            <li>
              <a href="mailto:hello@velorastudio.com" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Policies links */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-100 mb-4">Policies</h4>
          <ul className="space-y-2 text-xs font-sans text-stone-400">
            <li>
              <Link to="/shipping" className="hover:text-white transition-colors">Shipping Details</Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-white transition-colors">Return Policy</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter promo */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-100 mb-4">Contact Info</h4>
          <ul className="space-y-2 text-xs font-sans text-stone-400">
            <li>Email: <a href="mailto:hello@velorastudio.com" className="underline hover:text-white transition-colors">hello@velorastudio.com</a></li>
            <li>Hours: Mon–Fri, 10am–6pm IST</li>
            <li className="text-[10px] text-stone-500 mt-4">Made in India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-stone-500 font-sans">
          &copy; {currentYear} VELORA Studio. All rights reserved.
        </p>
        <p className="text-[10px] text-stone-600 font-sans">
          Premium Portfolio Project
        </p>
      </div>
    </footer>
  );
};
