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

app.listen(8080);
