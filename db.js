const mongoose = require('mongoose');

const connection = async () => {
    try{
        mongoose.connect(process.env.MONGO_DATABASE_URI, { useNewUrlParser: true,
        useUnifiedTopology: true,});
        console.log("Connected to Datebase:Nirmaan");
    }catch(e){
        console.log("No Connection");
    }
}
module.exports = connection;