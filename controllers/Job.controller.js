const Job = require("../models/Job");

exports.JobAdding = async (req, res) => {
  const newJob = new Job({ ...req.body });
  const reference = newJob.reference;
  const job = await Job.findOne({ reference });

  if (job) {
    return res.status(401).json({ msg: "user already exist" });
  }

  try {
    await newJob.save();
    res.status(202).json({ msg: "Register success" });
  } catch (err) {
    res.status(402).json({ msg: "Register failed" });
  }
};

exports.editJob = async (req, res) => {
  let { _id } = req.params;
  try {
    await Job.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
    res.status(203).json({ msg: "Job add updated successfully" });
  } catch (error) {
    console.log("User update failed", error);
    res.status(403).json({ msg: "Job add update failed" });
  }
};
exports.deleteJob = async (req, res) => {
  const { _id } = req.params;

  try {
    await Job.findByIdAndDelete({ _id });
    res.status(200).json({ msg: "Job add  deleted with success" });
  } catch (error) {
    console.error("User delete failed", error);
    res.status(402).json({ msg: "Job delete failed" });
  }
};
exports.getJob = async (req, res) => {
  const jobs = await Job.find();

  try {
    res.status(202).json({ jobs });
  } catch (error) {
    console.log("get Job add failed", error);
    res.status(402).json({ msg: "Fetch job add failed" });
  }
};
