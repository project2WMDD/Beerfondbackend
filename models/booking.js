const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const bookingSchema = new Schema({
  people: { type: Number, required: true, maxLength: 30 },
  date: { type: String, required: true },
  time: { type: String },
});

const bookings = moongoose.model("booking", bookingSchema);
module.exports = bookings;
