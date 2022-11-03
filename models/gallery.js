const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imglink:{
        type:String,
        required:true
    }
});

const gallery = mongoose.model('gallery',gallerySchema);

module.exports = gallery;