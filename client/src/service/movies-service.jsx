// const PORT = process.env.PORT || 8080;
const API =process.env.NODE_ENV === 'production'? `https://moviesmern.herokuapp.com`:'http://localhost:8080';
/**
 * async function that updating the movies state
 * and returns the movies
 * * @returns {data:movies array,success:bool}
 */
export async function getAllMovies() {
    try {
        return await fetch(`${API}/movies/all`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }

}
/**
 * async function that updating the movies state
 * and returns the movies by name
 * * @returns {data:movies array,success:bool}
 */
 export async function getMovieByName(movieName) {
    try {
        return await fetch(`${API}/movies/movie/searchByName/${movieName}`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that updating the movies state
 * and returns the movies by move id
 * * @returns {data:movies array,success:bool}
 */
 export async function getMovieById(_id) {
    try {
        return await fetch(`${API}/movies/movie/${_id}`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new movie
 * and returns the movie 
 * * @returns {data:movies array,success:bool}
 */
export async function saveMovieToDb(movieToSave) {
    const options = {
        method: "POST",
        body:JSON.stringify({ movie: movieToSave }),
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/movies/saveMovie`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new movie
 * and returns the movie 
 * * @returns {data:movies array,success:bool}
 */
 export async function removeMovie(movieId) {
    const options = {
        method: "DELETE",
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/movies/movie/${movieId}`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that update a movie
 * and returns the movie 
 * * @returns {data:movies array,success:bool}
 */
 export async function putMovie(movie) {
    const options = {
        method: "PUT",
        body:JSON.stringify({ movie }),
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/movies/updateMovie/${movie._id}`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}