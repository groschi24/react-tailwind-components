/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./src/index.ts'],
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      flexGrow: {
        5: '5',
      },
      maxHeight: {
        'screen-menu': 'calc(100vh - 3.5rem)',
        modal: 'calc(100vh - 160px)',
      },
      transitionProperty: {
        position: 'right, left, top, bottom, margin, padding',
        textColor: 'color',
      },
      keyframes: {
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeOut: 'fadeOut 250ms ease-in-out',
        fadeIn: 'fadeIn 250ms ease-in-out',
      },
    },
  },
  plugins: [],
};
