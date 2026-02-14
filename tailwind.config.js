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
          dark: '#111111',
          card: '#1A1A1A',
          border: '#262626',
          light: '#1E1E1E',
        },
      },
      boxShadow: {
        'gold-sm': '0 2px 12px rgba(200, 169, 78, 0.15)',
        'gold': '0 4px 20px rgba(200, 169, 78, 0.25)',
        'gold-lg': '0 8px 40px rgba(200, 169, 78, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
    },
  },
  plugins: [],
};
