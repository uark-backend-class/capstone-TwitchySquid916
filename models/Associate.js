const mongoose = require("mongoose");
const Lead = require("./Lead");

// Create our student schema
const associateSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  team: String,
  task: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lead"
  }
});

// Create a model based on the schema and export it
const Associate = mongoose.model("associate", associateSchema);

module.exports = Associate;