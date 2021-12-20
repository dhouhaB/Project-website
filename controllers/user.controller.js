const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.userRegister = async (req, res) => {



  const newUser = new User({ ...req.body });
  const email = newUser.email;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(401).json({ msg: "user already exist" });
  }

 

/*

console.log(req.body);
const user = req.body;
const password = user.password;

*/

try {
  const salt = await bcrypt.genSalt(10);
 
  const hash = await bcrypt.hash(newUser.password, salt);


  newUser.password = hash;



    await newUser.save();
    res.status(202).json({ msg: "Register success" });
  } catch (err) {
    res.status(402).json({ msg: "Register failed" });
  }
};
