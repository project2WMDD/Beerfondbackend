const router = require("express").Router();
const suggestion = require("../controllers/suggestionController");
router.post("/", suggestion);

module.exports = router;
