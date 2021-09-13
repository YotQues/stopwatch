import { combineReducers } from 'redux';

import { watchReducer } from './watchReducer';

export const reducer = combineReducers({
  stopwatch: watchReducer,
});
