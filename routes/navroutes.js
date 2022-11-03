const express = require('express');
const router = express.Router();
const OurTeam = require('../models/team');
const event = require('../models/event');
const gallery = require('../models/gallery');

router.get('/gallery',async (req, res) => {
    const galleryitem = await gallery.find({});
    res.render('gallery.ejs');
})

router.get('/ourteam', async (req, res) => {
    const TeamMembers = await OurTeam.find({});
    let teamMem = {};
    for (let i = 0; i < TeamMembers.length; i++) {
        teamMem[TeamMembers[i].position] = "";
    }
    for(key in teamMem){
        let arr = [];
        for (let j = 0; j < TeamMembers.length; j++) {
            if (TeamMembers[j].position == key) {
                arr.push(TeamMembers[j]);
            }
        }
        teamMem[key] = arr;
    }
    let context =  {
        teams:teamMem
    }
    res.render('OurTeam.ejs',context);
})

router.get('/events', async (req, res) => {
    const events = await event.find({});
    let Events = {};
    for (let i = 0; i < events.length; i++) {
        Events[events[i].title] = "";
    }
    for(key in Events){
        let arr = [];
        for (let j = 0; j < events.length; j++) {
            if (events[j].title == key) {
                arr.push(events[j]);
            }
        }
        Events[key] = arr;
    }
    let context = {
        event:Events
    }
    res.render('events.ejs',context);
})

module.exports = router;