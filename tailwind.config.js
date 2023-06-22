/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FAEDCD',
        secondary: '#CCD5AE',
        tertiary: '#FEFAE0',
      },
      boxShadow: {
        navShadowLeft: '4.1px -5px 0 0 white',
        navShadowRight: '-4.1px -5px 0 0 white',
      },
    },
  },
  plugins: [],
};
