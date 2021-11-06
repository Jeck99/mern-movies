// import MoviesRouter from './Router';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

import MoviesRouter from "./Router";
import HeaderComponent from "./components/header.component";
import Footer from './components/footer';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.getItem("jwtToken");
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <HeaderComponent />
          <MoviesRouter />
        <Footer />
        </Router>
      </Provider>
    </div>
  );
}
export default App;