import React from 'react';

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

export default Thumbnail;