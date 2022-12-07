import React from 'react';

import { BiChevronDown } from 'react-icons/bi';
import { AsideMenuList } from '.';
import { IMenu } from '../../utils/types';

interface IProps {
  item: IMenu;
  pathname?: string;
  isSubmenuList: boolean;
  children?: React.ReactNode;
}

function AsideMenuItem(
  props: IProps &
    React.HTMLAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const { item, pathname, isSubmenuList, className, ...rest } = props;
  const [isDropdownActive, setIsDropdownActive] = React.useState(false);
  const isActive = React.useMemo(
    () =>
      pathname && item.to && item.to.length > 1
        ? pathname.includes(item.to)
        : false,
    [pathname]
  );

  const hasDropdown = Object.prototype.hasOwnProperty.call(props.item, 'menu');

  const styleActive = 'text-black dark:text-white';
  const styleInactive = 'text-gray-900 dark:text-gray-100';

  const styleIconActive = 'text-blue-500 dark:text-blue-400';

  const Element = (
    props: {
      children: React.ReactNode;
    } & React.HTMLAttributes<HTMLDivElement> &
      React.HTMLAttributes<HTMLAnchorElement>
  ) => {
    if (hasDropdown) {
      return <div>{props.children}</div>;
    }

    if (item.component) {
      return (
        <item.component href={item.to} to={item.to}>
          <a {...props}>{props.children}</a>
        </item.component>
      );
    }

    return (
      <a href={item.to} {...props}>
        {props.children}
      </a>
    );
  };

  const menuClick = () => {
    if (hasDropdown) {
      setIsDropdownActive(!isDropdownActive);
    }
  };

  return (
    <li onClick={menuClick}>
      <Element {...rest}>
        <div
          className={`${className ? className : ''} ${
            isSubmenuList ? 'p-1.5 ml-12 text-sm' : 'py-1.5'
          } ${
            isActive
              ? 'bg-blue-100 dark:bg-blue-900'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          } flex cursor-pointer items-center rounded my-1 mx-3`}
        >
          <span
            className={`flex-none inline-flex justify-center items-center ${
              item.icon ? 'w-10' : 'w-10'
            } h-6 ${isActive ? styleIconActive : styleInactive}  `}
          >
            {item.icon}
          </span>
          <span
            className={`flex-grow select-none ${
              isActive ? styleActive : styleInactive
            }`}
          >
            {item.label}
          </span>
          {hasDropdown ? (
            <span
              className={`flex-none inline-flex justify-center items-center w-12 h-6 ${
                isActive ? styleActive : styleInactive
              }  `}
            >
              <BiChevronDown size={18} />
            </span>
          ) : (
            false
          )}
        </div>
      </Element>

      {hasDropdown ? (
        <AsideMenuList
          pathname={pathname}
          menu={item.menu ? item.menu : []}
          className={`${
            !isDropdownActive
              ? 'hidden sm:hidden md:hidden lg:hidden xl:hidden'
              : 'block'
          }`}
          isSubmenuList={true}
        />
      ) : (
        false
      )}
    </li>
  );
}

export default AsideMenuItem;
