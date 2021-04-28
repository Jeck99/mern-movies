const mongoose = require('mongoose');
//import Schema class from mongoose
const Schema = mongoose.Schema;

//creating movie schema with fields
const User = new Schema({
    //field_name : {type of the value,is it required?}
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
},
    // do we wish for timestamps automated fields to be generated?
    // { timestamps: true }
)
//export the movie-model with the collection and the movie-schema 
module.exports = mongoose.model('users', User);