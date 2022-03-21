const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  email: { type: String, required: true, maxLength: 30 },
  mobile: { type: String, required: true },
  dob: { type: Date, default: 1 },
  password: { type: String, required: true },
});
UserSchema.pre('save', async function () {
  const saltValue = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, saltValue);
});
UserSchema.methods.generateJWT = function () {
  return jwt.sign({ userID: this._id }, 'beerFondIsAwesome');
};
UserSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
