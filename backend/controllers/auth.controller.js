const bcrypt = require("bcrypt");
const db = require("../models");
const jst = require("jsonwebtoken");
const authConfig = require("../config/authConfig");
const {} = db;


module.exports = {
  signIn(req, res) {
    let { username, password } = req.body;
    console.log(req.body);
    Usuario.findOne({
      where: {
        username: username,
      },
    })
      .then(async (user) => {
        console.log(user);
        if (!user) {
          res.status(404).json({ msg: "User not found" });
        } else {
          console.log(user.password);
          let check = await bcrypt.compare(password, user.password);
          if (check) {
            let token = jst.sign({ usuario: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });
            res.json({
              usuario: user,
              token: token,
            });
          } else {
            res.status(401).json({ msg: "password doesnt match" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
