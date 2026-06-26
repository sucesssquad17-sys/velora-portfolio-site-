import React, { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing, ${email}! We've saved your interest in VELORA.`);
    setEmail('');
  };

  return (
    <section className="bg-stone-900 text-stone-100 py-32 border-b border-stone-800">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-500 block mb-6">
          The Waitlist
        </span>
        <h2 className="text-3xl md:text-5xl font-normal text-white font-display leading-[1.1] mb-6">
          Exclusive Access.
        </h2>
        <p className="text-sm text-stone-400 font-sans leading-relaxed mb-12 max-w-sm mx-auto">
          Subscribe to receive early access to campaign releases, limited capsule drops, and studio narratives.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto items-end gap-6 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 border-0 border-b border-stone-700 bg-transparent px-2 py-3 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-white transition-colors w-full"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-white transition-colors whitespace-nowrap"
          >
            Submit &rarr;
          </button>
        </form>
      </div>
    </section>
  );
};
