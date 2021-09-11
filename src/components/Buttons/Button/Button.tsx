import React, {
  FunctionComponent,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): JSX.Element => {
  const { children, className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
