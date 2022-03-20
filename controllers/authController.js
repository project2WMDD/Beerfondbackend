const User = require("../models/User.js");

const loginuser = (req, res) => {
  User.findOne({
    name: req.body.name,
  })

    .then((user) => {
      console.log(req.url);
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }
      if (req.body.password == user.password) {
        return res.status(200).json({
          data: user,
          url: `/signin/${user._id}`,
          message: "User was authenticataed successfully",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

module.exports = loginuser;
