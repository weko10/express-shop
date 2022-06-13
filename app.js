const http = require("http");

const { requestHandler } = require("./requestHander");

const app = http.createServer();

app.on("request", requestHandler);

app.listen(8080);
