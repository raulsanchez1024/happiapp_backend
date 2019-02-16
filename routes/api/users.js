const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load user model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    msg: "User works"
  })
);

// @route   POST api/users/regsiter
// @desc    Register a user
// @access  Public
router.post("/register", (req, res) => {

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        console.log("User already exists");
      } else {
        const newUser = new User({
          name: req.body.name,
          companyname: req.body.companyname,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch();
});

module.exports = router;
