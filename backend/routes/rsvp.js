const express = require("express");
const { submitRSVP } = require("../controllers/rsvpController");

const router = express.Router();

router.post("/", submitRSVP);

module.exports = router;
