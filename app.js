const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/add-product" method="POST"><input type="text" name="product"><button type="submit">Submit</button><form>'
  );
});

app.post("/add-product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Home</h1>");
});

app.listen(8080);
