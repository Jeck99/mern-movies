import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from './pages/Home';
import MoviesList from "./pages/MoviesList";
import HeaderComponent from "./components/header.component";
import AddMovie from "./pages/Add-Movie";
import Register from "./pages/Register";
import Login from "./pages/Login";
export default function MoviesRouter() {
    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path='/movies' component={MoviesList} />
                <Route exact path='/add-movie' component={withRouter(AddMovie)} />
                <Route exact path='/register' component={withRouter(Register)} />
                <Route exact path='/login' component={withRouter(Login)} />
                <Route exact path='/' component={withRouter(Home)} />
            </Switch>
        </Router>
    )
}
