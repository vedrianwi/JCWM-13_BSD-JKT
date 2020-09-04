const router = require("express").Router();

// import controller
const { produk_c } = require("../controllers");

// create router
router.get("/get", produk_c.getAllProducts);
router.get("/get/:id", produk_c.getProductsById);
router.get("/carousel", produk_c.getProductsCarousel);

// export router
module.exports = router;
