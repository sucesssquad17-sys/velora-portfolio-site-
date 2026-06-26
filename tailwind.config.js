/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        ink:   '#0F0E0C',
        muted: '#9A9590',
        paper: '#F9F7F4',
        sand:  '#E5E2DC',
        accent:'#C5A882',
        stone: {
          50:  '#FAFAF9',
          100: '#F5F4F1',
          150: '#EEECEA',
          200: '#E5E2DC',
          300: '#D0CCC5',
          400: '#B3AEA6',
          500: '#9A9590',
          600: '#7A7570',
          700: '#5E5A56',
          800: '#3D3A37',
          900: '#242220',
          950: '#0F0E0C',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
      },
      letterSpacing: {
        widest: '0.2em',
        superwide: '0.3em',
      },
      boxShadow: {
        'luxury': '0 32px 80px rgba(15, 14, 12, 0.08)',
        'card':   '0 4px 24px rgba(15, 14, 12, 0.06)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
  },
  plugins: [],
};
