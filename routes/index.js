const router = require("express").Router({ mergeParams: true });

const authrouter = require("./auth.js");
const signuprouter = require("./signup.js");
const suggestionrouter = require("./suggestion.js");
const favoriterouter = require("./favorites.js");
const bookingrouter = require("./restaurantBooking.js");

router.use("/login", authrouter);
router.use("/signup", signuprouter);
router.use("/suggestion", suggestionrouter);
router.use("/favorite", favoriterouter);
router.use("/booking", bookingrouter);

module.exports = router;
