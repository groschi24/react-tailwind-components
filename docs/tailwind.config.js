/** @type {import('tailwindcss').Config} */

const { withWS } = require('@wirecore/wirestyle');

module.exports = withWS({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#dbebfe',
          200: '#bfdcfe',
          300: '#93c7fd',
          400: '#60a8fa',
          500: '#3b85f6',
          600: '#186df8',
          700: '#1156e4',
          800: '#164bc5',
          900: '#173f91',
        },
        gray: {
          50: '#fcfcfd',
          100: '#dfe3e7',
          200: '#bdc7d0',
          300: '#96a3b0',
          400: '#737f8c',
          500: '#556477',
          600: '#414f62',
          700: '#36414e',
          800: '#22272E',
          900: '#1C2128',
        },
        red: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6969',
          500: '#f93a3a',
          600: '#e82626',
          700: '#c21313',
          800: '#a11313',
          900: '#851717',
        },
        yellow: {
          50: '#fffdf6',
          100: '#fffaec',
          200: '#fff3d1',
          300: '#ffebb5',
          400: '#ffdd7d',
          500: '#ffce45',
          600: '#e6b93e',
          700: '#bf9b34',
          800: '#997c29',
          900: '#7d6522',
        },
        green: {
          50: '#f0fdf3',
          100: '#dcfce5',
          200: '#a0f4b9',
          300: '#86efa7',
          400: '#4ade78',
          500: '#22c555',
          600: '#16a343',
          700: '#158037',
          800: '#166530',
          900: '#14532a',
        },
      },
    },
  },
  plugins: [],
});
