import React from 'react';

function Thumbnail(props) {
  const { image, title, meta } = props;

  return (
    <div className='thumbnail'>
      <img className='thumbnail-image' src={image} alt='Thumbnail'></img>
      <div className='thumbnail-content'>
        <span className='thumbnail-title'>{title}</span>
        <span className='thumbnail-meta'>{meta}</span>
      </div>
    </div>
  );
}

export default Thumbnail;