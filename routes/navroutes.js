const express = require('express');
const router = express.Router();
const {galleryarr,eventobj,team} = require('../readdb.js');
// const {activity , upComing} = require('../readsheet');
const event = require("../models/event.js");

// setting navigation routes
router.get('/gallery', async (req, res) => {
    let data = await galleryarr()
    let context = {
        gallery : data
    }
    res.render('gallery.ejs',context);
})

router.get('/ourteam', async (req, res) => {
    let data = await team()
    let context = {
        teams: data
    }
    res.render('OurTeam.ejs', context);
})

router.get('/events', async (req, res) => {
    let eventData = await eventobj();
    let context = {
        events: eventData
    }
    res.render('events.ejs', context);
})

router.get('/eventname',async(req,res)=>{
    let num = req.query.num;
    let eventname = req.query.eventname;

    // console.log(eventname);

    let data = await event.findOne({topic: eventname});
    // console.log(data.winners);
    let winner = 0;
    let context = {
        name : req.query.eventname,
        eventdata:data,
        winnerlist:winner
    }
    res.render('eventredirect.ejs',context)
})

module.exports = router;

