import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-brand-bg py-16 sm:py-24 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-brand-text/5 bg-white px-6 py-12 shadow-sm sm:px-12 sm:py-16 md:px-20 text-center max-w-4xl mx-auto">
          
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Join The Club</span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">
              Get first access.
            </h2>
            <p className="mt-3 text-xs text-brand-muted tracking-wide leading-relaxed">
              New drops, early offers, and styling notes. Pre-sale notifications delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <div className="relative flex-grow max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  disabled={status === 'success' || status === 'loading'}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-brand-text/10 bg-brand-bg px-4 py-3.5 text-xs font-medium uppercase tracking-wider text-brand-text outline-none transition-smooth focus:border-brand-text disabled:opacity-50"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'success' || status === 'loading'}
                className="flex items-center justify-center bg-brand-text px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-bg transition-smooth hover:bg-brand-text/90 disabled:bg-brand-text/40 w-full sm:w-auto"
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center space-x-1"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.span>
                  )}
                  {status === 'loading' && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-4 w-4 animate-spin rounded-full border-2 border-brand-bg border-t-transparent"
                    />
                  )}
                  {status === 'success' && (
                    <motion.span
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center space-x-1"
                    >
                      <Check className="h-4 w-4" />
                      <span>Thank you</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-xs font-semibold text-brand-accent uppercase tracking-wider"
              >
                Welcome to Velora. Please check your inbox.
              </motion.p>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
