//require("dotenv").config({ path: "./.env" });


require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const passport = require ('passport')
const connectDB = require("./config/connectDB");
//const { userRegister } = require("./controllers/user.controller");
//const User = require("./models/User");
const user = require("./routes/user");
const admin =require ("./routes/admin")
const job = require("./routes/job");
const posts = require("./routes/posts");
const cors = require("cors");

connectDB();

app.use(cors({
origin: '*'
}));
/// Parse date
app.use(express.json());
app.use(passport.initialize())
app.use('/api/user',user);
app.use("/api/job", job);
app.use ("/", admin);
app.use("/api/post", posts);



app.listen(process.env.PORT, (err) => {
    console.log(process.env.PORT)
    err
      ? console.log("Server connection failed", err)
      : console.log(`Server is connected on port ${process.env.PORT}`);
      
  });

  
