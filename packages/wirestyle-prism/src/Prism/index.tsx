import { Card, Tooltip, useThemeContext } from '@wirecore/wirestyle';
import { useClipboard } from '@wirecore/wirestyle-hooks';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import themeDark from 'prism-react-renderer/themes/vsDark';
import themeLight from 'prism-react-renderer/themes/vsLight';
import { useEffect, useState } from 'react';
import ClipboardIcon from './clipboard';

interface IProps {
  children: string;
  language: Language;
  trim?: boolean;
}

function Prism(
  props: IProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const clipboard = useClipboard();
  const [codeTheme, setCodeTheme] = useState(themeLight);

  const { theme } = useThemeContext();
  const { className, children, language, trim = true } = props;

  useEffect(() => {
    if (theme === 'light') {
      setCodeTheme(themeLight);
    } else {
      setCodeTheme(themeDark);
    }
  }, [theme]);

  const code =
    trim && typeof children === 'string' ? children.trim() : children;

  return (
    <Card
      hasTable
      className={`${className ? className : ''} relative p-4 text-sm`}
    >
      <div className='absolute top-2 right-2'>
        <Tooltip
          text={clipboard.copied ? 'Copied' : 'Copy code'}
          position='left'
        >
          <div
            className='fill-white hover:bg-black hover:bg-opacity-10 p-2 rounded'
            onClick={() => clipboard.copy(code)}
          >
            <ClipboardIcon />
          </div>
        </Tooltip>
      </div>
      <Highlight
        {...defaultProps}
        theme={{
          ...codeTheme,
          ...{ plain: { backgroundColor: 'transparent' } },
        }}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Card>
  );
}

export default Prism;
