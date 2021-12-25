const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
    },
  
    email: {
      type: String,
    },
  
    adress: {
      type: String,
    },
  
    password: {
      type: String,
    },
    role : {
      type : String,
      enum : ["user", "admin"],
      default : "user",
  },
    


    
  });
  module.exports = User = mongoose.model("user", userSchema);