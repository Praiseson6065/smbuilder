const requestSend = require('../handlers/requestHandler')
const userVerfication = require('../middleware/userVerfication')
const router = require('express').Router()
router.post("/requestsend",userVerfication,requestSend)

module.exports = router