const router = require("express").Router()
const { adminLogin, adminPage, getUsers, deleteUser } = require("../controllers/adminController")
const adminAuth = require("../middlewares/adminAuth")




router.post("/login", adminLogin)

router.get("/", adminAuth, adminPage)
router.get("/users", adminAuth, getUsers)
router.delete('/user-delete',adminAuth, deleteUser)


module.exports = router