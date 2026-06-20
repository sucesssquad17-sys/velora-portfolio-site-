import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'New Arrivals', href: '#new-arrivals' },
      { label: 'Best Sellers', href: '#new-arrivals' },
      { label: 'The Neutral Edit', href: '#collections' },
      { label: 'Essentials List', href: '#new-arrivals' }
    ],
    customerCare: [
      { label: 'Shipping & Delivery', href: '#' },
      { label: 'Returns & Exchanges', href: '#' },
      { label: 'Secure Payment Support', href: '#' },
      { label: 'Store Locations', href: '#' }
    ],
    company: [
      { label: 'Our Story', href: '#' },
      { label: 'Sustainability & Fabrics', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' }
    ]
  };

  return (
    <footer id="about" className="bg-brand-bg pt-16 pb-8 border-t border-brand-text/10 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-brand-text/5 pb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-[0.25em] text-brand-text">VELORA</span>
            <p className="mt-4 text-xs tracking-wide leading-relaxed text-brand-muted max-w-xs">
              Everyday luxury streetwear. Crafted with premium yarn blends, minimal accents, and comfortable silhouettes meant for repeat rotation.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-text transition-smooth">
                Instagram
              </a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-text transition-smooth">
                X / Twitter
              </a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-text transition-smooth">
                Pinterest
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-text">Shop</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-brand-muted hover:text-brand-text transition-smooth tracking-wide">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-text">Customer Care</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-brand-muted hover:text-brand-text transition-smooth tracking-wide">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-text">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-brand-muted hover:text-brand-text transition-smooth tracking-wide">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-muted tracking-widest uppercase">
          <p>© {currentYear} VELORA Online Store. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed in Bengaluru, India.</p>
        </div>

      </div>
    </footer>
  );
};
