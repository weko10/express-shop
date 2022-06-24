const router = require("express").Router();
const path = require("path");

router.get("/", (req, res, next) => {
  res.render(path.join(__dirname, "..", "views", "shop.ejs"));
});

module.exports = router;
