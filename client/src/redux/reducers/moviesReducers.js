import { ADD_MOVIE, SHOW_MOVIES, DELETE_MOVIE } from "../actions/types";

export default function moviesReducer(state = { movies: [] }, action) {
    switch (action.type) {
        case ADD_MOVIE:
            return { movies: [...state.movies, action.payload] };
        case SHOW_MOVIES:
            return {...state.movies }
        case DELETE_MOVIE:
            return {...state.movies, movies: state.movies.filter(movie => movie._id !== action.payload) }
        default:
            return state;
    }
}
