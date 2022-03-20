const Beer = require('../models/Beer.js');

const createBeer = async (req, res) => {
  try {
    const beer = await Beer.create(req.body);
    res.status(201).json({ beer });
  } catch (error) {
    res.status(500).json({ message: 'Error creating beer.' });
    console.log(error);
  }
};

const getBeer = async (req, res) => {
  try {
    const beer = await Beer.findById(req.params.id);
    res.status(200).json({
      beer,
    });
  } catch (err) {}
};

const getAllBeers = async (req, res) => {
  const queryObj = { ...req.query };
  const excludedFields = ['page', 'limit'];
  excludedFields.forEach((field) => delete queryObj[field]);

  try {
    const beers = await Beer.find(queryObj);
    res.status(200).json({ beers });
  } catch (error) {}
};

module.exports = { createBeer, getBeer, getAllBeers };
