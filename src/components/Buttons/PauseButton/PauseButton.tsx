import React from 'react';

import { Button, ButtonStyles } from '../Button';
import { Pause } from '../../Icons';

interface PauseButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void;
}

export function PauseButton({ onClick }: PauseButtonProps): JSX.Element {
  const styles: ButtonStyles = {
    bgColor: 'yellow-300',
    activeBgColor: 'yellow-400',
    textColor: 'gray-900',
    activeTextColor: 'gray-800',
  };
  return (
    <Button styles={styles} onClick={onClick} label="Pause">
      <Pause
        styles={{
          color: styles.textColor,
          activeColor: styles.activeTextColor,
          width: '4/5',
        }}
      />
    </Button>
  );
}
