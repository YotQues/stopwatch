import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, Store, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './state/reducers';

import './index.css';

import { App } from './App';

// 👇 A fix for fast refresh issue
if (module.hot) module.hot.accept();

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
Store<
  StopwatchState,
  WatchAction<any> & {
    dispatch: WatchDispatchType;
  }
>
*/
