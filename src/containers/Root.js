import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import App from '../views/App';
import SeriesPage from './SeriesPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <Switch>
        <Route name='series' path="/" component={ SeriesPage }/>
        {/*<Route name='serie' path="/series/:id" component={ Serie }/>*/}
      </Switch>
    </App>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;