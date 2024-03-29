const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ msg: "Bad credentiel" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ msg: "Bad credentiel" });

  try {
    const payload = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      adress: user.adress,
    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    res.status(200).json({ token: `Bearer ${token}` });
    res.redirect("/")
  } catch (err) {
    res.status(400).json({ errors: err });
  }
};
exports.editUser = async (req, res) => {
  let { _id } = req.params;
  try {
    await User.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
    res.status(203).json({ msg: "User updated successfully" });
  } catch (error) {
    console.log("User update failed", error);
    res.status(403).json({ msg: "User update failed" });
  }
};
exports.deleteUser = async (req, res) => {
  const { _id } = req.params;

  try {
    await User.findByIdAndDelete({ _id });
    res.status(200).json({ msg: "User deleted with success" });
  } catch (error) {
    console.error("User delete failed", error);
    res.status(402).json({ msg: "User delete failed" });
  }
};
exports.getUsers = async (req, res) => {
  const users = await User.find();

  try {
    res.status(202).json({users});
  } catch (error) {
    console.log("get users failed", error);
    res.status(402).json({msg: "Fetch users failed"});
  }
};
exports.getUserById = async (req, res) => {
  const { _id } = req.params;
  const user = await User.findById(_id).populate("posts")

  try {
    await
    res.status(201).json({ msg : "Get user success", user});
  } catch (error) {
    console.log(error);
    res.status(401).json({msg: "Get user failed"});
  }
};