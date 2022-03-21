const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const Schema = moongoose.Schema;

// edit later
const BookingSchema = new Schema({
  people: { type: Number, required: true, maxLength: 30 },
  date: { type: Date, required: true },
  brewery: {
    type: mongoose.Schema.ObjectId,
    ref: "Brewery",
    required: [true, "add a brewery id"] 
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "add a user id"]
  }
});

const Booking = moongoose.model('Booking', BookingSchema);
module.exports = Booking;
