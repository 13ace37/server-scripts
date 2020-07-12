let prompt = require("prompt");
let sharp = require("sharp");
let path = require("path");
prompt.start();

prompt.get("File", function(err, result) {
    if (!err) resizeImage(result.File);
})

function resizeImage(file) {
    if (!file) return console.log("No file name provided!") && process.exit();
    
    let fileWithPath = path.join(__dirname, file);
    let fileName = file.split(".")[0];
    let fileExt = file.split(".")[1];
    
    sharp(fileWithPath)
        .toBuffer()
        .then(data => {
            sharp(data)
                .resize(4096, 4096)
                .toFile(fileName + "_4096." + fileExt, (err, info) => {
                    console.log(err || info)
                })
                .resize(2048, 2048)
                .toFile(fileName + "_2048." + fileExt, (err, info) => {
                    console.log(err || info)
                })
                .resize(1024, 1024)
                .toFile(fileName + "_1024." + fileExt, (err, info) => {
                    console.log(err || info)
                })
                .resize(512, 512)
                .toFile(fileName + "_512." + fileExt, (err, info) => {
                    console.log(err || info)
                });
        })
        .catch(err => {
            console.log(err);
        });
}
