import React from 'react';

import { COLORS, colorsButtons, colorsButtonsOutline } from '../../colors';

interface IProps {
  icon?: React.ReactNode;
  to?: string;
  component?: React.ElementType;
  target?: string;
  color?: COLORS;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  compact?: boolean;
  uppercase?: boolean;
  outline?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

function Button(
  props: IProps &
    React.HTMLAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLAnchorElement> &
    React.HTMLAttributes<HTMLButtonElement>
): JSX.Element {
  const {
    icon,
    target,
    to,
    component,
    color = 'white',
    size,
    radius,
    compact,
    uppercase,
    outline,
    disabled,
    className,
    ...rest
  } = props;

  const Element = (
    props: IProps &
      React.HTMLAttributes<HTMLDivElement> &
      React.HTMLAttributes<HTMLAnchorElement> &
      React.HTMLAttributes<HTMLButtonElement>
  ) => {
    const Root: React.ElementType = component ?? 'button';

    return (
      <Root href={to} to={to} {...props}>
        {props.children}
      </Root>
    );
  };

  let labelPadding = '';
  let labelSize = '';
  let buttonPadding = '';
  let buttonHeight = '';
  let rounded = '';

  switch (size) {
    case 'xs':
      labelPadding = 'px-1';
      labelSize = 'text-xs';
      buttonPadding = 'p-1.5';
      buttonHeight = compact ? 'h-5' : 'h-7';
      break;
    case 'sm':
      labelPadding = 'px-1';
      labelSize = 'text-sm';
      buttonPadding = 'px-2 py-1';
      buttonHeight = compact ? 'h-6' : 'h-9';
      break;
    case 'lg':
      labelPadding = 'px-2';
      labelSize = 'text-lg';
      buttonPadding = 'px-3 py-2';
      buttonHeight = compact ? 'h-8' : 'h-11';
      break;
    case 'xl':
      labelPadding = 'px-3';
      labelSize = 'text-xl';
      buttonPadding = 'px-4 py-2';
      buttonHeight = compact ? 'h-9' : 'h-14';
      break;

    default:
      labelPadding = 'px-2';
      labelSize = 'text-md';
      buttonPadding = 'px-3 py-2';
      buttonHeight = compact ? 'h-7' : 'h-10';
  }

  if (compact) {
    buttonPadding = 'p-0.5';
    labelPadding = 'px-1';
  }

  switch (radius) {
    case 'xs':
      rounded = 'rounded-sm';
      break;
    case 'sm':
      rounded = 'rounded';
      break;
    case 'lg':
      rounded = 'rounded-xl';
      break;
    case 'xl':
      rounded = 'rounded-full';
      break;
    default:
      rounded = 'rounded-md';
  }

  const getClassNames = () => {
    const base = [
      'inline-flex',
      'items-center',
      'cursor-pointer',
      'whitespace-nowrap',
      'justify-center',
      'border',
      'shadow-sm',
      'text-base',
      'font-medium',
      'sm:w-auto',
      'sm:text-sm',
      'focus:outline-none',
      'focus:ring-0',
      'active:translate-y-0.5',
      'transition',
      'duration-150',
      'ease-in-out',
      'select-none',
      buttonPadding,
      buttonHeight,
      rounded,
      uppercase ? 'uppercase' : '',
      outline ? colorsButtonsOutline[color] : colorsButtons[color],
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ];

    outline ? colorsButtonsOutline[color] : colorsButtons[color];

    return base.join(' ');
  };

  return (
    <Element
      className={`${className ? className : ''} ${getClassNames()}`}
      {...rest}
    >
      {icon && icon}
      {props.children && (
        <span className={`${labelPadding} ${labelSize}`}>{props.children}</span>
      )}
    </Element>
  );
}

export default Button;
