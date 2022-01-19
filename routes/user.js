const express = require("express");
const { userRegister, userLogin ,editUser,getUserById,deleteUser,getUsers,} = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");
const  {registerRules,validator} = require ("../middlewares/validator");
const Router = express.Router();
Router.post("/register",registerRules(), validator, userRegister);
Router.post("/login", userLogin);
Router.put("/:_id", editUser);
Router.get("/currentUser", isAuth(), (req, res) => res.send(req.user));
Router.delete("/:_id", deleteUser);
Router.get('/getUserById/:_id',isAuth(), getUserById);
Router.delete("/:_id", deleteUser);

Router.get("/users", getUsers);

module.exports = Router;



 