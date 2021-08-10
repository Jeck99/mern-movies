const userModel = require('../models/user-model'); //import model from movie-model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

async function registerUser(req, res) {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body.user);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    await userModel.findOne({ email: req.body.user.email }, (err, user) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.user.password, salt, (err, hash) => {
                    if (err) throw err;
                    req.body.user.password = hash;
                    userModel.insertMany(req.body.user, (err) => {
                        if (err) {
                            res.status(400).json({ success: false, error: err })
                        };
                        res.status(201).json({ success: true, message:`registered of ${req.body.user.email} new user` })
                    })
                });
            });
        }
    });
}

async function loginUser(req, res) {
    const { errors, isValid } = validateLoginInput(req.body.user);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.user.email;
    const password = req.body.user.password;
    // Find user by email
    await userModel.findOne({ email }, (err, user) => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
                // Sign token
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
                    res.json({ success: true, token: "Bearer " + token,user:{name:user.name,email:user.email} });
                });
            }
            else {
                return res.status(400).json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
}
//exporting the functions in order to use them at userRouter
module.exports = {
    registerUser,
    loginUser
};