import React, { useState } from 'react';

import { Button, ButtonStyles } from '../Button';

import { PlusCircleIcon } from '../../Icons/PlusCircle';

export interface LapButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void;
}

export function LapButton({ onClick }: LapButtonProps): JSX.Element {
  const styles: ButtonStyles = {
    bgColor: 'gray-700',
    activeBgColor: 'gray-800',
    textColor: 'gray-200',
    activeTextColor: 'white',
  };

  return (
    <Button label="Lap" styles={styles} onClick={onClick}>
      <PlusCircleIcon
        styles={{
          color: styles.textColor,
          activeColor: styles.activeTextColor,
        }}
      />
    </Button>
  );
}
