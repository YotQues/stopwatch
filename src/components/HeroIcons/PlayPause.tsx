import React, { FunctionComponent } from 'react';

import {
  PlayIcon as OutlinePlay,
  PauseIcon as OutlinePause,
} from '@heroicons/react/outline';

import {
  PlayIcon as SolidPlay,
  PauseIcon as SolidPause,
} from '@heroicons/react/solid';

import {} from '@heroicons/react/outline';

import { RunState } from '../../state/States';

import { IconProps } from './Types';

interface PlayPauseProps extends IconProps {
  state: RunState;
}

export function PlayPause({
  solid,
  className,
  state,
}: PlayPauseProps): JSX.Element {
  if (solid) {
    return state === RunState.PAUSED ? (
      <SolidPlay className={className} />
    ) : (
      <SolidPause className={className} />
    );
  }

  return state === RunState.PAUSED ? (
    <SolidPlay className={className} />
  ) : (
    <SolidPause className={className} />
  );
}

export default PlayPause;
