import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing, ${email}! We've saved your interest in VELORA.`);
    setEmail('');
  };

  return (
    <section className="bg-white py-20 md:py-28 border-b border-stone-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-stone-400 block mb-3">
          Studio Updates
        </span>
        <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif leading-tight mb-4">
          Join the Studio List
        </h2>
        <p className="text-xs text-stone-500 font-sans leading-relaxed mb-8 max-w-sm mx-auto">
          Subscribe to receive campaign releases, limited capsule drops, and studio narratives. No spam, only structure.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 border border-stone-200 rounded-none bg-stone-50 px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white transition-colors"
            required
          />
          <Button 
            type="submit" 
            variant="primary"
            className="w-full sm:w-auto"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
