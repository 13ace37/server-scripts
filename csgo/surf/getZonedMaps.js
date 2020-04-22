// WARNING: This script is not tested, so its 99% not working :)

let mysql = require("mysql");
let connection = mysql.createConnection({

    host: "127.0.0.1",
    user: "surftimer",
    password: "*****",
    database: "surftimer"

});

var itemsProcessed = 0, maplist = {maps: []};

connection.query(`SELECT * FROM surftimer.ck_maptier`, (e0, res0) => {

    res0.forEach(res => {

        connection.query(`SELECT * FROM surftimer.ck_zones WHERE mapname = "${res.mapname}"`, (e1, res1) => {

            
            

            res0.forEach((item, index, array) => {
                maplist.maps.push(item.mapname)
                itemsProcessed++;
                if (itemsProcessed === res0.length) {
                    callback(maplist);
                }
            });

        });

    });

    

    

});

function callback(list) {
    const fs = require('fs');

    fs.writeFile("/srv/node/maplist.json", JSON.stringify(list), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

}