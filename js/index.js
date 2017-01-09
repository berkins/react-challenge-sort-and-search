// import 'babel-core/polyfill';
import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { selectActiveUser, fetchUsers } from './actions';
import reducers from './reducers';
import App from './components/App';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchUsers());
store.dispatch(selectActiveUser(0));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
