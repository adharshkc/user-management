const router = require("express").Router()
const { adminLogin } = require("../controllers/adminController")
const adminAuth = require("../middlewares/adminAuth")




router.post("/login", adminLogin)

router.get("/", adminAuth, (req, res)=>console.log("welcome"))


module.exports = router