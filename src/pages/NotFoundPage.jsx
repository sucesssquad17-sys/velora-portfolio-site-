import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFoundPage = () => {
  return (
    <div className="w-full bg-white pt-36 pb-24 min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-stone-400 mb-2">
        Error 404
      </span>
      <h1 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal leading-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-xs text-stone-500 font-sans leading-relaxed mb-8 max-w-sm">
        The destination you are trying to visit does not exist or has been relocated within the studio directory.
      </p>
      
      <Link to="/">
        <Button variant="primary">
          Return to Studio Home
        </Button>
      </Link>
    </div>
  );
};
