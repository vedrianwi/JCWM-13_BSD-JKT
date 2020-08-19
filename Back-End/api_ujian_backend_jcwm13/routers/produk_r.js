const router = require("express").Router();

const { produk_c } = require("../controllers");

router.get("/get", produk_c.getProducts);
router.get("/get/:id", produk_c.getProductById);
router.get("/get/page/:limit/:page", produk_c.pagination);

module.exports = router;
