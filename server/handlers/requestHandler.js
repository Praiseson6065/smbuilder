const jwt = require('jsonwebtoken')
const requestSend = (req,res)=>{
    const decodedtoken =  jwt.verify(req.cookies.token,process.env.JWT_SECRET)
    
    res.send(decodedtoken)
    
}
module.exports = requestSend