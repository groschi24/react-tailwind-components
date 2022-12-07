import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { BiMenu, BiDotsVerticalRounded, BiSun, BiMoon } from 'react-icons/bi';

import { NavBarItem, NavBarItemLabel } from '..';

interface IProps {
  children?: React.ReactNode;
  ignoreFullscreen?: boolean;
  logo?: React.ReactNode;
}

function NavBar(props: IProps): JSX.Element {
  const {
    theme,
    setTheme,
    isAsideMobileExpanded,
    setIsAsideMobileExpanded,
    isFullScreen,
    noAsideMenu,
  } = useThemeContext();

  const [isMenuNavBarActive, setIsMenuNavBarActive] = React.useState(false);

  const menuToggleMobile = () => {
    setIsAsideMobileExpanded(!isAsideMobileExpanded);
  };

  return (
    <nav
      className={`${
        isFullScreen && !props.ignoreFullscreen
          ? 'hidden sm:hidden md:hidden lg:hidden xl:hidden'
          : ''
      } top-0 left-0 right-0 fixed flex h-14 border-b border-gray-100 z-30 w-screen transition-position lg:w-auto lg:items-stretch dark:border-gray-700 bg-white dark:bg-gray-900`}
    >
      <div className='flex-1 flex h-14'>
        {!noAsideMenu && (
          <NavBarItem type='flex lg:hidden' onClick={menuToggleMobile}>
            <BiMenu size={28} />
          </NavBarItem>
        )}
        <div className='flex flex-row w-full text-black dark:text-white flex-1 h-14 items-center'>
          <div className='flex-1 px-3 flex justify-center lg:justify-start'>
            {props.logo && props.logo}
          </div>
        </div>
      </div>
      <div className='flex-none items-stretch flex h-14 lg:hidden'>
        <NavBarItem
          className='items-center flex'
          onClick={() => setIsMenuNavBarActive(!isMenuNavBarActive)}
        >
          <BiDotsVerticalRounded size={24} />
        </NavBarItem>
      </div>

      <div
        className={`bg-white dark:bg-gray-900 absolute w-screen top-14 left-0 shadow lg:w-auto lg:items-stretch lg:flex lg:flex-grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none ${
          isMenuNavBarActive ? 'block' : 'hidden'
        }`}
      >
        <div className='max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto'>
          <NavBarItem
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            hasDivider
            isDesktopIconOnly
          >
            <NavBarItemLabel
              icon={
                theme === 'dark' ? <BiSun size={24} /> : <BiMoon size={24} />
              }
              label='Mode'
              isDesktopIconOnly
            />
          </NavBarItem>
          {props.children && props.children}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
