const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
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
    twitter:{
        type:String
    }
});

const TeamMembers = mongoose.model("Ourteam",TeamSchema);

module.exports = TeamMembers;