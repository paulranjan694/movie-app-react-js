import React from 'react';
import {addFourites, removeFromFourites} from '../actions';

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch (addFourites(movie));
  };

  handleUnfavouriteClick = ()=>{
    const { movie } = this.props;
    this.props.dispatch(removeFromFourites(movie));
  }

  render () {
    const {movie, isFavourite} = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" scr={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite
              ? <button
                  className="unfavourite-btn"
                  onClick={this.handleUnfavouriteClick}
                >
                  Unfavourite
                </button>
              : <button
                  className="favourite-btn"
                  onClick={this.handleFavouriteClick}
                >
                  Favourite
                </button>}
          </div>
        </div>

      </div>
    );
  }
}

export default MovieCard;
