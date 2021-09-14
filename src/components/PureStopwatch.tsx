import { connect, useDispatch, useSelector } from 'react-redux';

import { WatchActions } from '../state/actions';
import { State, IntervalId } from '../state/reducers/watchReducer';

import * as TimerUtils from '../utils/timerUtils';

import { Timer } from './Timer';
import { ButtonStack } from './Buttons';
import { useEffect } from 'react';

export function PureStopwatch(): JSX.Element {
  const state = {
    elapsedTime: useSelector((state: State) => state.stopwatch.elapsedTime),
    isRun: useSelector((state: State) => state.stopwatch.isRun),
    intervalId: useSelector((state: State) => state.stopwatch.intervalId),
  };

  const dispatch = useDispatch();

  const dispatchStart = (intervalId: IntervalId): void => {
    dispatch({
      type: WatchActions.START,
      payload: { intervalId },
    });
  };
  const setElapsedTime = (elapsedTime: number): void => {
    dispatch({
      type: WatchActions.SET_TIME,
      payload: { elapsedTime },
    });
  };

  useEffect(() => {
    // 👇 if time is larger than 999hrs, 59min, 59sec,
    // 990ms stop the watch and give a message to the user.
    if (state.intervalId && state.elapsedTime < 3599999099) {
      stopRun();
      alert(
        "Well, it's been a while.. we figure you are'nt here so we stopped the timer for you..."
      );
    }
  });

  const eventHandlers = {
    onStartClick: () => startRun(),
    onPauseClick: () => {
      pauseRun();
    },
    onLapClick: () => {
      console.log('lap');
    },
    onResetClick: () => {
      resetRun();
    },
    onStopClick: () => {
      stopRun();
    },
  };

  const startRun = () => {
    TimerUtils.onStart(
      state.elapsedTime,
      state.intervalId,
      dispatchStart,
      setElapsedTime
    );
  };

  const pauseRun = () => {
    clearInterval(state.intervalId);
    dispatch({
      type: WatchActions.PAUSE,
    });
  };
  const stopRun = () => {
    clearInterval(state.intervalId);
    dispatch({
      type: WatchActions.STOP,
    });
  };

  const resetRun = () => {
    TimerUtils.onReset(state.intervalId, dispatchStart, setElapsedTime);
  };

  const width =
    'landscape:w-1/2 landscape:h-full portrait:w-full portrait:h-1/2';

  const height = 'portrait:h-3/5';

  const marginAndPadding =
    'py-3 portrait:py-1 m-0 md-portrait:mx-auto lg:self-center ';

  const flex = 'flex flex-col items-center justify-around ';

  return (
    <div
      className={`${width} ${height} ${marginAndPadding} ${flex}  bg-gradient-to-b from-indigo-600 to-indigo-300 landscape:rounded-none md:rounded-md transition-shadow shadow-2xl`}
    >
      <Timer time={state.elapsedTime} />
      <ButtonStack state={state.intervalId} {...eventHandlers} />
    </div>
  );
}
