const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getAlUser,
  addUser,
  editUser,
  getUser,
  deleteUser,
  getHome,
  getAdmin
} = require("../controllers");
const userAuth = require("../middlewares/userAuth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAlUser);
router.post("/addUser", addUser);
router.get("/home", userAuth, getHome);
router.get("/admin", userAuth, getAdmin);
router.get("/getUser/:id", getUser);
router.post("/editUser/:id", editUser);
router.get("/deleteUser/:id", deleteUser);

module.exports = router;
