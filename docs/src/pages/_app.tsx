import React from 'react';
import type { AppProps } from 'next/app';

import {
  AsideMenu,
  Layout,
  MenuType,
  NavBar,
  NavBarItem,
  NavBarItemLabel,
  ThemeProvider,
  Typographie,
} from '@wirecore/wirestyle';
import { BiSpreadsheet, BiCustomize } from 'react-icons/bi';

import '@fontsource/fira-code';
import '@fontsource/inter/variable.css';

import '@wirecore/wirestyle/lib/cjs/wirestyle.css';

import '../css/index.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';

const menu: MenuType = [
  'General',
  [
    {
      to: '/',
      component: Link,
      icon: <BiSpreadsheet size={18} />,
      label: 'Getting Started',
    },
    {
      to: '/customization',
      component: Link,
      icon: <BiSpreadsheet size={18} />,
      label: 'Customization',
    },
  ],
  'components',
  [
    {
      to: '/components/layout',
      component: Link,
      icon: <BiCustomize size={18} />,
      label: 'Layout',
    },
    {
      to: '/components/button',
      component: Link,
      icon: <BiCustomize size={18} />,
      label: 'Button',
    },
    {
      to: '/components/table',
      component: Link,
      icon: <BiCustomize size={18} />,
      label: 'Table',
    },
    {
      to: '/components/modal',
      component: Link,
      icon: <BiCustomize size={18} />,
      label: 'Modal',
    },
  ],
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <NavBar
        logo={
          <div className='flex gap-2 fill-black dark:fill-white'>
            <Logo width={32} height={32} />
            <Typographie size='2xl' weight='black'>
              WireStyle
            </Typographie>
          </div>
        }
      />

      <AsideMenu
        pathname={router.pathname}
        menu={menu}
        bottomInformation='WireStyle v0.0.1'
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
