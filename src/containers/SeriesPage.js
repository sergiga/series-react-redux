import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSeriePage } from '../actions';
import Grid from '../views/Grid';
import Thumbnail from '../views/Thumbnail';

class SeriesPage extends Component {
  static propTypes = {
    allSeries: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
  }
  
  componentWillMount() {
    this.props.loadSeriePage();
  }

  onLoadMoreClick() {
    const { loadSeriePage, nextPage } = this.props;
    loadSeriePage(nextPage);
  }

  renderSerie(serie) {
    return (
      <Thumbnail
        image={serie.image.medium}
        title={serie.name}
        meta={serie.rating.average} />
    );
  }

  render() {
    const { allSeries } = this.props;

    return (
      <Grid
        items={allSeries}
        renderItem={this.renderSerie} 
        onLoadMoreClick={this.onLoadMoreClick} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    serieList: { pagination },
    entities: { series }
  } = state;
  
  const allSeries = pagination.series.map(id => series[id]);

  return {
    allSeries,
    nextPage: pagination.nextPage
  }
}

export default connect(
  mapStateToProps,
  {
    loadSeriePage
  }
)(SeriesPage);