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
  try {
    const user = await User.findOne({ email });
    const correctPassword = await user.checkPassword(password);
    if (!user || !correctPassword) {
      res.status(500).json({ message: 'Invalid email or password' });
    } else {
      const token = user.generateJWT();
      res.status(200).json({ user, token });
    }
  } catch (err) {
    res.status(500).json({ message: 'Invalid email or password' });
  }
};

module.exports = { createUser, loginUser };
