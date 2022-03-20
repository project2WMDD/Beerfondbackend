const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
  beer_ID: { type: String, required: true, maxLength: 30 },
  beer_name: { type: String, required: true, maxLength: 30 },
  beer_link: { type: String, required: true },
  beer_type: { type: String },
  beer_attr: { type: String },
  beer_pic: { type: String, required: true },
  beer_descr: { type: String, required: true },
  beer_brewer_ID: { type: String, required: true },
  beer_brewer: { type: String, required: true },
});

const Suggestions = mongoose.model("beers", SuggestionSchema);
module.exports = Suggestions;
