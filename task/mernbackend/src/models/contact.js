const mongoose = require('mongoose');

const contSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter your name']
    },
    email: {
        type: String,
        required: [true, 'please enter your email']
    },
    contact: {
        type: Number,
        required: [true, 'please enter your contact information'],
        unique: true
    },
    query: {
        type: String,
        required: [true, 'please tell us your query']
    }
})

const Contact = new mongoose.model('Contact', contSchema)
module.exports = Contact;