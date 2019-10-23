const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/auth");

// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post("/login", loginUser);

module.exports = router;
