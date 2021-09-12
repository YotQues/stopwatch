import React from 'react';
import { RunState } from '../../../state/States';

import { Button, ButtonStyles } from '../Button';

export interface StartPauseButtonProps extends React.ComponentProps<'button'> {
  state: RunState;
  onRunClick(): void;
  onPauseClick(): void;
}

export function StartPauseButton({
  state,
  onRunClick,
  onPauseClick,
}: StartPauseButtonProps): JSX.Element {
  const clickHandler = state === RunState.PAUSED ? onRunClick : onPauseClick;

  const styles: ButtonStyles = {
    bgColor: 'green-400',
    activeBgColor: 'green-500',
    textColor: 'gray-200',
    activeTextColor: 'gray-100',
  };
  return (<Button styles={styles} onClick={clickHandler} label="Start">
  </Button>);
}
