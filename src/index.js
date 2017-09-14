import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import App from './views/App';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);