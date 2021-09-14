import { AnyAction } from 'redux';
import { WatchAction, WatchActions } from '../actions';

export type IntervalId = number | undefined;

export interface StopwatchState {
  isRun: boolean;
  elapsedTime: number;
  intervalId: number | undefined;
}

export interface LapsState {

}



export type WatchDispatchType = (args: WatchAction<any>) => WatchAction<any>;

const initialState = {
  isRun: false,
  elapsedTime: 0,
  intervalId: undefined,
};

export const reducer = (
  state: StopwatchState = initialState,
  action: AnyAction
): StopwatchState => {
  const { SET_TIME, PAUSE, START, STOP, RESET } = WatchActions;

  switch (action.type) {
    case START:
      return { ...state, intervalId: action.payload.intervalId };
    case PAUSE:
      return { ...state, intervalId: undefined };
    case STOP:
      return state.intervalId
        ? {
            ...state,
            elapsedTime: 0,
            intervalId: undefined,
          }
        : { ...state, elapsedTime: 0 };
    case RESET:
      return { ...state, elapsedTime: 0 };
    case SET_TIME:
      return { ...state, elapsedTime: action.payload.elapsedTime };
    default:
      return state;
  }
};
