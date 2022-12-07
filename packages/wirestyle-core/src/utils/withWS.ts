import merge from 'deepmerge';

const wirestyleTailwindConfig = {
  content: ['./node_modules/@wirecore/**/*.{js,ts,jsx,tsx}'],
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

export function withWS(tailwindConfig: any) {
  //const themeFont = wirestyleTailwindConfig.theme.fontFamily;

  /*if (tailwindConfig.theme.fontFamily) {
      const { sans, serif, body } = tailwindConfig.theme.fontFamily;
  
      themeFont.sans = sans || themeFont.sans;
      themeFont.serif = serif || themeFont.serif;
      themeFont.body = body || themeFont.body;
    }*/

  return merge(wirestyleTailwindConfig, { ...tailwindConfig });
}
