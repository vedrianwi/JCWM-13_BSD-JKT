const router = require("express").Router();
const { verifyToken } = require("../helpers/jwt");

const { user_c } = require("../controllers");

router.post("/login", user_c.login);
router.post("/register", user_c.register);
router.post("/keeplogin", verifyToken, user_c.keeplogin);

module.exports = router;
