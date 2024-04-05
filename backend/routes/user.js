const router = require("express").Router();
const { registerUser, loginUser, getAlUser, addUser, editUser, getUser } = require("../controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAlUser)
router.post("/addUser", addUser)
router.get("/getUser/:id", getUser)
router.post("/editUser/:id", editUser)

module.exports = router;
