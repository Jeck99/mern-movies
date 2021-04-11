const mongoose = require('mongoose');
const DBConcoctionString = process.env.DB;
mongoose.connect(DBConcoctionString,       //creating the connection to cinema db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => {                            //error handling
        console.error('Connection error', error.message)
    });

const db = mongoose.connection;

module.exports = db; // exporting the connection