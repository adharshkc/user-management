const router = require("express").Router();
const { registerUser, loginUser, getAlUser, addUser } = require("../controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAlUser)
router.post("/addUser", addUser)

module.exports = router;
