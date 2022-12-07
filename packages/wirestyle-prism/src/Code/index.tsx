import { COLORS, colorsBg, colorsText } from '@wirecore/wirestyle';

interface IProps {
  children: React.ReactNode;
  color?: COLORS;
}

function Code(
  props: IProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const { className, color = 'light', children } = props;

  const getClassNames = () => {
    const base = [
      'inline-block',
      'self-start',
      'px-2',
      'rounded',
      'whitespace-pre',
      'bg-opacity-20',
      'text-sm',
      colorsBg[color],
      colorsText['white'],
    ];

    return base.join(' ');
  };

  return (
    <code className={`${className ? className : ''} ${getClassNames()}`}>
      {children}
    </code>
  );
}

export default Code;
