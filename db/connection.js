const mongoose = require('mongoose');

const mongoDBConnect = (link) => {
  return mongoose.connect(link);
};

module.exports = mongoDBConnect;
