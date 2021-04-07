//general imports:
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
//import the connection
const db = require('./DB');
//import router module
const moviesRouter = require('./routes/movie-router')
//configuration of the port based on the env
const PORT = process.env.PORT;
//use of body-parser in order to reach req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
//use of cors so our server will be able to get requests
app.use(cors())

db.on('error',()=>{console.log("connection error")})

app.listen(PORT,()=>{
    console.log(`mern server is live and up on port: ${PORT}`);
})
app.get('/',(req,res)=>{
    res.send("get api is working fine")
})

app.use('/movies',moviesRouter)