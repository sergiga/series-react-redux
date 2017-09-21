import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail(props) {
  const { image, title } = props;

  return (
    <div className='thumbnail'>
      <img className='thumbnail-image' src={image} alt='Thumbnail'></img>
      <div className='thumbnail-content'>
        <div className='thumbnail-title'>{title}</div>
      </div>
    </div>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Thumbnail;