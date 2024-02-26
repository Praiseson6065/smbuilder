const User = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userInfo = (req,res)=>{
    const token = req.cookies.token;
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
          return res.send({ status: false });
        }else {
          const user = await User.findById(data.id);
          if (user) {
            return res.send({ status: true, user: user });
          }else return res.send({ status: false });
        }
      });
}
module.exports  = userInfo
