const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    unique: true,
    required: "Username is required",
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    required: "Password is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  isActive: { type: Boolean, default: false },
});

const model = mongoose.model("User", User);
module.exports = model;
