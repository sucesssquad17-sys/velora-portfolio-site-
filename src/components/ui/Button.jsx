import React from 'react';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center text-sm font-medium transition-all duration-300 select-none focus:outline-none';
  
  const variants = {
    primary: 'bg-stone-900 text-stone-100 hover:bg-stone-850 px-8 py-3.5 tracking-wider uppercase font-semibold text-[11px] md:text-xs',
    secondary: 'border border-stone-300 text-stone-800 hover:bg-stone-50 px-8 py-3.5 tracking-wider uppercase font-semibold text-[11px] md:text-xs',
    outline: 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-100 px-6 py-2.5 text-xs',
    link: 'text-stone-800 underline hover:text-stone-600 p-0 hover:no-underline'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
