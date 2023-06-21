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
    },
  },
  plugins: [],
};
