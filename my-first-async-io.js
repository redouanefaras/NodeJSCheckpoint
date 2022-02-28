const fs = require("fs");

// we use utf-8 to convert it from buffer to string
fs.readFile(process.argv[2], "utf-8", (error, data) => {
 
    if (error) {
    console.error(error);
  }

  const lines = data.split("\n").length - 1;
  console.log(lines);
});

