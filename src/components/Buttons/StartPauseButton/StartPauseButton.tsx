import React from 'react';
import { RunState } from '../../../state/States';

import { StartButton } from '../StartButton';
import { PauseButton } from '../PauseButton';

export interface StartPauseButtonProps extends React.ComponentProps<'button'> {
  state: RunState;
  onStartClick(): void;
  onPauseClick(): void;
}

export function StartPauseButton({
  state,
  onStartClick,
  onPauseClick,
}: StartPauseButtonProps): JSX.Element {
  return state === RunState.PAUSED ? (
    <StartButton onClick={onStartClick} />
  ) : (
    <PauseButton onClick={onPauseClick} />
  );
}
