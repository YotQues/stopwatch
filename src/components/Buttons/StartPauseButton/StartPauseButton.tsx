import React, { FunctionComponent } from 'react';
import { RunState } from '../../../state/States';

import { Button } from '../Button';
// import { Play } from '../../HeroIcons';
import { PlayIcon, PauseIcon } from '@heroicons/react/outline';

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
      ? 'bg-green-400 text-white hover:bg-green-300 hover:text-green-800'
      : 'bg-yellow-400 text-black hover:bg-yellow-300 hover:text-gray-800';

  const iconIndicator =
    state === RunState.PAUSED ? (
      <PlayIcon className={`w-100`} />
    ) : (
      <PauseIcon className={`w-100`} />
    );

  const textIndicator = state === RunState.PAUSED ? 'Start' : 'Pause';
  return (
    <Button
      className={`w-16 h-16 flex justify-center items-center ${colorIndicator}`}
      onClick={clickHandler}
    >
      {iconIndicator}
      {/* {textIndicator} */}
    </Button>
  );
};
