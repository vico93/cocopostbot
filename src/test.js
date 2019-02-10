const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFile(path, exts, cb){
    fs.readdir(path, (err, files) => {
        if(err){
            return cb(nil, err);
        }
        let f = files.filter((file) => {
            let spt = file.split('.');
            let ext = spt[spt.length-1];
            if(exts.indexOf(ext) > -1)
                return true
            else
                return false
        });
        let index = getRandomInt(0, f.length-1);
        cb(f[index], null);
    });
}

getRandomFile('./templates', ['png', 'jpg', 'jpeg'], (files, err) => {
    console.log(files);
});