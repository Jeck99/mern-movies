import React, { useState, useEffect } from 'react';
import { getMovieById ,putMovie} from "../service/movies-service";

export default function EditMovie(props) {
    const { movieId } = props.match.params
    const [movie, setMovie] = useState({});
    useEffect(getMovie, [])

    const [movieName, setMovieName] = useState(movie.movieName)
    const [image, setMovieImage] = useState(movie.image)
    const [synopsis, setMovieSyno] = useState(movie.synopsis)
    const [linkToMovie, setMovieLink] = useState(movie.linkToMovie)
    const [rating, setRating] = useState(movie.rating)

    function getMovie() {
        getMovieById(movieId).then((res) => { setMovie(res) })
    }
    function updateMovieName(event) {
        setMovieName(event.target.value)
    }
    function updateMovieImage(event) {
        setMovieImage(event.target.value)
    }
    function updateMovieSyno(event) {
        setMovieSyno(event.target.value)
    }
    function updateMovieLink(event) {
        setMovieLink(event.target.value)
    }
    function updateMovieRating(event) {
        setRating(event.target.value)
    }
    function updateMovie(event) {
        console.log(movie);
        event.preventDefault()
        // putMovie({ movieName, rating, image, synopsis, linkToMovie })
        //     .then((res) => { alert(res.message) })
    }
    return (
        <div>
            <form onSubmit={updateMovie}>
                <label htmlFor="movieName">Movie Name:</label>
                <input onChange={updateMovieName} type="text" value={movie.movieName||''}/>
                <label htmlFor="movieImage">Movie image:</label>
                <input onChange={updateMovieImage}  value={movie.image||''}/>
                <label htmlFor="movieSyno">Movie synopsis:</label>
                <input onChange={updateMovieSyno} type="text" value={movie.synopsis||''}/>
                <label htmlFor="movieLink">Movie link:</label>
                <input onChange={updateMovieLink} type="url" value={movie.linkToMovie||''}/>
                <label htmlFor="movieRating">Movie Rating:</label>
                <input onChange={updateMovieRating} max={10} min={1} type="number" value={movie.rating||''}/>
                <section>
                    <button type="submit">UPDATE</button>
                    <button type="reset">RESET</button>
                </section>
            </form>
        </div>
    )
}