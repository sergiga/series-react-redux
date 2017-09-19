import React, { Component } from 'react';

class Grid extends Component {
  
  renderItems(items) {
    return items.map((item, i) => { 
      <div 
        key={item.id || i}
        className='grid-item'>
          {item.component}
      </div>
    });
  }

  render() {
    const { renderItems } = this.props;
    return(
      <div className='grid-container'>
        {renderItems(renderItems)}    
      </div>
    );
  }
}