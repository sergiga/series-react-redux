import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSeriePage } from '../actions';
import Grid from '../views/Grid';

class SeriesPage extends Component {
  static propTypes = {
    allSeries: PropTypes.array.isRequired
  }
  
  componentWillMount() {
    this.props.loadSeriePage();
  }

  renderSerie(serie) {
    return (
      <div key={serie.id}>
        {serie.name}
      </div>
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