// action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

// action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}

export function addFourites(movie){
    return{
        type:ADD_FAVOURITES,
        movie,
    }
}

export function removeFromFourites(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie,
    }
}

export function setShowFourites(val){
    return{
        type:SET_SHOW_FAVOURITES,
        val,
    }
}