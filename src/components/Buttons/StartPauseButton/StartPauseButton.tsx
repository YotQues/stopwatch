import React from 'react';
import { RunState } from '../../../state/States';

import { Button } from '../Button';
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

  const bgColorIndicator =
    state === RunState.PAUSED
      ? 'bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
      : 'bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75';
  const textColorIndicator =
    state === RunState.PAUSED
      ? 'text-gray-200 group-hover:text-gray-100'
      : 'text-gray-900 group-hover:text-gray-800';

  const textIndicator = state === RunState.PAUSED ? 'Start' : 'Pause';
  return (
    <Button
      className={bgColorIndicator}
      onClick={clickHandler}
      label={{
        text: textIndicator,
        style: textColorIndicator,
      }}
    >
      <PlayPause className={textColorIndicator} state={state} />
    </Button>
  );
}
