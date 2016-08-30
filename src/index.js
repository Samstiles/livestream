import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './app';
import initialState from './state';
import { appReducer } from './reducers';

const middleware = applyMiddleware(logger(), promise());

const reducer = combineReducers({
  state: appReducer
}, middleware);

const state = createStore(reducer, {}, middleware);

render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// state.subscribe((state) => {
//   console.log('State changed!');
// });
// state.dispatch({ type: 'CHANGE_NAME', payload: 'Will' });
