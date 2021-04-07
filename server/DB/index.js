const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/cinema') //creating the connection to cinema db
    .catch(error => {                            //error handling
        console.error('Connection error', error.message)
    })

const db = mongoose.connection

module.exports = db // exporting the connection