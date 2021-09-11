import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | ReactNode[];
  className: string;
  onClick: () => void;
}

export function Button({
  children,
  className,
  onClick,
}: ButtonProps): ReactNode {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
