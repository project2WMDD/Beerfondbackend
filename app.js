const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const connected = require('./db/connection.js');

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routes/auth.js');
const beerRouter = require('./routes/beer.js');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/beers', beerRouter);

// catch all errors
app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

const connectMongoAndStartServer = async () => {
  const port = process.env.PORT || 8080;
  try {
    await connected(process.env.MONGO_LINK);
    app.listen(port, () => console.log(`Listening to port: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

connectMongoAndStartServer();
