export function Button({ children, variant = 'dark', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-ink/30 focus:ring-offset-2 focus:ring-offset-paper active:scale-[0.98]';
  const variants = {
    dark: 'bg-ink text-white hover:bg-clay shadow-soft',
    light: 'border border-ink/15 bg-white/70 text-ink hover:border-ink hover:bg-white',
    ghost: 'text-ink hover:bg-ink/5',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
