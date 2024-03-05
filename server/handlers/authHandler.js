const blacklist = require("../models/blacklist");
const User = require("../models/user");
const createSecretToken = require("../utils/secretToken");
const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
  try {
    const { email, password, username, name } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User Already Exist" });
    }
    const user = await User.create({ email, password, username, name });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).send({ message: "User Succesfully Signed ", user });
  } catch (error) {
    console.error(error);
  }
};
const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if (!user) {
      return res.send({ message: "User doesn't Exist" });
    }
    const cmp = await bcrypt.compare(password, user.password);
    if (!cmp) {
      return res.send({ message: "Incorrect Password or email" });
    }
    const token = createSecretToken(user._id);
    res.status(201).cookie("token", token).send({success:true, message: "User Logged in Successfully",user });
  } catch (error) {
    console.error(error);
  }
};
const Logout = async (req,res)=>{
  const token = req.cookies.token
  const state = await blacklist.findOne({"token":token})
  console.log(!state)
  if(!state){
      blacklist.create({token})
  }
  
  res.clearCookie("token")
  res.send({"message":true})
}
module.exports = {Signup,Login,Logout};
