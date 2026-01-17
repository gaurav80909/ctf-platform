const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  flag: String,
  points: Number,
  category: String
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
