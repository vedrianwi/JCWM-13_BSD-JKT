const router = require("express").Router();
const { upload } = require("../helpers/muler");

const { transaction_c } = require("../controllers");

const DESTINATION = "./public/images";
const uploader = upload(DESTINATION);

router.post("/add", transaction_c.addPayment);
router.patch("/upload/:id", uploader, transaction_c.uploadReceipt);

module.exports = router;
