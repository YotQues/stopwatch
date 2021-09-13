import { WatchAction, WatchActions } from '../actions';

export interface StopwatchState {
  isRun: boolean;
  elapsedTime: number;
  intervalId: number | undefined;
}

export type WatchDispatchType = (args: WatchAction<any>) => WatchAction<any>;

const initialState = {
  isRun: false,
  elapsedTime: 0,
  intervalId: undefined,
};

const reducer = (
  state: StopwatchState = initialState,
  action: WatchAction<any>
): StopwatchState => {
  switch (action.type) {
    case WatchActions.SET_TIME:
      return { ...state, elapsedTime: action.payload };

    case WatchActions.SET_RUN:
      return { ...state, isRun: action.payload };

    case WatchActions.SET_INTERVAL_ID:
      return { ...state, intervalId: action.payload };

    default:
      return state;
  }
};

export { reducer as watchReducer };
