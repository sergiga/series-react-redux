import React from 'react';

function MainContainer(props) {
  const { children } = props;
  
  return (
    <div className='container main-container'>
      {children}
    </div>
  );
}

export default MainContainer;