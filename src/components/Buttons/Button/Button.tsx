import React, { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  label?: {
    text: string;
    style: string;
  };
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

/* export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): JSX.Element => {
  const { children, className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}; */

export const Button: FunctionComponent<ButtonProps> = (props): JSX.Element => {
  const { label, onClick, children, className } = props;

  return (
    <button
      className={`group w-20 h-20 flex flex-col justify-center items-center shadow ${className} hover:shadow-none`}
      onClick={onClick}
    >
      {children && children}
      {label && (
        <div
          className={`justify-self-end self-center text-xs text-inherit ${label.style}`}
        >
          {label.text}
        </div>
      )}
    </button>
  );
};
