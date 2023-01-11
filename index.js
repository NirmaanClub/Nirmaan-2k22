const express = require('express');
const port = 80||process.env.port;
const app = express();
const path = require('path');
const compression = require('compression');

require("dotenv").config({ path: "./config/config.env" });

const {activity , upComing} = require('./readsheet');

// setting navigation routes
const navroutes = require('./routes/navroutes.js');

// conneting database;
const connection = require('./config/db.js')
connection();

// setting of view engine
app.set('views',"./templates")
app.set("view engine", "ejs");


app.use(compression());

// using  builtin middleware for serving static files
app.use(express.static(__dirname + "/static"))

// creating routes

// setting routes for navbar
app.use('/',navroutes)

app.get('/',async(req,res)=>{
    // adding data dynamically to page
    let data = await upComing();
    let context = {
        events: data
    }
    res.render('index.ejs',context);
})

// for invalid req
app.get('*',(req,res)=>{
    res.render('error.ejs')
})
    
// listening the app 
app.listen(port,()=>{
    console.log(`Started at port ${port}`);
})
