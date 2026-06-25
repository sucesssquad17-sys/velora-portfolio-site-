import React from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumbs = ({ paths }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-[10px] tracking-wider uppercase font-semibold text-stone-400">
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li>
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
        </li>
        
        {paths.map((path, idx) => {
          const isLast = idx === paths.length - 1;
          return (
            <React.Fragment key={idx}>
              <li className="text-[8px] text-stone-300 select-none">/</li>
              <li>
                {isLast ? (
                  <span className="text-stone-800 font-bold select-text" aria-current="page">
                    {path.name}
                  </span>
                ) : (
                  <Link to={path.url} className="hover:text-stone-900 transition-colors">
                    {path.name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
