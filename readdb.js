const OurTeam = require('./models/team');  //getting data through database
const fests = require('./models/fest.js');  //getting data through db
const gallery = require('./models/gallery');  //getting gallery data through database


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


// getting fest data
// 

async function festdata() {
    const festitem = await fests.find({});
    let festobj = {};
    for (let i = 0; i < festitem.length; i++) {
        festobj[festitem[i].title] = "";
    }
    for (key in festobj) {
        let arr = [];
        for (let j = 0; j < festitem.length; j++) {
            if (key == festitem[j].title) {
                arr.push(festitem[j]);
            }
        }
        festobj[key] = arr;
    }
    return festobj
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


module.exports = { "galleryarr": gallerydata, "festobj": festdata, "team": teamdata };