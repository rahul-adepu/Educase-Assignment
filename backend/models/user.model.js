const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  companyName: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
