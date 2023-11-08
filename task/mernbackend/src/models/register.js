const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'please enter your firstname'],
    },
    lastname: {
        type: String,
        required: [true, 'please enter your lastname'],
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true
    },
    contact: {
        type: Number,
        required: [true, 'please enter your contact information'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [8, 'password should be 8 charcters']
    },
    confirmpassword: {
        type: String,
        required: true
    }
});

const Register = new mongoose.model('Task', regSchema)

module.exports = Register;