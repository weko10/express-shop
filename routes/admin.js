const router = require("express").Router();
const path = require("path");

// path: /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.render(path.join(__dirname, "..", "views", "add-product.ejs"));
});

// path: admin/add-product
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin/add-product");
});

module.exports = router;
