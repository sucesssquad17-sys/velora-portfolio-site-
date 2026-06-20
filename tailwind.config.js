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
      },
      boxShadow: {
        soft: '0 24px 80px rgba(40, 32, 22, 0.12)',
        product: '0 18px 48px rgba(43, 35, 26, 0.10)',
      },
    },
  },
  plugins: [],
};
