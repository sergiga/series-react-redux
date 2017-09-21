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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { serie } = this.state;
    const { onSearchSerieClick } = this.props;
    onSearchSerieClick(serie);
  }

  render() {
    const { serie } = this.state;
    
    return (
      <form className='search-bar' onSubmit={this.handleSubmit} >
        <button type='submit'><i className='fa fa-search'></i></button>
        <input 
          name='serie' 
          type='text'
          value={serie}
          onChange={this.handleInputChange} />
      </form>
    );
  }
}

export default SearchBar;