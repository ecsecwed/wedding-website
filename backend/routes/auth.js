// --- STEP 4: routes/auth.js ---
const express = require("express");
const { login } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);

module.exports = router;
