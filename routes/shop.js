const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Home</h1><a href=/add-product>Product</a>");
});

module.exports = router;