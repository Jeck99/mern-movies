// import MoviesRouter from './Router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

// Components
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import NotFound from "./components/404";
import './App.css';
import MoviesList from "./pages/MoviesList";
import HeaderComponent from "./components/header.component";
import AddMovie from "./pages/Add-Movie";

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
    <Provider store={store}>
      <Router>
        <div className="App">
        <HeaderComponent />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/movies" component={MoviesList} />
            <PrivateRoute exact path="/add-movie" component={AddMovie} />
            <Route
              component={localStorage.jwtToken ? Home : NotFound}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;