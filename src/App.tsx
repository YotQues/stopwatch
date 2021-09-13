import React, { useEffect } from 'react';
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

function PlainApp({
  isRun,
  setIsRun,
  setElapsedTime,
}: PlainAppProps): JSX.Element {
  useEffect(() => {}, []);

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
    onResetClick: () => {},
    onStopClick: () => {
      setIsRun(false);
      setElapsedTime(0);
    },
  };

  return (
    <div className="p-8">
      <ButtonStack state={{ isRun }} {...eventHandlers} />
      <Stopwatch />
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
