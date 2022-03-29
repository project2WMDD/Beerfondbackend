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
    res.status(500).json({ message: 'Please enter email or password' });

  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(500).json({ message: 'Invalid email or password' });
   
  }
  const correctPassword = await user.checkPassword(password);
  if (!correctPassword) {
    res.status(500).json({ message: 'Invalid email or password' });
  }
  const token = user.generateJWT();
  res.status(200).json({ user, token });
};

module.exports = { createUser, loginUser };
