const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/auth");

// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post("/login", loginUser);

// @route   POST api/auth/register
// @desc    Register User
// @access  Public
router.post("/register", registerUser);

module.exports = router;
