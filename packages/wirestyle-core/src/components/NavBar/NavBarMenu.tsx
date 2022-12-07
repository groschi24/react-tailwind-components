import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useClickOutside } from '@wirecore/wirestyle-hooks';

import { NavBarItem } from '..';

interface IProps {
  hasDivider?: boolean;
  label: React.ReactNode;
  dropdown: React.ReactNode;
}

function NavBarMenu({
  hasDivider = false,
  label,
  dropdown,
}: IProps): JSX.Element {
  const [dropdownActive, setDropdownActive] = React.useState(false);

  const ref = useClickOutside(() => closeDropDown());

  useEffect(() => {
    closeDropDown();
  }, []);

  const toggleDropdown = () => {
    dropdownActive ? closeDropDown() : openDropDown();
  };

  const openDropDown = () => setDropdownActive(true);
  const closeDropDown = () => setDropdownActive(false);

  return (
    <NavBarItem
      type='block dropdown'
      hasDivider={hasDivider}
      active={dropdownActive}
      dropdown
    >
      <span
        className='flex items-center py-2 px-3 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent'
        onClick={toggleDropdown}
      >
        {label}
        <BiChevronDown size={24} />
      </span>
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={`text-sm border-gray-100 lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-800 border-b ${
            !dropdownActive ? 'lg:hidden' : ''
          }`}
        >
          {dropdown}
        </motion.div>
      </AnimatePresence>
    </NavBarItem>
  );
}

export default NavBarMenu;
