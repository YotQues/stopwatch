import React from 'react';
import { PlusCircleIcon as Plus } from '@heroicons/react/outline';
import { PlusCircleIcon as SolidPlus } from '@heroicons/react/solid';

import { IconProps } from './Types';

export function PlusCircleIcon({ solid, styles }: IconProps): JSX.Element {
  const customClassName = `w-${styles.width || 'full'} text-${
    styles.color
  } group-hover:text-${styles.activeColor}`;
  return solid ? (
    <SolidPlus className={customClassName} />
  ) : (
    <Plus className={customClassName} />
  );
}