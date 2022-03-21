const router = require('express').Router();
const { createBooking, getBooking, getAllBookings } = require('../controllers/bookingController');

router.route('/:id').get(getBooking);
router.route('/').get(getAllBookings).post(createBooking);


module.exports = router;
