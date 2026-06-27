import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedDrop = () => (
  <section style={{ background: '#0F0E0C' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}
      className="block" id="featured-grid">
      
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: '#1a1a1a', minHeight: 480 }} className="img-hover">
        <img
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=85&fit=crop"
          alt="Featured overshirt"
          className="img-inner"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
        />
        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem',
          border: '1px solid rgba(255,255,255,0.2)', padding: '8px 14px' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.6)' }}>Drop 01 — SS26</span>
        </div>
      </div>

      {/* Copy */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(2.5rem, 5vw, 5rem)' }}>
        <p className="label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>Featured Piece</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300,
          color: '#fff', lineHeight: 0.95, marginBottom: '1.5rem' }}>
          The Utility<br/><em style={{ fontStyle: 'italic' }}>Overshirt.</em>
        </h2>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 300,
          lineHeight: 1.85, marginBottom: '2.5rem', maxWidth: 360 }}>
          Constructed from a dense, water-repellent Italian cotton blend with exaggerated utility pockets and a relaxed drape. Built for every environment.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
          <Link to="/category/overshirts"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem',
              background: '#F9F7F4', color: '#0F0E0C', textDecoration: 'none',
              fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Shop Overshirts
          </Link>
          <Link to="/collections"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem',
              background: 'transparent', color: '#fff', textDecoration: 'none',
              fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.25)' }}>
            View All
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {['Italian Cotton', 'Water-Repellent', 'Structured Fit'].map(l => (
            <p key={l} className="label" style={{ color: 'rgba(255,255,255,0.3)' }}>{l}</p>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        #featured-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);
