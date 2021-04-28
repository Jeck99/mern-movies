const userRouter = require('express').Router() //import from Router from express
const userCtrl = require('../controllers/user-ctrl') //import functions from user-ctrl

userRouter.post('/register', userCtrl.registerUser)           //save new user
userRouter.post('/login', userCtrl.loginUser)           //save new user

module.exports = userRouter; //exporting userRouter module
