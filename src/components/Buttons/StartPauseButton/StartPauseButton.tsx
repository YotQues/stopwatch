import React, { FunctionComponent } from 'react';
import { RunState } from '../../../state/States';

import { Button } from '../Button';
import { Play } from '../../HeroIcons';

export interface StartPauseButtonProps {
  state: RunState;
  onRunClick(): void;
  onPauseClick(): void;
}

export const StartPauseButton: FunctionComponent<StartPauseButtonProps> = ({
  onRunClick,
  onPauseClick,
  state,
}): JSX.Element => {
  const clickHandler = state === RunState.PAUSED ? onRunClick : onPauseClick;

  const colorIndicator =
    state === RunState.PAUSED
      ? 'bg-green-400 text-white'
      : 'bg-yellow-400 text-black';

  // const iconIndicator = state === RunState.PAUSED ?

  const textIndicator = state === RunState.PAUSED ? 'Start' : 'Pause';
  return (
    <Button
      className={`text-center px-8 py-3 ${colorIndicator}`}
      onClick={clickHandler}
    >
      <Play />
      {textIndicator}
    </Button>
  );
};
