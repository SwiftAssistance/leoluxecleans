/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C8A94E',
          light: '#E8D48B',
          dark: '#A68B3C',
          muted: '#B89B45',
        },
        surface: {
          black: '#0B0B0B',
          dark: '#131313',
          card: '#1A1A1A',
          border: '#262626',
        },
      },
    },
  },
  plugins: [],
};
