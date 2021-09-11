import React from 'react';

import {
  PlayIcon as OutlinePlay,
  PauseIcon as OutlinePause,
} from '@heroicons/react/outline';

import {
  PlayIcon as SolidPlay,
  PauseIcon as SolidPause,
} from '@heroicons/react/solid';

import { RunState } from '../../state/States';

import { IconProps } from './Types';

interface PlayPauseProps extends IconProps {
  state: RunState;
}

export const PlayPause: React.FunctionComponent<PlayPauseProps> = ({
  solid,
  className,
  state,
}): JSX.Element => {
  const divWidth = 'w-4/5';
  const customClassName = `w-full ${className}`;

  function renderSolid() {
    return state === RunState.PAUSED ? (
      <SolidPlay className={customClassName} />
    ) : (
      <SolidPause className={customClassName} />
    );
  }

  function renderOutline() {
    return state === RunState.PAUSED ? (
      <OutlinePlay className={customClassName} />
    ) : (
      <OutlinePause className={customClassName} />
    );
  }

  return (
    <div className={divWidth}>{solid ? renderSolid() : renderOutline()}</div>
  );
};

export default PlayPause;
