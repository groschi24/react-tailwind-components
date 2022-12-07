//import Link from 'next/link';
import React from 'react';

interface IProps {
  to?: string;
  component?: React.ElementType;
  hasDivider?: boolean;
  isDesktopIconOnly?: boolean;
  dropdown?: boolean;
  active?: boolean;
  type?: string;
  activeColor?: string;
  pX?: string;
  children: React.ReactNode;
}

function NavBarItem(
  props: IProps &
    React.HTMLAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const {
    hasDivider,
    isDesktopIconOnly,
    dropdown,
    active,
    type = 'flex',
    activeColor = 'text-blue-600',
    pX,
    children,
    className,
    ...rest
  } = props;

  const Element = (
    props: IProps &
      React.HTMLAttributes<HTMLDivElement> &
      React.HTMLAttributes<HTMLAnchorElement>
  ) => {
    if (props.to) {
      if (props.component) {
        return (
          <props.component href={props.to} to={props.to}>
            <a {...props}>{props.children}</a>
          </props.component>
        );
      }

      return (
        <a href={props.to} {...props}>
          {props.children}
        </a>
      );
    }

    return <div {...props}>{children}</div>;
  };

  const getClassNames = () => {
    const base = [
      type,
      'items-center',
      'flex-grow-0',
      'flex-shrink-0',
      'relative',
      'cursor-pointer',
      'hover:text-blue-500',
      'select-none',
      active
        ? activeColor
        : 'text-black dark:text-white dark:hover:text-gray-400',
    ];

    if (type === 'block') {
      base.push('lg:flex');
    }
    if (!dropdown) {
      base.push('py-2', pX ?? 'px-3');
    } else {
      base.push('p-0', 'lg:py-2', pX ?? 'lg:px-3');
    }
    if (hasDivider) {
      base.push('lg:border-r', 'lg:border-gray-100', 'lg:dark:border-gray-700');
    }
    if (isDesktopIconOnly) {
      base.push('lg:w-16', 'lg:justify-center');
    }

    return base.join(' ');
  };

  return (
    <Element
      className={`${className ? className : ''} ${getClassNames()}`}
      {...rest}
    >
      {children}
    </Element>
  );
}

export default NavBarItem;
