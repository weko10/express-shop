// third-party packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// custom packages
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const app = express();

// setup middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// custom middleware
app.use(shopRouter);
app.use("/admin", adminRouter);

// not found 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8080);
