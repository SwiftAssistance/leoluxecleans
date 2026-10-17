/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables (app/globals.css) so a section can switch
// between the ivory theme and a dark band with a single `theme-dark` class.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // "white" is the foreground ink: near-black on ivory, white on dark bands.
        white: v('fg'),
        paper: '#F5F0E6',
        ink: '#15130F',
        neutral: Object.fromEntries(
          [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((n) => [n, v(`n${n}`)])
        ),
        gold: {
          DEFAULT: v('gold'),
          light: v('gold-light'),
          dark: v('gold-dark'),
          muted: v('gold-muted'),
          bright: '#C8A94E',
        },
        surface: {
          black: v('bg'),
          dark: v('bg-alt'),
          card: v('card'),
          border: v('line'),
          light: v('bg-deep'),
        },
        whatsapp: v('whatsapp'),
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
