import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  renderLoadMore(event) {
    if(!event) { return null }

    return(
      <div className='grid--load-more'>
        <button onClick={event}>LOAD MORE</button>
      </div>
    );
  }

  render() {
    const { items, renderItem, onLoadMoreClick } = this.props;

    return(
      <div className='grid'>
        <div className='grid-container'>
          {items.map(item => <div key={item.id} className='grid-item'>{renderItem(item)}</div>)}    
        </div>
        {this.renderLoadMore(onLoadMoreClick)}
      </div>
    );
  }
}

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
}

export default Grid;