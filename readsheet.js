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

    return rows;
}

module.exports = {
    "activity":async function activites(){
        let rows = await getrows();
        // console.log("rows = ",rows);
        let Events = {}; 
        for (let i = 0; i < rows.length; i++) {     
            if(rows[i].under == 'event'){
                Events[rows[i].title] = ""
            }
        }
        for (let key in Events) {
            let arr = [];
            for (let j = 0; j < rows.length; j++) {
                let arr1 = [];
                if (rows[j].title == key) {
                    arr1['image'] = rows[j].image
                    arr1['about'] = rows[j].about
                    arr1['topic'] = rows[j].topic
                    arr1['price'] = rows[j].price
                    arr1['winner'] = rows[j].winners
                    arr.push(arr1)
                }
            }
            Events[key] = arr;
        }
        console.log(Events);
        return Events;
    },

    "upComing":async function upComing(){
        let rows = await getrows();
        let UpEvents = {};
        
        for (let i = 0; i < rows.length; i++) {
            // console.log(rows[i].under);
            // console.log(rows[i].title);
            if(rows[i].under == 'up'){
                UpEvents[rows[i].title] = "";
            }
        }

        for (let key in UpEvents) {
            let arr2 = [];
            for (let j = 0; j < rows.length; j++) {
                let arr3 = [];
                if (rows[j].title == key) {
                    arr3['image'] = rows[j].image
                    arr3['topic'] = rows[j].topic
                    arr3['date'] = rows[j].date
                    arr3['time'] = rows[j].time
                    arr3['venue'] = rows[j].venue
                    arr2.push(arr3)
                }
            }
            UpEvents[key] = arr2;
        }
        return UpEvents;
    }
}