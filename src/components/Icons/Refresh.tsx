import React from 'react';

import { RefreshIcon as OutlineRefresh } from '@heroicons/react/outline';

import { RefreshIcon as SolidRefresh } from '@heroicons/react/solid';

import { IconProps } from './Types';

export function Refresh({ solid, styles }: IconProps): JSX.Element {
  const customClassName = `w-${styles.width || 'full'} text-${
    styles.color
  } group-hover:text-${styles.activeColor}`;

  return solid ? (
    <SolidRefresh className={customClassName} />
  ) : (
    <OutlineRefresh className={customClassName} />
  );
}
