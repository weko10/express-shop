const router = require("express").Router();

const productsController = require("../controllers/admin");

// path: /admin/add-product
router.get("/add-product", productsController.getAddProduct);

// path: /admin/add-product
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
