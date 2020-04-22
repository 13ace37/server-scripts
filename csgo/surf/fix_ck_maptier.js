/* Removes all maps from ck_maptier that are not in the given text file. */

let { readFileSync } = require("fs");

let maps = readFileSync("maplist.txt", "utf8");
var mapArray = maps.split("\n");

let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "surftimer",
    password: "*****",
    database: "surftimer"
});

connection.query(`SELECT * FROM surftimer.ck_maptier`, (err, result) => {

    result.forEach(map => {

        if (!mapArray.includes(map.mapname)) removeMap(map.mapname);

    });

});

function removeMap(mapname) {connection.query(`DELETE FROM surftimer.ck_maptier WHERE mapname = "${mapname}"`,(err,result) => {if (err) return console.error(err)});}