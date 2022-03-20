const router = require("express").Router({ mergeParams: true });
const {
  postfavorite,
  getfavorite,
} = require("../controllers/favoriteController");
router.post("/", postfavorite);
router.get("/", getfavorite);
module.exports = router;
