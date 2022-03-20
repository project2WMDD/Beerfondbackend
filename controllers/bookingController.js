const Bookings = require("../models/booking.js");

const postbooking = (req, res) => {
  const newbook = new Bookings({
    people: req.body.people,
    date: req.body.date,
    time: req.body.time,
  });
  newbook
    .save()
    .then((result) => {
      res.json({
        data: newbook,
        url: `/booking/${newbook._id}`,
        message: "Book was created successfully",
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = postbooking;
