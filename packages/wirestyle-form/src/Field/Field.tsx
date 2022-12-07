import React from 'react';
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';

interface IProps {
  label?: string;
  help?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>
    | undefined;
  children: React.ReactNode;
}

function Field(props: IProps): JSX.Element {
  return (
    <div className='mb-6 last:mb-0'>
      {props.label && (
        <label v-if='label' className='block font-bold mb-2'>
          {props.label}
        </label>
      )}
      <div>{props.children}</div>
      {props.error ? (
        <div className='text-xs text-red-500 dark:text-red-400 mt-1'>
          {props.error.toString()}
        </div>
      ) : (
        props.help && (
          <div className='text-xs text-gray-500 dark:text-gray-300 mt-1'>
            {props.help}
          </div>
        )
      )}
    </div>
  );
}

export default Field;
