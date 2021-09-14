import React from 'react';

import { TrashIcon as OutlineTrash } from '@heroicons/react/outline';

import { TrashIcon as SolidTrash } from '@heroicons/react/solid';

import { IconProps } from './Types';

export function Trash({ solid, styles }: IconProps): JSX.Element {
  const customClassName = `w-${styles.width || 'full'} text-${
    styles.color
  } group-hover:text-${styles.activeColor}`;

  return solid ? (
    <SolidTrash className={customClassName} />
  ) : (
    <OutlineTrash className={customClassName} />
  );
}
