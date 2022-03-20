const router = require('express').Router();
const { createBeer, getBeer, getAllBeers } = require('../controllers/beerController');

router.route('/:id').get(getBeer);
router.route('/').get(getAllBeers).post(createBeer);


module.exports = router;
