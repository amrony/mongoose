const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = todoSchema;