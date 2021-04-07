import React,{useState} from 'react';
import { saveMovieToDb } from "../service/movies-service";

export default function AddMovie() {
    const [movieName, setMovieName] = useState("")
    const [rating, setRating] = useState(1)

    function updateMovieName(event) {
        setMovieName(event.target.value)
    }
    function updateMovieRating(event) {
        setRating(event.target.value)
    }
    function saveMovie(params) {
        console.log(movieName,rating);
        params.preventDefault()
        saveMovieToDb({movieName:movieName,rating:rating})
        .then((res)=>{alert(res.message)})
    }
    return (
        <div>
            <form onSubmit={saveMovie}>
                <label htmlFor="movieName">Movie Name:</label>
                <input onChange={updateMovieName} type="text" />
                <label htmlFor="movieRating">Movie Rating:</label>
                <input onChange={updateMovieRating} max={10} min={1} type="number" />
                <button type="submit">SAVE</button>
                <button type="reset">RESET</button>
            </form>
        </div>
    )
}