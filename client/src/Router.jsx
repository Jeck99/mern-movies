import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import NotFound from "./components/404";
import MoviesList from "./pages/MoviesList";
import AddMovie from "./pages/Add-Movie";
export default function MoviesRouter() {
    return (
        <>
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
        </>
    )
}
