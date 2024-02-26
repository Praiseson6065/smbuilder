const router = require('express').Router();
const userVerfication = require('../middleware/userVerfication');
const userInfo = require('../handlers/infoHandlers')
router.get("/profile",userVerfication,userInfo)
module.exports = router;