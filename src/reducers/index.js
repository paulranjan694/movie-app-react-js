import { combineReducers } from 'redux';

import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from '../actions';

// initial state
const initailMovieState = {
  lists: [],
  favourites: [],
  showFavourites: false,
};

export function movies (state = initailMovieState, action) {
  console.log ('MOVIES REDUCER');
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        lists: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const newFilterArrays = state.favourites.filter (
        movie => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: newFilterArrays,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};

export function search (state = initialSearchState, action) {
  console.log ('SEARCH REDUCER');

  return {
    state,
  };
}

// *****Internally combineReducers works like this only****

// const initialRootReducer = {
//   movies: initailMovieState,
//   search: initialSearchState,
// };

// export default function rootReducer (state = initialRootReducer, action) {
//   return {
//     movies: movies (state.movies, action),
//     search: search (state.search, action),
//   };
// }

export default combineReducers({
    movies,
    search
})