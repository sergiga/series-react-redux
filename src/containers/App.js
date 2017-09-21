import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../views/MainContainer';

const App = (props) => (
  <MainContainer>
    { props.children }
  </MainContainer>
)

App.propTypes = {
  children: PropTypes.node
}

export default App;