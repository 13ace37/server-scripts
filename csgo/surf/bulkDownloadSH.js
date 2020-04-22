let fs = require("fs");
let http = require("http");

let rawdata = fs.readFileSync('maplist.json'); // - file format {maps:[Array]}
let maps = JSON.parse(rawdata).maps;

maps.forEach(map => {
	console.log(map + "...");
    let file = fs.createWriteStream(map + ".bsp.bz2");
    let request = http.get("http://fast.surfdl.net/csgo/maps/"+ map +".bsp.bz2", function(response) {
        if (response) response.pipe(file);
        else console.log("failed!");
    });
});