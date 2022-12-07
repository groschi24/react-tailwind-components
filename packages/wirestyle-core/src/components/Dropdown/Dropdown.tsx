import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useClickOutside } from '@wirecore/wirestyle-hooks';

interface IData {
  title: string;
  [key: string]: string | number;
}

interface IProps {
  data: IData[];
  selectedValue: IData;
  onChange?: (value: IData) => void;
  search?: boolean;
}

function Dropdown(props: IProps): JSX.Element {
  const ref = useClickOutside(() => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  return (
    <div ref={ref}>
      <div className='mt-1 relative' style={{ minWidth: '75px' }}>
        <button
          className='bg-white dark:bg-gray-900 relative w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='truncate flex items-center'>
            {props.selectedValue.title}
          </span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg
              className='h-5 w-5 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className='absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 shadow-lg max-h-80 rounded-md text-base ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none sm:text-sm'
              tabIndex={-1}
              role='listbox'
              aria-labelledby='listbox-label'
              aria-activedescendant='listbox-option-3'
            >
              {props.search && (
                <div className='sticky top-0 z-10 bg-white rounded-md'>
                  <li className='text-gray-900 cursor-default select-none relative py-2 px-3'>
                    <input
                      type='search'
                      name='search'
                      autoComplete={'off'}
                      className='focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md'
                      placeholder={'Search a country'}
                      onChange={(e) => setQuery(e.target.title)}
                    />
                  </li>
                </div>
              )}

              <div className='max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll'>
                {props.data.filter((item: IData) =>
                  item.title.toLowerCase().startsWith(query.toLowerCase())
                ).length === 0 ? (
                  <li className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'>
                    No countries found
                  </li>
                ) : (
                  props.data
                    .filter((item: IData) =>
                      item.title.toLowerCase().startsWith(query.toLowerCase())
                    )
                    .map((value: IData, index: number) => (
                      <li
                        key={`${value.title}-${index}`}
                        className={`cursor-default select-none relative py-2 pl-3 pr-9 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 first transition ${
                          index === 0 ? 'rounded-t-md' : ''
                        } ${
                          index ===
                          props.data.filter((item: IData) =>
                            item.title
                              .toLowerCase()
                              .startsWith(query.toLowerCase())
                          ).length -
                            1
                            ? 'rounded-b-md'
                            : ''
                        }`}
                        onClick={() => {
                          props.onChange && props.onChange(value);
                          setQuery('');
                          setIsOpen(!isOpen);
                        }}
                      >
                        <span className='font-normal truncate'>
                          {value.title}
                        </span>
                        {value.title === props.selectedValue.title ? (
                          <span className='text-blue-600 absolute inset-y-0 right-0 flex items-center pr-2'>
                            <svg
                              className='h-5 w-5'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    ))
                )}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Dropdown;
