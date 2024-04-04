const router = require("express").Router();
const { registerUser, loginUser, getAlUser } = require("../controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAlUser)

module.exports = router;
