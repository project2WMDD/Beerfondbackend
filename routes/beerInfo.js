const router = require("express").Router();
const info = require("../controllers/beerInfoController");
router.post("/", info);

module.exports = router;
