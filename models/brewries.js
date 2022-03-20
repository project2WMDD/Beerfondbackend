const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewriesSchema = new Schema({
  brewer_ID: { type: String, required: true, maxLength: 30 },
  brewer_name: { type: String, required: true, maxLength: 30 },
  brewer_link: { type: String, required: true },
  brewer_location: { type: String },
  brewer_logo_url: { type: String },
  beer_address: { type: String, required: true },
  beer_contact: [{ type: String, required: true }],
});

const brewries = mongoose.model("beers", brewriesSchema);
module.exports = brewries;
