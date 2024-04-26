const router = require("express").Router()
const { adminLogin, adminPage } = require("../controllers/adminController")
const adminAuth = require("../middlewares/adminAuth")




router.post("/login", adminLogin)

router.get("/", adminAuth, adminPage)


module.exports = router