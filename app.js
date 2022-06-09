let http = require("http");

let app = http
  .createServer((req, res) => {
    res.write("Hello, world!");
    res.end();
  })
  .listen(8080);
