const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_link: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    instalink: {
        type: String,
    },
    facebooklink: {
        type: String,
    },
    linkedinlink: {
        type: String,
    },

});

const TeamMembers = new mongoose.model("Ourteam",TeamSchema);

module.exports = TeamMembers;