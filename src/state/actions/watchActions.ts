import { Action, ActionCreator } from 'redux';

import { WatchActions } from './actions';

export interface StopwatchState {
  isRun: boolean;
  elapsedTime: number;
  intervalId: number | undefined;
}

type WatchAction = {
  type: WatchActions;
};

export const StartRun: ActionCreator<WatchAction> = (): WatchAction => {
  return {
    type: WatchActions.START_RUN,
  };
};
export const PauseRun = (): WatchAction => {
  return {
    type: WatchActions.PAUSE_RUN,
  };
};

export const StopRun = (): WatchAction => {
  return {
    type: WatchActions.STOP_RUN,
  };
};
export const RestartRun = (): WatchAction => {
  return {
    type: WatchActions.STOP_RUN,
  };
};
