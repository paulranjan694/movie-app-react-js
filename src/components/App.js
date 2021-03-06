import React from 'react';
import {data} from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import {addMovies, setShowFourites} from '../actions';

class App extends React.Component {
  componentDidMount () {
    const {store} = this.props;

    store.subscribe (() => {
      console.log ('UPDATED');
      this.forceUpdate ();
    });

    // make api call

    // dispatch action
    store.dispatch (addMovies (data));

    console.log ('STATE ', store.getState ());
  }

  isMovieFavourite = movie => {
    const {movies} = this.props.store.getState ();

    const index = movies.favourites.indexOf (movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = val => {
    this.props.store.dispatch (setShowFourites (val));
  };

  render () {
    const {movies, search} = this.props.store.getState (); // state - {movies:{},serach:{}}
    const {lists, favourites, showFavourites} = movies;
    console.log ('RENDER ', this.props.store.getState ());

    const displayMovies = showFavourites ? favourites : lists;

    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.onChangeTab (false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
              onClick={() => this.onChangeTab (true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map ((movie, index) => (
              <MovieCard
                key={`movie-${index}`}
                movie={movie}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite (movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0
            ? <div className="no-movies">No Movies to display!</div>
            : null}
        </div>
      </div>
    );
  }
}

export default App;
