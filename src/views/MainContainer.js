import React from 'react';
import PropTypes from 'prop-types';

function MainContainer(props) {
  const { children } = props;
  
  return (
    <div className='container main-container'>
      {children}
    </div>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node
}

export default MainContainer;