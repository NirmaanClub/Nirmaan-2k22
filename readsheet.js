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
            if (rows[j].title == key) {
                arr1['image'] = rows[j].image
                // console.log(rows[j].image)
                arr1['about'] = rows[j].about
                arr1['topic'] = rows[j].topic
                arr1['price'] = rows[j].price
                arr1['winner'] = rows[j].winners
                arr.push(arr1)
            }
        }
        Events[key] = arr;
    }
    return Events;
}

module.exports = getrows;