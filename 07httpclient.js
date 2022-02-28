const http = require("http");

const endpoint = process.argv[2];

http.get(endpoint, (response) => {
  response.setEncoding("utf8");

  response.on("error", (error) => {
    console.error(error);
  });

  response.on("data", (data) => {
    console.log(data);
  });
});
