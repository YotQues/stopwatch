import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { reducer } from './state/reducers';

import { ButtonStack } from './components/Buttons';
import { Stopwatch } from './components/Watch';
import { StopwatchState } from './state/reducers/watchReducer';
import {
  setElapsedTime,
  setIsRun,
  setIntervalId,
  WatchActions,
} from './state/actions';

interface PlainAppProps {
  isRun: boolean;
  setIsRun: (isRun: boolean) => void;
  setElapsedTime: (time: number) => void;
}

export function PlainApp(): JSX.Element {
  const [isRun, setIsRun] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  // useEffect(() => {}, []);

  const eventHandlers = {
    onStartClick: () => {
      setIsRun(true);
    },
    onPauseClick: () => {
      setIsRun(false);
    },
    onLapClick: () => {
      console.log('lap');
    },
    onResetClick: () => {
      setElapsedTime(0);
    },
    onStopClick: () => {
      setIsRun(false);
      setElapsedTime(0);
    },
  };
  const states = {
    isRun,
    elapsedTime,
    intervalId,
  };

  const stateSetters = {
    setIsRun,
    setElapsedTime,
    setIntervalId,
  };

  return (
    <div className="p-8">
      <Stopwatch /* {...states} {...stateSetters} */ />
      <ButtonStack state={{ isRun }} {...eventHandlers} />
    </div>
  );
}

const mapStateToProps = ({ isRun }: StopwatchState) => {
  return {
    isRun,
  };
};

export const App = connect(mapStateToProps, {
  // setIntervalId,
  setIsRun,
  setElapsedTime,
})(PlainApp);
