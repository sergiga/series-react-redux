import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSerie } from '../actions';
import Serie from '../views/Serie';
import Header from '../views/Header';
import merge from 'lodash/merge';

class SeriePage extends Component {
  static propTypes = {
    serie: PropTypes.object,
    loadSerie: PropTypes.func.isRequired
  }
  
  componentWillMount() {
    const serieID = this.props.match.params.id;

    this.props.loadSerie(serieID, ['cast']);
  }

  render() {
    const { serie } = this.props;

    const serieComponent = serie.id ? <Serie {...serie} /> : null;

    return (
      <div className='serie-page'>
        <Header
          left={<Link to='/'>HOME</Link>} />
        {serieComponent}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { series, actors }
  } = state;

  const serieID = ownProps.match.params.id;
  let serie = merge({}, series[serieID]);

  if(serie && serie.cast) {
    serie.cast = serie.cast.map(castID => actors[castID]);
  }

  return {
    serie
  }
}

export default connect(
  mapStateToProps,
  {
    loadSerie
  }
)(SeriePage);