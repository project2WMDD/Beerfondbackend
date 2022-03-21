const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
  brewer_ID: { type: String, required: true, maxLength: 30 },
  brewer_name: { type: String, required: true, maxLength: 30 },
  brewer_link: { type: String, required: true },
  brewer_location: { type: String },
  brewer_logo_url: { type: String },
  beer_address: { type: String, required: true },
  beer_contact: [{ type: String, required: true }],
  beer_menu: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Beer',
    },
  ],
});

const Brewery = mongoose.model('Brewery', BrewerySchema);
module.exports = Brewery;
