import React, { FunctionComponent, ReactComponentElement } from 'react';
import { RunState } from '../../../state/States';

import { Button } from '../Button';
// import { Play } from '../../HeroIcons';
import { PlayPause } from '../../Icons';

export interface StartPauseButtonProps extends React.ComponentProps<'button'> {
  state: RunState;
  onRunClick(): void;
  onPauseClick(): void;
  text?: string;
}

export const StartPauseButton: FunctionComponent<StartPauseButtonProps> = (
  props
): JSX.Element => {
  const { text, state, onRunClick, onPauseClick, children } = props;
  const clickHandler = state === RunState.PAUSED ? onRunClick : onPauseClick;

  const bgColorIndicator =
    state === RunState.PAUSED
      ? 'bg-green-400 hover:bg-green-500'
      : 'bg-yellow-400 hover:bg-yellow-300';
  const textColorIndicator =
    state === RunState.PAUSED
      ? 'text-gray-200 group-hover:text-gray-100'
      : 'text-gray-800 group-hover:text-gray-900';

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
};
