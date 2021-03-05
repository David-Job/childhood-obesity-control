const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
const {user} = db;
const authConfig = require("../config/auth.config");

exports.signIn = function (req, res) {
  let { email, password } = req.body;

  user
    .findOne({ where: { email: email } })
    .then(async (foundUser) => {
      console.log(foundUser);

      if (!foundUser) {
        res.status(404).json({ msg: "User not found!" });
      } else {
        console.log(foundUser.password);

        let check = await bcrypt.compare(password, foundUser.password);

        if (check) {
          let token = jwt.sign({ email: email }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });

          res.json({
            email: email,
            token: token,
          });
        } else {
          res.status(401).json({ msg: "Password doesn't match" });
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
