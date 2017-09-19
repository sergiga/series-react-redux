import React from 'react';
import PropTypes from 'prop-types';

function Grid (props) {
  const { items, renderItem } = props;

  return(
    <div className='grid-container'>
      {items.map(item => <div key={item.id} className='grid-item'>{renderItem(item)}</div>)}    
    </div>
  );
}

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
}

export default Grid;