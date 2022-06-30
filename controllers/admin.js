const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // gets add product form page
  // path: /admin/add-product

  res.render("add-product.ejs", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // post add product form
  // path: /admin/add-product

  let newProduct = new Product(
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.imgLink
  );

  newProduct.save();

  res.redirect("/admin/add-product");
};
