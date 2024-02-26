const mongoose = require("mongoose")

const blackListTokens = new mongoose.Schema({
    token:{
        type:String,
        unique:true,
        required:true
    },
    createdAt: {
        type: Date,
        default: new Date(),
      }
})
module.exports =    mongoose.model("BlackListTokens",blackListTokens);