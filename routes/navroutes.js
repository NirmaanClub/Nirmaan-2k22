const express = require('express');
const router = express.Router();
const OurTeam = require('../models/team');  //getting data through database
const fests = require('../models/fest.js');  //getting data through db
const gallery = require('../models/gallery');  //getting gallery data through database

router.get('/gallery', async (req, res) => {
    const galleryitem = await gallery.find({});
    let arr = {}
    for (let i=0;i<galleryitem.length;i++){
        arr[galleryitem[i].title] = ""
    }
    for(key in arr){
        let arr1 = []
        for(let j=0;j<galleryitem.length;j++){
            if(key==galleryitem[j].title){
                arr1.push({"title":key,"imglist":galleryitem[j].image.split(',')})
            }
        }
        arr[key] = arr1;
    }
    console.log(arr.iojoads[0].imglist)
    let context = {
        gallery : arr
    }
    res.render('gallery.ejs',context);
})

router.get('/fest',async(req,res)=>{
    const festitem = await fests.find({});
    let fest = {};
    for(let i=0;i<festitem.length;i++){
        fest[festitem[i].title] = "";
    }
    for(key in fest){
        let arr =[];
        for(let j=0;j<festitem.length;j++){
            if(key == festitem[j].title){
                arr.push(festitem[j]);
            }
        }
        fest[key] = arr;
    }
    let context = {
        festdata:fest
    }
    res.render('fest.ejs',context);
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
        // console.log(rows[3]._rawData);
        for (let key in Events) {
            let arr = [];
            for (let j = 0; j < rows.length; j++) {
                let arr1 = []
                console.log(rows[j]._rawData)
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