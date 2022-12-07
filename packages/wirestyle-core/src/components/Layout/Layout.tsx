import React, { useEffect, useMemo } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';

interface IProps {
  children: React.ReactNode;
  isFullscreen?: boolean;
  noAsideMenu?: boolean;
}

function Layout(props: IProps): JSX.Element {
  const { setFullscreen, setNoAsideMenu } = useThemeContext();

  const isFullscreen = useMemo(() => {
    return props.isFullscreen;
  }, [props.isFullscreen]);

  const noAsideMenu = useMemo(() => {
    return props.noAsideMenu;
  }, [props.noAsideMenu]);

  useEffect(() => {
    setFullscreen(isFullscreen ? isFullscreen : false);
  }, [setFullscreen, isFullscreen]);

  useEffect(() => {
    setNoAsideMenu(noAsideMenu ? noAsideMenu : false);
  }, [setNoAsideMenu, noAsideMenu]);

  let classNames = 'px-4 md:px-6 py-6';

  if (isFullscreen) {
    classNames =
      'w-full px-0 md:px-6 flex h-screen items-center justify-center';
  }

  return (
    <div
      className={`${
        isFullscreen ? '' : noAsideMenu ? 'pt-14' : 'pt-14 lg:pl-60'
      }`}
    >
      <section className={classNames}>{props.children}</section>
    </div>
  );
}

export default Layout;
