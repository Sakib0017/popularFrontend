/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Ubuntu everywhere — serif alias also points here so legacy
      // `font-serif` classes render Ubuntu too.
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Minimal light medical brand — soft sage-teal, used sparingly
        // on white / slate-50 canvas. No dark navy solids.
        brand: {
          50: '#F4F8F7',
          100: '#EAF4F1',
          200: '#D6EBE6',
          300: '#C7E5DE',
          500: '#2AA896',
          600: '#0F766E',
          700: '#115E59',
        },
      },
    },
  },
  plugins: [],
};
