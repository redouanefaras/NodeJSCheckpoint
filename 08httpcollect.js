const http = require("http");
const bl = require("bl");


http.get(process.argv[2], (response) => {
  response.pipe(
    bl((error, data) => {
      if (error) {
        return console.error(error)
      }
      data=data.toString();
      console.log(data.length);
      console.log(data);
    }));
});
