import React from 'react';

import { Button, ButtonStyles } from './Button';
import { Stop } from '../Icons';

interface StopButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void;
}

export function StopButton({ onClick }: StopButtonProps): JSX.Element {
  const styles: ButtonStyles = {
    bgColor: 'red-500',
    activeBgColor: 'red-600',
    textColor: 'gray-200',
    activeTextColor: 'gray-100',
  };
  return (
    <Button styles={styles} onClick={onClick} label="Stop">
      <Stop
        styles={{
          color: styles.textColor,
          activeColor: styles.activeTextColor,
          width: '4/5',
        }}
      />
    </Button>
  );
}
