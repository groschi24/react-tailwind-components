import React from 'react';

interface IProps {
  mobile?: boolean;
  type?: string;
  childType?: string;
  children: React.ReactNode[] | React.ReactNode;
}

function Level(
  props: IProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const {
    mobile,
    type = 'justify-between',
    childType = 'mb-6 md:mb-0',
    className,
    ...rest
  } = props;

  return (
    <div
      className={`${className ? className : ''}  ${type} items-center gap-4 ${
        mobile ? 'flex' : 'block md:flex'
      }`}
      {...rest}
    >
      {!Array.isArray(props.children)
        ? props.children
        : props.children.map((child: React.ReactNode, index: number) => {
            return (
              <div
                key={index}
                className={`flex flex-shrink flex-grow-0 items-center justify-center ${
                  !mobile &&
                  (Array.isArray(props.children) ? props.children.length : 0) >
                    index + 1
                    ? childType
                    : ''
                }`}
              >
                {child}
              </div>
            );
          })}
    </div>
  );
}

export default Level;
