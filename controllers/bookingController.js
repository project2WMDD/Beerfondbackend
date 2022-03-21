const Booking = require('../models/Booking.js');

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking.' });
    console.log(error);
  }
};

const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json({
      beer,
    });
  } catch (err) {}
};

const getAllBookings = async (req, res) => {
  const queryObj = { ...req.query };

  try {
    const booking = await Booking.find(queryObj);
    res.status(200).json({ booking });
  } catch (error) {}
};

module.exports = { createBooking, getBooking, getAllBookings };
