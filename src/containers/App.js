import React from 'react';
import MainContainer from '../views/MainContainer';

const App = (props) => (
  <MainContainer>
    { props.children }
  </MainContainer>
)

export default App;