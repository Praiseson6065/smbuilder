const blacklist = require("../models/blacklist");
const User = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerfication = async (req, res, next) => {
  const token = req.cookies.token;
  const state = await blacklist.findOne({"token":token})
  if (state){
    return res.send({ msg:"UnAuthorizedToken",status: false });
  }
  if (!token) {
    return res.send({ status: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.send({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        next();
      }  else return res.send({ status: false });
    }
  });
};
module.exports = userVerfication;