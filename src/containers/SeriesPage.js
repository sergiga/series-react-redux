import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSeriePage, searchSerie, showAllSeries } from '../actions';
import Grid from '../views/Grid';
import Thumbnail from '../views/Thumbnail';
import SearchBar from '../views/SearchBar';
import Header from '../views/Header';

class SeriesPage extends Component {
  static propTypes = {
    allSeries: PropTypes.array.isRequired,
    nextPage: PropTypes.number.isRequired,
    loadSeriePage: PropTypes.func.isRequired, 
    searchSerie: PropTypes.func.isRequired,
    showAllSeries: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
    this.onSearchSerieClick = this.onSearchSerieClick.bind(this);
  }
  
  componentWillMount() {
    this.props.loadSeriePage();
  }

  onLoadMoreClick() {
    const { loadSeriePage, nextPage } = this.props;
    loadSeriePage(nextPage);
  }

  onSearchSerieClick(query) {
    const { searchSerie } = this.props;
    const serie = query.toLowerCase().replace(/ /g, '-');
    searchSerie(serie);
  }

  renderSerie(serie) {
    const image = serie.image ? serie.image.medium : null;

    return (
      <Link to={'/series/' + serie.id}>
        <Thumbnail
          image={image}
          title={serie.name} />
      </Link>
    );
  }

  render() {
    const { allSeries, showSearchResults, showAllSeries } = this.props;

    return (
      <div>
        <Header
          left={<button onClick={showAllSeries}>Show All Series</button>}
          right={<SearchBar onSearchSerieClick={this.onSearchSerieClick} />} />
        <Grid
          items={allSeries}
          renderItem={this.renderSerie} 
          onLoadMoreClick={showSearchResults ? undefined : this.onLoadMoreClick} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    serieList: { pagination, searchResults, showSearchResults },
    entities: { series }
  } = state;
  
  const allSeries = showSearchResults
    ? searchResults.map(id => series[id])
    : pagination.series.map(id => series[id]);

  return {
    allSeries,
    nextPage: pagination.nextPage,
    showSearchResults
  }
}

export default connect(
  mapStateToProps,
  {
    loadSeriePage, 
    searchSerie,
    showAllSeries
  }
)(SeriesPage);