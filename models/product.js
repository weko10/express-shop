const fs = require("fs").promises;

module.exports = class Product {
  constructor(name, price, description, imgLink) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgLink = imgLink;
  }

  static getAllProducts() {
    return fs.readFile("./products.json", "utf-8").then(data => {
      // data => list of products
      return JSON.parse(data);
    });
  }

  save() {
    // update products file

    fs.readFile("./products.json", "utf-8")
      .then(data => {
        const productList = JSON.parse(data);

        // push new product to list
        productList.push(this);

        fs.writeFile("./products.json", JSON.stringify(productList, null, 2));
      })
      .then(() => console.log("Success!"));
  }
};
