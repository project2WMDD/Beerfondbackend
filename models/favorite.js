const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const favoriteSchema = new Schema({
  beer: { type: String, required: true, maxLength: 30 },
  brewery: { type: String, required: true, maxLength: 30 },
});

const favorites = moongoose.model("favorite", favoriteSchema);
module.exports = favorites;
