import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSearchSerieClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      serie: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { serie } = this.state;
    const { onSearchSerieClick } = this.props;
    
    return (
      <div className='search-bar'>
        <input 
          name='serie' 
          type='text'
          value={serie}
          onChange={this.handleInputChange} />
        <button onClick={ () => onSearchSerieClick(serie) } >SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;