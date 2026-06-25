import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export const StaticPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getContent = () => {
    switch (pathname) {
      case '/shipping':
        return {
          title: 'Shipping Details',
          subtitle: 'Logistic Fulfillment',
          content: (
            <div className="space-y-6 text-xs text-stone-600 leading-relaxed font-sans max-w-2xl">
              <p>
                At VELORA Studio, every order is treated as a bespoke piece of cargo. We package our garments in custom recyclable, lightweight kraft cardboard folders, completely eliminating single-use plastics from our packaging cycle.
              </p>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mt-6">Domestic Dispatch (India)</h3>
              <p>
                All orders are processed and dispatched within 24 to 48 business hours from our central studio in Mumbai. Shipments are handled via express logistics networks and typically arrive at metropolitan destinations within 3 to 5 business days. 
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders above ₹1,500: Free Standard Shipping</li>
                <li>Orders below ₹1,500: Flat Rate of ₹150</li>
                <li>Express Air Delivery: Available at ₹250 (1-2 business days metropolitan transit)</li>
              </ul>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mt-6">Track Your Cargo</h3>
              <p>
                Upon dispatch, you will receive a confirmation email containing your direct tracking credentials and dynamic courier details.
              </p>
            </div>
          )
        };
      case '/returns':
        return {
          title: 'Return Policy',
          subtitle: 'Risk-Free Inspection',
          content: (
            <div className="space-y-6 text-xs text-stone-600 leading-relaxed font-sans max-w-2xl">
              <p>
                We build garments intended to last for years. If a piece does not match your expected structure or fit, we support returns within 7 calendar days of receipt.
              </p>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mt-6">Return Conditions</h3>
              <p>
                To qualify for a full refund or exchange:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The garment must be unworn, unwashed, and completely unaltered.</li>
                <li>Original tags and design labels must remain attached at original seams.</li>
                <li>The item must be in its original packaging folders.</li>
              </ul>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mt-6">Process a Return</h3>
              <p>
                Initiate a pickup by sending an email to <a href="mailto:hello@velorastudio.com" className="underline hover:text-stone-950">returns@velorastudio.com</a> quoting your order identifier. We will coordinate a doorstep courier retrieval within 48 hours.
              </p>
            </div>
          )
        };
      case '/privacy':
        return {
          title: 'Privacy Policy',
          subtitle: 'Security & Integrity',
          content: (
            <div className="space-y-6 text-xs text-stone-600 leading-relaxed font-sans max-w-2xl">
              <p>
                VELORA Studio respects your absolute data privacy. We strictly gather essential transaction details to execute order logistics and communicate collection status updates.
              </p>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mt-6">Gathered Metrics</h3>
              <p>
                We register your shipping address, billing info, email address, and encrypted browser identifiers during checkout. 
              </p>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mt-6">Zero Selling Policy</h3>
              <p>
                We do not sell, rent, or lease customer data lists to marketing brokers. Data sharing is limited to secure payment processors and domestic courier providers.
              </p>
            </div>
          )
        };
      default:
        return {
          title: 'Studio Policy',
          subtitle: 'VELORA Studio',
          content: <p className="text-xs text-stone-500 font-sans">Policy details not found.</p>
        };
    }
  };

  const { title, subtitle, content } = getContent();

  return (
    <div className="w-full bg-white pt-24 pb-16 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb path */}
        <div className="text-[10px] tracking-wider uppercase font-semibold text-stone-400 mb-6">
          <Link to="/" className="hover:text-stone-900">Home</Link> / <span className="text-stone-800">{title}</span>
        </div>

        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-stone-400 block mb-2">
          {subtitle}
        </span>
        <h1 className="text-3xl font-serif text-stone-900 font-normal leading-tight border-b border-stone-100 pb-6 mb-8">
          {title}
        </h1>

        {content}

        <div className="mt-12 pt-8 border-t border-stone-100">
          <Link to="/" className="text-[10px] tracking-widest uppercase font-bold text-stone-900 hover:text-stone-600">
            &larr; Return to Catalog
          </Link>
        </div>

      </div>
    </div>
  );
};
