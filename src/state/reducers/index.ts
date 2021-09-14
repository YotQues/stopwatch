import { combineReducers } from 'redux';

import { reducer as watchReducer, StopwatchState } from './watchReducer';
import { lapsReducer, LapsState } from './lapsReducer';

export const reducer = combineReducers({
  stopwatch: watchReducer,
  laps: lapsReducer,
});

export interface State {
  stopwatch: StopwatchState;
  laps: LapsState;
}
