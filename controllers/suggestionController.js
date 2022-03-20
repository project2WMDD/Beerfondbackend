const Suggestion = require("../models/prefrences.js");

const suggestion = (req, res) => {
  Suggestion.find(req.body)
    .then((results) => {
      console.log(results);
    })

    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

module.exports = suggestion;
