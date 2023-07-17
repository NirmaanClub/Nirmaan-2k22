const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    price:{
        type: Number
    },
    winner:{
        type: String
    }
});

const event = mongoose.model("event",eventSchema);
module.exports = event;

