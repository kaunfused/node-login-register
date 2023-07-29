const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  join: { type: Date, default: Date.now },
});

const user_model = mongoose.model("user", user_schema);

module.exports = user_model;
