const User = require('../models/User.js');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = user.generateJWT();
    res.status(201).json({ user, token: token });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user.' });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error('Please enter email or password');
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const correctPassword = await user.checkPassword(password);
  if (!correctPassword) {
    throw new Error('Invalid email or password');
  }
  const token = user.generateJWT();
  res.status(200).json({ user, token });
};

module.exports = { createUser, loginUser };
