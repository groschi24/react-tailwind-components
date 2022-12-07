import React from 'react';

interface IProps {
  children: React.ReactNode;
}

function HeroBarTitle(props: IProps): JSX.Element {
  return (
    <p className='text-base font-semibold leading-tight'>{props.children}</p>
  );
}

function HeroBarSub(props: IProps): JSX.Element {
  return (
    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
      {props.children}
    </p>
  );
}

function HeroBarContent(props: IProps): JSX.Element {
  return <div>{props.children}</div>;
}

function HeroBar(props: IProps): JSX.Element {
  return (
    <section className='bg-white border md:rounded shadow-sm mb-6 border-gray-200 p-6 dark:bg-gray-900 dark:border-gray-700 dark:text-white'>
      {props.children}
    </section>
  );
}

export default Object.assign(HeroBar, {
  Header: HeroBarTitle,
  SubHeader: HeroBarSub,
  Content: HeroBarContent,
});
