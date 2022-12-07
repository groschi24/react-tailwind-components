import { NextPage } from 'next';

import { Typographie } from '@wirecore/wirestyle';
import { Prism } from '@wirecore/wirestyle-prism';

import LayoutDemo from '../../demos/LayoutDemo';

const Layout: NextPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 mb-8'>
        <Typographie size='4xl' weight='black'>
          Layout
        </Typographie>

        <Typographie
          size='sm'
          spacing='wider'
          className='text-gray-700 dark:text-gray-300'
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Typographie>
      </div>

      <LayoutDemo />

      <Prism language='jsx'>{exampleCode}</Prism>
    </div>
  );
};

const exampleCode = `
import Link from 'next/link';
import { AsideMenu, Card, Layout, MenuType, NavBar } from '@wirecore/wirestyle';
import { BiLayout, BiCard, BiSquareRounded } from 'react-icons/bi';

const menu: MenuType = [
  'General',
  [
    {
      to: '/',
      component: Link,
      icon: <BiLayout size={18} />,
      label: 'Dashboard',
    },
    {
      icon: <BiSquareRounded size={18} />,
      label: 'Collapse',
      menu: [
        {
          to: '/',
          component: Link,
          icon: <BiLayout size={18} />,
          label: 'Item 1',
        },
        {
          to: '/',
          component: Link,
          icon: <BiLayout size={18} />,
          label: 'Item 2',
        },
        {
          to: '/',
          component: Link,
          icon: <BiLayout size={18} />,
          label: 'Item 3',
        },
      ],
    },
  ],
  'Overflow',
  [
    {
      to: '/',
      component: Link,
      icon: <BiSidebar size={18} />,
      label: 'Placeholder',
    },
    {
      to: '/active',
      component: Link,
      icon: <BiSidebar size={18} />,
      label: 'Placeholder',
    },
    {
      to: '/',
      component: Link,
      icon: <BiSidebar size={18} />,
      label: 'Placeholder',
    },
    {
      to: '/',
      component: Link,
      icon: <BiSidebar size={18} />,
      label: 'Placeholder',
    },
  ],
];

function Demo() {
  return (
    <>
      <NavBar
        logo={
          <Typographie size='xl' weight='black'>
            Layout Demo
          </Typographie>
        }
      />
      <AsideMenu
        pathname='/active'
        menu={menu}
        bottomInformation='Information at the end'
      />

      <Layout>
        <Typographie size='sm' spacing='wider'>
          App Content goes here
        </Typographie>
      </Layout>
    </>
  );
}
`;

export default Layout;
