//import Link from 'next/link';
import React from 'react';

import { Level } from '..';

interface IProps {
  titleStack: string[];
  subline?: string | React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  noHorizontalPadding?: boolean;
}

function TitleBar(props: IProps): JSX.Element {
  const { titleStack = [] } = props;

  return (
    <section className={`${props.noHorizontalPadding ? 'py-6' : 'p-6'}`}>
      <Level>
        <div>
          <div className='flex items-center'>
            <ul>
              {/*titleStack.map((title: string, index: number) => (
                <Link
                  key={index}
                  href={
                    index > 0 && index < titleStack.length - 1
                      ? `/${titleStack.slice(1, -1).join('/')}`
                      : `/${titleStack.join('/')}`
                  }
                  passHref
                >
                  <li
                    className={`title-stack-item inline-block pr-3 text-2xl text-gray-500 last:pr-0 last:font-black last:text-black dark:text-gray-300 dark:last:text-gray-100 ${
                      index > 0 && index < titleStack.length - 1
                        ? 'cursor-pointer hover:text-gray-600'
                        : ''
                    }`}
                  >
                    {title}
                  </li>
                </Link>
                  ))*/}

              {titleStack.map((title: string, index: number) => (
                <li
                  key={index}
                  className={`title-stack-item inline-block pr-3 text-2xl text-gray-500 last:pr-0 last:font-black last:text-black dark:text-gray-300 dark:last:text-gray-100 ${
                    index > 0 && index < titleStack.length - 1
                      ? 'cursor-pointer hover:text-gray-600'
                      : ''
                  }`}
                >
                  {title}
                </li>
              ))}
            </ul>
            {props.leftElement && props.leftElement}
          </div>
          <span className='text-gray-500 dark:text-gray-300 block mt-3 w-full md:max-w-screen-md'>
            {props.subline}
          </span>
        </div>

        {props.rightElement && props.rightElement}
      </Level>
    </section>
  );
}

export default TitleBar;
