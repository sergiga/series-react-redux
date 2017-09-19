import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSeriePage } from '../actions';

class SeriesPage extends Component {
  componentWillMount() {
    this.props.loadSeriePage();
  }

  render() {
    return (
      <div>
      </div>
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