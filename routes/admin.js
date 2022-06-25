const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// path: /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.render(path.join(__dirname, "..", "views", "add-product.ejs"));
});

// path: admin/add-product
router.post("/add-product", (req, res, next) => {
  let newProduct = req.body;

  // update products file
  fs.readFile("./products.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedData = JSON.parse(data);
    const productList = parsedData.productList;

    // push new product to list
    productList.push(JSON.parse(JSON.stringify(newProduct)));

    // rewrite data to file
    fs.writeFile(
      "./products.json",
      JSON.stringify({ productList: productList }, null, 2),
      err => {
        if (err) {
          console.error(err);
        } else {
          console.log("Successfully added product:", newProduct);
        }
      }
    );
  });
  res.redirect("/admin/add-product");
});

module.exports = router;
