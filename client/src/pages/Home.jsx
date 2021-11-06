import React, { useState, useEffect } from 'react';
import { getAllMovies } from "../service/movies-service";
import MovieCard from "../components/movie-card.component";
import './home.css';
export default function Home(props) {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [paramInput, setParamInput] = useState(" ");
    const [sortMethod, setSortMethod] = useState("date");
    const [searchMethod, setSearchMethod] = useState("");
    useEffect(getMovies, [])

    function getMovies() {
        getAllMovies().then((res) => { setMovies(res) })
    }
    function sortMoviesClick() {
        switch (sortMethod) {
            case "movieName":
                setMovies(() => { return sortMovies("movieName") });
                console.log();
                break;
            case "rating":
                // setMovies(()=>{return sortMovies("rating")});
                break;
            case "date":
                setMovies(() => { return sortMovies("date") });
                break;
            default:
                break;
        }
    }
    function sortMovies(field) {
        return movies.sort((a, b) => {
            return a[field].toLowerCase() - b[field].toLowerCase();
        })
    }
    function serchMoviesClick() {
        console.log(getMax());
    }
    function getMax() {
        let oldestObject = movies[0];
        for (const item of movies) {
            if (item[paramInput] > oldestObject[paramInput]) oldestObject = item;
        }
        return oldestObject;
    }
    return (
        <>
            <div id="sorting">
                <button onClick={sortMoviesClick}>SORT</button>
                <select id="sort_select" onChange={(e) => { setSortMethod(e.target.value) }}>
                    <option value="movieName">Name</option>
                    <option value="rating">Rating</option>
                    <option value="date">Added At</option>
                </select>
            </div>
            <div id="serch-div">
                <button onClick={serchMoviesClick}>SEARCH</button>
                <select id="sort_select" onChange={(e) => { setSearchMethod(e.target.value) }}>
                    <option value="movieName">Name</option>
                    <option value="rating">Rating</option>
                    <option value="date">Added At</option>
                </select>
                <input type="text" onChange={(e) => { setParamInput(e.target.value) }} />
            </div>
            <div id={"homeDiv"}>
                {movies ? React.Children.toArray(movies.map((item) => {
                    return <MovieCard image={item.image} title={item.movieName} text={item.rating} />
                })) : ''}
            </div>
        </>
    )
}
