import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './state/reducers';

import './index.css';

import { App } from './App';
import {
  StopwatchState,
  WatchDispatchType,
} from './state/reducers/watchReducer';
import { WatchAction } from './state/actions';

// 👇 A fix for fast refresh issue
if (module.hot) module.hot.accept();

const store: Store<
  StopwatchState,
  WatchAction<any> & {
    dispatch: WatchDispatchType;
  }
> = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
