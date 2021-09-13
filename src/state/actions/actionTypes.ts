export type WatchAction<T> = {
  type: WatchActions;
  payload: T;
};

export enum WatchActions {
  SET_TIME = 'SET_TIME',
  START = 'START',
  STOP = 'STOP',
  PAUSE = 'PAUSE',
}

export enum LapActions {
  ADD_LAP = 'ADD_LAP',
  DELETE_LAPS = 'DELETE_LAPS',
}
