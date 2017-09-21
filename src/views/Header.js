import React from 'react';
import PropType from 'prop-types';

function Header(props) {
  const { left, right } = props;

  return (
    <div className='header'>
      {left}
      {right}
    </div>
  );
}

Header.propTypes = {
  left: PropType.element,
  right: PropType.element
}

export default Header;