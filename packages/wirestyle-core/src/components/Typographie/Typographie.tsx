import React from 'react';

/*
Compiler Classes

Size:

- text-xs
- text-sm
- text-base
- text-lg
- text-xl
- text-2xl
- text-3xl
- text-4xl
- text-5xl
- text-6xl
- text-7xl
- text-8xl
- text-9xl

Weight:

- font-thin
- font-extralight
- font-light
- font-normal
- font-medium
- font-semibold
- font-bold
- font-extrabold
- font-black

Spacing:

- tracking-tighter
- tracking-tight
- tracking-normal
- tracking-wide
- tracking-wider
- tracking-widest
*/

interface IProps {
  children: React.ReactNode;
  component?: React.ElementType;
  italic?: boolean;
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  spacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
}

function Typographie(
  props: IProps & React.HTMLAttributes<HTMLParagraphElement>
): JSX.Element {
  const {
    children,
    component,
    italic,
    size,
    weight,
    spacing,
    className,
    ...rest
  } = props;

  const Root: React.ElementType = component ?? 'p';

  const getClassNames = () => {
    const base = [
      `text-${size ? size : 'base'}`,
      `font-${weight ? weight : 'normal'}`,
      `tracking-${spacing ? spacing : 'normal'}`,
      italic ? 'italic' : '',
    ];

    return base.join(' ');
  };

  return (
    <Root
      className={`${className ? className : ''} ${getClassNames()}`}
      {...rest}
    >
      {children}
    </Root>
  );
}

export default Typographie;
