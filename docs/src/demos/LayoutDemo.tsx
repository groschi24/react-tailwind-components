import React from 'react';
import {
  AsideMenu,
  Card,
  Layout,
  MenuType,
  NavBar,
  Typographie,
} from '@wirecore/wirestyle';
import { BiLayout, BiSquareRounded, BiSidebar } from 'react-icons/bi';
import Link from 'next/link';

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
    {
      to: '/',
      component: Link,
      icon: <BiSidebar size={18} />,
      label: 'Placeholder',
    },
  ],
];

const LayoutDemo = () => {
  return (
    <Card
      className='relative w-full overflow-hidden my-4'
      style={{
        height: '500px',
        transform: 'translateZ(0)',
        backgroundColor: 'transparent',
      }}
    >
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
    </Card>
  );
};

export default LayoutDemo;
