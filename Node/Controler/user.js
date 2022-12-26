const user = require("../modles/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        errer: err,
      });
    }

    let user = new user({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    user.save().then((user) => {
      req.json({
        message: "An error occured!",
      });
    });
  });
};
module.exports = {
  register,
};
