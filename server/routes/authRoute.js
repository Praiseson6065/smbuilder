const router = require('express').Router();
const {Signup,Login, Logout} = require("../handlers/authHandler")
const userVerify = require("../middleware/userVerfication")

router.post("/signup",Signup)
router.post("/login",Login)
router.get("/logout",Logout)

module.exports = router;