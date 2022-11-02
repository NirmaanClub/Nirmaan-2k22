const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    name: {
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
    }
});

const Events = new mongoose.model("event",EventsSchema);

module.exports = Events;

