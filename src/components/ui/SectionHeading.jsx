import React from 'react';
import { Link } from 'react-router-dom';

export const SectionHeading = ({
  title,
  subtitle,
  layout = 'default', // 'default' | 'split' | 'inline'
  centered = false,
  link = null, // { text: string, to: string }
  className = ''
}) => {
  const isSplit = layout === 'split';
  const isInline = layout === 'inline';

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${isSplit || isInline ? 'flex flex-col md:flex-row md:items-end justify-between gap-6' : ''} ${className}`}>
      <div className={`${isSplit ? 'md:w-1/2' : ''}`}>
        {subtitle && (
          <span className="text-sm font-medium text-stone-500 block mb-2 font-sans tracking-wide">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-display text-ink leading-[1.1]">
          {title}
        </h2>
      </div>
      
      {isSplit && typeof subtitle === 'string' && (
        <div className="md:w-1/3 text-stone-600 text-sm md:text-base leading-relaxed font-sans">
          {/* If layout is split, we might want to pass a 'description' instead of just subtitle, but for now we'll allow passing it as subtitle or children. For simplicity, let's keep it clean. */}
        </div>
      )}

      {link && (
        <div className={`${isSplit || isInline ? 'mb-1' : 'mt-6'}`}>
          <Link 
            to={link.to} 
            className="group inline-flex items-center text-sm font-medium text-ink transition-colors hover:text-stone-500"
          >
            {link.text}
            <span className="ml-2 block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
