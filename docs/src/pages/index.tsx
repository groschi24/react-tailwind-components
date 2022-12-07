import React from 'react';
import type { NextPage } from 'next';
import { Typographie } from '@wirecore/wirestyle';
import { Prism } from '@wirecore/wirestyle-prism';
import { BiLinkExternal } from 'react-icons/bi';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Typographie size='4xl' weight='black'>
        Getting Started
      </Typographie>

      <Typographie size='sm'>Add Tailwindcss</Typographie>
      <div>
        <a
          className='text-blue-500 inline-flex gap-2 items-center mr-4'
          href='https://tailwindcss.com/docs/guides/create-react-app'
        >
          <BiLinkExternal size={18} /> Create React App
        </a>
        <a
          className='text-blue-500 inline-flex gap-2 items-center'
          href='https://tailwindcss.com/docs/guides/nextjs'
        >
          <BiLinkExternal size={18} /> NextJS
        </a>
      </div>

      <Typographie size='xl' weight='bold'>
        Installation
      </Typographie>

      <Typographie size='sm'>
        To install and save in your package.json dependencies, run the command
        below using npm:
      </Typographie>
      <div className='rounded overflow-hidden' data-color-mode='dark'>
        <Prism language='bash'>npm install wirestyle</Prism>
      </div>
      <Typographie size='sm'>Or yarn:</Typographie>
      <div className='rounded overflow-hidden' data-color-mode='dark'>
        <Prism language='bash'>yarn add wirestyle</Prism>
      </div>

      <Typographie size='lg' weight='bold'>
        Usage
      </Typographie>

      <Typographie size='sm'>
        Add the css and the provider to your main script
      </Typographie>
      <div className='rounded overflow-hidden' data-color-mode='dark'>
        <Prism language='jsx'>{providerCode}</Prism>
      </div>

      <Typographie size='sm'>Update tailwind config</Typographie>
      <div className='rounded overflow-hidden' data-color-mode='dark'>
        <Prism language='javascript'>{tailwindConfigExample}</Prism>
      </div>
    </div>
  );
};

const providerCode = `
import 'wirestyle/lib/cjs/wirestyle.css';

import './your-css-with-tailwind.css';

import { ThemeProvider } from 'wirestyle';
  
function App() {
  return (
    <ThemeProvider>
      <Your Code />
    </ThemeProvider>
  );
}

export default App;
`;

const tailwindConfigExample = `
/** @type {import('tailwindcss').Config} */

const { withWS } = require('wirestyle');

module.exports = withWS({
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Your Content
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
});
`;

export default Home;
