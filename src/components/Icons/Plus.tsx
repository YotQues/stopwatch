import React from 'react';
import { PlusCircleIcon as Plus } from '@heroicons/react/outline';
import { PlusCircleIcon as SolidPlus } from '@heroicons/react/solid';

import { IconProps } from './Types';

interface PlusIconProps extends IconProps {
  isTouched?: boolean;
}

export const PlusIcon: React.FunctionComponent<PlusIconProps> = (
  props
): JSX.Element => {
  return props.isTouched ? (
    <SolidPlus className={props.className} />
  ) : (
    <Plus className={props.className} />
  );
};
