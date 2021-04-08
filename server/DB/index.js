const mongoose = require('mongoose')
const DBConcoctionString = "mongodb+srv://jacoUser:jacoUser@cluster0.zrkm0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const DBConcoctionString = process.env.DB;
mongoose.connect(DBConcoctionString,       //creating the connection to cinema db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))
    .catch(error => {                            //error handling
        console.error('Connection error', error.message)
    })

const db = mongoose.connection

module.exports = db // exporting the connection