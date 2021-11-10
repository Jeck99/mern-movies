const movieModel = require('../models/movie-model'); //import model from movie-model

/** 
*get all movies from movies collection
*/
async function getAllMovies(req, res) {
    await movieModel.find((err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (results.length==0) {
           return res.json({ success: false, message: "No movies available" })
        }
        console.log("results:", JSON.stringify(results));
        res.status(200).json({ success: true, data: results });
    });
}
/**
 * get a movie by id from movies collection
 * @param {*} req 
 * @param {*} res 
 */
async function getMovieById(req, res) {
    await movieModel.findById(req.params.id, (err, movieItem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        if (!movieItem) {
            return res.status(404).json({ success: false, message: "No movie available" })
        }
        res.status(200).json({ success: true, data: movieItem })
    })
}
/**
 * get all movies by movie name from movies collection
 * @param {*} req 
 * @param {*} res 
 */
async function getMovieByName(req, res) {
    let movieName = req.params.movieName;
    await movieModel.find({ movieName: { $regex: movieName, $options: "i" } }, (err, movieItem) => {
        if (err) {
        return res.status(400).json({ success: false, error: err })
        };
        if (!movieItem) {
            return res.status(404).json({ success: false, message: "No movie available" })
        }
        res.status(200).json({ success: true, data: movieItem })
    })
}
/**
 * save new movie to movies collection
 * @param {*} req 
 * @param {*} res 
 */
async function saveNewMovie(req, res) {
    movieModel.insertMany(req.body.movie, (err) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, message: req.body.movie })
    })
}
/**
 * delete a movie by id in movies collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteMovie(req, res) {
    movieModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: doc, message: "Movie deleted successfully" })
    })
}
/**
 * update a movie by id in movies collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateMovie(req, res) {
    movieModel.findByIdAndUpdate(req.params.id, req.body.movie, (err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(300).json({ success: true, data: doc, message: "Movie updated successfully" })
    })
}
//exporting the functions in order to use them at movieRouter
module.exports = {
    getAllMovies,
    getMovieById,
    saveNewMovie,
    getMovieByName,
    deleteMovie,
    updateMovie,
};