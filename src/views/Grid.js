import React from 'react';

function Grid (props) {
  const { items, renderItem } = props;

  return(
    <div className='grid-container'>
      {items.map(item => <div key={item.id} className='grid-item'>{renderItem(item)}</div>)}    
    </div>
  );
}

export default Grid;