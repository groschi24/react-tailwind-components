import { NextPage } from 'next';
import { Typographie } from '@wirecore/wirestyle';
import { Prism } from '@wirecore/wirestyle-prism';
import { BiLinkExternal } from 'react-icons/bi';

const Customization: NextPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Typographie size='4xl' weight='black'>
        Customization
      </Typographie>
      <div>
        <a
          className='text-blue-500 inline-flex gap-2 items-center mr-4'
          href='https://tailwindcss.com/docs/customizing-colors'
        >
          <BiLinkExternal size={18} /> Tailwind Documentation
        </a>
      </div>

      <Typographie size='sm'>
        Extend the tailwind config with your values
      </Typographie>
      <div className='rounded overflow-hidden' data-color-mode='dark'>
        <Prism language='javascript'>{tailwindConfigExample}</Prism>
      </div>
    </div>
  );
};

const tailwindConfigExample = `
/** @type {import('tailwindcss').Config} */

const { withWS } = require('wirestyle');

module.exports = withWS({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
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
      },
    },
  },
  plugins: [],
});
`;

export default Customization;
