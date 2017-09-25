import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import SeriesPage from './SeriesPage';
import Serie from './SeriePage';

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <Switch>
        <Route name='serie' path="/series/:id" component={ Serie }/>
        <Route name='series' path="/" component={ SeriesPage }/>
      </Switch>
    </App>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;