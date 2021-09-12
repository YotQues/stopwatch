import React from 'react';
import { RunState } from '../../../state/States';

import { Button, ButtonStyles } from '../Button';
import { PlayPause } from '../../Icons';

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

  const styles: ButtonStyles = RunState.PAUSED
    ? {
        bgColor: 'green-400',
        activeBgColor: 'green-500',
        textColor: 'gray-200',
        activeTextColor: 'gray-100',
      }
    : {
        bgColor: 'yellow-300',
        activeBgColor: 'yellow-400',
        textColor: 'gray-900',
        activeTextColor: 'gray-800',
      };

  const textColorIndicator =
    state === RunState.PAUSED
      ? 'text-gray-200 group-hover:text-gray-100'
      : 'text-gray-900 group-hover:text-gray-800';

  const textIndicator = state === RunState.PAUSED ? 'Start' : 'Pause';
  return (
    <Button styles={styles} onClick={clickHandler} label={textIndicator}>
      <PlayPause className={textColorIndicator} state={state} />
    </Button>
  );
}
