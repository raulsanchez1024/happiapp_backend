const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const employees = require("./routes/api/employees");

const app = express();

// Body pasrer middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Use routes
app.use("/api/users", users);
app.use("/api/employees", employees);

app.get("/", (req, res) => {
    res.send("Hello world");
});

const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`Server running on port ${port}`));


