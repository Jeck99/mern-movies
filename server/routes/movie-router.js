const moviesRouter = require('express').Router() //import from Router from express
const movieCtrl = require('../controllers/movie-ctrl') //import functions from movie-ctrl

moviesRouter.get('/all', movieCtrl.getAllMovies);                  //get all movies
moviesRouter.post('/saveMovie', movieCtrl.saveNewMovie)           //save new movie
moviesRouter.get('/movie/:id', movieCtrl.getMovieById)           //get movie by id
moviesRouter.get('/movie/searchByName/:movieName', movieCtrl.getMovieByName)//get movies by name
moviesRouter.delete('/movie/:id', movieCtrl.deleteMovie)       //delete a movie by id
moviesRouter.put('/movie/:id', movieCtrl.updateMovie)         //update a movie by id

module.exports = moviesRouter; //exporting movieRouter module
