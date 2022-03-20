const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://vgupta03:Beerfond@cluster0.bby2l.mongodb.net/Beerfond?retryWrites=true";

mongoose.connect(mongoDB);

module.exports = mongoose.connect(mongoDB);
