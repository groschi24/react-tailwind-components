import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  icon?: React.ReactNode;
  register?: UseFormRegisterReturn;
}

function TextField(
  props: IProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
): JSX.Element {
  const { register, icon, className, ...rest } = props;
  return (
    <span className={`relative block ${className}`}>
      {icon && (
        <span className='pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3'>
          {icon}
        </span>
      )}

      <input
        className={`bg-white dark:bg-gray-800 border-solid border border-gray-300 dark:border-gray-600  py-2 px-4 w-full rounded text-gray-700 dark:text-white ${
          icon ? 'pl-10' : ''
        }`}
        {...register}
        {...rest}
      />
    </span>
  );
}

export default TextField;
