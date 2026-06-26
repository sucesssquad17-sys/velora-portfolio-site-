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
    primary: 'bg-ink text-white hover:bg-darkink px-8 py-3.5 text-sm',
    secondary: 'border border-stone-300 text-ink hover:bg-stone-50 px-8 py-3.5 text-sm',
    outline: 'border border-ink text-ink hover:bg-ink hover:text-white px-6 py-2.5 text-sm',
    white: 'bg-white text-ink hover:bg-stone-50 px-8 py-3.5 text-sm border border-transparent shadow-xs',
    link: 'text-ink underline hover:text-stone-500 p-0 hover:no-underline text-sm'
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
