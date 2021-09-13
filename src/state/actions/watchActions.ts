import { ActionCreator } from 'redux';

import { WatchActions } from './actions';

export type WatchAction = {
  type: WatchActions;
  intervalId?: number;
};

export const StartRun: ActionCreator<WatchAction> = (
  intervalId: number
): WatchAction => {
  return {
    type: WatchActions.START_RUN,
    intervalId,
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
