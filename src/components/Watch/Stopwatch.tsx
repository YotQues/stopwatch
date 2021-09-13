import React, { useEffect } from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { setIntervalId, setElapsedTime } from '../../state/actions';

import { StopwatchState } from '../../state/reducers/watchReducer';

import * as TimerUtils from '../../utils/timerUtils';

interface PlainStopwatchProps extends StopwatchState {
  isRun: boolean;
  elapsedTime: number;
  intervalId: number | undefined;
  setIntervalId: (intervalId: number | undefined) => void;
  setElapsedTime: (time: number) => void;
}

function PlainStopwatch({
  isRun,
  elapsedTime,
  intervalId,
  setElapsedTime,
  setIntervalId,
}: PlainStopwatchProps): JSX.Element {
  console.log(elapsedTime);

  useEffect(() => {
    if (isRun) startRun();
    console.log(isRun);
  }, [isRun]);

  let formattedTime = TimerUtils.FormatTime(elapsedTime);

  const startRun = () => {
    TimerUtils.onStart(elapsedTime, setIntervalId, setElapsedTime);
  };

  return (
    <div className="grid grid-cols-4 grid-col ">
      <h3 className="cols-span-1">{formattedTime.hours}</h3>
      <h3 className="cols-span-1">: {formattedTime.minutes}</h3>
      <h3 className="cols-span-1">: {formattedTime.seconds}</h3>
      <h3 className="cols-span-1">: {formattedTime.centSeconds}</h3>
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
