const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load user model
const Employee = require("../../models/Employee");
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) =>
    res.json({
        msg: "Employee works"
    })
);

// @route   POST api/users/regsiter
// @desc    Register a user
// @access  Public
router.post("/new", (req, res) => {
    
});


module.exports = router;