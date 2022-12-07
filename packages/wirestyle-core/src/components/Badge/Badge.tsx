import React from 'react';
import { Tooltip } from '..';
import { COLORS, colorsBg, colorsBorders, colorsOutline } from '../../colors';

interface IProps {
  icon?: React.ReactNode;
  type: COLORS;
  small?: boolean;
  outline?: boolean;
  tooltip?: string;
  tooltipPos?: 'left' | 'right' | 'top' | 'bottom';
  noMargin?: boolean;
  children?: React.ReactNode;
}

function BadgeElement(props: IProps) {
  const { icon, type = 'white', small, outline, noMargin, children } = props;
  const getClassNames = () => {
    const baseColor = outline
      ? [colorsOutline[type]]
      : [colorsBg[type], colorsBorders[type]];

    const base = [
      'border',
      small
        ? `py-0.5 ${children ? 'px-2' : 'px-0.5'} text-xs ${
            noMargin ? 'mr-0' : 'mr-1.5'
          }`
        : `py-2 ${children ? 'px-4' : 'px-2'} ${noMargin ? 'mr-0' : 'mr-3'}`,
      ...baseColor,
    ];

    return base.join(' ');
  };

  return (
    <div
      className={`inline-flex items-center last:mr-0 rounded-full ${getClassNames()}`}
    >
      {icon ? (
        <span className={`${children ? 'mr-2' : ''}`}>{icon}</span>
      ) : (
        <span></span>
      )}
      {children ? <span>{children}</span> : <span></span>}
    </div>
  );
}

function Badge(props: IProps): JSX.Element {
  if (props.tooltip) {
    return (
      <Tooltip text={props.tooltip} position={props.tooltipPos}>
        <BadgeElement {...props} />
      </Tooltip>
    );
  } else {
    return <BadgeElement {...props} />;
  }
}

export default Badge;
