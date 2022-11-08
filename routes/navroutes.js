const express = require('express');
const router = express.Router();
const OurTeam = require('../models/team');  //getting data through database
// const event = require('../models/event');
const gallery = require('../models/gallery');  //getting gallery data through database

router.get('/gallery', async (req, res) => {
    const galleryitem = await gallery.find({});
    res.render('gallery.ejs');
})

router.get('/ourteam', async (req, res) => {
    const TeamMembers = await OurTeam.find({});
    let teamMem = {};
    for (let i = 0; i < TeamMembers.length; i++) {
        teamMem[TeamMembers[i].position] = "";
    }
    for (key in teamMem) {
        let arr = [];
        for (let j = 0; j < TeamMembers.length; j++) {
            if (TeamMembers[j].position == key) {
                arr.push(TeamMembers[j]);
            }
        }
        teamMem[key] = arr;
    }
    let context = {
        teams: teamMem
    }
    res.render('OurTeam.ejs', context);
})

router.get('/events', async (req, res) => {

    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const fs = require('fs');
    const doc = new GoogleSpreadsheet(process.env.GOOGLESHEET)
    const credentials = JSON.parse(fs.readFileSync('./config/nirmaan.json'))
    const getrows = async () => {
        await doc.useServiceAccountAuth({
            client_email: credentials.client_email,
            private_key: credentials.private_key
        });
        await doc.loadInfo();
        let sheet = doc.sheetsByIndex[0];
        let rows = await sheet.getRows();
        let Events = {};
        for (let i = 0; i < rows.length; i++) {
            Events[rows[i].title] = ""
        }
        for (let key in Events) {
            let arr = [];
            for (let j = 0; j < rows.length; j++) {
                let arr1 = []
                if (rows[j].title == key) {
                    arr1['image'] = rows[j].image
                    // console.log(rows[j].image)
                    arr1['about'] = rows[j].about
                    arr1['topic'] = rows[j].topic
                    arr.push(arr1)
                }
            }
            Events[key] = arr;
        }
        return Events;
    }
    let data = await getrows();
    let context = {
        event: data
    }
    res.render('events.ejs', context);
})

module.exports = router;