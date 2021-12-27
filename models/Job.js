const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    titre: {
      type: String,
    },
  
    reference: {
      type: String,
    },
  
    description: {
      type: String,
    },
  
    lieu: {
      type: String,
    },
    exigences:
    {
        type:String,
    },
    contact: {
        type: String,
      },
      

    
  });
  module.exports =mongoose.model("Job", jobSchema);