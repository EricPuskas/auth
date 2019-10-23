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
          return res.status(401).json({ error: "Invalid credentials" });
        }
      });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again later!" });
  }
};

module.exports = exports;
