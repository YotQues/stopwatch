import React, { useState } from 'react';

import { Button } from '../Button';

// import { LappingState } from '../../../state/States';
import { PlusIcon } from '../../Icons/Plus';

export interface LapButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void;
}

export function LapButton({ onClick }: LapButtonProps): JSX.Element {
  const colorScheme = `bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-75 `;
  const textColor = 'text-gray-200 group-hover:text-white';

  return (
    <Button
      className={colorScheme}
      label={{
        text: 'Lap',
        style: textColor,
      }}
      onClick={onClick}
    >
      <PlusIcon className={textColor} />
    </Button>
  );
}
