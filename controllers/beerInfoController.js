const Suggestion = require("../models/suggestions.js");
const Brewries = require("../models/brewries.js");

const getbeerInfo = (req, res) => {
  Brewries.find(req.body)
    .then((results) => {
      console.log(results);
    })

    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
