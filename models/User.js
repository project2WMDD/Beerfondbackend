const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  email: { type: String, required: true, maxLength: 30 },
  mobile: { type: String, required: true },
  dob: { type: Date, default: 1 },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
