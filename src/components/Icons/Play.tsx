import React from 'react';

import { PlayIcon as OutlinePlay } from '@heroicons/react/outline';

import { PlayIcon as SolidPlay } from '@heroicons/react/solid';

import { IconProps } from './Types';

export function Play({ solid, styles }: IconProps): JSX.Element {
  const customClassName = `w-${styles.width || 'full'} text-${
    styles.color
  } group-hover:text-${styles.activeColor}`;

  return (
    <>
      {solid ? (
        <SolidPlay className={customClassName} />
      ) : (
        <OutlinePlay className={customClassName} />
      )}
    </>
  );
}

export default Play;
