import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  zIndex?: string;
  children?: React.ReactNode;
  notTransparent?: boolean;
}

function Overlay(
  props: IProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const {
    zIndex = 'z-50',
    children,
    notTransparent,
    className,
    ...rest
  } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`flex items-center flex-col justify-center overflow-hidden fixed inset-0 ${zIndex} ${
          className ? className : ''
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${
            notTransparent ? 'bg-black' : 'bg-gray-700 opacity-90'
          }`}
          {...rest}
        ></div>
        <motion.div
          initial={{ transform: 'scale(0.7)' }}
          animate={{ transform: 'scale(1)' }}
          exit={{ transform: 'scale(0.7)' }}
          transition={{ duration: 0.25 }}
          className='w-full max-h-modal md:w-3/5 lg:w-3/5'
        >
          {children ? children : false}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Overlay;
