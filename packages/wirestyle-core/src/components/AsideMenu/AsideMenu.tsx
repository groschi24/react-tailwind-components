import { useThemeContext } from '../../contexts/ThemeContext';
import { IMenu, MenuType } from '../../utils/types';

import { AsideMenuList } from '.';

interface IProps {
  menu: MenuType;
  pathname?: string;
  bottomInformation?: string;
}

function AsideMenu({
  menu = [],
  pathname,
  bottomInformation,
}: IProps): JSX.Element {
  const { isAsideMobileExpanded, isFullScreen } = useThemeContext();

  return (
    <aside
      className={`w-60 fixed top-14 pb-16 z-40 h-full flex flex-col justify-between border-r border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 transition-position lg:left-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-600 scrollbar-track-gray-900 dark:scrollbar-track-gray-800  ${
        isAsideMobileExpanded ? 'left-0' : '-left-60'
      } ${
        isFullScreen ? 'hidden sm:hidden md:hidden lg:hidden xl:hidden' : ''
      }`}
    >
      <div className={bottomInformation ? 'pb-4' : ''}>
        {menu.map((menuGroup: string | IMenu[], index: number) => {
          if (typeof menuGroup === 'string') {
            return (
              <p
                key={`a-${index}`}
                className='p-3 text-xs uppercase text-gray-600 dark:text-gray-400 select-none'
              >
                {menuGroup}
              </p>
            );
          } else {
            return (
              <AsideMenuList
                key={`b-${index}`}
                pathname={pathname}
                menu={menuGroup}
              />
            );
          }
        })}
      </div>

      {bottomInformation && (
        <div className='w-full flex justify-center items-center'>
          <small className='text-center text-gray-600'>
            {bottomInformation}
          </small>
        </div>
      )}
    </aside>
  );
}

export default AsideMenu;
