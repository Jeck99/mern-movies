import React, { useState } from 'react';
import { saveMovieToDb } from "../service/movies-service";

export default function AddMovie() {
    const [movieName, setMovieName] = useState("")
    const [image, setMovieImage] = useState("")
    const [synopsis, setMovieSyno] = useState("")
    const [linkToMovie, setMovieLink] = useState("")
    const [rating, setRating] = useState(1)

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
    function saveMovie(params) {
        params.preventDefault()
        saveMovieToDb({ movieName, rating, image, synopsis, linkToMovie })
            .then((res) => { alert(res.message) })
    }
    return (
        <div>
            <form onSubmit={saveMovie}>
                <label htmlFor="movieName">Movie Name:</label>
                <input onChange={updateMovieName} type="text" />
                <label htmlFor="movieImage">Movie image:</label>
                <input onChange={updateMovieImage} type="url" />
                <label htmlFor="movieSyno">Movie synopsis:</label>
                <input onChange={updateMovieSyno} type="text" />
                <label htmlFor="movieLink">Movie link:</label>
                <input onChange={updateMovieLink} type="url" />
                <label htmlFor="movieRating">Movie Rating:</label>
                <input onChange={updateMovieRating} max={10} min={1} type="number" />
                <section>
                    <button type="submit">SAVE</button>
                    <button type="reset">RESET</button>
                </section>
            </form>
        </div>
    )
}