const fs = require("fs");

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
};

exports.getHome = (req, res, next) => {
  // get home page
  // path: /

  fs.readFile("./products.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedData = JSON.parse(data);
    res.render("shop.ejs", {
      pageTitle: "My Shop",
      path: "/",
      productList: parsedData.productList,
    });
  });
};
