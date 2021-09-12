import React, { FunctionComponent, ReactNode } from 'react';

export interface ButtonStyles {
  bgColor: string;
  activeBgColor: string;
  textColor: string;
  activeTextColor: string;
}

export interface ButtonProps extends React.ComponentProps<'button'> {
  // 👇 An alternative to 'children' || used for the text node beneath the icons in descendant components.
  label?: ReactNode; // 👈 the node inserted in the div below
  children?: ReactNode;
  styles: {
    bgColor: string;
    activeBgColor: string;
    textColor: string;
    activeTextColor: string;
  };
  onClick?: () => void;
  // 👇 These are mainly for visual feedbacks
}

// type Clickable = {
//   onMouseDown?: () => void;
//   onMouseUp?: () => void;
//   onFocus?: () => void;
// };

// 👇 For styling, a 'group-{event}' is needed to affect the children of the component (label.style as well).
export function Button(props: ButtonProps): JSX.Element {
  const { label, onClick, children, className, styles } = props;

  const dimensions =
    'w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48';

  const fontSize = 'text-xs md:text-base lg:text-lg xl:text-2xl';

  return (
    <button
      className={`group ${dimensions} flex flex-col justify-center items-center shadow bg-${styles.bgColor} hover:${styles.activeBgColor} ${className} hover:shadow-none focus:ring-2 focus:ring-${styles.activeBgColor} focus:ring-opacity-75`}
      onClick={onClick}
    >
      {children && children}
      {label && (
        <div
          className={`justify-self-end self-center font-medium ${fontSize} text-${styles.textColor} group-hover:text-${styles.activeTextColor}`}
        >
          {label}
        </div>
      )}
    </button>
  );
}
