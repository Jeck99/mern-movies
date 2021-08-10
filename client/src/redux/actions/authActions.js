import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";


import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import { registerUserToDb,loginUserApi } from "../../service/users-service";

// Register User
export const registerUser = (userData, history) => dispatch => {
  registerUserToDb(userData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = (userData, history)  => dispatch => {
  loginUserApi(userData)
    .then(res => {
      // Save to localStorage and Set token to localStorage
      localStorage.setItem("jwtToken", res.token);
      // Set token to Auth header
      setAuthToken(res.token);
      // Decode token to get user data
      const decoded = jwt_decode(res.token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push("/")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = history => dispatch => {
  console.log(history);
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  history.push("/");
};