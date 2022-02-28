const fs = require('fs');
const path = require('path');

module.exports =(directory, fileExtension, callback)=> {
    fs.readdir(directory, (error, fileList) => {
        if(error) {
            return callback(error);
        }

        list = list.filter((file) => {
            return path.extname(file) === '.' + fileExtension;
        });

        callback(null, list);
    });
};