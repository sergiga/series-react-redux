import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middleware/api';
import rootReducer from './reducers/index';
import { searchSerie } from './actions/index';
import App from './views/App';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    apiMiddleware
  )
);

store
  .dispatch(searchSerie('girls'))
  .then(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);