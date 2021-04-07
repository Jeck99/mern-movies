const API = 'http://localhost:8080/movies/'
/**
 * async function that updating the movies state
 * and returns the movies
 * * @returns {data:movies array,success:bool}
 */
export async function getAllMovies() {
    try {
        return await fetch(API + 'all')
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
        return await fetch(`${API}saveMovie`,options)
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
        return await fetch(`${API}movie/${movieId}`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}