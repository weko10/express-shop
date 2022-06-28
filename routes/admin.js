const router = require("express").Router();

const productsController = require("../controllers/products");

// path: /admin/add-product
router.get("/add-product", productsController.getAddProduct);

// path: admin/add-product
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
