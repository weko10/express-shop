const router = require("express").Router();
const productsController = require("../controllers/products");

router.get("/", productsController.getHome);

module.exports = router;
