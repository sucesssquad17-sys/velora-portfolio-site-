/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#171512',
        muted: '#6f6a60',
        paper: '#f7f1e8',
        sand: '#e9ddcc',
        clay: '#8b6047',
        olive: '#5d6046',
        cream: '#FAF9F5',
        softstone: '#F3F2EE',
        darkink: '#1C1A17',
        stone: {
          150: '#eceae6',
          450: '#8c877e',
          550: '#6c675e',
          605: '#5e5950',
          850: '#22201c',
          905: '#12110e',
        },
      },
      scale: {
        103: '1.03',
      },
      spacing: {
        8.5: '2.125rem',
      },
      borderRadius: {
        xs: '2px',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(40, 32, 22, 0.12)',
        product: '0 18px 48px rgba(43, 35, 26, 0.10)',
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
