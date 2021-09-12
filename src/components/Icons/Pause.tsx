import React from 'react';

import { PauseIcon as OutlinePause } from '@heroicons/react/outline';

import { PauseIcon as SolidPause } from '@heroicons/react/solid';

import { IconProps } from './Types';

export function Pause({ solid, styles }: IconProps): JSX.Element {
  const customClassName = `w-${styles.width || 'full'} text-${
    styles.color
  } group-hover:text-${styles.activeColor}`;

  return (
    <>
      {solid ? (
        <SolidPause className={customClassName} />
      ) : (
        <OutlinePause className={customClassName} />
      )}
    </>
  );
}

export default Pause;
