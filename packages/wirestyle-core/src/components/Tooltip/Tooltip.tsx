import React from 'react';

interface IProps {
  text: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  arrow?: boolean;
  children: React.ReactNode;
}

function Tooltip(props: IProps): JSX.Element {
  const tipRef = React.createRef<HTMLDivElement>();
  const { text, position = 'top', arrow = true } = props;

  function handleMouseEnter() {
    if (tipRef.current) {
      tipRef.current.style.opacity = '1';
    }
  }
  function handleMouseLeave() {
    if (tipRef.current) {
      tipRef.current.style.opacity = '0';
    }
  }

  const getClassNames = () => {
    const base = [''];

    switch (position) {
      case 'left':
        base.push('right-full mr-2');
        break;
      case 'right':
        base.push('left-full ml-2');
        break;
      case 'top':
        base.push('bottom-0 mb-8');
        break;
      case 'bottom':
        base.push('top-0 mt-8');
        break;
      default:
        base.push('left-full');
    }

    return base.join(' ');
  };

  const getClassNamesFlex = () => {
    const base = [''];

    switch (position) {
      case 'left':
        base.push('items-center');
        break;
      case 'right':
        base.push('items-center');
        break;
      case 'top':
        base.push('justify-center');
        break;
      case 'bottom':
        base.push('justify-center');
        break;
      default:
        base.push('justify-center');
    }

    return base.join(' ');
  };

  const getClassNamesArrow = () => {
    const base = [''];

    switch (position) {
      case 'left':
        base.push('right-0 -mr-0.5');
        break;
      case 'right':
        base.push('left-0 -ml-0.5');
        break;
      case 'top':
        base.push('bottom-0 -mb-0.5');
        break;
      case 'bottom':
        base.push('top-0 -mt-0.5');
        break;
      default:
        base.push('bottom-0 -mb-0.5');
    }

    return base.join(' ');
  };

  return (
    <div className='relative inline-block'>
      <div className='flex flex-col items-center justify-center'>
        <div
          ref={tipRef}
          className={`${getClassNames()} absolute flex flex-col items-center group-hover:flex opacity-0 transition-all duration-150 pointer-events-none`}
        >
          <span
            className={`relative flex ${getClassNamesFlex()} z-10 p-4 text-xs leading-none text-white dark:text-black text-left whitespace-pre md:whitespace-nowrap bg-gray-800 dark:bg-white rounded`}
          >
            {text}
            {arrow ? (
              <div
                className={`absolute ${getClassNamesArrow()} w-3 h-3 transform rotate-45 bg-gray-800 dark:bg-white`}
              />
            ) : (
              <></>
            )}
          </span>
        </div>
        <div
          className='cursor-pointer flex'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
