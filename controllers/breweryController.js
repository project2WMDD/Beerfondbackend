const Brewery = require('../models/Brewery.js');

const createBrewery = async (req, res) => {
  try {
    const brewery = await Brewery.create(req.body);
    res.status(201).json({ brewery });
  } catch (error) {
    res.status(500).json({ message: 'Error creating brewery.' });
    console.log(error);
  }
};

const getBrewery = async (req, res) => {
  try {
    const brewery = await Brewery.findById(req.params.id).populate({
      path: 'beer_menu'
    });
    res.status(200).json({brewery});
  } catch (err) {
    res.status(500).json({message: "Error get breweries"});
  }
};

const getAllBreweries = async (req, res) => {
  const queryObj = { ...req.query };

  try {
    const breweries = await Brewery.find(queryObj);
    res.status(200).json( breweries);
  } catch (error) {}
};

module.exports = { createBrewery, getBrewery, getAllBreweries };
