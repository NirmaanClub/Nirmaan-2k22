const express = require('express');
const router = express.Router();
const {galleryarr,festobj,team} = require('../readdb.js');
const getrows = require('../readsheet.js');


// setting navigation routes
router.get('/gallery', async (req, res) => {
    let data = await galleryarr()
    let context = {
        gallery : data
    }
    res.render('gallery.ejs',context);
})

router.get('/fest',async(req,res)=>{
    let data = await festobj()
    let context = {
        festdata:data
    }
    res.render('fest.ejs',context);
})

router.get('/ourteam', async (req, res) => {
    let data = await team()
    let context = {
        teams: data
    }
    res.render('OurTeam.ejs', context);
})

router.get('/events', async (req, res) => {
    let data = await getrows();
    let context = {
        events: data.events
    }
    res.render('events.ejs', context);
})

router.get('/eventname',async(req,res)=>{
    let num = req.query.num;
    let eventname = req.query.eventname;
    let data = await getrows();
    let elem = data[eventname][num];
    let winner=0
    if(elem.winner){
        // console.log('yes')
        winner = elem.winner.split(',');
    }
    let context = {
        name : req.query.event,
        eventdata:elem,
        winnerlist:winner
    }
    res.render('eventredirect.ejs',context)
})

module.exports = router;

