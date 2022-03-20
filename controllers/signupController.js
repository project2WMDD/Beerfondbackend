const User = require("../models/User.js");

const signup = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    dob: req.body.DOB,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
  });
  newUser
    .save()
    .then((result) => {
      res.json({
        data: newUser,
        url: `/signup/${newUser._id}`,
        message: "User was created successfully",
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
module.exports = signup;
