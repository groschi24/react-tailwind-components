import React from 'react';

interface IProps {
  noWrap?: boolean;
  type?: string;
  children?: React.ReactNode | React.ReactNode[];
}

function ButtonGroup(
  props: IProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const { type = 'justify-start', noWrap, className, ...rest } = props;

  const getClassNames = () => {
    const base = [
      'flex',
      'lg:gap-2',
      'items-center',
      type,
      noWrap ? 'flex-nowrap' : 'flex-wrap',
    ];

    return base.join(' ');
  };

  return (
    <div
      className={`-mb-3 ${className ? className : ''} ${getClassNames()}`}
      {...rest}
    >
      {props.children ? (
        Array.isArray(props.children) ? (
          props.children.map((children: React.ReactNode, i: number) => {
            if (Array.isArray(children)) {
              return children.map(
                (innerChild: React.ReactNode, innerIndex: number) => (
                  <span
                    key={`${i}-${innerIndex}`}
                    className='mr-1 last:mr-0 mb-3'
                  >
                    {innerChild}
                  </span>
                )
              );
            } else {
              return (
                <span key={i} className='mr-1 last:mr-0 mb-3'>
                  {children}
                </span>
              );
            }
          })
        ) : (
          <span className='mr-3 last:mr-0 mb-3'>{props.children}</span>
        )
      ) : null}
    </div>
  );
}

export default ButtonGroup;
