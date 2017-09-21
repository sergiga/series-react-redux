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
  
  componentWillMount() {
    this.props.loadSeriePage();
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
        renderItem={this.renderSerie} />
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
    allSeries
  }
}

export default connect(
  mapStateToProps,
  {
    loadSeriePage
  }
)(SeriesPage);