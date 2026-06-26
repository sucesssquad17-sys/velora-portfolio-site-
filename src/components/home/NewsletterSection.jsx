import React, { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setTimeout(() => { setDone(false); setEmail(''); }, 4000);
  };

  return (
    <section className="bg-stone-950 py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-2xs tracking-superwide text-stone-500 uppercase font-medium mb-5">Exclusive Access</p>
        <h2 className="font-display font-light text-white text-4xl md:text-5xl leading-[1.1] mb-5">
          Be first in line.
        </h2>
        <p className="text-sm text-stone-400 font-light leading-[1.8] mb-10 max-w-sm mx-auto">
          Campaign releases, limited capsule drops, and studio narratives — delivered first to you.
        </p>

        {done ? (
          <p className="text-sm text-stone-300 font-light py-4">
            ✓ You're on the list. We'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 bg-transparent border-0 border-b border-stone-700 focus:border-white text-sm text-white placeholder-stone-600 py-3 focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="shrink-0 ml-6 text-[11px] tracking-widest uppercase font-medium text-stone-400 hover:text-white transition-colors py-3"
            >
              Subscribe →
            </button>
          </form>
        )}

        <p className="text-2xs text-stone-700 mt-6">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};
