const mongoose = require("mongoose");

const LoginModel = mongoose.model("Login", new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}));

module.exports = LoginModel;
