const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const { userRegister } = require("./controllers/user.controller");
const User = require("./models/User");
const user = require("./routes/user");

require("dotenv").config({ path: "./config/.env" });
connectDB();

// Parse date
app.use(express.json());
app.use('/api',user);

app.listen(process.env.PORT, (err) => {
    console.log(process.env.PORT)
    err
      ? console.log("Server connection failed", err)
      : console.log(`Server is connected on port ${process.env.PORT}`);
      
  });

  
