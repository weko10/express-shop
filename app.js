// third-party packages
const express = require("express");
const bodyParser = require("body-parser");

// custom packages
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const app = express();

// plugged in middleware
app.use(bodyParser.urlencoded({ extended: false }));

// custom middleware
app.use(shopRouter);
app.use(adminRouter);

// not found 404
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found: 404</h1>");
});

app.listen(8080);
