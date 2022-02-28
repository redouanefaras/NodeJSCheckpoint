const filterFn = require('./mymodule.js');

filterFn(process.argv[2], process.argv[3], (error, files) => {
    if(error) {
        console.error(error);
        return;
    }

    files.forEach((file) => {
        console.log(file);
    });
});