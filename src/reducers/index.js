import { combineReducers } from 'redux';

import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT
} from '../actions';

// initial state
const initailMovieState = {
  lists: [],
  favourites: [],
  showFavourites: false,
};

export function movies (state = initailMovieState, action) {
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
    case ADD_MOVIE_TO_LIST:
      return{
        ...state,
        lists:[action.movie,...state.lists]
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResult : false
};

export function search (state = initialSearchState, action) {
  
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResult: true,
      };
      case ADD_MOVIE_TO_LIST:
        return{
          ...state,
          showSearchResult:false
        };
    default:
      return state;
  }
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