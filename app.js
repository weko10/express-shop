const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.send("<h1>My second express app</h1>");
});

app.listen(8080);
