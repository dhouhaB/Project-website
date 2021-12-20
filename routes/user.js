const express = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");
const Router = express.Router();
Router.post("/register", userRegister);
module.exports = Router;



