import React from 'react';

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-stone-400 block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif leading-tight">
        {title}
      </h2>
    </div>
  );
};
