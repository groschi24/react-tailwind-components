import React from 'react';
import { useWindowSize } from '@wirecore/wirestyle-hooks';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');

    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

interface IThemeContext {
  theme: string;
  setTheme: (value: string) => void;
  /* Aside */
  isAsideMobileExpanded: boolean;
  setIsAsideMobileExpanded: (value: boolean) => void;
  /* Pages like login without navigation */
  isFullScreen: boolean;
  setFullscreen: (value: boolean) => void;
  noAsideMenu: boolean;
  setNoAsideMenu: (value: boolean) => void;
}

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

interface Props {
  initialTheme?: string;
  children: React.ReactNode;
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: Props): JSX.Element => {
  const size = useWindowSize();

  const [theme, setTheme] = React.useState(getInitialTheme);
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] =
    React.useState(false);
  const [isFullScreen, setFullscreen] = React.useState(false);
  const [noAsideMenu, setNoAsideMenu] = React.useState(false);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const body = window.document.body;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    body.className = `bg-gray-50 text-base dark:bg-gray-800 dark:text-gray-100 overflow-x-hidden`;

    localStorage.setItem('theme', rawTheme);
  };

  const rawSetIsAsideMobileExpanded = (rawValue: boolean) => {
    const root = window.document.documentElement;
    const appElement = window.document.getElementById('root');

    if (appElement) {
      appElement.classList[rawValue ? 'add' : 'remove']('ml-60', 'xl:ml-0');
    }

    root.classList[rawValue ? 'add' : 'remove']('m-clipped');
  };

  const rawSetFullScreen = (rawValue: boolean) => {
    const root = window.document.documentElement;

    root.classList[rawValue ? 'add' : 'remove']('full-screen');
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  React.useEffect(() => {
    rawSetIsAsideMobileExpanded(isAsideMobileExpanded);
  }, [isAsideMobileExpanded]);

  React.useEffect(() => {
    rawSetFullScreen(isFullScreen);
  }, [isFullScreen]);

  React.useEffect(() => {
    if (size.width) {
      if (size.width > 1023) {
        setIsAsideMobileExpanded(false);
      }
    }
  }, [size]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        isAsideMobileExpanded,
        setIsAsideMobileExpanded,
        isFullScreen,
        setFullscreen,
        noAsideMenu,
        setNoAsideMenu,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext(): IThemeContext {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be within ThemeContext');
  }

  return context;
}
