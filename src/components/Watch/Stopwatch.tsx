import { useDispatch, useSelector } from 'react-redux';

import { WatchActions } from '../../state/actions';
import { State, IntervalId } from '../../state/reducers/watchReducer';

import * as TimerUtils from '../../utils/timerUtils';

import { Timer } from './Timer';
import { ButtonStack } from '../Buttons';

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
      // setElapsedTime(0);
    },
    onStopClick: () => {},
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

  const restartRun = () => {
    clearInterval(state.intervalId);
    dispatch({ type: WatchActions.SET_TIME, payload: 0 });
  };

  return (
    <div>
      <Timer time={state.elapsedTime} />
      <ButtonStack state={state.intervalId} {...eventHandlers} />
    </div>
  );
}
