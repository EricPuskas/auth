const bcrypt = require("bcryptjs");
const mockDB = require("../database/mockDB");

exports.loginUser = async (req, res) => {
  try {
    let foundUser = mockDB.filter(user => user.email === req.body.email)[0];
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password).then(isMatch => {
        if (isMatch) {
          return res.json({
            userId: foundUser.userID,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName
          });
        } else {
          return res.status(401).json("Invalid credentials");
        }
      });
    } else {
      return res.status(401).json("Invalid credentials");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json("Something went wrong. Please try again later!");
  }
};

exports.registerUser = async (req, res) => {
  try {
    let newUser = {
      userId: 123124,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    mockDB.push(newUser);
    res.json(mockDB);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json("Something went wrong. Please try again later!");
  }
};
module.exports = exports;
