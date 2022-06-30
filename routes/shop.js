const router = require("express").Router();
const productsController = require("../controllers/products");

// index page
router.get("/", productsController.getHome);

// shows list of products (e.g. redirected to after using search box)
router.get("/products", productsController.getHome);

// shows user cart
router.get("cart", () => {
  return;
});

// checkout page (e.g. payment, address)
router.get("checkout", () => {
  return;
});

module.exports = router;
