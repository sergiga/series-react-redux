import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail(props) {
  const { image, title } = props;

  const imageComponent = image 
    ? <img className='thumbnail-image' src={image} alt='Thumbnail'></img>
    : <div className='thumbnail-image-alt'>No image</div>

  return (
    <div className='thumbnail'>
      {imageComponent}  
      <div className='thumbnail-content'>
        <div className='thumbnail-title'>{title}</div>
      </div>
    </div>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Thumbnail;