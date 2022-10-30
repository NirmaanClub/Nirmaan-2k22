const express = require('express');
const TeamMembers = require('../models/team');
const router = express.Router();
const OurTeam  = require('../models/team');

router.get('/Gallery',(req,res)=>{
    res.render('Gallery.ejs');
})

router.get('/OurTeam',async(req,res)=>{
    const TeamMembers = await OurTeam.find({}); 
    res.render('OurTeam.ejs',TeamMembers);
})

router.get('/events',(req,res)=>{
    res.render('events.ejs');
})

module.exports = router;