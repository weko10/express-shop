const fs = require("fs").promises;

module.exports = class Product {
  constructor(title, price, description, imgLink) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imgLink = imgLink;
  }

  static getAllProducts() {
    return fs.readFile("./products.json", "utf-8").then(data => {
      return JSON.parse(data).productList;
    });
  }

  save() {
    // update products file

    fs.readFile("./products.json", "utf-8")
      .then(data => {
        const parsedData = JSON.parse(data);
        const productList = parsedData.productList;

        // push new product to list
        productList.push(JSON.parse(JSON.stringify(this)));

        fs.writeFile(
          "./products.json",
          JSON.stringify({ productList: productList }, null, 2)
        );
      })
      .then(() => console.log("Success!"));

    // (err, data) => {
    //   const parsedData = JSON.parse(data);
    //   const productList = parsedData.productList;

    //   // push new product to list
    //   productList.push(JSON.parse(JSON.stringify(this)));

    //   // rewrite data to file
    //   fs.writeFile(
    //     "./products.json",
    //     JSON.stringify({ productList: productList }, null, 2),
    //     err => {
    //       if (err) {
    //         console.error(err);
    //       } else {
    //         console.log("Successfully added product:", newProduct);
    //       }
    //     }
    //   );
    // });
  }
};
