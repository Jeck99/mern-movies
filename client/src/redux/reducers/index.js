import { combineReducers } from "redux";
import moviesReducer from "./moviesReducers";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
    movie: moviesReducer,
    auth: authReducer,
    error:errorReducer
})