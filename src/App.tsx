import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { reducer } from './state/reducers';

import { StartRun, PauseRun, RestartRun, StopRun } from './state/actions';

import { ButtonStack } from './components/Buttons';
import { Stopwatch } from './components/Watch';
import { WatchActions } from './state/actions';
import { StopwatchState } from './state/reducers/watchReducer';

interface PlainAppProps extends StopwatchState {
  StartRun: (intervalId: number) => void;
  PauseRun: () => void;
  RestartRun: () => void;
  StopRun: () => void;
}

export function PlainApp({
  isRun,
  elapsedTime,
  intervalId,
  PauseRun,
  RestartRun,
  StartRun,
  StopRun,
}: PlainAppProps): JSX.Element {
  let stopwatch: Stopwatch;
  stopwatch = new Stopwatch(
    { isRun, elapsedTime, intervalId },
    { PauseRun, RestartRun, StartRun, StopRun }
  );
  useEffect(() => {}, []);

  const eventHandlers = {
    onStartClick: () => {
      console.log('running');
    },
    onPauseClick: () => {
      console.log('paused');
    },
    onLapClick: () => {
      console.log('lap');
    },
    onResetClick: () => {
      console.log('Refresh');
    },
    onStopClick: () => {
      console.log('Stop');
    },
  };

  return (
    <div className="p-8">
      <ButtonStack state={{ isRun }} {...eventHandlers} />
    </div>
  );
}

