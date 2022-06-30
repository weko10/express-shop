const Product = require("../models/product");

exports.getHome = (req, res, next) => {
  // get home page
  // path: /

  Product.getAllProducts().then(productList => {
    res.render("shop/home.ejs", {
      pageTitle: "My Shop",
      path: "/",
      productList: productList,
    });
  });
};
