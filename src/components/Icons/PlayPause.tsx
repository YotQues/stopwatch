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
  const customClassName = `w-12 ${className}`;
  if (solid) {
    return state === RunState.PAUSED ? (
      <div>
        <SolidPlay className={customClassName} />
      </div>
    ) : (
      <div>
        <SolidPause className={customClassName} />
      </div>
    );
  }

  return state === RunState.PAUSED ? (
    <div>
      <OutlinePlay className={customClassName} />
    </div>
  ) : (
    <div>
      <OutlinePause className={customClassName} />
    </div>
  );
};

export default PlayPause;
