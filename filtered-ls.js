const fs = require('fs');
const path = require('path');

const folder=process.argv[2];
const ext='.' + process.argv[3];

fs.readdir(folder, (error, files) => {
    if(error) {
        console.error(error);
        return;
    }

    files.forEach((file) => {
        if (path.extname(file) === ext)
        console.log(file);
    });
});