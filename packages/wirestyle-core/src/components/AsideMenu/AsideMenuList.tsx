import React from 'react';
import { AsideMenuItem } from '.';
import { IMenu } from '../../utils/types';

interface IProps {
  pathname?: string;
  isSubmenuList?: boolean;
  menu: IMenu[];
}

function AsideMenuList(
  props: IProps & React.HTMLAttributes<HTMLUListElement>
): JSX.Element {
  const {
    pathname,
    isSubmenuList = false,
    menu = [],
    className,
    ...rest
  } = props;

  return (
    <ul className={`relative ${className ? className : ''}`} {...rest}>
      <div
        className={`absolute top-0 bottom-0 left-8 ml-0.5 ${
          isSubmenuList
            ? 'border-l border-black dark:border-white opacity-10 border-solid'
            : ''
        }`}
      />
      {menu.map((item: IMenu, index: number) => {
        return (
          <AsideMenuItem
            key={index}
            item={item}
            pathname={pathname}
            isSubmenuList={isSubmenuList}
          />
        );
      })}
    </ul>
  );
}

export default AsideMenuList;
