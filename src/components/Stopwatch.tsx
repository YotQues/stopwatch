import { useDispatch, useSelector } from 'react-redux';

import { WatchActions } from '../state/actions';
import { State, IntervalId } from '../state/reducers/watchReducer';

import * as TimerUtils from '../utils/timerUtils';

import { Timer } from './Timer';
import { ButtonStack } from './Buttons';

export function Stopwatch(): JSX.Element {
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

  const width = 'w-96 lg:w-128';

  return (
    <div
      className={`ml-2 p-2 ${width} flex flex-col items-center bg-gradient-to-b from-indigo-600 to-indigo-300 rounded-md transition-shadow shadow-md hover:shadow-xl`}
    >
      <Timer time={state.elapsedTime} />
      <ButtonStack state={state.intervalId} {...eventHandlers} />
    </div>
  );
}
