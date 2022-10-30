const mongoose = require('mongoose');

const connection = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true,
        useUnifiedTopology: true,});
        console.log("Connected to Datebase : Nirmaan");
    }catch(e){
        console.log("No Connection");
    }
}
module.exports = connection;