const OurTeam = require('./models/team');  //getting data through database
// const events = require('./models/event.js');  //getting data through db
const gallery = require('./models/gallery');  //getting gallery data through database
const events = require("./models/event.js"); // getting data of events

// getting events data
// async function eventdata(){
//     const event = await events.find({});

// }


// getting team data
async function teamdata() {
    const TeamMembers = await OurTeam.find({});
    TeamMembers.sort();
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
    return teamMem;
}


// getting event data

async function eventdata() {
    const eventitem = await events.find({});
    let eventobj = {};
    for (let i = 0; i < eventitem.length; i++) {
        eventobj[eventitem[i].title] = "";
    }
    for (key in eventobj) {
        let arr = [];
        for (let j = 0; j < eventitem.length; j++) {
            if (key == eventitem[j].title) {
                arr.push(eventitem[j]);
            }
        }
        eventobj[key] = arr;
    }
    return eventobj
}

// getting gallery data

async function gallerydata() {
    const galleryitem = await gallery.find({});
    let galleryarr = {}
    for (let i = 0; i < galleryitem.length; i++) {
        galleryarr[galleryitem[i].title] = ""
    }
    for (key in galleryarr) {
        let arr1 = []
        for (let j = 0; j < galleryitem.length; j++) {
            if (key == galleryitem[j].title) {
                arr1.push({ "title": key, "imglist": galleryitem[j].image.split(',') })
            }
        }
        galleryarr[key] = arr1;
    }
    return galleryarr
}


module.exports = { "galleryarr": gallerydata, "eventobj": eventdata, "team": teamdata };