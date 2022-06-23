const router = require("express").Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/add-product" method="POST"><input type="text" name="product"><button type="submit">Submit</button><form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

module.exports = router;
