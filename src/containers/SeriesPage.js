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
    pagination,
    entities: { series }
  } = state

  const seriesPagination = pagination.series.map(id => series[id]);

  return {
    seriesPagination
  }
}

export default connect(
  mapStateToProps,
  {
    loadSeriePage
  }
)(SeriesPage);