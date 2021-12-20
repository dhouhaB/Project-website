const User = require("../models/User");

exports.userRegister = async (req, res) => {
    const newUser = new User({ ...req.body });


try {


    await newUser.save();
    res.status(202).json({ msg: "Register success" });
  } catch (err) {
    res.status(402).json({ msg: "Register failed" });
  }
};
