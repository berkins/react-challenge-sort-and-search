// import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { selectActiveUser, fetchUsers } from './actions';
import reducers from './reducers';
import App from './App';

const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

store.dispatch(fetchUsers());

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
