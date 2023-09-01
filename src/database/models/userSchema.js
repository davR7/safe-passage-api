const mongoose = require("../index");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please enter fullname"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter email"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
