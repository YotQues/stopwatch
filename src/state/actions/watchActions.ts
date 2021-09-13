import { ActionCreator } from 'redux';

import { WatchActions } from './actionTypes';

export type WatchAction<T> = {
  type: WatchActions;
  payload: T;
};

export const setIsRun: ActionCreator<WatchAction<boolean>> = (
  isRun: boolean
) => {
  return {
    type: WatchActions.SET_RUN,
    payload: isRun,
  };
};

export const setIntervalId: ActionCreator<WatchAction<number | undefined>> = (
  intervalId: number
) => {
  return {
    type: WatchActions.SET_INTERVAL_ID,
    payload: intervalId,
  };
};

export const setElapsedTime: ActionCreator<WatchAction<number>> = (
  time: number
) => {
  return {
    type: WatchActions.SET_TIME,
    payload: time,
  };
};
