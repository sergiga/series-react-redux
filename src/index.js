import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middleware/api';
import rootReducer from './reducers/index';
import Root from './containers/Root';
import './styles/index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    apiMiddleware
  )
);

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
);