import { ADD_MOVIE,SHOW_MOVIES,DELETE_MOVIE } from "./types";

/**
 * add movie action 
 * @param {Movie} movieItem 
 * @returns action with type:ADD_MOVIE and payload:movieItem
 */
export const addMovie = (movieItem) => {
    return { type: ADD_MOVIE, payload: movieItem }
}
/**
 * show all movies action
 * @returns action with type:SHOW_MOVIES
 */
export const showMovies = () => {
    return { type: SHOW_MOVIES }
}
/**
 * delete movie action 
 * @param {string} movieId 
 * @returns action with type:DELETE_MOVIE and payload:movieId
 */
export const deleteMovie = (movieId) =>{
    return {type:DELETE_MOVIE , payload:movieId}
}