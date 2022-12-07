import React from 'react';

interface IProps {
  title?: string;
  icon?: React.ReactNode;
  empty?: boolean | string;
  backgroundColor?: string; // TODO:  Change this to hex string
  borderColor?: string;
  hasTable?: boolean;
  children?: React.ReactNode;
  scrollable?: boolean;
}

function Card(
  props: IProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
): JSX.Element {
  const {
    title,
    icon,
    empty,
    backgroundColor = 'bg-white dark:bg-gray-900',
    borderColor = 'border-gray-200 dark:border-gray-700',
    hasTable,
    children,
    className,
    scrollable,
    ...rest
  } = props;

  return (
    <div
      className={`${backgroundColor} border ${borderColor} md:rounded shadow-sm ${className} overflow-hidden`}
      {...rest}
    >
      {title && (
        <header className='flex items-stretch border-b border-gray-100 dark:border-gray-700'>
          <span
            className={`flex items-center py-3 flex-grow font-bold ${
              icon ? 'px-4' : 'px-6'
            }`}
          >
            {icon && <span className='mr-3 flex justify-center'>{icon}</span>}

            {title}
          </span>
        </header>
      )}
      {children && !empty ? (
        <div
          className={`${hasTable ? '' : 'p-6'} ${
            scrollable ? 'overflow-y-scroll' : 'overflow-hidden'
          }`}
          style={scrollable ? { maxHeight: 'calc(100vh - 250px)' } : {}}
        >
          {children}
        </div>
      ) : (
        <div className='text-center py-24 text-gray-500 dark:text-gray-400'>
          <p>{typeof empty === 'string' ? empty : "Nothing's here…"}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
