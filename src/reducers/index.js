export default function movies(state = [10], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}