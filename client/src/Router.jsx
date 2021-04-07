import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from './pages/Home';
import MoviesList from "./pages/MoviesList";
import HeaderComponent from "./components/header.component";
import AddMovie from "./pages/Add-Movie";
export default function MoviesRouter() {
    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path='/movies' component={MoviesList} />
                <Route exact path='/add-movie' component={withRouter(AddMovie)} />
                <Route exact path='/' component={withRouter(Home)} />
            </Switch>
        </Router>
    )
}
