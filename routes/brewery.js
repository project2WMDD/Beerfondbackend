const router = require('express').Router();
const { createBrewery, getBrewery, getAllBreweries } = require('../controllers/breweryController');

router.route('/:id').get(getBrewery);
router.route('/').get(getAllBreweries).post(createBrewery);


module.exports = router;
