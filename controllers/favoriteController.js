const Favorite = require("../models/favorite.js");

const getfavorite = (req, res) => {
  Favorite.find(req.body)
    .then((results) => {
      console.log(results);
    })

    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

const postfavorite = (req, res) => {
  let newFavorite = new Favorite({
    beer: req.body.beer,
    brewery: req.body.brewery,
  });
  newFavorite
    .save()
    .then((results) => {
      res.json({
        data: newFavorite,
        url: `/favorite/${newFavorite._id}`,
        message: "User was created successfully",
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = { getfavorite, postfavorite };
