const mongoose = require('mongoose');

const festSchema = mongoose.Schema({

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

const fest = mongoose.model("fest",festSchema);

module.exports = fest;

