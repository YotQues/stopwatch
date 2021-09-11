import React, { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  // 👇 An alternative to 'children' || used for the text node beneath the icons in descendant components.
  label?: {
    text: ReactNode; // 👈 the node in the div below
    style: string; // 👈 the custom className addition
  };
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  // 👇 These are mainly for visual feedbacks
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onFocus?: () => void;
}

type ClickAble = {
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onFocus?: () => void;
};

// 👇 For styling, a 'group-{event}' is needed to affect the children of the component (label.style as well).
export const Button: FunctionComponent<ButtonProps> = (props): JSX.Element => {
  const { label, onClick, children, className } = props;

  const ClickAbleHandler: ClickAble = {};
  if (props.onMouseDown) ClickAbleHandler.onMouseDown = props.onMouseDown;
  if (props.onMouseUp) ClickAbleHandler.onMouseUp = props.onMouseUp;
  if (props.onFocus) ClickAbleHandler.onFocus = props.onFocus;

  const dimensions =
    'w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48';

  const fontSize = 'text-xs md:text-base lg:text-lg xl:text-2xl';

  return (
    <button
      className={`group ${dimensions} flex flex-col justify-center items-center shadow ${className} hover:shadow-none`}
      onClick={onClick}
      {...ClickAbleHandler}
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
