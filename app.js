// core packages
const path = require("path");

// third-party packages
const express = require("express");
const bodyParser = require("body-parser");

// custom packages
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const app = express();

// setup express app
app.set("view engine", "ejs");

// setup middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// custom middleware
app.use(shopRouter);
app.use("/admin", adminRouter);

// not found 404
app.use((req, res, next) => {
  res.status(404).render(path.join(__dirname, "views", "404.ejs"), {
    pageTitle: "Page Not Found",
  });
});

app.listen(8080);
