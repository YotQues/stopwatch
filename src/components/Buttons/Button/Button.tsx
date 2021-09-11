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
  const { className, onClick } = props;
  return (
    <button disabled className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};
