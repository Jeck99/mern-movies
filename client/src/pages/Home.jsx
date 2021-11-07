import React, { useState, useEffect } from 'react';
import { getAllMovies, getMovieByName } from "../service/movies-service";
import MovieCard from "../components/movie-card.component";
import './home.css';
export default function Home(props) {
    const [movies, setMovies] = useState([]);
    const [paramInput, setParamInput] = useState("");
    const [sortMethod, setSortMethod] = useState("date");
    const [searchMethod, setSearchMethod] = useState("movieName");
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
    function serchMoviesClick(e) {
        setParamInput(e.target.value)
        if(e.target.value.length==0) return getMovies();
        searchMethod == "movieName" ? getMovieByName(e.target.value).then((res) => { setMovies(res) }) : console.log(getMax());
    }
    function getMax() {
        let maxObject = movies[0];
        for (const item of movies) {
            if (item[searchMethod] > maxObject[searchMethod]) maxObject = item;
        }
        return maxObject;
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
                    <option value="movieName">Movie by Name</option>
                    <option value="rating">Best Movie</option>
                    <option value="date">Last Movie Added</option>
                </select>
                <input type="text" onChange={serchMoviesClick} />
            </div>
            <div id={"homeDiv"}>
                {movies ? React.Children.toArray(movies.map((item) => {
                    return <MovieCard movieItem={item} />
                })) : ''}
            </div>
        </>
    )
}
