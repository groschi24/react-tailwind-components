import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  noMargin?: boolean;
}

function Checkbox(props: IProps): JSX.Element {
  const { label, error, register, noMargin, ...rest } = props;
  return (
    <div className={noMargin ? '' : 'mb-6 last:mb-0'}>
      <label className='inline-flex items-center'>
        <input
          type='checkbox'
          className='bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-800 h-4 w-4 rounded'
          {...register}
          {...rest}
        />
        {props.label && (
          <span className='font-medium text-gray-900 dark:text-white text-sm ml-3'>
            {props.label}
          </span>
        )}
      </label>
      {props.error && (
        <div className='text-xs text-red-500 dark:text-red-400 mt-1'>
          {props.error}
        </div>
      )}
    </div>
  );
}

export default Checkbox;
