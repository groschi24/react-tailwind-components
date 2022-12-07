import React from 'react';

interface IProps {
  onSubmit: () => void;
  children: React.ReactNode | React.ReactNode[];
}

function Form(props: IProps): JSX.Element {
  return (
    <form className='' onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

export default Form;
