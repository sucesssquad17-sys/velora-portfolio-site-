/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        ink:   '#0F0E0C',
        paper: '#F9F7F4',
        muted: '#9A9590',
        sand:  '#E5E2DC',
        accent:'#C5A882',
      },
    },
  },
  plugins: [],
};
