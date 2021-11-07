import React, { useState, useEffect } from 'react';
import { getMovieById } from "../service/movies-service";

export default function MovieDetails(props) {
    const {movieId} = props.match.params
    const [movie, setMovie] = useState({});
    useEffect(getMovie, [])

    function getMovie() {
        getMovieById(movieId).then((res) => { setMovie(res) })
    }
    return (
        <div>
            <label htmlFor="movieRating">Movie id:</label>
            <h4>{movie._id}</h4>
            <label htmlFor="movieName">Movie Name:</label>
            <h4>{movie.movieName}</h4>
            <label htmlFor="movieName">Movie image:</label>
            <h4>{movie.image}</h4>
            <label htmlFor="movieName">Movie synopsis:</label>
            <h4>{movie.synopsis}</h4>
            <label htmlFor="movieName">Movie link:</label>
            <h4>{movie.linkToMovie}</h4>
            <label htmlFor="movieRating">Movie Rating:</label>
            <h4>{movie.rating}</h4>
            <label htmlFor="movieRating">Added At:</label>
            <h4>{movie.date}</h4>
            <button >back</button>
            <button >next</button>
        </div>
    )
}