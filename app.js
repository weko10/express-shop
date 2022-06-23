const express = require("express");
const bodyParser = require("body-parser");

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRouter);
app.use(adminRouter);

app.listen(8080);
