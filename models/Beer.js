const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  beer_ID: { type: String },
  beer_name: { type: String, required: true },
  beer_link: { type: String },
  beer_attr: { type: String, required: true },
  beer_pic: { type: String, required: true },
  beer_desc: { type: String, required: true },
  beer_brewer_: { type: String },
  beer_brewer: { type: String },
  alcohol_percent: { type: String, required: true }, // Light 1, Medium-Light, Medium-High, High 4
  suggestion_food: [{ type: String }],
  flavour: [{ type: Array }],
});

const Beer = mongoose.model('Beer', BeerSchema);
module.exports = Beer;
