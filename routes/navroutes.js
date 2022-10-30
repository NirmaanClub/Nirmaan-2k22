const express = require('express');
const router = express.Router();

router.get('/Gallery',(req,res)=>{
    res.render('Gallery.ejs');
})

router.get('/OurTeam',(req,res)=>{
    res.render('OurTeam.ejs');
})

router.get('/events',(req,res)=>{
    res.render('events.ejs');
})

module.exports = router;