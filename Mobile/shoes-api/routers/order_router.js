const router = require("express").Router();

const { order_c } = require("../controllers");

router.post("/add", order_c.addToCart);
router.get("/cart/:id", order_c.getCartData);
router.patch("/edit/:id", order_c.editQtyInCart);
router.delete("/delete/:id", order_c.deteleProductInCart);
router.get("/checkout/:on", order_c.checkOut);

module.exports = router;
