const express = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();
Router.post("/register", userRegister);
Router.post("/login", userLogin);

Router.get("/currentUser", isAuth(), (req, res) => res.send(req.user));

module.exports = Router;



