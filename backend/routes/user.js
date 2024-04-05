const router = require("express").Router();
const { registerUser, loginUser, getAlUser, addUser, editUser, getUser, deleteUser } = require("../controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAlUser)
router.post("/addUser", addUser)
router.get("/getUser/:id", getUser)
router.post("/editUser/:id", editUser)
router.get("/deleteUser/:id", deleteUser )

module.exports = router;
