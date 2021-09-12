import React from 'react';

import { Button, ButtonStyles } from './Button';
import { Play } from '../Icons';

interface StartButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void;
}

export function StartButton({ onClick }: StartButtonProps): JSX.Element {
  const styles: ButtonStyles = {
    bgColor: 'green-400',
    activeBgColor: 'green-500',
    textColor: 'gray-200',
    activeTextColor: 'gray-100',
  };
  return (
    <Button styles={styles} onClick={onClick} label="Start">
      <Play
        styles={{
          color: styles.textColor,
          activeColor: styles.activeTextColor,
          width: '4/5',
        }}
      />
    </Button>
  );
}
