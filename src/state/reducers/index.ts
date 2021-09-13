import { combineReducers } from 'redux';

import { reducer as watchReducer } from './watchReducer';

export const reducer = combineReducers({
  stopwatch: watchReducer,
});
