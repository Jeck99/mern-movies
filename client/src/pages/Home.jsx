import React, { useState, useEffect } from 'react';
import {getAllMovies} from "../service/movies-service";
import MovieCard from "../components/movie-card.component";
import './home.css';
export default function Home(props) {
    const [movies, setMovies] = useState([]);
    useEffect(getMovies, [])

    function getMovies() {
        getAllMovies().then((res) => { setMovies(res) })
    }
    return (
        <div id={"homeDiv"}>
            home
            {React.Children.toArray(movies.map((item) => {return <MovieCard image={"pictures/loader.gif"} title={item.movieName} text={item.rating} /> }))}
        </div>
    )
}
