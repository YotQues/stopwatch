import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setIntervalId, setElapsedTime } from '../../state/actions';

import { StopwatchState } from '../../state/reducers/watchReducer';

import * as TimerUtils from '../../utils/timerUtils';

interface PlainStopwatchProps {
  isRun: boolean;
  elapsedTime: number;
  intervalId: number | undefined;
  setIntervalId: (intervalId: number | undefined) => void;
  setElapsedTime: (time: number) => void;
}

export function PlainStopwatch({
  isRun,
  intervalId,
  setIntervalId,
  setElapsedTime,
  elapsedTime,
}: PlainStopwatchProps): JSX.Element {
  useEffect(() => {
    if (isRun) startRun();
    if (isRun && elapsedTime === 0) pauseRun();
  }, [isRun]);

  let formattedTime = TimerUtils.FormatTime(elapsedTime);

  const startRun = () => {
    TimerUtils.onStart(elapsedTime, intervalId, setIntervalId, setElapsedTime);
  };
  const pauseRun = () => {
    clearInterval(intervalId);
  };

  return (
    <div className="flex ">
      <h2 className="text-2xl cols-span-1">{formattedTime.hours}</h2>
      <h3 className="text-2xl cols-span-1">:{formattedTime.minutes}</h3>
      <h3 className="text-2xl cols-span-1">:{formattedTime.seconds}</h3>
      <h3 className="text-2xl cols-span-1">.{formattedTime.centSeconds}</h3>
    </div>
  );
}

const mapStateToProps = ({
  isRun,
  elapsedTime,
  intervalId,
}: StopwatchState) => {
  return {
    isRun,
    elapsedTime,
    intervalId,
  };
};

export const Stopwatch = connect(mapStateToProps, {
  setIntervalId,
  setElapsedTime,
})(PlainStopwatch);
