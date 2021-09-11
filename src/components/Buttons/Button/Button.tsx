import React, { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  label?: {
    text: ReactNode;
    style: string;
  };
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = (props): JSX.Element => {
  const { label, onClick, children, className } = props;

  const dimensions =
    'w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48';
  const fontSize = 'text-xs md:text-base lg:text-lg xl:text-2xl';
  return (
    <button
      className={`group ${dimensions} flex flex-col justify-center items-center shadow ${className} hover:shadow-none`}
      onClick={onClick}
    >
      {children && children}
      {label && (
        <div
          className={`justify-self-end self-center font-medium ${fontSize} ${label.style}`}
        >
          {label.text}
        </div>
      )}
    </button>
  );
};
