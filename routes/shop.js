const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res, next) => {
  fs.readFile("./products.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedData = JSON.parse(data);
    res.render(path.join(__dirname, "..", "views", "shop.ejs"), {
      productList: parsedData.productList,
    });
  });
});

module.exports = router;
