const express = require('express');
const port = 80||process.env.port;
const app = express();
const path = require('path');

// path for static file
const staticPath = path.join(__dirname,'./static')

// path for view file (templates)
const templatePath = path.join(__dirname,'./templates')


// setting of view engine
app.set('views',"./templates")
app.set("view engine", "ejs");


// using  builtin middleware for serving static files
app.use(express.static(__dirname + "/static"))

// creating routes
app.get('/',(req,res)=>{
    // adding data dynamically to page
    res.render('index.ejs');
})

// for invalid req
app.get('*',(req,res)=>{
    res.send('Invalid url 404')
})
    
// listening the app 
app.listen(port,()=>{
    console.log('listening...')
})
