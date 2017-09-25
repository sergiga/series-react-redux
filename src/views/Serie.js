import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

class Serie extends Component {
  static propTypes = {
    cast: PropTypes.array,
    genres: PropTypes.array.isRequired,
    image: PropTypes.object,
    name: PropTypes.string.isRequired,
    rating: PropTypes.object,
    summary: PropTypes.string
  }

  renderImage(image) {
    return(image 
      ? <img src={image.medium} alt='Poster'></img>
      : <div className='serie-image-alt'>No image</div>
    );
  }

  renderGenres(genres) {
    return genres.map((g, i) => <div key={i} className='serie-genre-item'>{g}</div>);
  }

  renderActor(actor) {
    const { name } = actor;
    const image = (actor.image 
      ? <img className='actor-image' src={actor.image.medium} alt={name}></img>
      : <div className='actor-image-alt'>No image</div>
    );

    return (
      <div className='actor-overview'>
        {image}
        {name}
      </div>
    );
  }

  flattenCast(cast) {
    if(!cast) { return null; }

    const vArr = cast.map(c => c.id);
    return cast.filter((_, i) => vArr.indexOf(vArr[i]) === i);
  }

  render() {
    const { image, name, genres, rating, cast } = this.props;
    let { summary } = this.props;

    summary = summary.replace(/(<([^>]+)>)/ig, '');

    return(
      <div className='serie'>
        <div className='serie-info'>
          <div className='serie-image'>
            {this.renderImage(image)}
          </div>
          <div className='serie-overview'>
            <div className='serie-overview-item serie-title'>
              {name}
            </div>
            <div className='serie-overview-item serie-meta'>
              <div className='serie-genre'>
                {this.renderGenres(genres)}
              </div>
              <div className='serie-rating'>
                {rating.average}
              </div>
            </div>
            <div className='serie-overview-item serie-summary'>
              {summary}
            </div>
          </div>
        </div>
        <div className='serie-cast'>
          <h2><span>CAST</span></h2>
          <List
            items={this.flattenCast(cast)}
            renderItem={this.renderActor} />
        </div>
      </div>
    );
  }
}

export default Serie;