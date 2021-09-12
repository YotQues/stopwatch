import React from 'react';

import { StopIcon as OutlineStop } from '@heroicons/react/outline';

import { StopIcon as SolidStop } from '@heroicons/react/solid';

import { IconProps } from './Types';

export function Stop({ solid, styles }: IconProps): JSX.Element {
  const customClassName = `w-${styles.width || 'full'} text-${
    styles.color
  } group-hover:text-${styles.activeColor}`;

  return solid ? (
    <SolidStop className={customClassName} />
  ) : (
    <OutlineStop className={customClassName} />
  );
}
