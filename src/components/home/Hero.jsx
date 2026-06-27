import React from 'react';
import { Link } from 'react-router-dom';

const MARQUEE_IMGS = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=480&q=75&fit=crop',
  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=480&q=75&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=480&q=75&fit=crop',
  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=480&q=75&fit=crop',
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=480&q=75&fit=crop',
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=480&q=75&fit=crop',
];

export const Hero = () => (
  <section style={{ background: '#0F0E0C', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

    {/* Full-screen background image */}
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=85&fit=crop"
        alt="VELORA campaign"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.6 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,14,12,0.2) 0%, rgba(15,14,12,0.55) 100%)' }}/>
    </div>

    {/* Hero copy — bottom left */}
    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: 'clamp(2rem, 6vw, 5rem)', paddingTop: '9rem', maxWidth: 1280, margin: '0 auto', width: '100%' }}>

      <div style={{ maxWidth: 560 }}>
        <p className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
          Studio Collection — SS26
        </p>
        <h1 className="font-display" style={{
          fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 300, color: '#fff',
          lineHeight: 0.95, letterSpacing: '-0.01em', marginBottom: '1.5rem',
        }}>
          Quiet design.<br/>
          <em style={{ fontStyle: 'italic' }}>Heavyweight</em><br/>
          presence.
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 300,
          lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 380 }}>
          Premium fabrics, relaxed silhouettes, a neutral palette. Clothing that speaks softly but carries weight.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link to="/collections" style={{
            display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem',
            background: '#fff', color: '#0F0E0C', textDecoration: 'none',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background='#F0EEEB'}
            onMouseLeave={e => e.currentTarget.style.background='#fff'}>
            Shop Collections
          </Link>
          <Link to="/new-arrivals" style={{
            display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem',
            background: 'transparent', color: '#fff', textDecoration: 'none',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
            border: '1px solid rgba(255,255,255,0.3)',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'}>
            New Arrivals
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem',
        paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        {[['36+','Pieces'],['6','Categories'],['450g','GSM Cotton']].map(([n,l]) => (
          <div key={l}>
            <p className="font-display" style={{ fontSize: 24, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{n}</p>
            <p className="label" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.35rem' }}>{l}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Marquee strip */}
    <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(15,14,12,0.6)', backdropFilter: 'blur(4px)', padding: '0.75rem 0', flexShrink: 0 }}>
      <div className="marquee-track" style={{ gap: '0.75rem' }}>
        {[...MARQUEE_IMGS, ...MARQUEE_IMGS].map((src, i) => (
          <div key={i} style={{ width: 56, height: 72, flexShrink: 0, overflow: 'hidden', background: '#1a1a1a' }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}/>
          </div>
        ))}
      </div>
    </div>
  </section>
);
