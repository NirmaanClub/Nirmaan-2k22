const express = require('express');
const TeamMembers = require('../models/team');
const router = express.Router();
const OurTeam = require('../models/team');
const event = require('../models/event');

router.get('/Gallery', (req, res) => {
    res.render('Gallery.ejs');
})

router.get('/OurTeam', async (req, res) => {
    const TeamMembers = await OurTeam.find({});
    res.render('OurTeam.ejs', TeamMembers);
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

    res.render('events.ejs',Events);
})

module.exports = router;