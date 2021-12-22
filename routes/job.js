const express = require("express");
const { editJob, deleteJob ,getJob,JobAdding } = require("../controllers/job.controller");


const Router = express.Router();
Router.post("/addjob", JobAdding );


Router.put("/:_id", editJob);

Router.delete("/:_id", deleteJob);

Router.get("/jobs", getJob);

module.exports = Router;

