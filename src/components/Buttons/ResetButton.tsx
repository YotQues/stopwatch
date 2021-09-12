import React from 'react';

import { Button, ButtonStyles } from './Button';
import { Refresh } from '../Icons';

interface ResetButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void;
}

export function ResetButton({ onClick }: ResetButtonProps): JSX.Element {
  const styles: ButtonStyles = {
    bgColor: 'blue-300',
    activeBgColor: 'blue-400',
    textColor: 'gray-200',
    activeTextColor: 'gray-100',
  };
  return (
    <Button styles={styles} onClick={onClick} label="Reset">
      <Refresh
        styles={{
          color: styles.textColor,
          activeColor: styles.activeTextColor,
          width: '4/5',
        }}
      />
    </Button>
  );
}
