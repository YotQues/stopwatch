import { WatchAction, WatchActions } from '../actions';

export interface StopwatchState {
  isRun: boolean;
  elapsedTime: number;
  intervalId: number | undefined;
}

export type WatchDispatchType = (args: WatchAction) => WatchAction;

const initialState = {
  isRun: false,
  elapsedTime: 0,
  intervalId: undefined,
};

const reducer = (
  state: StopwatchState = initialState,
  action: WatchAction
): StopwatchState => {
  switch (action.type) {
    case WatchActions.START_RUN:
      return { ...state, isRun: true, intervalId: action.intervalId };

    case WatchActions.PAUSE_RUN:
      return { ...state, isRun: false, intervalId: undefined };

    case WatchActions.RESET_RUN:
      return { ...state, elapsedTime: 0 };

    case WatchActions.STOP_RUN:
      return { ...state, elapsedTime: 0, intervalId: undefined, isRun: false };

    default:
      return state;
  }
};

export { reducer as watchReducer };
