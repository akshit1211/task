const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [8, 'password should be 8 characters or more']
    }
})

const Login = new mongoose.model('Login', loginSchema);
module.exports = Login;